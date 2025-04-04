"use client";

import Link from 'next/link';
import { Container } from './styles';
import Navigation from '../navigation/navigation';
import 'hamburgers/dist/hamburgers.css';
import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import Props from './typo';
import { fetchNavigation } from '@/utils/index';
import { MenuItem } from '@/services/userService';
import { useSettings } from '@/context/settings';
import { debounce } from "lodash";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Header = ({ scrollPosition }: Props) => {
  const [expanded, setExpand] = useState<boolean>(false);
  const [nav, setNavigation] = useState<{ lateral?: MenuItem[], main?: MenuItem[] }>({});
  const { settings } = useSettings();

  // Collapse menu on scroll
  useEffect(() => {
    if (scrollPosition) {
      setExpand(false);
    }
  }, [scrollPosition]);

  // Debounced resize handler
  const handleResize = useCallback(
    debounce(() => setExpand(false), 200),
    []
  );

  // Load main and lateral navigation
  const loadNavigation = useCallback(async () => {
    try {
      const [main, lateral] = await Promise.all([
        fetchNavigation('main'),
        fetchNavigation('lateral'),
      ]);

      setNavigation({ main, lateral });
    } catch (error) {
      console.error('Error loading navigation:', error);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    loadNavigation();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, loadNavigation]);

  return (
    <Container
      className={classNames("w-full fixed top-0 left-0 z-50 header", {
        'scrolled': scrollPosition > 0,
      })}
    >
      <div
        className={classNames("container m-auto", {
          'pt-3 pb-3': scrollPosition > 0,
          'pt-6 pb-6': scrollPosition <= 0,
        })}
      >
        <div className="flex justify-between items-center gap-6">
          {settings?.custom_logo && (
            <div className="logo">
              <Link href="/">
                <LazyLoadImage width={226} src={settings.custom_logo} alt={settings.blog_info.name} />
              </Link>
            </div>
          )}

          {nav.main && (
            <Navigation
              isScrolling={scrollPosition}
              className="hidden xl:flex flex-1"
              ListClassName="gap-6 2xl:gap-20 justify-center items-center"
              data={nav.main}
            />
          )}

          <div className="ms-auto flex items-center justify-end gap-6">
            {nav.lateral && (
              <Navigation
                ListClassName="gap-6 justify-center items-center"
                data={nav.lateral}
              />
            )}

            <span className="hamburger-wrapper block xl:hidden">
              <button
                className={classNames("hamburger hamburger--collapse", {
                  'is-active': expanded,
                })}
                onClick={() => setExpand(!expanded)}
                type="button"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </span>
          </div>
        </div>
      </div>

      {nav.main && (
        <Navigation
          className={classNames({
            'block': expanded,
            'hidden': !expanded,
          })}
          mobile
          ListClassName="gap-6"
          data={nav.main}
        />
      )}
    </Container>
  );
};

export default Header;

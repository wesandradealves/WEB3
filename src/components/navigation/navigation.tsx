"use client";

import Link from 'next/link';
import { Container, List, ListItem, Submenu } from './styles';
import { Props } from './typo';
import { navigation } from './typo';
import Button from '../button/button';
import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

export default function Navigation(Props: Props) {
    const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});
    const navRef = useRef<HTMLDivElement>(null);

    const toggleExpand = (index: number) => {
        setExpandedItems(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, url: string) => {
        if (url === '#') {
            event.preventDefault();
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setExpandedItems({});
        }
    };

    const handleResize = () => {
        setExpandedItems({});
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('resize', handleResize);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container role='navigation' 
            className={classNames(`navigation ${Props.className}`, { '--mobile h-full w-full fixed top-0 z-1000': !!Props?.mobile })} ref={navRef}>
            <List 
                className={classNames(`list w-full flex ${Props?.ListClassName}`, {
                    'justify-center items-center': !Props?.mobile,
                    'container m-auto flex-col': Props?.mobile
                })}>
                {Props.data && Props.data.map(function(row: navigation, i: number){
                return (
                <ListItem className={classNames(' flex flex-col', row?.className, { 
                    'expanded': expandedItems[i],
                    [Props?.ListClassName || '']: Props.mobile
                })} key={i}>
                    {row?.type && row.type == 'button' ? <Button className={row?.btnClass} href={row.url} tag={'a'}>{row.title}</Button> : <Link className='flex items-center gap-3' title={row.title} href={row.url} onClick={(event) => handleLinkClick(event, row.url)}>
                        {row.title}
 
                        {row?.below && row.below.length && <i className="fa-solid fa-angle-down" onClick={() => toggleExpand(i)}></i>}
                    </Link>}
                    {row?.below && row.below.length && <Submenu className={expandedItems[i] ? 'block' : 'hidden'}>
                        <List 
                            className={classNames('list flex flex-col', { 
                                [Props?.ListClassName || '']: Props.mobile
                            })}>
                            {row.below.map(function(below: navigation, j: number){
                                return (
                                    <ListItem key={j}>
                                        <Link title={below.title} href={below.url} onClick={(event) => handleLinkClick(event, below.url)}>
                                            {below.title}
                                        </Link>
                                    </ListItem>
                                    );
                                }) }
                        </List>
                    </Submenu>}
                </ListItem>
                );
            }) }  
            </List>
        </Container>
    );
}
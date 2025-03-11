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

    useEffect(() => {
        if (Props.isScrolling) {
            setExpandedItems({});
        }
    }, [Props.isScrolling]);

    useEffect(() => {
        if (Props.defaultexpanded) {
            const allExpanded = Props.data.reduce((acc, _, index) => {
                acc[index] = true;
                return acc;
            }, {} as { [key: number]: boolean });
            setExpandedItems(allExpanded);
        }
    }, [Props.defaultexpanded, Props.data]);

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
            defaultexpanded={Props.defaultexpanded}
            className={classNames(`navigation ${Props.className}`, { '--mobile h-full w-full fixed top-0 z-1000': !!Props?.mobile })} ref={navRef}>
            <List 
                className={classNames(`list w-full flex ${Props?.ListClassName}`, {
                    'container m-auto flex-col': Props?.mobile
                })}>
                {Props.data && Props.data.map(function(row: navigation, i: number){
                return (
                <ListItem 
                    defaultexpanded={Props.defaultexpanded}
                    className={classNames('item flex flex-col', row?.className, { 
                    'expanded': expandedItems[i],
                    [Props?.ListClassName || '']: Props.mobile
                })} key={i}>
                    {row?.type && row.type == 'button' ? <Button className={row?.btnClass} href={row.url} tag={'a'}>{row.title}</Button> : <Link className='flex items-center gap-3' title={row.title} href={row.url} onClick={(event) => handleLinkClick(event, row.url)}>
                        {row.title}
 
                        {row?.below && row.below.length && !Props.defaultexpanded && <i className="fa-solid fa-angle-down" onClick={() => toggleExpand(i)}></i>}
                    </Link>}
                    {row?.below && row.below.length && <Submenu 
                        className={classNames('left-0', { 
                            "block": Props.defaultexpanded || !Props.defaultexpanded && expandedItems[i],
                            "hidden": !Props.defaultexpanded && !expandedItems[i],
                            "relative top-0": Props.defaultexpanded,
                            "absolute top-[100%]": !Props.defaultexpanded
                        })}>
                        <List 
                            className={classNames('list flex flex-col', { 
                                "p-0": Props.defaultexpanded,
                                "p-4": !Props.defaultexpanded,
                                [Props?.ListClassName || '']: Props.mobile
                            })}>
                            {row.below.map(function(below: navigation, j: number){
                                return (
                                    <ListItem className='item' key={j}>
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
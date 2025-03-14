"use client";

import Link from 'next/link';
import { Container, List, ListItem, Submenu } from './styles';
import { Props } from './typo';
import { navigation } from './typo';
import Button from '../button/button';
import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { FaAngleDown } from 'react-icons/fa';

export default function Navigation({ children, className, mobile, data, ListClassName, isScrolling, defaultexpanded }: Props) {
    const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isScrolling) {
            setExpandedItems({});
        }
    }, [isScrolling]);

    useEffect(() => {
        if (defaultexpanded) {
            const allExpanded = data.reduce((acc, _, index) => {
                acc[index] = true;
                return acc;
            }, {} as { [key: number]: boolean });
            setExpandedItems(allExpanded);
        }
    }, [defaultexpanded, data]);

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
            defaultexpanded={defaultexpanded}
            className={classNames(`navigation ${className}`, { '--mobile h-full w-full fixed top-0 z-1000': !!mobile })} ref={navRef}>
            <List 
                className={classNames(`list w-full flex ${ListClassName}`, {
                    'container m-auto flex-col': mobile
                })}>

                {data && data.map(function(row: navigation, i: number){
                    return (
                        <ListItem 
                            defaultexpanded={defaultexpanded}
                            className={classNames('item flex flex-col', row?.className, { 
                            'expanded': expandedItems[i],
                                [ListClassName || '']: mobile
                            })} key={i}>
                            {row?.type && row.type == 'button' ? <Button effect={row?.btnAnimation} className={row?.btnClass} href={row.url} tag={'a'}>{row.title}</Button> : <Link className='flex items-center gap-3' title={row.title} href={row.url} onClick={(event) => handleLinkClick(event, row.url)}>
                                {row.title}
        
                                {row?.below && row.below.length && !defaultexpanded && <FaAngleDown className='arrow' onClick={() => toggleExpand(i)} />}
                            </Link>}
                            {row?.below && row.below.length && <Submenu 
                                className={classNames('left-0', { 
                                    "block": defaultexpanded || !defaultexpanded && expandedItems[i],
                                    "hidden": !defaultexpanded && !expandedItems[i],
                                    "relative top-0": defaultexpanded,
                                    "absolute top-[100%]": !defaultexpanded
                                })}>
                                <List 
                                    className={classNames('list flex flex-col', { 
                                        "p-0": defaultexpanded,
                                        "p-4": !defaultexpanded,
                                        [ListClassName || '']: mobile
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
                
                {children && (<>{ children }</>)}
            </List>
        </Container>
    );
}
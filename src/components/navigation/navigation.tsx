"use client";

import Link from 'next/link';
import { Container, List, ListItem } from './styles';
import { Props } from './typo';
import { navigation } from './typo';

export default function Navigation(Props: Props) {
    return (
        <Container role='navigation' className={`navigation ${Props.className}`}>
            <List gap={Props.gap} className={`flex items-center gap-${Props.gap}`}>
                {Props.data && Props.data.map(function(row: navigation, i: number){
                return (
                <ListItem key={i}>
                    <Link title={row.title} href={row.url}>
                        {row.title}
                    </Link>
                </ListItem>
                );
            }) }  
            </List>
        </Container>
    );
}


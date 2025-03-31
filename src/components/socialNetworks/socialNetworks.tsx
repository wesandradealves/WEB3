"use client";

import { useEffect, useState } from 'react';
import { Container } from './styles';
import { Props } from './typo';
import { IconType } from 'react-icons';

export default function SocialNetworks({ data, className }: Props) {
    const [icons, setIcons] = useState<{ [key: string]: IconType }>({});

    const iconNameMap: { [key: string]: string } = {
        facebook: 'FaFacebookF', 
        linkedin: 'FaLinkedin', 
        youtube: 'FaYoutube',  
    };

    useEffect(() => {
        if (data) {
            const loadIcons = async () => {
                const loadedIcons: { [key: string]: IconType } = {};
                for (const item of data) {
                    if (!item.title) continue;
                    const normalizedTitle = item.title.toLowerCase();
                    const iconName = iconNameMap[normalizedTitle] || `Fa${item.title}`;
                    try {
                        const iconModule = await import('react-icons/fa');
                        loadedIcons[normalizedTitle] = iconModule[iconName as keyof typeof iconModule] as IconType;
                    } catch {
                        console.error(`Icon ${iconName} not found`);
                    }
                }
                setIcons(loadedIcons);
            };

            loadIcons();
        }
    }, [data]);

    return (
        <Container className={`socialNetworks ${className}`}>
            <div className="flex gap-4">
                {data
                    .filter((item) => item.title && item.url) // Filter out invalid items
                    .map((item, index) => {
                        const IconComponent = icons[item.title.toLowerCase()];
                        return (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {IconComponent ? <IconComponent /> : item.title}
                            </a>
                        );
                    })}
            </div>
        </Container>
    );
}
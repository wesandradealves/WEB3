"use client";

import { useEffect, useState } from 'react';
import { Container } from './styles';
import { Props } from './typo';
import { IconType } from 'react-icons';

export default function SocialNetworks({ data, className }: Props) {
    const [icons, setIcons] = useState<{ [key: string]: IconType }>({});

    useEffect(() => {
        if (data) {
            const loadIcons = async () => {
                const loadedIcons: { [key: string]: IconType } = {};
                for (const item of data) {
                    const iconName = `Fa${item.title}`;
                    try {
                        const iconModule = await import('react-icons/fa');
                        loadedIcons[item.title.toLowerCase()] = iconModule[iconName as keyof typeof iconModule] as IconType;
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
                {data.map((item, index) => {
                    const IconComponent = icons[item.title.toLowerCase()];
                    return (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener"
                        >
                            {IconComponent && <IconComponent />}
                        </a>
                    );
                })}
            </div>
        </Container>
    );
}
"use client";

import { useState, useEffect, useRef } from 'react';
import { Props } from './typo';
import Section from '../section/section';
import { Select } from './style';
import DynamicComponent from '../DynamicComponent/DynamicComponent';

export default function SectionSwitcher({ data, className, title, background }: Props) {
    const [selectedValue, setSelectedValue] = useState(data.length > 0 ? data[0].machineName : '');
    const [isExpanded, setIsExpanded] = useState(false);
    const [Icon, setIcon] = useState<React.ComponentType<{ className?: string }> | null>(null);
    const selectRef = useRef<HTMLDivElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setIsExpanded(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const loadIcon = async () => {
            const { FaAngleDown, FaAngleUp } = await import('react-icons/fa');
            setIcon(() => (isExpanded ? FaAngleUp : FaAngleDown));
        };
        loadIcon();
    }, [isExpanded]);

    return (
        <Section title={title} background={background} className={className}>
            <div className='flex flex-wrap justify-between gap-12 xl:gap-[137px] items-start xl:pt-12'>
                <Select ref={selectRef} onClick={() => setIsExpanded(!isExpanded)} className='flex w-full xl:max-w-[273px] items-center rounded-full overflow-hidden flex-wrap justify-between pt-1 pb-1 ps-6 pe-6'>
                    <span className='flex-1 overflow-hidden relative'>
                        <select className={`w-[200%] cursor-pointer ${isExpanded ? 'expanded' : ''}`} value={selectedValue} onChange={handleChange}>
                            {data.map((item, index) => (
                                <option key={index} value={item.machineName}>{item.label}</option>
                            ))}
                        </select>
                    </span>
                    {Icon && <Icon className='arrow ms-auto pointer-events-none -ms-20 cursor-pointer' />}
                </Select>
                {selectedValue && (<DynamicComponent className='flex-1' machineName={selectedValue} />)}
            </div>
        </Section>
    );
}
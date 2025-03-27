"use client";

import { useState, useEffect, useRef } from 'react';
import { Props } from './typo';
import Section from '../section/section';
import { Select } from './styles';
import DynamicComponent from '../DynamicComponent/DynamicComponent';
import classNames from 'classnames';

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
            <div className='flex flex-wrap justify-between gap-12 xl:gap-[90px] items-start xl:pt-12'>
                <Select ref={selectRef} onClick={() => setIsExpanded(!isExpanded)} className='flex lg:text-3xl font-bold w-full xl:max-w-[273px] items-center rounded-full overflow-hidden flex-wrap justify-between px-4 py-1 lg:px-6 lg:py-3'>
                    <span className='flex-1 overflow-hidden relative'>
                        <select 
                        className={classNames(`w-[100%] appearance-none bg-none cursor-pointer`, {
                            'expanded': isExpanded
                        })} value={selectedValue} onChange={handleChange}>
                            {data.map((item, index) => (
                                <option className='text-base' key={index} value={item.machineName}>{item.label}</option>
                            ))}
                        </select>
                    </span>
                    {Icon && <Icon className='arrow ms-auto pointer-events-none -ms-20 cursor-pointer text-4xl' />}
                </Select>
                {selectedValue && (<DynamicComponent className='flex-1 overflow-hidden relative' machineName={selectedValue} />)}
            </div>
        </Section>
    );
}
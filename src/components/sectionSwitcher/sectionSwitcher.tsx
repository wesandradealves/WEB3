"use client";

import { useState, useEffect, useRef } from 'react';
import { Props } from './typo';
import Section from '../section/section';
import DynamicComponent from '../DynamicComponent/DynamicComponent';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem, MenuProps, OutlinedInput } from '@mui/material';
import { useTheme } from 'styled-components';
import classNames from 'classnames';

export default function SectionSwitcher({ data, className, title, background }: Props) {
    const [selectedValue, setSelectedValue] = useState<string[]>(data.length > 0 && data[0].machineName ? [data[0].machineName] : []);
    const [isExpanded, setIsExpanded] = useState(false);
    const [Icon, setIcon] = useState<React.ComponentType<{ className?: string }> | null>(null);
    const selectRef = useRef<HTMLDivElement>(null);
    const menuContainerRef = useRef<HTMLDivElement>(null); // Ref for the specific div
    const theme = useTheme();

    const customMenuProps: Partial<MenuProps> = {
        PaperProps: {
            sx: {
                bgcolor: '#1B1F28',
                color: '#ffffff',
                borderRadius: '0',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)', 
                maxHeight: '300px', 
                overflowY: 'auto', 
                position: 'absolute',
            },
        },
        MenuListProps: {
            sx: {
                top: 0,
                padding: 0,
            }
        },
        container: menuContainerRef.current,
    };

    const handleChange = (event: SelectChangeEvent<string[]>) => {
        setSelectedValue(typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value);
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
                <div
                    ref={selectRef}
                    className={classNames(`flex relative bg-[#1B1F28] shadow-lg lg:text-3xl font-bold w-full rounded-tl-[40px] rounded-tr-[40px] xl:max-w-[273px] items-center  flex-wrap justify-between ps-6`, {
                        'rounded-[30px]': !isExpanded
                    })}
                >
                    <Select
                        onOpen={() => setIsExpanded(true)}
                        onClose={() => setIsExpanded(false)}
                        MenuProps={{
                            ...customMenuProps,
                            container: menuContainerRef.current, 
                            disablePortal: true, 
                        }}
                        sx={{
                            '.MuiOutlinedInput-input': {
                                fontFamily: 'Montserrat',
                                lineHeight: 1.5,
                                color: '#ffffff',
                                fontWeight: '700',
                                fontSize: {
                                    xs: '24px',
                                    lg: '28px',
                                    xl: '32px',
                                },
                            },
                            '.MuiPopover-root': {
                                position: 'absolute',
                                '.MuiPaper-root': {
                                    margin: '-2px 0 0 -24px',
                                    borderRadius: '0 0 40px 40px',
                                    paddingBottom: '16px',
                                    top: '100% !important',
                                    minWidth: 'initial !important',
                                    maxWidth: 'initial !important',
                                    width: 'calc(100% + 84px) !important',
                                    left: '0 !important'
                                },
                            },
                            '.MuiSelect-icon': {
                                display: 'none',
                            },
                            '.MuiOutlinedInput-notchedOutline': { borderStyle: 'none' },
                        }}
                        className="flex-1 appearance-none bg-none cursor-pointer"
                        value={selectedValue}
                        onChange={handleChange}
                        input={<OutlinedInput />}
                    >
                        {data.map((item) => (
                            <MenuItem
                                key={item.machineName}
                                value={item.machineName}
                                sx={{
                                    '&:hover': {
                                        bgcolor: '#333333',
                                    },
                                    '&.Mui-selected': {
                                        bgcolor: '#444444',
                                        color: '#FFD700',
                                    },
                                }}
                            >
                                {item.label}
                            </MenuItem>
                        ))}
                    </Select>
                    {Icon && (
                        <div className='pe-6' style={{ color: theme._colors.primary.bdm3 }}>
                            <Icon className={`pointer-events-none cursor-pointer text-4xl`} />
                        </div>
                    )}
                    <div ref={menuContainerRef} id="menu-container" />
                </div>
                {selectedValue.length > 0 && (
                    <DynamicComponent className='flex-1 overflow-hidden relative' machineName={selectedValue[0]} />
                )}
            </div>
        </Section>
    );
}
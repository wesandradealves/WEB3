"use client";

import React, { useState, useEffect, ReactElement } from 'react';
import { Props } from './typo';

const DynamicComponent: React.FC<Props> = ({ machineName, data, classname, type }) => {
  const [importedComponent, setImportedComponent] = useState<ReactElement | null>(null);

  console.log(classname)

  useEffect(() => {
    const importComponent = async () => {
      try {
        let resolvedMachineName = machineName.toLowerCase();
        if (resolvedMachineName === 'slider') {
          resolvedMachineName = 'slide';
        } else if (resolvedMachineName.startsWith('core/')) {
          resolvedMachineName = resolvedMachineName.replace('core/', '');
        }

        const componentModule = await import(`../${resolvedMachineName}`);
        const Component = componentModule.default;
  
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const expectsArray = (Component as any).expectsArrayData;
  
        setImportedComponent(
            <Component
              classname={`${type} ${classname}`}
              id={resolvedMachineName}
              {...(expectsArray ? { data } : data)}
            />
        );
      } catch (error) {
        console.warn(`Component not found for machineName: ${machineName}`, error);
      }
    };
  
    if (machineName) {
      importComponent();
    }
  }, [machineName, data, classname, type]);
  

  return importedComponent ?? null;
};

export default DynamicComponent;
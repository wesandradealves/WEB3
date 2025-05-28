"use client";

import React, { useState, useEffect, ReactElement } from 'react';
import { Props } from './typo';

const DynamicComponent: React.FC<Props> = ({ machineName, data, classname }) => {
  const [importedComponent, setImportedComponent] = useState<ReactElement | null>(null);

  useEffect(() => {
    const importComponent = async () => {
      try {
        // Padroniza para minúsculo
        const resolvedMachineName = machineName.toLowerCase() === 'slider' ? 'slide' : machineName.toLowerCase();

        const componentModule = await import(`@/components/${resolvedMachineName}`);
        const Component = componentModule.default;
  
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const expectsArray = (Component as any).expectsArrayData;
  
        setImportedComponent(
          <Component
            classname={classname}
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
  }, [machineName, data, classname]);
  

  return importedComponent ?? null;
};

export default DynamicComponent;
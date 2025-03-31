"use client";

import React, { useState, useEffect, ReactElement } from 'react';
import { Props } from './typo';

const DynamicComponent: React.FC<Props> = ({ machineName, className, data }) => {
  const [importedComponent, setImportedComponent] = useState<ReactElement | null>(null);

  useEffect(() => {
    const importComponent = async () => {
      try {
        const componentModule = await import(`@/components/${machineName}`);
        const Component = componentModule.default;
        setImportedComponent(<Component className={className} id={machineName} {...data} />);
      } catch {
        console.warn(`Component not found for machineName: ${machineName}`);
      }
    };

    if (machineName) {
      importComponent();
    }
  }, [machineName, data]);

  return importedComponent ?? null;
};

export default DynamicComponent;
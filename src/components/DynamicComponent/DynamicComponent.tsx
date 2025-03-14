"use client";

import React, { useState, useEffect, ReactElement } from 'react';
import { Props } from './typo';

const DynamicComponent: React.FC<Props> = ({ machineName, className }) => {
  const [importedComponent, setImportedComponent] = useState<ReactElement | null>(null);

  useEffect(() => {
    const importComponent = async () => {
      try {
        const componentModule = await import(`@/components/${machineName}/${machineName}`);
        const Component = componentModule.default;
        setImportedComponent(<Component id={machineName} />);
      } catch (error) {
        console.error(`Error loading component ${machineName}:`, error);
      }
    };

    importComponent();
  }, [machineName]);

  return importedComponent ? <div className={className}>{importedComponent}</div> : null;
};

export default DynamicComponent;
"use client";

import { App } from "./style";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <App id="primary">
      {children}
    </App>
  );
}
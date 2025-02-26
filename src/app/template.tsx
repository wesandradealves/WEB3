"use client";

import { App } from "./style";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <App id="primary">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </App>
  );
}
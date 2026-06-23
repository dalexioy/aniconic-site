import type { ReactNode } from "react";
import { Header } from "../components/Header/Header";
import "./Layout.css";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <main className="site">
      <Header />
      {children}
    </main>
  );
}
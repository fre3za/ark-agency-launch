import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PageLayout = ({ children }: { children: ReactNode }) => (
  <main className="dark">
    <Navbar />
    <div className="pt-16">{children}</div>
    <Footer />
  </main>
);

export default PageLayout;

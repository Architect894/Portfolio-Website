// src/pages/pageslayout.jsx
import React from "react";
import DropMenu from "../components/dropMenu";
import Footer from "../components/footer";
import HeaderTop from "@/components/headerTop";

export default function PagesLayout({ children }) {
    return (
        <>
            <HeaderTop />
            <DropMenu />
            <main>{children}</main>
            <Footer />
        </>
    );
}


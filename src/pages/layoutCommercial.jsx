// src/pages/commercialLayout.jsx
import React from "react";
import CommercialMenu from "../components/menuCommercial";
import CommercialFooter from "../components/footerCommercial";
import HeaderTop from "@/components/headerTop";

export default function CommercialLayout({ children }) {
    return (
        <>
            <HeaderTop />
            <CommercialMenu />
            <main>{children}</main>
            <CommercialFooter />
        </>
    );
}


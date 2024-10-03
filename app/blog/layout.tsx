import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "My App - Blog",

}

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>){
    return (
        <>
            {children}
        </>
    )
}
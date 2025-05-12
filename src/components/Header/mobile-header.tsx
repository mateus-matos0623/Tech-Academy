'use client'

import { useState } from "react";
import Navigation from "./navigation";
import { Menu, X } from "lucide-react";

export default function MobileHeader() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(prev => !prev)}
                className="md:hidden p-2 rounded-md focus:outline-none"
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            {isOpen && (
                <Navigation isMobile />
            )}
        </>
    )
}
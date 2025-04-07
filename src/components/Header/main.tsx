'use client'

import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { Navigation } from "./navigation";
import ModeToggle from "../change-theme";

export function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleChangeOpen() {
        return isOpen ? setIsOpen(false) : setIsOpen(true);
    }

    return (
        <nav className="fixed top-0 w-full z-50 dark:bg-zinc-900 bg-zinc-100 border-b">
            <div className="container flex h-16 items-center justify-between px-3">
                <div className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6" />
                    <span className="text-lg font-bold">Tech Academy</span>
                    <ModeToggle />
                </div>

                {/* Botão do menu (mobile) */}
                <button
                    onClick={handleChangeOpen}
                    className="md:hidden p-2 rounded-md focus:outline-none"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>

                <Navigation isMobile={isOpen} />

            </div>
        </nav>
    );
}
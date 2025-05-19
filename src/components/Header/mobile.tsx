"use client";

import { useState } from "react";
import Navigation from "./navigation";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

export default function MobileHeader() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <Button
                variant='ghost'
                size='icon'
                onClick={() => setIsOpen((prev) => !prev)}
                className="md:hidden p-2 rounded-md focus:outline-none"
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            {isOpen && <Navigation isMobile />}
        </>
    );
}
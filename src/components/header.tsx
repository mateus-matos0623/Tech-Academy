'use client'

import { BookOpen, GraduationCap, Home, LogIn, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";
import ModeToggle from "./change-theme";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathName = usePathname()

    function handleChangeOpen() {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    }

    const navigationItems = [
        { id: 1, path: "/", label: "Home", icon: Home },
        { id: 2, path: "/courses", label: "Cursos", icon: BookOpen },
        { id: 3, path: "/blog", label: "Blog", icon: GraduationCap },
        { id: 4, path: "/auth", label: "Entrar", icon: LogIn },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 dark:bg-zinc-900 bg-zinc-100 border-b">
            <div className="container flex h-16 items-center justify-between px-3">
                <div className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6" />
                    <span className="text-lg font-bold">Tech Academy</span>
                    <ModeToggle/>
                </div>

                {/* Botão do menu (mobile) */}
                <button
                    onClick={handleChangeOpen}
                    className="md:hidden p-2 rounded-md focus:outline-none"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        {navigationItems.map(({ id, path, label, icon: Icon }) => (
                            <NavigationMenuItem key={id}>
                                <Link href={path} className={clsx({ 'dark:bg-zinc-700 bg-zinc-300 rounded-md p-1': pathName == path})}>
                                    <Button variant="link" className="w-full cursor-pointer">
                                        <Icon className="mr-2 h-4 w-4" />
                                        {label}
                                    </Button>
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>


                {isOpen && (
                    <div className="absolute top-16 p-2 right-0 dark:bg-zinc-900 bg-zinc-100">
                        <NavigationMenu>
                            <NavigationMenuList className="flex flex-col items-start space-y-1 p-2">
                                {navigationItems.map(({ id, path, label, icon: Icon }) => (
                                    <NavigationMenuItem key={id}>
                                        <Link href={path} onClick={() => setIsOpen(false)}>
                                            <Button
                                                variant="ghost"
                                                className="w-full flex items-center"
                                            >
                                                <Icon className="mr-2 h-4 w-4" />
                                                {label}
                                            </Button>
                                        </Link>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                )}


            </div>
        </nav>
    );
}
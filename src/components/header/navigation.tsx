import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Home, User } from "lucide-react";

interface INavigationProps {
    isMobile?: boolean;
}

export default function Navigation({ isMobile }: INavigationProps) {
    const navigationItems = [
        { id: 1, path: "/", label: "Home", icon: Home },
        { id: 2, path: "/courses", label: "Cursos", icon: BookOpen },
        { id: 3, path: "/blog", label: "Blog", icon: GraduationCap },
        { id: 4, path: "/login", label: "Entrar", icon: User },
    ] as const;

    if (isMobile) {
        return (
            <div className="absolute top-16 p-2 right-0 dark:bg-zinc-900 bg-zinc-100 rounded-md">
                <NavigationMenu>
                    <NavigationMenuList className="flex flex-col items-start space-y-1 p-2">
                        {navigationItems.map(({ id, path, label, icon: Icon }) => (
                            <NavigationMenuItem key={id}>
                                <Link href={path}>
                                    <Button variant="ghost" className="w-full flex items-center">
                                        <Icon className="mr-2 h-4 w-4" />
                                        {label}
                                    </Button>
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        );
    }

    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
                {navigationItems.map(({ id, path, label, icon: Icon }) => (
                    <NavigationMenuItem key={id}>
                        <Link href={path} prefetch>
                            <Button variant="link" className="w-full cursor-pointer">
                                <Icon className="mr-2 h-4 w-4" />
                                {label}
                            </Button>
                        </Link>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
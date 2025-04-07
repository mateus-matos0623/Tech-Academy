import { BookOpen, GraduationCap, Home, LogIn } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../ui/navigation-menu";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

interface INavigationProps {
    isMobile: boolean
}

export function Navigation({isMobile}: INavigationProps) {
    const pathName = usePathname()

    const navigationItems = [
        { id: 1, path: "/", label: "Home", icon: Home },
        { id: 2, path: "/courses", label: "Cursos", icon: BookOpen },
        { id: 3, path: "/blog", label: "Blog", icon: GraduationCap },
        { id: 4, path: "/account", label: "Entrar", icon: LogIn },
    ];

    if (isMobile) {
        return (
            <div className="absolute top-16 p-2 right-0 dark:bg-zinc-900 bg-zinc-100">
                <NavigationMenu>
                    <NavigationMenuList className="flex flex-col items-start space-y-1 p-2">
                        {navigationItems.map(({ id, path, label, icon: Icon }) => (
                            <NavigationMenuItem key={id}>
                                <Link href={path}>
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
        )
    }
    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
                {navigationItems.map(({ id, path, label, icon: Icon }) => (
                    <NavigationMenuItem key={id}>
                        <Link href={path} className={clsx({ 'dark:bg-zinc-700 bg-zinc-300 rounded-md p-1': pathName == path })}>
                            <Button variant="link" className="w-full cursor-pointer">
                                <Icon className="mr-2 h-4 w-4" />
                                {label}
                            </Button>
                        </Link>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>

        
    )
}
import Navigation from "./navigation";
import { GraduationCap } from "lucide-react";
import MobileHeader from "./mobile";
import ChangeTheme from "../change-theme";

export default function Header() {
    return (
        <nav className="fixed top-0 w-full z-50 dark:bg-zinc-900 bg-zinc-100 border-b">
            <div className="container flex h-16 items-center justify-between px-3">
                <div className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6" />
                    <span className="text-lg font-bold">Tech Academy</span>
                    <ChangeTheme />
                </div>

                <MobileHeader />

                <Navigation />
            </div>
        </nav>
    );
}
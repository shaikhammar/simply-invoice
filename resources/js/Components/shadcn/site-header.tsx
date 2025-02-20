import { Menu, SidebarIcon, Wallet } from "lucide-react";

import { SearchForm } from "@/Components/shadcn/search-form";
import { Button } from "@/Components/shadcn/ui/button";
import { useSidebar } from "@/Components/shadcn/ui/sidebar";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Link, usePage } from "@inertiajs/react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/Components/shadcn/ui/drawer";
import { useState } from "react";

export function SiteHeader() {
    const auth = usePage().props.auth;
    const { isMobile, toggleSidebar } = useSidebar();
    const [open, setOpen] = useState(false);

    return (
        <header className="flex sticky top-0 z-50 w-full items-center justify-center border-b bg-background">
            {/* <div className="flex h-[--header-height] lg:w-[80%] sm:w-full justify-around items-center gap-2 px-4"> */}
            {isMobile ? (
                <div className="flex h-[--header-height] w-full justify-between items-center">
                    <div className="flex items-center px-2">
                        <Button
                            className="h-8 w-8"
                            variant="ghost"
                            size="icon"
                            onClick={toggleSidebar}
                        >
                            <SidebarIcon />
                        </Button>
                    </div>
                    <div className="flex items-center">
                        <Wallet className="mr-2 h-10 w-10" />
                        {/* <h1 className="text-2xl font-bold">Simply Invoice 2</h1> */}
                    </div>
                    <div className="flex items-center px-2">
                        <Button
                            className="h-8 w-8"
                            variant="ghost"
                            size="icon"
                            onClick={() => setOpen(true)}
                        >
                            <Menu />
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="flex h-[--header-height] w-full justify-between items-center gap-2 px-4">
                    <Link href={route("home")} className="flex items-center">
                        <Wallet className="mr-2 h-6 w-6" />
                        <h1 className="text-2xl font-bold">Simply Invoice</h1>
                    </Link>
                    <div className="flex items-center gap-2">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <Link href="#">
                                        <NavigationMenuLink
                                            className={navigationMenuTriggerStyle()}
                                        >
                                            Invoices
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="#">
                                        <NavigationMenuLink
                                            className={navigationMenuTriggerStyle()}
                                        >
                                            Clients
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="#">
                                        <NavigationMenuLink
                                            className={navigationMenuTriggerStyle()}
                                        >
                                            Items
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="#">
                                        <NavigationMenuLink
                                            className={navigationMenuTriggerStyle()}
                                        >
                                            Reports
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="flex items-center gap-2">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                        <SearchForm className="w-full sm:ml-auto sm:w-auto" />
                    </div>
                </div>
            )}
            <Drawer open={open} onOpenChange={setOpen}>
                <DrawerContent className="p-6">
                    <div className="flex flex-col space-y-3 py-2">
                        <Link className="text-base" href="/">
                            Invoices
                        </Link>
                        <Link className="text-base" href="/docs">
                            Clients
                        </Link>
                        <Link
                            className="text-base"
                            href="/docs/components/accordion"
                        >
                            Items
                        </Link>
                        <Link className="text-base" href="/blocks">
                            Reports
                        </Link>
                    </div>
                </DrawerContent>
            </Drawer>
            {/* </div> */}
        </header>
    );
}

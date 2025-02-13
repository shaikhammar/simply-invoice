import { Rocket, SidebarIcon, Wallet } from "lucide-react";

import { SearchForm } from "@/Components/shadcn/search-form";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/shadcn/ui/breadcrumb";
import { Button } from "@/Components/shadcn/ui/button";
import { Separator } from "@/Components/shadcn/ui/separator";
import { useSidebar } from "@/Components/shadcn/ui/sidebar";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Link } from "@inertiajs/react";

export function SiteHeader() {
    const { isMobile, toggleSidebar } = useSidebar();

    return (
        <header className="flex sticky top-0 z-50 w-full items-center justify-center border-b bg-background">
            {/* <div className="flex h-[--header-height] lg:w-[80%] sm:w-full justify-around items-center gap-2 px-4"> */}
            {isMobile ? (
                <div className="flex h-[--header-height] w-full justify-center items-center gap-8">
                    <div className="flex items-center">
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
                        <Wallet className="mr-2 h-6 w-6" />
                        <h1 className="text-2xl font-bold">Simply Invoice 2</h1>
                    </div>
                </div>
            ) : (
                <div className="flex h-[--header-height] lg:w-[80%] sm:w-full justify-around items-center gap-2 px-4">
                    <div className="flex items-center">
                        <Wallet className="mr-2 h-6 w-6" />
                        <h1 className="text-2xl font-bold">Simply Invoice</h1>
                    </div>
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
                    <div>
                        <SearchForm className="w-full sm:ml-auto sm:w-auto" />
                    </div>
                </div>
            )}

            {/* </div> */}
        </header>
    );
}

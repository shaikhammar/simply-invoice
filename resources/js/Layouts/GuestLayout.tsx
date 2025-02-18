import { AppSidebar } from "@/Components/shadcn/app-sidebar";
import { SiteHeader } from "@/Components/shadcn/site-header";
import { SidebarInset, SidebarProvider } from "@/Components/shadcn/ui/sidebar";
import { Head } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({
    title,
    children,
}: PropsWithChildren & { title?: string }) {
    console.log(title);
    return (
        <>
            <Head title={title} />
            <div className="[--header-height:calc(theme(spacing.14))]">
                <SidebarProvider className="flex flex-col">
                    <SiteHeader />
                    <div className="flex flex-1">
                        <AppSidebar />
                        <SidebarInset>{children}</SidebarInset>
                    </div>
                </SidebarProvider>
            </div>
        </>
    );
}

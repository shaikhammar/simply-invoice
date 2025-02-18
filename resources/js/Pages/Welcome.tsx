import InvoiceForm from "@/Components/InvoiceForm";
import { AppSidebar } from "@/Components/shadcn/app-sidebar";
import { SiteHeader } from "@/Components/shadcn/site-header";
import { Card } from "@/Components/shadcn/ui/card";
import { SidebarInset, SidebarProvider } from "@/Components/shadcn/ui/sidebar";
import Guest from "@/Layouts/GuestLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="grid auto-rows-min gap-3 md:grid-cols-3 md:grid-rows-3">
                    <Card className="col-span-2 rounded-lg bg-muted/90 row-span-3 h-100vh">
                        <InvoiceForm />
                    </Card>
                    <Card className="col-span-1 rounded-lg bg-muted/90 row-span-2 "></Card>
                </div>
            </div>
        </>
    );
}

Welcome.layout = (page: React.ReactNode) => (
    <Guest children={page} title="Invoices" />
);

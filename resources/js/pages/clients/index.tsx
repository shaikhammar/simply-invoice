import { BreadcrumbItem, Client } from '@/types';

import AppLayout from '@/layouts/app-layout';

import { Button } from '@/components/ui/button';
import { Head, Link } from '@inertiajs/react';
import { CirclePlus } from 'lucide-react';
import { columns } from './column';
import { DataTable } from './data-table';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Clients',
        href: '/clients',
    },
];

function Index({ clients }: { clients: Client[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Clients" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex justify-between">
                    <h1 className="text-2xl leading-tight font-semibold tracking-tight text-gray-900 dark:text-gray-100">Clients</h1>
                    <Button variant="default" className="inline-flex gap-2 font-semibold" asChild>
                        <Link href={route('clients.create')}>
                            <CirclePlus className="h-4 w-4" />
                            <p>Create Client</p>
                        </Link>
                    </Button>
                </div>
                <div>
                    <DataTable columns={columns} data={clients} />
                </div>
            </div>
        </AppLayout>
    );
}

export default Index;

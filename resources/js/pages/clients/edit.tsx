import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, Client } from '@/types';
import { Head } from '@inertiajs/react';
import ClientForm from './form';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Clients',
        href: '/clients',
    },
    {
        title: 'Edit Client',
        href: '/clients/edit',
    },
];

function Edit({ client }: { client: Client }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Client" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <ClientForm client={client} />
            </div>
        </AppLayout>
    );
}

export default Edit;

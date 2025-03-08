import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import ClientForm from './form';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Clients',
        href: '/clients',
    },
    {
        title: 'Create Client',
        href: '/clients/create',
    },
];

function Create() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Client" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <ClientForm client={null} />
            </div>
        </AppLayout>
    );
}

export default Create;

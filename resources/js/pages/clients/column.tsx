import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Client } from '@/types';
import { router } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';

export const columns: ColumnDef<Client>[] = [
    {
        accessorKey: 'name',
        header: () => <span className="font-bold">Name</span>,
        cell: (name) => (
            <div className="flex items-center gap-2">
                <div className="font-semibold">{name.getValue() as string}</div>
            </div>
        ),
    },
    {
        accessorKey: 'email',
        header: () => <span className="font-bold">Email</span>,
        cell: (email) => (
            <div className="flex items-center gap-2">
                <div className="font-semibold">{email.getValue() as string}</div>
            </div>
        ),
    },
    {
        accessorKey: 'phone',
        header: () => <span className="font-bold">Phone</span>,
        cell: (phone) => (
            <div className="flex items-center gap-2">
                <div className="font-normal">{phone.getValue() as string}</div>
            </div>
        ),
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const client = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => router.visit(route('clients.edit', client.id))}>Edit client</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600" onClick={() => router.visit(route('clients.destroy', client.id))}>
                            Delete client
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

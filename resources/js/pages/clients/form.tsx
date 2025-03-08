import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Client } from '@/types';
import { Link, useForm } from '@inertiajs/react';
import { ChevronLeftSquare, Save } from 'lucide-react';

function ClientForm({ client }: { client: Client | null }) {
    const { data, setData, post, put, processing, errors } = useForm({
        name: client?.name || '',
        company: client?.company || '',
        address: client?.address || '',
        city: client?.city || '',
        state: client?.state || '',
        zip: client?.zip || '',
        country: client?.country || '',
        email: client?.email || '',
        phone: client?.phone || '',
        notes: client?.notes || '',
    });

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (client != null) {
            put(route('clients.update', client.id));
            return;
        } else {
            post(route('clients.store'));
        }
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div className="flex justify-between">
                    <h1 className="text-2xl leading-tight font-semibold tracking-tight text-gray-900 dark:text-gray-100">Clients</h1>
                    <div className="inline-flex gap-4">
                        <Button variant="default" type="submit" className="inline-flex gap-2 font-semibold" disabled={processing}>
                            <Save className="h-4 w-4" />
                            <p>Save</p>
                        </Button>
                        <Button variant="destructive" className="inline-flex gap-2 font-semibold" asChild>
                            <Link href={route('clients.index')}>
                                <ChevronLeftSquare className="h-4 w-4" />
                                <p>Cancel</p>
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="grid max-w-lg grid-cols-3 gap-2">
                    <div className="col-span-3">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" placeholder="Name" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                        {errors.name && <p className="text-red-500">{errors.name}</p>}
                    </div>
                    <div className="col-span-3">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                            id="company"
                            type="text"
                            placeholder="Company Name"
                            value={data.company}
                            onChange={(e) => setData('company', e.target.value)}
                        />
                        {errors.company && <p className="text-red-500">{errors.company}</p>}
                    </div>
                    <div className="col-span-3">
                        <Label htmlFor="address">Address</Label>
                        <Input
                            id="address"
                            type="text"
                            placeholder="Address"
                            value={data.address}
                            onChange={(e) => setData('address', e.target.value)}
                        />
                        {errors.address && <p className="text-red-500">{errors.address}</p>}
                    </div>
                    <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" type="text" placeholder="City" value={data.city} onChange={(e) => setData('city', e.target.value)} />
                        {errors.city && <p className="text-red-500">{errors.city}</p>}
                    </div>
                    <div>
                        <Label htmlFor="state">State</Label>
                        <Input id="state" type="text" placeholder="State" value={data.state} onChange={(e) => setData('state', e.target.value)} />
                        {errors.state && <p className="text-red-500">{errors.state}</p>}
                    </div>
                    <div>
                        <Label htmlFor="zip">Zip Code</Label>
                        <Input id="zip" type="text" placeholder="Zip Code" value={data.zip} onChange={(e) => setData('zip', e.target.value)} />
                        {errors.zip && <p className="text-red-500">{errors.zip}</p>}
                    </div>
                    <div className="col-span-3">
                        <Label htmlFor="country">Country</Label>
                        <Input
                            id="country"
                            type="text"
                            placeholder="Country"
                            value={data.country}
                            onChange={(e) => setData('country', e.target.value)}
                        />
                        {errors.country && <p className="text-red-500">{errors.country}</p>}
                    </div>
                    <div className="col-span-3">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Email" value={data.email} onChange={(e) => setData('email', e.target.value)} />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>
                    <div className="col-span-3">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="text" placeholder="Phone" value={data.phone} onChange={(e) => setData('phone', e.target.value)} />
                        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                    </div>
                    <div className="col-span-3">
                        <Label htmlFor="notes">Notes</Label>
                        <Textarea id="notes" placeholder="Notes" value={data.notes} onChange={(e) => setData('notes', e.target.value)} />
                        {errors.notes && <p className="text-red-500">{errors.notes}</p>}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ClientForm;

import React from "react";

function InvoiceForm() {
    return (
        <>
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="grid auto-rows-min gap-3 md:grid-cols-3 md:grid-rows-4">
                    <div className="col-span-2 row-span-1 p-4">
                        Invoice Title
                    </div>
                    <div className="col-span-1 row-span-4 p-4">
                        Invoice Logo
                    </div>
                    <div className="col-span-2 row-span-1 px-4">
                        Invoice Number
                    </div>
                    <div className="col-span-2 row-span-1 px-4">
                        Invoice Date
                    </div>
                    <div className="col-span-2 row-span-1 px-4">
                        Invoice Term
                    </div>
                </div>
                <div className="grid auto-rows-min gap-3 md:grid-cols-2 px-4">
                    <div className="px-2 py-1">
                        <div className="py-1">From</div>
                        <div className="py-1">Email</div>
                        <div className="py-1">Name</div>
                        <div className="py-1">Address</div>
                        <div className="py-1">City</div>
                        <div className="py-1">Country</div>
                        <div className="py-1">Phone</div>
                        <div className="py-1">Contact Name</div>
                        <div className="py-1">Website</div>
                    </div>
                    <div className="px-2 py-1">
                        <div className="py-1">Bill To</div>
                        <div className="py-1">Name</div>
                        <div className="py-1">Email</div>
                        <div className="py-1">Address</div>
                        <div className="py-1">City</div>
                        <div className="py-1">Country</div>
                        <div className="py-1">Phone</div>
                        <div className="py-1">Website</div>
                        <div className="py-1">Contact Name</div>
                    </div>
                </div>
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4">
                    Invoice Items
                </div>
            </div>
        </>
    );
}

export default InvoiceForm;

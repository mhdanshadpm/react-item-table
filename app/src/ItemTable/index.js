import React from 'react';
import { Table } from './Table';

export const ItemTable = () => {
    const columns = [
        {
            name: "Item",
            identifier:'item',
            inputType: "select",
            options : [
                { value: "item1", label: "ITEM 1" },
                { value: "item2", label: "ITEM 2" },
                { value: "item3", label: "ITEM 3" },
                { value: "item4", label: "ITEM 4" },
                { value: "item5", label: "ITEM 5" }
            ]
        },
        {
            name: "Material Fee",
            identifier:'materialFee',
            inputType: "currency"
        },
        {
            name: "Packing Fee",
            identifier:'packingFee',
            inputType: "currency"
        },
        {
            name: "Unpacking Fee",
            identifier:'unpackingFee',
            inputType: "currency"
        }
    ];
    return <div id='item-table-container'><Table columns={columns} /></div>;
}

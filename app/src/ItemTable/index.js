import React from 'react';
import { Table } from './Table';

export const ItemTable = () => {
    const columns = [
        {
            name: "Item",
            identifier:'item',
            inputType: "select",
            options : [
                { value: "Double Matress", label: "Double Matress" },
                { value: "Table", label: "Table" },
                { value: "Wall Art", label: "Wall Art" },
                { value: "Lamp table", label: "Lamp table" },
                { value: "Dishpack", label: "Dishpack" }
            ]
        },
        {
            name: "Material Fee",
            identifier:'materialFee',
            inputType: "currency",
            autoFocus:true,
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

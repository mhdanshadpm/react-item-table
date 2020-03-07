import React, { useState } from 'react';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';
import { AddCircleOutline } from '@material-ui/icons';

export const Table = ({columns}) => {
    const columnNames       = columns.map( column => column.name);
    const initialRow        = columns.reduce((row,col)=> ({...row,[col.identifier]:''}),{})
    const [rows, setRows]   = useState([]);

    const updateRows = (data) => {
        const updatedRows = [...rows];
        updatedRows.push(data)
        setRows(updatedRows);
    }

    const onAddItem = () => {
        updateRows(initialRow);
        console.log(rows)
    }

    const onChangeInput = (e,i,identifier) => {
        const updatedRows           = [...rows];
        const selectedRow           = updatedRows[i];
        selectedRow[identifier]     = e.target.value;
        updatedRows[i]              = selectedRow;
        setRows(updatedRows);
    }

    const onClickDelete = (i) => {
        const updatedRows = [...rows];
        updatedRows.splice(i,1);
        setRows(updatedRows);
    }

    return (
        <div id='table-container'>
            <table id='table'>
                <TableHeader headers={columnNames} />
                <TableBody
                    rows={rows}
                    onChange={onChangeInput}
                    columns={columns}
                    onClickDelete={onClickDelete}
                />
            </table>
            <div id='add-button' onClick={onAddItem}>
                <AddCircleOutline /> Add Item
            </div>
        </div>
    );
}
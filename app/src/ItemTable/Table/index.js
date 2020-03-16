import React, { useState } from 'react';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';
import { AddCircleOutline } from '@material-ui/icons';

export const Table = ({columns}) => {
    const columnNames       = columns.map( column => column.name);
    const initialRow        = columns.reduce((row,col)=> ({...row,[col.identifier]:{value: '', isValid: true }}),{})
    const [rows, setRows]   = useState([]);

    const updateRows = (data) => {
        const updatedRows = [...rows];
        updatedRows.push(data)
        setRows(updatedRows);
    }

    const onAddItem = () => {
        const noOfRows = rows.length;
        const hasMoreThanOneRow = noOfRows > 0 ;
        const touched = false;
        if ( hasMoreThanOneRow) {
            const updatedRows = [...rows];
            updatedRows[noOfRows-1].touched = true;
            setRows(updatedRows)
        }
        updateRows({...initialRow, touched});
    }

    const onChangeInput = (e,i,identifier) => {
        const updatedRows               = [...rows];
        const selectedRow               = updatedRows[i];
        const value                     = e.target.value.toString();
        const isValid                   = e.target.value.trim() !== '';
        selectedRow[identifier]         = { value, isValid }
        updatedRows[i]                  = selectedRow;
        updatedRows[i].touched          = true;
        setRows(updatedRows);
    }

    const onClickDelete = (i) => {
        const updatedRows = [...rows];
        updatedRows.splice(i,1);
        setRows(updatedRows);
    }

    return (
        <div id='table-container'>
            <div id='table'>
            <div className='table-section'>
                <TableHeader headers={columnNames} />
                <TableBody
                    rows={rows}
                    onChange={onChangeInput}
                    columns={columns}
                    onClickDelete={onClickDelete}
                />
            </div>
            </div>
            <div id='add-button' onClick={onAddItem}>
                <AddCircleOutline /> <span> Add Item </span>
            </div>
        </div>
    );
}
import React from "react";
import { Delete, AttachMoney } from "@material-ui/icons";
import { Select } from "../../Select";

export const TableBody = ({ columns, rows, onChange, onClickDelete }) => {
    const renderBody = () => {
        return rows.map((row, i) => {
            return (
                <tr key={i} className='table-row'>
                    {columns.map(column => {
                        const onChangeInput = e => {
                            onChange(e, i, column.identifier);
                        };
                        switch (column.inputType) {
                            case "currency":
                                return (
                                    <td
                                        className='table-cell'
                                        key={column.identifier}
                                    >
                                        <AttachMoney className='dollar-icon' />
                                        <input
                                            className='input currency'
                                            onChange={onChangeInput}
                                            value={row[column.identifier]}
                                            type='text'
                                        />
                                    </td>
                                );
                            case "select":
                                return (
                                    <td
                                        className='table-cell'
                                        key={column.identifier}
                                    >
                                        <Select
                                            options={column.options}
                                            value={row[column.identifier]}
                                            onChange={onChangeInput}
                                        />
                                    </td>
                                );
                            default:
                                return (
                                    <td
                                        className='table-cell'
                                        key={column.identifier}
                                    >
                                        <input
                                            className='input text'
                                            onChange={onChangeInput}
                                            value={row[column.identifier]}
                                            type='text'
                                        />
                                    </td>
                                );
                        }
                    })}
                    <td className='table-cell'>
                        <div
                            className='trash-icon'
                            onClick={() => onClickDelete(i)}
                        >
                            <Delete />
                        </div>
                    </td>
                </tr>
            );
        });
    };
    return <tbody id='table-body'>{renderBody()}</tbody>;
};

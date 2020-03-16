import React from "react";
import { AttachMoney, DeleteOutline, CancelOutlined } from "@material-ui/icons";
import { Select } from "../../Select";

export const TableBody = ({ columns, rows, onChange, onClickDelete }) => {
    const renderIcon = (i) => {
        const isTouched = rows[i].touched;
        if(isTouched) {
            return <DeleteOutline className='trash-icon' onClick={() => onClickDelete(i)} />
        }
        return <CancelOutlined className='trash-icon' onClick={() => onClickDelete(i)}/>
    }
    const renderBody = () => {
        const body =  rows.map((row, i) => {
            return (
                <div key={i} className='row'>
                    {columns.map(column => {
                        const onChangeInput = e => {
                            onChange(e, i, column.identifier);
                        };
                        const className = ["input"];
                        const getisValid = () => {
                            if(!row[column.identifier].isValid) {
                                className.push("invalid");
                            }
                        }
                        switch (column.inputType) {
                            case "currency":
                                className.push('currency');
                                let value = row[column.identifier].value;
                                if (value === '') {
                                    value = 0;
                                }
                                getisValid()
                                return (
                                    <div
                                        className='cell'
                                        key={column.identifier}
                                    >
                                        <AttachMoney className='dollar-icon' />
                                        <input
                                            autoFocus = {column.autoFocus}
                                            className={className.join(' ')}
                                            onChange={onChangeInput}
                                            value={value}
                                            type='text'
                                        />
                                    </div>
                                );
                            case "select":
                                className.push('select');
                                return (
                                    <div
                                        className='cell'
                                        key={column.identifier}
                                    >
                                        <Select
                                            classes={className.join(' ')}
                                            options={column.options}
                                            value={row[column.identifier].value}
                                            onChange={onChangeInput}
                                            autoFocus={column.autoFocus}
                                        />
                                    </div>
                                );
                            default:
                                className.push('text');
                                getisValid();
                                return (
                                    <div
                                        className='cell'
                                        key={column.identifier}
                                    >
                                        <input
                                            className={className.join(' ')}
                                            onChange={onChangeInput}
                                            value={row[column.identifier].value}
                                            type='text'
                                        />
                                    </div>
                                );
                        }
                    })}
                    <div className='cell'>
                        {renderIcon(i)}
                    </div>
                </div>
            );
        });
        return body.reverse();
    };
    return renderBody();
};

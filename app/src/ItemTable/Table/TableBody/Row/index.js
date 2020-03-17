import React from 'react';
import { AttachMoney, DeleteOutline, CancelOutlined} from '@material-ui/icons';
import { Select } from '../../../Select';

export const Row = props => {
    const { index, columns, onChange, row, onClickDelete } = props;
    const renderIcon = i => {
        const isTouched = row.touched;
        if (isTouched) {
            return (
                <DeleteOutline
                    className='trash-icon'
                    onClick={() => onClickDelete(i)}
                />
            );
        }
        return (
            <CancelOutlined
                className='trash-icon'
                onClick={() => onClickDelete(i)}
            />
        );
    };

    const renderColumns = () => {
        return columns.map(column => {

            const onChangeInput = e => {
                onChange(e, index, column.identifier);
            };

            const className = ['input'];

            const addInvalidClass = (value) => {
                const currentColumn     = row[column.identifier];
                const pattern           = /^-?\d+(?:[.,]\d*?)?$/;
                const isValid           = (currentColumn.isValid && pattern.test(value));
                if (!isValid) {
                    className.push('invalid');
                }
            };

            switch (column.inputType) {
                case 'currency':
                    className.push('currency');
                    let value = row[column.identifier].value;
                    if (value === null) {
                        value = 0;
                    }
                    addInvalidClass(value);
                    return (
                        <div className='cell' key={column.identifier}>
                            <AttachMoney className='dollar-icon' />
                            <input
                                autoFocus={column.autoFocus}
                                className={className.join(' ')}
                                onChange={onChangeInput}
                                value={value}
                                type='text'
                            />
                        </div>
                    );
                case 'select':
                    className.push('select');
                    return (
                        <div className='cell' key={column.identifier}>
                            <Select
                                classes={className.join(' ')}
                                options={column.options}
                                value={row[column.identifier].value || ''}
                                onChange={onChangeInput}
                                autoFocus={column.autoFocus}
                            />
                        </div>
                    );
                default:
                    className.push('text');
                    addInvalidClass(row[column.identifier].value);
                    return (
                        <div className='cell' key={column.identifier}>
                            <input
                                className={className.join(' ')}
                                onChange={onChangeInput}
                                value={row[column.identifier].value || ''}
                                type='text'
                            />
                        </div>
                    );
            }
        });
    };
    return (
        <div key={index} className='row'>
            {renderColumns()}
            <div className='cell'>{renderIcon(index)}</div>
        </div>
    );
};
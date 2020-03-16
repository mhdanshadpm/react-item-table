import React from 'react';
import { AttachMoney, DeleteOutline, CancelOutlined} from '@material-ui/icons';
import { Select } from '../../../Select';

export const Row = props => {
    const { key, columns, onChange, row, onClickDelete } = props;
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
                onChange(e, key, column.identifier);
            };

            const className = ['input'];

            const addInvalidClass = () => {
                if (!row[column.identifier].isValid) {
                    className.push('invalid');
                }
            };

            switch (column.inputType) {
                case 'currency':
                    className.push('currency');
                    let value = row[column.identifier].value;
                    if (value === '') {
                        value = 0;
                    }
                    addInvalidClass();
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
                                value={row[column.identifier].value}
                                onChange={onChangeInput}
                                autoFocus={column.autoFocus}
                            />
                        </div>
                    );
                default:
                    className.push('text');
                    addInvalidClass();
                    return (
                        <div className='cell' key={column.identifier}>
                            <input
                                className={className.join(' ')}
                                onChange={onChangeInput}
                                value={row[column.identifier].value}
                                type='text'
                            />
                        </div>
                    );
            }
        });
    };
    return (
        <div key={key} className='row'>
            {renderColumns()}
            <div className='cell'>{renderIcon(key)}</div>
        </div>
    );
};
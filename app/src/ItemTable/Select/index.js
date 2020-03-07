import React from 'react';

export const Select = ({ value, onChange, options }) => {
    const renderOptions = () => options.map(option => {
        return (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        );
    });
    return (
        <select className='input select' value={value} onChange={onChange}>
            {renderOptions()}
        </select>
    );
};

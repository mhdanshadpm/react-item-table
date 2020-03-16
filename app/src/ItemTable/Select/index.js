import React from 'react';

export const Select = (props) => {
    const { value, onChange, classes, autoFocus } = props;
    let selected            = value;
    const options           = [...props.options];
    const isEmptyString     = (value === '')
    if(isEmptyString){
        options.push({value:'unset', label:'Select...'})
        selected = 'unset';
    }
    const renderOptions = () => options.map(option => {
        return (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        );
    });
    return (
        <select className= {classes} value={selected} onChange={onChange} autoFocus={autoFocus}>
            {renderOptions()}
        </select>
    );
};

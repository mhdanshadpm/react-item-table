import React from 'react'

export const TableHeader = ({ headers }) => {
    const renderHeader = () =>
        headers.map(header => (
            <div className='cell' key={header}>
                {header}
            </div>
        ));
    return (
            <div className='row'>
                {renderHeader()}
                <div className='cell'></div>
            </div>
    );
};
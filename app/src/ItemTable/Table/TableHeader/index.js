import React from 'react'

export const TableHeader = ({ headers }) => {
    const renderHeader = () =>
        headers.map(header => (
            <th className='table-cell' key={header}>
                {header}
            </th>
        ));
    return (
        <thead id='table-head'>
            <tr className='table-row'>
                {renderHeader()}
                <th></th>
            </tr>
        </thead>
    );
};
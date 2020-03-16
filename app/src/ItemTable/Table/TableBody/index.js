import React from "react";
import { Row } from "./Row";

export const TableBody = ({ columns, rows, onChange, onClickDelete }) => {
    const renderBody = () => {
        const body =  rows.map((row, i) => {
            return (
                <Row 
                    key={i}
                    columns={columns}
                    onChange={onChange}
                    row={row}
                    onClickDelete={onClickDelete}
                />
            );
        });
        return body.reverse();
    };
    return renderBody();
};

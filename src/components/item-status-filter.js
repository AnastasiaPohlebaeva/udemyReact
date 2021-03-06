import React from 'react';
import './item-status-filter.css';

const ItemStatusFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-info" type="button">All</button>
            <button className="btn btn-outline-second" type="button">Active</button>
            <button className="btn btn-outline-second" type="button">Done</button>
        </div>
    );
};

export default ItemStatusFilter;
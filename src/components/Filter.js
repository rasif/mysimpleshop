import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({count, sort, size, handleChangeFilter}) => {
    console.log('Filter');
    const sizes = ['All', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

    return (
        <div className="filter">
            <span className="filter__counts">{count} Products</span>
            <select className="filter__sort" 
                    name="sortFilter" 
                    value={sort}
                    onChange={handleChangeFilter}>
                <option value="latest">Latest</option>
                <option value="lessewable">Lessewable</option>
                <option value="largeable">Largeable</option>
            </select>
            <select className="filter__size" 
                    name="sizeFilter" 
                    value={size}
                    onChange={handleChangeFilter}>
                    { 
                        sizes.map((size, i) => <option key={i} value={size}>{size}</option>) 
                    }
            </select>
        </div>
    );
}

Filter.propTypes = {
    count: PropTypes.number.isRequired,
    sort: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    handleChangeFilter: PropTypes.func.isRequired
};

export default Filter;
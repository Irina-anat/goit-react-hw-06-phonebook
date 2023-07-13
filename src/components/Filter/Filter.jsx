
import React from "react";
//import PropTypes from 'prop-types';

export const Filter = () => {
    return (
        <label>
            <input type='text' placeholder="Find contacts by Name"
                //value={value} onChange={onChange}
            />
        </label>
    );
};








/*import React from "react";
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
    return (
        <label>
            <input type='text' placeholder="Find contacts by Name" value={value} onChange={onChange} />
        </label>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;
*/
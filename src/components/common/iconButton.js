import React from 'react';
import PropTypes from 'prop-types';
import cx from "classnames"

const IconButton = ({label, Icon, className, onClick, tooltip}, ...props) => {
    return (
        <div className="relative group flex items-center">
            {/*<div className="absolute bg-gray-400 text-white text-sm rounded-lg px-1 left-full hover:opacity-100 hover:translate-x-4 -translate-x-4 opacity-0 transition duration-300 ml-2 transform ">{tooltip}</div>*/}
            <button aria-label={label} onClick={onClick} className={ cx(className, "focus:outline-none")}>
                {Icon}
            </button>
        </div>
    );
};

IconButton.propTypes = {
    label: PropTypes.string.isRequired,
    Icon: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    iconClassName: PropTypes.string
};

export default IconButton;
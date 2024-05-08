import React, { useState } from 'react';

const ToggleSwitch = ({ onChange, checked }) => {
    const [isChecked, setIsChecked] = useState(checked || false);

    const handleToggle = () => {
        const newState = !isChecked;
        setIsChecked(newState);
        if (onChange) {
            onChange(newState);
        }
    };

    return (
        <label className="toggle-switch">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleToggle}
                className="toggle-switch-input"
            />
            <span className="toggle-switch-slider"></span>
        </label>
    );
};

export default ToggleSwitch;

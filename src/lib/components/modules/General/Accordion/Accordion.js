import React, { useState } from 'react';

const Accordion = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={`accordion ${isOpen ? 'open' : ''}`}>
            {React.Children.map(children, (child) => {
                if (child.type === Accordion.Title) {
                    return React.cloneElement(child, { isOpen, toggleAccordion });
                } else {
                    return child;
                }
            })}
        </div>
    );
}

Accordion.Title = ({ children, isOpen, toggleAccordion }) => {
    return (
        <button type="button" aria-expanded={isOpen} onClick={toggleAccordion} className={`accordion-title ${isOpen ? 'open' : ''}`}>
            <span className="title-content">{children}</span>
            <span className="icon-container">
                {isOpen ? (
                    <i className="fa-solid fa-chevron-up"></i>
                ) : (
                    <i className="fa-solid fa-chevron-down"></i>
                )}
            </span>
        </button>
    );
}

Accordion.Body = ({ children }) => {
    return (
        <div className="accordion-body">
            {children}
        </div>
    );
}

export default Accordion;

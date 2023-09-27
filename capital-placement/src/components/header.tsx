import "./header.css"
import React from 'react'

function Header() {
    let steps = ['Program Details', 'Application Form', 'Workflow', 'Preview'];
    return (
        <>
            <div id="Header">
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div className="header_step_value">{step}</div>
                        {index !== steps.length - 1 && <div className="header_step_separator"/>}
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}

export default Header
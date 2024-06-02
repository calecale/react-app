import React, { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext';

const Display = () => {
    const {display, previousOperand, operation} = useContext(CalculatorContext);


    return(
        <div className="output">
            <div className="previous-operand">
                {previousOperand} {operation}
            </div>
            <div className="current-operand">{display}</div>
        </div>
    );
};

export default Display;
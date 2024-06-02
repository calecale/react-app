import React, { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext';



const Button = ({button}) =>{

    const {handleNumberClick, handleOperationClick, handleClear, handleDelete, handleEquals} = useContext(CalculatorContext);

    const {label, className, onClick} = button;

    const handleClick = () => {
        switch (onClick) {
          case 'handleNumberClick':
            handleNumberClick(label);
            break;
          case 'handleOperationClick':
            handleOperationClick(label);
            break;
          case 'handleClear':
            handleClear();
            break;
          case 'handleDelete':
            handleDelete();
            break;
          case 'handleEquals':
            handleEquals();
            break;
          default:
            break;
        }
      };

    return(
        <button className={className} onClick={handleClick}>
            {label}
        </button>
    );
    
}

export default Button;
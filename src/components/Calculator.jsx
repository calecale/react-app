import React from 'react'
import Display from './Display';
import Button from './Button';


const buttons = [
    { label: 'AC', className: 'span-two', onClick: 'handleClear' },
    { label: 'DEL', onClick: 'handleDelete' },
    { label: '/', onClick: 'handleOperationClick' },
    { label: '1', onClick: 'handleNumberClick' },
    { label: '2', onClick: 'handleNumberClick' },
    { label: '3', onClick: 'handleNumberClick' },
    { label: '*', onClick: 'handleOperationClick' },
    { label: '4', onClick: 'handleNumberClick' },
    { label: '5', onClick: 'handleNumberClick' },
    { label: '6', onClick: 'handleNumberClick' },
    { label: '+', onClick: 'handleOperationClick' },
    { label: '7', onClick: 'handleNumberClick' },
    { label: '8', onClick: 'handleNumberClick' },
    { label: '9', onClick: 'handleNumberClick' },
    { label: '-', onClick: 'handleOperationClick' },
    { label: '.', onClick: 'handleNumberClick' },
    { label: '0', onClick: 'handleNumberClick' },
    { label: '=', className: 'span-two', onClick: 'handleEquals' }
  ];
  
  const Calculator = () => {
    return (
      <div className="calculator-grid">
        <Display />
        {buttons.map((button, index) => (
          <Button key={index} button={button} />
        ))}
      </div>
    );
  };
 
export default Calculator;
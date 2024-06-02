import React, { createContext, useState } from 'react'


export const CalculatorContext = createContext();

// export const useCalculator = () => {
//     return useContext(CalculatorContext);
//   };

//komponenta
const CalculatorProvider = ({children}) => {
    const [display, setDisplay]=useState('0');
    const [result, setResult] = useState(null);
    const [operation, setOperation] = useState(null);
    const [previousOperand, setPreviousOperand]=useState('');
    const [waitingForOperand, setWaitingForOperand] = useState(false); 

const handleNumberClick = (number) => {
    if(waitingForOperand) {
        setDisplay(number);
        setWaitingForOperand(false);

    }else{
        setDisplay(display === '0' ? number : display+number);

    }
}

const handleOperationClick = (nextOperation) => {
    if(result===null){
        setResult(parseFloat(display));
    }else if (operation){
        const current = parseFloat(display);
        const newResult = calculate(result, current, operation);
        setResult(newResult);
        setDisplay(newResult);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
    setPreviousOperand(display);

};

const calculate = (left, right, operation) => {
    switch (operation) {
        case '+':
            return left + right;
        case '-':
            return left - right;
        case '*':
            return left * right;
        case '/':
            return left / right;
        default:
            return right;
    }
};

const handleClear = () => {
    setDisplay('0');
    setOperation(null);
    setResult(null);
    setWaitingForOperand(false);
    setPreviousOperand('');
};

const handleDelete = () => {
    setDisplay(display.slice(0, -1) || '0'); //display.slice(0, -1) vraca podniz koji se sastoji od svih karaktera osim poslednjeg karaktera

//osigurava da se izbrise poslednji karakter iz trenutnog prikaza, a ako je prikaz prazan nakon brisanja, postavice se na '0' kako bi se osiguralo da kalkulator uvek ima barem jedan karakter prikazan
};

const handleEquals = () => {
    if(operation && result != null){
        const current = parseFloat(display);
        const newResult = calculate(result, current, operation);
        setDisplay(String(newResult));
        setResult(null);
        setOperation(null);
        setWaitingForOperand(true);
        setPreviousOperand('');
    }
};

const contextValue = {display, handleNumberClick, handleClear, handleDelete, handleEquals, handleOperationClick, previousOperand };


return(
    <CalculatorContext.Provider value={contextValue}>
        {children}
    </CalculatorContext.Provider>
)

}

export default CalculatorProvider; 
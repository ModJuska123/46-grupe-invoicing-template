import { useState } from 'react';

const Content = () => {
const [name, setName] = useState('Dave');
const [theme, setTheme] = useState('red');


const handleNameChange = () => {
    const name = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() *3);
    setName (name[int]);
    }
    
const handleClick = () => {
    console.log('Tu paspaudei 1 mygtuka');
}
const handleClick2 = (name) => {
    console.log(`${name} buvo surinktas`);
}
const handleClick3 = (e) => {
    console.log(`e.target.innerText`);
}
const spalvosKeitimas = () => {
    setTheme(prevTheme => 'blue');
}

       return (
        <main>
            <p>
                Hello {name};
            </p>
            <span>{theme}</span>
            <button on onClick={handleNameChange}>keisti varda</button>
            <button on onClick={() => handleClick2('Dave')}>Paspausti</button>
            <button on onClick={(e) => handleClick3(e)}>Paspausti</button>
            <button on onClick={() => spalvosKeitimas()}>spalvosKeitimas</button>
        </main>
        
  )
       }

export default Content

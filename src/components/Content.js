import React from 'react'

function Content() {
    const handleNameChange = () => {
        const name = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() *3);
        return name[int];
      }
    
       return (
        <main>
            <p>
                Hello {handleNameChange()}
            </p>
        </main>
        
  )
}

export default Content

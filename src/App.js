import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState(''); 
  const [error, setError] = useState(false); //if user choose non existing colour//
  const [list, setList] = useState(new Values('#EF5F6C').all(10)); // 10 - means 100%  is devided by 10, if we change to 20- it will be twice less blocks//

  const handleSubmit = (e) => {
    e.preventDefault ();
    try {
      let colors = new Values (color).all(10) //coppied this method from git hub - where the colour library is taken from//
      setList (colors)
    } catch (error) {
      setError(true)
      console.log (error);
    }
  }

  return (
    <> 
    <section className='container'>
      <h3> colour shades generator</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' 
        value={color} 
        onChange={(e) => setColor(e.target.value)}
        className={`${error? 'error': null}`}
        placeholder='#ef5f6c'
        />
        <button className='btn' type='submit'> Generate </button>
      </form>
    </section>

    <section className='colors'>
      {list.map((color,index) => {
        return <SingleColor 
        key={index} 
        {...color} 
        index={index} hexColor={color.hex}/>
      })}
    </section>
    </>
  )
 
}

export default App

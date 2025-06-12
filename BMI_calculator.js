import React ,{useState,useMemo}from 'react'
import './BMI_calculator.css'

const BMI_calculator = () => {
    const [height,setHeight] = useState(180);
    const [weight,setWeight] = useState(70);
    function onWeightChange(event){
       setWeight(event.target.value)
       console.log(weight)
    }
    function onHeightChange(event){
        setHeight(event.target.value)
        console.log(height)
    }
    const output = useMemo(()=>{
        const calculateHeight = height/100;
        return (weight/(calculateHeight*calculateHeight)).toFixed(1)
    },[weight,height]);
  return (
    <main>
        <h1>Project 2:BMI Calculator</h1>
        <div className='input-section'>
            <p className='slider-output'>Weight:{weight}Kg</p>
            <input className="input-slider" 
           type="range"
            step="1" min="40" max="200"
             onChange= {onWeightChange}/>
            <p className='slider-output'>Height:{height}cm
            </p>
            <input className="input-slider" type="range"
            min="140"
                max="220"
            onChange={onHeightChange}/>
             
        </div>
        <div className="output-section">
            <p>Your BMI is</p>
            <p className="output">{output}</p>
        </div>
      
    </main>
  )
}

export default BMI_calculator

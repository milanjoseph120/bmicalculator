import { Button } from "@mui/material"
import { useCallback, useState } from "react"

const Calculator = ()=>{
    const [age , setAge] = useState();
    const [weight , setWeight] = useState();
    const [height , setHeight] = useState();
    const [bmi , setBmi] = useState();
    const [msg , setMsg] = useState('')
    const reload =()=>{
        window.location.reload()
    }
    const handleCalculations = (e)=>{
        e.preventDefault()
        if(weight===0 || height===0){
            alert("please enter a valid number")
        }
        else{
            let bmiFormula = (weight / (height / 100)**2)
            setBmi(bmiFormula.toFixed(2))
        }
        if(bmi < 18 ){
            setMsg("You are underwieght")
        }
        else if(bmi >=18 || bmi<=24){
            setMsg("You are healthy")
        }
        else{
            setMsg("You are unhealthy , please seek for medication")
        }
    }
    return(
        <div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
        <div className="bg-light p-5 rounded">
        <h1 className="justify-content-center align-items-center  text-danger fw-bolder">BMI Calculator</h1>
         <form className='mt-5' onSubmit={handleCalculations}>
             <div className='mb-3'>
                 <label className="fw-bolder">Age:</label>
                 <input  className='w-100 border rounded'  type="number" placeholder="Age..." value={age} onChange={(e)=>setAge(e.target.value)} />
             </div>
             <div className='mb-3'>
                 <label className="fw-bolder">Weight:</label>
                 <input  className='w-100  border rounded' type="number" placeholder="Weight..." value={weight} onChange={(e)=>setWeight(e.target.value)} />
             </div>
             <div className='mb-3'>
                 <label className="fw-bolder">Height:</label>
                 <input  className='w-100  border rounded' type="number" placeholder="Height..." value={height} onChange={(e)=>setHeight(e.target.value)} />
             </div>
             <div>
                <Button  type="submit" style={{width:"150px", height:"50px"}} className='bg-success ' variant="contained">Calculate</Button>
                <Button onClick={reload} type="submit" style={{width:"150px", height:"50px"}} className='bg-danger ms-3' variant="contained">Reload</Button>
             </div>
             <div>
                <h2 className="text-dark  mt-3">Age:<span className="text-primary">{age}</span></h2>
                <h2 className="text-dark">Your BMI is:<span  className="text-primary">{bmi}</span></h2>
                <p className="fw-bolder text-danger">{msg}</p>
             </div>
         </form>
        </div>
        </div>
    )
}
export default Calculator
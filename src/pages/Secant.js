import { Form, Button } from 'react-bootstrap'
import { evaluate } from 'mathjs';
import { useState } from 'react';

const Secant = () => {

    const [fx, setfx] = useState('')
    const [x0, setx0] = useState(0)
    const [x1, setx1] = useState(0)
    const [xn, setxn] = useState('')

    const getfx = (event) => {
        setfx(event.target.value)
    }

    const getx0 = (event) => {
        setx0(event.target.value)
    }

    const getx1 = (event) => {
        setx1(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault();
        const data = {
            fx: fx,
            x0: Number(x0),
            x1: Number(x1)
        }
        console.log(data)
        calculate(fx, x0, x1)
    }

    const fontStyle = {
        fontSize: '1.5rem'
    }

    const paddingStyle = {
        padding: '0.75rem'
    }

    const calculate = (fx, x0, x1) => {

        let xn = 0
        let e = 0.000001
        let error = 100
       
        const func = (x) => {
            let scope = {
                x: x
            }
            let value = evaluate(fx,scope)
            
            return value
        }
      
        while(error>e){
            xn = x1 - ((func(x1)*(x0-x1))/(func(x0)-func(x1)))
            error = Math.abs((xn-x0)/xn)
            x0 = x1
            x1 = xn
        }

        console.log(xn)
        setxn(xn)
    }
    
    return (
        <div>
            <Form className='container' onSubmit={submit}>
                <div className='row justify-content-center'>
                    <h1 className='col-md-auto' >Secant Method</h1>
                </div>
                <div className='row justify-content-center'>
                    <Form.Group className='col-md-4' controlId='function'>
                        <Form.Label>Input Function</Form.Label> 
                        <Form.Control type='text' placeholder='Function' onChange={getfx}/>
                    </Form.Group>
                </div>
                <div className='row justify-content-center' style={paddingStyle}>
                    <Form.Group className='col-md-2' controlId='x0'>
                        <Form.Label>Input x0</Form.Label>
                        <Form.Control type='number' step='any' placeholder='x0' onChange={getx0}/>
                    </Form.Group>
                    <Form.Group className='col-md-2' controlId='x1'>
                        <Form.Label>Input x1</Form.Label>
                        <Form.Control type='number' step='any' placeholder='x1' onChange={getx1}/>
                    </Form.Group>
                </div>
                <div className='row justify-content-center' style={paddingStyle} >
                    <Button type="submit" className="btn btn-primary col-sm-auto">Calculate</Button> 
                </div>
            </Form>
            <div className='container' style={paddingStyle}>
                <div className='row justify-content-center'>
                    <h1 className='col-md-auto' style={fontStyle}>Result: {xn}</h1>
                </div>
            </div>
        </div>
    )
    
}

export default Secant

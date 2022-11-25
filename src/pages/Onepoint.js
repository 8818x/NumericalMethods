import { Form, Button } from 'react-bootstrap'
import { evaluate } from 'mathjs';
import { useState } from 'react';

const Onepoint = () => {

    const [fx, setfx] = useState('')
    const [xo, setxo] = useState(0)
    const [xn, setxn] = useState('')

    const getfx = (event) => {
        setfx(event.target.value)
    }

    const getxo = (event) => {
        setxo(event.target.value)
    }


    const submit = (event) => {
        event.preventDefault();
        const data = {
            fx: fx,
            xo: Number(xo),
        }
        console.log(data)
        calculate(fx, xo)
    }

    const fontStyle = {
        fontSize: '1.5rem'
    }

    const paddingStyle = {
        padding: '0.75rem'
    }

    const calculate = (fx, xo) => {

        let xn
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
            xn = func(xo)
            error = Math.abs((xn-xo)/xn)
            xo = xn;
        }

        console.log(xn)
        setxn(xn)
    }
    
    return (
        <div>
            <Form className='container' onSubmit={submit}>
                <div className='row justify-content-center'>
                    <h1 className='col-md-auto' >One-Point Iteration Method</h1>
                </div>
                <div className='row justify-content-center'>
                    <Form.Group className='col-md-4' controlId='function'>
                        <Form.Label>Input Function</Form.Label> 
                        <Form.Control type='text' placeholder='Example: x = 2-e^x/4' onChange={getfx}/>
                    </Form.Group>
                </div>
                <div className='row justify-content-center' style={paddingStyle}>
                    <Form.Group className='col-md-4' controlId='x0'>
                        <Form.Label>Input x0</Form.Label>
                        <Form.Control type='number' step='any' placeholder='x0' onChange={getxo}/>
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

export default Onepoint

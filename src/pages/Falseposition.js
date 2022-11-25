import { Form, Button } from 'react-bootstrap'
import { evaluate } from 'mathjs';
import { useState } from 'react';

const Falseposition = () => {

    const [fx, setfx] = useState('')
    const [xl, setxl] = useState(0)
    const [xr, setxr] = useState(0)
    const [x1, setx1] = useState('')

    const getfx = (event) => {
        setfx(event.target.value)
    }

    const getxl = (event) => {
        setxl(event.target.value)
    }

    const getxr = (event) => {
        setxr(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault();
        const data = {
            fx: fx,
            xl: Number(xl),
            xr: Number(xr),
        }
        console.log(data)
        calculate(fx, xl, xr)
    }

    const fontStyle = {
        fontSize: '1.5rem'
    }

    const paddingStyle = {
        padding: '0.75rem'
    }

    const calculate = (fx, xl, xr) => {

        let x1, ox1 = 0
        let e = 0.000001
        let error = 100
        let fxl, fxr, fx1
       
        const func = (x) => {
            let scope = {
                x: x
            }
            let value = evaluate(fx,scope)
            return value
        }

        while(error>e){
            fxr = func(xr);
            fxl = func(xl);
            x1 = ((xl*fxr)-(xr*fxl))/(fxr-fxl);
            fx1 = func(x1);
    
            if((fx1*fxr)<0) xl = x1;
            else xr = x1;
    
            error = Math.abs((x1-ox1)/x1)
            ox1 = x1
        }

        console.log(x1)
        setx1(x1)
    }
    

    return (
        <div>
            <Form className='container' onSubmit={submit}>
                <div className='row justify-content-center'>
                    <h1 className='col-md-auto' >False-Position Method</h1>
                </div>
                <div className='row justify-content-center'>
                    <Form.Group className='col-md-4' controlId='function'>
                        <Form.Label>Input Function</Form.Label> 
                        <Form.Control type='text' placeholder='Function' onChange={getfx}/>
                    </Form.Group>
                </div>
                <div className='row justify-content-center' style={paddingStyle}>
                    <Form.Group className='col-md-2' controlId='xl'>
                        <Form.Label>Input xl</Form.Label>
                        <Form.Control type='number' step='any' placeholder='xl' onChange={getxl}/>
                    </Form.Group>
                    <Form.Group className='col-md-2' controlId='xr'>
                        <Form.Label>Input xr</Form.Label>
                        <Form.Control type='number' step='any' placeholder='xr' onChange={getxr}/>
                    </Form.Group>
                </div>
                <div className='row justify-content-center' style={paddingStyle} >
                    <Button type="submit" className="btn btn-primary col-sm-auto">Calculate</Button> 
                </div>
            </Form>
            <div className='container' style={paddingStyle}>
                <div className='row justify-content-center'>
                    <h1 className='col-md-auto' style={fontStyle}>Result: {x1}</h1>
                </div>
            </div>
        </div>
    )
    
}

export default Falseposition
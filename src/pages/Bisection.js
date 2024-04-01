import { Form, Button } from 'react-bootstrap'
import { evaluate } from 'mathjs';
import { useState } from 'react';

const Bisection = () => {

    const [fx, setfx] = useState('')
    const [xl, setxl] = useState(0)
    const [xr, setxr] = useState(0)
    const [xm, setxm] = useState('')



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
        calculate(data)
    }

    const fontStyle = {
        fontSize: '1.5rem'
    }

    const paddingStyle = {
        padding: '0.75rem'
    }


    const calculate = (data) => {

        let xm, oxm = 0
        let e = 0.000001
        let error = 100
        let fxm, fxr


        const func = (x) => {
            let scope = {
                x: x
            }
            let value = evaluate(data.fx, scope)
            return value
        }

        while (error > e) {
            xm = (data.xl + data.xr) / 2;
            fxr = func(data.xr);
            fxm = func(xm);

            if ((fxm * fxr) < 0) data.xl = xm;
            else data.xr = xm;

            error = Math.abs((xm - oxm) / xm)
            oxm = xm

        }

        console.log(xm)
        setxm(xm)

    }

    return (
        <div>
            <Form className='container' onSubmit={submit}>
                <div className='row justify-content-center'>
                    <h1 className='col-md-auto' >Bisection Method</h1>
                </div>
                <div className='row justify-content-center'>
                    <Form.Group className='col-md-4' controlId='function'>
                        <Form.Label>Input Function</Form.Label>
                        <Form.Control type='text' placeholder='Function' onChange={getfx} />
                    </Form.Group>
                </div>
                <div className='row justify-content-center' style={paddingStyle}>
                    <Form.Group className='col-md-2' controlId='xl'>
                        <Form.Label>Input xl</Form.Label>
                        <Form.Control type='number' step='any' placeholder='xl' onChange={getxl} />
                    </Form.Group>
                    <Form.Group className='col-md-2' controlId='xr'>
                        <Form.Label>Input xr</Form.Label>
                        <Form.Control type='number' step='any' placeholder='xr' onChange={getxr} />
                    </Form.Group>
                </div>
                <div className='row justify-content-center' style={paddingStyle} >
                    <Button type="submit" className="btn btn-primary col-sm-auto">Calculate</Button>
                </div>
            </Form>
            <div className='container' style={paddingStyle}>
                <div className='row justify-content-center'>
                    <h1 className='col-md-auto' style={fontStyle}>Result: {xm}</h1>
                </div>
            </div>

        </div>
    )

}

export default Bisection

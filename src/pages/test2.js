import { Form, Button } from 'react-bootstrap'
import { useState } from 'react';

const Test2 = () => {

    const [x, setx] = useState(0)
    const [y, sety] = useState(0)
    const [f, setf] = useState('')
    const [value, setvalue] = useState('')


    const getx = (event) => {
        setx(event.target.value)
    }

    const gety = (event) => {
        sety(event.target.value)
    }

    const getf = (event) => {
        setf(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault();
        const data = {
           x: Number(x),
           y: Number(y),
           f: f
        }
        console.log(data)
        calculate(data)
    }

    const calculate = (data) => {
        let value = "String is " + data.f + " x is " + data.x + " y is " + data.y
        setvalue(value)
    }

    const fontStyle = {
        fontSize: '1.5rem'
    }

    const paddingStyle = {
        padding: '0.75rem'
    }

    return (
        <div>
            <Form className='container' onSubmit={submit}>
                <div className='row justify-content-center'>
                    <h1 className='col-md-auto' >Test 2</h1>
                </div>
                <div className='row justify-content-center'>
                    <Form.Group className='col-md-4' controlId='String'>
                        <Form.Label>Input String</Form.Label> 
                        <Form.Control type='text' placeholder='String' onChange={getf}/>
                    </Form.Group>
                </div>
                <div className='row justify-content-center' style={paddingStyle}>
                    <Form.Group className='col-md-2' controlId='x'>
                        <Form.Label>Input x</Form.Label>
                        <Form.Control type='number' step='any' placeholder='x' onChange={getx}/>
                    </Form.Group>
                    <Form.Group className='col-md-2' controlId='y'>
                        <Form.Label>Input y</Form.Label>
                        <Form.Control type='number' step='any' placeholder='y' onChange={gety}/>
                    </Form.Group>
                </div>
                <div className='row justify-content-center' style={paddingStyle} >
                    <Button type="submit" className="btn btn-primary col-sm-auto">Submit</Button> 
                </div>
            </Form>
            <div className='container' style={paddingStyle}>
                <div className='row justify-content-center'>
                    <h1 className='col-md-auto' style={fontStyle}>{value}</h1>
                </div>
            </div>
        </div>
    )
    
}

export default Test2

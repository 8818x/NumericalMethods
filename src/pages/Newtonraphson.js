import { Form, Button } from 'react-bootstrap'
import { evaluate , derivative } from 'mathjs';
import { useState } from 'react';
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

const Newtonraphson = () => {

    const [fx, setfx] = useState('')
    const [xo, setxo] = useState(0)
    const [xn, setxn] = useState('')
    const [d, setdiff] = useState('')
    const [datax, setdatax] = useState([])
    const [dataerror, setdataerror] = useState([])
  

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

    const options = {}
    const calculate = (fx, xo) => {

        let xn = 0, dxn = 0
        let e = 0.000001
        let error = 100
        let xn_arr = [], error_arr = []
        let i = 0;
        const func = (x) => {
            let scope = {
                x: x
            }
            let value = evaluate(fx,scope)

            return value
        }

        const dfunc = (x) => {
            let scope = {
                x: x
            }

            let diff = derivative(fx, 'x').evaluate(scope)
            return diff
        }

        let difftoString = derivative(fx, 'x').toString()
        setdiff(difftoString)

        while(error>e){
            dxn = -func(xo)/dfunc(xo)
            xn = xo-(-dxn)
            error = Math.abs((xn-xo)/xn)
            xo = xn;
            
            xn_arr[i] = xn
            error_arr[i] = error
            i++

        }

        console.log(xn)
        console.log(xn_arr)
        setxn(xn)

        setdatax({a:xn_arr})
    }
    
    return (
        <div>
            <Form className='container' onSubmit={submit}>
                <div className='row justify-content-center'>
                    <h1 className='col-md-auto' >Newton Raphson Method</h1>
                </div>
                <div className='row justify-content-center'>
                    <Form.Group className='col-md-4' controlId='function'>
                        <Form.Label>Input Function</Form.Label> 
                        <Form.Control type='text' placeholder='Function' onChange={getfx}/>
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
                <div className='row justify-content-center'>
                    <h1 className='col-md-auto' style={fontStyle}>Diff: {d}</h1>
                </div>
            </div>
            <div className='container' style={paddingStyle}>
                <div className='row justify-content-center'>
                    {/* <Line data = {datax.a} options = {options}></Line> */}
                </div>
            </div>
        </div>
    )
    
}

export default Newtonraphson

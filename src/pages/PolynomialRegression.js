
import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { evaluate, usolve } from "mathjs"

const PolynomialRegression = () => {
    const [n, setn] = useState("")
    const [x, setx] = useState("")
    const [fx, setfx] = useState("")
    const [degree, setdegree] = useState("")
    const [value, setvalue] = useState("")
    const [matrix, setmatrix] = useState("")

    const getn = (event) => {
        setn(event.target.value)
    }

    const getx = (event) => {
        setx(event.target.value)
    }

    const getdegree = (event) => {
        setdegree(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault()
        genarate()
    }

    const paddingStyle = {
        padding: "0.75rem",
    }

    const genarate = () => {
        let array = []
        for (let i = 0; i < n; i++) {
            array[i] = []
            let temp = []
            for (let j = 0; j < 2; j++) {
                if (j == 1) {
                    temp.push(
                        <Form.Group className="col-md-1" style={paddingStyle}>
                            <Form.Label>
                                B[{i}][{0}]
                            </Form.Label>
                            <Form.Control
                                id={"column" + i + "row" + j}
                                type="number"
                                step="any"
                            />
                        </Form.Group>
                    )
                } else
                    temp.push(
                        <Form.Group className="col-md-1" style={paddingStyle}>
                            <Form.Label>
                                A[{i}][{j}]
                            </Form.Label>
                            <Form.Control
                                id={"column" + i + "row" + j}
                                type="number"
                                step="any"
                            />
                        </Form.Group>
                    )
            }
            array[i].push(<div key={temp} className="row justify-content-center">{temp}</div>)
        }
        setmatrix({ a: array })
    }

    const calculate = (event) => {
        event.preventDefault()

        let calmatrix = []
        for (let i = 0; i < n; i++) {
            calmatrix[i] = [];
            for (let j = 0; j < 2; j++) {
                calmatrix[i].push(
                    Number(document.getElementById("column" + i + "row" + j).value)
                )
            }
        }
        console.log(calmatrix)

        let a = [[0, 0], [0, 0]]
        a[0][0] = n // n

        for (let i = 0; i < n; i++) {
            a[0][1] += calmatrix[i][0] // sum x
            a[1][0] += calmatrix[i][0] // sum y
            a[1][1] += Math.pow(calmatrix[i][0], 2) // sum x^2
        }

        let b = [0, 0]
        for (let i = 0; i < n; i++) {
            b[0] += calmatrix[i][1]
            b[1] += calmatrix[i][0] * calmatrix[i][1]
        }

        let ans = [], iter = []
        let u = usolve(a, b)
        console.log(usolve(a, b))

        for (let i = 0; i < u.length; i++) {
            ans.push(
                <div key={i}>
                    a{i} = {Number(u[i]).toFixed(6)}
                </div>
            )
            iter[i] = i
        }

        let string = "" + Number(u[0]).toFixed(6) + "+" + Number(u[1]).toFixed(6) + "*x"
        setfx(string)

        const func = () => {
            let scope = {
                x: x
            }
            let value = evaluate(string, scope)
            return value
        }

        setvalue(func())
        setmatrix({ a: matrix.a, b: ans, c: iter });

    }

    return (
        <div className="container">
            <div className='row justify-content-center'>
                <h1 className='col-md-auto' >Polynomial Regression Method</h1>
            </div>
            <div className='row justify-content-center' style={paddingStyle}>
                <Form.Group className="col-md-auto">
                    <Form.Label>Input n</Form.Label>
                    <Form.Control
                        type="number"
                        onChange={getn}
                        placeholder="n"
                        step="1"
                    />
                </Form.Group>
                <Form.Group className="col-md-auto">
                    <Form.Label>Input x</Form.Label>
                    <Form.Control
                        type="number"
                        onChange={getx}
                        placeholder="x"
                        step="any"
                    />
                </Form.Group>
                <Form.Group className="col-md-auto">
                    <Form.Label>Input degrees</Form.Label>
                    <Form.Control
                        type="number"
                        onChange={getdegree}
                        placeholder="degrees"
                        step="1"
                    />
                </Form.Group>
            </div>
            <div className='row justify-content-center'>
                <div className="col-md-auto" style={paddingStyle}>
                    <Button onClick={submit}>Generate</Button>
                </div>
            </div>
            <div className="row justify-content-center">
                <div>{matrix.a}</div>
            </div>
            <div className="row justify-content-center" style={paddingStyle}>
                <div className="col-md-auto">
                    <Button onClick={calculate}>Calculate</Button>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-auto" style={paddingStyle}>{matrix.b}</div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-auto">f(x): {fx}</div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-auto">f({x}): {value}</div>
            </div>
        </div>
    )
}

export default PolynomialRegression
import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import "chart.js/auto"

const GaussJordan = () => {
    const [n, setn] = useState("")
    const [matrix, setmatrix] = useState("")

    const getn = (event) => {
        setn(event.target.value)
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
            for (let j = 0; j <= n; j++) {
                if (j == n) {
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
            for (let j = 0; j <= n; j++) {
                calmatrix[i].push(
                    Number(document.getElementById("column" + i + "row" + j).value)
                )
            }
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i != j) {
                    var ratio = calmatrix[j][i] / calmatrix[i][i];
                    for (let k = 0; k < n + 1; k++) {
                        calmatrix[j][k] = calmatrix[j][k] - ratio * calmatrix[i][k];
                        // console.log(matrix[j][k])
                    }
                }
            }
        }

        let x = []
        for (let i = 0; i < n; i++) {
            x[i] = calmatrix[i][n] / calmatrix[i][i];
        }

        console.log(x)

        let ans = []
        for (let i = 0; i < x.length; i++) {
            ans.push(
                <div key={i}>
                    x{i + 1} = {x[i].toFixed(6)}
                </div>
            )
        }
        setmatrix({ a: matrix.a, b: ans })
    }

    return (
        <div className="container">
            <div className='row justify-content-center'>
                <h1 className='col-md-auto' >Gauss-Jordan Elimination Method</h1>
            </div>
            <div className='row justify-content-center'>
                <Form.Group className="col-md-auto" controlId="n">
                    <Form.Label>Input size of array</Form.Label>
                    <Form.Control
                        type="number"
                        onChange={getn}
                        placeholder="size of array"
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
            <div className="row justify-content-center">
                <Button className="col-md-auto" onClick={calculate}>Calculate</Button>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-auto" style={paddingStyle}>{matrix.b}</div>
            </div>

        </div>
    )
}

export default GaussJordan

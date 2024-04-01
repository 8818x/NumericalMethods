// import { Form, Button, Table } from "react-bootstrap"
// import { evaluate, derivative } from "mathjs"
// import { useState } from "react"
// import { Line } from "react-chartjs-2"

const NewtonRaphson = () => {
    // const [fx, setfx] = useState("")
    // const [xo, setxo] = useState(0)
    // const [xn, setxn] = useState("")
    // const [d, setdiff] = useState("")
    // const [dataGraph, setGraph] = useState([])
    // const [dataTable, setTable] = useState([])

    // const getfx = (event) => {
    //     setfx(event.target.value);
    // }

    // const getxo = (event) => {
    //     setxo(event.target.value)
    // }

    // const submit = (event) => {
    //     event.preventDefault()
    //     const data = {
    //         fx: fx,
    //         xo: Number(xo)
    //     }
    //     console.log(data)
    //     calculate(fx, xo)
    // }

    // const fontStyle = {
    //     fontSize: "1.5rem",
    // }

    // const paddingStyle = {
    //     padding: "0.75rem",
    // }

    // const graphStyle = {
    //     padding: "0.75rem",
    //     width: '600px',
    //     height: '400px'
    // }

    // const value = {
    //     labels: dataGraph.z,
    //     datasets: [
    //         {
    //             label: "x",
    //             data: dataGraph.x,
    //             borderColor: "#3fc1c9",
    //             backgroundColor: "#3fc1c9",
    //             yAxisID: "y",
    //         },
    //         {
    //             label: "error",
    //             data: dataGraph.y,
    //             borderColor: "#fc5185",
    //             backgroundColor: "#fc5185",
    //             yAxisID: "y",
    //         },
    //     ],
    // };

    // const options = {}
    // const calculate = (fx, xo) => {
    //     let xn = 0,
    //         dxn = 0
    //     let e = 0.000001
    //     let error = 100;
    //     let xn_arr = [],
    //         error_arr = [],
    //         iter_arr = []
    //     let array = []
    //     let i = 0

    //     const func = (x) => {
    //         let scope = {
    //             x: x,
    //         }
    //         let value = evaluate(fx, scope)

    //         return value
    //     }

    //     const dfunc = (x) => {
    //         let scope = {
    //             x: x,
    //         }

    //         let diff = derivative(fx, "x").evaluate(scope)
    //         return diff
    //     }

    //     let difftoString = derivative(fx, "x").toString()
    //     setdiff(difftoString)

    //     while (error > e) {
    //         dxn = -func(xo) / dfunc(xo)
    //         xn = xo - -dxn;
    //         error = Math.abs((xn - xo) / xn)
    //         xo = xn

    //         xn_arr[i] = xn
    //         error_arr[i] = error
    //         iter_arr[i] = i

    //         array.push({ x: xn, y: error, z: i })
    //         i++
    //     }

    //     setxn(xn)
    //     setGraph({ x: xn_arr, y: error_arr, z: iter_arr })
    //     setTable(array)
    //     console.log(array)
    // }

    return (
        <div>
            {/* <Form className="container" onSubmit={submit}>
                <div className="row justify-content-center">
                    <h1 className="col-md-auto">Newton Raphson Method</h1>
                </div>
                <div className="row justify-content-center">
                    <Form.Group className="col-md-4" controlId="function">
                        <Form.Label>Input Function</Form.Label>
                        <Form.Control type="text" placeholder="Function" onChange={getfx} />
                    </Form.Group>
                </div>
                <div className="row justify-content-center" style={paddingStyle}>
                    <Form.Group className="col-md-4" controlId="x0">
                        <Form.Label>Input x0</Form.Label>
                        <Form.Control
                            type="number"
                            step="any"
                            placeholder="x0"
                            onChange={getxo}
                        />
                    </Form.Group>
                </div>
                <div className="row justify-content-center" style={paddingStyle}>
                    <Button type="submit" className="btn btn-primary col-sm-auto">
                        Calculate
                    </Button>
                </div>
            </Form>
            <div className="container" style={paddingStyle}>
                <div className="row justify-content-center">
                    <h1 className="col-md-auto" style={fontStyle}>
                        Result: {xn}
                    </h1>
                    <h1 className="col-md-auto" style={fontStyle}>
                        Diff: {d}
                    </h1>
                </div>
                <div className="row justify-content-center">
                    
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center" >
                    <div className="col-md-auto" style={graphStyle}>
                        <Line data={value} options={options}></Line>
                    </div>
                    <div className="col-md-auto" style={graphStyle}>
                        <Table  className="table table-bordered col-md-auto">
                            <thead>
                                <tr>
                                    <th scope="col">Iteration</th>
                                    <th scope="col">x</th>
                                    <th scope="col">error</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataTable.map((item) => {
                                    return (
                                        <tr key={item.x}>
                                            <td>{item.z}</td>
                                            <td>{item.x}</td>
                                            <td>{item.y}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default NewtonRaphson;

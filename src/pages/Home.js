import React, { Component } from "react";
import Header from "../Header/Header";
import "./home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oper1: "",
      oper2: "",
      oper3: "",
      result: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { oper1, oper2, oper } = this.state;
    console.log(oper,oper1,oper2);
    fetch("http://localhost:8080/calculator", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        oper1,
        oper2,
        oper
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          this.setState({result: data.calcResponse});
        }
      });
  }
  render() {
    return (
      <div>
        <Header />
        <div className="home_background">
          <div className="part1">
            <h3>Let's Calculate</h3>
            <p>You can improve your daily activities using our calculator</p>
            <div className="calculator mt-3">
              <form onSubmit={this.handleSubmit}>
                <h3>Calculator</h3>

                <div className="mb-3">
                  <label>Operand 1</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Second Number"
                    onChange={(e) => this.setState({ oper1: e.target.value })}
                  />
                </div>

                <div className="mb-3">
                  <label>Operand 2</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter First Number"
                    onChange={(e) => this.setState({ oper2: e.target.value })}
                  />
                </div>

                <div className="mb-3">
                  <label>Operandion</label>
                  <select className="form-control" onChange={(e) => this.setState({ oper: e.target.value })}>
                    <option>Select operation</option>
                    <option value="+">Addition</option>
                    <option value="-">Substraction</option>
                    <option value="*">Multiplication</option>
                    <option value="**">Power</option>
                    <option value="log">Logs</option>
                    <option value="ln">Ln</option>
                    <option value="/">Division</option>
                  </select>
                </div>

                <div className="d-grid">
                  <button data-testid="calculate"
                    type="submit"
                    onClick={(e) => this.handleSubmit(e)}
                    className="btn btn-primary"
                  >
                    Calculate
                  </button>
                </div>
                { this.state.result ? <div className="bg-success mt-3 p-3 text-light">{this.state.result}</div> : <div></div>}
                
              </form>
            </div>
          </div>
          <div className="part2">
            <h4 className="pt-4">HEADQUARTERS</h4>
            <p>358 Kigali St, #200</p>
            <p className="mb-4">Kigali Arena, KG 4829</p>

            <h4>PHONE</h4>
            <p>888-9894-928</p>
          </div>
        </div>
      </div>
    );
  }
}

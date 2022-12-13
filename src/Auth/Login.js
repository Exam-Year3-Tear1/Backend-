import React, { Component } from "react";
import Dashboard from "../pages/Dashboard";
import "./forms.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          // window.location.href = "./userDetails";
          
           window.location.href = "./dashboard";
        }
      });

    // let component;
    switch (window.location.pathname) {
      case "/dashboard":
        <Dashboard />;
        break;
      default:
        <Login />;
        break;
    }
    // const history = useHistory();
  }

  render() {
    return (
      <div className="login_background p-5">
        <div className="login_form container shadow p-4 mt-5">
          <h1>E - Pharmacy</h1>
          <p className="text-muted">
            Welcome to Electronic Pharmacy? Are you looking for help? We deliver
            to you our products wherever you are! Login to continue
          </p>
          <form onSubmit={this.handleSubmit}>
            <h3>Sign In</h3>

            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <div className="d-grid">
              <button
                type="submit"
                onClick={(e) => this.handleSubmit(e)}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
            <p className="forgot-password text-right">
              <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

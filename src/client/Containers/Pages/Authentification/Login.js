import * as React from "react";
import axios from "axios";
import LogoBecode from "../../../../assets/logo_Becode.png";
import Logo from "../../../components/logo";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: "",
            password: "",
            admin: false,
            login_button: "submit-button",
            login: "Login",
            disabled_button: "",
        };
    }

    handleChange(e) {
        let target = e.target;

        this.setState({
            [target.name]:
                target.type === "checkbox" ? target.checked : target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.admin);
        axios
            .post(`http://localhost/api/login`, {
                email: this.state.email,
                password: this.state.password,
            })
            .then(res => {
                if (res.status !== 200) {
                    console.log("email ou mot de pass incorrect");
                } else {
                    console.log(res.data);

                    this.setState({
                        login_button: "success-button",
                        login: "Success",
                    });

                    window.location = "/Homepagetest";
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <>
                <div className="backgoundImage" />
                <div className="login_container">
                    <section className="section_login_title">
                        <a href="https://becode.org">
                            <img className="logo_login" src={LogoBecode} />
                        </a>
                        <Logo />
                    </section>
                    <div className="login_block">
                        <form onSubmit={this.handleSubmit}>
                            <i className="far fa-envelope icon-input-field" />

                            <label id="icon-input-field" htmlFor="email" />
                            <input
                                className="input_login is-small"
                                type="text"
                                name="email"
                                id="email"
                                placeholder="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />

                            <br />
                            <br />
                            <i className="fas fa-key icon-input-field" />
                            <label id="icon-input-field" htmlFor="password" />
                            <input
                                className="input_login is-small"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                            />
                            <br />
                            <br />

                            <br />
                            <button
                                disabled={
                                    !this.state.email && !this.state.password
                                }
                                type="submit"
                                className={this.state.login_button}>
                                {this.state.login}
                            </button>
                            <p>{"Forgot your password ?"}</p>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

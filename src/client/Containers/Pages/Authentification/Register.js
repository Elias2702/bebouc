import * as React from "react";
import axios from "axios";

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name: "",
            surname: "",
            email: "",
            password: "",
            admin: false,
            addusers_button: "primary-button",
            addusers_success: "Add User",
            disabled_button: "",
            error_input: "input_addusers is-small",
            error_alreadyexist: "",
        };
    }

    componentDidUpdate() {}

    handleChange(e) {
        let target = e.target;

        this.setState({
            [target.name]:
                target.type === "checkbox" ? target.checked : target.value,
        });
    }

    resetStates() {
        this.setState({
            name: "",
            surname: "",
            email: "",
            password: "",
            admin: false,
            addusers_button: "submit-button",
            addusers_success: "Add User",
            disabled_button: "",
            error_input: "input_addusers is-small",
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.admin);
        axios
            .post(`/api/create`, {
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                surname: this.state.surname,
                admin: this.state.admin,
            })
            .then(res => {
                if (res.status !== 200) {
                    console.log("Email déjà existante");
                    this.setState({
                        error_input: "error",
                        error_alreadyexist: "Email already exist",
                    });
                } else {
                    console.log(res.data);

                    this.setState({
                        addusers_button: "success-button",
                        addusers_success: "Success",
                        error_input: "",
                        error_alreadyexist: "",
                    });

                    setTimeout(
                        () =>
                            this.setState({
                                name: "",
                                surname: "",
                                email: "",
                                password: "",
                                admin: false,
                                addusers_button: "submit-button",
                                addusers_success: "Add User",
                                disabled_button: "",
                                error_input: "input_addusers is-small",
                                error_alreadyexist: "",
                            }),
                        1000,
                    );
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className={`modal ${this.props.show}`}>
                <div className="modal-background" />
                <div className="modal-content">
                    <div className="container">
                        <section className="section_addusers_title">
                            <h1 className="addusers_title">
                                {" "}
                                {" Add New User"}{" "}
                            </h1>{" "}
                        </section>{" "}
                        <div className="adduser-component">
                            <form onSubmit={this.handleSubmit}>
                                <i className="far fa-envelope icon-input-field" />
                                <label id="icon-input-field" htmlFor="email" />
                                <input
                                    className={this.state.error_input}
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    required
                                />
                                <br />
                                <i className="far fa-user icon-input-field" />
                                <label id="icon-input-field" htmlFor="name" />
                                <input
                                    className="input_addusers is-small"
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    required
                                />
                                <br />
                                <i className="fas fa-signature icon-input-field" />
                                <label
                                    id="icon-input-field"
                                    htmlFor="surname"
                                />
                                <input
                                    className="input_addusers is-small"
                                    type="text"
                                    name="surname"
                                    id="surname"
                                    placeholder="Surname"
                                    value={this.state.surname}
                                    onChange={this.handleChange}
                                    required
                                />
                                <br />
                                <i className="fas fa-key icon-input-field" />
                                <label
                                    id="icon-input-field"
                                    htmlFor="password"
                                />
                                <input
                                    className="input_addusers is-small"
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
                                <label htmlFor="admin">
                                    {" "}
                                    {" Coach "}{" "}
                                </label>{" "}
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    name="admin"
                                    value={this.state.admin}
                                    onChange={this.handleChange}
                                    checked={this.state.admin}
                                />
                                <br />
                                <p className="error">
                                    {" "}
                                    {this.state.error_alreadyexist}{" "}
                                </p>{" "}
                                <button
                                    disabled={
                                        !this.state.email &&
                                        !this.state.name &&
                                        !this.state.surname &&
                                        !this.state.password
                                    }
                                    type="submit"
                                    className={this.state.addusers_button}>
                                    {" "}
                                    {this.state.addusers_success}{" "}
                                </button>{" "}
                            </form>{" "}
                            <hr />
                            <a href="/">
                                {" "}
                                <button
                                    type="submit"
                                    className="secondary-button">
                                    {" "}
                                    {"Back"}{" "}
                                </button>{" "}
                            </a>{" "}
                        </div>{" "}
                    </div>
                </div>
                <button
                    onClick={this.props.close}
                    className="modal-close is-large"
                    aria-label="close"
                />
            </div>
        );
    }
}

export default Register;

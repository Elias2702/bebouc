import * as React from "react";
import axios from "axios";
import UserLine from "../../Components/UserLine";
import Register from "../Authentification/Register";

export default class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            showModal: "",
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        axios.get(`/api/users`).then(res => {
            const users = res.data;

            this.setState({users});
            console.log(users);
        });
    }

    handleClick() {
        this.setState({showModal: "is-active"});
    }

    handleClose() {
        this.setState({showModal: ""});
    }

    render() {
        const displayEachUserLine = this.state.users.map((user, i) => {
            let index = i + 1;

            return (
                <UserLine
                    index={index}
                    key={user._id}
                    userid={user._id}
                    name={user.name}
                    surname={user.surname}
                    admin={user.admin}
                    email={user.email}
                />
            );
        });

        return (
            <>
                <button className="submit-button" onClick={this.handleClick}>
                    {" "}
                    {"Add a User"}{" "}
                </button>
                <Register
                    show={this.state.showModal}
                    close={this.handleClose}
                />
                <table className="table">
                    <thead>
                        <tr>
                            <th>{"Email"}</th>
                            <th>{"Name"}</th>
                            <th>{"Surname"}</th>
                            <th>{"Admin"}</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>{displayEachUserLine}</tbody>
                </table>
            </>
        );
    }
}

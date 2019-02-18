import * as React from "react";
import DeleteModal from "./DeleteModal";
import axios from "axios";

export class UserLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showmodal: "",
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleClick() {
        this.setState({showModal: "is-active"});
    }

    handleClose() {
        this.setState({showModal: ""});
    }

    handleDelete = event => {
        event.preventDefault();
        axios
            .delete(`/api/users/${this.props.userid}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        const isadmin = this.props.admin;

        return (
            <tr>
                <th>{this.props.email}</th>
                <td>{this.props.name}</td>
                <td>{this.props.surname}</td>
                <td>{isadmin ? "Yes" : "No"}</td>
                <td>
                    <button
                        className="selected-button"
                        onClick={this.handleClick}>
                        {"Delete"}
                    </button>
                </td>
                <DeleteModal
                    name={"a user"}
                    closeModal={this.handleClose}
                    show={this.state.showModal}
                    title={this.props.email}
                    delete={this.handleDelete}
                />
            </tr>
        );
    }
}

export default UserLine;

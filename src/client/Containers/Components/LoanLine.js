import * as React from "react";
import DeleteModal from "./DeleteModal";
import axios from "axios";

export class LoanLine extends React.Component {
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
            .delete(`/api/books/${this.props.loanid}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <tr>
                <th>{this.props.book}</th>
                <th>{this.props.borrower}</th>
                <td>{this.props.date}</td>
                <td>
                    <button className="secondary-button">{"Edit"}</button>
                    <button
                        className="selected-button"
                        onClick={this.handleClick}>
                        {"Delete"}
                    </button>
                </td>
                <DeleteModal
                    name={"a loan"}
                    closeModal={this.handleClose}
                    show={this.state.showModal}
                    title={`the loan of ${this.props.book} by ${
                        this.props.borrower
                    }`}
                    delete={this.handleDelete}
                />
            </tr>
        );
    }
}

export default LoanLine;

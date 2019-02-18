import * as React from "react";
import DeleteModal from "./DeleteModal";
import axios from "axios";

export class BookLine extends React.Component {
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
            .delete(`/api/books/${this.props.bookid}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        const isbook = this.props.book;
        const isebook = this.props.ebook;

        return (
            <tr>
                <th>{this.props.title}</th>
                <td>{this.props.author}</td>
                <td>{this.props.isbn}</td>
                <td>{this.props.language}</td>
                <td>{this.props.owner}</td>
                <td>{isbook ? "Yes" : "No"}</td>
                <td>{isebook ? "Yes" : "No"}</td>
                <td>
                    <button className="secondary-button">{"Edit"}</button>
                    <button
                        className="selected-button"
                        onClick={this.handleClick}>
                        {"Delete"}
                    </button>
                </td>
                <DeleteModal
                    name={"a book"}
                    closeModal={this.handleClose}
                    show={this.state.showModal}
                    title={this.props.title}
                    delete={this.handleDelete}
                />
            </tr>
        );
    }
}

export default BookLine;

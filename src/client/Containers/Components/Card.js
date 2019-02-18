import * as React from "react";
import Modal from "./Modal";
import Magazine from "../../../assets/logo_Becode.png";
import axios from "axios";

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: "", thumbnail: Magazine};
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        // DOC OpenLibrary API : https://openlibrary.org/dev/docs/api/books
        // Test avec Google Book API - A rediscuter
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=isbn:${
                    this.props.isbn
                }`,
            )
            .then(res => {
                const thumbnail =
                    res.data.items[0].volumeInfo.imageLinks.thumbnail;

                this.setState({thumbnail});
            });
    }

    handleClick() {
        this.setState({showModal: "is-active"});
    }

    handleClose() {
        this.setState({showModal: ""});
    }

    render() {
        return (
            <div id="bookCard">
                <ul>
                    <h1 id="bookCardHeader">{`${this.props.title}`}</h1>
                    <li>
                        <img
                            src={this.state.thumbnail}
                            id="cardImage"
                            onClick={this.handleClick}
                        />
                    </li>

                    <li>{`Author : ${this.props.author}`}</li>
                    <li>{`Language : ${this.props.language}`}</li>

                    <li id="bookCardFooter">
                        {" "}
                        <Modal
                            thumbnail={this.state.thumbnail}
                            closeModal={this.handleClose}
                            show={this.state.showModal}
                            index={this.props.index}
                            key={this.props._id}
                            id={this.props.id}
                            title={this.props.title}
                            author={this.props.author}
                            language={this.props.language}
                            owner={this.props.owner}
                            summary={this.props.summary}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

export default Card;

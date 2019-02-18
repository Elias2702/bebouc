import * as React from "react";
import axios from "axios";
import BookLine from "../../Components/BookLine";
import AddBook from "../Catalogue/AddBook";

export class BooksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            showModal: "",
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        axios.get(`/api/books`).then(res => {
            const books = res.data;

            this.setState({books});
        });
    }

    handleClick() {
        this.setState({showModal: "is-active"});
    }

    handleClose() {
        this.setState({showModal: ""});
    }

    render() {
        const displayEachBookLine = this.state.books.map((book, i) => {
            let index = i + 1;

            return (
                <BookLine
                    index={index}
                    key={book._id}
                    bookid={book._id}
                    title={book.title}
                    author={book.author}
                    isbn={book.isbn}
                    language={book.language}
                    owner={book.owner}
                    book={book.isBook}
                    ebook={book.isEbook}
                />
            );
        });

        return (
            <>
                <button className="submit-button" onClick={this.handleClick}>
                    {" "}
                    {"Add a Book"}{" "}
                </button>
                <AddBook show={this.state.showModal} close={this.handleClose} />
                <table className="table">
                    <thead>
                        <tr>
                            <th>{"Title"}</th>
                            <th>{"Author"}</th>
                            <th>{"ISBN"}</th>
                            <th>{"Language"}</th>
                            <th>{"Owner"}</th>
                            <th>{"Book?"}</th>
                            <th>{"Ebook?"}</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>{displayEachBookLine}</tbody>
                </table>
            </>
        );
    }
}

export default BooksList;

import * as React from "react";
import axios from "axios";
import NavCatalogue from "./NavCatalogue";
import Card from "../../Components/Card";
// import NavCatalogue from "./NavCatalogue";

export class Catalogue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            thumbnail: [],
        };
    }

    componentDidMount() {
        axios.get(`/api/books`).then(res => {
            const books = res.data;

            this.setState({books});
        });
    }

    render() {
        const displayEachBook = this.state.books.map((book, i) => {
            let index = i + 1;

            return (
                <Card
                    index={index}
                    key={book._id}
                    id={book._id}
                    title={book.title}
                    isbn={book.isbn}
                    author={book.author}
                    language={book.language}
                    owner={book.owner}
                    summary={book.summary}
                />
            );
        });

        return (
            <div className="backgroundhome">
                <NavCatalogue />

                <div className="backgroundcat">{displayEachBook}</div>
            </div>
        );
    }
}
export default Catalogue;

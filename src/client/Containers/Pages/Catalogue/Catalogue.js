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
        };
    }

    componentDidMount() {
        axios.get(`http://localhost/api/books`).then(res => {
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
                    Laura={book.title}
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
                {displayEachBook}
            </div>
        );
    }
}
export default Catalogue;

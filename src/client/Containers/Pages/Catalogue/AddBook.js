import * as React from "react";
import axios from "axios";

export class AddBook extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            books: [],
            isBook: false,
            isEbook: false,
        };
    }

    componentDidMount() {
        axios.get(`/api/books`).then(res => {
            const books = res.data;

            this.setState({books});
            console.log(books);
        });
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
        axios
            .post(`/api/books`, {
                title: this.state.title,
                author: this.state.author,
                isbn: this.state.isbn,
                language: this.state.language,
                summary: this.state.summary,
                owner: "John",
                isEbook: true,
                isBook: false,
            })
            .then(res => {
                if (res.status !== 200) {
                    console.log("Livre déjà existant");
                } else {
                    this.setState(prevState => {
                        return {
                            books: [...prevState.books, res.data],
                        };
                    });
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
                                {" Add New book"}{" "}
                            </h1>{" "}
                        </section>{" "}
                        <div className="adduser-component">
                            <form onSubmit={this.handleSubmit}>
                                <label id="icon-input-field" htmlFor="title" />
                                <input
                                    className="input is-info is-small"
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="title"
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                    required
                                />

                                <br />

                                <label id="icon-input-field" htmlFor="author" />
                                <input
                                    className="input is-info is-small"
                                    type="text"
                                    name="author"
                                    id="author"
                                    placeholder="author"
                                    value={this.state.author}
                                    onChange={this.handleChange}
                                    required
                                />
                                <br />

                                <label id="icon-input-field" htmlFor="isbn" />
                                <input
                                    className="input is-info is-small"
                                    type="text"
                                    name="isbn"
                                    id="isbn"
                                    placeholder="ISBN "
                                    value={this.state.isbn}
                                    onChange={this.handleChange}
                                    required
                                />
                                <br />
                                <label
                                    id="icon-input-field"
                                    htmlFor="language"
                                />
                                <input
                                    className="input is-info is-small"
                                    type="text"
                                    name="language"
                                    id="language"
                                    placeholder="Language"
                                    value={this.state.language}
                                    onChange={this.handleChange}
                                    required
                                />
                                <br />
                                <textarea
                                    className="textarea is-info is-small"
                                    type="text"
                                    name="summary"
                                    id="summary"
                                    placeholder="summary"
                                    value={this.state.summary}
                                    onChange={this.handleChange}
                                    cols="30"
                                    rows="5"
                                    required
                                />
                                <br />
                                <input
                                    className="input is-info is-small"
                                    type="text"
                                    name="owner"
                                    id="owner"
                                    placeholder="owner"
                                    value={this.state.owner}
                                    onChange={this.handleChange}
                                    required
                                />
                                <br />
                                <br />

                                <button
                                    type="submit"
                                    className="primary-button">
                                    {"Add Book"}
                                </button>
                            </form>
                            <hr />

                            <a href="/">
                                {" "}
                                <button
                                    type="submit"
                                    className="secondary-button">
                                    {"Back"}
                                </button>
                            </a>
                        </div>
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

export default AddBook;

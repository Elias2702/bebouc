import * as React from "react";
import axios from "axios";
import AddLoan from "../Catalogue/AddLoan";
import LoanLine from "../../Components/LoanLine";

export default class LoansList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loans: [],
            showModal: "",
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        axios.get(`/api/loans`).then(res => {
            const loans = res.data;

            this.setState({loans});
        });
    }

    handleClick() {
        this.setState({showModal: "is-active"});
    }

    handleClose() {
        this.setState({showModal: ""});
    }

    render() {
        const displayEachLoanLine = this.state.loans.map((loan, i) => {
            let index = i + 1;

            return (
                <LoanLine
                    index={index}
                    key={loan._id}
                    loanid={loan._id}
                    book={loan.bookID}
                    borrower={loan.borrowerID}
                    date={loan.updatedAt}
                />
            );
        });

        return (
            <>
                <button className="submit-button" onClick={this.handleClick}>
                    {" "}
                    {"Add a Loan"}{" "}
                </button>
                <AddLoan show={this.state.showModal} close={this.handleClose} />
                <table className="table">
                    <thead>
                        <tr>
                            <th>{"Book"}</th>
                            <th>{"User"}</th>
                            <th>{"Date"}</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>{displayEachLoanLine}</tbody>
                </table>
            </>
        );
    }
}

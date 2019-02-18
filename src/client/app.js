import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import axios from "axios";
// import registerServiceWorker from "./registerServiceWorker";
import {Route, Switch} from "react-router-dom";
import {Login} from "./Containers/Pages/Authentification/Login";
import {Register} from "./Containers/Pages/Authentification/Register";
import {Homepage} from "./Containers/Pages/Homepage";
import {AddBook} from "./Containers/Pages/Catalogue/AddBook";
import {AddLoan} from "./Containers/Pages/Catalogue/AddLoan";
import {EditProfil} from "./Containers/Pages/Catalogue/EditProfil";
import {NavBar} from "./Containers/Components/Navbar";
import {Catalogue} from "./Containers/Pages/Catalogue/Catalogue";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTag} from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Error404} from "./Containers/Pages/Authentification/404";
import "./scss/app.scss";

// import {devpage} from "./Containers/Pages/Authentification/devpage";

library.add(faTag);
library.add(faSearch);

class App extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.isLogged = this.isLogged.bind(this);

        this.state = {
            auth: false,
            isJunior: false,
        };
    }

    componentDidMount() {
        axios
            .get("/api/auth")
            .then(response => {
                console.log(response.data);

                if (response.status === 200) {
                    if (response.data.admin === true) {
                        this.setState({
                            auth: true,
                            isJunior: false,
                        });
                    }

                    if (reponse.data.admin === false) {
                        this.setState({
                            auth: true,
                            isJunior: true,
                        });
                    }
                } else {
                    this.setState({
                        auth: false,
                    });
                }
            })
            .then(error => {
                console.log(error);
            });
    }

    isLogged() {
        console.log("is Logged");

        this.setState({
            auth: true,
        });
    }

    logout() {
        console.log("Logout");

        this.setState({
            auth: false,
            isJunior: false,
        });

        localStorage.removeItem("token");
        window.location = "/";
    }

    render() {
        let RoutingAuth = "";

        if (this.state.auth) {
            RoutingAuth = (
                <>
                    <div className="App">
                        <div className="App-content">
                            <NavBar
                                isJunior={this.state.isJunior}
                                isLogout={this.logout}
                            />
                            <Switch>
                                <Route exact path="/" component={Homepage} />
                                <Route
                                    exact
                                    path="/addbook"
                                    component={AddBook}
                                />
                                <Route
                                    exact
                                    path="/addloan"
                                    component={AddLoan}
                                />
                                <Route
                                    exact
                                    path="/catalogue"
                                    component={Catalogue}
                                />
                                <Route
                                    exact
                                    path="/editprofil"
                                    component={EditProfil}
                                />
                                <Route
                                    exact
                                    path="/admin"
                                    component={Homepage}
                                    render={() => (
                                        <Homepage
                                            isJunior={this.state.isJunior}
                                        />
                                    )}
                                />
                                <Route
                                    exact
                                    path="/Register"
                                    component={Register}
                                />
                                <Route exact path="*" component={Error404} />
                            </Switch>
                        </div>
                    </div>
                </>
            );
        } else {
            RoutingAuth = (
                <>
                    <Route
                        exact
                        path="/"
                        render={() => <Login isLogged={this.isLogged} />}
                    />
                </>
            );
        }

        return <div className="App">{RoutingAuth}</div>;
    }
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("app"),
);
// registerServiceWorker();

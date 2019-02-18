import * as React from "react";
import AdminMenu from "./AdminMenu.js";
import Catalogue from "../Catalogue/Catalogue"

export class HomepageAdmin extends React.Component {
    render() {
        return (
            <div className="backgroundhome">
                <div className="navAdminMenu">
                    <AdminMenu />
                    <Catalogue/>
                </div>
            </div>
        );
    }
}

export default HomepageAdmin;

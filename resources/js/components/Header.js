import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header text-center">
            <h3>Tasks manager</h3>
            <nav className="main-nav">
                <ul>
                    <li>
                        <Link to="/">Active tasks</Link>
                    </li>
                    <li>
                        <Link to="/completed-tasks">Completed tasks</Link>
                    </li>
                    <li>
                        <Link to="/tasks-history">Tasks History</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;

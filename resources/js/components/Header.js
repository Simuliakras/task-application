import React, {useState} from "react";
import {Link} from "react-router-dom";
import NewTask from "./Modal";

function Header() {
    const [modalShow, setModalShow] = useState(false);

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
            <div className="add-new-task">
                <a href="#" onClick={() => setModalShow(true)}>
                    <img src="/images/plus.png" alt="Add task icon"></img>
                </a>
                <NewTask
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>

        </div>
    );
}

export default Header;

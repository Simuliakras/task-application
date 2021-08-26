import React, {useRef, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import axios from "axios";

function NewTask(props) {
    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
    const [errorText, setErrorText] = useState("");

    function isEmptyOrSpaces(str) {
        return str === null || str.match(/^ *$/) !== null;
    }

    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        if (isEmptyOrSpaces(enteredTitle)) {
            setErrorText("Please give your task a title");
        } else if (
            /[^0-9a-zA-Z ]/.test(enteredTitle) ||
            /[^0-9a-zA-Z ]/.test(enteredDescription)
        ) {
            setErrorText("Please enter letters and numbers only");
        } else if (enteredDescription.length > 40 || enteredTitle.length > 40) {
            setErrorText("Please enter text up to 40 characters");
        } else {
            setErrorText("");

            const taskData = {
                title: enteredTitle,
                description: enteredDescription,
            };

            axios.post('/api/tasks', taskData);

            props.onHide();

        }
    }

    function hide() {
        setErrorText("");
        props.onHide();
    }

    return (
        <Modal
            className=".text-center"
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3>Add a new task</h3>
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        aria-label="Close"
                        onClick={hide}
                    ></button>
                </Modal.Title>
                <span className="error-text">{errorText}</span>
                <br></br>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={submitHandler}>
                    <label htmlFor="title">Task title*</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        ref={titleInputRef}
                        name="title"
                    ></input>
                    <label htmlFor="description">Task description</label>
                    <textarea
                        className="form-control"
                        rows="5"
                        name="description"
                        id="description"
                        ref={descriptionInputRef}
                    ></textarea>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="submit" onClick={submitHandler}>
                    Add task
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewTask;

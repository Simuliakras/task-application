import {Button, Card} from "react-bootstrap";

function TaskItem(props) {
    return (
        <div className="card-container">
            <Card>
                <Card.Body>
                    <Card.Title>
                        <h3>{props.title}</h3>
                    </Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div className="button-container">
                        <Button variant="primary" type="submit" id="complete-button" onClick={props.onHide}>
                            Complete
                        </Button>
                        <Button variant="secondary" type="submit" id="delete-button">
                            Delete
                        </Button>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default TaskItem;

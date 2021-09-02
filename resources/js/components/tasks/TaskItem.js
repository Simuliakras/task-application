import {Button, Card} from "react-bootstrap";
import axios from "axios";

function TaskItem(props) {

    function deleteHandler(id) {
        axios.delete(`/api/tasks/${id}`);
    }

    function completeHandler(id) {
        axios.put(`/api/tasks/${id}`);
    }

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
                        <Button variant="primary" type="submit" id="complete-button"
                                onClick={() => completeHandler(props.id)}>
                            Complete
                        </Button>
                        <Button variant="secondary" type="submit" id="delete-button"
                                onClick={() => deleteHandler(props.id)}>
                            Delete
                        </Button>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default TaskItem;

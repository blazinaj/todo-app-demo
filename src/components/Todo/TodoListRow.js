import React from "react";
import PropTypes from "prop-types";
import {ListGroupItem, ListGroupItemText, ListGroupItemHeading, CustomInput, Col, Row} from "reactstrap";

const TodoListRow = (props) => {

    return (
        <ListGroupItem>
            {/*<Image avatar alt={"image here.."} />*/}
            <Row>
                <Col sm={2}>
                    <CustomInput
                        type="checkbox"
                        id={"complete_todo" + props.todo.id}
                        label="Done"
                        onClick={() => props.todoHook.removeById(props.todo.id)}
                    />
                </Col>
                <Col sm={10}>
                    <ListGroupItemHeading>
                        {
                            props.todo.title
                        }
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                        {
                            props.todo.description
                        }
                    </ListGroupItemText>
                </Col>
            </Row>
        </ListGroupItem>
    )
};

TodoListRow.propTypes = {
    todo: PropTypes.object.isRequired,
    todoHook: PropTypes.object.isRequired,
};

TodoListRow.defaultProps = {
    todo: {},
    todoHook: {}
};

export default TodoListRow;
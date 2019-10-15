import React from "react";
import PropTypes from "prop-types";
import TodoListRow from "./TodoListRow";
import AddTodo from "./AddTodo";
import {Button, Card, CardBody, CardHeader, ListGroup, ListGroupItem} from "reactstrap";
import {useModal} from "../../hooks/useModal";

const TodoList = (props) => {

    const modalHook = useModal(
        "Create new TODO",
        <AddTodo todoHook={props.todoHook} />
    );

    return (
        <>
            {
                modalHook.modal
            }
            <Card>
                <CardHeader>
                    TODO LIST
                    <br/>
                    <small>User: {props.userHook.firstName+ " " + props.userHook.lastName}</small>
                    <Button
                        className="float-right"
                        size="sm"
                        onClick={() => props.userHook.logout()}
                    >
                        Logout
                    </Button>
                </CardHeader>
                <CardBody>
                    <ListGroup>
                        <ListGroupItem
                            tag="button"
                            color="success"
                            onClick={() => modalHook.setModalIsOpen(true)}
                        >
                            Create new TODO
                        </ListGroupItem>
                        {
                            props.todoHook &&
                            props.todoHook.todoList &&
                            props.todoHook.todoList
                                .map((listItem) =>
                                    <TodoListRow key={listItem.id} todo={listItem} todoHook={props.todoHook}/>
                            )
                        }
                    </ListGroup>
                </CardBody>
            </Card>
        </>
    )
};

TodoList.propTypes = {
    todoHook: PropTypes.object.isRequired,
};

export default TodoList;
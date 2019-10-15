import React, {useState} from "react";
import PropTypes from "prop-types";
import {Button, Input, InputGroup, InputGroupAddon} from "reactstrap";

const AddTodo = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submit = () => {
        props.todoHook && props.todoHook.addTodo(
            {
                id: new Date(),
                title: title,
                description: description
            }
        );
        props.toggleModal && props.toggleModal();
    };

    return (
        <>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    Title:
                </InputGroupAddon>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    Description:
                </InputGroupAddon>
                <Input value={description} onChange={(e) => setDescription(e.target.value)}/>
            </InputGroup>
            <br />
            <Button onClick={() => submit()}>Submit</Button>
        </>
    )
};

AddTodo.propTypes = {
    todoHook: PropTypes.object.isRequired,
    toggleModal: PropTypes.func,
};

AddTodo.defaultProps = {
    todoHook: {},
    toggleModal: () => {}
};

export default AddTodo;
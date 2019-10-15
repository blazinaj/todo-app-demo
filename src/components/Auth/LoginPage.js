import React from "react";
import PropTypes from "prop-types";
import {Button, Card, CardBody} from "reactstrap";

const LoginPage = (props) => {

    const login = () => {
        props.userHook.login();
    };

    return (
        <Card>
            <CardBody>
            <h3>Do you want to Log In?</h3>
            <Button color="primary" onClick={() => login()}>Yes!</Button>
            </CardBody>
        </Card>
    )
};

LoginPage.propTypes = {
    userHook: PropTypes.object.isRequired
};

export default LoginPage
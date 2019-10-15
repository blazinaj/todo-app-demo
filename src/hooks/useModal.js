import React, { useState, useCallback } from "react";
import {Modal, ModalBody, ModalHeader} from "reactstrap";

export const useModal = (title, body) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const modal =
        <Modal isOpen={modalIsOpen} toggle={() => setModalIsOpen(!modalIsOpen)}>
            <ModalHeader toggle={() => setModalIsOpen(!modalIsOpen)}>
                {
                    title
                }
            </ModalHeader>
            <ModalBody>
                {
                    React.cloneElement(
                        body,
                        {
                            toggleModal: () => setModalIsOpen(false)
                        }
                    )
                }
            </ModalBody>
        </Modal>;

    return {
        modal,
        modalIsOpen,
        setModalIsOpen: useCallback(isOpen => setModalIsOpen(isOpen))
    }
};
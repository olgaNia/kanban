import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label} from 'reactstrap';

function DeleteTaskModal({modalDelete, toggleDelete, task, deleteTask}) {
    const onDelete = () => {
        deleteTask(task._id)
        toggleDelete()
    }
    const [inputConfirm, setInputConfirm] = useState('')

    return (
        <div>
            <Modal isOpen={modalDelete} toggle={toggleDelete}>
                <ModalHeader toggle={toggleDelete}>Delete this task?</ModalHeader>
                <ModalBody>
                    <Label for="exampleTask">
                        To confirm ,type <b>" {task.name} </b>" in the box bellow
                    </Label>
                    <Input placeholder="Task's name"
                           value={inputConfirm}
                           onChange={(event) => setInputConfirm(event.target.value)}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button
                        onClick={onDelete}
                        color="btn btn-outline-danger"
                        disabled={inputConfirm !== task.name}>
                        Delete
                    </Button>
                    {' '}
                    <Button color="btn btn-outline-secondary"
                            onClick={toggleDelete}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DeleteTaskModal;
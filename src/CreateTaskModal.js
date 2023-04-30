import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupText, Input} from 'reactstrap';

function CreateTaskModal({priorities, statuses, createTask}) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState(priorities[0])
    const [status, setStatus] = useState(statuses[0])

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal)
        setName('')
        setDescription('')
        setPriority(priorities[0])
        setStatus(statuses[0])
    };

    const saveButtonHandler = () => {
        const newTask = {
            name,
            description,
            priority,
            status
        }
        createTask(newTask)
        toggle()

    }

    return (
        <div>
            <Button color="danger" onClick={toggle}>
                Create New Task
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create new task</ModalHeader>
                <ModalBody>
                    <div>
                        <InputGroup>
                            <InputGroupText>
                                Task Name
                            </InputGroupText>
                            <Input
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </InputGroup>
                        <br/>
                        <InputGroup>

                            <InputGroupText>
                                Task Description
                            </InputGroupText>
                            <Input
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />
                        </InputGroup>
                        <br/>
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelect"
                                    aria-label="Floating label select example"
                                    value={priority}
                                    onChange={(event) => setPriority(event.target.value)}
                            >
                                {priorities.map((el, i) =>
                                    <option value={el}
                                            key={i}
                                    >{el}</option>
                                )}
                            </select>
                            <label htmlFor="floatingSelect">Priority</label>
                        </div>
                        <br/>
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelect"
                                    aria-label="Floating label select example"
                                    value={status}
                                    onChange={(event) => setStatus(event.target.value)}
                            >
                                {statuses.map((el, i) =>
                                    <option value={el}
                                            key={i}
                                    >{el}</option>
                                )}
                            </select>
                            <label htmlFor="floatingSelect">Statuses</label>
                        </div>

                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={saveButtonHandler}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CreateTaskModal;
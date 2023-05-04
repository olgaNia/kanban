import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupText, Input} from 'reactstrap';

function EditTaskModal({modalEdit,toggleEdit,priorities,statuses,task,editTask}) {
    const [status, setStatus] = useState(task.status)
    const [name, setName] = useState(task.name)
    const [description, setDescription] = useState(task.description)
    const [priority, setPriority] = useState(task.priority)

    const onSave=()=>{
        const newTask ={ status,priority,name,description}
        editTask(task._id,newTask)
        toggleEdit()
    }

    return (
        <div>
            <Modal isOpen={modalEdit} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}>Edit task</ModalHeader>
                <ModalBody>
                    <div>
                        <InputGroup>
                            <InputGroupText>
                                Task Name
                            </InputGroupText>
                            <Input
                                value={name}
                                onChange={(event)=> setName(event.target.value)}
                            />
                        </InputGroup>
                        <br/>
                        <InputGroup>

                            <InputGroupText>
                                Task Description
                            </InputGroupText>
                            <Input
                                value={description}
                                onChange={(event)=> setDescription(event.target.value)}
                            />
                        </InputGroup>

                        <br/>

                        <div className="form-floating">
                            <select
                                value={priority}
                                onChange={(event)=>setPriority(event.target.value)}
                                className="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                {priorities.map((el, i) =>
                                    <option value={el}
                                            key={i}>
                                        {el}
                                    </option>
                                )}
                            </select>
                            <label htmlFor="floatingSelect">Priority</label>
                        </div>

                        <br/>

                        <div className="form-floating">
                            <select
                                value={status}
                                onChange={(event)=>setStatus(event.target.value)}
                                className="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                {statuses.map((el, i) =>
                                    <option value={el}
                                            key={i}>
                                        {el}
                                    </option>
                                )}
                            </select>
                            <label htmlFor="floatingSelect">Statuses</label>
                        </div>

                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        onClick={onSave}
                        color="btn btn-outline-primary">
                        Save
                    </Button>{' '}
                    <Button color="btn btn-outline-secondary" onClick={toggleEdit}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal >
        </div>
    );
}

export default EditTaskModal;
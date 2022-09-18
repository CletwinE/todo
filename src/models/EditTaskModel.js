import { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const EditTaskModel = ({modal, toggle, updateTask, taskObj}) => {
     const [taskName, setTaskName] = useState('');
     const [description, setDescription] = useState('');

    const handleChange = (e) => {
         const {name, value } = e.target

         if (name === 'taskName') {
             setTaskName(value)
         }else{
             setDescription(value)
         }
    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    },[])
    

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        tempObj['Date'] = date
        tempObj['Status'] = 1
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className='form-group'>
                        <label >Task Name</label>
                        <input type='text' className='form-control' name='taskName' value={taskName} onChange = {handleChange}/>
                    </div>
                    <div className='form-group pt-3'>
                        <label>Description</label>
                        <textarea rows='5' className='form-control' name='description' value={description} onChange = {handleChange}></textarea>
                    </div>
                    
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" type='submit' onClick={handleUpdate}>
                    Update
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );

    
};

export default EditTaskModel;
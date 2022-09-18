import React, { useState } from 'react';
import EditTaskModel from '../models/EditTaskModel';

const Card = ({ taskObj, index, deleteTask, updateListArray}) => {

    const [taskList, setTaskList] = useState([]);

    const handleDelete = () => {
        deleteTask(index)
    }

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleClick = event => {
        if (event.target.style.textDecoration) {
          event.target.style.removeProperty('text-decoration');
        } else {
          event.target.style.setProperty('text-decoration', 'line-through');
        }
      };

    

    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ]

    return (
        <div className='card-wrapper mt-5' onClick={handleClick}>
            <div className='card-top cardTop' style={{ "backgroundColor": colors[index % 5].primaryColor }}></div>
            <div className='task-holder'>
            <span className='text-center' style={{ "backgroundColor": colors[index % 5].secondaryColor }}>{taskObj.Date}</span>
                <span className='cardHeader card-header' style={{ "backgroundColor": colors[index % 5].secondaryColor }}>{taskObj.Name}</span>
                <p className='mt-2'>{taskObj.Description}</p>

                <div className='butt'>
                    <i className='far fa-edit' style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }} onClick={() => setModal(true)}></i>
                    <i className='fas fa-trash-alt' style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }} onClick={handleDelete}></i>
                </div>
            </div>

            <EditTaskModel modal={modal} toggle={toggle} updateTask = {updateTask} taskObj = {taskObj}/>

        </div>
    );
};

export default Card;
import React, { useEffect, useState } from 'react';
import CreateTask from '../models/CreateTaskModel';
import Card from './card';
import Clock from 'react-live-clock';
import pic from '../images/nodata.png';
import bg from '../images/todo.jpg'

const Todo = () => {

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const toggle = () => setModal(!modal);

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    useEffect(() => {
        let arr = localStorage.getItem("taskList")
        if (arr) {
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, []);


    if (taskList.length != 0) {
        return (
            <>
                <div className='header text-center'>
                    <div className='clock text-center'>
                        <Clock format={'MMMM Do YYYY, h:mm:ss a'} ticking={true} timezone={'Asia/Colombo'} />
                    </div>
                    <h2 className='pt-4'>TODOs </h2>
                    <button className='btn btn-primary mt-2' onClick={() => setModal(true)}>Add List</button>
                </div>

                <div className='task-container todobody'>
                    <img className='bg' src={bg}/>
                    {taskList && taskList.map((obj, index) => <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
                </div>

                <CreateTask modal={modal} toggle={toggle} save={saveTask} />
            </>

        );
    }
    else {
        return (
            <>
                <div className='header text-center'>
                    <div className='clock text-center'>
                        <Clock format={'MMMM Do YYYY, h:mm:ss a'} ticking={true} timezone={'Asia/Colombo'} />
                    </div>
                    <h2 className='todo pt-4'>ToDo List</h2>
                    <button className='btn btn-primary mt-3' onClick={() => setModal(true)}>Add New ToDo</button>
                </div>

                <div className='task-container imagecont'>
                    <div>
                        <img className='image' src={pic}/>
                    </div>
                </div>

                <CreateTask modal={modal} toggle={toggle} save={saveTask} />
            </>

        );
    }



};

export default Todo;
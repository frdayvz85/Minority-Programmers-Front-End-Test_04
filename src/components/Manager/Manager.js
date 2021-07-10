import React from 'react'
import { Route } from 'react-router-dom'
import Task from './CreateTask/Task'
import Header from './Header/Header'
import Home from './Home/Home'
import NotificationHome from './Notification/NotificationHome'
import './Manager.css'
import ViewTaskPage from './ViewTask/ViewTaskPage'
import TaskStatus from './TaskStatus/TaskStatus'


const Manager = () => {
    return (
        <section id="manager">
            <Header />
            <Route path="/manager" exact component={Home}/>
            <Route path="/manager/create-task" component={Task}/>
            <Route path="/manager/task-status" component={TaskStatus}/>
            <Route path="/manager/view-task" component={ViewTaskPage}/>
            <Route path="/manager/notifications" component={NotificationHome}/>
        </section>
    )
}

export default Manager

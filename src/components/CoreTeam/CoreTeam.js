import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header/Header'
import Home from './Notification/Home'
import ViewTask from './ViewTask/ViewTask'
import TodoTask from './ViewTask/TodoTask'
import ProgressTask from './ViewTask/ProgressTask'


const CoreTeam = () => {
    return (
        <section id="manager">
             <Header />
            <Route path="/core-team" exact component={Home}/>
            <Route path="/core-team/view-tasks" exact component={ViewTask}/>
            <Route path="/core-team/todo-tasks" exact component={TodoTask}/>
            <Route path="/core-team/progress-tasks" exact component={ProgressTask}/>
        </section>
    )
}

export default CoreTeam

import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header/Header'
import Home from './Home/Home'
import MyElected from './MyElected/MyElected'
import Notification from './Notification/Notification'


const Moderator = () => {
    return (
        <section id="manager">
            <Header />
           <Route path="/moderator" exact component={Home} />
           <Route path="/moderator/my-elected" exact component={MyElected} />
           <Route path="/moderator/notification" exact component={Notification} />
        </section>
    )
}

export default Moderator

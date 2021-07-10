import React from 'react'
import checkStatus from '../../../img/checkstatus.png'
import pPhoto from '../../../img/pPhoto.png'
import username from '../../../img/username.png'
import '../../Global/Task/TaskStatus.css'
import { FaFlag, FaEllipsisV } from "react-icons/fa";
import { Link } from 'react-router-dom'
import data from '../../../data.json'
import SingleTask from './SingleTask'


const Tasks = () => {
    const proposals = data[0].tasks
    return (
        <div className="task--status__container">
            <div className="task--all">
                <div className="task__header-yellow">
                    <img src={checkStatus} alt="" />
                    <h2>To Do Tasks</h2>
                </div>
                <div className="tasks">
                    {
                        proposals.map((task) => (
                            <SingleTask
                                key={task.id}
                                id={task.id}
                                data={task.createdDate}
                                title={task.text}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="task--all">
                <div className="task__header-yellow">
                    <img src={checkStatus} alt="" />
                    <h2>In-Progress Tasks</h2>
                </div>
                <div className="tasks">
                    <div className="single--task">
                        <div className="task--header__content">
                            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit.</p>
                            <div className="user--profile__image">
                                <img src={pPhoto} alt="" className="username--photo" />
                                <img src={username} className="username-img" alt="" />
                            </div>
                        </div>
                        <div className="task--flag">
                            <span>
                                <FaFlag />
                            </span>
                            <span>May 27</span>
                        </div>
                        <div className="task--category--more">
                            <ul className="task--categories">
                                <li className="task--design">Design</li>
                                <li className="task--develop">Develop</li>
                            </ul>
                            <div className="task--more__options">
                                <span>More options</span>
                                <FaEllipsisV />
                            </div>
                        </div>
                    </div>
                    <div className="single--task">
                        <div className="task--header__content">
                            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit.</p>
                            <div className="user--profile__image">
                                <img src={pPhoto} alt="" />
                            </div>
                        </div>
                        <div className="task--flag">
                            <span>
                                <FaFlag />
                            </span>
                            <span>May 27</span>
                        </div>
                        <div className="task--category--more">
                            <ul className="task--categories">
                                <li className="task--design">Design</li>
                                <li className="task--develop">Develop</li>
                            </ul>
                            <div className="task--more__options">
                                <span>More options</span>
                                <FaEllipsisV />
                            </div>
                        </div>
                    </div>
                    <div className="single--task">
                        <div className="task--header__content">
                            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit.</p>
                            <div className="user--profile__image">
                                <img src={pPhoto} alt="" />
                            </div>
                        </div>
                        <div className="task--flag">
                            <span>
                                <FaFlag />
                            </span>
                            <span>May 27</span>
                        </div>
                        <div className="task--category--more">
                            <ul className="task--categories">
                                <li className="task--design">Design</li>
                                <li className="task--develop">Develop</li>
                            </ul>
                            <div className="task--more__options">
                                <span>More options</span>
                                <FaEllipsisV />
                            </div>
                        </div>
                    </div>
                    <div className="single--task">
                        <div className="task--header__content">
                            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit.</p>
                            <div className="user--profile__image">
                                <img src={pPhoto} alt="" className="username--photo" />
                                <img src={username} className="username-img" alt="" />
                            </div>
                        </div>
                        <div className="task--flag">
                            <span>
                                <FaFlag />
                            </span>
                            <span>May 27</span>
                        </div>
                        <div className="task--category--more">
                            <ul className="task--categories">
                                <li className="task--design">Design</li>
                                <li className="task--develop">Develop</li>
                            </ul>
                            <div className="task--more__options">
                                <span>More options</span>
                                <FaEllipsisV />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="task--all">
                <div className="task__header-yellow">
                    <img src={checkStatus} alt="" />
                    <h2>Ready for review tasks</h2>
                </div>
                <div className="tasks">
                    <div className="single--task">
                        <div className="task--header__content">
                            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit.</p>
                            <div className="user--profile__image">
                                <img src={pPhoto} alt="" />
                            </div>
                        </div>
                        <div className="task--flag">
                            <span>
                                <FaFlag />
                            </span>
                            <span>May 27</span>
                        </div>
                        <div className="task--category--more">
                            <ul className="task--categories">
                                <li className="task--design">Design</li>
                                <li className="task--develop">Develop</li>
                            </ul>
                            <div className="task--more__options">
                                <span>More options</span>
                                <FaEllipsisV />
                            </div>
                        </div>
                    </div>
                    <div className="single--task">
                        <div className="task--header__content">
                            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit.</p>
                            <div className="user--profile__image">
                                <img src={pPhoto} alt="" />
                            </div>
                        </div>
                        <div className="task--flag">
                            <span>
                                <FaFlag />
                            </span>
                            <span>May 27</span>
                        </div>
                        <div className="task--category--more">
                            <ul className="task--categories">
                                <li className="task--design">Design</li>
                                <li className="task--develop">Develop</li>
                            </ul>
                            <div className="task--more__options">
                                <span>More options</span>
                                <FaEllipsisV />
                            </div>
                        </div>
                    </div>
                    <div className="single--task">
                        <div className="task--header__content">
                            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit.</p>
                            <div className="user--profile__image">
                                <img src={pPhoto} alt="" />
                            </div>
                        </div>
                        <div className="task--flag">
                            <span>
                                <FaFlag />
                            </span>
                            <span>May 27</span>
                        </div>
                        <div className="task--category--more">
                            <ul className="task--categories">
                                <li className="task--design">Design</li>
                                <li className="task--develop">Develop</li>
                            </ul>
                            <div className="task--more__options">
                                <span>More options</span>
                                <FaEllipsisV />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="task--all">
                <div className="task__header-yellow">
                    <img src={checkStatus} alt="" />
                    <h2>In Review Tasks</h2>
                </div>
                <div className="tasks">
                    <div className="single--task">
                        <div className="task--header__content">
                            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit.</p>
                            <div className="user--profile__image">
                                <img src={pPhoto} alt="" />
                            </div>
                        </div>
                        <div className="task--flag">
                            <span>
                                <FaFlag />
                            </span>
                            <span>May 27</span>
                        </div>
                        <div className="task--category--more">
                            <ul className="task--categories">
                                <li className="task--design">Design</li>
                                <li className="task--develop">Develop</li>
                            </ul>
                            <div className="task--more__options">
                                <span>More options</span>
                                <FaEllipsisV />
                            </div>
                        </div>
                    </div>
                    <div className="single--task">
                        <div className="task--header__content">
                            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit.</p>
                            <div className="user--profile__image">
                                <img src={pPhoto} alt="" />
                            </div>
                        </div>
                        <div className="task--flag">
                            <span>
                                <FaFlag />
                            </span>
                            <span>May 27</span>
                        </div>
                        <div className="task--category--more">
                            <ul className="task--categories">
                                <li className="task--design">Design</li>
                                <li className="task--develop">Develop</li>
                            </ul>
                            <div className="task--more__options">
                                <span>More options</span>
                                <FaEllipsisV />
                            </div>
                        </div>
                    </div>
                    <div className="single--task">
                        <div className="task--header__content">
                            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit.</p>
                            <div className="user--profile__image">
                                <img src={pPhoto} alt="" />
                            </div>
                        </div>
                        <div className="task--flag">
                            <span>
                                <FaFlag />
                            </span>
                            <span>May 27</span>
                        </div>
                        <div className="task--category--more">
                            <ul className="task--categories">
                                <li className="task--design">Design</li>
                                <li className="task--develop">Develop</li>
                            </ul>
                            <div className="task--more__options">
                                <span>More options</span>
                                <FaEllipsisV />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="task--all">
                <div className="task__header-yellow">
                    <img src={checkStatus} alt="" />
                    <h2>Revision Required Tasks</h2>
                </div>
                <div className="tasks">
                    <div className="single--task">
                        <div className="task--header__content">
                            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit.</p>
                            <div className="user--profile__image">
                                <img src={pPhoto} alt="" />
                            </div>
                        </div>
                        <div className="task--flag">
                            <span>
                                <FaFlag />
                            </span>
                            <span>May 27</span>
                        </div>
                        <div className="task--category--more">
                            <ul className="task--categories">
                                <li className="task--design">Design</li>
                                <li className="task--develop">Develop</li>
                            </ul>
                            <div className="task--more__options">
                                <span>More options</span>
                                <FaEllipsisV />
                            </div>
                        </div>
                    </div>
                    <div className="single--task">
                        <div className="task--header__content">
                            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit.</p>
                            <div className="user--profile__image">
                                <img src={pPhoto} alt="" />
                            </div>
                        </div>
                        <div className="task--flag">
                            <span>
                                <FaFlag />
                            </span>
                            <span>May 27</span>
                        </div>
                        <div className="task--category--more">
                            <ul className="task--categories">
                                <li className="task--design">Design</li>
                                <li className="task--develop">Develop</li>
                            </ul>
                            <div className="task--more__options">
                                <span>More options</span>
                                <FaEllipsisV />
                            </div>
                        </div>
                    </div>
                    <div className="single--task">
                        <div className="task--header__content">
                            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit.</p>
                            <div className="user--profile__image">
                                <img src={pPhoto} alt="" />
                            </div>
                        </div>
                        <div className="task--flag">
                            <span>
                                <FaFlag />
                            </span>
                            <span>May 27</span>
                        </div>
                        <div className="task--category--more">
                            <ul className="task--categories">
                                <li className="task--design">Design</li>
                                <li className="task--develop">Develop</li>
                            </ul>
                            <div className="task--more__options">
                                <span>More options</span>
                                <FaEllipsisV />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="task--all">
                <div className="task__header-yellow">
                    <img src={checkStatus} alt="" />
                    <h2>Completed Tasks</h2>
                </div>
                <div className="tasks">
                    <div className="single--task">
                        <div className="task--header__content">
                            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit.</p>
                            <div className="user--profile__image">
                                <img src={pPhoto} alt="" />
                            </div>
                        </div>
                        <div className="task--flag">
                            <span>
                                <FaFlag />
                            </span>
                            <span>May 27</span>
                        </div>
                        <div className="task--category--more">
                            <ul className="task--categories">
                                <li className="task--design">Design</li>
                                <li className="task--develop">Develop</li>
                            </ul>
                            <div className="task--more__options">
                                <span>More options</span>
                                <FaEllipsisV />
                            </div>
                        </div>
                    </div>
                    <div className="single--task">
                        <div className="task--header__content">
                            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit.</p>
                            <div className="user--profile__image">
                                <img src={pPhoto} alt="" />
                            </div>
                        </div>
                        <div className="task--flag">
                            <span>
                                <FaFlag />
                            </span>
                            <span>May 27</span>
                        </div>
                        <div className="task--category--more">
                            <ul className="task--categories">
                                <li className="task--design">Design</li>
                                <li className="task--develop">Develop</li>
                            </ul>
                            <div className="task--more__options">
                                <span>More options</span>
                                <FaEllipsisV />
                            </div>
                        </div>
                    </div>
                    <div className="single--task">
                        <div className="task--header__content">
                            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit.</p>
                            <div className="user--profile__image">
                                <img src={pPhoto} alt="" />
                            </div>
                        </div>
                        <div className="task--flag">
                            <span>
                                <FaFlag />
                            </span>
                            <span>May 27</span>
                        </div>
                        <div className="task--category--more">
                            <ul className="task--categories">
                                <li className="task--design">Design</li>
                                <li className="task--develop">Develop</li>
                            </ul>
                            <div className="task--more__options">
                                <span>More options</span>
                                <FaEllipsisV />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Tasks

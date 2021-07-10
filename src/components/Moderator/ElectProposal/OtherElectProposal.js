import React from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import pPhoto from '../../../img/pPhoto.png'
import '../../Global/Proposal/Proposal.css'

const OtherElectProposal = () => {
    return (
       <div className="elect--proposal__wrapper">
           <div className="proposal--task">
            <div className="proposal__title--task">
                <h1>Proposal Title</h1>
                <div className="proposal--type__category">
                    <span className="proposal--type">
                        <b>Type: </b>
                        Enhacment
                    </span>
                    <span className="proposal--category">
                        <b>Category: </b>
                        Incubator
                    </span>
                </div>
            </div>
            <div className="proposal--user__details electproposal--user__details">
                <div className="user--details__prospol">
                    <img src={pPhoto} alt="" srcset="" />
                    <div className="username">
                        <span>Created by</span>
                        <h5>Username</h5>
                    </div>
                    <div className="created__date--proposal">
                        <span>Created on</span>
                        <h5>25 Mar</h5>
                    </div>
                </div>
                <div className="proposal__details">
                    <p className="replies">
                        <h3>59</h3>
                        <span>Replies</span>
                    </p>
                    <p className="views">
                        <h3>59</h3>
                        <span>Views</span>
                    </p>
                    <div className="proposal--votes">
                        <FaCaretUp className="fa-up" title="Vote" />
                        <span className="vote-count__num">267</span>
                        <FaCaretDown className="fa-down" title="Un vote" />
                    </div>
                </div>
            </div>
            <div className="proposal--text__more elect--proposal__text--more">
                <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem magni perspiciatis sunt vel, architecto iure sint impedit non ut, commodi earum reiciendis tempora ducimus libero qui laboriosam voluptas similique odit sapiente ipsam molestias natus dolore rerum? Similique id quae impedit.</article>
                <div className="proposal--btns__view--elect">
                    <button className="btn btn--proposal__view">Read More</button>
                </div>
            </div>
        </div>
       </div>
    )
}

export default OtherElectProposal


import React from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import pPhoto from '../../../img/pPhoto.png'
import '../../Global/Proposal/Proposal.css'

const ElectProposal = (props) => {
    return (
        <div className="elect--proposal__wrapper voted--revoted">
            <div className="proposal--task">
                <div className="proposal__title--task">
                    <div className="proposal__header--voted--revoted">
                        <h1>{props.title}</h1>
                        <div className="proposal--type__category">
                            <span className="proposal--type">
                                <b>Type: </b>
                                {props.type}
                            </span>
                            <span className="proposal--category">
                                <b>Category: </b>
                                {props.category}
                            </span>
                        </div>
                    </div>
                    <div className="remain--time pink">
                    {props.daysToLeft} days left to vote
                    </div>
                </div>
                <div className="proposal--user__details electproposal--user__details">
                    <div className="user--details__prospol">
                        <img src={pPhoto} alt="" srcset="" />
                        <div className="username">
                            <span>Created by</span>
                            <h5>{props.createdBy}</h5>
                        </div>
                        <div className="created__date--proposal">
                            <span>Created on</span>
                            <h5>{props.createdDate}</h5>
                        </div>
                    </div>
                    <div className="proposal__details">
                        <p className="replies">
                            <h3>{props.replies}</h3>
                            <span>Replies</span>
                        </p>
                        <p className="views">
                            <h3>{props.views}</h3>
                            <span>Views</span>
                        </p>
                        <div className="proposal--votes">
                            <FaCaretUp className="fa-up" title="Vote" />
                            <span className="vote-count__num">{props.totalVotes}</span>
                            <FaCaretDown className="fa-down" title="Un vote" />
                        </div>
                    </div>
                    <div className="aprove--disaprove__btns">
                        <button className="btn aprove--btn">Approve</button>
                        <button className="btn disaprove--btn">Disapprove</button>
                    </div>
                </div>
                <div className="proposal--text__more elect--proposal__text--more">
                    <article>{props.text}</article>
                    <div className="proposal--btns__view--elect">
                        <button className="btn view__proposal--btn">View Proposal</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ElectProposal


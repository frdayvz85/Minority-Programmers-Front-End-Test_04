import React from 'react'
import './SingleProposal.css'
import './VotedProposal.css'
import checkbox from '../../../img/checkbox.png'
import unaproved from '../../../img/unaproved.png'
import planned from '../../../img/planned.png'
import progress from '../../../img/progress.png'
import completed from '../../../img/completed.png'
import { FaCaretDown, FaCaretUp } from "react-icons/fa";


const VotedProposal = (props) => {
    return (
        <div className="single--proposal voted-proposal">
            <div className="col--left">
                <div className="check-status">
                <img src={checkbox} alt="" className={props.completed<15 && "hide"} />
                </div>
                <div className="proposal--main__property">
                    <h2 className="proposal--title">{props.title}</h2>
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
                    <div className="proposal--status">
                        <div className="proposal-percent">
                        <p className="proposal--pecent__show" style={{width:`${props.completed}%`}}></p>
                        </div>
                        <div className="proposal--status__icons">
                            <div className="unaproved">
                                <img src={unaproved} alt="" />
                                <h6>Unaproved</h6>
                            </div>
                            <div className="planned">
                                <img src={planned} alt="" />
                                <h6>Planned</h6>
                            </div>
                            <div className="progress">
                                <img src={progress} alt="" />
                                <h6>In progress</h6>
                            </div>
                            <div className="completed">
                                <img src={completed} alt="" />
                                <h6>Completed</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col--right col--right__voted">
                <div className="proposal--main__properties proposal--main__properties--voted ">
                    <div className="proposal--property__top">
                        <p className="replies">
                            <h3>{props.replies}</h3>
                            <span>Replies</span>
                        </p>
                        <p className="views">
                            <h3>{props.views}</h3>
                            <span>Views</span>
                        </p>
                        <p className="earned">
                            <h3>{props.earned}</h3>
                            <span>$ Min. Earned</span>
                        </p>
                        
                    </div>
                    <div className="created--date">
                            You <span className="red"><b>Voted</b></span> this proposal on <br /> <span className="red">20th May.</span>
                        </div>
                </div>
                <div className="proposal--btns">
                    <button className="view--proposal__btn">View Proposal</button>
                </div>
                <div className="proposal--votes">
                    <FaCaretUp className="fa-up votedPlus" title="Vote" />
                    <span className="vote-count">{props.totalVotes}</span>
                    <FaCaretDown className="fa-down" title="Un Vote" />
                </div>
            </div>
        </div>
    )
}

export default VotedProposal

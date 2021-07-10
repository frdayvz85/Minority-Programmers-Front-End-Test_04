import React from 'react'
import './Aproved.css'
import { FaCaretDown, FaCaretUp } from "react-icons/fa";


const Aproved = (props) => {
    return (
        <div className="single--aproved--proposal">
            <div className="col--left">
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
                    <div className="proposal--aproved">
                        <p className="replies">
                            <h3>{props.replies}</h3>
                            <span>Replies</span>
                        </p>
                        <p className="views">
                            <h3>{props.views}</h3>
                            <span>Views</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col--right"> 
                <div className="proposal--btns aproved__btns">
                    <button>View Proposal</button>
                    <button className="claim-btn">Claim $ Minority</button>
                </div>
                <div className="proposal--votes">
                    <FaCaretUp className="fa-up" title="Vote" />
                    <span className="vote-count__num">{props.totalVotes}</span>
                    <FaCaretDown className="fa-down" title="Un vote" />
                </div>
            </div>
        </div>
    )
}

export default Aproved

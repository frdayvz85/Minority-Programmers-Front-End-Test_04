import React from 'react'
import './TotalProposal.css'
import backproposal from '../../../img/backproposal.png'

const TotalProposal = () => {
    return (
        <div className="total--proposal">
            <div className="total--proposal__text">
                <img src={backproposal} alt="" />
                <div className="total--proposal__content">
                    <p>Check $ Minority earned through other activites here.</p>
                    <button>Other $ Minority</button>
                </div>
            </div>
            <div className="total--proposal__amount">
                <p>$ Minority earned through <span className="red">My Proposals</span> - <span className="blue">92</span></p>
                <p className="other-actions">$ Minority earned through <span className="lightblue">Other actions</span> - <span  className="lightblue">60</span></p>
                <p>$ Minority <span className="lightblue">Spent</span> over 2 years - <span className="lightblue">12</span></p>
                <div className="total--amount">
                    <p>Total net $ Minority -140</p>
                </div>
            </div>
        </div>
    )
}

export default TotalProposal

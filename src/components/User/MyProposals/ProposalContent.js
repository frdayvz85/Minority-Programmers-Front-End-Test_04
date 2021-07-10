import React from 'react'
import './ProposalContent.css'
import SingleProposal from './SingleProposal'
import TotalProposal from './TotalProposal'
import VotedProposal from './VotedProposal'
import data from '../../../data.json'

const ProposalContent = () => {
    const proposals = data[1].proposals
    return (
        <div className="proposal--container">
            <div className="proposal--content">
                {proposals.map((item)=> (
                    item.approvedStatus ===null &&
                    <SingleProposal
                        key={item.id}
                        id={item.id}
                        title={item.proposalTitle}
                        type={item.type}
                        category={item.category}
                        daysToLeft={item.daysToLeft}
                        createdBy={item.createdBy}
                        replies={item.replies}
                        totalVotes={item.totalVotes}
                        views={item.views}
                        text={item.text}
                        completed={item.completedStatus}
                        earned={item.earned}
                    />
                ))}
                <TotalProposal />
            </div>
            <div className="proposal--content voted-container">
            <h1>You Voted For The Following Proposals.</h1>
            {proposals.map((item)=> (
                    item.approvedStatus ===true &&
                    <VotedProposal
                        key={item.id}
                        id={item.id}
                        title={item.proposalTitle}
                        type={item.type}
                        category={item.category}
                        daysToLeft={item.daysToLeft}
                        createdBy={item.createdBy}
                        replies={item.replies}
                        totalVotes={item.totalVotes}
                        views={item.views}
                        text={item.text}
                        completed={item.completedStatus}
                        earned={item.earned}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProposalContent

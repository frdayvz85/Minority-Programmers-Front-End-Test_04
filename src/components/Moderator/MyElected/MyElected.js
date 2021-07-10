import React from 'react'
import TopHome from './TopHome'
import MyElectedProposal from './MyElectedProposal'
import data from '../../../data.json'

const MyElected = () => {
    const proposals = data[1].proposals
    return (
        <div className="my-elected">
            <TopHome />
            <div className="my--elected-proposals">
                {
                    proposals.map(proposal => (
                        proposal.approvedStatus === null &&
                        <MyElectedProposal
                            key={proposal.id}
                            id={proposal.id}
                            title={proposal.proposalTitle}
                            type={proposal.type}
                            category={proposal.category}
                            daysToLeft={proposal.daysToLeft}
                            createdBy={proposal.createdBy}
                            replies={proposal.replies}
                            totalVotes={proposal.totalVotes}
                            views={proposal.views}
                            text={proposal.text}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default MyElected

import React from 'react'
import ElectProposal from './ElectProposal'
import ToppHome from './TopHome'
import RejectProposal from './RejectProposal'
import ApprovedProposal from './ApprovedProposal'
import data from '../../../data.json'

const Notification = () => {
    const proposals = data[1].proposals
    return (
        <div>
            <ToppHome />
            <div className="elect-proposal--page approved--proposal__page">
                <h1>Proposals sent to be voted / revoted.</h1>
                <p>The following proposals have been sent to be voted/ revoted by the core team.</p>
                {proposals.map((item)=> (
                    item.approvedStatus ===true &&
                    <ElectProposal
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
                    />
                ))}
            </div>
            <div className="elect-proposal--page approved--proposal__page">
                <h1>Proposals approved by core team.</h1>
                <p>The following proposals you elected, were approved by the core team.</p>
                {proposals.map((item)=> (
                    item.approvedStatus ===true &&
                    <ApprovedProposal
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
                    />
                ))}
            </div>
            <div className="elect-proposal--page rejected--proposal__page">
                <h1>Proposals rejected by core team..</h1>
                <p>The following proposals you elected, were rejected by the core team.</p>
                {proposals.map((item)=> (
                    item.approvedStatus ===false &&
                    <RejectProposal
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
                    />
                ))}
            </div>
        </div>
    )
}

export default Notification

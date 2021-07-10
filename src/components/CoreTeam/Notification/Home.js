import React, { useEffect } from 'react'
import ApprovedProposal from '../ElectProposal/ApprovedProposal'
import ElectProposal from '../ElectProposal/ElectProposal'
import TopHome from './TopHome'
import RejectedProposal from '../ElectProposal/RejectedProposal'
import TaskStatus from '../ElectProposal/TaskStatus'
import data from '../../../data.json'

const Home = () => {
    const proposals = data[1].proposals
    return (
        <div className="elect--proposals">
            <TopHome />
            <div className="new--notification__header notification__new">
                <h1>New</h1>
                <p></p>
            </div>
            <div className="elect-proposal--page voted--revoted__page">
                <h1>Proposals to be voted / revoted.</h1>
                <p>Please Approve or disapprove proposals.</p>
                {proposals.map((item)=> (
                    item.approvedStatus ===null &&
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
                <h1>Approved Proposals.</h1>
                <p>The following proposals you voted got approved.</p>
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
                <h1>Rejected Proposals.</h1>
                <p>The following proposals you voted got rejected.</p>
                {proposals.map((item)=> (
                    item.approvedStatus ===false &&
                    <RejectedProposal
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
            <div className="task--revision">
                <TaskStatus />
            </div>
            <div className="new--notification__header notification__earlier">
                <h1>Earlier</h1>
                <p></p>
            </div>
            <div className="elect-proposal--page rejected--proposal__page">
                <h1>Rejected Proposals.</h1>
                <p>The following proposals you voted got rejected.</p>
                {proposals.map((item)=> (
                    item.approvedStatus ===false &&
                    <RejectedProposal
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

export default Home

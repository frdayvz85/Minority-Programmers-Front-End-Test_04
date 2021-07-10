import React from 'react'
import TopHome from './TopHome'
import './Home.css'
import ElectProposal from '../ElectProposal/ElectProposal'
import OtherElectProposal from '../ElectProposal/OtherElectProposal'
import data from '../../../data.json'

const Home = () => {
    const proposals = data[1].proposals
    return (
        <div className="manager-home-page">
            <TopHome />
            <div className="elect-proposal--page">
                <h1>Proposals that made it to the 10% percentile</h1>
                <p>Please choose the proposals to be elected.</p>
                {proposals.map((item)=> (
                    item.earned ===10 &&
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
            <div className="elect-proposal--page">
                <h1>Other proposals below 10% percentile</h1>
                <p>Learn more about other proposals. Ban Users who post abusive comments.</p>
                {proposals.map((item)=> (
                    item.earned < 10 &&
                    <OtherElectProposal
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

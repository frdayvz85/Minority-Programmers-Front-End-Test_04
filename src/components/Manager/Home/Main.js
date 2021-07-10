import React from 'react'
import Aproved from './Aproved'
import './Main.css'
import data from '../../../data.json'

const Main = () => {
    const proposals = data[1].proposals
    return (
        <div className="proposal--container">
            <div className="proposal--content aproved__proposal">
            {proposals.map((item)=> (
                    item.approvedStatus ===null &&
                    <Aproved
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

export default Main


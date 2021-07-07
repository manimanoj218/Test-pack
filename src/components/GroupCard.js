import React from "react";
import "../App.css";

const GroupCard = ({ groups }) => {
    return (
        <>
            {groups.map((group, i) => (
                <div className="col-md-6" key={i}>
                    <div className="group-section">
                        <div className="group-header">
                            {group.name}
                        </div>
                        <div className="row">
                            <div className="col-md-10">
                                {group.data && group.data.length > 0 ?
                                    group.data.map((card, index) => (
                                        <div className="card my-3 bg-secondary text-white" key={index}>
                                            <div className="card-header">{card.title}</div>
                                            <div className="card-body">{card.description}</div>
                                        </div>
                                    )) : 'No Data'
                                }
                            </div>
                            <div className="col-md-2">
                                <div className="vl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    )
}

export default GroupCard;
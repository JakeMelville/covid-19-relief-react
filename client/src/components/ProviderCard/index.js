import React from 'react';

function ProviderCard(props) {
    return (
        <div>
            <h3 className='pl-3'>{props.nameState}</h3>
            <div className="card">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">{props.brandState}</h6>
                    <a href={props.brandWebsite} className="card-link">{props.brandWebsite}</a>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">{props.brand1State}</h6>
                    <a href={props.brand1Website} className="card-link">{props.brand1Website}</a>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">{props.brand2State}</h6>
                    <a href={props.brand2Website} className="card-link">{props.brand2Website}</a>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">{props.brand3State}</h6>
                    <a href={props.brand3Website} className="card-link">{props.brand3Website}</a>
                </div>
            </div>
            
        </div>
    )
}

export default ProviderCard;
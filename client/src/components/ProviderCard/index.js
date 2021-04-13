import React from 'react';
import './style.css'

function ProviderCard(props) {
    return (
        <div className='container'>
            <div className='row justify-content-between'>
                <h3 className='pl-5 ml-5 col-12'><strong>{props.nameState}</strong></h3>
                <div id='brandNameCard0' className="card col-6 mb-1">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{props.brandState}{`(${props.numLocations})`}</h6>
                        <a href={props.brandWebsite} target='_blank' className="card-link">{props.brandWebsite}</a>
                    </div>
                </div>
                <div id='brandNameCard1' className="card col-6 mb-1">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{props.brand1State}{`(${props.num1Locations})`}</h6>
                        <a href={props.brand1Website} target='_blank' className="card-link">{props.brand1Website}</a>
                    </div>
                </div>
                <div id='brandNameCard2' className="card col-6 mb-1">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{props.brand2State}{`(${props.num2Locations})`}</h6>
                        <a href={props.brand2Website} target='_blank' className="card-link">{props.brand2Website}</a>
                    </div>
                </div>
                <div id='brandNameCard3' className="card col-6 mb-1">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{props.brand3State}{`(${props.num3Locations})`}</h6>
                        <a href={props.brand3Website} target='_blank' className="card-link">{props.brand3Website}</a>
                    </div>
                </div>
                <div id='brandNameCard4' className="card col-6 mb-1">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{props.brand4State}{`(${props.num4Locations})`}</h6>
                        <a href={props.brand4Website} target='_blank' className="card-link">{props.brand4Website}</a>
                    </div>
                </div>
                <div id='brandNameCard5' className="card col-6 mb-1">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{props.brand5State}{`(${props.num5Locations})`}</h6>
                        <a href={props.brand5Website} target='_blank' className="card-link">{props.brand5Website}</a>
                    </div>
                </div>
                <div id='brandNameCard6' className="card col-6 mb-1">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{props.brand6State}{`(${props.num6Locations})`}</h6>
                        <a href={props.brand6Website} target='_blank' className="card-link">{props.brand6Website}</a>
                    </div>
                </div>
                <div id='brandNameCard7' className="card col-6 mb-1">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{props.brand7State}{`(${props.num7Locations})`}</h6>
                        <a href={props.brand7Website} target='_blank' className="card-link">{props.brand7Website}</a>
                    </div>
                </div>
                <div id='brandNameCard8' className="card col-6 mb-1">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{props.brand8State}{`(${props.num8Locations})`}</h6>
                        <a href={props.brand8Website} target='_blank' className="card-link">{props.brand8Website}</a>
                    </div>
                </div>
                <div id='brandNameCard9' className="card col-6 mb-1">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{props.brand9State}{`(${props.num9Locations})`}</h6>
                        <a href={props.brand9Website} target='_blank' className="card-link">{props.brand9Website}</a>
                    </div>
                </div>
                <div id='brandNameCard10' className="card col-6 mb-1">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{props.brand10State}{`(${props.num10Locations})`}</h6>
                        <a href={props.brand10Website} target='_blank' className="card-link">{props.brand10Website}</a>
                    </div>
                </div>
                <div id='brandNameCard11' className="card col-6 mb-1">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{props.brand11State}{`(${props.num11Locations})`}</h6>
                        <a href={props.brand11Website} target='_blank' className="card-link">{props.brand11Website}</a>
                    </div>
                </div>
                <div id='brandNameCard12' className="card col-6 mb-1">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{props.brand12State}{`(${props.num12Locations})`}</h6>
                        <a href={props.brand12Website} target='_blank' className="card-link">{props.brand12Website}</a>
                    </div>
                </div>
                <div id='brandNameCard13' className="card col-6 mb-1">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{props.brand13State}{`(${props.num13Locations})`}</h6>
                        <a href={props.brand13Website} target='_blank' className="card-link">{props.brand13Website}</a>
                    </div>
                </div>
                <div id='brandNameCard14' className="card col-6 mb-1">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{props.brand14State}{`(${props.num14Locations})`}</h6>
                        <a href={props.brand14Website} target='_blank' className="card-link">{props.brand14Website}</a>
                    </div>
                </div>
                <div id='brandNameCard15' className="card col-6 mb-1">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{props.brand15State}{`(${props.num15Locations})`}</h6>
                        <a href={props.brand15Website} target='_blank' className="card-link">{props.brand15Website}</a>
                    </div>
                </div>
                <div id='brandNameCard16' className="card col-6 mb-1">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{props.brand16State}{`(${props.num16Locations})`}</h6>
                        <a href={props.brand16Website} target='_blank' className="card-link">{props.brand16Website}</a>
                    </div>
                </div>
                <div id='brandNameCard17' className="card col-6 mb-1">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{props.brand17State}{`(${props.num17Locations})`}</h6>
                        <a href={props.brand17Website} target='_blank' className="card-link">{props.brand17Website}</a>
                    </div>
                </div>
                <div id='brandNameCard18' className="card col-6 mb-1">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{props.brand18State}{`(${props.num18Locations})`}</h6>
                        <a href={props.brand18Website} target='_blank' className="card-link">{props.brand18Website}</a>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ProviderCard;
import React from 'react'
import Images from './Images';

function Cards(props) {
    return (
        <>
            {/* <div style={{border:"5px solid #ff77f7"}}>
                <div className="card">
                    <Images img={props.mysrc}  />
                    <div className="card_info">
                        <span className="card_category">{props.cardcategory}</span>
                       <Title title={props.cardtitle}/>
                        <a href={props.link} target="_blank">
                            <button>Watch</button>
                        </a>
                    </div>
                </div>
            </div> */}


            <div className="cards">
                <div className="card">
                    <Images src={props.mysrc}/>
                    <div className="card_info">
                        <span className="card_category">{props.cardcategory}</span>
                        <h2 className="card_title"> {props.cardtitle}</h2>
                        <a href={props.link} target="_blank">
                            <button>watch now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;

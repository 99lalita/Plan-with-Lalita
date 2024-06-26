import { useState } from "react";

function Card(props) {

    const [readmore,setReadmore] = useState(false);

    const description = readmore ? props.info:`${props.info.substring(0,200)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    
    return (
        <div className="card">
            <img src={props.image} alt="" className="image"/>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹{props.price}</h4>

                    <h4 className="tour-name">{props.name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less`:`Read More`}
                    </span>
                </div>
            </div>
            
            <button className="btn-red" onClick={() => props.removeTour(props.id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;
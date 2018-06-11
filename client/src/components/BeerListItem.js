import React from "react";

const BeerListItem = (props) => {
    return 
        <li className="list-group-item">
            {props.children}
        </li>
};

export default BeerListItem;
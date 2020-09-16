import React from 'react';

import './Post.css';

const post = (props) => (
    
    <p className="Post" onClick={props.clicked}>
        <p>{props.title}</p>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
        
    </p>
 
    
    
);

export default post;
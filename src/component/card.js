import React from "react";
import Avatra from "./avatar";
import Detail from "./details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatra img={props.img} />
      </div>
      <div className="bottom">
       <Detail 
         detailInfo={props.tel}
         /> 
       <Detail detailInfo={props.email} />  
        
      </div>
    </div>
  );

};


export default Card;

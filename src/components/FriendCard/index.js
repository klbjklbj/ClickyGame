import React from "react";
import "./style.css";


//#############Original for Friends Refactor
// function FriendCard(props) {
//   return (
//     <div className="card">
//       <div className="img-container">
//         <img alt={props.name} src={props.image} />
//       </div>

//       <span onClick={() => props.removeFriend(props.id)} className="remove">
        
//       </span>
//     </div>
//   );
// }

const FriendCard = props => (
  <div 
    className="card" 
    value={props.id} 
    onClick={() => props.getClick(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;

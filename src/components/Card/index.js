
import './style.css';

function Card(props){
    return(
        <div className="card">
          <div className="user-info">
            <img src={props.url} alt={props.user} />
            <div className="name-pos">
              <span className="name">{props.user}</span>
              <span className="position">Verified Buyer</span>
            </div>
          </div>
          <div className="user-comment">
            <p>{props.text}</p>
          </div>
        </div>
    )
}

export default Card;

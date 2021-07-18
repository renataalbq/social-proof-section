import star from '../../assets/star.svg';

import './style.css';


function Rating(props){
    return(
      <div className="rate">
        <div className="stars">
          <img src={star} className="star" alt="star" />
          <img src={star} className="star" alt="star" />
          <img src={star} className="star" alt="star" />
          <img src={star} className="star" alt="star" />
          <img src={star} className="star" alt="star" />
        </div>
        <span>{props.text}</span>
      </div>
    )
}

export default Rating;
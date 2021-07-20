import Card from './components/Card'
import Rating from './components/Rating'
import colton from './assets/colton.jpg'
import irene from './assets/irene.jpg'
import anne from './assets/anne.jpg'
import bgtop from './assets/bgtop.svg';
import bgbottom from './assets/bgbottom.svg';

import './App.css';

function App() {
  return (
      <div className="app" style={{backgroundImage:`url(${bgtop}), url(${bgbottom})`}} >
        <section className="sec-one">
          <div className="left">
            <h1>10,000+ of our users love our products.</h1>
            <p>We only provide great products combined with excellent customer service.
            See what our satisfied customers are saying about our services.</p>
          </div>
          <div className="right">
            <div className="rating">
              <Rating text='Rated 5 Stars in Reviews' />
              <Rating text='Rated 5 Stars in Report Guru' />
              <Rating text='Rated 5 Stars in BestTech' />
            </div>
          </div>
        </section>
        <section className="sec-two">
          <Card user='Colton Smith' url={colton}
          text="We needed the same printed design as the one we had ordered a week prior.
          Not only did they find the original order, but we also received it in time.
          Excellent!"
          />
          <Card user='Irene Roberts' url={irene}
          text="Customer service is always excellent and very quick turn around. Completely
          delighted with the simplicity of the purchase and the speed of delivery."
          />
          <Card user='Anne Wallace' url={anne}
          text="Put an order with this company and can only praise them for the very high
          standard. Will definitely use them again and recommend them to everyone!"
          />
      
        </section>
      </div>
  );
}

export default App;

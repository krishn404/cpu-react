import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <h2>Career Point University, Kota</h2>
      <div className="grid-container">
        <div className="grid-item main-image">
          <img src="https://i.ytimg.com/vi/D4UKRJdxMcQ/maxresdefault.jpg" alt="Main Image" className="image" />
        </div>
        <div className="grid-item">
          <img src="https://media.licdn.com/dms/image/D5622AQGSxoK4cwIsQA/feedshare-shrink_2048_1536/0/1709384249690?e=1712793600&v=beta&t=Rp0FFVUs75MEYAKGIvwamsCBW1Sf15QQbHxBQ9669S4" alt="Image 2" className="image" />
        </div>
        <div className="grid-item">
          <img src="https://media.licdn.com/dms/image/D5622AQGk8NdTJLM8pQ/feedshare-shrink_2048_1536/0/1708756779994?e=1712793600&v=beta&t=Em8AWePaTSmLWywWf6pQWCF1_-TKEB1D4B_74Y-JKQQ" alt="Image 3" className="image" />
        </div>
        <div className="grid-item">
          <img src="https://media.licdn.com/dms/image/D5622AQHulQphtcpAXA/feedshare-shrink_2048_1536/0/1706333447898?e=1712793600&v=beta&t=qsYYDsGKVZekayrFKsGnHHtroRyia4HcaI4bBARozlI" alt="Image 3" className="image" />
        </div>
        <div className="grid-item">
          <img src="https://media.licdn.com/dms/image/D4D22AQEFE7ISoAKb8Q/feedshare-shrink_2048_1536/0/1704092376112?e=1712793600&v=beta&t=0g2MdgblU0dIJCAAhcClU1KJcnHQV4tfwBeGnf3mTZs" alt="Image 3" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Home;

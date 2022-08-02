import React from 'react'
import '../App.css';
const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card">
        <span className='position-absolute translate-middle badge rounded-pill bg-danger' style={{ right: "-3%", top: "-1%", zIndex: "1" }}>{source}</span>
        <img src={!imageUrl ? "https://images.indianexpress.com/2022/07/ICSE-ISC-result.jpg" : imageUrl} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-danger">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="glow-on-hover">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
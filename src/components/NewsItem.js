import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    const {
      description,
      imageUrl,
      url,
      author,
      date,
      source
    } = this.props;

    return (
      <div className='my-3'>
        <div className="card" style={{ width: '100%', position: 'relative' }}>

          <span
            className="badge rounded-pill bg-danger"
            style={{
              position: 'absolute',
              right: '10px',
              top: '10px',
              zIndex: '1'
            }}
          >
            {source}
          </span>

          <img
            src={
              imageUrl
                ? imageUrl
                : "https://via.placeholder.com/300x200.png?text=No+Image"
            }
            className="card-img-top"
            alt="news"
            style={{ maxHeight: '200px', objectFit: 'cover' }}
          />

          <div className="card-body">
            <p className="card-text">
              {description ? description : "No description available."}
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

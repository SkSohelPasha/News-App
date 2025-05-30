import React, { Component } from 'react'

export  class NewsItem extends Component {

  render() {
   let {description,imageUrl,url,author,date,source}=this.props;
    return (
      <div className='my-1'>
        <div  className="card" style={{width:' 18rem' , margin:'0 10px' }}>
<div>
<span className="badge rounded-pill bg-danger" style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
    {source}
   
  </span>
</div>
<img src={!imageUrl?"https://images.axios.com/TgocutZHVA2flBPwFI8-vlgMKT8=/0x0:1920x1080/1366x768/2024/11/07/1730938066760.jpg":imageUrl}  className="card-img-top" alt="..."/>
  <div  className="card-body">

    <p  className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date (date).toGMTString()}</small></p>
    <a href={url} className="btn btn-sm btn-primary btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem

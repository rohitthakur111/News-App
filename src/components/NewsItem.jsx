//rce for class or rfc for function components
// import React, { Component } from 'react'
import React from 'react'
 const NewsItem =(props)=> {
  let {title, description,imageUrl,url,author,date,source} = props;

  return (
    <>
    
    <div className="col-md-3 my-3">
      <div className="card mx-2" style={{justifyContent :'flex-end'}}>
        <div className="d-flex" style={{justifyContent :'flex-end'}}>
          <span className="position-absolute badge rounded-pill bg-danger">{source}</span>
        </div>
      
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body"> 
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author?author:'Unknown'} on {date} </small></p>
          
          <a href={url} className="btn btn-sm btn-dark" target="_blank">Read more...</a>
        </div>
      </div>
    </div>
    </>
  )
} 

export default NewsItem

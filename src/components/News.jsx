// import React , {Component} from 'react';
import React , {useEffect,useState} from 'react';
import Spinner from './Spinner';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
// import {articles} from './Articles';
const News = (props)=>{
   const [articles,setArticles] = useState([]);
   const [loading,setLoading] = useState(true);
   const [page, setPage] = useState(1);
   const [totalresults, setTotalresults] = useState(0);
    const updateNews = async()=>{
        props.setProgress(20);
        setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalresults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);

    }
    useEffect(() =>{
        document.title = `${props.category.charAt(0).toUpperCase()+props.category.slice(1)} - Latest News Fusion`;
        updateNews();
    },[]);
    const fetchMoreData = async () => {
        const url1 = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url1);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
      };

    return(
        <>
        {!loading&&<h1 className="my-4 text-center">News Fusion - Top {props.category.charAt(0).toUpperCase()+props.category.slice(1)} Headlines</h1>}
        { loading&&<Spinner />}
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length < totalresults}
            loader={<Spinner/>}
        >
        <div className="container" >          
            <div className="my-3 d-flex row">
                {articles.map((news,index)=>
                    <NewsItem key={index} title={news.title?news.title.slice(0,50): ''} description ={news.description ? news.description.slice(0,60):''} imageUrl={news.urlToImage? news.urlToImage : 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-02/12/full/1707726983-3553.png'} url={news.url} author={news.author} date={new Date(news.publishedAt).toGMTString().substr(0,11)} source={news.source.name}/>
                )}
            </div>
        </div>
        </InfiniteScroll>
        {/* previoius and next button*/}
        {/* {!loading && <div className="d-flex justify-content-between my-3">
                <button  disabled = {page<=1?true : false} type="button" className="btn btn-dark" onClick={handlePrevclick}> &larr; Previous </button>
                <button disabled = {page+1 > Math.ceil(totalresults/props.pageSize)?true : false}type="button" className="btn btn-dark me-10" onClick={handleNextclick}>  Next &rarr;</button>
        </div>} */}
        </>
        )
    }
    News.defaultProps={
        country : 'in',
        pageSize : 8,
        category : 'general'
    }
    News.propTypes = {
        country : PropTypes.string,
        pageSize :PropTypes.number,
        category : PropTypes.string
    }
   export default News;
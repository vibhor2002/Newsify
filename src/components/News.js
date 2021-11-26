import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    
    const capatilize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const updatenews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setArticles(parsedData.articles)
        setLoading(false)
        setTotalResults(parsedData.totalResults)
        props.setProgress(100);
        
    }
    
    useEffect(() => {
        document.title = `${capatilize(props.category)} - Newsify`;
        updatenews();
    }, [])

    // const handlePrevClick = async () => {
    //     setPage(page-1)
    //     updatenews();
    // }

    // const handleNextClick = async () => {
    //     setPage(page+1)
    //     updatenews();
    // }

    const fetchMore = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pagesize}`;
        setPage(page + 1)
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    };

    return (
        <div className="container my-3">
            <h1 style={{ margin: '30px 0px', marginTop: '90px' }}>Newsify - Top Headlines  - {capatilize(props.category)}</h1>
            {loading}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMore}
                hasMore={articles !== totalResults}
                loader={<Spinner />} >
                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
            </InfiniteScroll>
        </div>
    )
}

News.defaultProps = {
    country: 'in',
    pagesize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
}

export default News
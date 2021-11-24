import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import loading from './loading.gif'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pagesize: 8,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string
    }

    capatilize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capatilize(this.props.category)} - Newsify`;
    }

    async updatenews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=127c27987f374ceb995cb3d0d210a2a8&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=127c27987f374ceb995cb3d0d210a2a8&page=1&pagesize=${this.props.pagesize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // })
        this.updatenews();
    }

    handlePrevClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=127c27987f374ceb995cb3d0d210a2a8&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
        this.setState({ page: this.state.page - 1 });
        this.updatenews();
    }

    handleNextClick = async () => {
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=127c27987f374ceb995cb3d0d210a2a8&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
        //     this.setState({ loading: true })
        //     let data = await fetch(url);
        //     let parsedData = await data.json()
        //     console.log(parsedData);
        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles,
        //         loading: false
        //     })
        // }
        this.setState({ page: this.state.page + 1 });
        this.updatenews();
    }

    fetchMore = async() => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=127c27987f374ceb995cb3d0d210a2a8&page=${this.state.page}&pagesize=${this.props.pagesize}`;     
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        })
    };

    render() {
        return (
            <div className="container my-3">
                <h1 style={{ margin: '30px 0px' }}>Newsify - Top Headlines  - {this.capatilize(this.props.category)}</h1>
                {/* {this.state.loading && <Spinner />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMore}
                    hasMore={this.state.articles !== this.state.totalResults}
                    loader={<Spinner />} >
                    
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
                </div> */}
            </div>
        )
    }
}

export default News
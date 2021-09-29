import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    //run after render method
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=127c27987f374ceb995cb3d0d210a2a8";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })
    }

    render() {
        return (
            <div className="container my-4">
                <h1>Newsify - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News

import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Tony Romm",
            "title": "Debt ceiling vote in Senate to be blocked by Republicans - The Washington Post",
            "description": "The GOP's expected opposition is sure to deal a death blow to the measure, which had passed the House, and adds to the pressure on Democrats to devise their own path forward ahead of a series of urgent fiscal deadlines starting this week.",
            "url": "https://www.washingtonpost.com/us-policy/2021/09/27/senate-debt-ceiling-government-shutdown/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/RUHMA7A4VEI6ZPVIGCHKCNCZJ4.jpg&w=1440",
            "publishedAt": "2021-09-27T14:40:20Z",
            "content": "Ahead of the planned Monday vote, Senate Minority Leader Mitch McConnell (R-Ky.) staked his partys position that Republicans are not willing to vote for any measure that raises or suspends the debt c… [+5463 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Barron's"
            },
            "author": null,
            "title": "Apple and Tesla Suppliers Hit By Global Energy Crisis. What to Know. - Barron's",
            "description": "Debt ceiling and infrastructure spending in Congress this week, German elections leave no clear winner, Chinese agencies take steps to shield consumer funds from Evergrande crisis, and other news to start your day.",
            "url": "https://www.barrons.com/articles/things-to-know-today-51632735533",
            "urlToImage": "https://images.barrons.com/im-407144/social",
            "publishedAt": "2021-09-27T14:10:00Z",
            "content": "A worldwide energy shortage is threatening to develop into a full-blown crisis.\r\nThe scenes in the U.K. over the weekend were reminiscent of the 1970s, as drivers queued at thousands of filling stati… [+271 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Toyin Owoseje, CNN",
            "title": "Rolling Stones pay tribute to Charlie Watts as they finally kick off US tour - CNN",
            "description": "The Rolling Stones honored their bandmate of nearly six decades as they finally kicked off their pandemic-delayed \"No Filter\" tour at The Dome at America's Center in St. Louis, Missouri.",
            "url": "https://www.cnn.com/2021/09/27/entertainment/rolling-stones-charlie-watts-no-filter-tour-intl-scli/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210927042445-01-rolling-stones-perform-0926-super-tease.jpg",
            "publishedAt": "2021-09-27T14:06:00Z",
            "content": null
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Ryan Gaydos",
            "title": "Packers' Marquez Valdes-Scantling wonders why 49ers left Aaron Rodgers with time on clock - Fox News",
            "description": "Green Bay Packers wide receiver Marquez Valdes-Scantling was surprised the San Francisco 49ers left any time on the clock at the end of the game for Aaron Rodgers.",
            "url": "https://www.foxnews.com/sports/packers-marquez-valdes-scantling-49ers-aaron-rodgers-time",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/09/Marquez-Valdes-Scantling.jpg",
            "publishedAt": "2021-09-27T14:02:36Z",
            "content": "Green Bay Packers wide receiver Marquez Valdes-Scantling was surprised the San Francisco 49ers left any time on the clock at the end of the game for Aaron Rodgers.\r\nRodgers only needed the 37 seconds… [+1170 chars]"
        },
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Eric Berger",
            "title": "New NASA satellite to continue half a century of changing Earth observations - Ars Technica",
            "description": "\"Landsat has provided a critical reference for assessing long-term changes.\"",
            "url": "https://arstechnica.com/science/2021/09/new-nasa-satellite-to-continue-half-a-century-of-changing-earth-observations/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2021/09/lakepowellquad_oli_2021120-720x380.jpg",
            "publishedAt": "2021-09-27T13:33:51Z",
            "content": "Enlarge/ Natural color images from March 1999, April 2005, May 2011, and April 2021 by Landsat satellites chronicle the shrinking Lake Powell reservoir and Lower Colorado River.\r\n22 with 19 posters p… [+2512 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Jennifer Hassan, Loveday Morris",
            "title": "Franziska Giffey to become Berlin's first female mayor - The Washington Post",
            "description": "The election of Franziska Giffey comes as Germany’s first female chancellor, Angela Merkel, prepares to step down.",
            "url": "https://www.washingtonpost.com/world/2021/09/27/berlin-first-female-mayor-franziska-giffey/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/IRVFZLQ7DMI6ZKGZBAT2FJFZCU.jpg&w=1440",
            "publishedAt": "2021-09-27T13:18:45Z",
            "content": "The 43-year-old candidate for the Social Democrats took to social media on Monday to thank her supporters who said it was about time a woman led the capital and described her as someone who gets thin… [+3805 chars]"
        }

    ]
    constructor() {
        super();
        console.log("Hello I am a constructor from news Component")
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className="container my-4">
                <h2>Newsify - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem  title={element.title} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News

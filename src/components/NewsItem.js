import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description } = this.props;
        return (
            <div>
                <div className="card" style={{width: '18rem'}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div class ="card-body">
                    <h5 class ="card-title">{title}</h5>
                    <p class ="card-text">{description}</p>
                    <a href="/newsdetail" class ="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

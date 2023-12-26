import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
export class News extends Component {
   static defaultProps={
    country:'in',
    category:'general'
   }
   static propTypes={
    country:PropTypes.string,
    category:PropTypes.string
   }
    constructor(props){
        super(props);
            this.state={
                articles:[],
                loading:false
            }
            document.title=this.props.category;
    }
   async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cdd216c99e714841893d4c6335153725&page=${this.state.page=1}`;
      this.setState({loading:true})
      let data=await fetch(url);
      let parseData=await data.json();
      this.setState({articles:parseData.articles,
      loading:false})
    }
    handleNextClick=async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cdd216c99e714841893d4c6335153725&page=${this.state.page+1}`;
              this.setState({loading:true})
      let data=await fetch(url);
      let parseData=await data.json();
     
      this.setState({
        page:this.state.page+1,
        articles:parseData.articles,
        loading:false
      })
    }
    handlePreviousClick=async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cdd216c99e714841893d4c6335153725&page=${this.state.page-1}`;
      this.setState({loading:true})
      let data=await fetch(url);
      let parseData=await data.json();
     
      this.setState({
        page:this.state.page-1,
        articles:parseData.articles,
        loading:false
      })
    }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">News Monkey Top Headlines </h1>
          {this.state.loading && <Spinner/>}
       
        <div className='row'>
        {!this.state.loading&&this.state.articles.map((element)=>{ return <div className='col-md-4' key={element.url}  >
            <NewsItems  title={element.title?element.title:"" }description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>})}
          
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News

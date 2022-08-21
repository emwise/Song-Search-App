import React from "react";
import SearchForm from "./SearchForm"
import ResultItem from "./ResultItem"

export default class SearchApp extends React.Component{
  constructor(){
    super();

    this.state = {
      results: [],
      isLoading: false
    }

    this.makeSearch = this.makeSearch.bind(this)
  }


  makeSearch(text){
    const mergedText = text.replace(/ /g, '+');

    this.setState({
      isLoading: true,
      results: []
    })
    fetch(`https://itunes.apple.com/search?term=${mergedText}&entity=song`)
      .then((response=>{
        if(response.status >= 200 && response.status < 300){
          return response.json();
        }else{
          throw new Error()
        }
      }))
      .then((json=>{
        this.setState({
          results: json.results
        })
      }))
      .catch((err)=>{
        console.log(err)
      })
      //this then callback function is only run after the response is either recieved
      //or an error has been thrown. So this function will run regardless
      //of the outcome.
      .then(()=>{
        this.setState({
          isLoading: false
        })
      })
  }

  render(){
    return(
      <div>
        <div className="bg-light p-5 rounded-lg m-3">
          <h1 className="text-center display-4">
            Song Search App
          </h1>
          <p className="lead text-center">
            Search any song. Powered by iTunes.
          </p>
          <SearchForm onSearch={this.makeSearch} />
          {this.state.isLoading ? 
          "Loading...":
          `${this.state.results.length} results found`}
        </div>
        <ul className="media-list">
          {this.state.results.map((item, index)=>{
             return (
                <ResultItem key={index} item={item}/>
              )
          })}
        </ul>
      </div>
    )
  }
}
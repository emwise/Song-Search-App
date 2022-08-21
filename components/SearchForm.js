import React from "react";

export default class SearchForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      text: ''
    }

    this.updateText = this.updateText.bind(this)
  }

  updateText(e){
    this.setState({
      text: e.target.value
    })
  }

  submitHandler(e){
    e.preventDefault()
    if (this.state.text === ''){
      return
    }
    this.props.onSearch(this.state.text)
  }

  render(){
    return(
      <form className="input-group input-group-lg">
        <input type='text'
          className="form-control"
          onChange={(e)=>{this.updateText(e)}}
          value={this.state.text}/>
        <span className="input-group-btn">
          <input type="submit"
            value="Search"
            className="btn btn-primary btn-lg"
            onClick={(e)=>{
              this.submitHandler(e)
            }}  />
        </span>
      </form>
    )
  }
}
import React from "react";

export default class ResultItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="d-flex align-items-center mb-3 position-relative">
        <a className="text-decoration-none text-reset" href={this.props.item.trackViewUrl} target="_blank">
          <div className="d-flex flex-row">
            <div className="flex-shrink-0">
              <img src={this.props.item.artworkUrl60}/>
            </div>
            <div className="flex-grow-1 ms-3">
              <h4>
                {this.props.item.trackName} 
              </h4>
              <em>{this.props.item.artistName}</em>
              <span className="badge bg-secondary position-absolute top-50 end-0 translate-middle">
                {this.props.item.currency} {this.props.item.trackPrice}
              </span>
            </div>
          </div>
        </a>
      </div>
    )
  }
}
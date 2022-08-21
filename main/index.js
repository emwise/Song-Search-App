import React from "react";
import ReactDOM from "react-dom/client";
import 'whatwg-fetch';
import SearchApp from "../components/SearchApp"

function App(){
  return (
    <div className="container">
      <SearchApp/>
    </div>
  )
}


ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <App />
)


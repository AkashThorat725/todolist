import { Component } from "react";
export class Heading extends Component {
    render (){
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
              
                <h1>Notes</h1>
            </div>
        );
    }
}
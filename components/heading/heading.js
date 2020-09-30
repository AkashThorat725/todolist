import { Component } from "react";
import style from "./heading.module.css";
export class Heading extends Component {
    render (){
        return (
            <div>
                <div>
        <form>
  <input className={style.navbar} type="text" name="search" placeholder="Search...."/>
            </form>
            <button type="button">search</button>
                </div>
               <h1>Notes</h1>
            </div>
        );
    }
}
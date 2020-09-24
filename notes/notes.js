import { Component } from "react";
import style from "./notes.module.css";


export class Notes extends Component {
    render() {
        return(
            <div>
                <div className={style.card}></div>
                <div className={style.card1}></div>
                <div className={style.card2}></div>
            </div>
        );
    }
}
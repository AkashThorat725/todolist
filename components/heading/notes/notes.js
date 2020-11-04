import { Component } from "react";
import { Heading } from "../heading";
import style from "./notes.module.css";


export class Notes extends Component {
    render() {
        return(

            <div className={style.parent}>
              <div className="row">
                <div className="col-md-1"> <div className={style.sideBar}>
               <h6>Todo-app</h6>
               <div className={style.plus}>
               <svg width="2em" 
               height="2em" 
               viewBox="0 0 16 16" 
               class="bi bi-plus" 
               fill="currentColor" 
               xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" 
  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
               </div>
               </div></div>
               <div className="col-md-11 offset-1">
               <div className="row">
                <div className={(style.cards, "col-md-12")}>
                  < Heading />
                <div className="row" style={{ width:"100%"}}>
                    {" "}
                    <div className="col-md-4">
                      <div className={style.card}>
                          <div className={style.title}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          </div>
                          <div className={style.date}>May 20,2020</div>
                          <div className={style.edit}>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-pencil"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
              </div>
              <div className={style.stars}>
              <svg width="1em" 
              height="1em" 
              viewBox="0 0 16 16" 
              class="bi bi-star"
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg">
             <path fill-rule="evenodd"
             d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>
              </div>
            </div>  
         </div>
         <div className="col-md-4">
             <div className={style.card1}>
                 <div className={style.title}>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 </div>
                 <div className={style.date}>MAY 20,2020</div>
                 <div className={style.edit}>
                     <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-pencil"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                      </svg>
                 </div>
                 <div className={style.stars}>
                 <svg width="1em" 
                 height="1em" 
                 viewBox="0 0 16 16" 
                 class="bi bi-star" 
                 fill="currentColor" 
                 xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                </svg>
                 </div>
             </div>
         </div>
         <div className="col-md-4">
             <div className={style.card2}>
                 <div className={style.title}>
                 Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                 </div>
                 <div className={style.date}>MAY 20,2020</div>
                 <div className={style.edit}>
                     <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-pencil"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                      </svg>
                 </div>
                 <div className={style.stars}>
                 <svg width="1em" 
                 height="1em" 
                 viewBox="0 0 16 16" 
                 class="bi bi-star" 
                 fill="currentColor" 
                 xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" 
                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                </svg>
                 </div>
             </div>
         </div>
      </div>
    </div>
</div>
               </div>
              </div>
            
              
</div>
        );
    }
}

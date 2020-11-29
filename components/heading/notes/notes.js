import { useState, useEffect } from "react";
import NotesModal from "../modal/modal";
import firebase from "../../../firebase/firebase";
import style from "./notes.module.css";

export default function Notes() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const todoRef = firebase.database().ref("Todo");
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      console.log(todoList);
      setTodoList(todoList);
    });
    console.log(todoList);
  }, []);
  let colors = [
    "#F44336",
    "#FF5722",
    "#8BC34A",
    "#CDDC39",
    "#536DFE",
    "#FFC107",
    "#9C27B0",
    "#4CAF50",
  ];

  function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }
  return (
    <>
      <div className="row" style={{ maxWidth: "100%" }}>
        <div className={["col-md-1", style.sidebar_parent].join(" ")}>
          <div className={style.sidebar}>
            <div className={style.heading}>TODO</div>
            <div className={style.button_parent}>
              <NotesModal type="create" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className={style.button_parent_mobile}>
            <NotesModal type="create" />
          </div>
          <div className={style.cards}>
            <div className="row" style={{ width: "100%" }}>
              {" "}
              {todoList.map((data, i) => (
                <div className="col-md-4" key={i}>
                  <div className={style.card} style={{backgroundColor:randomColor()}}>
                    <div className={style.title}>{data.notes}</div>
                    <div className={style.date}>{data.date}</div>
                    <div className={style.edit}>
                      <NotesModal type="edit" content={data.notes} id={data.id} />
                    </div>
                    <div className={style.star}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
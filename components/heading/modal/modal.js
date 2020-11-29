import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import firebase from "../../../firebase/firebase";
const NotesModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);
  const [notes, setNotes] = useState('');
  const [noteValue, setNoteValue] = useState(props.content);
  const toggle = () => setModal(!modal);
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setNotes(e.target.value);

  }
  const handleOnChangeValue = (e) => {
    console.log(e.target.value);
    setNoteValue(e.target.value);
  }

  const submitNote = async (type) => {
    console.log("submit", type);
    if (type === "create") {
      const todoRef = firebase.database().ref("Todo");
      const note = {
        notes,
        date: getTime()
      };
      await todoRef.push(note);
      setNotes("");
      toggle();
    } else if (type === "edit") {
      const todoRef = firebase.database().ref("Todo").child(props.id);
      await todoRef.update({
        notes: noteValue,
        date: getTime()
      });
      toggle();
    }
  };
  const deleteNote = async () => { 
    const todoRef = firebase.database().ref("Todo").child(props.id);
    await todoRef.remove();
    toggle();
  }
  const getTime = () => {
    let date = new Date();
    let month = date.toLocaleString('default', { month: 'short' })
    return  month + " " + date.getDate() + ", " + date.getFullYear(); 
  }
  return (
    <div>
      <div>
          {props.type =="create"? ( <div onClick={toggle}>
                   <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-plus"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    />
                  </svg>
                </div>):( <div onClick={toggle}>
                <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          class="bi bi-pencil"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                          />
                        </svg>
                </div>)}


    </div>

      <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>{props.type =="create"? "Create Note":"Edit Note"}</ModalHeader>
        <ModalBody>
        <FormGroup>
        <Label for="exampleText">{props.type =="create"? "Create your Note":"Edit your Note"}</Label>
        <Input type="textarea" name="text" id="exampleText" onChange={
                props.type == "create" ? handleOnChange : handleOnChangeValue}
              value={props.type == "create" ? notes : noteValue}/>
      </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => submitNote(props.type)}>Submit</Button>{' '}
          {props.type == "edit"?<Button color="danger"  onClick={() => deleteNote()}>Delete</Button> :"" }
           <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    
    </div>
  );
}

export default NotesModal;
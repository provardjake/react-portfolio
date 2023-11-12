import { useState } from "react";
import {validateEmail} from "../utils/helpers.js";

export default function Contact(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [messageErrorMessage, setMessageErrorMessage] = useState("");
  

  // function to check if the from fields have been completed when the cursor leaves the field
  const handleMouseLeave = (e) =>{
    e.preventDefault();
    const {target} = e;

    if(target.value === ""){

      if(target.name === "name"){
        setNameErrorMessage("Please enter a name");
      }

      if(target.name === "email"){
        setEmailErrorMessage("Please enter an email")
      }

      if(target.name === "message"){
        setMessageErrorMessage("Please enter a message");
      }
    }
    else{
      setNameErrorMessage("");
      setEmailErrorMessage("");
      setMessageErrorMessage("");
    }

  }

  // checks if all fields and email is valid when form is submitted
  const handleFormSubmit = (e)=>{
    e.preventDefault();

    if(e.target[0].value === ""){
      setNameErrorMessage("Please enter a name");
    }
    if(e.target[1].value === ""){
      setEmailErrorMessage("Please enter an email");
    }
    if(e.target[2].value === ""){
      setMessageErrorMessage("Please enter a message");
      return
    }

    if(!validateEmail(email)){
      setErrorMessage("Please enter a valid email.");
      return
    }
    else{
      setErrorMessage("");
    }

    setName("");
    setEmail("");
    setMessage("");

    setNameErrorMessage("");
    setEmailErrorMessage("");
    setMessageErrorMessage("");

  }

  return(
      <div className="container">
        <div className="text-center">
          <h1>Contact</h1>

          <form className="form" onSubmit={handleFormSubmit}>
            <h3>Name:</h3>
            {nameErrorMessage &&(
              <p style={{color: "red"}}>* required field</p>
            )}
            <input
              value = {name}
              name="name"
              onBlur={handleMouseLeave}
              onChange = {(e)=>setName(e.target.value)}
              type="text"
              placeholder="name"
              className="form-control"
            />

            <h3>Email: </h3>
            {emailErrorMessage &&(
              <p style={{color: "red"}}>* required field</p>
            )}
            {errorMessage &&(
              <p style={{color: "red"}}>* Please enter a valid email</p>
            )}
            <input
              value={email}
              name="email"
              onBlur={handleMouseLeave}
              onChange = {(e)=>setEmail(e.target.value)}
              type="email"
              placeholder="email"
              className="form-control"
            />

            <h3>Message: </h3>
            {messageErrorMessage &&(
              <p style={{color: "red"}}>* required field</p>
            )}
            <textarea
              value={message}
              name="message"
              onBlur={handleMouseLeave}
              onChange = {(e)=>setMessage(e.target.value)}
              type="text"
              placeholder="message"
              id="message"
              className="form-control"
            >
            </textarea>

            <button type="submit" className="mt-4">Submit</button>
          </form>
        </div>

        
      </div>
  )
}
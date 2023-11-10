import React from "react";
import "./Forgot.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
function Forgot() {
  return (
    <div class="fg-bgcontainer">
      <div class="fg-cardcontainer">
        <div class="fgarrow">
          <AiOutlineArrowLeft></AiOutlineArrowLeft>
        </div>
        <h1 class="fgheadername">Forgot Password</h1>
        <p class="fgpara">
          Recover you password if you have forgot the password!
        </p>
        <div class="fieldcontainer">
          <div className="fg-field fg-input-field">
            <label>Email</label>
            <input type="email" placeholder="Email" className="input" />
          </div>
          <div className="fg-field fg-button-field">
            <button class="button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;

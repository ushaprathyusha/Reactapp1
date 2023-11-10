import React from "react";
import "./Forgotverification.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
function Forgotverify() {
  return (
    <div class="fgv-bgcontainer">
      <div class="fgv-cardcontainer">
        <div class="fgvarrow">
          <AiOutlineArrowLeft></AiOutlineArrowLeft>
        </div>
        <h1 class="fgvheadername">Forgot Password</h1>
        <p class="fgvpara">
          We have sent an email for your email account with a verification code!
        </p>
        <div className="fgv-field fgv-input-field">
          <label>Verificationcode</label>
          <input type="email" placeholder="Ex:123456" className="input" />
        </div>
        <div className="fgv-field fgv-button-field">
          <button class="button">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Forgotverify;

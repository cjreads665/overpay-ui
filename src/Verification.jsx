import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Timer from "./Timer";
const Verification = () => {
  let min = 59
  let sec=59
  setInterval(() => {
    if(min!==0){
      if(sec==0){
        min--
      }
    }
  },1000);
  return (
    <div className="flex justify-center flex-col items-center h-[80vh]">
      <div>
        <h1>Verify your email</h1>
        <h5>We have sent code to your email</h5>
        <h5>alesiaka******@mail.com</h5>
      </div>
      <div id="otp" class="flex justify-around text-center px-2 mt-5">
        <input
          class="m-2  h-10 w-10 text-center form-control rounded border border-1 border-[#dbdde0]"
          type="text"
          id="first"
          maxlength="1"
        />
        <input
          class="m-2  h-10 w-10 text-center form-control rounded border border-1 border-[#dbdde0]"
          type="text"
          id="second"
          maxlength="1"
        />
        <input
          class="m-2  h-10 w-10 text-center form-control rounded border border-1 border-[#dbdde0]"
          type="text"
          id="third"
          maxlength="1"
        />
        <input
          class="m-2  h-10 w-10 text-center form-control rounded border border-1 border-[#dbdde0]"
          type="text"
          id="fourth"
          maxlength="1"
        />
        <input
          class="m-2  h-10 w-10 text-center form-control rounded border border-1 border-[#dbdde0]"
          type="text"
          id="fifth"
          maxlength="1"
        />
        <input
          class="m-2  h-10 w-10 text-center form-control rounded border border-1 border-[#dbdde0]"
          type="text"
          id="sixth"
          maxlength="1"
        />
      </div>
      <Link to='/profile'>
      <Button name='submit' />
      </Link>
    <p className="flex"> Resend code in <Timer/></p>
    </div>
  );
};

export default Verification;

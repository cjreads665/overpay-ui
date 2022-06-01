import React from "react";
import { Link } from "react-router-dom";
const Verification = () => {
  return (
    <div className="flex justify-center flex-col items-center h-[80vh]">
      <div>
        <h1>Verify your email</h1>
        <h5>We have sent code to your email</h5>
        <h5>alesiaka******@mail.com</h5>
      </div>
      <div id="otp" class="flex justify-around text-center px-2 mt-5">
        <input
          class="m-2 border h-10 w-10 text-center form-control rounded"
          type="text"
          id="first"
          maxlength="1"
        />
        <input
          class="m-2 border h-10 w-10 text-center form-control rounded"
          type="text"
          id="second"
          maxlength="1"
        />
        <input
          class="m-2 border h-10 w-10 text-center form-control rounded"
          type="text"
          id="third"
          maxlength="1"
        />
        <input
          class="m-2 border h-10 w-10 text-center form-control rounded"
          type="text"
          id="fourth"
          maxlength="1"
        />
        <input
          class="m-2 border h-10 w-10 text-center form-control rounded"
          type="text"
          id="fifth"
          maxlength="1"
        />
        <input
          class="m-2 border h-10 w-10 text-center form-control rounded"
          type="text"
          id="sixth"
          maxlength="1"
        />
      </div>
      <Link to='/profile'>
      <button className='text-white bg-[#194BFB] py-3 px-10 rounded-lg font-[800] tracking-[0.2px] capitalize '>
        <span className='text-sm tracking-wider'>Verify Account</span>
    </button>
      </Link>
    <section><p>Resend code in 59:00</p></section>
    </div>
  );
};

export default Verification;

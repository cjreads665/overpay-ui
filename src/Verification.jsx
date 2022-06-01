import React,{useState} from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Footer from "./Footer";
import Timer from "./Timer";
const Verification = () => {
  const [ minutes, setMinutes ] = useState(59);
  const [seconds, setSeconds ] =  useState(59);
  return (
    <div className="flex justify-center flex-col items-center h-[100vh]">
      <div>
        <h1 className="text-4xl font-[900] text-center">Verify your email</h1>
        <h5 className="text-[#718096] text-sm mt-2 text-center">We have sent code to your email</h5>
        <h5 className="text-center">alesiaka******@mail.com</h5>
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
      <div className="w-2/5 mt-2">
      <Link to='/profile'>
      <Button name='Verify Account' />
      </Link>
      </div>
      
    <p className="flex"> <button onClick={(e)=>{
      e.preventDefault()
      setMinutes(60)
      setSeconds(0)
    }}>Resend code</button> in <Timer /></p>
    <div className="absolute bottom-8 w-full px-8">
      <Footer/>
    </div>
    </div>
  );
};

export default Verification;

import React,{useEffect} from 'react'

const OtpField = () => {
    useEffect(()=>{
        let otp = document.getElementById('otp');
      for(let pin of otp.children) {
          pin.onkeyup = function() {
              if(pin.nextElementSibling) {
                  pin.nextElementSibling.focus();
              }
          }
      }
      },[])
  return (
    <div id="otp" class="flex justify-around text-center px-2 mt-5">
    <input
      class="m-2  h-10 w-10 text-center form-control rounded border border-1 border-[#dbdde0]"
      type="text"
      id="first"
      maxlength="1"
      required
    />
    <input
      class="m-2  h-10 w-10 text-center form-control rounded border border-1 border-[#dbdde0]"
      type="text"
      id="second"
      required
      maxlength="1"
    />
    <input
      class="m-2  h-10 w-10 text-center form-control rounded border border-1 border-[#dbdde0]"
      type="text"
      required
      id="third"
      maxlength="1"
    />
    <input
      class="m-2  h-10 w-10 text-center form-control rounded border border-1 border-[#dbdde0]"
      type="text"
      required
      id="fourth"
      maxlength="1"
    />
    <input
      class="m-2  h-10 w-10 text-center form-control rounded border border-1 border-[#dbdde0]"
      required
      type="text"
      id="fifth"
      maxlength="1"
    />
    <input
      class="m-2  h-10 w-10 text-center form-control rounded border border-1 border-[#dbdde0]"
      type="text"
      required
      id="sixth"
      maxlength="1"
    />
  </div>
  )
}

export default OtpField
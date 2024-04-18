import React, { useState } from "react";
// import bro from "../../images/bro.png";
// import vector from "../../images/Vector.png";
import cover from "../../images/Cover.png";
function Resetpass() {
  //   const [password, setPassword] = useState("");
  //   const [passwordError, setPasswordError] = useState("");
  //   const handlePasswordChange = (e) => {
  //     const newPassword = e.target.value;
  //     setPassword(newPassword);
  //     if (newPassword.length < 8) {
  //       setPasswordError("Your password is not strong enough.");
  //     } else {
  //       setPasswordError("");
  //     }
  //   };
  return (
    <div className="main flex justify-center items-center h-screen">
      <div className="left w-1/2 bg-[#4BCBEB] h-auto px-[100px] pt-[100px] bg-[  rgba(255, 255, 255, 0.06)]">
        <div className="flex items-center">
          {/* <img src={vector} alt="Logo" className="mr-2" /> */}
          {/* <span>
            <h2 className="text-3xl font-bold text-white">Task Manager List</h2>
          </span> */}
        </div>
        <img src={cover} />
      </div>
      <div className="right w-1/2  h-full pt-[130px]  ">
        <div className="flex flex-col mx-[100px]">
          <h5 className="mb-3 font-bold text-3xl ">Reset Your Password</h5>
          <p className="text-[#64748B] font-[Poppins] ">
            Enter the email address associated with your account and we will
            send you a link to reset your password.
          </p>
          {/* <input
            id="fullName"
            className="text-sm w-4/5 px-4 py-4 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Enter Your Full Name"
            required
          /> */}
          <input
            id="email"
            className="text-sm w-4/5 px-4 py-4 border border-solid border-gray-300 rounded mt-4"
            type="email"
            placeholder="Email"
            required
          />
          {/* <input
            id="password"
            className="text-sm w-4/5 px-4 py-4 border border-solid border-gray-300 rounded my-4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          /> */}
          {/* {passwordError && (
            <div className="text-red-500 text-xs mt-1">{passwordError}</div>
          )} */}
          {/* <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1 mb-5" type="checkbox" required />
              <span>
                By creating an account means you agree to the
                <strong>
                  Terms <br />
                  and Conditions
                </strong>
                and our
                <strong> Privacy Policy</strong>
              </span>
            </label>
          </div> */}
          <div className="text-center md:text-left">
            <button
              className="mt-4 px-4 py-4 w-4/5 bg-[#4BCBEB]   text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Continue
            </button>
            <br></br>
            <a
              className="text-[#4BCBEB] px-28 hover:underline-offset-4 text-center font-bold"
              href="#"
            >
              Back to signIn
            </a>
          </div>
          <div className="mt-8  mx-4  px-9 font-semibold text-sm text-slate-500 text-center md:text-left">
            Already have an account?
            <span>
              <a
                className="text-[#4BCBEB] hover:underline hover:underline-offset-4 font-bold"
                href="#"
              >
                SignUp
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Resetpass;

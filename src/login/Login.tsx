import React from "react";

const Login = () => {
  return (
    <div className="w-screen h-screen bg-burger015  bg-fixed bg-center bg-no-repeat bg-cover opacity-50 flex justify-center p-5 ">
      <div className=" w-fit  p-3 rounded-2xl absolute z-3">
        <h2 className="font-bold text-center text-xl text-zinc-50">
          Create an Account
        </h2>
        <form className=" p-4 flex flex-col items-center mt-20">
          <input
            className="bg-transparent border-4 rounded border-zinc-200  mb-2 placeholder-zinc-200 font-bold p-2  w-80 "
            placeholder="name"
            type="text"
          />
          <input
            className="bg-transparent border-4 rounded border-zinc-200  mb-2 placeholder-zinc-200 font-bold p-2  w-80 "
            placeholder="number"
            type="text"
          />
          <input
            className="bg-transparent border-4 rounded border-zinc-200  mb-2 placeholder-zinc-200 font-bold p-2  w-80 "
            placeholder="password"
            type="text"
          />
          <input
            className="bg-transparent border-4 rounded border-zinc-200  mb-2 placeholder-zinc-200 font-bold p-2  w-80 "
            placeholder="comfirm-password"
            type="text"
          />
          <span className="text-white flex gap-2 ">
            <input type="checkbox" />
            Please check for your{" "}
          </span>
          <button className="bg-orange p-2 mt-5 rounded-3xl text-white font-semibold w-80">
            Register
          </button>
          <span>Already have an account <strong>Sing in</strong></span>
          <button className="bg-blue-800 p-2 mt-5 rounded-3xl text-white font-semibold w-80">
            Create with social media
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

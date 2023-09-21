import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import InputControl from "../components/InputControl";
import { auth } from "../firebase.config";


function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="w-full bg-violet-700 h-screen flex justify-center">
    <div className="w-2/5 max-[780px]:w-5/6  bg-white h-fit shadow-2xl self-center shadow-purple-300 p-8 flex flex-col gap-8 rounded-xl">
        <h1 >Signup</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className="flex flex-col gap-5">
          <b className="font-bold text-sm text-center  text-red-500">{errorMsg}</b>
          <button className="bg-violet-700 rounded-lg font-bold text-white py-3 px-4 cursor-pointer transition hover:bg-violet-500 disabled:bg-gray-400 " onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span >
              <Link className="text-violet-700 font-bold " to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
      </div>
  );
}

export default Signup;
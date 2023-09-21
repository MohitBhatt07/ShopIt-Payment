import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  
} from "firebase/auth";
import { ToastContainer } from "react-toastify";
import InputControl from "../components/InputControl";
import { useDispatch } from "react-redux";
import { addUser} from "../redux/ShopItSlice";
import { Link, useNavigate } from "react-router-dom";
import { googleLogo } from "../assets";

const Login = () => {
 
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleLogin = () => {
    signInWithPopup(
      auth,
      provider.setCustomParameters({ prompt: "select_account" })
    )
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GuestLogin=()=>{
    const user ={uid : "xyz" ,displayName: "Guest" ,email : "guest@gmail.com" ,image : null};
    dispatch(
      addUser({
        id: user.uid,
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      })
    );
    navigate("/");
    
  }

  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        const user = res.user;
        setSubmitButtonDisabled(false);
        dispatch(
          addUser({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })) 
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="w-full bg-violet-700 flex flex-col items-center  gap-10 py-20">
     

      <div className="w-2/5 max-[780px]:w-5/6 h-fit flex flex-col gap-5 bg-white shadow-lg shadow-violet-300 p-5 rounded-lg">
        <h1>Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className="flex flex-col gap-5">
          <b className="font-bold text-red-600 text-sm text-center">{errorMsg}</b>
          <button className="w-full bg-violet-700 rounded-md text-white font-bold px-4 py-3 disabled:bg-gray-400" disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <p className="font-bold tracking-wider">
            New to ShopIt?{" "}
            <span>
              <Link to="/signup" className="text-violet-700">Sign up</Link>
            </span>
          </p>
        </div>
        <b className="text-center text-xl">or</b>
        <div
          onClick={handleLogin}
          className="text-base mx-auto w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center justify-self-center gap-2 hover:border-violet-700 cursor-pointer duration-3000"
        >
          <img className="w-8" src={googleLogo} alt="googleLogo" />
          <span className="text-sm text-gray-900"> Sign in with Google</span>
        </div>
        <button className="bg-green-400 mx-auto px-4 py-2 rounded-lg" onClick={GuestLogin}>Guest Login</button>
      </div>
      <ToastContainer
     position="top-left"
     autoClose={2000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="dark"
   />
    </div>
     
      
     
  );
};

export default Login;

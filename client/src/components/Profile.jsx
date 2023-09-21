import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth ,signOut} from "firebase/auth";
import { removeUser } from "../redux/ShopItSlice";

const Profile = () => {
  const [profileClicked, setProfileClicked] = useState(false);
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.shopit.userInfo);
  const auth = getAuth();
  
  const handleSignOut = () => {
      signOut(auth)
        .then(() => {
          toast.success("Log Out Successfully!");
          dispatch(removeUser());
        })
        .catch((error) => {
          console.log(error);
        });
        navigate('/');
        setProfileClicked(false);
  };

  const DropDown = ()=>(
    <ul className="bg-white  h-32 shadow-2xl shadow-violet-500 animate-dropdown text-violet-700 w-36 right-7 px-4 border transition-transform rounded-b-lg border-purple-800 font-bold absolute top-16">
      <li className='text-2xl cursor-pointer  border-b hover:bg-violet-300 border-violet-600' onClick={handleSignOut}>Signout</li>
      <Link to={'/'} className="text-2xl hover:pointer min-[480px]:hidden"><li className=" border-b border-violet-600 hover:bg-violet-300 w-full">Home</li></Link>
      <Link to='/shop'><li className=" text-2xl border-b  min-[480px]:hidden border-violet-600 hover:bg-violet-300 w-full">Shop</li></Link>
    </ul>
  );

  return (
    <div>
      {
      userDetails ? <button className="w-24 flex justify-center px-4 py-2 gap-3 bg-slate-400 rounded-lg cursor-pointer"
      onClick={() => setProfileClicked((prev) => !prev)}>
      <img
        alt=""
        className="w-5 h-7 rounded-xl"
        src={
          
          userDetails.image ||
          "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1694172642~exp=1694173242~hmac=9968f9442ecad8547bb8dc6807f9fa0b73287fbd9b1c5482396c8b58087681d3"
        }
      ></img>
      <span>{userDetails.name}</span>
      </button>
      
      : 
        <Link className="hover:underline" to="/login">Login</Link>
      
    }
      {profileClicked && (
        <DropDown/>
      )}
    </div>
  );
};

export default Profile;

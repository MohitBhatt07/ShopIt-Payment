import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { resetCart } from "../redux/ShopItSlice";

const Checkoutmodal = (props) => {
  const dispatch = useDispatch();
  const [isBuyPhase ,setIsBuyPhase] =useState(true);

  const buyProducts=()=>{
    setIsBuyPhase(false);
    dispatch(resetCart());
  }

  return (
    <div  className="bg-purple-300 z-20 shadow-2xl shadow-violet-400 p-6 flex flex-col gap-5 w-2/5 rounded-2xl absolute top-28 left-1/3">
      {isBuyPhase ? <>
      <span className="text-2xl text-center">Total = ${props.total}</span>
      <button className="bg-green-400 rounded-lg p-3" onClick={buyProducts}>Buy</button>
      </>
      :
      <span className="text-4xl text-center mb-3 font-bold">Bought</span>  
    }
      
      <button className="bg-red-400 rounded-lg p-3" onClick={props.onClose}>Close</button>
    </div>
  )
}

export default Checkoutmodal
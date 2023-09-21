import React  from "react";

import Modal from "../UI/Modal";

const Checkout = (props) => {
 
  return (
    <Modal onClose= {props.onClose} total={props.total}/>
  );
};

export default Checkout;

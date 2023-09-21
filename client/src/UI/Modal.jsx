import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';
import Checkoutmodal from './Checkoutmodal';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <Checkoutmodal onClose={props.onClose} total={props.total}/>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

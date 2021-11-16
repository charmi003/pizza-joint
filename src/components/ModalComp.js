import React ,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ModalComp({setCallModal}) {
  const [show, setShow] = useState(true);

  const handleClose = () => { setShow(false); setCallModal(false);}
  const handleShow = () => setShow(true);

  return (
    <motion.div
    initial={{y:-1000}}
    animate={{y:0}}
    transition={{type:'spring', stiffness:120}}
    >
      <Modal show={show} onHide={handleClose} size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className='text-center'>Want to make another Pizza?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='mx-auto'>
             <Link to='/' className='text-white no-underline'>Start Again </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </motion.div>
  );
};
   

export default ModalComp

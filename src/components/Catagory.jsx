import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCatagory } from '../services/apiCalling';
import { toast } from 'react-toastify';
import CatagoryList from './CatagoryList';

function Catagory() {
  const [show, setShow] = useState(false);
  const [cat,setCat]=useState("")
  const [resp,setResp]=useState({})

  const handleCatagory=async()=>{
    if(!cat){
      toast.warning("Enter a valid input")
    }
    else{
      const result=await addCatagory({catagory:cat,video:[]})
      if(result.status==201){
        toast.success('Catagory Added!!')
        setCat('')
        handleClose()
        setResp(result)
      }
      else{
toast.error("Adding Failed!")
console.log(result);
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='d-grid btn btn-success' onClick={handleShow}>
Add Catagory
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <FloatingLabel controlId="floatingtitle" label="Add Your Catagory" className="mb-3">
    <Form.Control type="text" onChange={(e)=>{setCat(e.target.value)}} placeholder="Add Your Catagory"/>
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCatagory}>Upload</Button>
        </Modal.Footer>
      </Modal>
   
   <CatagoryList res={resp} />

      </>
  )
}

export default Catagory
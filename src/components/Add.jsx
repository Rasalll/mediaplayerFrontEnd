import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideoapo } from '../services/apiCalling';
import { toast } from 'react-toastify';

function Add({setresult}) {
    const [show, setShow] = useState(false);
    const [video,setVideo]= useState({
      title:"",imageUrl:"",videoUrl:""
    })

    const handleAdd=async()=>{
      console.log(video);
      const {title,imageUrl,videoUrl}=video
      if(!title || !imageUrl || !videoUrl){
        toast.warning('Enter a valid input!!')
      }else{


        const watchUrl=video.videoUrl
        const url=watchUrl.split("v=")[1]
        const emdedUrl=`https://www.youtube.com/embed/${url}?si=ewMRIPBdOo3QKdql`
video.videoUrl=emdedUrl




        const result= await addVideoapo(video)
        if(result.status==201){
          toast.success('Success')
          setVideo({
              title:"",imageUrl:"",videoUrl:""
          })
          handleClose()
          setresult(result)
        }
        else{
          toast.error('Uploadng faild')
          console.log(result)

          

        }
      }
    }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button className='btn' onClick={handleShow}>
    <i class="fa-solid fa-square-plus" style={{color: "#097716"}} ></i>
</button>

<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          
        <div>
          <FloatingLabel controlId="floatingtitle" label="Video Title" className="mb-3">
    <Form.Control type="text" onChange={(e)=>{setVideo({...video,title:e.target.value})}} placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingimg" label="Video Thumbnail URL" className='mb-3'>
        <Form.Control type="text" onChange={(e)=>{setVideo({...video,imageUrl:e.target.value})}} placeholder="Password" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingvideo" label="Youtube Video URL">
        <Form.Control type="text" onChange={(e)=>{setVideo({...video,videoUrl:e.target.value})}} placeholder="Password" />
      </FloatingLabel>
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default Add
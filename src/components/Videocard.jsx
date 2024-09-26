import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { deleteVideosapi ,addHistoy } from '../services/apiCalling';
import { toast } from 'react-toastify';


function Videocard({video,res,cond}) {
    const [show, setShow] = useState(false);

    const handleDelete=async()=>{
      const result=await deleteVideosapi(video.id)
      if(result.status==200){
        toast.success('Videos Deleted Successfully!!')
        res(result)
      }
    }

const handleDrag=(e)=>{
  console.log('Its Dreagging brooo!!')
  console.log(video)
  e.dataTransfer.setData('video',JSON.stringify(video))

}

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)
    const data={
      vid:video.id,title:video.title,url:video.videoUrl,data: new Date()
    }

    const reslut=await addHistoy(data)
    console.log(reslut)
  }

  return (
    <>
    <Card style={cond?{width:'100%'}:{width:'17rem'}} draggable onDragStart={(e)=>{handleDrag(e)}}>
      <Card.Img onClick={handleShow}  variant="top" height={'200px'} src={video?.imageUrl} />
      <Card.Body>
        <Card.Title>{video?.title}</Card.Title>
        {
!cond&&
          <Button onClick={handleDelete}><i class="fa-solid fa-trash" style={{color: "#ff0000;"}}/></Button>

        }
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <iframe width="100%" height="315" src={video?.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      </>

  )
}

export default Videocard
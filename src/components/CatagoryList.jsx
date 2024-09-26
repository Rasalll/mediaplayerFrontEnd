import React,{useEffect,useState} from 'react'
import { getCatagory } from '../services/apiCalling'
import { deleteCatagory ,addvideoToCategory } from '../services/apiCalling'
import { toast } from 'react-toastify'
import Videocard from './Videocard'

function CatagoryList({res}) {

    const [clist,setClist]=useState([])
    const [resp,setResp]=useState({})


    const handleDragOver=(e)=>{
        e.preventDefault()
        console.log('Draging Over!!')
    }
    const handleDrop=async(e,cat)=>{
        console.log('Dropped!!')
        const video=JSON.parse(e.dataTransfer.getData('video'))
        console.log(video);
        cat.video.push(video)
        console.log(cat)
        const result=await addvideoToCategory(cat.id,cat)
        if(result.status==200){
            toast.success('Video Added To Category')
        }
        else{
            toast.error('Faild')
        }
    }

    useEffect(()=>{
        getData()

    },[res,resp])


const handleRemover=async(id)=>{
    const result=await deleteCatagory(id)
    if(result.status==200){
     setResp(result)
    }
  }



    const getData=async()=>{
        const result=await getCatagory()
        if(result.status==200){
            setClist(result.data)
            console.log(result.data)
        }
    }

    

  return (
    <>
    <div className='border p-1 border-2 border-dark mt-3  shadow '>
        {
            clist?.length>0?
            <div>
                {clist?.map(item=>(
                    <div className='border w-100 border-2 p-2 shadow mb-3' onDragOver={(e)=>handleDragOver(e)} onDrop={(e)=>handleDrop(e,item)}>
                        <div className='d-flex justify-content-between'>
                            <h3>{item.catagory}</h3>
                            <button className='btn' onClick={()=>{handleRemover(item.id)}}>
                            <i className="fa-solid fa-trash" style={{color: "#f10404",}} />
                            </button>
                        </div>
                        <div className='p-1 border'>
                            {
                                item.video.length>0 &&
                                item.video.map(item=>(
                                    <Videocard video={item} cond={true}/>
                                ))
                            }

                        </div>
                    </div>
                ))}
            </div>
            :
            <h5 className='text-danger text-center'>No catagories</h5>
        }

    </div>
    </>

  )
}

export default CatagoryList
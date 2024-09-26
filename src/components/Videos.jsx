import React, {useEffect, useState} from 'react'
import Videocard from './Videocard'
import { getVideosapi } from '../services/apiCalling'


function Videos({result}) {

  const [data,setData]=useState([])
  const [resp,setResp]=useState({})


  useEffect(()=>{
    getData()

  },[result,resp])
  
  const getData=async()=>{
    const result= await getVideosapi()
    console.log(result)
    if(result.status==200){
      setData(result.data)
    }
  }

  return (
   
   <div className='container-fluid border border-3 border-dark shadow p-5'>
    {
      data.length>0?
      <div className='row p-2'>
        {data.map(item=>(
                <Videocard video={item} res={setResp}/>


        ))}
      </div>

      :
      <h4 className='text-center text-dark'>No Videos </h4>

    }
   </div>
  )
}

export default Videos
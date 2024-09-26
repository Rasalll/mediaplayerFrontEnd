import React,{ useEffect, useState } from "react"
import { historyShowapi } from "../services/apiCalling"
import { historyDelete } from "../services/apiCalling"

function History() {

  const [historylist,setHistoryList]=useState([])
  const [deletehis,setDeleteHis]=useState({})

  useEffect(()=>{
    getData()
  },[deletehis])

  const deleteHis=async(id)=>{
    const result=await historyDelete(id)
    if(result.status==200){
     setDeleteHis(result)
    }
  }


  const getData=async()=>{
    const result=await historyShowapi()
    if(result.status==200){
      setHistoryList(result.data)
    }
  }
  return (
    <>
    <h2>Watch History</h2>
    <table className='table table-dark table-striped table-bordered'>
      
<thead>
  <tr>
    <td>ID</td>
    <td>Title</td>
    <td>Video URL</td>
    <td>Date and Time</td>
</tr>
</thead>

<tbody>
  {
    historylist.map(item=>(
      <tr>
    <td>{item.vid}</td>
    <td>{item.title}</td>
    <td>{item.url}</td>
    <td>{item.data}</td>
  <td>
  <button className="btn" onClick={()=>{deleteHis(item.id)}}>
    <i className="fa-solid fa-trash" style={{color: "#bc1a1a",}} />

  </button>
  </td>
  </tr>

    ))
  }

</tbody>
</table>
:
<h3>No History</h3>
</>
  )
}



export default History
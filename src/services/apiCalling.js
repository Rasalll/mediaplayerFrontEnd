import axios from "axios" 
import Catagory from "../components/Catagory"
const base_url='https://player-server-lida.onrender.com'


export const addVideoapo=async(data)=>{
return await axios.post(`${base_url}/videos`,data)
}
 
export const getVideosapi=async()=>{
    return await axios.get(`${base_url}/videos`)
}

export const deleteVideosapi=async(id)=>{
    return await axios.delete(`${base_url}/videos/${id}`)
}

export const addCatagory=async(data)=>{
    return await axios.post(`${base_url}/categories`,data)
}

export const getCatagory=async()=>{
    return await axios.get(`${base_url}/categories`)
}

export const deleteCatagory=async(id)=>{
    return await axios.delete(`${base_url}/categories/${id}`)
}
export const addHistoy=async(data)=>{
    return await axios.post(`${base_url}/history`,data)
}
export const historyShowapi=async()=>{
    return await axios.get(`${base_url}/history`)
}

export const historyDelete=async(id)=>{
    return await axios.delete(`${base_url}/history/${id}`)
}
export const addvideoToCategory=async(id,data)=>{
    return await axios.put(`${base_url}/categories/${id}`,data)
}


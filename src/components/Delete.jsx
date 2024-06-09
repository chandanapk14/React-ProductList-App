import React, { useState } from 'react'
import Navbar from './Navbar'

const Delete = () => {
    const [pro, changePro] = useState(
        {
            "delete": ""
        })
    const inputHandler = (event) => {
        changePro({ ...pro, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(pro)
    }
  return (
    <div>
        <Navbar/>
        <h3 align="center"><u>Delete Product</u></h3><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center><label htmlFor="" className="form-label" >Product Name</label><br></br>
                            <input type="text" className="form-control" name="delete" value={pro.delete} onChange={inputHandler} /></center>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                        <center><button className="btn btn-danger" onClick={readValue}>Delete</button></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete
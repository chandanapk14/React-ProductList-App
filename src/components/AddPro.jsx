import React, { useState } from 'react'
import Navbar from './Navbar'

const AddPro = () => {
    const [pro, changePro] = useState(
        {
            "proid": "",
            "protitle": "",
            "category": "",
            "price": ""
        })
    const inputHandler = (event) => {
        changePro({ ...pro, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(pro)
    }
    return (
        <div>
            <Navbar /><br></br>
            <h3 align="center"><u>Add Product</u></h3><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Product ID</label>
                                <input type="text" className="form-control" name="proid" value={pro.proid} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Product Title</label>
                                <input type="text" className="form-control" name="protitle" value={pro.title} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Category</label>
                                <select name="category" id="" className="form-control" value={pro.category} onChange={inputHandler}>
                                    <option name="beauty">beauty</option>
                                    <option name="fragrances">fragrances</option>
                                    <option name="furniture">furniture</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Price</label>
                                <input type="text" className="form-control" name="price" value={pro.price} onChange={inputHandler} />
                            </div>
                            <center><div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPro
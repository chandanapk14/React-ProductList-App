import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
    const [pro, changePro] = useState(
        {
            "search": ""
        })
    const inputHandler = (event) => {
        changePro({ ...pro, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(pro)
    }
  return (
    <div>
        <Navbar/><br></br>
        <h3 align="center"><u>Search for Product</u></h3><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center><label htmlFor="" className="form-label">Product Name</label><br></br>
                            <input type="text" className="form-control" name="search" value={pro.search} onChange={inputHandler}/></center>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                        <center><button className="btn btn-primary" onClick={readValue}>Search</button></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [pro,changePro]=useState({"products":[]})
    const fetchData=()=>{
        axios.get("https://dummyjson.com/products").then(
            (response)=>{
                changePro(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar /><br></br>
            <h3 align="center"><u>Product List</u></h3><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                           {pro.products.map(
                            (value,index)=>{
                                return <div className="col col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src={value.images} class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">category:{value.category}</h5>
                                        <p class="card-text">title:{value.title}</p>
                                        <a href="#" class="btn btn-primary">Click</a>
                                    </div>
                                </div>
                            </div>
                            }
                           )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall
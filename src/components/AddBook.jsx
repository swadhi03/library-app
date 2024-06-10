import React, { useState } from 'react'
import Navbar from './Navbar'

const AddBook = () => {
    const [data,changeData] = useState([
        {
            "name" :"",
            "category" :"",
            "publishyear" :"",
            "author" :"",
            "description" :"",
            "publishername" :"",
            "price" :""
        }
    ])
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <div className="container">
        <Navbar/>
            <row className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="control-label">Book Name</label>
                        <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Category</label>
                        <select name="category" id="" className="form-control" value={data.category} onChange={inputHandler}>
                            <option value="Novel">Novel</option>
                            <option value="Poetry">Poetry</option>
                            <option value="Short Story">Short Strory</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Publishing  Year</label>
                        <input type="text" className="form-control" name='publishyear' value={data.publishyear} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Author</label>
                        <input type="text" className="form-control" name='author' value={data.author} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Description</label>
                        <textarea name="description" id="" className="form-control" value={data.description} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Publisher Name</label>
                        <input type="text" className="form-control" name='publisheryear' value={data.publishername} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Price</label>
                        <input type="text" className="form-control" name='price' value={data.price} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success" onClick={readValue}>Submit</button>
                    </div>
                </div>
            </row>
        </div>
    </div>
  )
}

export default AddBook
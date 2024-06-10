import React from 'react'
import Navbar from './Navbar'

const DeleteBook = () => {
  return (
    <div>
        <div className="container">
        <Navbar/>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col 12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Book Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col 12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteBook
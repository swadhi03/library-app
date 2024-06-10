import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
  const [data,changeData] = useState([
    {
      "name" :"Pride and Prejudice",
      "category" :"Novel",
      "publishyear" :"1990",
      "author" :"Jane Austen",
      "description" :"A classic of english literature",
      "publishername" :"Jane",
      "price" :"800"
    }
  ])
  return (
    <div>

      <div className="container">
        <Navbar />
        <row className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Index</th>
                    <th scope="col">Book Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Publishing Year</th>
                    <th scope="col">Author</th>
                    <th scope="col">Description</th>
                    <th scope="col">Publisher Name</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(
                    (value,index)=>{
                      return <tr>
                      <th scope="row">{index+1}</th>
                      <td>{value.name}</td>
                      <td>{value.category}</td>
                      <td>{value.publishyear}</td>
                      <td>{value.author}</td>
                      <td>{value.description}</td>
                      <td>{value.publishername}</td>
                      <td>{value.price}</td>
                    </tr>
                    }
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </row>
      </div>
    </div>
  )
}

export default ViewAll
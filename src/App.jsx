import { useState } from 'react'
import './App.css'

function VisualAreas(){
  return (
    <div>

      <h1>Internship Application Tracker</h1>

      <h2>Statistics</h2>

      <p>Total Applications: 3</p>
      <p>Interviews: 1</p>
      <p>Offers: 0</p>

      <h2>Form</h2>

      <div>
        <label>Company</label>
        <input
          type="text"
          placeholder="Enter something"
        />
      </div>

      <div>
        <label>Position</label>
        <input
          type="text"
          placeholder="Enter something"
        />
      </div>

      <div>
        <label>Status</label>
        <select>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>

      <div>
        <lable>Date</lable>
        <input type="date" />
      </div>

      <div>
        <button>Add Application</button>
      </div>

      <h2>Search/Filters</h2>

      <div>
        <label>Search</label>
        <input type="text" />
      </div>

      <div>
        <label>Filter</label>
        <select>
          <option>All</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>

      <h2>ApplicationsList</h2>

    </div>
    
  )
}

export default VisualAreas

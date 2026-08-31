import './App.css'

function Statistics(){
  return (
    <div>
       <h2>Statistics</h2>

      <p>Total Applications: 3</p>
      <p>Interviews: 1</p>
      <p>Offers: 0</p>
    </div>
  )
}

function ApplicationForm(){
  return(
    <div>
      <h2>Form</h2>

      <div>
        <label htmlFor= "company">Company</label>
        <input id ="company"
          type="text"
          placeholder="Enter something"
        />
      </div>

      <div>
        <label htmlFor= "position">Position</label>
        <input id="position"
          type="text"
          placeholder="Enter something"
        />
      </div>

      <div>
        <label htmlFor= "status">Status</label>
        <select id="status">
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>

      <div>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" />
      </div>

      <div>
        <button>Add Application</button>
      </div>
    </div>
  )
}

function App(){
  return (
    <div>

      <h1>Internship Application Tracker</h1>

      <Statistics />

      <ApplicationForm />

      <h2>Search/Filters</h2>

      <div>
        <label htmlFor="search">Search</label>
        <input id="search" type="text" />
      </div>

      <div>
        <label htmlFor="filter">Filter</label>
        <select id="filter">
          <option>All</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>

      <h2>ApplicationsList</h2>

      <div>
        <h3>Shopify</h3>
        <p>Software Developer Intern</p>
        <p>Applied</p>
        <p>August 30</p>
      </div>

    </div>
    
  )
}

export default App

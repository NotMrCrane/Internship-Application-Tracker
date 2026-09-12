import './App.css'
import {useState} from "react"

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

function ApplicationForm({ addApplication }) {
  const [company,setCompany] = useState("")
  const [position, setPosition] = useState("")
  const [status, setStatus] = useState("Applied")
  const [date, setDate] = useState("")  

  function handleSubmit(event) {
  event.preventDefault()

  const newApplication = {
    id: Date.now(),
    company: company,
    position: position,
    status: status,
    date: date
  }

  addApplication(newApplication)

  setCompany("")
  setPosition("")
  setStatus("Applied")
  setDate("")

}

  return(
    <form onSubmit={handleSubmit}>
      <h2>Form</h2>

      <div>
        <label htmlFor= "company">Company</label>
        <input id ="company"
          type="text"
          placeholder="Enter something"
          value = {company}
          onChange={(event) => setCompany(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor= "position">Position</label>
        <input id="position"
          type="text"
          placeholder="Enter something"
          value = {position}
          onChange={(event) => setPosition(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor= "status">Status</label>
        <select id="status"
          value = {status}
          onChange={(event) => setStatus(event.target.value)}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
          
        </select>
      </div>

      <div>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" 
        value = {date}
        onChange={(event) => setDate(event.target.value)}/>
        
      </div>

      <div>
        <button type="submit">Add Application</button>
      </div>
    </form>
  )
}

function Application({ application }) {
  return (
    <div>
      <h3>{application.company}</h3>
      <p>{application.position}</p>
      <p>{application.status}</p>
      <p>{application.date}</p>

      <button>Delete</button>
    </div>
  )
}

function App(){
  const [applications, setApplications] = useState([
  {
    id: 1,
    company: "Shopify",
    position: "Software Developer Intern",
    status: "Applied",
    date: "2026-08-30"
  }
])

function addApplication(newApplication) {
    setApplications((previousApplications) => [
      ...previousApplications,
      newApplication
    ])
  }

  return (
    <div>

      <h1>Internship Application Tracker</h1>

      <Statistics />

      <ApplicationForm addApplication={addApplication} />

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

      {applications.map((application) => (
  <Application
    key={application.id}
    application={application}
  />
))}

    </div>
    
  )
}

export default App

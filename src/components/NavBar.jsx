import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <nav>
   <h1>QA Hive</h1>
   <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/create">Create Bug Form</Link>
    </li>
   </ul>
    </nav>
  )
}



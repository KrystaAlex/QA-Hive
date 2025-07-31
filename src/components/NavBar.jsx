import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  //handle logout
  const handleLogout = async (e) => {
console.log('logout')
  };

  return (
    <nav>
      <h1>QA Hive</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create Post</Link>
        </li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

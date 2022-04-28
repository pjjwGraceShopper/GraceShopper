import react, { useEffect, useState } from "react";
import { getUsers } from "../../axios-services/users_ajax";

const Admin = () => {
  const [users, setUsers] = useState([]);
  let admin = false
  if(localStorage.getItem("isAdmin")){
      admin = true
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, [setUsers]);
  return (
    <div>
      {admin === true ? (
        <>
          <h1>Admin Page</h1>
          <h2>All Users Info</h2>
          <h4>______________________________</h4>
          {users.map((user) => (
            <div key={user.id}>
              <ul>
                <li>
                  <h5>ID Number: {user.id}</h5>
                </li>
                <li>
                  <h6>Username: {user.username}</h6>
                </li>
                <li>
                  <h6>Email: {user.email}</h6>
                </li>
                <li>
                  <h6>First name: {user.firstname}</h6>
                </li>
                <li>
                  <h6>Last name: {user.lastname}</h6>
                </li>
              </ul>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default Admin;

import react, { useEffect, useState } from "react";
import { getUsers } from "../../axios-services/users_ajax";

const Admin = () => {
  const [users, setUsers] = useState([]);
  let admin = false;
  if (localStorage.getItem("isAdmin")) {
    admin = true;
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
              <table table dark striped hover>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
          {users.map((user) => (
            <div key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                  </div>
                  ))}
                  </tr>
                </tbody>
              </table>
        </>
      ) : null}
    </div>
  );
};

export default Admin;

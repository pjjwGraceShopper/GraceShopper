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
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Username</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <>
                    <th scope="row">{user.id}</th>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                  </>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
    </div>
  );
};

export default Admin;

import react, { useEffect, useState } from "react";
import { getUsers } from "../../axios-services/users_ajax";
import AddMovie from "./AddMovie";
//----------------------------------------------------------------
const Admin = ({me, movies, setMovies }) => {
  const [users, setUsers] = useState([]);
  let admin = false;
  if (me.admin || localStorage.getItem("admin") ) {
    admin = true;
  }
//----------------------------------------------------------------
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, [setUsers]);
//----------------------------------------------------------------
  return (
    <div className="admin-container">
      {admin === true ? (
        <>
          <div className="admin-header">
            <h1>Admin Page</h1>
            <h2>All Users Info</h2>
          </div>
          <table className="table table-dark table-striped admin-table">
            <thead className="admin-table-header">
              <tr className="admin-table-row">
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Username</th>
              </tr>
            </thead>
            <tbody className="admin-table-body">
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
      <AddMovie movies={movies} setMovies={setMovies} me={me} />
    </div>
  );
};

export default Admin;

import react, { useEffect, useState } from "react";
import { myData } from "../../axios-services/users_ajax";

const Profile = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      let token = localStorage.getItem("token");
      const data = await myData(token);
      setUser(data);
    };
    fetchUser();
  }, [setUser]);
  return (
    <div>
      <h1>{user.username}'s Profile</h1>
      <h2 className="header header-textAlign">Account Information</h2>
      <table className="table table-dark">
        <tbody>
          <tr>
            <th>First Name</th>
            <td>{user.firstname}</td>
            <td>
              <button className="btn btn-primary" type="submit">
                Edit
              </button>
            </td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{user.lastname}</td>
            <td>
              <button className="btn btn-primary" type="submit">
                Edit
              </button>
            </td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{user.email}</td>
            <td>
              <button className="btn btn-primary" type="submit">
                Edit
              </button>
            </td>
          </tr>
          <tr>
            <th>Username</th>
            <td>{user.username}</td>
            <td>
              <button className="btn btn-primary" type="submit">
                Edit
              </button>
            </td>
          </tr>
          <tr>
            <th>Password</th>
            <td>*********</td>
            <td>
              <button className="btn btn-primary" type="submit">
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Profile;

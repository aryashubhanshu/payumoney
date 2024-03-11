import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Users() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);

  return (
    <>
      <h1 className="font-bold text-xl">Users</h1>

      <input
        type="text"
        placeholder="Search users..."
        onChange={(e) => setFilter(e.target.value)}
        className="px-4 border border-zinc-200 p-2 w-full my-3 rounded-md outline-none"
      />
      <div className="w-full h-[60vh] overflow-y-auto">
        {users.map((user, ind) => {
          return (
            <div
              className="flex items-center justify-between p-2 h-[60px]"
              key={ind}
            >
              <h1 className="text-xl font-bold">{user.firstName}</h1>
              <button
                onClick={() => {
                  navigate(`/send?id=${user._id}&name=${user.firstName}`);
                }}
                className="rounded-md bg-zinc-900 text-white py-2 px-4"
              >
                Send Money
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Users;

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../redux/user/userSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul style={{ listStyle: 'none' }}>
        {users.map((user) => (
          <li key={user.id.value}>
            {user.name.first} {user.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

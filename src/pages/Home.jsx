import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UserCard from "../components/UserCard";
import useFavoriteStore from "../store/favoriteStore";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  const {
    favorites,
    addFavorite,
    removeFavorite,
  } = useFavoriteStore();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleFavorite = (user) => {
    const exists = favorites.some(
      (fav) => fav.id === user.id
    );

    if (exists) {
      removeFavorite(user.id);
    } else {
      addFavorite(user);
    }
  };

  return (
    <>
      <Navbar
        totalUsers={users.length}
        favoriteCount={favorites.length}
      />

      <div className="container">
        <h2>All Users</h2>

        {loading ? (
          <p>Loading users...</p>
        ) : (
          <div className="user-grid">
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onDetails={setSelectedUser}
                isFavorite={favorites.some(
                  (fav) => fav.id === user.id
                )}
                onFavorite={handleFavorite}
              />
            ))}
          </div>
        )}

        {selectedUser && (
          <div className="details">
            <h2>User Details</h2>

            <p>Name: {selectedUser.name}</p>
            <p>Email: {selectedUser.email}</p>
            <p>Phone: {selectedUser.phone}</p>
            <p>Website: {selectedUser.website}</p>

            <button onClick={() => setSelectedUser(null)}>
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
function UserCard({
  user,
  onDetails,
  isFavorite,
  onFavorite,
}) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>

      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>

      <button onClick={() => onDetails(user)}>
        Details
      </button>

      <button onClick={() => onFavorite(user)}>
        {isFavorite ? "Remove Favorite" : "Favorite"}
      </button>
    </div>
  );
}

export default UserCard;
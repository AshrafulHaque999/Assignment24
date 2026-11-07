function Navbar({ totalUsers, favoriteCount }) {
  return (
    <nav className="navbar">
      <h2>User Management</h2>

      <div>
        <span>Total Users: {totalUsers}</span>
        <span>Favorites: {favoriteCount}</span>
      </div>
    </nav>
  );
}

export default Navbar;
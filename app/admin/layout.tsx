export default function AdminLayout({ children }) {
  return (
    <div>
      {/* Header component */}
      <header>
        <h1>Admin Dashboard</h1>
      </header>
      {/* Main content area */}
      <main>{children}</main>
      {/* Footer component */}
      <footer>
        <p>&copy; 2023 Admin Panel</p>
      </footer>
    </div>
  )
}

// ... rest of code here ...

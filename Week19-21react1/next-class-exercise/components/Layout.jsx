function Layout({ children }) {
  return (
    <div>
      <header className="text-4xl">HEADER</header>
      <main>{children}</main>
      <footer className="text-4xl">FOOTER</footer>
    </div>
  );
}

export default Layout;

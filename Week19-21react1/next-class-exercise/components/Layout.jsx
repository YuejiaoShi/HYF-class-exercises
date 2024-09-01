function Layout({ children }) {
  return (
    <div className="m-3 flex flex-col items-center">
      <header className="text-4xl">HEADER</header>
      <main>{children}</main>
      <footer className="text-4xl">FOOTER</footer>
    </div>
  );
}

export default Layout;

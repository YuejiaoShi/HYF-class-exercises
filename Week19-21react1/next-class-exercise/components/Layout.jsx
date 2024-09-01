function Layout({ children }) {
  return (
    <section className="m-3 flex flex-col items-center">
      <header className="text-4xl">HEADER</header>
      <main>{children}</main>
      <footer className="text-4xl">FOOTER</footer>
    </section>
  );
}

export default Layout;

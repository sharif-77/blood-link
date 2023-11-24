const Footer = () => {
  return (
    <footer className="  p-10 bg-base-200 text-base-content mt-20">
      <main className="w-4/5 mx-auto flex flex-col gap-10 md:flex-row  items-center justify-between">
      <div className="flex flex-col items-center justify-center gap-1">
        <img
          className="w-16 rounded-full"
          src="https://i.ibb.co/2NZJyW9/3d7581-6a6d532daaa743f08b822f674fd45f29-mv2-1.png"
          alt=""
        />
        <span className="text-xl font-bold uppercase ">WanderInn</span>
      </div>
      <nav className="flex flex-col">
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </nav>
      <nav className="flex flex-col">
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      </main>
    </footer>
  );
};

export default Footer;

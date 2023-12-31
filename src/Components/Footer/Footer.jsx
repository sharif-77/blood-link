import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="  p-10 bg-base-200 text-base-content mt-20 ">
      <main className="w-4/5 mx-auto flex flex-col gap-10 md:flex-row  items-center justify-between">
      <div className="flex flex-col items-center justify-center gap-1">
        <img
          className="w-16 rounded-full"
          src="https://i.ibb.co/fntVn8W/download-2.png"
          alt=""
        />
        <span className="text-xl font-bold uppercase ">BloodLink</span>
      </div>
      <nav className="flex flex-col">
        <header className="footer-title">Agency</header>
       <Link to={`/blog`}>Blog</Link>
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

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className=" relative">
      <div className="footerTop w-full h-[120vh] bg-[#00159E] text-white flex flex-col gap-6 justify-center items-center">
        <h1 className=" text-3xl font-semibold">Stay Informed</h1>
        <h5 className=" w-1/4 max-md:w-3/4 text-center text-xl">
          Sign up for periodic news updates, announcements, newsletters,
          updates, and event invitations.
        </h5>
        <form className="flex flex-col gap-5 border-none">
          <div className=" flex max-md:flex-col justify-between gap-5">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name*"
              className=" px-8 py-3 rounded-full bg-slate-100 text-slate-500 text-xl focus:outline-none"
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name*"
              className=" px-8 py-3 rounded-full bg-slate-100 text-slate-500 text-xl focus:outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email*"
              className=" w-full px-10 py-3 rounded-full bg-slate-100 text-slate-500 text-xl focus:outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              id="affilation"
              name="affilation"
              placeholder="Affilation"
              className=" w-full px-10 py-3 rounded-full bg-slate-100 text-slate-500 text-xl focus:outline-none"
            />
          </div>
        </form>
        <button className=" w-1/4 max-md:w-1/2 px-10 py-4 text-lg font-semibold rounded-full bg-[#1F98B5]">
          Submit
        </button>
      </div>
      <div className="footerBottom w-full h-[70vh] -mt-20 rounded-tr-[15%] bg-white flex flex-col">
        <div className="TopFooter p-16">
          <div className=" grid justify-between grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-1">
            <div className="logo w-[15vw]">
              <img src={logo} alt="logo" />
            </div>
            <div>
              <h1 className=" text-xl font-semibold uppercase text-[#1f98b5]">
                About Us
              </h1>
              <ul className=" text-lg flex flex-col gap-2 mt-5">
                <li>Our Mission</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>News</li>
                <li>Events</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h1 className=" text-xl font-semibold uppercase text-[#1f98b5]">
                Grand Portfolio
              </h1>
              <ul className=" text-lg flex flex-col gap-2 mt-5">
                <li>Careers</li>
                <li>News</li>
                <li>Events</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h1 className=" text-xl font-semibold uppercase text-[#1f98b5]">
                Award Programs
              </h1>
              <ul className=" text-lg flex flex-col gap-2 mt-5">
                <li>Our Mission</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>News</li>
                <li>Events</li>
              </ul>
            </div>
            <div>
              <h1 className=" text-xl font-semibold uppercase text-[#1f98b5]">
                Contact Us
              </h1>
              <p>555-5555-5555555555555555</p>
            </div>
          </div>
        </div>
        <div className=" border-t  w-full flex justify-between items-center max-sm:flex-col text-sm p-5">
          <p>The Mark Foundation for Cancer Research US Ltd</p>
          <p>
            Made with by{" "}
            <a href="#" className=" underline">
              NextZenSoft
            </a>
          </p>
          <p className=" underline">
            <a href="#">Privacy Policy and Terms of Use</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

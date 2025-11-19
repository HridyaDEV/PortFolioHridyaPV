function NavBar() {
  return (
    <div className="fixed top-10 left-0 w-full z-50">

      <div className="bg-slate-200 rounded-2xl shadow-md mx-4 md:mx-8 lg:mx-16 px-3">

        <div className="max-w-[1200px] mx-auto flex justify-between items-center py-1">
         
          <img 
            src="LogoWeb.png" 
            alt="logo" 
            className="h-6 md:h-12 lg:h-10 w-auto object-contain" 
          />

          <ul className="flex gap-4 md:gap-6 text-sky-400 text-sm font-crimson font-semibold">
            <li>Home</li>
            <li>About</li>
            <li>Journey</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>

        </div>
      </div>

    </div>
  );
}

export default NavBar;

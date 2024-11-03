//import icon from '/Users/Asus/OneDrive/Desktop/Harsh-portfolio/client/src/icon.jpg';
import icon from '../assets/icone.jpg';


function Header() {
  return (
    <div className="p-5 bg-primary flex justify-between items-center">
      <div className="flex items-center space-x-10">
      {/* User Icon */}
      <img
        src={icon} 
        alt="User Icon"
        className="h-20 w-20 rounded-full"
      />

  {/* Navigation Links */}
  <div className="flex space-x-10 sm:space-x-4 text-white text-lg font-medium">
        <a href="#about" className="hover:text-tertiary">About</a>
        <a href="#experience" className="hover:text-tertiary">Experience</a>
        <a href="#projects" className="hover:text-tertiary">Projects</a>
        <a href="#contact" className="hover:text-tertiary">Contact</a>
      </div>
      </div>

      {/* Name */}
      <div className="flex space-x-2 sm:hidden">
        <h1 className="text-white text-4xl font-semibold">Harsh</h1>
        <h1 className="text-tertiary text-4xl font-semibold">Choudhary</h1>
      </div>

      
    </div>
  );
}

export default Header;


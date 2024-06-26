import { Link } from "react-router-dom";

const links = [
  {
    to: "/",
    label: "Learn",
  },
  {
    to: "/courses",
    label: "Courses",
  },
  {
    to: "/fees",
    label: "Fees",
  }
  
];

export default function Navbar() {
  return (
    <div className="navbar">
      {links?.map((link) => (
        <Link to={link.to} key={link.to}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}

import { useNavigate, Link } from "react-router-dom";
import styles from "./Topbar.module.scss";
import Logo from "../assets/logo.svg";
import { useContext } from "react";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import { ROUTES } from "@/router/consts";
import { UserContext } from "@/context/UserContext";

const Topbar = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const links = [
    {
      href: ROUTES.HOME,
      label: "Home",
    },
    {
      href: ROUTES.SERVICES,
      label: "Services",
    },
    {
      href: ROUTES.ABOUT_US,
      label: "About Us",
    },
  ];

  return (
    <header className={styles.topbar}>
      <div className={styles.leftSide}>
        <Link to={ROUTES.HOME}>
          <img src={Logo} alt="logo" />
        </Link>
        <nav className={styles.navigation}>
          {links.map((link) => (
            <Link key={link.label} to={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className={styles.rightSide}>
        {user ? (
          <Avatar>{user.name[0]}</Avatar>
        ) : (
          <Button onClick={() => navigate(ROUTES.LOGIN)} large>
            Login / Sign Up
          </Button>
        )}
      </div>
    </header>
  );
};

export default Topbar;

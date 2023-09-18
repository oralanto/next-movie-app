import Link from "next/link";
import { Context } from "../lib/Context";
import { useContext } from "react";

const Header = () => {
  const {
    setActive,
    state: { links, active, query },
  } = useContext(Context);

  const Links = ({ children, query, name }) => {
    return query !== "" ? (
      <Link href={{ pathname: `/${name}`, query: { query: query } }}>
        {children}
      </Link>
    ) : (
      <Link href={{ pathname: `/${name}` }}>{children}</Link>
    );
  };

  return (
    <ul className="nav nav-pills nav-fill" style={{ marginBottom: "20px" }}>
      {links.map((link) => {
        return (
          <li
            key={link.name}
            className="nav-item"
            onClick={() => setActive(link)}
          >
            <Links query={query} {...link}>
              <span
                className={`nav-link ${
                  link.name === active.name && "isActive"
                }`}
              >
                <i className={`fas fa-${link.icon}`}></i> &nbsp; {link.name}{" "}
              </span>
            </Links>
          </li>
        );
      })}
    </ul>
  );
};

export default Header;

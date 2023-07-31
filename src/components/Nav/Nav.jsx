import style from "./nav.module.scss";

const navCollection = [
  {
    name: "Demons",
    subMenu: [
      { name: "SubMenu", link: "#0" },
      { name: "SubMenu", link: "#0" },
      { name: "SubMenu", link: "#0" },
      { name: "SubMenu", link: "#0" },
    ],
  },
  {
    name: "Post",
    subMenu: [
      { name: "SubMenu", link: "#0" },
      { name: "SubMenu", link: "#0" },
      { name: "SubMenu", link: "#0" },
      { name: "SubMenu", link: "#0" },
    ],
  },
  {
    name: "Features",
    subMenu: [
      { name: "SubMenu", link: "#0" },
      { name: "SubMenu", link: "#0" },
      { name: "SubMenu", link: "#0" },
      { name: "SubMenu", link: "#0" },
    ],
  },
  {
    name: "Categories",
    subMenu: [
      { name: "SubMenu", link: "#0" },
      { name: "SubMenu", link: "#0" },
      { name: "SubMenu", link: "#0" },
      { name: "SubMenu", link: "#0" },
    ],
  },
  {
    name: "Shop",
    subMenu: [
      { name: "SubMenu", link: "#0" },
      { name: "SubMenu", link: "#0" },
      { name: "SubMenu", link: "#0" },
      { name: "SubMenu", link: "#0" },
    ],
  },
  {
    name: "Buy Now",
    link: "#0",
  },
];

const Nav = () => {
  return (
    <>
      <div className={style.box}>
        <nav className={style.nav}>
          {navCollection.map((menu, i) => {
            if (!menu.link) {
              return (
                <li className={style.menu} key={i}>
                  <span>{menu.name}</span>
                  <svg
                    className={style.arrow}
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="black"
                      strokeLinecap="square"
                    />
                  </svg>
                  <ul className={style.subMenu}>
                    <div className={style.subMenuBox}>
                      {menu.subMenu.map((subMenu, i) => {
                        return (
                          <li className={style.subMenuItem} key={i}>
                            <a
                              href={subMenu.link}
                              className={style.subMenuLink}
                            >
                              <span>{subMenu.name}</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="9"
                                viewBox="0 0 6 9"
                                fill="none"
                              >
                                <path
                                  d="M1.33334 7.7L4.66668 4.5L1.33334 1.3"
                                  stroke="black"
                                  strokeLinecap="square"
                                />
                              </svg>
                            </a>
                          </li>
                        );
                      })}
                    </div>
                  </ul>
                </li>
              );
            }
            return (
              <li className={style.menu} key={i}>
                <a href={menu.link}>{menu.name}</a>
              </li>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Nav;

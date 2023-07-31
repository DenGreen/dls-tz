import { useState } from "react";
import style from "./navMobile.module.scss";

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

const Item = ({ menu, call }) => {
  const [subMenuActive, setSubMenuActive] = useState(false);

  return (
    <li className={style.menu}>
      <div onClick={() => setSubMenuActive(!subMenuActive)}>
        <span>{menu.name}</span>
        <svg
          className={style.arrow}
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path d="M1 1L5 5L9 1" stroke="black" strokeLinecap="square" />
        </svg>
      </div>
      <ul
        className={`${style.subMenu} ${
          subMenuActive ? style.subMenuActive : ""
        }`}
      >
        <div className={style.subMenuBox}>
          {menu.subMenu.map((subMenu, i) => {
            return (
              <li
                className={style.subMenuItem}
                onClick={() => {
                  call(false);
                  setSubMenuActive(false);
                }}
                key={i}
              >
                <a href={subMenu.link} className={style.subMenuLink}>
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
};

const NavMobile = ({ mobilMenu, call }) => {
  return (
    <>
      <span className={`${mobilMenu ? style.mask : ""}`}></span>
      <div className={`${style.box} ${mobilMenu ? style.mobilMenuACtive : ""}`}>
        <div className={style.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="162"
            height="24"
            viewBox="0 0 162 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.5455 24C33.3387 24 38.0913 19.2626 38.0913 13.4724C38.0913 10.428 37.0367 7.85299 34.8854 5.67635L32.5794 3.32899C30.5968 1.32306 27.9111 0 24.888 0C19.0667 0 14.3422 4.75163 14.3422 10.6414C14.3422 13.7427 15.6218 16.4173 17.6184 18.409L19.4886 20.2869C22.1742 22.9757 24.3677 24 27.5455 24ZM16.2686 23.6586H2.95281L0 20.671V0.398342H4.79481L7.88823 3.37167V16.0759H13.3158L16.2686 19.0634V23.6586ZM4.94953 1.25193V16.0759H7.38209V3.59929L4.94953 1.25193ZM2.22164 18.6793V2.50385H2.72784V18.1956H11.4035V18.6793H2.22164ZM0.857695 20.8275L3.14964 23.1464H15.7624V19.2626L13.4704 16.9437V20.8275H0.857695ZM16.6061 10.6414C16.6061 15.3646 20.276 19.1203 24.888 19.1203C29.5 19.1203 33.1699 15.3646 33.1699 10.6414C33.1699 5.94665 29.5141 2.19087 24.888 2.19087C20.2197 2.23355 16.6061 5.93242 16.6061 10.6414ZM24.888 18.6366C29.2329 18.6366 32.6497 15.1085 32.6497 10.6414C32.6497 6.1885 29.2329 2.67457 24.888 2.67457C20.5432 2.67457 17.1264 6.1885 17.1264 10.6414C17.1264 15.1085 20.5432 18.6366 24.888 18.6366ZM19.3761 10.6271C19.4043 12.7469 20.2339 14.4683 21.8509 15.5495C21.5556 14.8524 21.3869 14.0699 21.3869 13.0456C21.3869 9.53171 24.0303 6.75756 27.405 6.75756C28.1643 6.75756 28.8111 6.92828 29.4157 7.24126C28.3892 5.74748 26.7582 4.89389 24.8881 4.86544C21.7946 4.86544 19.3902 7.36929 19.3761 10.6271ZM27.5455 23.4878C24.5505 23.4878 22.3008 22.5489 19.812 19.9597C21.3587 20.8133 23.0882 21.3112 24.888 21.3112C30.7092 21.3112 35.4337 16.5311 35.4337 10.6414C35.3775 8.7208 35.026 7.2128 34.1542 5.61944C36.5024 7.93835 37.5851 10.3142 37.5851 13.4724C37.5851 18.9781 33.0574 23.4878 27.5455 23.4878ZM22.6944 16.0047C23.3553 16.2893 24.0865 16.4458 24.888 16.4458C27.9673 16.4458 30.3999 13.8992 30.3999 10.6414C30.3999 9.70243 30.2171 8.84885 29.8796 8.09485C29.1625 7.52579 28.3751 7.26971 27.4049 7.26971C24.3115 7.26971 21.893 9.78779 21.893 13.0456C21.893 14.3972 22.132 15.2507 22.6944 16.0047ZM52.4617 24C55.1332 24 58.4657 23.2602 60.1108 22.3071V11.7368L57.0174 8.76348H48.9886V12.9603L51.7867 15.6633L52.307 15.6918V16.2324C51.6883 16.3889 50.9852 16.4742 50.2541 16.4742C49.1011 16.4742 48.0606 16.2608 47.1747 15.8625C46.5841 15.1369 46.3029 14.2549 46.3029 13.0599C46.3029 9.50326 48.8198 7.09899 52.4898 7.09899C54.838 7.09899 57.3549 8.08062 58.8735 9.11915V4.15412L55.9488 1.19502C54.0927 0.355661 51.5477 0 49.7901 0C43.5751 0 38.8646 4.42442 38.8646 10.6556C38.8646 13.8566 40.1161 16.5738 42.1549 18.5797L44.4328 20.8275C46.542 22.9046 49.2276 24 52.4617 24ZM43.9267 10.741C43.9267 12.7611 44.7563 14.3545 46.3592 15.4215C45.9796 14.767 45.7968 14.013 45.7968 13.0456C45.7968 9.21873 48.5668 6.58684 52.5039 6.58684C54.5006 6.58684 56.6238 7.26971 58.3673 8.23711V4.35329L56.0754 2.03438V6.43035C54.8521 5.49141 52.5742 4.83699 50.4791 4.83699C46.5561 4.83699 43.9267 7.1559 43.9267 10.741ZM49.6635 19.1346C44.6719 19.1346 41.1425 15.6064 41.1425 10.6414C41.1425 5.77594 44.7562 2.29046 49.8041 2.29046C51.0837 2.29046 52.8554 2.51808 54.0365 2.91642V3.4428C52.9116 3.01601 51.1118 2.77416 49.8041 2.77416C45.0374 2.77416 41.6628 6.04624 41.6628 10.6414C41.6628 15.3503 44.9531 18.6509 49.6635 18.6509C51.1259 18.6509 53.0241 18.2952 54.4864 17.7261V11.182H51.0556V10.6983H54.9926V18.0391C53.4881 18.6935 51.3508 19.1346 49.6635 19.1346ZM44.1798 19.917C46.6264 22.4209 49.059 23.4879 52.4617 23.4879C54.9084 23.4879 57.9596 22.8477 59.6047 21.9941V11.9644L57.1722 9.61707V19.4618C55.5552 20.5145 52.3071 21.3112 49.6214 21.3112C47.7654 21.3112 45.8531 20.8133 44.1798 19.917ZM52.307 15.1654L52.0117 15.1512L49.8463 13.1168H52.307V15.1654ZM85.4067 13.4724C85.4067 19.2626 80.654 24 74.8609 24C71.6831 24 69.4896 22.9757 66.8039 20.2869L64.9338 18.409C62.9372 16.4173 61.6576 13.7427 61.6576 10.6414C61.6576 4.75163 66.3821 0 72.2034 0C75.2265 0 77.9121 1.32306 79.8948 3.32899L82.2008 5.67635C84.3521 7.85299 85.4067 10.428 85.4067 13.4724ZM72.2034 19.1203C67.5914 19.1203 63.9214 15.3646 63.9214 10.6414C63.9214 5.93242 67.5351 2.23355 72.2034 2.19087C76.8295 2.19087 80.4853 5.94665 80.4853 10.6414C80.4853 15.3646 76.8154 19.1203 72.2034 19.1203ZM79.965 10.6414C79.965 15.1085 76.5482 18.6366 72.2033 18.6366C67.8585 18.6366 64.4416 15.1085 64.4416 10.6414C64.4416 6.1885 67.8585 2.67457 72.2033 2.67457C76.5482 2.67457 79.965 6.1885 79.965 10.6414ZM69.1661 15.5495C67.5491 14.4683 66.7195 12.7469 66.6914 10.6271C66.7055 7.36929 69.1099 4.86544 72.2033 4.86544C74.0734 4.89389 75.7045 5.74748 76.731 7.24126C76.1264 6.92828 75.4795 6.75756 74.7202 6.75756C71.3456 6.75756 68.7021 9.53171 68.7021 13.0456C68.7021 14.0699 68.8709 14.8524 69.1661 15.5495ZM67.1273 19.9597C69.6161 22.5489 71.8659 23.4878 74.8609 23.4878C80.3728 23.4878 84.9005 18.9781 84.9005 13.4724C84.9005 10.3142 83.8178 7.93835 81.4696 5.61944C82.3414 7.2128 82.6929 8.7208 82.7491 10.6414C82.7491 16.5311 78.0246 21.3112 72.2034 21.3112C70.4036 21.3112 68.6741 20.8133 67.1273 19.9597ZM72.2034 16.4458C71.4019 16.4458 70.6707 16.2893 70.0098 16.0047C69.4474 15.2507 69.2084 14.3972 69.2084 13.0456C69.2084 9.78779 71.6269 7.26971 74.7203 7.26971C75.6905 7.26971 76.4779 7.52579 77.195 8.09485C77.5325 8.84885 77.7153 9.70243 77.7153 10.6414C77.7153 13.8992 75.2827 16.4458 72.2034 16.4458ZM97.0351 23.6586H92.0997L89.1469 20.671V7.95258H86.8128L83.86 4.96503V0.398342H99.2287L102.181 3.38589V7.95258H97.0351V23.6586ZM92.2966 23.1464L90.0047 20.8275H94.0964V5.12152H99.3834V1.26615L101.675 3.58506V7.44043H96.529V23.1464H92.2966ZM91.3685 2.98755V18.722H91.8747V2.98755H97.3163V2.51808H85.9269V2.98755H91.3685ZM87.0096 7.44043L84.7177 5.12152H89.1469V7.44043H87.0096ZM117.03 23.6586H112.095L109.142 20.671V12.6758L101.282 0.398342H107.328L111.996 3.30054L113.065 5.10729L115.835 0.398342H121.614L123.751 3.18672L117.03 13.4582V23.6586ZM112.291 23.1464L109.999 20.8275H114.091V12.6758L121.501 1.09543L123.132 3.21517L116.524 13.3159V23.1464H112.291ZM108.003 1.42264L111.616 7.55424L112.77 5.60521L111.631 3.67042L108.003 1.42264ZM111.363 18.722V12.1209L105.387 2.50385H105.978L111.616 11.6657L117.283 2.50385H117.874L111.87 12.1494V18.722H111.363ZM132.792 23.6586H127.857L124.904 20.671V0.398342H132.863C135.239 0.398342 137.25 1.29461 138.642 2.70303L140.906 4.99348C142.326 6.43035 142.973 8.08062 142.973 10.2573C142.973 14.3829 139.457 17.6266 134.958 17.6266H132.792V23.6586ZM127.126 18.722V2.41849H132.863C136.026 2.41849 138.206 4.45287 138.206 7.4262C138.206 10.6129 135.83 12.9318 132.581 12.9318H127.632V18.722H127.126ZM132.581 12.4481H127.632V2.90219H132.863C135.745 2.90219 137.686 4.72318 137.686 7.4262C137.686 10.3426 135.534 12.4481 132.581 12.4481ZM128.054 23.1464L125.762 20.8275H129.854V14.9378H132.581C137.067 14.9378 140.442 11.7226 140.456 7.45465C140.456 6.43035 140.273 5.51986 139.879 4.63782C141.862 6.52994 142.466 7.82454 142.466 10.2573C142.466 14.0984 139.19 17.1144 134.958 17.1144H132.286V23.1464H128.054ZM129.854 4.92234V10.4422H132.005V7.09899H135.394C135.155 5.81861 134.142 4.9508 132.806 4.92234H129.854ZM132.511 10.4422V7.61115H135.45V7.71073C135.45 9.23296 134.269 10.4422 132.75 10.4422H132.511ZM161.28 23.6586H147.542L144.59 20.671V0.398342H157.933L160.886 3.38589V7.24126H152.281V8.10907H156.612L159.565 11.0966V15.3503H152.281V16.2181H158.327L161.28 19.2057V23.6586ZM149.483 8.10907V4.9508H158.088V1.26615L160.38 3.58506V6.7291H151.775V8.10907H149.483ZM146.769 2.43272V18.7647H156.415V18.281H147.275V10.6841H154.699V10.2004H147.275V2.91642H156.021V2.43272H146.769ZM149.483 16.2181V12.7753H156.766V8.97688L159.058 11.2958V14.8382H151.775V16.2181H149.483ZM145.447 20.8275L147.739 23.1464H160.774V19.4049L158.482 17.086V20.8275H145.447Z"
              fill="black"
            />
          </svg>
          <svg
            onClick={() => call(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M19.0707 1.29289L18.3636 2V2L19.0707 1.29289ZM19.0707 2.70711L19.7779 3.41421V3.41421L19.0707 2.70711ZM17.6565 1.29289L16.9494 0.585785L16.9494 0.585786L17.6565 1.29289ZM10.1818 8.7676L9.47471 9.47471C9.86524 9.86524 10.4984 9.86524 10.8889 9.47471L10.1818 8.7676ZM2.70711 1.29289L3.41421 0.585786V0.585786L2.70711 1.29289ZM1.29289 1.29289L2 2L2 2L1.29289 1.29289ZM1.29289 2.70711L0.585786 3.41421H0.585786L1.29289 2.70711ZM8.7676 10.1818L9.47471 10.8889C9.86524 10.4984 9.86524 9.86524 9.47471 9.47471L8.7676 10.1818ZM1.29289 17.6565L0.585786 16.9494L0.585785 16.9494L1.29289 17.6565ZM1.29289 19.0707L2 18.3636H2L1.29289 19.0707ZM2.70711 19.0707L3.41421 19.7779H3.41421L2.70711 19.0707ZM10.1818 11.596L10.8889 10.8889C10.7014 10.7014 10.447 10.596 10.1818 10.596C9.9166 10.596 9.66225 10.7014 9.47471 10.8889L10.1818 11.596ZM17.6565 19.0707L16.9494 19.7779L16.9494 19.7779L17.6565 19.0707ZM19.0707 17.6565L19.7779 16.9494L19.7779 16.9494L19.0707 17.6565ZM11.596 10.1818L10.8889 9.47471C10.7014 9.66225 10.596 9.9166 10.596 10.1818C10.596 10.447 10.7014 10.7014 10.8889 10.8889L11.596 10.1818ZM18.3636 2V2L19.7779 3.41421C20.5589 2.63316 20.5589 1.36684 19.7779 0.585787L18.3636 2ZM18.3636 2L18.3636 2L19.7779 0.585787C18.9968 -0.195263 17.7305 -0.195261 16.9494 0.585785L18.3636 2ZM10.8889 9.47471L18.3636 2L16.9494 0.585786L9.47471 8.0605L10.8889 9.47471ZM2 2L9.47471 9.47471L10.8889 8.0605L3.41421 0.585786L2 2ZM2 2V2L3.41421 0.585786C2.63317 -0.195262 1.36684 -0.195262 0.585786 0.585787L2 2ZM2 2H2L0.585787 0.585786C-0.195262 1.36684 -0.195262 2.63317 0.585786 3.41421L2 2ZM9.47471 9.47471L2 2L0.585786 3.41421L8.0605 10.8889L9.47471 9.47471ZM2 18.3636L9.47471 10.8889L8.0605 9.47471L0.585786 16.9494L2 18.3636ZM2 18.3636L2 18.3636L0.585785 16.9494C-0.195261 17.7305 -0.195263 18.9968 0.585787 19.7779L2 18.3636ZM2 18.3636H2L0.585787 19.7779C1.36684 20.5589 2.63316 20.5589 3.41421 19.7779L2 18.3636ZM9.47471 10.8889L2 18.3636L3.41421 19.7779L10.8889 12.3031L9.47471 10.8889ZM18.3636 18.3636L10.8889 10.8889L9.47471 12.3031L16.9494 19.7779L18.3636 18.3636ZM18.3636 18.3636H18.3636L16.9494 19.7779C17.7305 20.5589 18.9968 20.5589 19.7779 19.7779L18.3636 18.3636ZM18.3636 18.3636V18.3636L19.7779 19.7779C20.5589 18.9968 20.5589 17.7305 19.7779 16.9494L18.3636 18.3636ZM10.8889 10.8889L18.3636 18.3636L19.7779 16.9494L12.3031 9.47471L10.8889 10.8889ZM18.3636 2L10.8889 9.47471L12.3031 10.8889L19.7779 3.41421L18.3636 2Z"
              fill="black"
            />
          </svg>
        </div>
        <nav className={style.nav}>
          {navCollection.map((menu, i) => {
            if (!menu.link) {
              return <Item menu={menu} call={call} key={i} />;
            }
            return (
              <li className={style.menu} key={i}>
                <div>
                  <a href={menu.link}>{menu.name}</a>
                </div>
              </li>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default NavMobile;
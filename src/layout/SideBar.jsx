//External Lib  imports
import React from "react";
import { Accordion } from "react-bootstrap";
import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { BsCircle, BsPeople } from "react-icons/bs";
import { MdOutlineBackup, MdPassword } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

//Internal Lib  imports
import Logo from "../assets/images/logo.png";

function SideBar({ openMenu }) {
  const sidebarItems = [
    {
      title: "Dashboard",
      icon: <RiDashboardLine className="side-bar-item-icon" />,
      url: "/",
      subMenu: [],
    },
    {
      title: "Customer",
      icon: <BsPeople className="side-bar-item-icon" />,
      url: "/Customer",
      subMenu: [
        {
          title: "New Customer",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/CustomerCreateUpdatePage",
        },
        {
          title: "Customer List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/CustomerListPage",
        },
      ],
    },
    {
      title: "Setting",
      icon: <AiOutlineSetting className="side-bar-item-icon" />,
      url: "/Setting",
      subMenu: [
        {
          title: "Profile",
          icon: <AiOutlineUser size={16} className="side-bar-subitem-icon" />,
          url: "/profile",
        },
        {
          title: "Change Password",
          icon: <MdPassword size={16} className="side-bar-subitem-icon" />,
          url: "/change-password",
        },
        {
          title: "Database Backup",
          icon: <MdOutlineBackup size={16} className="side-bar-subitem-icon" />,
          url: "/database-backup",
        },
      ],
    },
  ];

  const isSidebarAccordionActive = () => {
    let urlList = [];
    sidebarItems.map((item) => {
      urlList.push(
        item.subMenu.map((subItem) => {
          return subItem?.url;
        })
      );
    });

    return urlList.findIndex((items) =>
      items.includes(window.location.pathname)
    );
  };

  return (
    <div className={openMenu ? "side-nav-open" : "side-nav-close"}>
      <div className="side-nav-top text-center">
        <Link to="/" className="text-center d-block my-3">
          <img alt="" className="side-nav-logo" src={Logo} />
        </Link>
      </div>
      <Accordion defaultActiveKey={`${isSidebarAccordionActive()}`}>
        {sidebarItems.map((item, index) => {
          return item.subMenu.length !== 0 ? (
            <Accordion.Item key={index} eventKey={`${index}`} className="mt-2">
              <Accordion.Header>
                <div className="side-bar-item">
                  {item.icon}
                  <span className="side-bar-item-caption">{item.title}</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                {item.subMenu.map((subItem, index) => (
                  <NavLink
                    key={index}
                    className={(navData) =>
                      navData.isActive
                        ? "side-bar-subitem-active side-bar-subitem "
                        : "side-bar-subitem"
                    }
                    to={subItem?.url}
                  >
                    {subItem?.icon}
                    <span className="side-bar-subitem-caption">
                      {subItem?.title}
                    </span>
                  </NavLink>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ) : (
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "side-bar-item-active side-bar-item mt-2"
                  : "side-bar-item mt-2"
              }
              to={"/dashboard"}
              end
            >
              {item.icon}
              <span className="side-bar-item-caption">{item.title}</span>
            </NavLink>
          );
        })}
      </Accordion>
    </div>
  );
}

export default SideBar;

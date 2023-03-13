import React from "react";

import Home from "../assets/home.svg";
import Dashboard from "../assets/dasboard.svg";
import Projects from "../assets/projects.svg";
import Task from "../assets/task.svg";
import Report from "../assets/report.svg";
import Users from "../assets/users.svg";
import Support from "../assets/support.svg";
import Settings from "../assets/settings.svg";

import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import avatar from "../assets/avatar.png";
import featured from "../assets/featured.png";
import logout from "../assets/send.svg";

// import { NavLink } from "react-router-dom";

const SideBar = () => {
  const navData = [
    {
      name: "Home",
      icon: Home,
      to: "/home",
    },
    {
      name: "Dashboard",
      icon: Dashboard,
      to: "/dashbord",
      count: 10,
    },
    {
      name: "Projects",
      icon: Projects,
      to: "/projects",
    },
    {
      name: "Tasks",
      icon: Task,
      to: "/tasks",
    },
    {
      name: "Reporting",
      icon: Report,
      to: "/reports",
    },
    {
      name: "Users",
      icon: Users,
      to: "/users",
    },
  ];
  return (
    <section className='hidden md:block px-4 pt-6 bg-white w-full'>
      <div className='logo w-full'>
        <img src={logo} alt='' />
        <div className='search w-full flex items-center border-solid border-[1px] border-[#d0d5dd] p-2 rounded-md my-6'>
          <img
            src={search}
            alt='search_icon'
            height='15px'
            width='15px'
            className='mr-[10px]'
          />
          <input
            type='search'
            name='search_bar'
            id='search_bar'
            placeholder='Search'
            className='outline-none border-none block w-[80%]'
          />
        </div>
      </div>

      <div className='nav_links mb-6'>
        <div className='regular_links mb-4 w-full'>
          <ul className='w-full'>
            {navData.map((link) => (
              <li
                className='flex font-medium text-base text-[#344054] py-2 cursor-pointer w-full'
                key={link.icon}
              >
                <img
                  src={link.icon}
                  alt='home'
                  className='pr-3 opacity-90 w-[12%]'
                />
                <span className='text-left w-[78%]'>{link.name}</span>
                {link.count && (
                  <span className='bagde rounded-xl w-[10%] font-medium py-1 px-[6px] text-sm text-[#344054] bg-[#F2F4F7]'>
                    {link.count}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className='setting_support_links'>
          <ul>
            {[
              {
                name: "Support",
                icon: Support,
                to: "/support",
              },
              {
                name: "Settings",
                icon: Settings,
                to: "/",
              },
            ].map((item) => (
              <li
                key={item.icon}
                className='font-medium text-base text-[#344054] w-full cursor-pointer'
              >
                <div key={item.icon} className='flex items-center my-4'>
                  <img src={item.icon} alt='home' className='pr-3 opacity-90' />
                  <span>{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='featured_section w-full bg-[#F9FAFB] p-4 rounded-md'>
        <h5 className='font-medium text-sm text-[#101828]'>
          New features available!
        </h5>
        <p className='font-normal text-sm text-[#667085] py-2'>
          Check out the new dashboard view. Pages now load faster.
        </p>
        <img src={featured} alt='new features' className='w-full mb-4' />
        <p>
          <span className='font-medium text-sm text-[#667085] mr-4'>
            Dismiss
          </span>
          <span className='font-medium text-sm text-[#6941C6]'>
            What's new?
          </span>
        </p>
      </div>

      <div className='h-[1px] bg-[#EAECF0] my-5'></div>

      <div className='me flex w-full pt-4 pb-8'>
        <span className='w-[20%]'>
          <img src={avatar} alt='my_photo' />
        </span>

        <div className='profile_info w-[60%] flex-auto'>
          <h5 className='font-medium text-sm text-[#101828]'>Olivia Rhye</h5>
          <p className='font-normal text-sm text-[#667085]'>
            olivia@untitledui.com
          </p>
        </div>

        <span className='w-[20%]'>
          <img src={logout} alt='logout' />
        </span>
      </div>
    </section>
  );
};

export default SideBar;

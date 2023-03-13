import React from "react";

import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import img4 from "../assets/img4.svg";
import img5 from "../assets/img5.svg";
import img6 from "../assets/img6.svg";
import img7 from "../assets/img7.svg";

import downloadIcon from "../assets/download-icon.svg";
import goodIcon from "../assets/good.svg";
import arrowDown from "../assets/arrow-down.svg";

const AppTable = () => {
  const data = [
    {
      planType: "Basic Plan - Dec 2022",
      amount: "USD $10.00",
      date: "Dec 1, 2022",
      status: true,
      users: img1,
    },
    {
      planType: "Basic Plan - Nov 2022",
      amount: "USD $10.00",
      date: "Nov 1, 2022",
      status: true,
      users: img2,
    },
    {
      planType: "Basic Plan - Oct 2022",
      amount: "USD $10.00",
      date: " Oct 1, 2022",
      status: true,
      users: img3,
    },
    {
      planType: "Basic Plan - Sept 2022",
      amount: "USD $10.00",
      date: " Sept 1, 2022",
      status: true,
      users: img4,
    },
    {
      planType: "Basic Plan - Aug 2022",
      amount: "USD $10.00",
      date: " Aug 1, 2022",
      status: true,
      users: img5,
    },
    {
      planType: "Basic Plan - Jul 2022",
      amount: "USD $10.00",
      date: " Jul 1, 2022",
      status: true,
      users: img6,
    },
    {
      planType: "Basic Plan - Jun 2022",
      amount: "USD $10.00",
      date: " Jun 1, 2022",
      status: true,
      users: img7,
    },
  ];
  return (
    <section
      style={{
        overflow: "auto",
      }}
      className='mb-[40px] block w-full  md:px-4'
    >
      <table
        style={{
          border: "1px solid #eaecf0",
        }}
        className='w-[100%]'
      >
        <thead>
          <tr className='text-[12px] text-left text-[#667085]'>
            <th>
              <input type='checkbox' name='select_row' id='select_row' />
            </th>
            <th className='flex'>
              <span className='mr-1'>Invoice</span>{" "}
              <img src={arrowDown} alt='arrow_down' className='pt-[2px]' />
            </th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th>Users on plan</th>
            <th className='opacity-0'>Hey</th>
          </tr>
        </thead>
        <tbody
          className='bg-[#fff]'
          style={{
            border: "1px solid #eaecf0",
          }}
        >
          {data.map((item) => (
            <tr className='text-left'>
              <td>
                <input
                  type='checkbox'
                  className='p-4'
                  name='select_row'
                  id='select_row'
                />
              </td>
              <td>{item.planType}</td>
              <td>{item.amount}</td>
              <td>{item.date}</td>
              <td>
                <button className='flex text-center py-2 px-4 rounded-2xl font-medium text-xs text-[#027A48] bg-[#ECFDF3]'>
                  <img
                    src={goodIcon}
                    alt='good_icon'
                    className='mr-1 pt-1'
                    width='13px'
                  />
                  <span className='pr-1'>Paid</span>
                </button>
              </td>
              <td>
                <img src={item.users} alt='users_on_plan' width='100px' />
              </td>
              <td>
                <img
                  src={downloadIcon}
                  width='20px'
                  alt=''
                  className='text-[#667085]'
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AppTable;

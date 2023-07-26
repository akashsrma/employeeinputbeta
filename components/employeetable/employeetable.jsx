"use client";
import { TableContext } from "../table-context/tablecontext";
import { useState } from "react";
import { useContext } from "react";

const Employeetable = ({ textColor, tableData_text_center }) => {
  const [search, setSearch] = useState("");
  const [sorted, setSorted] = useState("");
  const [active, setActive] = useState("");

  // console.log(search);
  const { data, randomKey } = useContext(TableContext);
  // console.log(sorting(""));
  return (
    <>
      <div className="m-6 ">
        <h2 className={`my-6 text-2xl text-black`}>Employee Table</h2>
        {/* input fields */}
        <div className="flex justify-between  w-[100%] ">
          <div>
            {/* search input */}
            <div className="join ">
              <input
                className="input  join-item  "
                placeholder="Search.."
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn join-item rounded-r-full">Search</button>
            </div>

            <div className="dropdown dropdown-right dropdown-end ml-10">
              <label tabIndex={0} className="btn m-1">
                Sort by
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-32"
              >
                <li>
                  <a onClick={() => setSorted()}>Active</a>
                </li>
                <li>
                  <a onClick={() => setActive()}>Inactive</a>
                </li>
              </ul>
            </div>

            {/* exit button */}
          </div>
          <button className="btn m-2 bg-green-400 hover:text-gray-500 ">
            Done
          </button>
        </div>
        {/* table */}

        <div>
          <table className="table table-md border-2 border-gray-200 drop-shadow-md  ">
            {/* head */}
            <thead>
              <tr className={`bg-neutral-content text-base text-black`}>
                <th></th>
                <th>First Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Gender</th>
                <th>Date of Joining</th>
                <th>payrollID</th>
                <th>Worker ID</th>
                <th>Veteran Status</th>
                <th>Employee Status</th>

                <th>
                  Ethnicity
                  {/* <span
                    className="pl-1 cursor-pointer text-base"
                    onClick={() => setSorted()}
                  >
                    ⇧
                  </span>
                  <span
                    className="p-1 cursor-pointer text-base"
                    onClick={() => setActive()}
                  >
                    ⇩
                  </span> */}
                </th>
                <th>Authorization</th>
                <th>Employment Type</th>
                <th>Employement ID</th>
                <th>HR Manager</th>
                <th>Classifaction</th>
              </tr>
            </thead>
            <tbody className="drop-shadow-md ">
              {/* data showing */}
              {data &&
                data
                  .sort((a, b) => {
                    return sorted === ""
                      ? a
                      : a.clientStatus > b.clientStatus
                      ? 1
                      : -1;
                  })
                  .sort((a, b) => {
                    return active === ""
                      ? a
                      : a.clientStatus < b.clientStatus
                      ? 1
                      : -1;
                  })

                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.clientDisplayName.toLowerCase().includes(search);
                  })
                  .map((item, index) => {
                    return (
                      <>
                        <tr className="hover " key={Date.now()}>
                          <th className=" px-2">{index + 1}</th>
                          <td className="py-4 px-6 text-sm text-red-600 font-medium  ">
                            {item.firstname}
                          </td>
                          <td className={tableData_text_center}>
                            {item.username}
                          </td>
                          <td className={tableData_text_center}>
                            {item.email}
                          </td>
                          <td className={tableData_text_center}>
                            {item.contactnumber}
                          </td>
                          <td className={tableData_text_center}>
                            {item.gender.value}
                          </td>
                          <td className={tableData_text_center}>
                            {item.dateofjoining}
                          </td>
                          <td className={tableData_text_center}>
                            {item.payrollid}
                          </td>
                          <td className={tableData_text_center}>
                            {item.workerid}
                          </td>
                          <td className={tableData_text_center}>
                            {item.veteransatus.value}
                          </td>
                          <td className={tableData_text_center}>
                            {item.employeestatus.map((val, index) => (
                              <span key={index}>{`${val.value} , `}</span>
                            ))}
                          </td>
                          <td className={tableData_text_center}>
                            {item.ethnicity.value}
                          </td>

                          <td className={tableData_text_center}>
                            {item.workAuthorization.value}
                          </td>

                          <td className={tableData_text_center}>
                            {item.employmentType.value}
                          </td>
                          <td className={tableData_text_center}>
                            {item.employmentid}
                          </td>
                          <td className={tableData_text_center}>
                            {item.hrmanager.value}
                          </td>
                          <td className={tableData_text_center}>
                            <span className="p-2 text-red-500 bg-gray-300 rounded">
                              {item.classifaction}
                            </span>
                          </td>
                        </tr>
                      </>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Employeetable;

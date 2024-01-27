import React, { useContext, useState, Fragment, useRef } from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import { SiRobinhood } from "react-icons/si";
import { darkMode } from "../context/Darkmode";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const UserCard = ({ name, email, number, users }) => {

  const{editUser}=useContext(darkMode)
  const { deleteUser } = useContext(darkMode);

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({
    id: "",
    ename: "",
    eemail: "",
    enumber: "",
  });

  const cancelButtonRef = useRef(null);
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const updateUser = (currentUser) => {
    setOpen(!open);
    setUser({
      id: currentUser._id,
      ename: currentUser.name,
      eemail: currentUser.email,
      enumber: currentUser.number,
    });
  };

  const handleClick = (e) => {
    editUser(user.id,user.ename,user.eemail,user.enumber)
    console.log("updating the notes", user);
    setOpen(!open);
    e.preventDefault();
  };

  return (
    <div className="max-w-xs mx-auto p-2 bg-white shadow-md overflow-hidden rounded-lg">
      <div className="p-4">
        <h2 className="text-xl font-semibold">Name : {name}</h2>

        <p className="text-gray-600">Email : {email}</p>
        <p className="text-gray-600">number : {number}</p>
      </div>
      <div className="flex  justify-around text-xl">
        <RiDeleteBin3Line
          onClick={() => {
            deleteUser(users._id);
          }}
        />
        <SiRobinhood
          onClick={() => {
            updateUser(users);
          }}
        />

        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex  sm:items-start ">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          <ExclamationTriangleIcon
                            className="h-6 w-6 text-red-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-base font-semibold leading-6 text-gray-900"
                          >
                            Edit User
                          </Dialog.Title>
                          <div className="mt-2">
                            <form className="p-6 lg:w-[150%] sm:w-[130%]  flex flex-col justify-center">
                              <div className="flex flex-col">
                                <label htmlFor="name" className="hidden">
                                  Full Name
                                </label>
                                <input
                                  type="name"
                                  value={user.ename}
                                  name="ename"
                                  id="ename"
                                  onChange={onChange}
                                  placeholder="Full Name"
                                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-800 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none"
                                />{" "}
                              </div>

                              <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="hidden">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  name="eemail"
                                  value={user.eemail}
                                  id="eemail"
                                  onChange={onChange}
                                  placeholder="Email"
                                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-800 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none"
                                />
                              </div>
                              <div className="flex flex-col mt-2">
                                <label htmlFor="number" className="hidden">
                                  Number
                                </label>
                                <input
                                  type="number"
                                  name="enumber"
                                  value={user.enumber}
                                  id="enumber"
                                  onChange={onChange}
                                  placeholder="Number"
                                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-800 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none"
                                />
                              </div>
                              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                  type="submit"
                                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                  onClick={handleClick}
                                >
                                  Change
                                </button>
                                <button
                                  type="button"
                                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                  onClick={() => setOpen(!open)}
                                  ref={cancelButtonRef}
                                >
                                  Cancel
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
};

export default UserCard;

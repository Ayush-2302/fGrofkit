import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Modals({ users }) {
  const [open, setOpen] = useState(true);
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
    setUser({
      id: currentUser._id,
      etitle: currentUser.title,
      edescription: currentUser.description,
      etag: currentUser.tag,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(false)
    console.log("clicked");
    console.log(user);
  };

  return (
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
                              value={users.ename}
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
                              value={users.eemail}
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
                              value={users.enumber}
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
                              onClick={() => setOpen(false)}
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
  );
}

import React, { createContext, useState } from "react";
const darkMode = createContext();
function Darkmode(props) {
  const [mode, setMode] = useState("light");
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#313645";
      document.body.style.color = "white ";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  const notesInitial = [];
  const [users, setUsers] = useState(notesInitial);
  const host = "http://localhost:4000";

  const fetchUser = async () => {
    const response = await fetch(`${host}/api/user/fetchalluser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setUsers(json);
    console.log(json);
  };

  const addUser = async (name, email, number) => {
    const response = await fetch(`${host}/api/user/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, number }),
    });
    const user = await response.json();
    setUsers(users.concat(user));
  };

  const deleteUser = async (id) => {
    const response = await fetch(`${host}/api/user/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    console.log("deleting..." + id);
    let newusers = users.filter((user) => {
      return user._id !== id;
    });
    setUsers(newusers);
  };

  const editUser = async (id, name, email, number) => {
    const response = await fetch(`${host}/api/user/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, number }),
    });

    const json = await response.json();
    console.log(json);

    let newusers = JSON.parse(JSON.stringify(users));
    for (let index = 0; index < newusers.length; index++) {
      const element = newusers[index];
      if (element._id === id) {
        newusers[index].name = name;
        newusers[index].email = email;
        newusers[index].number = number;
        break;
      }
    }
    setUsers(newusers);
    console.log(newusers);
  };

  return (
    <darkMode.Provider
      value={{ mode, toggle, addUser, fetchUser, deleteUser, editUser, users }}
    >
      {props.children}
    </darkMode.Provider>
  );
}

export default Darkmode;
export { darkMode };

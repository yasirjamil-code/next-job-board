"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData((form) => ({ ...form, [name]: value }));
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", inputData.email);
    formData.append("password", inputData.password);

    const response = await axios.post("/api/users", formData);

    if (response.data.success) {
      setInputData({
        email: "",
        password: "",
      });
    } else {
      console.log("Err while Submitting");
    }
  };
  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          type="email"
          name="email"
          value={inputData.email}
          onChange={onChangeHandler}
          placeholder="Entrer Your Email"
        />
        <input
          value={inputData.password}
          type="password"
          name="password"
          placeholder="Entrer Your Password"
          onChange={onChangeHandler}
        />
        <button
          type="submit"
          className="bg-green-200 text-gray-800 px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
      <span>
        Are You Resistered?
        <Link className="text-blue-500" href={"/login"}>
          Login
        </Link>
      </span>
    </div>
  );
};

export default page;

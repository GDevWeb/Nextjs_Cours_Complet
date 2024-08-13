"use client";
import usersHobbiesTab from "@/app/users/usersTab";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginLogout() {
  const router = useRouter();
  // 1. ***State***
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessageInput, setErrorMessageInput] = useState({
    inputEmail: "",
    inputPassword: "",
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  // others :

  // 2.***Functions***
  const handleInputChange = (e) => {
    const value = e.target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // check the data inputted :
    const { email, password } = formData;
    const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm;

    if (email.trim() === "" || !email.match(regexMail)) {
      setErrorMessageInput((previous) => ({
        ...previous,
        inputEmail: "Input a valid email",
      }));
      return;
    }

    const regexPassword =
      /^(?=.*[a-z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,64}$/;
    if (password.trim() === "" || !password.match(regexPassword)) {
      setErrorMessageInput((previous) => ({
        ...previous,
        inputPassword: "Input a valid password",
      }));
      return;
    }

    checkLogin();
  };

  const checkLogin = () => {
    // find if an user matches with email inputted:
    const findUser = usersHobbiesTab.find(
      (user) => user.email === formData.email
    );

    if (findUser) {
      if (findUser.password === formData.password) {
        console.warn(`User found and authenticated: ${findUser.userName}`);
        setIsAuthenticated(true);
        router.push("/dashboard");

        setLoginMessage(`Welcome, ${findUser.userName}!`);
      } else {
        console.warn("Incorrect password");
        setLoginMessage("Incorrect password");
      }
    } else {
      console.warn("no user found");
      setLoginMessage("Incorrect password");
      return;
    }

    // clear form
    setFormData({
      email: "",
      password: "",
    });
  };
  // 3. ***Render***
  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <div className="w-full flex flex-col items-center justify-between">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            className="w-full text-center"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errorMessageInput.inputEmail && (
            <p className="w-full mt-2 font-medium text-center text-red-600">
              {errorMessageInput.inputEmail}
            </p>
          )}
        </div>
        <div className="w-full flex flex-col items-center justify-between">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="w-full text-center"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errorMessageInput.inputPassword && (
            <p className="w-full mt-2 font-medium text-center text-red-600">
              {errorMessageInput.inputPassword}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="min-w-[125px] p-2 bg-green-300 hover:bg-green-600 rounded"
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
        {/* {loginMessage && <p className=" mt-4 text-red-600">{loginMessage}</p>} */}
      </form>
    </>
  );
}

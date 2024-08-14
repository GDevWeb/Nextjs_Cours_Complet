"use client";
import usersTab from "@/app/users/usersTab";
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
  /**
   * handleInputChange function set the inputted values from the login form to the state formData
   *
   * @param {*} e
   */
  const handleInputChange = (e) => {
    const value = e.target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: value,
    }));
  };

  /**
   *
   * @param {*} e prevent the default submit
   * @returns
   */
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

    //regexPassword for the schema password must be minimum 8 characters to maximum 64 and contains one special characters and one number
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
  /**
   * checkLogin function find if the inputted email exists and next check the inputted password matches with the user email. If true redirects the user to the dashboard page otherwise toggle an error message
   * @returns
   */
  const checkLogin = () => {
    // find if an user matches with email inputted:
    const findUser = usersTab.find((user) => user.email === formData.email);

    if (findUser) {
      if (findUser.password === formData.password) {
        console.warn(`User found and authenticated: ${findUser.userName}`);
        setIsAuthenticated(true);
        router.push(`/dashboard/${findUser.id}`);

        setLoginMessage(`Welcome, ${findUser.userName}!`);
      } else {
        console.warn("Incorrect password");
        setLoginMessage("Incorrect password");
      }
    } else {
      console.warn("no user found");
      setLoginMessage("no user found");
      return;
    }

    // clear formData
    setFormData({
      email: "",
      password: "",
    });
  };
  // 3. ***Render***
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center gap-4"
      >
        {isAuthenticated ? (
          <p className="text-2xl font-semibold text-green-500">
            {loginMessage}
          </p>
        ) : (
          <>
            <div className="w-full flex flex-col items-center">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-gray-600 dark:text-white"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errorMessageInput.inputEmail && (
                <p className="mt-2 text-sm text-red-600">
                  {errorMessageInput.inputEmail}
                </p>
              )}
            </div>
            <div className="w-full flex flex-col items-center">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-gray-600 dark:text-white"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errorMessageInput.inputPassword && (
                <p className="mt-2 text-sm text-red-600">
                  {errorMessageInput.inputPassword}
                </p>
              )}
            </div>
          </>
        )}
        <button
          type="submit"
          className="min-w-[125px] p-2 bg-green-300 hover:bg-green-600 rounded-md text-white"
          onClick={() => setIsAuthenticated(false)}
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </form>
    </>
  );
}

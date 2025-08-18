// import React, { useContext, useState } from 'react';
// import { assets } from '../../assets/assets';
// import axios from "axios";
// import { toast } from 'react-toastify';
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from 'react-router-dom'; 
// import './Login.css';

// const Login = ({ setShowLogin }) => {
//     const [currState, setCurrState] = useState("Login");
//     const [loginType, setLoginType] = useState("parent");
//     const { setToken, setEmail } = useContext(StoreContext); 
//     const [data, setData] = useState({
//         name: "",
//         email: "",
//         password: ""
//     });

//     const navigate = useNavigate(); 

//     const onChangeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setData(data => ({ ...data, [name]: value }));
//     };

//     const onLogin = async (event) => {
//         event.preventDefault();

//         let newUrl = `http://localhost:5000/${loginType}`; 

//         if (currState === 'Login') {
//             if (loginType === 'parent') {
//                 newUrl += "/user/parent-login"; 
//             } else {
//                 newUrl += "/user/vaccine-user-login"; 
//             }
//         } else {
//             if (loginType === 'parent') {
//                 newUrl += "/user/parent-register"; 
//             } else {
//                 newUrl += "/user/vaccine-user-register"; 
//             }
//         }

//         try {
//             const response = await axios.post(newUrl, data, {
//                 withCredentials: true,
//                 headers: { "Content-Type": "application/json" },
//             });

//             if (response.data.success) {
//                 setToken(response.data.token);
//                 setEmail(data.email); 
//                 localStorage.setItem("token", response.data.token);
//                 setShowLogin(false);
//                 toast.success(response.data.message);

//                 if (loginType === 'parent') {
//                     navigate('/parent');
//                 } else {
//                     navigate('/vaccination-center'); 
//                 }
//             } else {
//                 toast.error(response.data.message);
//             }

//         } catch (error) {
//             toast.error("User not registered or wrong credentials");
//         }
//     };

//     return (
//         <div>
//             <div className="login">
//                 <form onSubmit={onLogin} className='login-container'>
//                     <div className="login-title">
//                         <h2>{currState}</h2>
//                         <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" className="login-click" />
//                     </div>

//                     {/* Login type selection */}
//                     <div className="login-type">
//                         <label>
//                             <input
//                                 type="radio"
//                                 name="loginType"
//                                 value="parent"
//                                 checked={loginType === "parent"}
//                                 onChange={() => setLoginType("parent")}
//                             />
//                             Parent Login
//                         </label>
//                         <label>
//                             <input
//                                 type="radio"
//                                 name="loginType"
//                                 value="vaccine"
//                                 checked={loginType === "vaccine"}
//                                 onChange={() => setLoginType("vaccine")}
//                             />
//                             Vaccination Center Login
//                         </label>
//                     </div>

//                     <div className="login-input">
//                         {currState === "Login" ? null : <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder='Enter your name' required />}
//                         <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder='Enter your email' required />
//                         <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder='Enter your password' required />
//                     </div>

//                     <button type="submit"> {currState === "SignUp" ? "Create an account" : "Login"} </button>

//                     {currState === "Login" ?
//                         <p>Create an account <span className='login-click' onClick={() => setCurrState("SignUp")}>Click here</span></p>
//                         :
//                         <p>Already have an account? <span className='login-click' onClick={() => setCurrState("Login")}>Login here</span></p>
//                     }
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;





// import React, { useContext, useState } from "react";
// import { assets } from "../../assets/assets"; // Assuming assets includes the cross icon and other images
// import axios from "axios";
// import { toast } from "react-toastify";
// import { StoreContext } from "../../context/StoreContext";

// const Login = ({ setShowLogin }) => {
//     const [currState, setCurrState] = useState("Login");
//     const { setToken } = useContext(StoreContext);
//     const [data, setData] = useState({
//         name: "",
//         email: "",
//         password: "",
//     });

//     const onChangeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setData((data) => ({ ...data, [name]: value }));
//     };

//     const onLogin = async (event) => {
//         event.preventDefault();
//         let newUrl = `http://localhost:5000/parent`;

//         if (currState === "Login") {
//             newUrl += "/user/parent-login";
//         } else {
//             newUrl += "/user/parent-register";
//         }

//         try {
//             const response = await axios.post(newUrl, data, {
//                 withCredentials: true,
//                 headers: { "Content-Type": "application/json" },
//             });

//             if (response.data.success) {
//                 setToken(response.data.message);
//                 localStorage.setItem("token", response.data.token);
//                 setShowLogin(false);
//                 toast.success(response.data.message);
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             toast.error("User not registered or wrong credentials");
//         }
//     };

//     return (
//         <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
//             <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full md:flex gap-0">
//                 {/* Left Side: Image */}
//                 <div className="hidden md:block md:w-1/2 height-auto">
//                     <img
//                         src="https://media.istockphoto.com/id/1320868409/vector/childhood-vaccination-against-covid-19.jpg?s=170667a&w=0&k=20&c=-gvLAfiW7Qrneusgitk1o6sbd43ZHWQXG46lk-BUPCQ=" // Use the image path from assets
//                         alt="Login Visual"
//                         className="h-full object-cover rounded-l-lg"
//                     />
//                 </div>

//                 {/* Right Side: Login Form */}
//                 <div className="w-full md:w-1/2 p-8">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="text-2xl font-bold text-blue-900">
//                             {currState === "Login" ? "Login" : "Sign Up"}
//                         </h2>
//                         <img
//                             onClick={() => setShowLogin(false)}
//                             src={assets.cross_icon}
//                             alt="close"
//                             className="cursor-pointer h-6 w-6"
//                         />
//                     </div>

//                     <form onSubmit={onLogin} className="space-y-6">
//                         {currState === "SignUp" && (
//                             <input
//                                 type="text"
//                                 name="name"
//                                 onChange={onChangeHandler}
//                                 value={data.name}
//                                 placeholder="Enter your name"
//                                 required
//                                 className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         )}
//                         <input
//                             type="email"
//                             name="email"
//                             onChange={onChangeHandler}
//                             value={data.email}
//                             placeholder="Enter your email"
//                             required
//                             className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <input
//                             type="password"
//                             name="password"
//                             onChange={onChangeHandler}
//                             value={data.password}
//                             placeholder="Enter your password"
//                             required
//                             className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />

//                         <button
//                             type="submit"
//                             className="w-full py-2 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         >
//                             {currState === "SignUp" ? "Create Account" : "Login"}
//                         </button>

//                         {currState === "Login" ? (
//                             <p className="text-sm text-gray-600">
//                                 Don't have an account?{" "}
//                                 <span
//                                     className="text-blue-500 cursor-pointer"
//                                     onClick={() => setCurrState("SignUp")}
//                                 >
//                                     Sign Up here
//                                 </span>
//                             </p>
//                         ) : (
//                             <p className="text-sm text-gray-600">
//                                 Already have an account?{" "}
//                                 <span
//                                     className="text-blue-500 cursor-pointer"
//                                     onClick={() => setCurrState("Login")}
//                                 >
//                                     Login here
//                                 </span>
//                             </p>
//                         )}
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;


// import React, { useContext, useState } from "react";
// import { assets } from "../../assets/assets"; // Assuming assets includes the cross icon and other images
// import axios from "axios";
// import { toast } from "react-toastify";
// import { StoreContext } from "../../context/StoreContext";

// const Login = ({ setShowLogin }) => {
//     const [currState, setCurrState] = useState("Login");
//     const { setToken } = useContext(StoreContext);
//     const [data, setData] = useState({
//         name: "",
//         email: "",
//         password: "",
//     });

//     const onChangeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setData((data) => ({ ...data, [name]: value }));
//     };

//     const onLogin = async (event) => {
//         event.preventDefault();
//         let newUrl = `http://localhost:5000/parent`;

//         if (currState === "Login") {
//             newUrl += "/user/parent-login";
//         } else {
//             newUrl += "/user/parent-register";
//         }

//         try {
//             const response = await axios.post(newUrl, data, {
//                 withCredentials: true,
//                 headers: { "Content-Type": "application/json" },
//             });

//             if (response.data.success) {
//                 setToken(response.data.message);
//                 localStorage.setItem("token", response.data.token);
//                 setShowLogin(false);
//                 toast.success(response.data.message);
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             toast.error("User not registered or wrong credentials");
//         }
//     };

//     return (
//         <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
//             <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full md:flex gap-0">
//                 {/* Left Side: Image */}
//                 <div className="hidden md:block md:w-1/2 height-auto">
//                     <img
//                         src="https://media.istockphoto.com/id/1320868409/vector/childhood-vaccination-against-covid-19.jpg?s=170667a&w=0&k=20&c=-gvLAfiW7Qrneusgitk1o6sbd43ZHWQXG46lk-BUPCQ=" // Use the image path from assets
//                         alt="Login Visual"
//                         className="h-full object-cover rounded-l-lg"
//                     />
//                 </div>

//                 {/* Right Side: Login Form */}
//                 <div className="w-full md:w-1/2 p-8">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="text-2xl font-bold text-blue-900">
//                             {currState === "Login" ? "Login" : "Sign Up"}
//                         </h2>
//                         <img
//                             onClick={() => setShowLogin(false)}
//                             src={assets.cross_icon}
//                             alt="close"
//                             className="cursor-pointer h-6 w-6"
//                         />
//                     </div>

//                     <form onSubmit={onLogin} className="space-y-6">
//                         {currState === "SignUp" && (
//                             <input
//                                 type="text"
//                                 name="name"
//                                 onChange={onChangeHandler}
//                                 value={data.name}
//                                 placeholder="Enter your name"
//                                 required
//                                 className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         )}
//                         <input
//                             type="email"
//                             name="email"
//                             onChange={onChangeHandler}
//                             value={data.email}
//                             placeholder="Enter your email"
//                             required
//                             className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <input
//                             type="password"
//                             name="password"
//                             onChange={onChangeHandler}
//                             value={data.password}
//                             placeholder="Enter your password"
//                             required
//                             className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />

//                         <button
//                             type="submit"
//                             className="w-full py-2 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         >
//                             {currState === "SignUp" ? "Create Account" : "Login"}
//                         </button>

//                         {currState === "Login" ? (
//                             <p className="text-sm text-gray-600">
//                                 Don't have an account?{" "}
//                                 <span
//                                     className="text-blue-500 cursor-pointer"
//                                     onClick={() => setCurrState("SignUp")}
//                                 >
//                                     Sign Up here
//                                 </span>
//                             </p>
//                         ) : (
//                             <p className="text-sm text-gray-600">
//                                 Already have an account?{" "}
//                                 <span
//                                     className="text-blue-500 cursor-pointer"
//                                     onClick={() => setCurrState("Login")}
//                                 >
//                                     Login here
//                                 </span>
//                             </p>
//                         )}
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;


import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets"; // Assuming assets includes the cross icon and other images
import axios from "axios";
import { toast } from "react-toastify";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setShowLogin }) => {
    // State variables
    const [currState, setCurrState] = useState("Login");
    const [loginType, setLoginType] = useState("parent");
    const { setToken, setEmail } = useContext(StoreContext);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    // Handle input changes
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle form submission
    const onLogin = async (event) => {
        event.preventDefault();

        // Correct URL formatting
        let newUrl = `http://localhost:5000/${loginType}`;

        if (currState === "Login") {
            newUrl += loginType === "parent"
                ? "/user/parent-login"
                : "/user/vaccine-user-login";
        } else {
            newUrl += loginType === "parent"
                ? "/user/parent-register"
                : "/user/vaccine-user-register";
        }

        try {
            const response = await axios.post(newUrl, data, {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            });

            if (response.data.success) {
                setToken(response.data.token);
                setEmail(data.email);
                localStorage.setItem("token", response.data.token);
                setShowLogin(false);
                toast.success(response.data.message);

                // Navigate based on login type
                if (loginType === "parent") {
                    navigate("/parent");
                } else {
                    navigate("/vaccination-center");
                }
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            // Enhanced error handling
            if (error.response) {
                // Server responded with a status code outside of the 2xx range
                toast.error(error.response.data.error || "An error occurred");
            } else if (error.request) {
                // The request was made but no response was received
                toast.error("No response from server");
            } else {
                // Something happened in setting up the request
                toast.error("Error in request: " + error.message);
            }
        }
    };


    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
            <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full md:flex gap-0">
                {/* Left Side: Image */}
                <div className="hidden md:block md:w-1/2 height-auto">
                    <img
                        src="https://media.istockphoto.com/id/1320868409/vector/childhood-vaccination-against-covid-19.jpg?s=170667a&w=0&k=20&c=-gvLAfiW7Qrneusgitk1o6sbd43ZHWQXG46lk-BUPCQ=" // Replace with your assets if needed
                        alt="Login Visual"
                        className="h-full object-cover rounded-l-lg"
                    />
                </div>

                {/* Right Side: Login Form */}
                <div className="w-full md:w-1/2 p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-blue-900">
                            {currState === "Login" ? "Login" : "Sign Up"}
                        </h2>
                        <img
                            onClick={() => setShowLogin(false)}
                            src={assets.cross_icon}
                            alt="close"
                            className="cursor-pointer h-6 w-6"
                        />
                    </div>

                    {/* Login Type Selection */}
                    <div className="login-type mb-4">
                        <label className="mr-4">
                            <input
                                type="radio"
                                name="loginType"
                                value="parent"
                                checked={loginType === "parent"}
                                onChange={() => setLoginType("parent")}
                                className="mr-1"
                            />
                            Parent Login
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="loginType"
                                value="vaccine"
                                checked={loginType === "vaccine"}
                                onChange={() => setLoginType("vaccine")}
                                className="mr-1"
                            />
                            Vaccination Center Login
                        </label>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={onLogin} className="space-y-6">
                        {currState === "SignUp" && (
                            <input
                                type="text"
                                name="name"
                                onChange={onChangeHandler}
                                value={data.name}
                                placeholder="Enter your name"
                                required
                                className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        )}
                        <input
                            type="email"
                            name="email"
                            onChange={onChangeHandler}
                            value={data.email}
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            name="password"
                            onChange={onChangeHandler}
                            value={data.password}
                            placeholder="Enter your password"
                            required
                            className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {currState === "SignUp" ? "Create Account" : "Login"}
                        </button>

                        {currState === "Login" ? (
                            <p className="text-sm text-gray-600">
                                Don't have an account?{" "}
                                <span
                                    className="text-blue-500 cursor-pointer"
                                    onClick={() => setCurrState("SignUp")}
                                >
                                    Sign Up here
                                </span>
                            </p>
                        ) : (
                            <p className="text-sm text-gray-600">
                                Already have an account?{" "}
                                <span
                                    className="text-blue-500 cursor-pointer"
                                    onClick={() => setCurrState("Login")}
                                >
                                    Login here
                                </span>
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
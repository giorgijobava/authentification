// import React, { useState } from "react";
// import {useNavigate} from "react-router-dom"
// import authAction from "../../api/authAction";
// import { authHandler } from "../../api/auth";
// import { LogInAction } from "../../context/actionCreators";
// import { useAuthContext } from "../../context/AuthContextProvider";
// import routes from "../../constants/routes";

// const SignInForm = () => {
//     const navigate = useNavigate();
//     const { dispatch} = useAuthContext();
//     const [userInfo, setUserInfo ] = useState({
//         userName: "",
//         password: "",
//         error: "",
//     });
//     const [isLoading, setIsLoading] = useState(true);
//     const submitHandler = (e) => {
//         e.preventDefault();
//         authHandler(authAction.singIn, userInfo)
//         .then ((data)=> {
//         dispatch(LogInAction(data));
//          navigate(routes.home);
//         })
//         .catch((err)=> console.log(err))
//         .finally(()=> setIsLoading(false))
//     };
//     return (
//     <form onSubmit={submitHandler}>
//         <label>User Name</label>
//         <input
//         placeholder="User Name"
//         name="userName"
//         onChange={(e)=> 
//             setUserInfo((prev)=> 
//                 ({...prev,
//                  [e.target.name]: e.target.value,
//                 }))
//             } 
//         />
//         <label>Password</label>
//         <input
//         placeholder="Password"
//         name="password"
//         onChange={(e)=> 
//             setUserInfo((prev)=> 
//                 ({...prev,
//                  [e.target.name]: e.target.value,
//                 }))
//             } 
//         /> 
//         <button type="submit">Submit</button>
//         {isLoading && <h2>Loading...</h2>} 
//     </form>
//     );
// };

// export default SignInForm;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authAction from "../../api/authAction";
import { authHandler } from "../../api/auth";
import { LogInAction } from "../../context/actionCreators";
import { useAuthContext } from "../../context/AuthContextProvider";
import routes from "../../constants/routes";

const SignInForm = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();
  const [userInfo, setUserInfo] = useState({
    userName: "",
    password: "",
    error: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    authHandler(authAction.singIn, userInfo)
      .then((data) => {
        dispatch(LogInAction(data));
        navigate(routes.home);
      })
      .catch((err) => {
        console.log(err);
        setUserInfo((prev) => ({ ...prev, error: "Login failed. Please try again." }));
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h2>Sign In</h2>
        <form onSubmit={submitHandler}>
          <div className="input-group">
            <label htmlFor="userName">User Name</label>
            <input
              id="userName"
              placeholder="User Name"
              name="userName"
              value={userInfo.userName}
              onChange={(e) =>
                setUserInfo((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              value={userInfo.password}
              onChange={(e) =>
                setUserInfo((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>

          {userInfo.error && <p className="error-message">{userInfo.error}</p>}

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;

const style = `
  .signin-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  }

  .signin-form {
    background: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
  }

  .signin-form h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }

  .input-group {
    margin-bottom: 20px;
    text-align: left;
  }

  .input-group label {
    font-size: 14px;
    color: #555;
    margin-bottom: 5px;
    display: block;
  }

  .input-group input {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 5px;
    outline: none;
    transition: border-color 0.3s ease;
  }

  .input-group input:focus {
    border-color: #007BFF;
  }

  .submit-btn {
    width: 100%;
    padding: 12px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .submit-btn:hover {
    background-color: #0056b3;
  }

  .error-message {
    color: red;
    margin-top: 10px;
    font-size: 14px;
  }

  /* Адаптивность */
  @media (max-width: 600px) {
    .signin-form {
      padding: 20px;
      max-width: 90%;
    }

    .signin-form h2 {
      font-size: 20px;
    }

    .input-group input {
      font-size: 14px;
    }

    .submit-btn {
      font-size: 14px;
      padding: 10px;
    }
  }
`;

const styleTag = document.createElement("style");
styleTag.innerHTML = style;
document.head.appendChild(styleTag);
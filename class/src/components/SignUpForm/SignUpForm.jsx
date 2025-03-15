// import React, { useState } from "react";
// import { authHandler } from "../../api/auth";
// import authAction from "../../api/authAction";
// import {useNavigate} from "react-router-dom"
// import routes from "../../constants/routes";

// const SignUpForm = () => {
//     const navigate = useNavigate();
//     const [user, setUser] = useState({
//         userName: "",
//         email: "",
//         password: "",
//     });
//     const [isLoading, setIsLoading] = useState(false);
//     const submitHandler = (e) => {
//         e.preventDefault();
//         setIsLoading(true)
//         authHandler(authAction.singUp, user)
//         .then(()=> navigate(routes.singIn, { state: { success: true }}))
//         .catch((err)=> console.log(err))
//         .finally(()=> setIsLoading(false));
//     };
//     return ( 
//     <form onSubmit={submitHandler}>
//         <label>User Name</label>
//         <input
//          placeholder="User Name"
//          name="userName"
//          onChange={(e) => 
//             setUser((prev)=> ({
//                 ...prev,
//                 [e.target.name]: e.target.value,
//             }))
//         }
//          />
//         <label>Email</label>
//         <input
//          placeholder="Email"
//          name="email"
//          onChange={(e) => 
//             setUser((prev)=> ({
//                 ...prev,
//                 [e.target.name]: e.target.value,
//             }))
//         }
//          />
//          <label>Password</label>
//          <input
//           placeholder="Password"
//           name="password"
//           onChange={(e) => 
//              setUser((prev)=> ({
//                  ...prev,
//                  [e.target.name]: e.target.value,
//             }))
//          }
//           />
//           <button type="submit">Sing Up</button>
//           {isLoading && <h1>Loading ...</h1>}
//     </form>
//     );
// };

// export default SignUpForm;

import React, { useState } from "react";
import { authHandler } from "../../api/auth";
import authAction from "../../api/authAction";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    authHandler(authAction.singUp, user)
      .then(() => navigate(routes.singIn, { state: { success: true } }))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={submitHandler}>
          <div className="input-group">
            <label htmlFor="userName">User Name</label>
            <input
              id="userName"
              placeholder="User Name"
              name="userName"
              value={user.userName}
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={(e) =>
                setUser((prev) => ({
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
              value={user.password}
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;

const style = `
  .signup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  }

  .signup-form {
    background: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
  }

  .signup-form h2 {
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

  /* Адаптивность */
  @media (max-width: 600px) {
    .signup-form {
      padding: 20px;
      max-width: 90%;
    }

    .signup-form h2 {
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
// import React, { useState } from 'react';
// import "./signin.css";
// import { Link } from "react-router-dom";
// import Header from "../../components/header/HeaderDefault";
// import { auth } from "./firebase";

// function SignIn() {
//     const [isChecked, setIsChecked] = useState(false);

//     const handleCheckboxChange = () => {
//         setIsChecked(!isChecked);
//     };
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(null);
    
//     const handleSignIn = async (e) => {
//         e.preventDefault();
//         try {
//           if (validateInput()) {
//             await auth.signInWithEmailAndPassword(email, password);
//             // Redirect or perform any necessary actions upon successful sign-in
//           }
//         } catch (error) {
//           // Handle authentication errors
//           setError(error.message);
//         }
//       };
    
//       const validateInput = () => {
//         if (!email || !password) {
//           setError("Email and password are required.");
//           return false;
//         } else if (!isValidEmail(email)) {
//           setError("Invalid email format.");
//           return false;
//         }
//         setError(null); // Clear any previous error message
//         return true;
//       };
    
//       const isValidEmail = (email) => {
//         // Basic email validation
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//       };

//     return (
//         <div className="Signin">
//             {/* <Header/> */}
//             <div className="content">
//                 <div class="text">
//                     Sign In
//                 </div>
//                 <form action="#">
//                     <div class="field">
//                         <input required="" type="text" class="input" placeholder="Email"
//                                       onChange={(e) => setEmail(e.target.value)}
//                                       />
//                     </div>
//                     <div class="field">
//                         <input required="" type="password" class="input" placeholder="Password"
//                                       onChange={(e) => setPassword(e.target.value)}
//                                       />
//                     </div>
//                         <div className="rem">
//                             <input
//                                 className="rememberInput"
//                                 type="checkbox"
//                                 id="myCheckbox"
//                                 name="myCheckbox"
//                                 checked={isChecked}
//                                 onChange={handleCheckboxChange}
//                             />
//                             <label htmlFor="myCheckbox" className='remember'>Remember me</label>
//                         </div>
//                         <div className="forgot-pass">

//                             {/* <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}</p> */}
//                             <a href="#">Forgot Password?</a>
//                         </div>
//                     {/* <Link className="loginLink" to="/mainpage"> */}
//                     <button className="buttonLogin" onClick={handleSignIn}>
//                             Login</button>
//                     {/* </Link> */}
//                     {/* <div class="sign-up">
//                         Not a member?
//                         <a href="/">Signup</a>
//                     </div> */}
//                 </form>
//             </div>
//         </div>
//     );
// }
// export default SignIn;




import React, { useState } from 'react';
import './signin.css';

function SignIn() {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    if (email === '38516@iitu.edu.kz' && password === '123123') {
      // Redirect to mainpage.jsx
    } else {
      // Handle incorrect login here, for example, show an error message
      alert('Incorrect email or password');
    }
  };

  return (
    <div className="Signin">
      <div className="content">
        <div className="text">Sign In</div>
        <form action="/mainpage">
          <div className="field">
            <input
              required=""
              type="text"
              className="input"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="field">
            <input
              required=""
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="rem">
            <input
              className="rememberInput"
              type="checkbox"
              id="myCheckbox"
              name="myCheckbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="myCheckbox" className="remember">
              Remember me
            </label>
          </div>
          <div className="forgot-pass">
            <a href="#">Forgot Password?</a>
          </div>
          <button className="buttonLogin" onClick={handleSignIn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;


// import styled, { css } from "styled-components";
// import { FaUser, FaLock } from "react-icons/fa";
// import { useState } from "react";

// const Wrapper = styled.main`
//   position: relative;
//   /* width: 420px;
//   height: 450px;
//   background: transparent;
//   border: 3px solid rgba(255, 255, 255, 0.15);
//   backdrop-filter: blur(40px);
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   color: #fff;
//   display: flex;
//   align-items: center;
//   transition: height 0.2s ease;
//   overflow: hidden;

//   ${({ action }) =>
//     action &&
//     css`
//       height: 520px;
//     `} */

//   h1 {
//     font-size: 36px;
//     text-align: center;
//   }

//   button {
//     width: 100%;
//     height: 45px;
//     background: #fff;
//     border: none;
//     outline: none;
//     border-radius: 40px;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//     cursor: pointer;
//     font-size: 16px;
//     color: #333;
//     font-weight: 700;
//   }
// `;

// const Login = styled.div`
//   // form-box
//   width: 100%;
//   /* padding: 40px;
//   transition: 0.18s ease transform;
//   translate: 0;

//   ${({ action }) =>
//     action &&
//     css`
//       transition: none;
//       transform: translateX(-400px);
//     `} */
// `;

// const Registration = styled.div`
//   // form-box
//   position: absolute;
//   /* transform: translateX(400px); */
//   /* transition: none; */
//   /* width: 100%;
//   padding: 40px;
//   transition: transform 0.18s ease;

//   ${({ action }) =>
//     action &&
//     css`
//       transform: translateX(0);
//     `} */
// `;

// // form
// // h1

// const InputBox = styled.div`
//   position: relative;
//   width: 100%;
//   height: 50px;
//   margin: 30px 0;
//   background: salmon;

//   input {
//     width: 100%;
//     height: 100%;
//     background: transparent;
//     border: none;
//     outline: none;
//     border: 2px solid rgba(255, 255, 255, 0.1);
//     border-radius: 40px;
//     font-size: 16px;
//     color: #fff;
//   }

//   input::placeholder {
//     color: #fff;
//   }
// `;

// const Icon = styled.div`
//   position: absolute;
//   right: 20px;
//   top: 50%;
//   translate: 0 -50%;
//   font-size: 16px;
//   color: #fff;
//   padding: 20px 45px 20px 20px;
// `;

// const RememberForgot = styled.div`
//   display: flex;
//   justify-content: space-between;
//   font-size: 14.5px;
//   margin: -15px 0 15px;

//   label input {
//     accent-color: #fff;
//     margin-right: 4px;
//   }

//   a {
//     color: #fff;
//     text-decoration: none;
//   }

//   a:hover {
//     text-decoration: underline;
//   }
// `;

// const RegisterLink = styled.div`
//   font-size: 14.5px;
//   /* text-align: center;
//   margin: 20px 0 15px;
//   p a {
//     color: #fff;
//     text-decoration: none;
//     font-weight: 600;
//   }
//   p a:hover {
//     text-decoration: underline;
//   } */
// `;

// // active
// // transaction: none;
// // translate: -400px;

// // wrapper active form box
// // transition: translate .18s ease
// // translate: 0;

// function LoginRegister() {
//   const [action, setAction] = useState();

//   const registerLink = () => {
//     setAction(`active`);
//     console.log(action);
//     console.log("on");
//   };

//   const loginLink = () => {
//     setAction(``);
//     console.log(action);
//     console.log("off");
//   };

//   console.log(action);

//   return (
//     <Wrapper action={action}>
//       <Login action={action}>
//         <form>
//           <h1>login</h1>
//           <InputBox>
//             <input type="text" placeholder="login" required />
//             <Icon>
//               <FaUser />
//             </Icon>
//           </InputBox>
//           <InputBox>
//             <input type="password" placeholder="login" required />
//             <Icon>
//               <FaLock />
//             </Icon>
//           </InputBox>
//           <RememberForgot>
//             <label>
//               <input type="checkbox" /> Remember me
//             </label>
//           </RememberForgot>
//           <button type="submit">Login</button>
//           <RegisterLink>
//             <p>Don`t have an account?</p>
//             <a href="#" onClick={registerLink}>
//               Register
//             </a>
//           </RegisterLink>
//         </form>
//       </Login>
//       <Registration action={action}>
//         <form>
//           <h1>Registration</h1>
//           <InputBox>
//             <input type="text" placeholder="login" required />
//             <Icon>
//               <FaUser />
//             </Icon>
//           </InputBox>
//           <InputBox>
//             <input type="text" placeholder="login" required />
//             <Icon>
//               <FaUser />
//             </Icon>
//           </InputBox>
//           <InputBox>
//             <input type="password" placeholder="login" required />
//             <Icon>
//               <FaLock />
//             </Icon>
//           </InputBox>
//           <RememberForgot>
//             <label>
//               <input type="checkbox" /> Remember me
//             </label>
//           </RememberForgot>
//           <button type="submit">Login</button>
//           <RegisterLink>
//             <p>Don`t have an account?</p>
//             <a href="#" onClick={loginLink}>
//               Register
//             </a>
//           </RegisterLink>
//         </form>
//       </Registration>
//     </Wrapper>
//   );
// }

// export default LoginRegister;

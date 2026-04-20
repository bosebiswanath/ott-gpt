import { useRef, useState } from "react"
import Header from "./Header"
import bg from "../assets/background.jpeg";
import { checkValidData } from "../utils/validate"

const Login = () => {

  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick = () => {
    //validate the form data
    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message)
  }

  return (
    <div className="relative h-screen w-full">
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" 
      style={{ backgroundImage: `url(${bg})` }}></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Header */}
      <Header />

      {/* Login Form */}
      <div className="relative flex items-center justify-center h-full">

        <form onSubmit={(e) => e.preventDefault()} className="bg-black/80 p-12 rounded-md w-[400px] bg-opacity-70">
          <h1 className="text-white text-3xl font-bold mb-6">{isSignInForm ? "Sign In" : "Sign Up" }</h1>

          {!isSignInForm && (
            <input ref={name} type="text" placeholder="Full Name" className="w-full p-3 mb-4 bg-gray-800 text-white rounded"
          />
          )}

          <input ref={email} type="text" placeholder="Email Address" className="w-full p-3 mb-4 bg-gray-800 text-white rounded"
          />

          <input ref={password} type="password" placeholder="Password" className="w-full p-3 mb-6 bg-gray-800 text-white rounded"
          />

          <p className="text-red-500 font-bold">{errorMessage}</p>
          <button className="w-full bg-red-600 text-white py-3 rounded font-semibold" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up" } </button>

          <p className="text-gray-400 mt-4 text-sm">{isSignInForm ? "New to Netflix ? " : "Already Registered? " }   
            <span className="text-white cursor-pointer" onClick={toggleSignInForm}> 
              {isSignInForm ? "Sign Up Now" : "Sign In Now" }
             
              </span>
          </p>
        </form>

      </div>

    </div>
  )
}

export default Login

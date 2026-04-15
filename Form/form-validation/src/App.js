import {useState} from "react";
import './App.css';
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

function App() {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const rules = {
   length: password.length >= 8,
   uppercase: /[A-Z]/.test(password),
   number: /[0-9]/.test(password),
   special: /[^A-Za-z0-9]/.test(password),
  }

  const handleSubmit = (e) => {
     e.preventDefault();

  }

  const isPasswordStrong = rules.length &&  rules.uppercase && rules.number && rules.special;

   return <div className="bg-gradient-to-r from-black via-black to-purple-950 min-h-screen w-full">
      <div className='text-3xl text-center pt-7 font-bold text-white'>Login</div>

      <div className="text-white flex justify-center mt-9">
         <div className="border border-gray-700 p-8 w-[32rem] rounded-2xl">
           <form onSubmit={handleSubmit}>
            {/* Username */}
             <input
              type="text"
              placeholder="Username"
              className="w-full h-10 rounded-xl pl-3 bg-transparent border border-gray-800"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
             /><br/>
             {/* Password */}
             <input 
              type="password"
              placeholder="Password"
              className="mt-6 w-full h-10 rounded-xl pl-3 bg-transparent border border-gray-800"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
             />
             {/* Validation */}
           {password.length > 0 && 
              <div className={`mt-3 text-sm space-y-1  ${!rules.length ? "block" : "hidden"}`}>
              <p className={rules.length ? "text-green-600" : "text-red-700"}>{rules.length ? <FaCheck className="text-green-700 inline mr-1"/> : <FaTimes className="text-red-700 inline mr-1"/>}At Least 8 character</p>
              <p className={rules.uppercase ? "text-green-600" : "text-red-700"}>{rules.uppercase ? "✅" : "❌"}One Uppercase Letter</p>
              <p className={rules.number ? "text-green-600" : "text-red-700"}>{rules.number ? "✅" : "❌"}One number</p>
              <p className={rules.special ? "text-green-600" : "text-red-700"}>{rules.special ? "✅" : "❌"}One special character</p>
         </div>
           }  
             {/* Button  */}
             <div className="text-center mt-4">
             <button 
             className={`transform hover:scale-110 transition-all duration-300 ease-in-out text-xl pt-1 pr-10 pl-10 pb-1 rounded-xl bg-gradient-to-r from-black via-black to-purple-950 shadow-[0_0_6px_white] ${
            isPasswordStrong
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-600 cursor-not-allowed"
          }` }
             disabled={!isPasswordStrong} type="submit">Login</button>
             </div>
           </form>
         </div>
      </div>
   </div>
}

export default App;

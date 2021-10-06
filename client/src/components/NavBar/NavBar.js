import React,{ Fragment } from "react";
import { useHistory } from 'react-router-dom';



const NavBar = () => {
  const history = useHistory();
  
  const handleSignIn = () => {
    history.push('/signin')
  }


  const handleSignOut = () => {
    history.push('/signin')
  }

  const handleSignUp = () => {
    history.push('/signup')
  }

  return (
    <>
    <div className="bg-indigo-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <h2 className="ml-3 font-large text-white truncate">
              Todo App
            </h2>
          </div>
          <div className="order-3 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto mt-5 flex lg:mt-0 lg:ml-4">
        <span className="sm:block">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleSignIn}
          >
            
            Sign In
          </button>
        </span>

        <span className="sm:block ml-3">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleSignUp}
          >
            
            Sign Up
          </button>
        </span>

        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleSignOut}
          >
            
            Sign Out
          </button>
        </span>

      
      </div>

          
        </div>
      </div>
    </div>

    <h2 class="text-lg ...">Logged in as Sundar</h2>
    
    </>
  );
};

export default NavBar;

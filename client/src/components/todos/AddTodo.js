import React from 'react';
import ListTodos from './ListTodos';

const AddTodo = () => {
    return ( 
        <>
         <label htmlFor="email-address" className="sr-only">
                Add Todo
              </label>
         <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        
          {/* Replace with your content */}
          <div className="items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <form className="mt-8 space-y-6" >
          
          <div className="rounded-md shadow-sm -space-y-px">
         
            <div>
              <input
                id="todo"
                name="todo"
                type="text"
                autoComplete="todo"
                required
                className="appearance-none rounded-none relative block w-1/2 md:w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Add Todo"
              />
            </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                 
                </span>
                Add
              </button>
            </div>

              </form>
            </div>

        <ListTodos/>
          
          {/* /End replace */}
        </div>
      </main>
        
        </>
     );
}
 
export default AddTodo;
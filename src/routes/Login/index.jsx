import React from 'react'

const SignInComponent = () => {
    return (
        <>
          <div>
          </div>
    
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
    

            <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="Job" className="block text-sm font-medium text-gray-700">
                            Login
                          </label>

                <form action="#" method="POST">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                          </label>
                          <input type="text"  />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                          </label>
                          <input type="password" placeholder="Password" />
                        </div>

                        <button>Log <input type="button" value="" /></button>
                        <p>Don't have an account?</p>
                        
                      </div>
                    </div>
                    </div>
                    </form>
                    </div>
                    </div>
          
        </>   
      )
    }

    export default SignInComponent;
import React from 'react'

const SignUpComponent = () => {
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
                            Registration
                          </label>

                <form action="#" method="POST">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                            Full Name
                          </label>
                          <input type="text" placeholder="Full name" />
                        </div>
    
                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                            Email address
                          </label>
                          <input type="email" placeholder="Email" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                          </label>
                          <input type="password" placeholder="Password" />
                        </div>
    
                         <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-700">
                            Phone Number
                          </label>
                          <input type="number" placeholder="Phone Number" />
                        </div>
    
                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="Cpassword" className="block text-sm font-medium text-gray-700">
                             Confirmation Password
                          </label>
                          <input type="password" placeholder="Confirmartion Password" />
                        </div>
    
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                            Address
                          </label>
                          <input type="text" placeholder="Address" />
                        </div>
                        <button>Next</button>
                        <p>Already have account ?</p>
                        <a href="sign in.jsx" target="_blank">Sign in</a> 
                      </div>
                    </div>
                    </div>
                    </form>
                    </div>
                    </div>
          
        </>   
      )
    }

    export default SignUpComponent;
import React from 'react'

const JobComponent = () => {
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
                            Job Details
                          </label>

                <form action="#" method="POST">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="staff" className="block text-sm font-medium text-gray-700">
                            Staff ID
                          </label>
                          <input type="number" placeholder="number" />
                        </div>
    
                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                            Position
                          </label>
                          <input type="text" placeholder="position" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                            Salary
                          </label>
                          <input type="number" placeholder="RM:" />
                        </div>
    
                        <button>Sign up</button>
                      </div>
                    </div>
                    </div>
                    </form>
                    </div>
                    </div>
          
        </>   
      )
    }

    export default JobComponent;
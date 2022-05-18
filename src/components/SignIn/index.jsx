import React from "react";
import EditorLayout from "../../layouts/EditorLayout";

const SignInComponent = () => {
    return (
          <div>
              <EditorLayout title="Sign In">
              <form action="" method="POST" className="flex flex-col items-center py-12"
				>

                <div className="pb-10 ">
						<tr>
							<th className="md:10rem lg:w-[20rem] text-left">
								Username
							</th>
							<td>
								<input
									type="text"
									className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
								/>
							</td>
						</tr>
					</div>

                    <div className="pb-10 ">
						<tr>
							<th className="md:10rem lg:w-[20rem] text-left">
								E-Mail
							</th>
							<td>
								<input
									type="email"
									className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
								/>
							</td>
						</tr>
					</div>
                    
                    <div className="pb-10 ">
						<tr>
							<th className="md:10rem lg:w-[20rem] text-left">
								Password
							</th>
							<td>
								<input
									type="password"
									className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
								/>
							</td>
						</tr>
					</div>

                        <button>Log <input type="button" value="" /></button>
                        <p>Don't have an account?</p>
                        
                        </form>
                        </EditorLayout>
                      </div>       
      )
    }

    export default SignInComponent;
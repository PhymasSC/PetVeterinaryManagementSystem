import React from "react";
import EditorLayout from "../../layouts/EditorLayout";
import PrimaryButton from "../../components/Button";
const SignUpComponent = () => {
    return (
          <div>
              <EditorLayout title="Registration">
              <form action="" method="POST" className="flex flex-col items-center py-12"
				>

                <div className="pb-10 ">
						<tr>
							<th className="md:10rem lg:w-[20rem] text-left">
								Full Name
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
								E-Mail Address
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

                    <div className="pb-10 ">
						<tr>
							<th className="md:10rem lg:w-[20rem] text-left">
								Confirmation Password
							</th>
							<td>
								<input
									type="password"
									className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
								/>
							</td>
						</tr>
					</div>

                    <div className="pb-10 ">
						<tr>
							<th className="md:10rem lg:w-[20rem] text-left">
								Phone Number
							</th>
							<td>
								<input
									type="number"
									className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
								/>
							</td>
						</tr>
					</div>

                    <div className="pb-10 ">
						<tr>
							<th className="md:10rem lg:w-[20rem] text-left">
								Address
							</th>
							<td>
								<input
									type="text"
									className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
								/>
							</td>
						</tr>
					</div>

                        <button>Next <input type="button" value="" /></button>
                        <p>Already have account?</p>
                        <a href="./SignIn" target="_blank">Sign in</a> 
                        
                        </form>
                        </EditorLayout>
                      </div>       
      )
    }

    export default SignUpComponent;

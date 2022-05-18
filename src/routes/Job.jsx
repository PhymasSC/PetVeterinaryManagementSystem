
   
import React from "react";
import EditorLayout from "../../layouts/EditorLayout";
import { Clock } from "../../components/index";
const JobComponent = () => {
    return (
          <div>
              <EditorLayout title="Job Details">
              <form action="" method="POST" className="flex flex-col items-center py-12"
				>

                <div className="pb-10 ">
						<tr>
							<th className="md:10rem lg:w-[20rem] text-left">
								Staff ID
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
								Postion
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
								Salary
							</th>
							<td>
								<input
									type="number"
                                    placeholder="without RM"
									className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
								/>
							</td>
						</tr>
					</div>

                        <button>Sign Up <input type="button" value="" /></button>
                        
                        </form>
                        </EditorLayout>
                      </div>       
      )
    }

    export default JobComponent;

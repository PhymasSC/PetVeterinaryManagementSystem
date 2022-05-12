export function CreateMedicalRecord() {
  return (
    <div className="bg-teal-50 w-[93%]">
      <div className="flex justify-between">
        <h1 className="font-medium text-2xl ml-10 pt-12 pb-10">Medical Record</h1>
        <input type="datetime-local" className="bg-teal-50 mr-10"/>
      </div>
      <div className="bg-white rounded-xl w-[80%] m-auto">
        <form action="get" className="flex flex-col items-center py-12">

          <div className="pb-10">
            <tr>
              <th className="w-[15rem] sm:w-[5rem] md:w-[10rem] md:px-2 lg:w-[20rem] text-left">Client</th>
              <td>
                <select id="clientName" name="clientName" className="rounded-lg w-[20rem] md:w-[30em] md:px-1 lg:w-[40em] h-10 px-2 border-2 border-gray-300">
                  <option value="none" className="" selected disabled>Client</option>
                  <option value="Tan Yi Han">Tan Yi Han</option>
                  <option value="Alan Leong">Alan Leong</option>
                </select>
              </td>
            </tr>
          </div>
{/* 
          <div className="pb-10">
            <tr>
              <th className="md:10rem lg:w-[20rem] text-left">Pet Name</th>
              <td>
                <select id="clientName" name="clientName" className="rounded-lg w-[20rem] lg:w-[40em] h-10 px-2 border-2 border-gray-300">
                  <option value="none" selected disabled hidden>Pet Name</option>
                  <option value="Lucky">Lucky</option>
                  <option value="Golden">Golden</option>
                </select>
              </td>
            </tr>
          </div>

          <div className="pb-10">
            <tr>
              <th className="md:10rem lg:w-[20rem] text-left">Created by</th>
              <td>
                <input
                  type="text" className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-2 py-4 border-2 border-gray-300"
                />
              </td>
            </tr>
          </div>

          <div className="pb-10">
            <tr>
              <th className="md:10rem lg:w-[20rem] text-left">Prescription</th>
              <td>
                <input
                  type="text"
                  className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-2 py-4 border-2 border-gray-300"
                />
              </td>
            </tr>
          </div>

          <div className="pb-10">
            <tr>
              <th className="md:10rem lg:w-[20rem] text-left">Diagnosis</th>
              <td>
                <textarea rows="100" cols="100" className="rounded-lg w-[20rem] lg:w-[40rem] h-40 px-2 py-4 border-2 border-gray-300 resize-none"></textarea>
              </td>
            </tr>
          </div> */}

          <div>
            <button type="submit" className="bg-cyan-100 px-32 py-3 rounded-xl">
              CREATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

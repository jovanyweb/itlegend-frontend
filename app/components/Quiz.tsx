export default function Quiz() {
  return (
    <div className="bg-[#455cc5] p-2 h-full w-full">
      <div className="font-light text-white py-1 items-center text-center mt-2 mx-auto px-7 bg-[#fbd500] shadow-md shadow-[#fbd500] w-fit rounded-lg flex gap-2">
        <i className="fa-regular fa-alarm-clock"></i>9:32
      </div>
      <ol className="p-2 flex text-white gap-3 m-8 justify-center">
        <li className="border p-2 w-10 text-center h-10 border-white rounded-full">
          1
        </li>
        <li className="bg-white text-blue-800 border p-2 w-10 text-center h-10 border-white rounded-full">
          2
        </li>
        <li className="border p-2 w-10 text-center h-10 border-white rounded-full">
          3
        </li>
        <li className="border p-2 w-10 text-center h-10 border-white rounded-full">
          4
        </li>
        <li className="border p-2 w-10 text-center h-10 border-white rounded-full">
          5
        </li>
      </ol>
      <div className="bg-white p-8 rounded-2xl">
        <div>
          <span className="block">1.</span>Among the following status of India,
          which one has the oldest rock formations in the country?
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex question-option shadow-xl border mt-2 p-2 rounded-xl  border-[#0000001a] ">
            <div className="p-2 mx-1 question-option-input-container border-r border-r-[#0000001a]">
              <input
                type="radio"
                className="accent-white scale-150 mr-2"
                name="question-1"
                id="option-1"
              />
            </div>
            <label htmlFor="option-1" className="p-2">
              Asam
            </label>
          </div>
          <div className="flex question-option shadow-xl border mt-2 p-2 rounded-xl  border-[#0000001a] ">
            <div className="p-2 mx-1 question-option-input-container border-r border-r-[#0000001a]">
              <input
                type="radio"
                className="accent-white scale-150 mr-2"
                name="question-1"
                id="option-2"
              />
            </div>
            <label htmlFor="option-2" className="p-2">
              Bahar
            </label>
          </div>
          <div className="flex question-option shadow-xl border mt-2 p-2 rounded-xl  border-[#0000001a] ">
            <div className="p-2 mx-1 question-option-input-container border-r border-r-[#0000001a]">
              <input
                type="radio"
                className="accent-white scale-150 mr-2"
                name="question-1"
                id="option-3"
              />
            </div>
            <label htmlFor="option-3" className="p-2">
              Kamaltake
            </label>
          </div>
          <div className="flex question-option shadow-xl border mt-2 p-2 rounded-xl  border-[#0000001a] ">
            <div className="p-2 mx-1 question-option-input-container border-r border-r-[#0000001a]">
              <input
                type="radio"
                className="accent-white scale-150 mr-2"
                name="question-1"
                id="option-4"
              />
            </div>
            <label htmlFor="option-4" className="p-2">
              Utter Pardesh
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

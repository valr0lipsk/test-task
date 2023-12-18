function App() {
  return (
    <div className="m-auto bg-orange-300 min-h-96 flex p-10 w-1/2 rounded">
      <div className="flex flex-col bg-white p-4 rounded">
        <input
          type="text"
          placeholder="name"
          className="p-2 border border-black rounded mb-2"
        />
        <input
          type="email"
          placeholder="email"
          className="p-2 border border-black rounded"
        />
        <button
          type="submit"
          className="border text-white bg-black rounded py-2 mt-7"
        >
          Add
        </button>
      </div>
      <div className="flex flex-col bg-white p-4 rounded ml-10 w-full">
        <div className="border-b border-black p-3 flex justify-between items-start">
          <div>
            <p>John Black</p>
            <p className="text-xs">someemail@gmail.com</p>
          </div>
          <button className="border border-black py-1 px-2 flex items-center justify-center text-xs leading-3 rounded hover:bg-red-500 hover:text-white">
            x
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";

function App() {

  const [count, setCount] = useState(0)
  return (
    <div className="flex items-center flex-col justify-between min-h-screen">
      <h1 className="text-8xl font-black text-center text-indigo-700 mt-40">Holi :3</h1>
      <button className="bg-indigo-800 hover:bg-indigo-500 text-white text-xl p-4 rounded-xl"
      onClick={()=> setCount(count+1)}>Click me!</button>
      <div>
      <p className="text-5xl bg-black text-white rounded-full p-5" >{count}</p>
      <button className="bg-blue-700 hover:bg-blue-500 p-4 rounded-xl mt-5 w-full text-white" onClick={() => setCount(0)}>Reset</button>
      </div>
      <p className="text-black text-2xl my-5"> Crafted with ❤️ </p>
    </div>
  );
}

export default App;

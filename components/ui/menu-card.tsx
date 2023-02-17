"use client";
import { ChangeEvent, useState } from "react";

const MenuCard = () => {
  const [count, setCount] = useState(0);

  const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.currentTarget.value));
  };

  return (
    <div className="max-w-[400px] border rounded-lg p-4 gap-4">
      <div className="flex justify-between items center gap-4">
        <div className="w-[150px] h-[150px] border rounded-md bg-neutral-400"></div>
        <div className="max-w-[200px]">
          <p className="font-bold text-xl">Banana Wrap</p>
          <p className="text-neutral-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
            voluptatibus.
          </p>
          <p className="text-neutral-400 text-sm mt-4">12 avaiable.6 sold</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="font-bold text-xl">Rp. 15.000,-</p>
        <div className="flex gap-2">
          <button
            onClick={() => setCount((count) => (count = count - 1))}
            className="p-2 bg-neutral-300 rounded-full h-[50px] w-[50px] text-white"
          >
            -
          </button>
          <input
            type="text"
            onChange={(e) => handleInputOnChange(e)}
            className="text-center p-2 w-[50px] "
            value={count}
          />
          <button
            onClick={() => setCount((count) => (count = count + 1))}
            className="p-2 bg-blue-500 rounded-full h-[50px] w-[50px] text-white"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

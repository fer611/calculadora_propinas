import type { MenuItem } from "../types";

interface MenuItemProps {
  item: MenuItem;
  addItem: (item : MenuItem) => void;
}

export default function MenuItem({ item, addItem }: MenuItemProps) {

  return (
    <>
      <button
        onClick={() => {
          addItem(item);
        }}
        className="border-2 rounded-lg border-indigo-900 hover:bg-indigo-900 hover:text-white w-full p-3 flex justify-between"
      >
        <p>Nombre: {item.name}</p>
        <p className="font-black">Bs: {item.price}</p>
      </button>
    </>
  );
}

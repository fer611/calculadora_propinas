import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};

export default function OrderContents({
  order,
  removeItem,
}: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-10">
        {order.map((e: OrderItem) => {
          return (
            <div
              key={e.id}
              className="border-t border-indigo-500 p-2 my-4
              flex justify-between last-of-type:border-b items-center"
            >
              <div className="">
                <p>
                  {e.name} - {formatCurrency(e.price)}
                </p>
                <p>
                  <span className="font-black">Cantidad: </span>
                  {e.quantity} - {formatCurrency(e.price * e.quantity)}
                </p>
              </div>
              <button
                onClick={() => removeItem(e.id)}
                className="bg-red-600 w-8 h-8 rounded-full font-black text-white"
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

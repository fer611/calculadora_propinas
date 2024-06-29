import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";

interface OrderTotalsProps {
  order: OrderItem[];
  tip: number
  placeOrder:  (order:OrderItem[]) => void
}
export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const propina = useMemo(() => {
    return subTotalAmount * tip;
  }, [tip, subTotalAmount]);

  const total = useMemo(
    () => subTotalAmount + propina,
    [propina, subTotalAmount]
  );
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl"> Totales y Propina</h2>
        <p>
          Subtotal a Pagar:{" "}
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          8 Propina:{" "}
          <span className="font-bold">{formatCurrency(propina)}</span>
        </p>
        <p>
          Total a Pagar:{" "}
          <span className="font-bold">{formatCurrency(total)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black rounded-lg text-white p-3 uppercase font-bold mt-10 disabled:opacity-30"
        disabled={total === 0}
        onClick={()=> placeOrder(order)}
      >
        Guardar Orden
      </button>
    </>
  );
}

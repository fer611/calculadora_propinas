import {  useState } from "react";
import type { MenuItem, OrderItem } from "../types";
//import { menuItems } from "../data/db";
export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0)

  const addItem = (item: MenuItem) => {
    //Verificamos si ya existe

    const existe = order.find((e) => item.id === e.id);
    if (existe) {
      //Cuando ya existe modificamos la cantidad
      const updateOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updateOrder);
    } else {
      //const newItem : OrderItem=  { ...item, quantity: 1 };
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    const updateOrder = order.filter((e)=> e.id !== id)
    setOrder(updateOrder)
  };


  const placeOrder = (order: OrderItem[])=>{
    console.log('Guardando.....: ');
    console.table(order)
    setOrder([])
    setTip(0)
  }


  /* useEffect(() => {
    console.table(order);
  }, [order]); */
  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  };
}

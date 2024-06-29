import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";
import type { MenuItem as MenuItemType } from "./types";
import useOrder from "./hooks/useOrder";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();
  return (
    <>
      <header className="bg-indigo-800 text-white text-center py-5">
        <h1 className="text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>
      <main className="max-w-7xl mx-auto mt-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="font-black text-4xl">Menú</h2>

          <div className="mt-10 space-y-3">
            {menuItems.map((item: MenuItemType) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-indigo-300 p-5 rounded-lg space-y-10">
          {order.length === 0 ? (
            <p className="text-xl text-center">La orden esta vacía </p>
          ) : (
            <>
              <OrderContents order={order} removeItem={removeItem} />
              <TipPercentageForm tip={tip} setTip={setTip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;

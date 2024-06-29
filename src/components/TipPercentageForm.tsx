import { type Dispatch, type SetStateAction } from "react";
import { tipOptions } from "../data/tipos";

interface TipPercentageFormProps {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
}
export default function TipPercentageForm({
  setTip,
  tip,
}: TipPercentageFormProps) {

  
  return (
    <div>
      <h3 className="font-black text-2xl">Propina: </h3>
      <form action="">
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              id={tipOption.id}
              type="radio"
              name="tip"
              value={tipOption.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
}

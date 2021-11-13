import { Accessor, createMemo, createSignal } from "solid-js";
import { toInt } from "../../util/string/toInt";

export const useInputNumber = (
  initialValue: number
): [Accessor<number>, (v: string) => void] => {
  const [value, setValue] = createSignal<string>(initialValue.toString());

  const intValue = createMemo(() => parseInt(value()));

  const setIntValue = (v: string) => {
    if (!v.length) {
      setValue("");
    }
    setValue(() => toInt(v).toString());
  };

  return [intValue, setIntValue];
};

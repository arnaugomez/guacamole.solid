import { Component, createEffect, createSignal } from "solid-js";
import { Vector2D } from "../../../../common/model/Vector2D";
import { toInt } from "../../../../common/util/string/toInt";
import { useInputNumber } from "../../../../common/view/hooks/useInputNumber";

export const CreateBoardForm: Component = () => {
  const [bounds, setBounds] = createSignal<Vector2D>({ x: 20, y: 20 });
  const [moles, setMoles] = useInputNumber(0);
  
  createEffect(() => console.log({ bounds: bounds(), moles: moles() }));

  return (
    <form>
      <label>
        <p>Rows</p>
        <input
          type="number"
          value={bounds().y}
          onInput={(e) =>
            setBounds((b) => ({ ...b, y: toInt(e.currentTarget.value) }))
          }
        />
      </label>
      <label>
        <p>Columns</p>
        <input
          type="number"
          value={bounds().x}
          onInput={(e) =>
            setBounds((b) => ({ ...b, x: toInt(e.currentTarget.value) }))
          }
        />
      </label>
      <label>
        <p>Moles</p>
        <input
          type="number"
          value={moles()}
          onInput={(e) => {
            setMoles(e.currentTarget.value);
          }}
        />
      </label>
    </form>
  );
};

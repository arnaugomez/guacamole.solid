import { Vector2D } from "../../common/model/Vector2D";
import { Hole, newHole } from "./Hole";
import { Mole } from "./Mole";

export class Board implements IBoard {
  holes: IBoard["holes"];
  moles: IBoard["moles"];

  constructor(b: IBoard) {
    this.holes = b.holes;
    this.moles = b.moles;
  }

  static create(bounds: Vector2D, molesAmount: number) {
    const holes: IBoard["holes"] = [];
    for (let x = 0; x < bounds.x; x++) {
      const column = [];
      for (let y = 0; y < bounds.y; y++) {
        column.push(newHole());
      }
      holes.push(column);
    }

    const moles: IBoard["moles"] = [];
    for (let i = 0; i < molesAmount; i++) {
      moles.push(Mole.create(bounds));
    }

    return new Board({ holes, moles });
  }

  toObject() {
    const { holes, moles } = this;
    return { holes, moles };
  }

  copy = () => new Board(this.toObject());
}

interface IBoard {
  holes: Hole[][];
  moles: Mole[];
}

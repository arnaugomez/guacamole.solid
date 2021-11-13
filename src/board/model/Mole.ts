import {
  createVectorWithinBounds,
  Vector2D,
} from "../../common/model/Vector2D";
import { randIntSmallerThan } from "../../common/util/math/randIntSmallerThan";

export class Mole implements IMole {
  isHidden: IMole["isHidden"];
  position: IMole["position"];
  health: IMole["health"];

  constructor(m: IMole) {
    this.position = m.position;
    this.health = m.health;
    this.isHidden = m.isHidden;
  }

  static create(bounds: Vector2D): Mole {
    return new Mole({
      position: createVectorWithinBounds(bounds),
      health: randIntSmallerThan(101),
      isHidden: false,
    });
  }

  copy(): Mole {
    return new Mole(this.toObject());
  }

  toObject(): IMole {
    const { isHidden, position, health } = this;
    return { isHidden, position, health };
  }

  get isDead() {
    return this.health <= 0;
  }

  hit(): number {
    const damage = randIntSmallerThan(50);
    this.health -= damage;
    this.isHidden = true;
    return damage;
  }

  move(bounds: Vector2D) {
    this.position = createVectorWithinBounds(bounds);
    this.isHidden = false;
  }
}

interface IMole {
  isHidden: boolean;
  position: Vector2D;
  health: number;
}

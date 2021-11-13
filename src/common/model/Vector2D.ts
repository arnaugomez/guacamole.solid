import { randIntSmallerThan } from "../util/math/randIntSmallerThan";

export interface Vector2D {
  x: number;
  y: number;
}

export const createVectorWithinBounds = (bounds: Vector2D): Vector2D => ({
  x: randIntSmallerThan(bounds.x),
  y: randIntSmallerThan(bounds.y),
});

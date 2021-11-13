export interface Hole {
  timesFilled: number;
}

export const newHole = (): Hole => ({
  timesFilled: 0,
});

import { Position } from './Positions';

export class PositionList {
  public readonly positions: Position[];

  constructor(positions: Position[]) {
    this.positions = positions;
  }
}

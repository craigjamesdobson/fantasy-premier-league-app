import { IPositionData } from './IPositionData';
import { Position } from './Positions';
import { PositionList } from './PositionList';

export namespace CreatePositionData {
  export function createPositionData(data: IPositionData): PositionList {

    const positions = data.element_types.map(position => new Position(position));
    const positionList = new PositionList(positions);

    return positionList;
  }
}

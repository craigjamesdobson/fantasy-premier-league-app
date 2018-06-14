import { IPositionDataElements } from './IPositionDataElements';

// Player class
export class Position {
  public readonly positionID: number;
  public readonly singularName: string;
  public readonly singularNameShort: string;
  public readonly pluralName: string;
  public readonly pluralNameShort: string;

  constructor(position: IPositionDataElements) {
    this.positionID = position.id;
    this.singularName = position.singular_name;
    this.singularNameShort = position.singular_name_short;
    this.pluralName = position.plural_name;
    this.pluralNameShort = position.plural_name_short;
  }
}

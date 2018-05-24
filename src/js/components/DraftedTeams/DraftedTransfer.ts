import { IDraftedTransferData } from '../DraftedTeams/IDraftedTransferData';

export class DraftedTransfer {
  public readonly transferId: number;
  public readonly transferWeek: number;

  constructor(draftedTransfer: IDraftedTransferData) {
    this.transferId = draftedTransfer.transfer_id;
    this.transferWeek = draftedTransfer.transfer_week;
  }
}

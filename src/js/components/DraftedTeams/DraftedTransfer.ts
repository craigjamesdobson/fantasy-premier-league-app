import { IDraftedTransferData } from '../DraftedTeams/IDraftedTransferData';

export class DraftedTransfer {
  public readonly transferId: number;
  public readonly transferWeek: number;
  public readonly currentTransferDateExpiry: string;

  constructor(draftedTransfer: IDraftedTransferData) {
    this.transferId = draftedTransfer.transfer_id;
    this.transferWeek = draftedTransfer.transfer_week;
    this.currentTransferDateExpiry = draftedTransfer.current_transfer_date_expiry;
  }
}

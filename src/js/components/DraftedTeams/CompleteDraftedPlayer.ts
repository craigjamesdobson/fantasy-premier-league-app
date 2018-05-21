import { DraftedTransfer } from './DraftedTransfer';
import { Player } from '../Players/Player';
import { PlayerPositionShort } from '../Players/PlayerPosition';

export class CompleteDraftedPlayer {
  private readonly playerId: number;
  private readonly playerName: string;
  private readonly playerPosition: string;
  private readonly playerTeamId: number;
  private readonly playerTeamName: string;
  private readonly playerTeamShort: string;
  private readonly transfers: DraftedTransfer[];

  constructor(player: Player, transfers: DraftedTransfer[]) {
    this.playerId = player.id;
    this.playerName = player.name;
    this.playerPosition = PlayerPositionShort[player.playerType];
    this.playerTeamId = player.teamID;
    this.playerTeamName = player.teamName;
    this.playerTeamShort = player.teamShort;
    this.transfers = transfers;
  }
}

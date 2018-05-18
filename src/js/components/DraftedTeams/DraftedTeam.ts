import { IPlayerData } from '../Players/IPlayerData';
import { IPlayerDataElements } from '../Players/IPlayerDataElements';
import { Player } from '../Players/Player';
import { PlayerData } from '../Players/PlayerData';
import { PlayerPosition } from '../Players/PlayerPosition';

import { DraftedPlayer } from '../DraftedTeams/DraftedPlayer';
import { IDraftedPlayers } from '../DraftedTeams/IDraftedPlayers';
import { IDraftedTeamData } from '../DraftedTeams/IDraftedTeamData';
import { IDraftedTeamDataElements } from '../DraftedTeams/IDraftedTeamDataElements';

// Player class
export class DraftedTeam {
  public readonly teamID: number;
  public readonly teamName: string;
  public readonly teamPlayers: DraftedPlayer[];

  constructor(draftedTeam: IDraftedTeamDataElements) {
    this.teamID = draftedTeam.team_id;
    this.teamName = draftedTeam.team_name;
    this.teamPlayers = draftedTeam.team_players.map(x => new DraftedPlayer(x));
  }
}

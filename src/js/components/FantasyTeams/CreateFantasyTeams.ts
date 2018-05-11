import { IPlayerData } from '../Players/IPlayerData';
import { IPlayerDataElements } from '../Players/IPlayerDataElements';
import { Player } from '../Players/Player';
import { PlayerData } from '../Players/PlayerData';
import { PlayerPosition } from '../Players/PlayerPosition';

import { ITeamData } from '../FantasyTeams/ITeamData';
import { ITeamDataElements } from '../FantasyTeams/ITeamDataElements';
import { ITeamPlayers } from '../FantasyTeams/ITeamPlayers';
import { ITransferData } from '../FantasyTeams/ITransferData';

import FantasyTeams from '../../../../Data/FantasyTeams.json';

const fantasyTeams = (FantasyTeams as any).fantasy_teams;
let newFantasyTeam: any = [
  {
    team_players: []
  }
];

const newFantasyTeams: any = [];

export namespace CreateTeams {

  export function CreateTeam(newFantasyTeamsCallback: any) {
    PlayerData.getPlayerData((playerData: any) => {
      for (const team of fantasyTeams) {
        newFantasyTeam.unshift({
          team_id: team.team_id,
          team_name: team.team_name
        });

        for (const teamPlayer of team.team_players) {
          for (const player of playerData.players) {
            if (player.id === teamPlayer.player_id) {
              let playerPosition;

              switch (player.playerType) {
                case 1:
                  playerPosition = 'GK';
                  break;
                case 2:
                  playerPosition = 'DEF';
                  break;
                case 3:
                  playerPosition = 'MID';
                  break;
                case 4:
                  playerPosition = 'FWD';
                  break;
              }

              newFantasyTeam[1].team_players.push({
                player_id: player.id,
                player_name: player.name,
                player_teamshort: player.teamShort,
                player_type: player.player_type,
                player_position: playerPosition
              });
            }
          }
        }

        newFantasyTeams.push(newFantasyTeam);
        newFantasyTeam = [
          {
            team_players: []
          }
        ];
      }

      newFantasyTeamsCallback(newFantasyTeams);

    });
  }
}

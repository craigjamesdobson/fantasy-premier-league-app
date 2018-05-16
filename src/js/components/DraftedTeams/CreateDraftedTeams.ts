import { IPlayerData } from '../../components/Players/IPlayerData';
import { IPlayerDataElements } from '../../components/Players/IPlayerDataElements';
import { Player } from '../../components/Players/Player';
import { PlayerData } from '../../components/Players/PlayerData';

import { DraftedPlayer } from '../DraftedTeams/DraftedPlayer';
import { IDraftedPlayers } from '../DraftedTeams/IDraftedPlayers';
import { IDraftedTeamData } from '../DraftedTeams/IDraftedTeamData';
import { IDraftedTeamDataElements } from '../DraftedTeams/IDraftedTeamDataElements';
import { IDraftedTransferData } from '../DraftedTeams/IDraftedTransferData';
import { DraftedTeam } from './DraftedTeam';
import { PlayerPosition } from '../Players/PlayerPosition';

export namespace DraftedTeamData {
  // Declare variables
  // let draftedTeams = [];
  let draftedTeamUrl: string;
  let loadingState: boolean;
  let loadingOverlay: JQuery;

  export function getDraftedTeamData(draftedTeamCallback: any) {
    // Define variables
    loadingOverlay = $('.loading');
    loadingState = false;
    draftedTeamUrl = '/FantasyTeams.json';

    const pd = await PlayerData.getPlayerData();

    fetch(draftedTeamUrl)
      .then((data: Response) => {
        if (data.status !== 200) {
          Error(`Looks like there was a problem. Status Code:  ${data.status}`);
          return;
        }

        // Examine the text in the response
        data.json().then((draftedTeamData: IDraftedTeamData) => {
          // Hide the loading overlay
          loadingOverlay.hide();

          for (const draftedTeam of draftedTeamData.drafted_teams) {
            console.log(draftedTeam.team_players.id);
          }

          console.log(draftedTeamData);

          // Create callback with player data
          draftedTeamCallback(draftedTeamData);
        });
      })
      .catch((err: Error) => {
        // Hide the loading overlay
        loadingOverlay.hide();

        // Show alert error
        alert(`fetch error ${err}`);
      });
  }
}

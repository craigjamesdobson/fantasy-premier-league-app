import { IPlayerData } from '../../components/Players/IPlayerData';
import { IPlayerDataElements } from '../../components/Players/IPlayerDataElements';
import { Player } from '../../components/Players/Player';
import { PlayerData } from '../../components/Players/PlayerData';
import { PlayerPosition } from '../Players/PlayerPosition';

import { DraftedPlayer } from '../DraftedTeams/DraftedPlayer';
import { IDraftedPlayers } from '../DraftedTeams/IDraftedPlayers';
import { IDraftedTeamData } from '../DraftedTeams/IDraftedTeamData';
import { IDraftedTeamDataElements } from '../DraftedTeams/IDraftedTeamDataElements';
import { IDraftedTransferData } from '../DraftedTeams/IDraftedTransferData';
import { DraftedTeam } from './DraftedTeam';

export namespace DraftedTeamData {
  export async function getDraftedTeamData(): Promise<IDraftedTeamData> {
    return new Promise<any>((resolve, reject) => {
      // Define variables
      const loadingOverlay = $('.loading');
      const loadingState = false;
      const draftedTeamUrl = '/FantasyTeams.json';

      fetch(draftedTeamUrl)
        .then((data: Response) => {
          if (data.status !== 200) {
            Error(
              `Looks like there was a problem. Status Code:  ${data.status}`
            );
            return;
          }

          // Examine the text in the response
          data.json().then((draftedTeamData: IDraftedTeamData) => {
            // Hide the loading overlay
            loadingOverlay.hide();

            const draftedTeams = draftedTeamData.drafted_teams.map(draftedTeam => new DraftedTeam(draftedTeam));

            resolve(draftedTeams);
          });
        })
        .catch((err: Error) => {
          // Hide the loading overlay
          loadingOverlay.hide();

          // Show alert error
          alert(`fetch error ${err}`);
        });
    });
  }
}

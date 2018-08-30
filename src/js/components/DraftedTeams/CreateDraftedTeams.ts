import { DraftedTeam } from './DraftedTeam';
import { IDraftedTeamData } from '../DraftedTeams/IDraftedTeamData';

export namespace DraftedTeamData {
  export async function getDraftedTeamData(): Promise<DraftedTeam[]> {
    return new Promise<DraftedTeam[]>((resolve, reject) => {
      const draftedTeamUrl = './FantasyTeams.json';

      fetch(draftedTeamUrl)
        .then((data: Response) => {
          if (data.status !== 200) {
            reject(
              `Looks like there was a problem. Status Code:  ${data.status}`
            );
          }

          // Examine the text in the response
          data.json().then((draftedTeamData: IDraftedTeamData) => {

            const draftedTeamList = draftedTeamData.drafted_teams.map(
              draftedTeam => new DraftedTeam(draftedTeam)
            );

            resolve(draftedTeamList);
          });
        })
        .catch((err: Error) => {

          // Show alert error
          alert(`fetch error ${err}`);
        });
    });
  }
}

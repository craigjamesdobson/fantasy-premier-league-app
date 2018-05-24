import { GetStaticData } from '../StaticData/GetStaticData';

export namespace CreateTeamData {
  export async function createPlayerData() {
    const teamDataUrl =
      'https://jokecamp.github.io/epl-fantasy-geek/js/static-data.json';

    const staticData = await GetStaticData.getstaticData;

  }
}

import { IPlayerDataElements } from '../../components/Players/IPlayerDataElements';
import { PlayerPosition } from './PlayerPosition';

const imageUrl =
  'https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/p';

// Player class
export class Player {
  public readonly playerType: PlayerPosition;
  public readonly id: number;
  public readonly image: string;
  public readonly isUnavailable: boolean;
  public readonly unavailableForSeason: boolean;
  public readonly availabilityType: string;
  public readonly availabilityNews: string;
  public readonly teamID: number;
  public readonly teamName: string;
  public readonly teamShort: string;
  public readonly name: string;
  public readonly price: string;

  // Construct player objects
  constructor(player: IPlayerDataElements) {
    this.id = player.id;
    this.image = `${imageUrl + player.code}.png`;
    this.availabilityType = player.status;
    this.teamID = player.team;
    this.price = this.getPlayerCost(
      player.now_cost,
      player.cost_change_start_fall
    );
    this.name = player.web_name;
    this.playerType = player.element_type;

    // Create team name and team abbrevation objects depending on team ID
    switch (this.teamID) {
      case 1:
        this.teamName = 'Arsenal';
        this.teamShort = 'ARS';
        break;
      case 2:
        this.teamName = 'Aston Villa';
        this.teamShort = 'AST';
        break;
      case 3:
        this.teamName = 'Brentford';
        this.teamShort = 'BRE';
        break;
      case 4:
        this.teamName = 'Brighton and Hove Albion';
        this.teamShort = 'BHA';
        break;
      case 5:
        this.teamName = 'Burnley';
        this.teamShort = 'BUR';
        break;
      case 6:
        this.teamName = 'Chelsea';
        this.teamShort = 'CHE';
        break;
      case 7:
        this.teamName = 'Crystal Palace';
        this.teamShort = 'CRY';
        break;
      case 8:
        this.teamName = 'Everton';
        this.teamShort = 'EVE';
        break;
      case 9:
        this.teamName = 'Leeds';
        this.teamShort = 'LEE';
      case 10:
        this.teamName = 'Leicester';
        this.teamShort = 'LEI';
        break;
        break;
      case 11:
        this.teamName = 'Liverpool';
        this.teamShort = 'LIV';
        break;
      case 12:
        this.teamName = 'Manchester City';
        this.teamShort = 'MNC';
        break;
      case 13:
        this.teamName = 'Manchester United';
        this.teamShort = 'MNU';
        break;
      case 14:
        this.teamName = 'Newcastle';
        this.teamShort = 'NEW';
        break;
      case 15:
        this.teamName = 'Norwich';
        this.teamShort = 'NOR';
        break;
      case 16:
        this.teamName = 'Southampton';
        this.teamShort = 'SOU';
        break;
      case 17:
        this.teamName = 'Tottenham Hotspur';
        this.teamShort = 'TOT';
        break;
      case 18:
        this.teamName = 'Watford';
        this.teamShort = 'WAT';
        break;
      case 19:
        this.teamName = 'West Ham';
        this.teamShort = 'WHU';
        break;
      case 20:
        this.teamName = 'Wolves';
        this.teamShort = 'WOL';
        break;
    }

    // Create availability objects
    switch (true) {
      case this.availabilityType === 'i':
        this.availabilityType = 'temporary-unavailable';
        this.isUnavailable = true;
        this.availabilityNews = player.news;
        break;
      case this.availabilityType === 'u' || this.availabilityType === 'n':
        this.availabilityType = 'unavailable-for-season';
        this.isUnavailable = true;
        this.unavailableForSeason = true;
        this.availabilityNews = player.news;
        break;
      default:
        this.isUnavailable = false;
        this.availabilityType = 'available';
        this.unavailableForSeason = false;
    }
  }

  // Calculate out the cost using the paramaters now and change
  private getPlayerCost(now: number, change: number): string {
    return ((now + change) / 10).toFixed(1);
  }
}

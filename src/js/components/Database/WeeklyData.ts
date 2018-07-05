import Dexie from 'dexie';
import swal from 'sweetalert2';

export function storeWeeklyData() {
  interface IFriend {
    id: number;
    goalsScored: number;
    redCard: boolean;
    cleanSheet: boolean;
  }
  const currentWeek = $('.week-dropdown')
    .find(':selected')
    .text().toUpperCase();

  class WeeklyData extends Dexie {
    public players: Dexie.Table<IFriend, number>;

    constructor() {
      super(`${currentWeek} data`);
      this.version(1).stores({
        players: '++id,name,redCard,cleanSheet'
      });
    }
  }

  const db = new WeeklyData();

  db.players.clear();

  const players = [
    { id: 1, goalsScored: 1, redCard: true, cleanSheet: true },
    { id: 2, goalsScored: 2, redCard: false, cleanSheet: false },
    { id: 3, goalsScored: 0, redCard: true, cleanSheet: false }
  ];

  db.players
    .bulkAdd(players)
    .then(() => {
        swal({
            position: 'top-right',
            type: 'success',
            html: `<h4><b>${currentWeek}</b> data has been saved</h4>`,
            showConfirmButton: false,
            timer: 3000
          });
    })
    .catch(e => {
      alert('error: ' + e.stack || e);
    });
}

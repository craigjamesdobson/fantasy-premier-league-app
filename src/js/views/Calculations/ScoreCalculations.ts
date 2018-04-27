import * as $ from "jquery";
import { CreateTeams } from "../../components/CreatedTeams/CreateTeams";

namespace ScoreCalculations {

    export function init() {

        CreateTeams.CreateTeam();

    }
}
$(() => ScoreCalculations.init());

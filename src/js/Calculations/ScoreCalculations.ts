import * as $ from "jquery";
import { CreateTeams } from "../Calculations/CreateTeams";

namespace ScoreCalculations {

    export function init() {

        CreateTeams.CreateTeam();

    }
}
$(() => ScoreCalculations.init());

export var FixturePopulation;
(function (FixturePopulation) {
    function getfixturePopulation(event) {
        var selectedTeam = $(this).find(':selected').text();
        var playerTableClass = "." + $(this).parent().attr('class') + "-players";
        var selectedFixture = "#" + $(this).closest('.fixtures').attr('id');
        var playerTable = selectedFixture + ' .' + $(this).parent().attr('class') + '-players' + ' table';
    }
    FixturePopulation.getfixturePopulation = getfixturePopulation;
})(FixturePopulation || (FixturePopulation = {}));
//# sourceMappingURL=FixturePopulation.js.map
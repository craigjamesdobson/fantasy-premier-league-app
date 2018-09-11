import { Position } from './Positions';
import { PositionList } from './PositionList';
export var CreatePositionData;
(function (CreatePositionData) {
    function createPositionData(data) {
        var positions = data.element_types.map(function (position) { return new Position(position); });
        var positionList = new PositionList(positions);
        return positionList;
    }
    CreatePositionData.createPositionData = createPositionData;
})(CreatePositionData || (CreatePositionData = {}));
//# sourceMappingURL=CreatePositionData.js.map
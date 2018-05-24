import 'bootstrap';
import '../scss/styles.scss';
import { GetStaticData } from './components/StaticData/GetStaticData';
var loadingGif = require('../img/loading.gif');
GetStaticData.getstaticData().then(function (data) { return init(data); });
function init(data) {
}
;
//# sourceMappingURL=Index.js.map
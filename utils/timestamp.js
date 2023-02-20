const moment = require("moment");

module.exports = function(time){
    return moment(time).format('MMMM Do YYYY, h:mm:ss a');
}

const{ format} = require('timeago.js');
const helpers = {}

helpers.timeago = (timestamp)=>{
    // const g = "0000-00-04T04:00:00.000Z"
    // 2022-04-14T03:44:11.000Z
    // return format(timestamp-g);
    return format(timestamp);
}

export default helpers;
import { Meteor } from 'meteor/meteor';

import {Timer} from '../imports/api/tasks.js';
import {Table} from '../imports/api/tasks.js';

Meteor.startup(() => {
    //counter value
//    if (Timer.find().count() == 0) {
//      Timer.insert( {number:1} ); //initialize count value 1
//    }
    //SyncedCron.start(); //call syncronization function


//SyncedCron.add({  //added with code 'meteor add percolate:synced-cron'
//    name: 'Constantly update counter',
//    schedule: function(parser) {  //parser is a later.parse object
//      return parser.text('every 5 sec'); //run function every second
//    },
//    job: function() {
//     var record = Timer.findOne();
//      var number = record.number;
//      number += 1;

//      return Timer.update({_id: record._id}, {$set: {number: number}});
//   },
});




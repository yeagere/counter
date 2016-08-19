import { Template } from 'meteor/templating';

import './main.html';

import { Timer } from '../imports/api/tasks.js';

Template.timer.helpers({
    seconds: function() {
        var currentTime = Timer.findOne();
        return currentTime.number;
    }
});


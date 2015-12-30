// reddit.com/r/dailyprogrammer/wiki/challenges
// [2/9/12] Challenge #1 [Intermediate]

var event = function(item, hour){
    this.item = item;
    this.hour = hour;
    this.toString = function() {
        return item + " [" + hour + ":00]";
    };
};

var Events = (function(){
    var calendar = [];
    var returnObj = {
        edit: function(item, hour, updatedItem, updatedHour){
            for (var i = 0; i < calendar.length; i++){
                if (calendar[i].item === item && calendar[i].hour === hour){
                    this.remove(item, hour);
                    this.add(updatedItem, updatedHour);
                    return;
                }
            }
            console.log("Could not find \"" + item + "\" at hour " + hour + " to edit.");
        },

        add: function(item, hour){
            if (hour >= 24) {
                console.log("Error: cannot add \"" + item + "\".\nHour value " + hour + " is equal or greater to 24.");
                return;
            }
            var toBeAdded = new event(item, hour);
            if (calendar.length === 0) {
                calendar.push(toBeAdded);
            } else {
                for (var i = 0; i < calendar.length; i++) {
                    if (toBeAdded.hour < calendar[i].hour) {
                        calendar.splice(i, 0, toBeAdded);
                        return;
                    }
                }
                calendar.push(toBeAdded);
            }
        },

        remove: function(item, hour){
            for (var i = 0; i < calendar.length; i++) {
                if (calendar[i].item === item && calendar[i].hour === hour){
                    calendar.splice(i, 1);
                    return;
                }
            }
        },

        printCal: function(){
            calendar.forEach(function(each){
                console.log(each.toString());
            });
        }

    };

    return returnObj;
})();

var test = Object.create(Events);

test.add("Mop the floors", 25);
test.add("Clean the car", 2);
test.add("Wash the dog", 9);
test.add("Cook dinner", 1);
test.remove("Clean the car", 2);
test.printCal();
console.log("\n");
test.edit("Do other thing", 1, "Wash dirty laundry", 2);
test.printCal();
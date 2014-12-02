define(['jquery'], function ($) {
    // object constructor
    function Vehicle(weight, colour) {
        this.weight = weight;
        this.colour = colour;
    }

    function print(obj) {
        var prop;

        console.debug(obj);
        for (prop in obj) {
            //noinspection JSUnfilteredForInLoop
            console.debug(obj.hasOwnProperty(prop), prop, obj[prop]);
        }

        $.each(obj, function (key, value) {
            console.debug(key, value);
        });
    }

    function main() {
        var arr, car;

        // first we see what happens on an Object
        // use the new keyword to create new object from the Vehicle prototype
        car = new Vehicle(1000, 'red');
        car.added1 = 'added to object';
        Vehicle.prototype.added2 = 'added to prototype';
//      jQuery.each is smart, in this case it will iterate both added1 and added2
        print(car);

        // secondly we try the same with an Array
        arr = [4, 2, 3, 1];
        arr.added1 = 'added to array object';
        // this can be done is a part of a lib where you don't have control over.
        Array.prototype.added2 = 'added to prototype';
//      jQuery.each is even smarter!, in this case it will iterate neither added1
//      nor added2, but only the actual array values
        print(arr);
    }

    return main;
});
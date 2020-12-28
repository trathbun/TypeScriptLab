"use strict";
var mountains = [
    { name: "Kilimanjaro",
        height: 19341 },
    { name: "Everest",
        height: 29029 },
    { name: "Denali",
        height: 20310 }
];
function findNameOfTallestMountain(array) {
    var tallest = array[0].name;
    var highest = array[0].height;
    for (var i = 1; i < array.length; i++) {
        if (array[i].height > highest) {
            highest = array[i].height;
            tallest = array[i].name;
        }
    }
    console.log(tallest);
    return tallest;
}
findNameOfTallestMountain(mountains);
var products = [
    { name: "Video Game",
        price: 60 },
    { name: "Toy",
        price: 20 },
    { name: "Computer",
        price: 800 },
    { name: "Router",
        price: 200 }
];
function calcAverageProdcutPrice(array) {
    var average = 0;
    var totalCost = 0;
    if (array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            totalCost += array[i].price;
        }
        average = totalCost / array.length;
    }
    else {
        console.log(average);
        return average;
    }
    console.log(average);
    return average;
}
calcAverageProdcutPrice(products);
var inventory = [
    { name: "motor",
        price: 10.00,
        quantity: 10 },
    { name: "sensor",
        price: 12.50,
        quantity: 4 },
    { name: "LED",
        price: 1.00,
        quantity: 20 },
];
function calcInventoryValue(array) {
    var value = 0;
    var itemValue = 0;
    if (array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            itemValue = array[i].price * array[i].quantity;
            value += itemValue;
        }
    }
    else {
        console.log(value);
        return value;
    }
    console.log(value);
    return value;
}
calcInventoryValue(inventory);

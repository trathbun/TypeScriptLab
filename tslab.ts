interface Mountain {
    name: string;
    height: number;
}

const mountains:Mountain[] =[
    {name: "Kilimanjaro",
     height: 19341},
    
    {name: "Everest",
    height: 29029},

    {name: "Denali", 
    height: 20310}

];

function findNameOfTallestMountain(array:Mountain[]):string{
    let tallest = array[0].name;
    let highest = array[0].height;
  
   for (let i = 1; i < array.length; i++) {
        if(array[i].height > highest){
            highest = array[i].height;
            tallest = array[i].name;
        }
    }
    console.log(tallest);
    return tallest; 
}

findNameOfTallestMountain(mountains);

interface Product {
    name: string;
    price: number;
}

const products:Product[] =[
    {name: "Video Game",
     price: 60},
    
    {name: "Toy",
    price: 20},

    {name: "Computer", 
    price: 800},

    {name: "Router",
    price: 200}
];


function calcAverageProdcutPrice(array:Product[]):number{
    let average = 0;
    let totalCost = 0;
    
    if(array.length > 0){

    for (let i = 0; i < array.length; i++) {
        totalCost += array[i].price;
    }
    average = totalCost/array.length;
    
    }else{
        console.log(average);
        return average;
    }

    console.log(average);
    return average;
}

calcAverageProdcutPrice(products);


interface InventoryItem extends Product{
    quantity: number;
}

const inventory:InventoryItem[] =[
    {name:"motor",
     price: 10.00,
     quantity: 10},
    
    {name: "sensor",
    price: 12.50,
    quantity: 4},

    {name: "LED", 
    price: 1.00,
    quantity: 20},
];

function calcInventoryValue(array:InventoryItem[]):number{
    let value = 0;
    let itemValue = 0;

    if(array.length > 0){

        for (let i = 0; i < array.length; i++) {
            itemValue = array[i].price * array[i].quantity;
            value += itemValue;
        }
        
        }else{
            console.log(value);
            return value;
        }
    console.log(value);
    return value;
}

calcInventoryValue(inventory);

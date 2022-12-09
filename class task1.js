class Huawei{
    constructor (model, year, color, mem, ram){
        this.model = model;
        this.year = year;
        this.color = color;
        this.mem = mem
        this.brand = 'Huawei';
    }
}

class Xiaomi{
    constructor (model, year, color, mem, ram){
        this.model = model;
        this.year = year;
        this.color = color;
        this.mem = mem
        this.brand = 'Xiaomi';
    }
}

class Asus{
    constructor (model, year, color, mem, ram){
        this.model = model;
        this.year = year;
        this.color = color;
        this.mem = mem
        this.brand = 'Asus';
    }
}

console.log(new Huawei('P30',2019,'Aurora',128))
console.log(new Xiaomi('POCO X3',2020,'Blue',128))
console.log(new Asus('Asus ROG Phone 6',2022,'Phantom Black',128))

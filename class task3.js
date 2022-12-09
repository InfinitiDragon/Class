class smartphone{
    constructor(model, year, color, mem){
        this.model = model;
        this.year = year;
        this.color = color;
        this.mem = mem
    }
}

class Huawei extends smartphone{
    constructor(model, year, color, mem) {
        super(model, year, color, mem)
        this.brand = 'Huawei';
    }
}

class Xiaomi extends smartphone{
    constructor(model, year, color, mem) {
        super(model, year, color, mem)
        this.brand = 'Xiaomi';
    }
}

class Asus extends smartphone{
    constructor(model, year, color, mem) {
        super(model, year, color, mem)
        this.brand = 'Asus';
    }
}

console.log(new Huawei('P30',2019,'Aurora',128))
console.log(new Xiaomi('POCO X3',2020,'Blue',128))
console.log(new Asus('Asus ROG Phone 6',2022,'Phantom Black',128))
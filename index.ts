
// task 1 Capital text
console.log("TASK 1 Capital Text");
function capitle(str) {
    const word = str.split('');
    for (let i = 0; i < word.length; i++) {
        if (word[i].length > 0) {
            word[i] = word[i].charAt(0).toUpperCase()
        }

    } return word.join('');
}
//example
const smallstr = "It work";
const capitalstr = capitle(smallstr);
console.log("original text : " + smallstr);
console.log("capital text : " + capitalstr);

// task 2 Validate number
console.log("TASK 2 Validate Number");
function validateNum(num) {

    if (typeof num === 'number') {
        return true;
    } else { return false }


}
//example
console.log("Is 3 number?  " + validateNum(3));
console.log("Is R number?  " + validateNum("R"));

// task3 Create a User System
console.log("TASK 3 Create a User System");


interface User {
    id: number;
    name: string;
    email: string;
    isAdmin?: boolean;
}

function createUser(user: User): string {
    return `User ${user.name} created successfully`;
}

// Example usage:
console.log(createUser({
    id: 1,
    name: "REHAM ALSAEDI",
    email: "rehamalsaedi@gmail.com"
}));

//task  4 Create a class Product 
console.log("TASK 3 Create a User System");

class Product {

    private name: string;
    private price: number;
    private category: string;

    // Constructor 
    constructor(name: string, price: number, category: string) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    public afterDiscountedPrice(discount: number) {
        return this.price - (this.price * discount) / 100;
    }

}
//create obj and example
const product = new Product("glasses", 500, "eyeGlasses");
console.log(product + "Price Discount 50% : $", product.afterDiscountedPrice(10));

//task 5 filterArray so it remain just MultiplesOfFive
console.log("TASK 5 filter array so it remain just Multiples of five");
function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
    return arr.filter(predicate);
}
//exampple
const numbers = [10, 20, 34, 45, 56, 68];
const MultiplesOfFive = filterArray(numbers, (num) => num % 5 === 0);
console.log("Array before filtring " + numbers);
console.log("Array after filtring so it remain just MultiplesOfFive "+ MultiplesOfFive);


//task 6 Fetch & Display Users
console.log("TASK 6 Fetch & Display Users");

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data received"), 20);
    });
};

// Async function to get data
const getData = async () => {
    let response = await fetchData(); 
    console.log(response);
};
getData();

// Fetch users from API
const getUsers = async () => {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};

getUsers();

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// task 1 Capital text
console.log("TASK 1 Capital Text");
function capitle(str) {
    var word = str.split('');
    for (var i = 0; i < word.length; i++) {
        if (word[i].length > 0) {
            word[i] = word[i].charAt(0).toUpperCase();
        }
    }
    return word.join('');
}
//example
var smallstr = "It work";
var capitalstr = capitle(smallstr);
console.log("original text : " + smallstr);
console.log("capital text : " + capitalstr);
// task 2 Validate number
console.log("TASK 2 Validate Number");
function validateNum(num) {
    if (typeof num === 'number') {
        return true;
    }
    else {
        return false;
    }
}
//example
console.log("Is 3 number?  " + validateNum(3));
console.log("Is R number?  " + validateNum("R"));
// task3 Create a User System
console.log("TASK 3 Create a User System");
function createUser(user) {
    return "User ".concat(user.name, " created successfully");
}
// Example usage:
console.log(createUser({
    id: 1,
    name: "REHAM ALSAEDI",
    email: "rehamalsaedi@gmail.com"
}));
//task  4 Create a class Product 
console.log("TASK 3 Create a User System");
var Product = /** @class */ (function () {
    // Constructor 
    function Product(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    Product.prototype.afterDiscountedPrice = function (discount) {
        return this.price - (this.price * discount) / 100;
    };
    return Product;
}());
//create obj and example
var product = new Product("glasses", 500, "eyeGlasses");
console.log(product + "Price Discount 50% : $", product.afterDiscountedPrice(10));
//task 5 filterArray so it remain just MultiplesOfFive
console.log("TASK 5 filter array so it remain just Multiples of five");
function filterArray(arr, predicate) {
    return arr.filter(predicate);
}
//exampple
var numbers = [10, 20, 34, 45, 56, 68];
var MultiplesOfFive = filterArray(numbers, function (num) { return num % 5 === 0; });
console.log("Array before filtring " + numbers);
console.log("Array after filtring so it remain just MultiplesOfFive " + MultiplesOfFive);
//task 6 Fetch & Display Users
console.log("TASK 6 Fetch & Display Users");
var fetchData = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { return resolve("Data received"); }, 20);
    });
};
// Async function to get data
var getData = function () { return __awaiter(_this, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchData()];
            case 1:
                response = _a.sent();
                console.log(response);
                return [2 /*return*/];
        }
    });
}); };
getData();
// Fetch users from API
var getUsers = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/users")];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                console.log(data);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error("Error fetching users:", error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
getUsers();

// // Object creation
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log("Company CEO name is: " 
//   + company.ceo.firstName);

// console.log(company["name"]);
// var stockPropName = "stock of company";
// company[stockPropName] = 110;

// console.log("Stock price is: " + 
//   company[stockPropName]);

// // Better way: object literal
// var facebook = {
//   name: "Facebook",
//   ceo: {
//     firstName: "Mark",
//     favColor: "blue"
//   },
//   "stock of company": 110
// };

// console.log(facebook.ceo.firstName);

// var a = 0;
// console.log(a + 1);
// var element = new Object();
// 	element.av = "Аудио и видео";
// 	element.it = "Цифра";
// 	element.it = new Object();
// 	element.it.notebook = "Ноутбуки";
// 	element.it.photo = "Фотоаппараты";
// 	console.log(element);
// 	console.log("В IT отделе имеются " + element.it.notebook + " и " + element.it.photo + ".");

var el = {
	otdel: {
	oav: "АВ",
		oit: "Цифра",
		it: {
			notebook: "Ноутбуки",
			phone: "Телефоны",
			photo: "Фотоаппараты",
			komp: "Компьютеры"
		},
		av: {
			tv: "Телевизоры",
			audio: "Аудиотехника",
			auto: "Автомобильная техника"
		},
		ombt: "МБТ",
		okbt: "КБТ"
	},
	"plan of cell": 800000
}

console.log("Отделы 5 элемента: " + el.otdel.oit + ", " + el.otdel.oav + ", " + el.otdel.ombt + " и " + 
	el.otdel.okbt + ".");
console.log("В ИТ отделе продаются: " + el.otdel.it.notebook + ", " + el.otdel.it.phone
 + ", " + el.otdel.it.photo + ", " + el.otdel.it.komp + ".")



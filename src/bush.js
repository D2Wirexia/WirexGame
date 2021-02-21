/*Продублировать первый и второй индекс массива и тд.*/
const arrDuplication = [7, 3, 1, 4, 5, 0, 0, 0, 0, 2 ,4, 3, 5 ,4 ,4 ,4, 3, 1, 2];
function duplicationArr(arr){
	if(arr.length % 2 !== 0){
		arr.push(arr[arr.length-1])
	}
	for(let i = arr.length-1; i >= 0; i--) {
		arr[i] = arr[Math.floor(i/2)];
	}
	return arr.splice(0, arr.length/2);
};
console.log(duplicationArr(arrDuplication));

/*Выводить истину, если есть повторения*/
const existsDuplicate1 = [3, 5, 7, 7];
const existsDuplicate2 = [3, 6, 5, 7];
function existsDuplicate(num) {
	let countDup = 0;
	for(let i = 0; i < num.length; i++){
		for( let j = i+1; j < num.length; j++){
			if(num[i] === num[j]){
				countDup++;
			}
		}
	}
	return countDup > 0;
}
console.log(existsDuplicate(existsDuplicate1));
console.log(existsDuplicate(existsDuplicate2));

/*Расширить прототип функции и удалять индексы массива*/
Array.prototype.except = function (num) {
	return arrayPropotype.filter(( _, i) => ![].concat(num).includes(i))
	/*let messDel = [];
	if(typeof num === 'object'){
		for(let i = 0; i < num.length; i++){
			messDel.push(num[i]);
		}
	}else{
		messDel.push(num);
	}

	for(let i = 0; i < messDel.length; i++){
		arrayPropotype.splice(messDel[i], messDel[i]);
	}
	return arrayPropotype;*/
};
const arrayPropotype = ['a', 'b', 'c', 'd', 'e'];
console.log(arrayPropotype.except([1, 3])); //['a', 'c', 'e']
console.log(arrayPropotype.except(2));	//['a', 'b', 'd', 'e']

/*Вернуть новый объект со значеями равным отзеркалившим ключам*/
const mirror = obj => {
	let newObj = new Object();
	let nameKey;
	let arrMirrorNameKey = [];
	for(let key in obj){
		nameKey = String(key);
		for(let i=0; i< nameKey.length; i++){
			arrMirrorNameKey.push(nameKey[i]);
		}
		newObj[key] = arrMirrorNameKey.reverse().join('');
		arrMirrorNameKey = [];
	}
	return newObj
};
console.log(mirror({
	abc: undefined,
	zxc: undefined,
	wirexia: undefined,
	'4ika-T9IH': undefined,
}));

/*Написать функцию, которая выводит сумму всех нечетных чисел больше нуля*/
function calculate(arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++){
		if(arr[i]%2 !== 0 && arr[i] > 0){
			sum += arr[i];
		}
	}
	return sum
}
const arrForCalculate = [0, -3, 5, 21, 6, -2]; //26
console.log(calculate(arrForCalculate));

/*У Каринки были пиздатые каникулы, она посетила много стран и хорошо там повеселилась, но вот не
 задача, наша Каринка хотела повыебываться друзьям своими подвигами, но забыла очередность
  стран в которых была. Давайте напишем функцию, которая вместо Каринки выяснит очередность
   городов и выведет результат. Примечание: у нас есть все билетов Карины в виде массива, нужно
    построить цепочку городов в которых она побывала.*/
function travelCity(arr) {
	let arrCity = [];
	let firstCity = arr[0][0];
	for(let i = 0; i < arr.length; i++){
		if(firstCity === arr[i][1]){
			firstCity = arr[i][0];
		}
	}
	let city = firstCity;
	arrCity.push(city);
	while (arrCity.length < arr.length+1){
		for(let i = 0; i < arr.length; i++){
			if(city === arr[i][0]){
				city = arr[i][1];
				arrCity.push(arr[i][1]);
			}
		}
	}
	return arrCity;
}
const arrBilets = [
	['New York', 'Kiev'],
	['Paris', 'New York'],
	['Kiev', 'Varshava'],
	['Varshava', 'Berlin'],
	['London', 'Paris'],
];
console.log(travelCity(arrBilets));	//London, Paris, New York, Kiev, Varshava, Berlin

/*В функцие есть массив чисел и число Х. Напишите функцию которая выведит true, если сумма 2х
 чисел из масива равна Х или false, если таковых нету*/
function check(arr, x) {
	let result = false;
	for(let i = 0; i < arr.length; i++){
		for (let j = i + 1; j < arr.length; j++){
			if (arr[i] + arr[j] === x){
				result = true
			}
		}
	}
	return result;
}
console.log(check([2, 3, 8, 12], 15)); //true

/*В функцию приходит число, нужно вернуть сумму всех его цифр*/
function sumDigits(sum) {
	let x = 0;
	for (let i = 0; i < String(sum).length; i++){
		x += Number(String(sum)[i]);
	}
	return x;
}
console.log(sumDigits(6345)); //18

/*Tinker Task*/
const March_of_the_Machines = {
	size: {
		x: 50,							//ширина робота
		y: 50								//высота робота
	},
	distance: {
		x: 800,							//ширина зоны
		y: 800							//высота зоны
	},
	count: 20,							//колиество роботов
	duration: 8,						//длительность появления роботов
	speed: 300,							//скорость движения роботов
	count_iterations_min: 4,		//минимальное количество появившихся роботов одновременно
	count_iterations_max: 7,		//максимальное количество появившихся роботов одновременно
	margin: 50,							//растояния между роботами (друг от друга)
};

let startMarch = (March_of_the_Machines) => {

};

startMarch(March_of_the_Machines);
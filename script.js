'use srict'

//Задания №1

function searchArrayWord(word, array){
    for(i = 0; i < array.length; i++ ){
        if(array[i] == word){
            return true;
        }
    }
    return false;
};
let array = ['Кот', 'Собака', 'Жираф'];
console.log(searchArrayWord('Кот', array));

//Задвнния №2
 function averageNumber(arr){
     let sumNum = 0;
     for(i = 0; i < arr.length; i++ ){
        sumNum = sumNum + arr[i];
     }

     return sumNum / arr.length;
 }

 let arr = [1, 2, 3, 7, 6, 9];
 console.log(averageNumber(arr));


//Задание №3

function revArr(arr2){
    let result = [];
    for(i = 0; i < arr2.length; i++ ){
        result.unshift(arr2[i]);
    }
    return result;
}

let arr2 = [1, 3, 5, 6, 7, 9];
console.log(revArr(arr2));

//Задание №4

function getArrKey(obj){
    let arrKey = [];
    for(let key in obj){
        arrKey.push(obj[key]);
    }

    return arrKey;
}
let obj = {html:'HTML', css: 'CSS', js: 'ECMA'};

console.log(getArrKey(obj));

//Задание №5

let obj2 = {
    'nameUsers' : 'Иван',
    'phone' : '380951234567',
    'adress' : 'Полтава',
    'totalPrise' : '830',
    'totalWeight' : '2700',
    'bayGoods' : [
        {
            'nameGoods' : 'чашка',
            'prise': '100',
            'weight' : '200'
        },

        {
            'nameGoods' : 'ложка',
            'prise': '30',
            'weight' : '100'
        },

        {
            'nameGoods' : 'чайник',
            'prise': '550',
            'weight' : '2000'
        },

        {
            'nameGoods' : 'кружка',
            'prise': '150',
            'weight' : '400'
        }            
    ]         
};



 



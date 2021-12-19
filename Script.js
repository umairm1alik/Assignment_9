//Program 1
let items1="";
let arr1=[2,4,5,6,3,"Umair", 4,5];
arr1.forEach(readArray);
document.getElementById("elementOfArray").innerHTML=items1;

function readArray(element, index){
    
    items1 +=`${index} : ${element} <br>`;
    
}

// Program 2
let arr2=[0,3,-5,6,-2,-23,4,6,7,-1];
let items2="";
arr2.forEach(printNegativeElement);
document.getElementById("negativeElementOfArray").innerHTML=items2;
function printNegativeElement(element, index){
    if(element<0){

        items2 +=`${index} : ${element} <br>`;
    }
}

// Program 3
let arr3=[2,3,5,-4,5,9];
function sumOfArrayElements(element){
    let sum=0;
    for(let i=0; i<arr3.length; i++){
        
        
        sum +=arr3[i];
        
    }
    document.getElementById("sumOfArrayElements").innerHTML=`<h4>Sum Of Array Elements is : ${sum} </h4>`;
}
sumOfArrayElements();

// Program 4
let arr4=[4,-5,6,8,-2,3,-9,7,5,6,5];
let min=arr4[0];
let max=arr4[0];
function min_maxFromArray(){

    for(let i=0; i<arr4.length; i++){
        
        if(min>arr4[i]){
            min=arr4[i];
        }else if(max<arr4[i]){
            max=arr4[i];
        }
    }
    document.getElementById("minElement").innerHTML=`<h4>Minimum Element in array is : ${min} </h4>`;
    document.getElementById("maxElement").innerHTML=`<h4>Maximum Element in array is : ${max} </h4>`;
}
min_maxFromArray();

// Program 5
let secondLargest=arr4[0];
function secLargest(){

    for(let i=0; i<arr4.length; i++){
            if(max<arr4[i]){
             
                max=arr4[i];
            }
            for(let j=0; j<arr4.length; j++){
                if(secondLargest < arr4[j] && arr4[j]<max){
                    secondLargest=arr4[j];
                }
            }

    document.getElementById("secMaxElement").innerHTML=`<h4>Second Largest Element in array is : ${secondLargest} </h4>`;

    }
}
secLargest();

// Program 6
let arr5=[2,3,5,6,2,2,9,8,7];
function count_even_odd(){

let countEven=0;
let countOdd=0;
    for(let i=0; i<arr5.length; i++){
        if(arr5[i] % 2 ==0){
        countEven++;
        }else if(arr5[i] % 2==1){
        countOdd++;
        }
    }
    document.getElementById("countEven").innerHTML=`<h4>Number of Even Elements in array is : ${countEven} </h4>`;
    document.getElementById("countOdd").innerHTML=`<h4>Number of Odd Elements in array is : ${countOdd} </h4>`;
}
count_even_odd();

// Program 7
let arr6=[3,5,-6,4,-7,2,-3,-5,6,7,-9];
function countNegElement(){
    let countNeg=0;
    for(let i=0; i<arr6.length; i++){
        if(arr6[i] < 0){
            countNeg++;
        }
    }
    document.getElementById("negElement").innerHTML=`<h4>Number of Negative Elements in array is : ${countNeg} </h4>`;
}
countNegElement();

// Program 8
let arr7=[3,-2,4,-3,6,7,8,-6,6,5,1];
function copyArrayElement(){
    
    let copiedArr=arr7.slice(0, arr7.length);
    document.getElementById("copied").innerHTML=`<h4>Copied array is :${copiedArr}</h4>`;
}
copyArrayElement();

// Program 9
let arr8=[3,4,6,8,1,2,9,6];
function insertInArray(){

    let atEnd=arr8.push(5);
    document.getElementById("atEnd").innerHTML=`After Insertion at end: ${arr8}`;

    let anywhere=arr8.splice(3,0, "Umair", "Shahzad");
    document.getElementById("specifiedLocation").innerHTML=`After Insertion At Specified Location : ${arr8}`
    
    let atStart=arr8.unshift(1);
    document.getElementById("atStart").innerHTML=`After Insertion at Start : ${arr8}`;


}

insertInArray();

// program 10
let arr9=[3,4,6,8,"Umair",1,"Shahzad",2,9,6];
function remove(){

    arr9.splice(4,3);
    document.getElementById("remove").innerHTML=`After Removal from specified Location : ${arr9}`;

}
remove();

// Program 11
let arr10=[2,3,5,6,2,3,5,3,2,3,6,4];
let alreadyTraversed;
let countFreq=0;
function frequencyCheck(){
    for(let i=0; i<arr10.length; i++){
        
        for(let j=0; j<arr10.length; j++){
            if(arr10[i] == arr10[j] ){
                
                countFreq++;

                          
            }
            
        }
        alreadyTraversed=arr10[i];
           
        console.log(`frequency of ${alreadyTraversed} is : ${countFreq}`);
        
        
        countFreq=0;
    }
    
}
frequencyCheck();

// Program 12
let arr11=[2,3,5,6,2,"Umair",3,5,7,3,2,3,6]
function findUniqueElement(){

    for(let i=0; i<arr11.length; i++){

        if(isNaN(arr11[i])){

            document.getElementById("unique").innerHTML=`Element which is unique : ${arr11[i]}`;            
        }
     }
    
}
findUniqueElement();

// Program 13

let arr12=[1,3,4,5,5,6,6,1,4];
let countDup=0;
function findDuplicate(){

    for(let i=0; i<arr12.length; i++){
        for(let j=i+1; j<arr12.length; j++){
            if(arr12[i] == arr12[j]){
                countDup++;
                
            }
            
        }
        
        
    }
    document.getElementById("duplicate").innerHTML=`Total number of duplicate elements are: ${countDup}`
}
findDuplicate();

// Program 14
var arr13 = [2,4,5,2,1,1,4,5,7,8,7];
function deleteDuplicate() {

    for (let i = 0; i < arr13.length; i++) {
        for (let j = i + 1; j < arr13.length; j++) {
            if (arr13[i] == arr13[j]) {
                arr13.splice(j, 1)
            }

        }
    }
    document.getElementById("delDuplicate").innerHTML=`Array after Deletion of duplicate elements: ${arr13}`
}

deleteDuplicate()

// Program 15
let arr14=[1,2,3,4,5,6];
let arr15=[7,8,9,10,11];
function mergeArray(){
    let arr16=[`${arr14},${arr15}`];
    document.getElementById("mergeArray").innerHTML=`Arrays after merging two into one: ${arr16}`;

}
mergeArray(); 

// Program 16
let arr17=[1,2,3,4,5,6,7,8,9];
let reverseArray=[];
function reverseArr(){

    for(let i=arr17.length-1; i>=0; i--){
        reverseArray.push(arr17[i]);
        
    }
    document.getElementById("reverseOfArr").innerHTML=`Reverse of Array is: ${reverseArray}`;
}
   
reverseArr();

// Program 17
let arr18=[1,2,3,4,2,7,5,9,8,6,5,4,3,8];
let arrOfOddEle=[];
let arrOfEvenEle=[];

function FunToSeprate_Even_Odd(){
    for(let i=0; i<arr18.length; i++){
        if(arr18[i]%2 == 1){
            arrOfOddEle.push(arr18[i]);
        }else if(arr18[i]%2 == 0){
            arrOfEvenEle.push(arr18[i]);
        }
    }
    document.getElementById("arrOfOdd").innerHTML=`Array of Odd Elements: ${arrOfOddEle}`;
    document.getElementById("arrOfEven").innerHTML=`Array of Even Elements: ${arrOfEvenEle}`;

}
FunToSeprate_Even_Odd();

// Program 18
let arr19=[2,3,4,6,"search",7,8,3,2,5];
let index;
function searchElement(x){

    for(let i=0;i<arr19.length; i++){

        if(arr19[i]==x){
            index=i;
            document.getElementById("reqElement").innerHTML=`Required Element "${x}" is at index: ${index}`;
        }
    }
    
    
}
searchElement("search");

// Program 19
let arr20=[3,4,2,5,6,2,4,7,5,9,0,2,3];
for(var i=0; i<arr20.length; i++){
    var swap=arr20[i];
    for(var j=i-1; j>=0 && (arr20[j] > swap); j--){
        arr20[j+1]=arr20[j];
    }
    arr20[j+1]=swap;
}
document.getElementById("ascending").innerHTML=`Array in ascending order: ${arr20}`;

// Program 20
for(var i=0; i<arr20.length; i++){
    var swap=arr20[i];
    for(var j=i-1; j>=0 && (arr20[j] < swap); j--){
        arr20[j+1]=arr20[j];
    }
    arr20[j+1]=swap;
}
document.getElementById("descending").innerHTML=`Array in descending order: ${arr20}`;




//1
// var x;
// x=Number( window.prompt("Enter Number:"));
// console.log(x);


//2
// var x;
//  x=Number( window.prompt("Enter Number:"));
//  if(x%3==0&&x%4==0){
//     console.log("YES");
//  }
//  else{
//     console.log("NO");
//  }



//3
// var x;
// var y;
//  x=Number( window.prompt("Enter Number:"));
//  y=Number( window.prompt("Enter Number:"));
//  if(x>y){
//     console.log(x);
//  }
//  else 
//  {
//     console.log(y);
//  }



//4
// var x;
// x=Number( window.prompt("Enter Number:"));
// if(x<0){
//     console.log("Negative");
// }
// else{
//     console.log("Postive");
// }



// 5
// var x,y,z;
// x=Number( window.prompt("Enter Number:"));
// y=Number( window.prompt("Enter Number:"));
// z=Number( window.prompt("Enter Number:"));
// if(x>y){
//     if(x>z){
//         console.log("max= ",x);
//     }
//     else{
//         console.log("max= ",z);
//     }
//     if(y>z){
//         console.log("min=",z)
//     }
//     else{
//         console.log("min=",y)
//     }
// }
// else if(y>x){
//     if(y>z){
//         console.log("max= ",y);
//     }
//     else{
//         console.log("max= ",z);
//     }
//     if(x>z){
//         console.log("min=",z)
//     }
//     else{
//         console.log("min=",x)
//     }
// }
// else if(z>y){
//     if(z>x){
//         console.log("max= ",z);
//     }
//     else{
//         console.log("max= ",x);
//     }
//     if(x>y){
//         console.log("min=",y)
//     }
//     else{
//         console.log("min=",x)
//     }
// }

// 6
// var x;
// x=Number( window.prompt("Enter Number:"));
// if(x%2==0){
//     console.log("IS EVEN");
// }
// else{
//     console.log("IS ODD");  
// }


// 8
// var x;
// x= window.prompt("Enter Char:");
// if(x=='a'||x=='o'||x=='e'||x=='u'||x=='i'){
//     console.log("vowel");
// }
// else{
//     console.log("Consonant");  
// }

// 9
// var x;
// x=Number( window.prompt("Enter Number:"));
// for(var i=1; i<=x;++i){
//     console.log(i);
// }


// 10
// var x;
// x=Number( window.prompt("Enter Number:"));
// for(var i=1; i<=12;++i){
//     console.log(x*i);
// }


//11
// var x;
// x=Number( window.prompt("Enter Number:"));
// for(var i=2; i<=x;++i){
//     console.log(i);
//     ++i
// }



// 12
// var x,y,result=1;
// x=Number( window.prompt("Enter Number:"));
// y=Number( window.prompt("Enter Number:"));
// for(var i=1; i<=y;++i){
//    result*=x;
// }
// console.log(result);

//13
// var total=0,average=0,percentage=0;
// for(var i=1; i<=5;++i){
//   var x; 
//   x=Number( window.prompt("Enter Number:"));
//   total+=x;
// }
// average=total/5;
// percentage=(average/total)*100;
// console.log("Total=",total);
// console.log("Avarege=",average);
// console.log("Percentage=",percentage);


// 14
//  var x;
// x=Number( window.prompt("Enter Number:"));
// if(x==1||x==3||x==5||x==6||x==8||x==10||x==12){
//     console.log("Days in Month: 31");
// }
// else if(x==2){
//     console.log("Days in Month: 29");
// }
// else{
//     console.log("Days in Month: 30")
// }

//15
// var x,y,z,a,s;
//  x=Number( window.prompt("Enter Physics:"));
//  y=Number( window.prompt("Enter Chemistry,:"));
//  z=Number( window.prompt("Enter Biology,:"));
//  a=Number( window.prompt("Enter Mathematics:"));
//  s=Number( window.prompt("Enter Computer:"));
//  var sum=0;
//  sum=x+y+z+a+s;
//  var percentage=(sum/500)*100;
//  if(percentage>=90){
//     console.log("Grad A");
//  }
//   else if(percentage>=80){
//     console.log("Grad B");
//  }
//  else if(percentage>=70){
//     console.log("Grad C");
//  }
//  else if(percentage>=60){
//     console.log("Grad D");
//  }
//  else if(percentage>=40){
//     console.log("Grad E");
//  }
//  else if(percentage<40){
//     console.log("Grad F");
//  }


// 16

// switch (x) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 12:    
//      console.log("Days in Month: 31");
//       break;
//     case 2:
//         console.log("Days in Month: 28");
//       break;
//     default:
//         console.log("Days in Month: 30");
//   }


//17
//   var x;
//  x=window.prompt("Enter Number:");
// switch
// (x) {
  
// case
//  "a":
//  case
//  "e":
//  case
//  "i":
//  case
//  "o":
//  case
//  "u":
//    console.log("vowel");
//     break;
//     default:
//      console.log("consonant");  
// }


//18
//   var x,y;
//  x=Number( window.prompt("Enter Number:"));
//  y=Number( window.prompt("Enter Number:"));
//  var c=0;
//  if(x>y)
//  c=0;
// else
// c=1;

// switch(c)
// {
//     case 0:
//         console.log("max=",x)
//         break;

//     case 1:
//         console.log("max=",y)
//         break;

//         default:
//             console.log("max=",y)
            
// }

// 19
//   var x;
//  x=Number( window.prompt("Enter Number:"));
//  var c=0;
//  if(x%2==0)
//  c=0;
// else
// c=1;

// switch(c)
// {
//     case 0:
//         console.log("Even")
//         break;

//     case 1:
//         console.log("Odd")
//         break;

//         default:
//             console.log("not")
            
// }


//20
//   var x;
//  x=Number( window.prompt("Enter Number:"));
//  var c=0;
//  if(x>0)
//  c=1;
// else if(x<0)
// c=2;
// else
// c=0;

// switch(c)
// {
//     case 0:
//         console.log("Value is 0")
//         break;

//     case 1:
//         console.log("value is postive")
//         break;

//         default:
//             console.log("value is nagative")
            
// }


// var x,y,z;
//  x=Number( window.prompt("Enter first Number:"));
//  y=window.prompt("Choice(-,+,*,/)");
//  z=Number( window.prompt("Enter second number:"));

//  switch(y){
//     case "+":
//         console.log(x+z);
//         break;
//      case "-":
//         console.log(x-z);
//         break;
//     case "*":
//             console.log(x*z);
//             break; 
//      case "/":
//                 console.log(x/z);
//                 break; 
                
//     default:
//         console.log("NOT") 
//  }

 
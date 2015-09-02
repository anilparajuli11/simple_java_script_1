function question1()
{
    var num = prompt("Enter the number");
    if(num > 100){
        alert("The number is greater than 100");
    }
    else if(num==100){
        alert("The number is equal to 100");
    }
    else{
        alert("The number is less than 100");
    }

}

function convertToCelsius(){

    var fahrenheit=prompt("Enter the temperature in Fahrenheit");

    var celsius=(fahrenheit-32)*5/9;

    alert(fahrenheit+" Fahrenheit is equal to"+celsius+" Celsius");
}

function convertToFahrenheit(){

    var celsius=prompt("Enter the temperature in Celsius");

    var fahrenheit=celsius*9/5+32;

    alert(celsius+" Celsius is equal to"+fahrenheit+" Fahrenheit");
}


function mulNums(){
    var num1 = prompt("1st num");
    var num2 = prompt("2st num");
    var result = (Number(num1)*Number(num2));
    document.write("<h1>"+num1+" * "+num2+" = " + result+"</h1>")
}

function divNums(){
    var nume = prompt("1st num");
    var deno = prompt("2st num");

    if(deno == 0){
        alert("Zero division not possible");
    }

    else{
        var result = (Number(nume)/Number(deno));
        document.write("<h1>"+nume+" / "+deno+" = " + result+"</h1>")
    }
}


function calculatePosition(){

    var marks1=prompt("Enter the Marks of Subject I");
    var marks2=prompt("Enter the Marks of Subject II");
    var marks3=prompt("Enter the Marks of Subject III");

    var total=parseFloat(marks1)+parseFloat(marks2)+parseFloat(marks3);
    var percentage=(total/300)*100;//Assuming the total marks for each subject is 100
    alert("Your Percentage is"+percentage+"!");
    if(percentage>=80 && percentage<=100){
        alert(" You Got the distinction");
    }else if(percentage>=60 && percentage<80){
        alert(" You Got the First Division");
    }else if(percentage>=40 && percentage<60){
        alert(" You Got the Second Division")
    }else if(percentage>=0 && percentage<40){
        alert(" Fail");
    }else{
        alert(" Invalid Subject Marks");
    }
}



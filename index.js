
    let dataArray = new Array(); // firstdata array
    let copyArray = "";
    let divideArray = new Array();
    let startIndex = 0;
    let endIndex = 0;
    let operator = ["/","*","+","-"];
    let signIndex = 0;

    for(let i = 0 ; i < 14 ; i++ )
    {
        document.querySelector(".button"+i).addEventListener("click",function(){
            // alert("helllo world");
            dataArray.push(document.querySelector(".button"+i).innerHTML);

            document.querySelector(".displayArea").innerHTML += document.querySelector(".button"+i).innerHTML;

            
        })

    }

    let calculatedValue = Number(document.querySelector(".displayArea").innerHTML);

    document.querySelector(".button14").addEventListener("click",function(){

        // alert("I give you calculated value" + calculateBetween());
        document.querySelector(".displayArea").innerHTML =calculateBetween();
    })


    function calculateBetween(){

        let leftNumberValue1 = 0;
        let rightNumberValue1 = 0;

        for(let j = 0 ; j < dataArray.length ; j++ )
        {
            copyArray += dataArray[j];
        }

    for( let i = 0 ; i < copyArray.length ; i++)
    {
        if(copyArray[i] == "/")
        {   
            leftNumberValue1 = leftValueFunction(i);
            rightNumberValue1 = rightValueFunction(i);
            let x = divide( leftNumberValue1,rightNumberValue1);
            // alert("i give you the value of divide"+x);
            cutTheString(startIndex,endIndex,x);
            // alert("i am here");
            divideArray.push(x);
            i=0;
        }

    }

    for( let i = 0 ; i < copyArray.length ; i++)
    {
        if(copyArray[i] == "*")
        {   
            leftNumberValue1 = leftValueFunction(i);
            rightNumberValue1 = rightValueFunction(i);
            let x = multiply( leftNumberValue1,rightNumberValue1);
            // alert("i give you the value of divide"+x);
            cutTheString(startIndex,endIndex,x);
            // alert("i am here");
            divideArray.push(x);
            i=0;
        }

    }

    for( let i = 0 ; i < copyArray.length ; i++)
    {
        if(copyArray[i] == "+")
        {   
            leftNumberValue1 = leftValueFunction(i);
            rightNumberValue1 = rightValueFunction(i);
            let x = add( leftNumberValue1,rightNumberValue1);
            // alert("i give you the value of divide"+x);
            cutTheString(startIndex,endIndex,x);
            // alert("i am here");
            divideArray.push(x);
            i=0;
        }

    }

    for( let i = 0 ; i < copyArray.length ; i++)
    {
        if(copyArray[i] == "-")
        {   
            leftNumberValue1 = leftValueFunction(i);
            rightNumberValue1 = rightValueFunction(i);
            let x = minus( leftNumberValue1,rightNumberValue1);
            // alert("i give you the value of divide"+x);
            cutTheString(startIndex,endIndex,x);
            // alert("i am here");
            divideArray.push(x);
            i=0;
        }

    }
    // return rightNumberValue1;
    return divideArray.pop();
}


function leftValueFunction(i)
    {   
        let leftNumberValue = 0;
        let leftValue = "";
         signIndex = i;
        alert("i am checker of /"+i);
 for(let j = i-1 ; j>=0 ; j--)

    {   
                alert("i am checker of next sign" + j);

                    if(copyArray[j] == "+"|| copyArray[j]=="-")
                    {
                        alert("i am value of j" +j+"and i" +i);
                        startIndex = j;

                        for(let k = j ; k < i ; k++ )
                        {   
                        alert("boomOflength" + k);
                        leftValue += copyArray[k];
                        }
                    leftNumberValue = Number(leftValue);
                    break;
                    }
                else if(copyArray[j] == "*")
                {
                      alert("i am value of j" +j+"and i" +i);
                      startIndex = j;
                      for(let k = j+1 ; k < i ; k++ )
                      {   
                          alert("boomOflength" + k);
                          leftValue += copyArray[k];
                      }
                      alert("left index of remove"+startIndex);  
                      leftNumberValue = Number(leftValue);
                      break;
                }
                else if(j == 0)
                {   
                    startIndex = j;
                    for(let k = j ; k < i ; k++ )
                     {   
                                alert("boom" + k);
                                leftValue += copyArray[k];
                     }

                     leftNumberValue = Number(leftValue);
                     break;

                }

        }
            alert("i give you the final value" + leftNumberValue);
            return leftNumberValue;

    }

    function rightValueFunction(i)
    {
        let rightNumberValue = 0;
        let rightValue = "";
        signIndex = i;
        alert("i am checker of /"+i);
        alert(copyArray.length);

            for(let j = i+1 ; j < copyArray.length ; j++)
            {   
                alert("i am checker of next sign" + j);

                if(copyArray[j] == "+" || copyArray[j] == "-" || copyArray[j] == "*"|| copyArray[j]=="/" || j==copyArray.length-1)
                {
                    alert("i am value of j" +j+"and i" +i);
                    endIndex = j;
                    alert("right index for remove"+endIndex);
                    if(j == copyArray.length-1)
                    {
                        for(let k = i+1 ; k <= j ; k++ )
                        {   
                            alert("boom" + k);
                            rightValue += copyArray[k];
                        }
                    }

                    else
                    {
                        for(let k = i+1 ; k < j ; k++ )
                        {   
                            alert("boom" + k);
                            rightValue += copyArray[k];
                        }
                    }

                    rightNumberValue = Number(rightValue);
                    break;
                }
            }
            alert("i give you right value " + rightNumberValue);
            return rightNumberValue;
    }


    function cutTheString(start,end,value)
    {    

        if(start == 0 && end == copyArray.length-1)
        {
            alert("i am in the cut the string");
            copyArray =value;
            alert("after the cut the string"+ copyArray); 
        }
        else if(start == 0 && end != copyArray.length-1)
        {  
             alert("i am here");
            
            copyArray = value + copyArray.slice(end);
            alert("after the cut the string"+ copyArray); 
        }
        else if(start != 0 && end == copyArray.length-1)
        {   
                   alert(start);
            copyArray = copyArray.slice(0,start+1)+value;
            alert("after the cut the string"+ copyArray); 

        }
        else
        {
            alert("i am in the cut the string");
                copyArray = copyArray.slice(0,start+1)+value+copyArray.slice(end);
                alert("after the cut the string"+ copyArray); 
 
        }
    }

    function add(a,b)
    {
        return a+b;
    }

    function multiply(a,b)
    {
        return a*b;
    }

    function minus(a,b)
    {
        return (a-b);
    }
    function divide(a,b)
    {
        return a/b;
    }

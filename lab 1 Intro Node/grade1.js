console.log("Enter score");
let stdin = process.openStdin()
stdin.addListener("data", function (score) {
    //console.log(score.toString().trim())
    if(score>=80)
        console.log("A")
    else if(score>=75 )
        console.log("B+")
    else if(score>=70)
        console.log("B")
    else if(score>=65)
        console.log("C+")
    else if(score>=60 )
        console.log("C")
    else if(score>=55 )
        console.log("D+") 
    else if(score>=50 )
        console.log("D")
    else if(score<50)
        console.log("E")
    stdin.destroy() 
 });

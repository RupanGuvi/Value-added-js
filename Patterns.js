//right angles triangle
 function rightAngledTriangle(rows){
     console.log("Right angled triangle");
     for(let i=1; i<=rows; i++){
        console.log("*".repeat(i));
        
     }
     console.log("\n");
}
function pyramid(rows){
    console.log("Pyramid");
    for(let i=1;i<=rows;i++){
        let spaces = " ".repeat(rows-i)
        let stars= "*".repeat(2*i-1)
        console.log(spaces+stars);
        
    }
    console.log("\n");
}

function diamond(rows){
    console.log("Diamond");
    //upperpart
    for(let i=1;i<=rows;i++){
        let spaces = " ".repeat(rows-i)
        let stars= "*".repeat(2*i-1)
        console.log(spaces+stars);
        
    }
    //lowerpart
    for(let i= rows-1;i>=1;i--){
        let spaces = " ".repeat(rows-i)
        let stars= "*".repeat(2*i-1)
        console.log(spaces+stars);
    }
    console.log("\n");
    
}

function square(rows){
    console.log("square");
    for(let i=1;i<=rows;i++){
        console.log("*".repeat(rows));
        
    }
    console.log("\n");
    
    
}

function hollow(rows){
    console.log("hollow sqaure");
    for(let i=1;i<=rows;i++){
        if(i===1 ||i===rows){
            console.log("*".repeat(rows));
        }else{
            console.log("*"+ " ".repeat(rows-2)+"*");
        }
    }
    console.log("\n");
    
}

function generatepattern(rows){
    rightAngledTriangle(rows);
    pyramid(rows);
    diamond(rows);
    square(rows);
    hollow(rows)
}

const rows = 5;
generatepattern(rows);
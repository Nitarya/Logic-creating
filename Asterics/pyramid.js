for (let i = 1; i <=6; i++) {
    for (let k = 1; k = 6 - 1; k++) {
     document.write("&nbsp;&nbsp")   
    }
    for (let j = 1; j<= i; j++) {
        document.write("*" + "&nbsp;&nbsp;")
    }
    document.write("<br>");
}
for(let i=1; i<=6; i++) {
    for(let k=1; k<=i; k++) {
        document.write("&nbsp;&nbsp")
    }
    for(let j=1; j<=6; j++) {
        document.write("*"+"&nbsp;&nbsp")
    }
    document.write("<br>")
}
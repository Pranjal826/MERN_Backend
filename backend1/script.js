const fs=require("fs")
const path=require("path")
const os=require("os")
// const desktop_path=path.join(os.homedir(),"Desktop")
// const filename=path.join(desktop_path,"index.html");


// console.log(desktop_path)
// fs.writeFileSync(filename,"//Enter text here")

// fs.writeFileSync("hello.txt","This is normal text")
// console.log("File created")
const htmlboilerplate=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`
const a=path.join(os.homedir(),"Desktop","index.html")
fs.writeFileSync(a,htmlboilerplate)
console.log("File created")
const fs=require("fs")
const cssboiler=`*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}`;
// fs.writeFileSync("style.css","cssboiler")
// console.log("File Created")
// const data=fs.readFileSync("style.css","utf-8")
// console.log(data)
// console.log(data.toString())
// const moreboiler=`\nhtml,body{
//     width:100%;
//     height:100%;
// }`;
// const data1=fs.appendFileSync("style.css",moreboiler)
// console.log("file appended")
// console.log(data1)
// fs.renameSync("main.js","script.js")
// console.log("File renamed")
// fs.unlinkSync("style.css")
// console.log("File deleted")
// fs.mkdirSync("new folder")
// console.log("Folder created")
// const files=fs.readdirSync("new folder")
// console.log(files)
const files=fs.readdirSync("naya folder")
console.log(`Total Files in new Folder ${files}`)

// files.forEach((f)=>{
//     fs.unlinkSync(f)
// })
// fs.rmdirSync("new folder")

// console.log('folder removed')
// fs.renameSync("new folder","naya folder")
// console.log("Renamed")
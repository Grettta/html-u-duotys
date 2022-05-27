const x = 0
const color = x >10 ? "red" : "blue";
// ? means than (if its true); 
// : means else (if its not true);

switch(color){
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("not red and nor blue");
        break;
}

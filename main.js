console.log(process.argv)

var arr = process.argv.slice(2);
//console.log(arr)

var i;
for(i=0;i<arr.length;i++){
    switch(arr[i]){
        case '0':
            process.stdout.write("Zero");
            break;
        case '1':
            process.stdout.write("One");
            break;
        case '2':
            process.stdout.write("Two");
            break;
        case '3':
            process.stdout.write("Three");
            break;
        case '4':
            process.stdout.write("Four");
            break;
        case '5':
            process.stdout.write("Five");
            break;
        case '6':
            process.stdout.write("Six");
            break;
        case '7':
            process.stdout.write("Seven");
            break;
        case '8':
            process.stdout.write("Eight");
            break;
        case '9':
            process.stdout.write("Nine");
            break;
        default:
            break;
    }
    if(i!=arr.length-1) process.stdout.write(",");
}
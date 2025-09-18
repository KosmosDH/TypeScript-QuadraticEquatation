async function CalculateTheQuadraticEquation(a: number, b: number, c: number) {
    let d = b*b-4*a*c;
    if (d < 0)
        return null;
    if ((isNaN(b) && isNaN(c))|| (isNaN(a) && isNaN(c)))
        return 0;
    else if (isNaN(a) && isNaN(b))
        return null;
    else if (isNaN(b))
        return (-c/a)**0.5;
    else if (isNaN(c))
        return [0, -b/a];
    else if (isNaN(a))
        return -c/b;
    
    let result1 = (-b+d**0.5)/(2*a);
    let result2 = (-b-d**0.5)/(2*a);
    if (d === 0)
        return result1;
    else
        return [result1, result2]
}

async function main() {
    if (process.argv.length > 6) {
        console.log("It receives at no more three argument as interger number");
        return;
    }
    let a = parseInt(process.argv[2]);
    let b = parseInt(process.argv[3]);
    let c = parseInt(process.argv[4]);

    try {
        let result = await CalculateTheQuadraticEquation(a,b,c);
        if (result === null) {
            console.log("There are no result");
        } else {
            console.log(result);
        }
    } catch (err) { 
        console.log("There are some errors: " + err);
    }
}

main();

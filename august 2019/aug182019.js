// Function Description
// Complete the function kangaroo in the editor below. 
// It should return YES if they reach the same position at the same time, or NO if they don't.
// kangaroo has the following parameter(s):
// x1, v1: integers, starting position and jump distance for kangaroo 1
// x2, v2: integers, starting position and jump distance for kangaroo 2


const kangaroo = (x1, v1, x2, v2) => {
    let kangaroo1 = x1;
    let kangaroo2 = x2;
    let i = 0;
    while (i < 100000) {
        kangaroo1 += v1
        kangaroo2 += v2
        if(kangaroo1 === kangaroo2){
            console.log('YES');
            return 'YES';
            break;
        }
        i++
        console.log(i)
    }
    console.log('NO');
    return 'NO'
};

const no = [0, 2, 5, 3];
kangaroo(...no);
const yes = [0, 3, 4, 2];
// kangaroo(...yes);
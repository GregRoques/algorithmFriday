// If cat  catches the mouse first, print Cat A.
// If cat  catches the mouse first, print Cat B.
// If both cats reach the mouse at the same time, 
//     print Mouse C as the two cats fight and mouse escapes.
// x: an integer, Cat 's position
// y: an integer, Cat 's position
// z: an integer, Mouse 's position

function catAndMouse(x, y, z) {
    const catA = Math.abs(z - x)
    const catB = Math.abs(z - y)

    if (catA > catB){
        console.log('Cat B')
        return 'Cat B'
    } else if (catB > catA){
        console.log('Cat A')
        return 'Cat A'
    } else {
        console.log('Mouse C')
        return 'Mouse C'
    }

}

catAndMouse(1,2,3)
catAndMouse(1,3,2)
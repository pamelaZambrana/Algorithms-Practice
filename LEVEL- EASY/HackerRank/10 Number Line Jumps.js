/* You are choreographing a circus show with various animals. For one act, you are given two 
kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

The first kangaroo starts at location  and moves at a rate of  meters per jump.
The second kangaroo starts at location  and moves at a rate of  meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same 
time as part of the show. If it is possible, return YES, otherwise return NO. 

https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true
*/

function kangaroo(x1, v1, x2, v2) {
    let kangarooDistance1 = x1;
    let kangarooDistance2 = x2;

    let kangarooJumps1 = 0;
    let kangarooJumps2 = 0;

    let msg = "NO";

    while(kangarooJumps1 <= 1000 && kangarooJumps2 <= 1000){
        kangarooDistance1 = kangarooDistance1 + v1;
        kangarooJumps1++;
        kangarooDistance2 = kangarooDistance2 + v2;
        kangarooJumps2++;

        if((kangarooDistance1 == kangarooDistance2) && (kangarooJumps1 == kangarooJumps2)){
            msg ="YES";
            break;
        };
    };

    return msg;

};

/*------ Función optimizada ------*/
/* Se utilizó la ecuación de la velocidad en Movimiento Rectilíneo Uniforme x = xo + v*t, tomando en cuenta que 
    x = distancia recorrida por los canguros
    t = número de saltos
    xo = distancia inicial en el eje X
    v = velocidad del canguro

    Se tendrán dos rectas para cada canguro y hay que comprobar si se intersectan resolviendo el sistema de ecuaciones
    y buscando el valor de x
    Tomar en cuenta que los saltos y las distancias deben ser números enteros positivos
  */
function kangaroo (x1, v1, x2, v2){
    let distance = (x1*v2-x2*v1)/(v2-v1);
    let jumps = (distance - x1)/v1;
    let msg = "NO";
    console.log(distance, (jumps)>0)
    if(Number.isInteger(distance) && distance > 0 && Number.isInteger(jumps) && jumps>0 ){
        msg = "YES";
    };

    return msg;
}

console.log(kangaroo(0,3,4,2));
console.log(kangaroo(0,2,5,3));
console.log(kangaroo(4523, 8092, 9419, 8076));
console.log(kangaroo(21, 6, 47, 3));
console.log(kangaroo(35, 1, 45, 3,))
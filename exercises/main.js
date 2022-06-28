'use strict'

import { primo } from './1_Primo.js';
import { fibonacci } from './2_Fibonacci.js';
import { pairsAndOdd } from './3_PairsAndOdd.js';
import { hours } from './4_Hours.js';
import { minutes } from './5_Minutes.js';
import { bill } from './6_Bill.js';
import { power } from './7_Power.js';
import { interval } from './8_Interval.js';
import { ulam } from './9_ulam.js';
import { factorial } from './10_factorial.js';
import { digits } from './11_digits.js';
import { sucesion1 } from './12_sucesion1.js';
import { sucesion2 } from './13_sucesion2.js';
import { days } from './14_Days.js';
import { sucesion3 } from './15_sucesion3.js';
import { sucesion4 } from './16_sucesion4.js';
import { sucesion5 } from './17_sucesion5.js';
import { progresion } from './18_progresion.js';
import { sum120 } from './19_Sum120.js';




let exercise = parseInt(prompt(`
Por favor indique el numero del ejercicio a ejecutar

1. Numeros Primos
2. Fibonacci
3. Pares e Impares
4. Calculador de Horas
5. Calculador de  Minutos
6. Factura
7. Potencia
8. Intervalos
9. Ulam
10. Factorial
11. Numero de digitos
12. Sucesion 1
13. Sucesion 2
14. Calculadora de Dias
15. Sucesion 3
16. Sucesion 4
17. Sucesion 5
18. Progesion
19. Sumatoria de 120

`));

switch ( exercise ) {
    case 1:
        primo();
        break;
    case 2:
        fibonacci();
        break;
    case 3:
        pairsAndOdd();
        break;
    case 4:
        hours();
        break;
    case 5:
        minutes();
        break;
    case 6:
        bill();
        break;
    case 7:
        power();
        break;
    case 8:
        interval();
        break;
    case 9:
        ulam();
        break;
    case 10:
        factorial();
        break;
    case 11:
        digits();
        break;
    case 12:
        sucesion1();
        break;
    case 13:
        sucesion2();
        break;
    case 14:
        days();
        break;
    case 15:
        sucesion3();
        break;
    case 16:
        sucesion4();
        break;
    case 17:
        sucesion5();
        break;
    case 18:
        progresion();
        break;
    case 19:
        sum120();
        break;
}



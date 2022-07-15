### Домашнее задание к лекции 1. «Основные понятия»
###### Задача № 1
###### Требуется написать программу для решения квадратных уравнений (ax^2+bx+c = 0 ).

###### Процесс реализации:
###### Активируйте строгий режим.

###### Реализуйте функцию solveEquation(), которая принимает 3 аргумента: a, b, c - коэффициенты квадратного уравнения.

###### Вычислите дискриминант по формуле b^2-4*a*c. Для возведения в степень используйте оператор - ** или функцию Math.pow().

###### Результатом функции должен быть массив.

###### Если дискриминант меньше нуля, то корней нет (пустой массив).

###### Если дискриминант равен нулю, то корень один. Его необходимо вычислить и вернуть из функции (массив с одним корнем). Формула для вычисления корня: -b/(2*a)

###### Если дискриминант больше нуля, то существует 2 решения уравнения. Их необходимо вычислить и вернуть из функции (массив с двумя корнями): (-b + Math.sqrt(d) )/(2*a) и (-b - Math.sqrt(d) )/(2*a).
function solveEquation(a, b, c) {
    let arr;
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = solveEquation(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+JSON.stringify(result)
    return arr;;
}
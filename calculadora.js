function calcule() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operador = document.getElementById('operador').value;
    const resultado = document.getElementById('resultado');
   
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('La división por cero no de rsultado');
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert('Operador inválido');
            return;
    }

}
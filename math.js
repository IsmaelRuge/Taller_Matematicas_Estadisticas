let calcular;

do {
    while (true) {
        calcular = prompt(`Qué deseas ejecutar?
                            1. Perímetro de un Cuadrado.
                            2. Área de un Cuadrado.
                            3. Perímetro de un Triángulo.
                            4. Área de un Triángulo.
                            5. Circunferencia de un Circulo.
                            6. Área de un Circulo.
                            0. Salir.`);

        calcular = parseInt(calcular);

        if (calcular >= 0 && calcular <= 6) {
            break; 
        } else {
            alert('El código digitado es inválido, por favor verifique e intente nuevamente.');
        }
    }

    switch (calcular) {
        case 1:
            PerimetroCuadrado();
            break;
        case 2:
            AreaCuadrado();
            break;
        case 3:
            PerimetroTriangulo();
            break;
        case 4:
            AreaTriangulo();
            break;
        case 5:
            CircunferenciaCirulo();
            break;
        case 6:
            AreaCirculo();
            break;
        case 0:
            alert('Ha salido.');
            window.close();
            break;
    }
} while (calcular !== 0);

function PerimetroCuadrado() {
    let ladoCuadrado = prompt(`Ingrese el lado de un cuadrado en cm.`);
    ladoCuadrado = parseInt(ladoCuadrado);
    const perimetroCuadrado = ladoCuadrado * 4;
    alert('El perímetro del cuadrado es: ' + perimetroCuadrado + ' cm.');
}

function AreaCuadrado() {
    let ladoCuadrado = prompt(`Ingrese el lado de un cuadrado en cm.`);
    ladoCuadrado = parseInt(ladoCuadrado);
    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    alert('El área del cuadrado es: ' + areaCuadrado + ' cm².');
}

function PerimetroTriangulo() {
    let ladoTriangulo1 = prompt(`Ingrese el lado izquierdo del triángulo en cm.`);
    let ladoTriangulo2 = prompt(`Ingrese el lado derecho del triángulo en cm.`);
    let ladoTrianguloBase = prompt(`Ingrese la base del triángulo en cm.`);

    ladoTriangulo1 = parseInt(ladoTriangulo1);
    ladoTriangulo2 = parseInt(ladoTriangulo2);
    ladoTrianguloBase = parseInt(ladoTrianguloBase);
    
    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
    alert('El perímetro del triángulo es: ' + perimetroTriangulo + ' cm.');
}

function AreaTriangulo() {
    let ladoTrianguloBase = prompt(`Ingrese la base del triángulo en cm.`);
    let alturaTriangulo = prompt(`Ingrese la altura del triángulo en cm.`);

    ladoTrianguloBase = parseInt(ladoTrianguloBase);
    alturaTriangulo = parseInt(alturaTriangulo);
    
    const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;
    alert('El área del triángulo es: ' + areaTriangulo + ' cm².');
}

function CircunferenciaCirulo(){
    let radio = prompt(`Ingrese el radio del circulo en cm.`);
    radio = parseInt(radio);
    const diametroCirculo = radio * 2;
    const circunferencia = diametroCirculo * Math.PI;
    alert('La circunferencia del circulo es: ' + circunferencia.toFixed(2));
}

function AreaCirculo(){
    let radio = prompt(`Ingrese el radio del circulo en cm.`);
    radio = parseInt(radio);
    const areaCirculo = Math.pow(radio, 2) * Math.PI;
    alert('El área del circulo es: ' + areaCirculo.toFixed(2));
}
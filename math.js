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
                            7. Altura de un Triángulo Isosceles.
                            8. Altura de un Triángulo Escaleno.
                            0. Salir.`);

        calcular = parseInt(calcular);

        if (calcular >= 0 && calcular <= 8) {
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
        case 7:
            AlturaTrianguloIsosceles();
            break;
        case 8:
            AlturaTrianguloEscaleno();
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

function AlturaTrianguloIsosceles(){
    let l = prompt(`Ingrese el valor del lado en cm.`);
    l = parseInt(l);

    let b = prompt(`Ingrese el valor de la base en cm.`);
    b = parseInt(b);

    if(l1 == b){
        alert('Este no es un triángulo isosceles.');
        return;
    } 

    const alt = Math.sqrt(((l**2) - (b**2)) / 4);
    alert(`La altura del tiángulo isosceles es de: ` + alt);
}

function AlturaTrianguloEscaleno(){
    let l1 = prompt(`Ingrese el valor del lado 1 en cm.`);
    l1 = parseInt(l1);
    let l2 = prompt(`Ingrese el valor del lado 2 en cm.`);
    l2 = parseInt(l2);
    let l3 = prompt(`Ingrese el valor del lado 3 en cm.`);
    l3 = parseInt(l3);

    if(l1 == l2 || l1 == l3 || l2 == l3){
        alert('los valores digitados no pueden ser iguales ya que es un triángulo escaleno y todos sus lados son diferentes.');
        return;
    }

    let s = (l1 + l2 + l3) / 2;

    let area = Math.sqrt(s * (s - l1) * (s - l2) * (s - l3));

    let altura = Math.floor(2 * area / l1);

    alert('La altura del triángulo escaleno es: ' + altura);
}
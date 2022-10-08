const tipodeSuscripcion = "Basic";

switch (tipodeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de platzi durante un mes");
        break;
    case "Expert":
        console.log("puedes tomar todos los cursos durante un año");
        break;
    case "ExpertDuo":
        console.log(" tu y otro pueen tomar los cursos por un año");
        break;            
}


    if (tipodeSuscripcion == "free"){
        console.log("solo puedes tomar cursos gratis");
        //return sirve de la misma manera que un break osea ahy detiene el codigo pero solo dentro de una funcion
    } else if(tipodeSuscripcion == "Basic") {
        console.log("Puedes tomar casi todos los cursos de platzi durante un mes");
    } else if (tipodeSuscripcion == "Expert"){
        console.log("puedes tomar todos los cursos durante un año");

    } else if (tipodeSuscripcion == "EXpertDuo") {
        console.log(" tu y otro pueen tomar los cursos por un año");
    }




function conseguirTiposuscripcion (suscripcion) {
    if (suscripcion == "free"){
        console.log("solo puedes tomar cursos gratis");
        return;
        //return sirve de la misma manera que un break osea ahy detiene el codigo pero solo dentro de una funcion
    } 
    
    if(suscripcion == "Basic") {
        console.log("Puedes tomar casi todos los cursos de platzi durante un mes");
        return;        
    } 
    
    if (suscripcion == "Expert"){
        console.log("puedes tomar todos los cursos durante un año");
        return; 
    } 
    
    if (suscripcion == "EXpertDuo") {
        console.log(" tu y otro pueen tomar los cursos por un año");
        return; 
    }
    console.warn("ese tipo de suscripcion no existe")
}


function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Prueba_jlcm')
}

function obtenerDatosHtml(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent()
}
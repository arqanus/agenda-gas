function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Prueba_jlcm')
}

function obtenerDatosHtml(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent()
}


function obtenerContactos(){
    let hoja = SpreadsheetApp.openById('1SvPGq6QnhtDJ5L6czm9GmWJPfgzmvDf60ju_ARENrEc').getActiveSheet()
    let datos = hoja.getDataRange().getValues()
    return datos
}
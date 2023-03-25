const HOJA = SpreadsheetApp.openById('1SvPGq6QnhtDJ5L6czm9GmWJPfgzmvDf60ju_ARENrEc').getActiveSheet()   


function doGet(datos){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Prueba_jlcm')
}


function doPost(datos){
   return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Prueba_jlcm')

}


function obtenerDatosHtml(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent()
}


function obtenerContactos(){
    return HOJA.getDataRange().getValues()
}

function insertarContacto(nombre, apellido, correo, telf) {

    HOJA.appendRow([nombre, apellido, correo, telf])
    
}

function borrarContacto(numFila){
    HOJA.deleteRow(numFila)
}


function modificarContacto(numFila, datos){

    let celdas = HOJA.getRange('A' + numFila + ':D' + numFila)
    celdas.setValues([[datos.nombre, datos.apellidos, datos.correo, datos.telf]])
}


function importarContactos(){
    let url = 'https://randomuser.me/api/?results=5&inc=name, email, phone, picture'
    let respuesta = UrlFetchApp.fetch(url).getContentText()
let datos = JSON.parse(respuesta)

    datos.results.forEach(insertarContactoJSON)
}

function insertarContactoJSON(contacto){
    HOJA.appendRow([contacto.name.first, contacto.name.last, contacto.email, contacto.phone, contacto.picture.medium])

}
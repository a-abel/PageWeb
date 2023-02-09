var x;
x = $(document);
y = $(window);
//asignamos eventos interfaz de usuario a variables
x.ready(inicializarEventosDocument);
y.load(inicializarEventosWindow);

function inicializarEventosDocument() {
  logOut();
  //logMain();
}

function inicializarEventosWindow() {

}

function logOut() {
  var datos = "action=logout";
  $.post("../controlador/appController.php", datos, function (response) {
    $('#contenido').html(response);
  });
}

function logMain() {
  var datos = "action=logmain";
  $.post("../controlador/appController.php", datos, function (response) {
    $('#contenido').html(response);
  });
}
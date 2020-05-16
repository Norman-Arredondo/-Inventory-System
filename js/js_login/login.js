function btnEnviar_click() {
  var user_correct = document.getElementById("txtLog");
  var pass_correct = document.getElementById("txtPass");

  if (user_correct.value == "" || pass_correct.value == "") {
    alert("llene todos los campos");
  } else if (user_correct.value == "Sup" && pass_correct.value == "1") {
    alert(Bienvenido);
  }
}

/*
<?php
/*$user=$_POST['usuario'];
$key=$_POST['key'];

$conexion=mysqli_conect("localhost","root","","BD_Equipo");
$consulta="SELECT * FROM usuarios WHERE usuario='$user' and key='$key'";
$result=mysqli_query($conexion,$consulta);

 ?>
 */

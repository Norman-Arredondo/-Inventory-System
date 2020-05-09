function btnEnviar_click2(){
  var user_correct = document.getElementById("u4_input");
  var pass_correct = document.getElementById("u5_input");

  if(user_correct.value== ""||pass_correct.value== ""){
    alert("llene todos los campos");
  }
  else if(user_correct.value == "yo" && pass_correct.value == "1234"){
    alert("Bienvenido");
  }
  else{
    alert("Usuario o Contraseña incorrectos");
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

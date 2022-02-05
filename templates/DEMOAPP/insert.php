<?php
$conn= mysqli_connect("localhost","root","", "ip_project");

$number= $POST['Serial Number'];
$name= $POST['Patient_Name'];
$age= $POST['Age'];
$gender= $POST['Gender'];
$date= $POST['Date'];
$contact= $POST['Contact Number'];

$sql= "INSERT INTO 'patient_records'('S_No', 'Patient_name', 'Date', 'Age', 'Gender','Contact_number') VALUES ('$number','$name','$date','$age','$gender','$contact')";
$insert= mysqli_query($conn, $sql);
if (!$insert) {
  echo "ERROR";
}
else{
    header("Location: /DEMOAPP/home.html");
}

?>
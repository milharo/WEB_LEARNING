
<?php 
if ($_GET['full-name'] == 'Adam' ) {
  echo 'Ahoj Adam!';
    echo file_get_contents('index.php');
  exit();
}
else { echo file_get_contents('index.php'); }
?>
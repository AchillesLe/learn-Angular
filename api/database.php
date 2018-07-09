<?php 
session_start();
$user = $_SESSION['user'];

if($user == 'admin'){
    echo '{
            "message":"You are admin !" ,
            "success":true
        }';
}else{
    echo '{
            "message":"Who the f are U ?",
            "success":false
        }';
}
?>
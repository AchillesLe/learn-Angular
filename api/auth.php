<?php 
    session_start() ;
    $_POST = json_decode(file_get_contents('php://input'),true);
    if( isset($_POST) && !empty($_POST) ){
        $username = $_POST['username'];
        $password = $_POST['password'];
        
        if( $username =='admin' && $password=='admin'){
            $_SESSION['user']='admin';
            echo '{"success":true,"secret":"This is the secret no one knows but the admin"}';
        }
        else{
            echo '{"success":false,"secret":"Invalid credentials"}';
        }
    }
    else{
        echo '{"success":false,"secret":"Only Post access Accepted"}';
    }
?>
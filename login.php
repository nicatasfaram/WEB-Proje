<?php
if($_POST){
    if($_POST["email"] == 'g171210557@sakarya.edu.tr' && $_POST["password"] == '123'){
        echo "Başarılı";
    }else{
        echo "Not Found 404 :)";
    }
}
<?php
$servername = "localhost";
$username = "root";
$password = "1993jaloliddin"; 
$dbname = "TEMURIDS";

// Ulanish
$conn = new mysqli($servername, $username, $password, $dbname);

// Ulanishni tekshirish
if ($conn->connect_error) {
    die("Ulanishda xatolik yuz berdi: " . $conn->connect_error);
}
?>
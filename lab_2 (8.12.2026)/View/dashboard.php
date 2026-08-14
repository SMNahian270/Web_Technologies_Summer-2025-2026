<?php
session_start();

$username = $_SESSION["loggedInUser"] ?? "";
$isLoggedIn = $_SESSION["isLoggedIn"] ?? false;

if (!$isLoggedIn) {
    Header("Location: login.php");
}

$isSetCookie = isset($_COOKIE["foodName"]);

$foodNameFromCookie = $_COOKIE["foodName"] ?? "";


?>

<html>

<body>
    <h2>Welcome Mr <?php echo $username; ?></h2>
    <p>We Know Your favourite food is :
        <?php echo $foodNameFromCookie; ?>
    </p>
    
</body>

</html>
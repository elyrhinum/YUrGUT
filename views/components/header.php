<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <link href="/public/css/components.css" rel="stylesheet">
    <link href="/public/css/<?= $style ?>" rel="stylesheet">
    
    <link type="image/x-icon" href="/public/img/favicon.ico" rel="icon">

    <script defer src="/public/js/connect-mask.js"></script>
    <script defer src="/public/js/masks.js"></script>

    <title><?= $title ?></title>

</head>
<body>

<?php include $_SERVER["DOCUMENT_ROOT"] . "/views/components/navbar.php" ?>
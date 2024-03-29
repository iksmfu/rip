<?php
$target_dir = "uploads/";
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($_FILES["fileToUpload"]["name"], PATHINFO_EXTENSION));

$response = array();

if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        $response["message"] = "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        $response["error"] = "File is not an image.";
        $uploadOk = 0;
    }
}


$allowedFormats = ["jpg", "jpeg", "png", "gif"];
if(!in_array($imageFileType, $allowedFormats)) {
    $response["error"] = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}

if ($uploadOk == 0) {
    $response["error"] = "Sorry, your file was not uploaded.";
} else {
    $randomFileName = uniqid('', true) . '.' . $imageFileType;
    $target_file = $target_dir . $randomFileName;

    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        if(isset($_GET["embed"]) && $_GET["embed"] == "true") {
            ob_start(); 
            include("image_html_template.php"); 
            $response["html"] = ob_get_clean(); 
        } else {
            $response["success"] = true;
            $response["url"] = "https://iksm.lol/uploads/" . $randomFileName;
            $response["filename"] = $randomFileName;
        }
    } else {
        $response["error"] = "Sorry, there was an error uploading your file.";
    }
}

echo json_encode($response);
?>

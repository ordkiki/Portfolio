<?php
    require_once "../configs/connect.php";
    class Project{
        private $db = new Database();
        private $id;
        private $titre;
        private $description;
        private $image;

        public function __construct($db)
        {
        }

        public function  ListeAll():void
        {   
            $sql = "SELECT * FROM Project";
            $stmt = $pdo->exe
        }
    }
?>
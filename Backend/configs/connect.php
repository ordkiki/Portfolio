<?php 
    class Database{
        private $host="localhost";
        private $name="root";
        private $pass="";
        private $db_name="db_portfolio";
        public $conn;

        public function GetConnection(){
            $this->conn = NULL;

            try {
                $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->name, $this->pass);
                $this->conn->exec("set names utf8");
            } catch(PDOException $exception) {
                echo "Connection error: " . $exception->getMessage();
            }
    
            return $this->conn;
        }
    }
    $DB = new Database();
    $DB->GetConnection();
?>
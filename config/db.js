import mysql from "mysql2";
import dotenv from "dotenv";

//printah koneksi
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: "root",
    password: process.env.DB_PASS,
    database: "pemweb",
});

//jalankan koneksi db nya
db.connect((err) => {
    //jika error
    if (err){
        console.error("Errror Koneksi Database", err);
        return;
    }

    //jika berhasil
    console.log("MySQL Berhasil connect!");
});

export default db;
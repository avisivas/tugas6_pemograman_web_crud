import db from "../config/db.js";
// import { getUsers, insertUser } from "../controllers/userController.js";

//menampilkan data dari tabel
export const getUsers = (req,res) => {
    db.query("SELECT * FROM users", (err, results) => {
        //jika error
        if (err) res.status(500).json({message: err});

        //jika berhasil
        res.json(results);
    })
}


// menyimpan data
export const insertUser = (req,res)=>{
    const { nama, email, password } = req.body;

    db.query(
        "INSERT INTO users (nama, email, password) VALUES (?,?,?)",
        [nama, email, password],
        (err, results)=>{
            //jika error
            if (err) res.status(500).json({message: err});

            //jika berhasil
            res.json({message :"Data berhasil disimpan"});
        }
    )
}

// menampilkan data bedasarkan id
export const showUser = (req,res)=>{
    const { id } = req.params;

    db.query("SELECT * FROM users WHERE id=?", [id], (err, results)=>{
        //jika error
        if (err) res.status(500).json({message:err});

        //jika data tida di temukan
        if(results.lengh === 0){
            return res.status(500).json({message: "user tidak ditemukan"});
        }
            res.json(results[id]);
    })
}

// update data bedasarkan id
export const updateUser = (req,res) => {
    const {id} = req.params;
    const {nama, email} = req.body

    db.query(
        "UPDATE users SET nama=?, email=? WHERE id=?",
        [nama, email, id],
        (err, results)=>{
            if (err) res.status(500).json({message: err});

            res.json({message: "Data berhasil di update"})
        }
    )
}

// hapus data 
export const delleteUser = (req,res)=>{
    const {id} = req.params;

    db.query("DELETE FROM users WHERE id=?," [id], (err, results)=>{
        if (err) res.status(500).json({message: err});

        res.json({message: "Data berhasil di update"})
    });
};
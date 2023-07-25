const db = require("../db/database.js");


//CREATE DATABASE
exports.createDB = (req, res) => {
    let q = 'CREATE DATABASE todolist';
    db.query(q, (err, result) => {
        if (err) throw err;
        return res.status(201).json("DB created");
    })
}

//CREATE TABLE
exports.createTable = (req, res) => {
    let q = 'CREATE TABLE tasks(id int AUTO_INCREMENT, taskName VARCHAR(255), completed boolean not null default 0,created_at timestamp not null default current_timestamp, PRIMARY KEY(id))';
    db.query(q, (err, result) => {
        if (err) throw err;
        return res.status(201).json("TABLE CREATED");
    });
}


//enter data
exports.createList = (req, res) => {
    const q = "INSERT INTO tasks SET ?";

    const { taskName } = req.body;

    db.query(q, { taskName }, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result);
    });
}


//show table
exports.showTodos = (req, res) => {
    const q = "SELECT * FROM tasks";

    db.query(q, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result);
    });
};


//update the data
exports.updateTodo = (req, res) => {
    const { completed } = req.body;
    const q = `UPDATE tasks SET ? where id=${req.params.id}`;

    db.query(q, { completed }, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result);
    });
}


//delete the data
exports.deleteSingleTodo = (req, res) => {

    const q = `DELETE FROM tasks  WHERE id=${req.params.id}`;

    db.query(q, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json({ data: "todo deleted" });
    });
}
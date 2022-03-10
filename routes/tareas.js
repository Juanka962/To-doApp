let express = require("express");
let router = express.Router();
const Tarea = require("../models/Tarea");
const User = require("../models/User");

//crear una tarea
router.post("/add", function (req, res, next) {
	const { nombre, userId } = req.body;

	User.findById(userId, (err, u) => {
		let tarea = new Tarea({
			user: u,
			nombre,
		});

		u.tareas.push(tarea);

		u.save(function (err) {
			if (err) return res.status(500).send(err);
			tarea.save(function (err) {
				if (err) return res.status(500).send(err);
				res.send("Tarea añadida");
			});
		});
	});
});

// modificar una tarea por su id
router.put("/:id", function (req, res, next) {
	Tarea.findByIdAndUpdate(req.params.id, req.body, function (err, tareainfo) {
		if (err) res.status(500).send(err);
		else res.status(200).send("Tarea cambiada");
	});
});

//marcar tarea como hecha
router.put("/finish/:id", function (req, res, next) {
	Tarea.findByIdAndUpdate(
		req.params.id,
		{ hecho: true },
		function (err, tareainfo) {
			if (err) res.status(500).send(err);
			else res.status(200).send("Tarea marcada como hecha");
		}
	);
});

//eliminar todas las tareas de un usuario
router.delete("/delete/:id", function (req, res, next) {
	const id = req.params.id;

	User.findById(id, (err, user) => {
		console.log(user.tareas);
		user.tareas.forEach((tarea, i) => {
			Tarea.findByIdAndDelete(tarea, function (err, tarea) {
			
				if (err) res.status(500).send(err);
				else res.sendStatus(200);
				
			});

		});
		user.tareas.length = 0;
	});

	if (err) res.status(500).send(err);
	else res.status(200).send("Tareas borrada");
});

//mostrar tareas activas
router.get("/activa", function (req, res, next) {
	Tarea.find({ hecho: false })
		.then((terea) => {
			res.json(terea);
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;

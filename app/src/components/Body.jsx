import imgEditar from '../assets/edit_modify_icon_149489.svg'

const width = {
	width:"92%"
}

function Body(props) {
	return (
		<div className="container">
			<div className="row my-5">
				{/* nombre tarea */}
				<div className="col">
					<p className="form-label">Añadir Tarea</p>
					<input
						type="text"
						className="form-control"
						placeholder="Escribe el nombre de la tarea"
						style={width}
					></input>

					{/* calendario */}
					<div className="row my-4">
						<div className="col input-group">
							<div className="col-11">
								<input
									type="date"
									className="form-control"
								></input>
							</div>

							<div className="col-1">
								<button className="btn btn-primary mx-4">
									Guardar
								</button>
							</div>
						</div>
					</div>

					{/* lista de tareas */}

					<div className="list-group list-group-flush">
						<label className="list-group-item d-flex justify-content-end">
							<input
								className="form-check-input me-1"
								type="checkbox"
								value=""
							/>
							First checkbox
							<a href="/" className="ms-auto"><img src={imgEditar} alt="img de editar" width={25} height={25} /></a>
						</label>
						<label className="list-group-item">
							<input
								className="form-check-input me-1"
								type="checkbox"
								value=""
							/>
							Second checkbox
						</label>
					

						{/*  

						{
							//el array de tareas.length > 0 ?
							//array.map(  (element, index) => {}  )
								<label className="list-group-item" key={index}>
									<input
										className="form-check-input me-1"
										type="checkbox"
										value=""
									/>
									{element}
								</label>
						}*/}
					</div>

					<div className="text-center my-4"><button className="btn btn-danger">Borrar Todo</button></div>
				</div>

				<div className="col"></div>
			</div>
		</div>
	);
}

export default Body;

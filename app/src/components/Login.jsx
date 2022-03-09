function Login(params) {
    
    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card shadow-2-strong rounded-3">
                        <div className="card-body p-5 text-center">

                            <h3 className="mb-5">Login</h3>

                            <div className="form-outline mb-4">
                                <input type="text" id="typeuser" className="form-control form-control-lg" />
                                <label className="form-label" for="typeuser">Usuario</label>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
                                <label className="form-label" for="typePasswordX-2">Contraceña</label>
                            </div>


                            <button className="btn btn-primary btn-lg btn-block" type="submit">Iniciar sesion</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;
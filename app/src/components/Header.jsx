// import { Button, Navbar, Container, Nav,  } from 'react-bootstrap';
import { Routes, Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Login from './Login';
import Body from './Body';
import SignUp from './SignUp';

function Header(props) {
	return (
        <Router>
            <nav className="navbar navbar-expand navbar-dark bg-dark py-3">

                <div className="container">
                    <Link className="nav-item nav-link active" to={"/"}>
                        
                        <a className="navbar-brand me-2" href="/">ToDo List</a>
                    </Link>


                    <ul className="navbar-nav me-auto ">
                        <li className="nav-item nav-link px-5">
                            Tareas Activas
                        </li>

                        <li className="nav-item nav-link px-5">
                            Tareas Vencidas
                        </li>
                    </ul>

                    <div className="d-flex align-items-center">
                        <Link className="nav-item nav-link active" to={"/login"}>
                            <button type="button" className="btn btn-primary me-3">
                                Login
                            </button>
                        </Link>

                        <Link className="nav-item nav-link active" to={"/signup"}>
                            <button type="button" className="btn btn-primary me-3">
                                Sign up
                            </button>
                        </Link>

                    </div>

                </div>

            </nav>
            <br /><br />

            <div className="container">
				<Routes>
					<Route exact path="/" element={<Body />}></Route>
					<Route exact path="/login" element={<Login />}></Route>
					<Route path="/signup" element={<SignUp />}></Route>
				</Routes>
			</div>
        </Router>
	);
}

export default Header;


import './App.css';
import './ListadoLibros'
import ListaLibros from './ListadoLibros';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="">
      <header className="">
        <Nav/>
      </header>

      <h1 className='text-center mt-5'>Listado Libros</h1>
        <ListaLibros/>
    </div>
  );
}

export default App;

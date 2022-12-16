import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
	return (
		<div className='container--app'>
			{/* IMPORTAMOS NAVBAR PARA RENDERIZLAR EN NUESTRA APP */}
			<Navbar />

			{/* IMPORTAMOS ITEMLISTCONTAINER Y LE PASAMOS UNA PROP DE NOMBRE greeting */}
			{/* ESTA PROP DEBERA SER RECIBIDA EN EL COMPONENTE COMO   (props) O DESESTRUCTURADA ({greeting}) */}
			<ItemListContainer greeting={"Hello! 👋"} />
		</div>
	);
}

export default App;

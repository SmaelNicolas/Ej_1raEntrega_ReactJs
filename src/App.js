import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
	return (
		<div className='container--app'>
			<Navbar />
			<ItemListContainer />
		</div>
	);
}

export default App;

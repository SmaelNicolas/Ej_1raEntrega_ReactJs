import "./itemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
	return (
		<div className='container--ItemListContainer'>
			<div className='container--ItemListContainer--text'>
				Enviamos una
				<a
					className='itemListContainer--link'
					href='https://beta.reactjs.org/learn/passing-props-to-a-component'>
					PROP
				</a>
				desde App.js
			</div>
			<div className='container--ItemListContainer--text'>
				y la recibimos
				<a
					className='itemListContainer--link'
					href='https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'>
					DESESTRUCTURADA
				</a>
			</div>
			<div className='container--ItemListContainer--text'>
				Prop ➡
				<span className='itemListcontainer--prop'> {greeting} </span>
			</div>
		</div>
	);
};

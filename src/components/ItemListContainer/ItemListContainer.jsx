import "./itemListContainer.css";

// ESTA PROP ES ENVIADA DESDE APP Y RECIBIDA EN EL COMPONENTE COMO  (props) O DESESTRUCTURADA ({greeting})
// LA OTRA FORMA DE RECIBIRLA ES  export const ItemListContainer = ( prop) => {

export const ItemListContainer = ({ greeting }) => {
	return (
		<div className='container--ItemListContainer'>
			<div className='container--ItemListContainer--text'>
				Enviamos una
				<a
					target='_blank'
					rel='noopener noreferrer'
					className='itemListContainer--link'
					href='https://beta.reactjs.org/learn/passing-props-to-a-component'>
					PROP
				</a>
				desde App.js
			</div>
			<div className='container--ItemListContainer--text'>
				y la recibimos
				<a
					target='_blank'
					rel='noopener noreferrer'
					className='itemListContainer--link'
					href='https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'>
					DESESTRUCTURADA
				</a>
			</div>
			<div className='container--ItemListContainer--text'>Prop</div>
			<div className='container--ItemListContainer--text'>⬇</div>

			{/* SI LA PROP FUE RECIBIDA DESESTRUCTURA SE PONE TAL CUAL 👇 */}
			<div className='itemListcontainer--prop'> {greeting} </div>

			{/* SI LA PROP FUE RECIBIDA COMO PROP (prop) , LA FORMA DE LLAMAR A greeting ENVIADA DESDE APP ES 👇 */}
			{/* <div className='itemListcontainer--prop'> {prop.greeting} </div> */}
		</div>
	);
};

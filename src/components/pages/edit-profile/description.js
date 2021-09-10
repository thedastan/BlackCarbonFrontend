


const Description = ({ about }) => {


	const outUserDescription = () => {
		if(about){
			return <div className="w-full grid grid-cols-1 items-center justify-start">
		        <p className="user-biography text-white font-normal">Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Tenetur inventore eius, iusto. Itaque, ab sunt quisquam. Facere ab dolore eligendi accusantium, molestiae vel voluptas consequuntur modi voluptates, alias sit. Ipsam harum explicabo incidunt sunt possimus.</p>
		        <button className="edit-biography text-white">Редактировать</button>
		    </div>
		}
		return <div className="w-full grid grid-cols-1 items-center justify-start">
		          <p className="user-biography-empty font-normal text-white">Вы ничего не написали о себе</p>
		          <button className="edit-biography text-white">Написать о себе</button>
		        </div>
	}

	return (
		<>
			{outUserDescription()}
		</>
	)
}

export default Description;
import { useState } from 'react'
import { LogForm  } from '../components/form'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineCompass, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
import { MdPersonOutline } from 'react-icons/md'
import insta from '../images/insta.jpeg'


export const Header = ({ title }) => {
	const [search, setSearch] = useState()
	const [userInput, setUserInput] = useState()
	const submitHandler = (e) => {
		e.preventDefault()
		setSearch(userInput)
	  }

	return (
		<div>
		<div id='instaLogos'>
			<BsInstagram id='logo'/>
			<img
				id='instaLogo' 
				src={insta} 
				alt='insta logo' 
			/>
		</div>
		<div id='searchContainer'>
	   <form onSubmit={submitHandler}>
	   
             <input id='search'
			  placeholder="Search"
			  onChange={(e) => setUserInput(e.target.value)}  />
       </form>
	   </div>
      {/* {title ? <h2>you wrote a title</h2> : <h2>hurry</h2>}
      {title && <h2>horray</h2> } */}
	    <div id='icons'>
			<AiOutlineCompass />
			<AiOutlineHeart/>
			<MdPersonOutline />
		</div>
			<h1>{title}</h1>
		</div>
	)
}
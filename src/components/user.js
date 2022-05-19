import { useState } from 'react'
import { signUp } from '../utils'
import { IoMdArrowDropdown } from 'react-icons/io'




export const User = ({user, bio}) => {
	const [buttonText, setButtonText] = useState ('Follow')
	const changeText = (text) => setButtonText (text)
	const [followers, setFollowers] = useState(0)

	const followHandler = (e) => {
		setFollowers( followers +1)
		setButtonText(' ☑') 
		e.preventDefault()
	}

	return (
		<div id='mainProfile'>
		<img id='profilePic' src='https://i.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg'
		alt='profile picture'/>
		<div id='userProfile'>
		<div id='nameBio'>
			<h2>{user}</h2>
			<h3>{bio} 'Likes lovely scenery and happy places'</h3>
		</div>
		<div id='userBtns'>
			<button id='followBtn' onClick={ followHandler } {...() => changeText(' ☑')}>{buttonText}</button>
			<button id='dropDown'><IoMdArrowDropdown/></button>
		</div>
	
		</div>
	    <div id='followers'>
			  <h2>Followers</h2>
			  <h3>{ followers }</h3>
			</div>
		</div>
	)
}
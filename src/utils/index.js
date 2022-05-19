export const fetchImages = async (setter) => {
	try {
		const response = await fetch('https://picsum.photos/v2/list')
		const data = await response.json()
		setter(data)
	} catch (error) {
		console.log(error);
	}
}

// fetch request for 30 images.


export const signUp = async (username, email, password, setter) => {
	try {
		const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
			method:"POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				username: username,
				email: email,
				password: password,
			})

		})
		const data = await res.json()
		setter(data.user)

	} catch (error) {
		console.log(error)
	}
}
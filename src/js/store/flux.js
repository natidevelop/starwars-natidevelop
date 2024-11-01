const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
	people:[],
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			obtenerPersonajes: async() => {
				try {
					const response = await fetch ("https://www.swapi.tech/api/people")
					const data = await response.json()
					console.log(data.results)
					setStore({people:data.results})
					return true

				} catch (error) {
					console.log(error)
					return false
				}
			},
		
		}
	};
};

export default getState;

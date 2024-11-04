const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			person: {},
			planeta: {},
			favorito: []

		},
		actions: {
			// Use getActions to call a function within a fuction

			obtenerPersonajes: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people")
					const data = await response.json()
					// console.log(data.results)
					setStore({ people: data.results })
					return true

				} catch (error) {
					console.log(error)
					return false
				}
			},
			obtenerPlanetas: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets")
					const data = await response.json()
					// console.log(data.results)
					setStore({ planets: data.results })
					return true

				} catch (error) {
					console.log(error)
					return false
				}
			},

			obtenerInfoPersonaje: async (id) => {
				// console.log(id)
				try {
					const resp = await fetch("https://www.swapi.tech/api/people/" + id, {
						method: "GET",
						headers: { "Content-Type": "application/json" }
					})

					if (resp.status == 200) {
						const data = await resp.json()
						console.log(data.result)
						setStore({ person: data.result })
						return true
					}
				} catch (error) {
					console.log(error)
					return false
				}

			},
			obtenerInfoPlaneta: async (id) => {
				// console.log(id)
				try {
					const resp = await fetch("https://www.swapi.tech/api/planets/" + id, {
						method: "GET",
						headers: { "Content-Type": "application/json" }
					})

					if (resp.status == 200) {
						const data = await resp.json()
						console.log(data.result)
						setStore({ planeta: data.result })
						return true
					}
				} catch (error) {
					console.log(error)
					return false
				}

			},
			favoritos: (item) => {
				if (getStore().favorito.includes(item)) {
					//si ya esta en la lista de favoritos que lo borre
					let aux = []
					aux = getStore().favorito.filter((elem)=>elem!=item)
					setStore({favorito:aux})
				} else {
					//si no existe en la lista de favoritos que lo agregue
					setStore({ favorito: [...getStore().favorito, item] })
				}

			},
		}
	}
};


export default getState;

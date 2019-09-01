export default {
  actions: {
  },
  mutations: {
  },
  state: {
      places: [
        {
          id: 1,
          user_id: 1,
          title: 'City1',
          description: 'desc',
          position: {
            lat: 10,
            lng: 10
          }
        },
        {
          id: 2,
          user_id: 1,
          title: 'City2',
          description: 'desc',
          position: {
            lat: 20,
            lng: 10
          }
        },
        {
          id: 3,
          user_id: 1,
          title: 'City1 Place',
          description: 'desc',
          position: {
            lat: 48,
            lng: 10
          }
        },
        {
          id: 4,
          user_id: 1,
          title: 'City1 Place2',
          description: 'desc',
          position: {
            lat: 47.9,
            lng: 10
          }
        },
        {
          id: 5,
          user_id: 1,
          title: 'City1 Place3',
          description: 'desc',
          position: {
            lat: 46.9,
            lng: 10
          }
        },
      ]
  },
  getters: {
      allPlaces(state) {
          return state.places
      },
      getPlace(state) {
        return id => {
          console.log(`id = ${id}`)
          return state.places.find(place => {
            return place.id == id
          })
        }
      }
  }
}
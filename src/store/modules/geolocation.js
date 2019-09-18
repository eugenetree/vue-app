export default {
  actions: {
    updateCurrentLocation({ commit }) {
      let currentLocation = null;
      navigator.geolocation.getCurrentPosition(position => {
        currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      commit("updateCurrentLocation", currentLocation);
      });
    }
  },
  mutations: {
    updateCurrentLocation(state, currentLocation) {
      state.current_location = currentLocation;
    }
  },
  state: {
    current_location: null
  },
  getters: {
    currentLocation(state) {
      return state.current_location;
    }
  }
};
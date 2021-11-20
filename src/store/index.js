import { createStore } from "vuex";

export default createStore({
	state: {
		movieList: [],
		searchInput: "",
		mediaType: "movie",
		isLoading: false,
	},
	mutations: {
		SET_MOVIE_LIST(state, movieList) {
			state.movieList = movieList;
		},
		SET_SEARCH_INPUT(state, searchInput) {
			state.searchInput = searchInput;
		},
		SET_MEDIA_TYPE(state, mediaType) {
			state.mediaType = mediaType;
		},
		SET_IS_LOADING(state, isLoading) {
			state.isLoading = isLoading;
		},
	},
	actions: {
		setMovieList({ commit }, movieList) {
			commit("SET_MOVIE_LIST", movieList);
		},
		setSearchInput({ commit }, searchInput) {
			commit("SET_SEARCH_INPUT", searchInput);
		},
		setMediaType({ commit }, mediaType) {
			commit("SET_MEDIA_TYPE", mediaType);
		},
		setIsLoading({ commit }, isLoading) {
			commit("SET_IS_LOADING", isLoading);
		},
	},
	modules: {},
});

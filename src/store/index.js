import { createStore } from "vuex";

export default createStore({
	state: {
		movieList: [],
		searchInput: "",
		mediaType: "movie",
		showMediaTypeSelector: false,
		isLoading: false,
		dataState: "",
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
		SET_SHOW_MEDIA_TYPE_SELECTOR(state, showMediaTypeSelector) {
			state.showMediaTypeSelector = showMediaTypeSelector;
		},
		SET_IS_LOADING(state, isLoading) {
			state.isLoading = isLoading;
		},
		SET_DATA_STATE(state, dataState) {
			state.dataState = dataState;
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
		setShowMediaTypeSelector({ commit }, showMediaTypeSelector) {
			commit("SET_SHOW_MEDIA_TYPE_SELECTOR", showMediaTypeSelector);
		},
		setIsLoading({ commit }, isLoading) {
			commit("SET_IS_LOADING", isLoading);
		},
		setDataState({ commit }, dataState) {
			commit("SET_DATA_STATE", dataState);
		},
	},
	modules: {},
});

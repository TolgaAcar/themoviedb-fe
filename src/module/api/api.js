const mainUrl = "https://api.themoviedb.org/3/";
const apiKey = "c68669f8c302e3f797f652fc0e2ab722";
const apiKeyUrl = `?api_key=${apiKey}`;

export default {
	async fetchData(searchPath, additionalParams = "") {
		const url = `${mainUrl}${searchPath}${apiKeyUrl}${additionalParams}`;
		const reponse = await fetch(url);
		const data = await reponse.json();
		return data.results;
	},
};

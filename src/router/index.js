import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MediaDetails from "../components/MediaDetail/MediaDetails.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/media/:mediaType/:mediaId",
		name: "MediaDetails",
		component: MediaDetails,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;

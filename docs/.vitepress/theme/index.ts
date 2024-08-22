import Layout from "./Layout.vue";
import Home from "../component/home.vue";
import "./styles/index.css";
export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component("Home", Home);
  },
};

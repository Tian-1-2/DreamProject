import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
//routes
import router from "./routes/index"

const app = createApp(App)

//routes
app.use(router)
app.mount("#app")

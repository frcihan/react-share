import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Main from "../pages/Main"
import Signup from "../pages/Signup"
import Signin from "../pages/Signin"
import UserDetail from "../pages/UserDetail"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/register" component={Signup} />
                <Route path="/login" component={Signin} />
                <Route path="/user/:id" component={UserDetail} />
                <Route path="/" component={Main} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter;

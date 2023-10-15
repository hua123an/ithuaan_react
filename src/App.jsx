import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import {Home} from "./Views/Home/Home.jsx";
import {Blog} from "./Views/Blog/Blog.jsx";
import {AI} from "./Views/AI/AI.jsx";
import {Programming} from "./Views/Programming/Programming.jsx";
import {Academic} from "./Views/Academic/Academic.jsx";
import {Key} from "./Views/Key/Key.jsx";
import {Source} from "./Views/Source/Source.jsx";
import {University} from "./Views/University/University.jsx";
import {OpenSource} from "./Views/OpenSource/OpenSource.jsx";
const linkList = () => {
    return(
        <>
            <Link to="/">首页</Link>
            <Link to="/blog">博客</Link>
            <Link to="/ai">AI专区</Link>
            <Link to="/programming">前端开发</Link>
            <Link to="/academic">学术专区</Link>
            <Link to="/key">激活密钥</Link>
            <Link to="/source">资源</Link>
            <Link to="/university">大学生专区</Link>
            <Link to="/opensource">开源项目</Link>
        </>

    )
}
const routeList = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/ai" element={<AI/>}/>
            <Route path="/programming" element={<Programming/>}/>
            <Route path="/academic" element={<Academic/>}/>
            <Route path="/key" element={<Key/>}/>
            <Route path="/source" element={<Source/>}/>
            <Route path="/university" element={<University/>}/>
            <Route path="/opensource" element={<OpenSource/>}/>
        </Routes>
    )
}

export const App = () => {
    return (
        <Router>

            {routeList()}
        </Router>
    )

}
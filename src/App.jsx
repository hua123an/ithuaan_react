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
const style = {
    textAlign : "center",
    marginLeft : 150,
    textDecoration : "none"
}
const list = [
    {
        "key" : Math.random(),
        "href" : "/",
        "name" : "首页"
    },
    {
        "key" : Math.random(),
        "href" : "/blog",
        "name" : "博客"
    },
    {
        "key" : Math.random(),
        "href" : "/ai",
        "name" : "AI专区"
    },
    {
        "key" : Math.random(),
        "href" : "/programming",
        "name" : "前端开发"
    },
    {
        "key" : Math.random(),
        "href" : "/academic",
        "name" : "学术专区"
    },
    {
        "key" : Math.random(),
        "href" : "/key",
        "name" : "激活密钥"
    },
    {
        "key" : Math.random(),
        "href" : "/source",
        "name" : "资源"
    },
    {
        "key" : Math.random(),
        "href" : "/university",
        "name" : "大学生"
    },
    {
        "key" : Math.random(),
        "href" : "/opensource",
        "name" : "开源项目"
    },
]
const linkList = () => {
    return(
        <>
            {list.map(item =>
            <Link to={item.href} key={item.key} style={style}>{item.name}</Link>)}
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
            {linkList()}
            {routeList()}
        </Router>
    )

}
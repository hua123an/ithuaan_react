import { Tabs, Typography } from '@arco-design/web-react';
import {Home} from "../Views/Home/Home.jsx";
import {AI} from "../Views/AI/AI.jsx";
import {Blog} from "../Views/Blog/Blog.jsx";
import {Programming} from "../Views/Programming/Programming.jsx";
import {Source} from "../Views/Source/Source.jsx";
import {Key} from "../Views/Key/Key.jsx";
import {OpenSource} from "../Views/OpenSource/OpenSource.jsx";
import {Academic} from "../Views/Academic/Academic.jsx";
import {University} from "../Views/University/University.jsx";
const TabPane = Tabs.TabPane;
const style = {
    textAlign: 'center',
    marginTop: 20,
};

export const Header = () => {
    const tabList = ([
        {
            "key" : 1,
            "name" : 'Home',
            "to" : '/',
            "element" : <Home/>
        },
        {
            "key" : 2,
            'name' : 'AI',
            "to" : "ai",
            "element" : <AI />
        },
        {
            "key" : 3,
            "name" : 'Blog',
            "to" : 'blog',
            "element " : <Blog />
        },
        {
            "key" : 4,
            'name' : 'Academic',
            "to" : 'academic',
            "element" : <Academic />
        },
        {
            "key" : 5,
            "name" : 'Programming',
            "to" : 'programming',
            "element" : <Programming />
        },
        {
            "key" : 6,
            "name" : 'University',
            "to" : 'university',
            "element" : <University />
        },
        {
            "key" : 7,
            "name" : 'source',
            "to" : 'source',
            "element " : <Source />

        },
        {
            "key" : 8,
            "name" : 'Key',
            "to" : 'key',
            "element" : <Key />
        },
        {
            "key" : 9,
            "name" : 'OpenSource',
            "to" : 'opensource',
            "element" : <OpenSource />
        }])
    return (
        <div className="header" style={{textAlign : "center"}}>
                <h2>ithuaan</h2>
            <Tabs defaultActiveTab='1'>
                {tabList.map((item, index ) => Object (
                    <TabPane key={item.key} title={<span>{item.name}</span>}>
                        <Typography.Paragraph style={style}>{item.element}</Typography.Paragraph>
                    </TabPane>
                ))}
            </Tabs>
        </div>
    )
}
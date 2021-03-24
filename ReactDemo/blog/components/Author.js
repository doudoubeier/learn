import { Avatar, Divider } from 'antd'
import '../static/styles/pages/author.css'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} />
            </div>
            <div className="author-introduction">
                此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className="account" />
                <Avatar size={28} icon={<QqOutlined />} className="account" />
                <Avatar size={28} icon={<WechatOutlined />} className="account" />
            </div>
        </div>
    )
}

export default Author
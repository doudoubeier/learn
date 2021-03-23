import Link from 'next/link'
import { withRouter } from 'next/router'
import axios from 'axios'

const fromPage = ({ router, list }) => {
    return (
        <>
            <div>{router.query.name}</div>
            <div>a页面</div>
            <Link href="/"><a>返回首页</a></Link>
        </>
    )
}

fromPage.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        axios('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) => {
            console.log('获取数据', res)
            resolve(res.data.data)
        })
    })
    return await promise
}

export default withRouter(fromPage)
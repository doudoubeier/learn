// import Hello from '../components/hello'

// export default () => <Hello>按钮</Hello>
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
  return (
    <>
      <div>我是首页</div>
      {/* <Link href={{ pathname: "/a", query: { name: '小红' } }}><a>跳转至a页面</a></Link> */}
      <Link href="/a?name=小红"><a>跳转至a页面</a></Link>
      <br />
      <Link href="/b"><a>跳转至b页面</a></Link>
      <br />
      <Link href="#hello"><a>hello</a></Link>
      <button onClick={goToA}>按钮跳转到a页面</button>
    </>
  )
}

function goToA() {
  // Router.push('/a?name=小明')
  Router.push(
    {
      pathname: '/a',
      query: {
        name: '小明'
      }
    }
  )
}
// 路由发生变化时
Router.events.on('routeChangeStart', (...args) => {
  console.log('1.routeChangeStart->路由开始变化,参数为:', ...args);
})

// 路由结束变化时
Router.events.on('routeChangeComplete', (...args) => {
  console.log('2.routeChangeComplete->路由结束变化,参数为:', ...args);
})

// 浏览器history触发前
Router.events.on('beforeHistoryChange', (...args) => {
  console.log('3.beforeHistoryChange->浏览器history触发前,参数为:', ...args);
})

// 路由跳转发生错误时
Router.events.on('routeChangeError', (...args) => {
  console.log('4.routeChangeError->路由跳转发生错误时,参数为:', ...args);
})

// hash跳转开始时
Router.events.on('hashChangeStart', (...args) => {
  console.log('5.hashChangeStart->hash跳转开始时,参数为:', ...args);
})

// hash跳转完成时
Router.events.on('hashChangeComplete', (...args) => {
  console.log('6.hashChangeComplete->hash跳转完成时,参数为:', ...args);
})

export default Home
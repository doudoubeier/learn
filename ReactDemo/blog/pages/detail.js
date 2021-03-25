import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import { CalendarOutlined, FolderOpenOutlined, FireOutlined } from '@ant-design/icons'
import moment from 'moment'
import ReactMarkDown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/styles/pages/detailed.css'

const Detail = () => {
    let markdown = '# P01:课程介绍和环境搭建\n' +
        '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
        '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
        '**这是加粗的文字**\n\n' +
        '*这是倾斜的文字*`\n\n' +
        '***这是斜体加粗的文字***\n\n' +
        '~~这是加删除线的文字~~ \n\n' +
        '\`console.log(111)\` \n\n' +
        '# p02:来个Hello World 初始Vue3.0\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n' +
        '***\n\n\n' +
        '# p03:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p04:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '#5 p05:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p06:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p07:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '``` var a=11; ```'
    const [myList, setList] = useState(
        [
            { title: 'vue练习demo', content: 'vue 是一套用于构建用户界面的渐进式框架' },
            { title: 'react练习demo', content: 'react 是一个用于构建用户界面的 JavaScript 库' },
        ]
    )
    const time = moment().format('YYYY-MM-DD HH:mm:ss')
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <div>
                        <div className="bread-div">
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <a href="/">首页</a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <a href="/list">列表</a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <a href="#">xxx</a>
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>

                        <div>
                            <div className="detailed-title">
                                走过路过的，就没放过的
                            </div>
                            <div className="list-icon center">
                                <span><CalendarOutlined />{time}</span>
                                <span><FolderOpenOutlined /> 1</span>
                                <span><FireOutlined /> 2</span>
                            </div>

                            <div className="detailed-content" >
                                <ReactMarkDown source={markdown} escapeHtml={false} />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="comm-box" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Advert />
                    <Affix offsetTop={5}>
                        <div className="detail-nav comm-box">
                            <div className="nav-title">目录</div>
                            <MarkNav className="article-menu" source={markdown} order={false}></MarkNav>
                        </div>
                    </Affix>
                </Col>
            </Row>
            <Footer />
        </div>
    )
}

export default Detail
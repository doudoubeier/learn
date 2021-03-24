import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, List } from 'antd'
import { CalendarOutlined, FolderOpenOutlined, FireOutlined } from '@ant-design/icons'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import moment from 'moment'

const Home = () => {
  const [myList, setList] = useState(
    [
      { title: 'vue练习demo', content: 'vue 是一套用于构建用户界面的渐进式框架' },
      { title: 'react练习demo', content: 'react 是一个用于构建用户界面的 JavaScript 库' },
    ]
  )
  const time = moment().format('YYYY-MM-DD HH:mm:ss');
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={myList}
            renderItem={item => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span><CalendarOutlined />{time}</span>
                  <span><FolderOpenOutlined /> 1</span>
                  <span><FireOutlined /> 2</span>
                </div>
                <div className="list-context">{item.context}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-box" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default Home
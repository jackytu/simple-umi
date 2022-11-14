import { Breadcrumb, Layout, Menu } from 'antd';

import React from 'react';
import styles from './main.less';
import Navigation from '@/components/navigation/Navigation';

const { Header, Content, Footer } = Layout;

const menu : any[] = [
  {
    id: 1,
    title: '日志服务',
    description: '日志服务',
    avatar: 'log',
    url: 'https://baidu.com',
  },
  {
    id: 2,
    title: '指标服务',
    description: '指标服务',
    avatar: 'metric',
    url: 'https://163.com',
  },
  {
    id: 3,
    title: '持续集成',
    description: '持续集成',
    avatar: 'jenkins',
    url: 'https://sina.com',
  },
  {
    id: 4,
    title: '代码仓库',
    description: '代码仓库',
    avatar: 'gitlab',
    url: 'https://grafana.com',
  },
];

const Main: React.FC = () => (
    <Layout className={styles.siteLayout}>

        <Header className={styles.siteLayoutHeader}>
        <div className={styles.logo} ></div>
        <Menu
        theme="dark"
        mode="horizontal"
        >
         { menu.map((item, index) => {
          const key = index + 1;
          return (
            <Menu.Item key={key}><a href="https://baidu.com">{item.title}</a></Menu.Item>);
        })}
        </Menu>
            {/* <div className="logo" ><img src="/src/assets/logo/logo.png"/>基础服务</div> */}
        </Header>
        {/* <Content style={{ padding: '0 50px' }}> */}
        <Content>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className={styles.siteLayoutContent}>
                <Navigation />
            </div>
        </Content>
        <Footer className={styles.siteLayoutFooter}>Copyright @2022 Pujiang Lab</Footer>
    </Layout>
);

export default Main;
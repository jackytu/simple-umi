import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import styles from './main.less';
import Navigation from '@/components/navigation/Navigation';

const { Header, Content, Footer } = Layout;

const Main: React.FC = () => (
    <Layout className="layout">
        <Header>
            <div className="logo" />
            {/* <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(1).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      /> */}
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.siteLayoutContent}>
                <Navigation />
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
);

export default Main;
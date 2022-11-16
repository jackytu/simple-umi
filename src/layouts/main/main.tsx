import { Breadcrumb, Layout, Menu } from 'antd';

import React from 'react';
import styles from './main.less';
import Navigation from '@/components/navigation/Navigation';
import Universe from '@/components/universe/universe';
import Scene from '@/components/univ2/univ2';
import App from '@/components/fiber-demo/demo1';

const { Header, Content, Footer } = Layout;

const menu: any[] = [
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
    <Header className={styles.siteLayoutHeader}></Header>
    <Content>
      <div className={styles.siteLayoutContent}>
        <div>{Universe()}</div>
      </div>
    </Content>
    <Footer className={styles.siteLayoutFooter}>
      Copyright @2022 Pujiang Lab
    </Footer>
  </Layout>
);

export default Main;

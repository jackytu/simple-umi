import { Col, Card, Divider, Avatar, Image, Button, Popover, Row } from 'antd';
import NCard from '@/components/navicard/navicard';
import styles from './Navigation.less';

const list: any[] = [
  {
    id: 1,
    title: '日志服务',
    description: '日志服务，主要用于服务日志的收集与分析',
    avatar: 'log',
    url: 'https://baidu.com',
  },
  {
    id: 2,
    title: '指标服务',
    description: '指标服务，主要用于服务指标的采集',
    avatar: 'metric',
    url: 'https://163.com',
  },
  {
    id: 3,
    title: '持续集成',
    description: '持续集成，主要用于代码的持续集成',
    avatar: 'jenkins',
    url: 'https://sina.com',
  },
  {
    id: 4,
    title: '代码仓库',
    description: '代码仓库，主要用于代码的版本管理',
    avatar: 'gitlab',
    url: 'https://grafana.com',
  },
];

const MCard: React.FC<{
  title: string;
  index: number;
  url: string;
  description: string;
  avatar: string;
}> = (props) => (
  <div>
    <div>
      <NCard
        key={props.index}
        title={props.title}
        description={props.description}
        url={props.url}
        label={props.avatar}
      >
        {props.avatar}
      </NCard>
    </div>
  </div>
);

const Navigation: React.FC = () => (
  <Row justify="center">
    {list.map((item, index) => {
      const card = (
        <MCard
          key={index}
          title={item.title}
          url={item.url}
          description={item.description}
          avatar={item.avatar}
          index={index}
        ></MCard>
      );
      return (
        <Col key={index} span={3}>
          <Popover key={index} placement="bottom" content={card}>
            <div className={styles.container}>
              <div className={styles.btn}>
                <a className={styles.a}>{item.title}</a>
              </div>
            </div>
          </Popover>
        </Col>
      );
      <Divider
        style={{
          height: '1.5em',
        }}
        type="vertical"
      />;
    })}
  </Row>
);

export default Navigation;

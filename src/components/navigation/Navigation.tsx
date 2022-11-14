import { Col, Card, Divider, Button, Popover, Row } from 'antd';
import NCard from '@/components/navicard/navicard';

const list: any[] = [
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

const MCard: React.FC<{
  title: string;
  index: number;
  url: string;
  avatar: string;
}> = (props) => (
  <div>
  <div>
    <NCard key={props.index} title={props.title} url={props.url} label={props.avatar}>
      {props.avatar}
    </NCard>
  </div>
  </div>
);

const Navigation: React.FC = () => (
  <Row justify="center">
    {list.map((item, index) => {
      const card = (
        <MCard title={item.title} url={item.url} avatar={item.avatar} index={index}></MCard>
      )
      return (
        <Col span={4}>
          <Popover placement="bottom" content={card}><Button type="primary">{item.title}</Button></Popover>
        </Col>
      );
      <Divider
        style={{
          height: '1.5em',
        }}
        type="vertical"
      />
    })}
  </Row>
)

export default Navigation;
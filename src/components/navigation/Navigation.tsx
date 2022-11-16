import { Col, Card, Divider, Avatar, Image, Button, Popover, Row } from 'antd';
import NCard from '@/components/navicard/navicard';
import styles from './Navigation.less';

const list: any[] = [
  {
    id: 1,
    title: '日志服务',
    description: '日志服务，主要用于服务日志的收集与分析',
    avatar: 'log',
    url: 'http://dashboard.pjlab.org.cn',
  },
  {
    id: 2,
    title: '指标服务',
    description: '指标服务，主要用于服务指标的采集',
    avatar: 'metric',
    url: 'http://dashboard.pjlab.org.cn',
  },
  {
    id: 3,
    title: '持续集成',
    description: '持续集成，主要用于代码的持续集成',
    avatar: 'jenkins',
    url: 'http://ci.pjlab.org.cn',
  },
  {
    id: 4,
    title: '代码仓库',
    description: '代码仓库，主要用于代码的版本管理',
    avatar: 'gitlab',
    url: 'http://gitlab.pjlab.org.cn',
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

const cardList = new Array(list.length);
list.map((item, index) => {
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
  cardList.push(card);
});

const Navigation: React.FC = () => (
  <div className={styles.container}>
    <Popover key={0} placement="bottom" content={cardList.pop()}>
      <div className={styles.btn}>
        <a className={styles.a} href={list[0].url}>
          {list[0].title}
        </a>
      </div>
    </Popover>
    <Popover key={1} placement="bottom" content={cardList.pop()}>
      <div className={styles.btn}>
        <a className={styles.a} href={list[1].url}>
          {list[1].title}
        </a>
      </div>
    </Popover>
    <Popover key={2} placement="bottom" content={cardList.pop()}>
      <div className={styles.btn}>
        <a className={styles.a} href={list[2].url}>
          {list[2].title}
        </a>
      </div>
    </Popover>
    <Popover key={3} placement="bottom" content={cardList.pop()}>
      <div className={styles.btn}>
        <a className={styles.a} href={list[3].url}>
          {list[3].title}
        </a>
      </div>
    </Popover>
  </div>

  // <Row justify="center">
  //   {list.map((item, index) => {
  //     const card = (
  //       <MCard
  //         key={index}
  //         title={item.title}
  //         url={item.url}
  //         description={item.description}
  //         avatar={item.avatar}
  //         index={index}
  //       ></MCard>
  //     );
  //     return (
  //       <Col key={index} span={3}>

  //         </Popover>
  //         <Popover key={index} placement="bottom" content={card}>
  //             <div className={styles.btn}>
  //               <a className={styles.a} href={item.url}>
  //                 {item.title}
  //               </a>
  //             </div>
  //         </Popover>
  //         <Popover key={index} placement="bottom" content={card}>
  //             <div className={styles.btn}>
  //               <a className={styles.a} href={item.url}>
  //                 {item.title}
  //               </a>
  //             </div>
  //         </Popover>
  //         </div>

  //       </Col>
  //     );
  //   })}
  // </Row>
);

export default Navigation;

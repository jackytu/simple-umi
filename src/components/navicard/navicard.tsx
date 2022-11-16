import { Card } from 'antd';
// import styles from './item.less';
const { Meta } = Card;

const NCard: React.FC<{
  title: string;
  url: string;
  label: string;
  description: string;
  children: React.ReactNode;
}> = (props) => (
  <div>
    <Card
      // hoverable
      style={{ width: 600 }}
      cover={
        <img
          alt="example"
          src={require('/src/assets/demos/' + props.label + '-demo.png')}
        />
      }
    >
      <Meta title={props.title} description={props.description}></Meta>
    </Card>
  </div>
);
export default NCard;

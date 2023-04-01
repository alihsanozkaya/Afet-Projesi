import { Button, Popover, Avatar, List} from 'antd';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
];
const Liste = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
);


const content = (
  <div>
    <Liste/>
  </div>
);
const Notification = () => (
  <Popover content={content} title="Görevleriniz">
    <Button className='btn btn-warning mx-1' style={{width:"37.6px", height:"37.6px" ,borderRadius: "10px", padding: "2px"}} icon={<i className="fa-solid fa-bell fa-beat-fade"></i>}></Button>
  </Popover>
);
export default Notification;
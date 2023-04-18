import { Button, Popover, List} from 'antd';
import "../CSS/Scroll.css"
import UserTaskList from './UserTaskList';

const Notification = () => (
  <Popover trigger={'click'} content={<UserTaskList />} title="Görevleriniz">
    <Button className='btn btn-warning mx-1' style={{width:"37.6px", height:"37.6px" ,borderRadius: "10px", padding: "2px"}} icon={<i className="fa-solid fa-bell fa-beat-fade"></i>}></Button>
  </Popover>
);
export default Notification;
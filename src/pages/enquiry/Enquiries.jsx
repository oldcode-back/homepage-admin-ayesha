//antd imports
import { Space, Table } from 'antd';
//image imports
import logo from '../../assets/images/logo.svg'
//react imports
import { Link } from 'react-router-dom';

const columns = [
    {
        title: 'S.No',
        dataIndex: 'key',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email ID',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Mobile No.',
        dataIndex: 'mobile',
        key: 'mobile',
    },
    {
        title: 'Actions',
        key: 'action',
        render: () => (
            <Space size="middle">
                <button type="button">View</button>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        email: "example@gmail.com",
        mobile: "0987654321",
    },
    {
        key: '2',
        name: 'John Brown',
        email: "example@gmail.com",
        mobile: "0987654321",
    },
    {
        key: '3',
        name: 'John Brown',
        email: "example@gmail.com",
        mobile: "0987654321",
    },
];


const Enquiries = () => {


    return (
        <main className="page">
            <div className="page-header">
                <h1>Enquiry Details</h1>
            </div>

            <div className='table-div'>
                <Table columns={columns} dataSource={data} />
            </div>

        </main>
    )
}
export default Enquiries
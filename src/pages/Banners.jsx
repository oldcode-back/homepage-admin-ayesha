//antd imports
import { Space, Table } from 'antd';
import logo from '../assets/images/logo.svg'

const columns = [
    {
        title: 'S.No',
        dataIndex: 'key',
    },
    {
        title: 'Banner Image',
        key: 'image',
        render: () => (
            <Space size="middle">
                <img src={logo} alt="" />
            </Space>
        ),
    },
    {
        title: 'Context',
        dataIndex: 'context',
        key: 'context',
    },
    {
        title: 'Actions',
        key: 'action',
        render: () => (
            <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        context: "qwertyuioiuytrsdfghjkjhgfcvbhnjkmjnbvcv5eydrfgxcvbjhiou8y97tr67etdycghvjbkiu98765rtydcghvjbkiu978r6dtfcghvbjiu  qwertyuioiuytrsdfghjkjhgfcvbhnjkmjnbvcv5eydrfgxcvbjhiou8y97tr67etdycghvjbkiu98765rtydcghvjbkiu978r6dtfcghvbjiuqwertyuioiuytrsdfghjkjhgfcvbhnjkmjnbvcv5eydrfgxcvbjhiou8y97tr67etdycghvjbkiu98765rtydcghvjbkiu978r6dtfcghvbjiu"
    },
    {
        key: '2',
        name: 'Jim Green',
        context: "ghvjbkiu98765rtydcghvjbkiu978r6dtfcghvbjiu",
    },
    {
        key: '3',
        name: 'Joe Black',
        context: "qwertyuioiuytrsd"
    },
];


const Banners = () => {
    return (
        <main className="page">
            <div className="page-header">
                <h1>Banners</h1>
                <button>Add banner</button>
            </div>

            <div className='table-div'>
                <Table columns={columns} dataSource={data} />
            </div>

        </main>
    )
}
export default Banners
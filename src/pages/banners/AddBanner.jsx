//styled-component imports
import Wrapper from '../../assets/Wrappers/Form';
//antd imports
import { Select, Button, Upload } from 'antd';
import { AiOutlineCloudUpload } from "react-icons/ai";
//react imports
import { useNavigate } from 'react-router-dom';

const AddBanner = () => {

    const navigate = useNavigate();

    // const handleChange = (value) => {
    //     console.log(`selected ${value}`);
    // };

    // const fileList = [
    //     {
    //         uid: '0',
    //         name: 'xxx.png',
    //         status: 'uploading',
    //         percent: 33,
    //     },
    //     {
    //         uid: '-1',
    //         name: 'yyy.png',
    //         status: 'done',
    //         url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    //         thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    //     },
    //     {
    //         uid: '-2',
    //         name: 'zzz.png',
    //         status: 'error',
    //     },
    // ];
    return (
        <main className="page">
            <div className="page-header">
                <h1>Add Banner</h1>
            </div>


            <Wrapper>
                <form>
                    <div className="form-input">
                        <label htmlFor="bannerName">Banner Title</label>
                        <br />
                        <input type="text" placeholder="enter banner title" id="bannerName" />
                    </div>

                    {/* <div className="form-input">
                        <label htmlFor="bannerId">Banner No.</label>
                        <br />
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'disabled',
                                    label: 'select banner id',
                                    disabled: true,
                                },
                                {
                                    value: '1',
                                    label: '1',
                                },
                                {
                                    value: '2',
                                    label: '2',
                                },
                                {
                                    value: '3',
                                    label: '3',
                                },

                            ]}
                        />
                    </div> */}

                    <div className="form-input">
                        <label htmlFor="bannerUpload">Upload upto 4 Banner Images</label>
                        <br />
                        <Upload
                            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                            listType="picture"
                        // defaultFileList={[...fileList]}
                        >
                            <Button className='upload-btn' icon={<AiOutlineCloudUpload />}>Upload</Button>
                        </Upload>
                    </div>

                    <div className='form-buttons'>
                        <button type='submit'>Submit</button>
                        <button type='button' className='cancel-btn' onClick={() => navigate('/dashboard/banners')}>Cancel</button>
                    </div>
                </form>
            </Wrapper>
        </main>
    )
}
export default AddBanner
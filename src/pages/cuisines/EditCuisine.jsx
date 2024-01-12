//styled-component imports
import Wrapper from '../../assets/Wrappers/Form';
//antd imports
import { Button, Upload } from 'antd';
import { AiOutlineCloudUpload } from "react-icons/ai";
//react imports
import { useNavigate } from 'react-router-dom';

const EditCuisine = () => {

    const navigate = useNavigate();

    return (
        <main className="page">
            <div className="page-header">
                <h1>Edit Cuisine</h1>
            </div>


            <Wrapper>
                <form>
                    <div className="form-input">
                        <label htmlFor="cuisineName">Cuisine Title</label>
                        <br />
                        <input type="text" placeholder="enter cuisine title" id="cuisineName" />
                    </div>

                    <div className="form-input">
                        <label htmlFor="imageUpload">Upload Images</label>
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
                        <button type='button' className='cancel-btn' onClick={() => navigate('/dashboard/cuisines')}>Cancel</button>
                    </div>
                </form>
            </Wrapper>
        </main>
    )
}
export default EditCuisine
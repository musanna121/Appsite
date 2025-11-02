import {FaDownload} from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';

const SingleApp = ({app}) => {
    const {image, downloads, title} = app
    return (
        <div>
            <div className="shadow-sm bg-white rounded-3xl">
             <img className='p-4 rounded-4xl'
                src={image} />
                <h3 className='font-bold text-xl text-left ml-5'>{title}</h3>
            <div className="card-body">
                <div className="flex justify-between">
                    <button className='flex items-center bg-green-300 rounded-sm px-2 py-1 text-green-600'><FaDownload style={{color:'green'}}/><span className='pl-2'>{downloads}</span></button>
                    <button className='flex items-center bg-orange-300 rounded-sm px-2 py-1'><FaStar style={{color:'#f57b42'}}/><span className='text-orange-700'>5</span></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleApp;
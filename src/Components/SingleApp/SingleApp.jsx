import {FaDownload} from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router';


const SingleApp = ({app}) => {
    const {image, id, downloads, title} = app
    
    return (
        <div>
            <Link to={`/appdetails/${id}`}>
                <div className="shadow-sm bg-white rounded-3xl hover:cursor-pointer">
             <img className='p-4 rounded-4xl'
                src={image} />
                <h3 className='font-bold text-xl text-left ml-5'>{title}</h3>
            <div className="card-body">
                <div className="flex justify-between">
                    <button className='flex items-center bg-gray-200 rounded-sm px-2 py-1 text-green-600'><FaDownload style={{color:'green'}}/><span className='pl-2 font-bold'>{downloads/1000000}M</span></button>
                    <button className='flex items-center bg-yellow-200 rounded-sm px-2 py-1'><FaStar style={{color:'#f57b42'}}/><span className='text-orange-700 pl-2 font-bold'>5</span></button>
                </div>
            </div>
            </div>
            </Link>
            
        </div>
    );
};

export default SingleApp;
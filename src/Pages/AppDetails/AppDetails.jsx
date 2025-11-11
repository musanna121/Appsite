import Rating from '../../Components/Rating/Rating';
import { FaDownload, FaStar} from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';
import { FaThumbsUp } from 'react-icons/fa6';

const AppDetails = () => {
    const {id} = useParams();
    const appId = parseInt(id);
    console.log(appId);
    const data = useLoaderData();
    const appData = data.find((app)=> app.id === appId)
    console.log(appData);
    const {image, title, companyName, ratings, description, downloads, size} = appData
    return (
        <div className="bg-[#f5f5f5]">
        <div className='w-11/12 mx-auto'>
           <div className="flex mt-15 mb-10">
                <img src={image} alt="" />  
                <div className="pl-5 w-12/12">
                    <div className="pb-7 border-b-2 border-b-gray-300">
                        <h3 className='text-3xl font-bold'>{title}</h3>
                        <h3 className='text-sm  text-[#627382]'><span 
                        className='font-bold text-[#8a59ec]'>{companyName}</span></h3>
                    </div>
                    <div className="flex gap-10 pt-7">
                        <div className="">
                            <div className="flex flex-col items-center">
                                <FaDownload className="text-5xl text-[#03c551]" /> 
                                </div>
                                <p className="text-center">Downloads</p>
                                <p className="text-4xl font-bold text-center">{downloads/1000000}M</p>
                        </div>
                        <div className="">
                            <div className="flex flex-col items-center">
                                <FaStar className="text-5xl text-[#ffa500]" /> 
                                </div>
                                <p className="text-center">Stars</p>
                                <p className="text-4xl font-bold text-center">4.9</p>
                        </div>
                        <div className="">
                            <div className="flex flex-col items-center">
                                <FaThumbsUp className="text-5xl text-[#8a59ec]" /> 
                                </div>
                                <p className="text-center">Likes</p>
                                <p className="text-4xl font-bold text-center">54k</p>
                        </div>
                        
                    </div>
                    <button className='btn mt-7 bg-[#03c551] text-white font-bold '>Install Now ({size}MB)</button>
                </div>
                
           </div>
           
           <div className="border-t-2 border-t-gray-300 border-b-2 border-b-gray-300 pb-5 mb-5">
            <h3 className='font-bold pt-5'>Ratings</h3>
            <Rating ratings={ratings}></Rating>
           </div>
           <div className="">
            <h3 className='font-bold pb-5'>Description</h3>
            <p className='pb-5'>{description}</p>
            <p className='pb-5'>{description}</p>
            <p className='pb-5'>{description}</p>
           </div>
           
        </div></div>
    );
};

export default AppDetails;
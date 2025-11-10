import { useLoaderData } from 'react-router';
import { Suspense } from 'react';
import SingleApp from '../../Components/SingleApp/SingleApp';

const AppPage = () => {
    const apps = useLoaderData();
    return (
        <div className="">
            <div className="p-10">
                <h3 className='font-bold text-4xl text-center '>Our All Applications</h3>
                <p className='text-center pt-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            
            <div className='grid md:grid-cols-4 gap-5 bg-[#f5f5f5] w-11/12 mx-auto'>
           <Suspense fallback={<span>Loading....</span>}>
                {apps.map((app)=><SingleApp key={app.id} app={app}></SingleApp>) }
            </Suspense>
        </div>
        </div>
        
    );
};

export default AppPage;
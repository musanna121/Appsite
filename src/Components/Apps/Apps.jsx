import React from 'react';
import SingleApp from '../SingleApp/SingleApp';
import { Suspense } from 'react';

const Apps = ({apps}) => {
    return (
        <div className='grid md:grid-cols-4 gap-5 bg-[#f5f5f5] w-11/12 mx-auto'>
            <Suspense fallback={<span>Loading....</span>}>
                {apps.map((app)=><SingleApp key={app.id} app={app}></SingleApp>) }
            </Suspense>
            
        </div>
    );
};

export default Apps;
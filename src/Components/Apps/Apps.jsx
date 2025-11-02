import React from 'react';
import SingleApp from '../SingleApp/SingleApp';

const Apps = ({apps}) => {
    return (
        <div className='grid grid-cols-4 gap-5'>
            {apps.map((app)=><SingleApp key={app.id} app={app}></SingleApp>) }
        </div>
    );
};

export default Apps;
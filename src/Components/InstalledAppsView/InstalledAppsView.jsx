import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';


const InstalledAppsView = ({appList}) => {
    console.log(appList)
    return (
        <div>
            <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      

      <div className="flex items-center space-x-4">
        
        <div className="w-16 h-16 bg-gray-300 rounded-lg ">
        </div>

        <div>
          <p className="text-lg font-semibold text-gray-800"></p>
          <div className="flex items-center text-sm text-gray-500 space-x-3 mt-1">

            <span className="flex items-center text-green-500">
              <FaDownload/>
              <span className="ml-1"></span>
            </span>

            <span className="flex items-center text-yellow-400">
              <FaStar/>
                <span className="ml-1"></span>
                </span>
                <span></span>
            </div>
            </div>
            </div>
            <button 
                className="px-6 py-2 text-white font-medium bg-green-500 rounded-full hover:bg-green-600 transition duration-150 ease-in-out shadow-md"
                >
                Uninstall
            </button>
            </div>
        </div>
    );
};

export default InstalledAppsView;
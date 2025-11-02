import React from 'react';

const SingleApp = ({app}) => {
    const {image, title, id, companyName, description, downloads} = app
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                src={image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>{companyName}</p>
                <p>{id}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">{downloads}</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleApp;
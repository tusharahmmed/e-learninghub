import React from 'react';

const Widget = () => {
    return (
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <span className="text-gray-600 hover:text-gray-800">First Link</span>
                            </li>
                            <li>
                                <span className="text-gray-600 hover:text-gray-800">Second Link</span>
                            </li>
                            <li>
                                <span className="text-gray-600 hover:text-gray-800">Third Link</span>
                            </li>
                            <li>
                                <span className="text-gray-600 hover:text-gray-800">Fourth Link</span>
                            </li>
                        </nav>
                    </div>
    );
};

export default Widget;
import './Course.css';

import React from 'react';
import CourseItem from '../CourseItem/CourseItem';

const Course = (props) => {

    const { data, value } = props;

    let newData = [];

    // if have data
    if (data.length !== 0) {
        for (let i = 0; i < value; i++) {
            newData.push(data[i]);
        }
    }

    return (
        <div>
            <div className="xl:min-h-screen bg-gray-100">
                <div className="course-title relative">
                    <h1 className="text-center text-2xl py-6 md:text-5xl md:pt-20 text-gray-600">Our Course</h1>
                </div>
                <div className="container px-4 md:px-16">
                    <div className="pb-5 md:py-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-10 md:gap-y-10 lg:gap-y-0 xl:gap-x-12 lg:gap-y-10">
                        {
                            newData.map((item) => <CourseItem key={item?.id} data={item}></CourseItem>)
                        }
                    </div>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Course;
import React from 'react';
import { htmlData } from '../assets/card_data';
import '../App.css';     
const Objects = () => {
  return (
    <div className="w-[300px] h-[400px] bg-white">
      <div className="flex space-x-28 m-20">
        {htmlData.map((item, index) => (
          <div key={index}>
            <div dangerouslySetInnerHTML={{ __html: item.Title }} ></div>
            <div dangerouslySetInnerHTML={{ __html: item.content }} className="content"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Objects;
import React from 'react'
import { useState } from "react";
import { faqs } from '../constant';


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section py-12">
      <div className="content max-w-4xl mx-auto">
        <h2 className="text-center font-lexend font-bold text-2xl md:text-3xl text-textBlue mb-6">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-4">
          {faqs.map(({id, question, answer}) => (
            <div key={id} className="bg-white shadow-md rounded-lg">
              <button
                onClick={() => toggleFAQ(id)}
                className="w-full text-left flex justify-between items-center p-4 font-lexend font-medium text-lg text-textBlue"
              >
                {question}
                <span className="text-xl">{openIndex === id ? "▲" : "▼"}</span>
              </button>
              {openIndex === id && (
                <p className="p-4 text-textGrey border-t">{answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
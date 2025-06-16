"use client";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { faqs } from "../../../constants";


export default function QuestionsAnswers() {
  const [openStates, setOpenStates] = useState<boolean[]>(
    Array(faqs.length).fill(false)
  );

  const toggleFAQ = (index: number) => {
    const updated = [...openStates];
    updated[index] = !updated[index];
    setOpenStates(updated);
  };

  return (
    <div className=" w-[80%] mx-auto px-4 py-10">
      <h3 className="text-center">FAQs</h3>
      <h4 className="text-3xl font-bold text-center my-6">Frequently Asked Questions</h4>
      <h5 className="text-center my-6 ">Have Questions?  We’re here to help.</h5>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 hover:bg-gray-200 transition"
            >
              <span className="text-lg font-semibold text-left">{faq.question}</span>
              {openStates[index] ? (
                <AiOutlineMinus className="text-xl" />
              ) : (
                <AiOutlinePlus className="text-xl" />
              )}
            </button>
            {openStates[index] && (
              <div className="px-6 py-4 bg-white text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

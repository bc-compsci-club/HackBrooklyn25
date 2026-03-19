import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Question 1",
      answer: "Answer 1"
    },
    {
      question: "Question 2",
      answer: "Answer 2"
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="bg-[#644840] flex min-h-screen">
      <div className="w-2/3 flex flex-col justify-center p-8">
        <h2 className="text-[clamp(32px,6vw,120px)] font-spenbebgame text-white mb-8">FAQ</h2>
        <div className="w-full max-w-2xl">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-white/30">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left py-4 px-4 bg-[#5a3d35] hover:bg-[#6b4a41] text-white flex justify-between items-center transition"
              >
                <span>{faq.question}</span>
                <motion.span 
                  className="text-xl"
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? '−' : '+'}
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    className="px-4 py-3 bg-[#523530] text-white/90"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/3 flex items-center justify-center p-8">
        <img src="/images/coffee.svg" alt="Coffee" className="h-auto w-auto max-w-sm" />
      </div>
    </div>
  );
}

export default Faq;
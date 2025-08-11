// src/components/Contact.jsx
import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

// ✅ EmailJS v3: 앱 로드 시 1회 초기화
emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
});

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    try {
      setLoading(true);
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current
      );
      alert("메시지 전송 완료! 곧 연락드릴게요.");
      formRef.current.reset();
    } catch (err) {
      console.error("EMAILJS ERROR =>", err);
      alert(`전송 실패: ${err?.text || err?.message || "알 수 없는 오류"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 100 },
          show: {
            opacity: 1,
            y: 0,
            transition: { type: "tween", duration: 1, delay: 0.2 },
          },
        }}
        className="flex-[0.8] md:pb-40 mx-4 sm:mx-auto"
      >
        <h3 className={styles.sectionText}>Contact</h3>

        {/* ✅ action/method 제거, ref + onSubmit 사용 */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 gap-4 flex flex-col"
        >
          <span className="text-white font-medium mt-3">Full Name</span>
          <input
            name="name" // 템플릿 변수와 동일해야 함: {{name}}
            type="text"
            placeholder="Enter your full name"
            className="bg-tertiary p-4 text-white border font-medium"
            required
          />

          <span className="text-white font-medium mt-3">Email Address</span>
          <input
            name="email" // {{email}}
            type="email"
            placeholder="Enter your email address"
            className="bg-tertiary p-4 text-white border font-medium"
            required
          />

          <span className="text-white font-medium mt-3">Message</span>
          <textarea
            name="message" // {{message}}
            rows="10"
            placeholder="Enter your message"
            className="bg-tertiary p-4 text-white border font-medium"
            required
          />

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

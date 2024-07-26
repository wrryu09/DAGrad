import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./card.css";

const Card = () => {
  const cardSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardSectionRef,
  });
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  return (
    <div
      className="h-[50rem] flex flex-col justify-center gap-32"
      ref={cardSectionRef}
    >
      <div className="w-10/12 relative flip-card">
        <motion.div style={{ rotateY }} className="flip-card-inner">
          <div className="flip-card-front" />
          <div className="flip-card-back" />
        </motion.div>
      </div>
      <p className="whitespace-pre-wrap mb-10">
        스미지 유형에 맞는 {"\n"}카드를 한 장씩 가져가 주세요!
      </p>
    </div>
  );
};

export default Card;

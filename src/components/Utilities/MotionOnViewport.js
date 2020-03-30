import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import omit from "lodash/omit";

function MotionOnViewport(props) {
  const ref = React.createRef();
  const [executeAnimation, setExecuteAnimation] = useState(false);
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === ref.current && entry.isIntersecting) {
          setExecuteAnimation(true);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      threshold: 1,
    });

    observer.observe(ref.current);
  });
  const motionProps = omit(props, ["children"]);
  return executeAnimation ? (
    <motion.div ref={ref} {...motionProps}>
      {props.children}
    </motion.div>
  ) : (
    <div ref={ref} />
  );
}

export default MotionOnViewport;

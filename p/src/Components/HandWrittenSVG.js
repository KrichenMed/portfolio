import React, { useEffect } from "react";
import anime from "animejs";

const HandwrittenTextAnimation = () => {
  useEffect(() => {
    // Timeout to remove the div after 1 second
    const timeout = setTimeout(() => {
      const Div = document.getElementById("Div");
      if (Div) {
        Div.style.display = "none";
      }
    }, 1200);

    // Cleanup function
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    // Select SVG path elements with class 'path'
    const svgPaths = document.querySelectorAll(".path");

    // Animation configuration
    const svgText = anime.timeline({
      targets: svgPaths,
      loop: false,
      direction: "alternate",
      easing: "easeInOutSine",
    });

    // Add animations for each path
    svgPaths.forEach((path, index) => {
      svgText.add({
        targets: path,

        strokeDashoffset: [anime.setDashoffset, 2],
        fill: ["#fff"],
        duration: 90,
        delay: index * 1,
      });
    });

    // Cleanup function to stop the animation when the component unmounts
    return () => {
      svgText.pause(); // Pause the animation
    };
  }, []);

  return (
    <div
      id="Div"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        zIndex: 9999,
        animation: "fadeOut 1s forwards",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h3 style={{ width: "300px" }}>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 200"
          >
            <path
              class="path"
              d="M646.21,548a42,42,0,0,1,1.2-8.43,24.38,24.38,0,0,1,3.23-8.42q5.13-8,9.44-14.64T667.73,505a94,94,0,0,1,6.69-8.63q20.43-24.16,29.28-36.12t8.84-16.66a5.57,5.57,0,0,0-2.63-4.89A12.19,12.19,0,0,0,703,436.9q-8.85,0-22.23,6.86T649.5,461.59q-17.87,11-19.9,11-3.23,0-3.22-5.1,0-4.31,2.5-12.28,1.92-8.62,3.11-13.39a24,24,0,0,1,4-8.56q2.81-3.78,9.32-8.23t20-12.15l1.2,4.84a141.38,141.38,0,0,1,21.21-7.58,69.1,69.1,0,0,1,17-2.61q13.86,0,19.66,5.16t5.8,22.4q0,9.4-2.51,15.68t-9.8,17.51q-16.62,26.39-25,36.58-24.26,30.3-24.26,35.4c0,1.92,1.16,2.87,3.47,2.87q2.86,0,8.12-4.44a130.18,130.18,0,0,0,12.67-12.8q7.41-8.36,20.56-23.91,14-16.45,23.6-29.07t15.84-21.55q6.21-9,6.57-9.6a78.58,78.58,0,0,1,13.32-14.18q6.87-5.55,8.79-5.55c1,0,2.07,1,3.34,2.87a30.3,30.3,0,0,1,3.29,6.8,19.72,19.72,0,0,1,1.37,6q0,.65-2.86,6.33t-6.22,11.76q-3.35,6.08-10.75,18.62Q753.53,502,744.93,520.71t-8.61,24.62a6.13,6.13,0,0,0,1.38,3.86,3.71,3.71,0,0,0,2.81,1.76q1.9,0,6.93-3.33a70.57,70.57,0,0,0,11.11-9.6,168.65,168.65,0,0,0,14.58-17.38,231.14,231.14,0,0,0,13-20.12q6.45-11.1,11.47-21t10.16-20.9l-2-6.66a14.2,14.2,0,0,1-.48-4.05q0-2,7.05-12.74t9.32-10.78c1.68,0,3.09,1.33,4.25,4a20,20,0,0,1,1.73,8q0,4.44-3.65,17.7a289.7,289.7,0,0,1-11.35,32.07,306.77,306.77,0,0,1-19.06,38.28,161.39,161.39,0,0,1-21,29.07q-11.18,12.09-20.13,18t-13.27,5.88q-4.91,0-10.28-4.7a33.39,33.39,0,0,1-6.27-7.51,21.37,21.37,0,0,1-2.45-7.25,61.25,61.25,0,0,1-.6-9.15q0-11.1,5.62-26t16.73-37.1q-34.77,46.25-53.84,67.28t-27.9,21q-5.87,0-9.92-7.65T646.21,548Z"
              transform="translate(-626.38 -407.51)"
            />
            <path
              class="path"
              d="M830.62,532.66v3.27q0,7.71,3.46,12a11.1,11.1,0,0,0,9.08,4.31,27.91,27.91,0,0,0,12.13-3,64.76,64.76,0,0,0,12.49-8Q874,536.33,883,528v8q-13.5,17.76-25.34,27.24t-24,9.47q-10.64,0-16.85-9t-6.21-24.69a52.78,52.78,0,0,1,5.85-24.88q5.86-11.17,19.13-23.58a73.41,73.41,0,0,1,18-12.81q9-4.31,16-4.31,5.61,0,8.9,2.81t3.29,8.43q0,8.22-5.62,16.39T859,517.18A169.84,169.84,0,0,1,830.62,532.66Zm1.19-8.49a67.08,67.08,0,0,0,18.41-11.36,56.48,56.48,0,0,0,11.29-13q3.65-6.21,3.64-9.08c0-2-.83-3-2.51-3q-2.14,0-7,3a58.5,58.5,0,0,0-9.8,7.83,57.25,57.25,0,0,0-8.9,11.37A38.84,38.84,0,0,0,831.81,524.17Z"
              transform="translate(-626.38 -407.51)"
            />
            <path
              class="path"
              d="M940.09,526.52v9.67q-25,36.19-40.64,36.19-8.48,0-13.32-10.13t-4.84-26.58q0-13.33,5.73-31.68a240.51,240.51,0,0,1,15.36-37.24,238,238,0,0,1,20-32.92q10.33-14,19.18-19.66,3.59-2.35,5.62-2.35a3.26,3.26,0,0,1,3.34,2.42q.84,2.42.84,8.29,0,18.17-13.5,44.62t-37.65,54A64.57,64.57,0,0,0,899,531.62q0,8.36,3.28,13.58a10.26,10.26,0,0,0,9.14,5.23,11.13,11.13,0,0,0,6.46-2.55,67.16,67.16,0,0,0,7.29-6.33Q929,537.76,940.09,526.52ZM904.35,503a126.67,126.67,0,0,0,12-15.16,191.07,191.07,0,0,0,10.94-18.16,156.88,156.88,0,0,0,8.07-17.37q2.93-7.71,2.92-11.63c0-2-.63-3-1.91-3a6.79,6.79,0,0,0-2.75,1.43q-7.29,6.54-16.37,25.54A161.87,161.87,0,0,0,904.35,503Z"
              transform="translate(-626.38 -407.51)"
            />
            <path
              class="path"
              d="M1011,528.22V537q-12.8,13.72-20.86,21.3A90.66,90.66,0,0,1,975,570a26.65,26.65,0,0,1-13.68,4.18q-6.57,0-12.07-5.69a38.92,38.92,0,0,1-8.61-14.89,60.72,60.72,0,0,1-3.1-19.53,33.91,33.91,0,0,1,3.58-15.81q3.58-6.92,13.87-17.9,12.18-13,22.64-20.18t16.44-7.12a9.49,9.49,0,0,1,7.28,3.27,11.68,11.68,0,0,1,3,8.23q0,4.19-3.94,11.89a68,68,0,0,1-8.84,13.39q-4.9,5.67-7.77,5.68c-2.08,0-3.11-1.22-3.11-3.66.08-.7.14-1.35.18-2s.06-1.22.06-1.83c0-1-.34-1.63-1-1.76a3.16,3.16,0,0,0-2.45,1q-11.94,9.15-16.37,12.87a37.31,37.31,0,0,0-7,7.51,14,14,0,0,0-2.57,8q0,7.71,4.54,12.54A15.5,15.5,0,0,0,967.93,553q7.53,0,18.11-6.33T1011,528.22Z"
              transform="translate(-626.38 -407.51)"
            />
            <path
              class="path"
              d="M1087.32,527.7v8.75q-7.89,7.84-12.67,10.45T1060.91,549q-15.54,20.13-27.37,20.12a18.05,18.05,0,0,1-12.19-4.83,33.48,33.48,0,0,1-8.78-13.2,50.69,50.69,0,0,1-3.29-18.68q0-8.35,5.08-18.55a83.06,83.06,0,0,1,13.15-19,75.34,75.34,0,0,1,17.27-14.24q9.2-5.42,17.09-5.42,5.61,0,8.84,1.89a5.89,5.89,0,0,1,3.23,5.3q0,2.61-2.75,6c3,.69,5.1,1.85,6.21,3.46s1.68,4.55,1.68,8.82a60.62,60.62,0,0,1-2.69,15.8,83.34,83.34,0,0,1-7.35,17.9l2.15,2.35H1073a8.07,8.07,0,0,0,4-1.11,26.07,26.07,0,0,0,3.53-2.35Zm-24.62-34.36q-9.92,6.54-17,11.82a84.07,84.07,0,0,0-12,10.72,29.1,29.1,0,0,0-6.57,10.9q-3,14.64-3,15.81,0,8.63,11,8.62,5.13,0,17.21-9.66a37.33,37.33,0,0,1-2-11.76A49.05,49.05,0,0,1,1053.5,513,144.39,144.39,0,0,1,1062.7,493.34Z"
              transform="translate(-626.38 -407.51)"
            />
            <path
              class="path"
              d="M1141.7,545.86q16.48-15.95,28.32-27.76t18.59-18.62q6.75-6.8,11.89-11.5t6.57-4.7c1.83-.09,3.59,2,5.26,6.21s2.51,7.6,2.51,10.12q0,2.49-7.59,11.69T1195.9,526a20,20,0,0,0-3.77,11.5,7.71,7.71,0,0,0,2.15,5.68,7,7,0,0,0,5.14,2.15q3.46,0,8.31-3.91t15.23-14v9.27q-10.39,10.72-18.88,18.49a102.18,102.18,0,0,1-14.76,11.63q-6.27,3.84-10.45,3.85a7.75,7.75,0,0,1-6.22-3.07,11.69,11.69,0,0,1-2.51-7.64,30,30,0,0,1,1.44-9,84.54,84.54,0,0,1,4.42-10.84q3-6.27,7.89-15.09t9-16.13q-12.19,10.85-21.63,20.9t-15.42,17.57q-6,7.51-9.44,11.82-6.69,8.1-12.43,8.1-6.21,0-6.21-9.66,0-3.93,4.66-14t13.26-25.8a5.85,5.85,0,0,0,.72-3.27c0-1.74-.8-2.61-2.39-2.61q-2.62,0-7.59,5.42T1117.2,540a133.76,133.76,0,0,0-8.9,12.61q-5,7.77-7.11,10.38c-1.44,1.74-2.87,2.61-4.31,2.61q-4.31,0-8-8.36a47.64,47.64,0,0,1-3.71-19.46,36.29,36.29,0,0,1,2.45-14,124.55,124.55,0,0,1,7.59-14.63q8-12.67,13.09-18.1t10.69-5.42a10.84,10.84,0,0,1,5.86,1.5,4.67,4.67,0,0,1,2.39,4.12q0,2.75-4.36,9a95.62,95.62,0,0,1-11.06,12.94,50.12,50.12,0,0,0-6.81,9.34q-3.23,5.55-3.23,8,0,3.52,2.51,3.53,2,0,10.28-9.14T1132.68,505a202.83,202.83,0,0,1,18.28-17.9q8.43-7.11,14.28-7.12a7.25,7.25,0,0,1,5.92,2.94,11.33,11.33,0,0,1,2.33,7.25q0,2.88-3.59,10.39a198,198,0,0,1-10.45,18.55Q1152.56,530.18,1141.7,545.86Z"
              transform="translate(-626.38 -407.51)"
            />
            <path
              class="path"
              d="M1241.25,532.66v3.27q0,7.71,3.46,12a11.12,11.12,0,0,0,9.09,4.31,27.94,27.94,0,0,0,12.13-3,65.37,65.37,0,0,0,12.49-8q6.21-5,15.18-13.33v8q-13.51,17.76-25.34,27.24t-24,9.47q-10.63,0-16.85-9t-6.22-24.69a52.67,52.67,0,0,1,5.86-24.88q5.85-11.17,19.12-23.58a73.26,73.26,0,0,1,18-12.81q9-4.31,16-4.31,5.61,0,8.9,2.81t3.29,8.43q0,8.22-5.62,16.39t-17.15,16.2A169.84,169.84,0,0,1,1241.25,532.66Zm1.2-8.49a67,67,0,0,0,18.4-11.36,56.24,56.24,0,0,0,11.29-13q3.64-6.21,3.65-9.08c0-2-.84-3-2.51-3q-2.16,0-7,3a57.71,57.71,0,0,0-9.8,7.83,56.93,56.93,0,0,0-8.91,11.37A38.82,38.82,0,0,0,1242.45,524.17Z"
              transform="translate(-626.38 -407.51)"
            />
          </svg>
        </h3>
      </div>
    </div>
  );
};

export default HandwrittenTextAnimation;

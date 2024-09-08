import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

const ImageSVG = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;

    // Hide all paths initially
    anime.set(svg.querySelectorAll("path"), { opacity: 0 });

    // Animation timeline
    anime.timeline({ loop: false }).add({
      targets: svg.querySelectorAll("path"),
      opacity: 1,
      delay: anime.stagger(900), // Adjust the delay between each path
      easing: "easeInOutQuad", // Adjust easing as needed
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      width="800px"
      height="800px"
      viewBox="0 0 1000 1000"
      id="Layer_2"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path
            d="M818.039,180.784H182.215c-16.5,0-30,13.5-30,30v361.46h695.824v-361.46 C848.039,194.284,834.539,180.784,818.039,180.784z M355.484,218.681h19.143c6.875,0,12.5,5.625,12.5,12.5s-5.625,12.5-12.5,12.5 h-19.143c-6.875,0-12.5-5.625-12.5-12.5S348.609,218.681,355.484,218.681z M427.752,312.294c6.875,0,12.5,5.625,12.5,12.5 s-5.625,12.5-12.5,12.5H314.609c-6.875,0-12.5-5.625-12.5-12.5s5.625-12.5,12.5-12.5H427.752z M371.18,378.869 c0,6.875-5.625,12.5-12.5,12.5h-44.072c-6.875,0-12.5-5.625-12.5-12.5s5.625-12.5,12.5-12.5h44.072 C365.555,366.369,371.18,371.994,371.18,378.869z M280.484,218.681h19.143c6.875,0,12.5,5.625,12.5,12.5s-5.625,12.5-12.5,12.5 h-19.143c-6.875,0-12.5-5.625-12.5-12.5S273.609,218.681,280.484,218.681z M269.109,324.794c0,6.875-5.625,12.5-12.5,12.5h-50 c-6.875,0-12.5-5.625-12.5-12.5s5.625-12.5,12.5-12.5h50C263.484,312.294,269.109,317.919,269.109,324.794z M269.109,378.869 c0,6.875-5.625,12.5-12.5,12.5h-16.857c-6.875,0-12.5-5.625-12.5-12.5s5.625-12.5,12.5-12.5h16.857 C263.484,366.369,269.109,371.994,269.109,378.869z M205.484,218.681h19.143c6.875,0,12.5,5.625,12.5,12.5s-5.625,12.5-12.5,12.5 h-19.143c-6.875,0-12.5-5.625-12.5-12.5S198.609,218.681,205.484,218.681z M194.109,432.945c0-6.875,5.625-12.5,12.5-12.5h117.536 c6.875,0,12.5,5.625,12.5,12.5s-5.625,12.5-12.5,12.5H206.609C199.734,445.445,194.109,439.82,194.109,432.945z M256.609,499.52 h-16.857c-6.875,0-12.5-5.625-12.5-12.5s5.625-12.5,12.5-12.5h16.857c6.875,0,12.5,5.625,12.5,12.5S263.484,499.52,256.609,499.52z M358.68,499.52h-44.072c-6.875,0-12.5-5.625-12.5-12.5s5.625-12.5,12.5-12.5h44.072c6.875,0,12.5,5.625,12.5,12.5 S365.555,499.52,358.68,499.52z M501.752,499.52H420.68c-6.875,0-12.5-5.625-12.5-12.5s5.625-12.5,12.5-12.5h81.071 c6.875,0,12.5,5.625,12.5,12.5S508.627,499.52,501.752,499.52z M501.752,445.445H383.68c-6.875,0-12.5-5.625-12.5-12.5 s5.625-12.5,12.5-12.5h118.071c6.875,0,12.5,5.625,12.5,12.5S508.627,445.445,501.752,445.445z M501.752,391.369h-83.536 c-6.875,0-12.5-5.625-12.5-12.5s5.625-12.5,12.5-12.5h83.536c6.875,0,12.5,5.625,12.5,12.5S508.627,391.369,501.752,391.369z M625.009,442.596c4.861,4.861,4.861,12.816,0,17.678c-4.861,4.861-12.816,4.861-17.678,0L560.958,413.9 c-4.861-4.861-4.861-12.816,0-17.678l46.374-46.374c4.861-4.861,12.816-4.861,17.678,0c4.861,4.861,4.861,12.816,0,17.678 l-37.535,37.535L625.009,442.596z M715.198,332.878L672.31,484.067c-1.876,6.614-8.823,10.49-15.437,8.614h0 c-6.614-1.876-10.49-8.823-8.614-15.437l42.888-151.189c1.876-6.614,8.823-10.49,15.437-8.614 C713.198,319.317,717.074,326.264,715.198,332.878z M802.499,413.9l-46.373,46.374c-4.861,4.861-12.816,4.861-17.678,0 c-4.861-4.861-4.861-12.816,0-17.678l37.535-37.535l-37.535-37.535c-4.861-4.861-4.861-12.816,0-17.678 c4.862-4.861,12.816-4.861,17.678,0l46.373,46.374C807.36,401.083,807.36,409.038,802.499,413.9z"
            style={{ fill: "#fff" }}
          />{" "}
          <path
            d="M610.607,762.063H389.646c-10.197,0-18.539,8.343-18.539,18.539v38.614h258.039v-38.614 C629.146,770.406,620.804,762.063,610.607,762.063z"
            style={{ fill: "#fff" }}
          />{" "}
          <ellipse
            cx="500.375"
            cy="666.877"
            rx="17.453"
            ry="17.454"
            style={{ fill: "#fff" }}
            transform="matrix(0.9975 -0.0709 0.0709 0.9975 -46.0156 37.149)"
          />{" "}
          <path
            d="M151.961,598.519l0.229,62.484c0.061,16.5,13.61,29.95,30.11,29.89l102.911-0.377l0.106,28.795 c0.037,10.196,8.411,18.508,18.607,18.471l392.919-1.439c10.196-0.037,18.509-8.41,18.471-18.607l-0.105-28.795l102.911-0.377 c16.5-0.06,29.95-13.61,29.89-30.11l-0.229-62.484L151.961,598.519z M543.106,670.086c0,3.705-3.004,6.708-6.708,6.708 c-0.356,0-0.702-0.036-1.043-0.089c-0.865,3.086-2.129,6.004-3.73,8.699c0.235,0.18,0.464,0.37,0.679,0.585l0,0 c2.62,2.62,2.62,6.867,0,9.487l-4.115,4.115c-2.62,2.62-6.867,2.62-9.487,0h0c-0.286-0.286-0.534-0.594-0.758-0.914 c-2.526,1.398-5.235,2.504-8.084,3.272c0.088,0.433,0.134,0.88,0.134,1.339c0,3.705-3.004,6.708-6.708,6.708h-5.82 c-3.705,0-6.708-3.004-6.708-6.708c0-0.459,0.047-0.906,0.134-1.339c-3.046-0.821-5.933-2.027-8.606-3.565 c-0.274,0.451-0.598,0.88-0.988,1.27c-2.62,2.62-6.867,2.62-9.487,0l-4.115-4.115c-2.62-2.62-2.62-6.867,0-9.487 c0.381-0.381,0.8-0.7,1.24-0.971c-1.538-2.65-2.75-5.513-3.582-8.534c-0.567,0.156-1.162,0.246-1.779,0.246 c-3.705,0-6.708-3.003-6.708-6.708v-5.82c0-3.705,3.004-6.708,6.708-6.708c0.562,0,1.105,0.077,1.627,0.207 c0.783-3.032,1.95-5.91,3.443-8.581c-0.513-0.291-0.999-0.649-1.436-1.087c-2.62-2.62-2.62-6.867,0-9.487l4.115-4.115 c2.62-2.62,6.867-2.62,9.487,0c0.366,0.367,0.676,0.767,0.94,1.189c2.822-1.688,5.891-3.004,9.141-3.881 c-0.088-0.433-0.134-0.88-0.134-1.339c0-3.705,3.004-6.708,6.708-6.708h5.82c3.705,0,6.708,3.004,6.708,6.708 c0,0.458-0.047,0.906-0.134,1.339c3.057,0.825,5.955,2.036,8.636,3.582c0.208-0.288,0.434-0.567,0.694-0.827 c2.62-2.62,6.867-2.62,9.487,0l4.115,4.115c2.62,2.62,2.62,6.867,0,9.487c-0.268,0.268-0.557,0.502-0.856,0.716 c1.552,2.715,2.763,5.65,3.576,8.747c0.291-0.039,0.586-0.065,0.887-0.065c3.705,0,6.708,3.003,6.708,6.708V670.086z"
            style={{ fill: "#fff" }}
          />{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

export default ImageSVG;
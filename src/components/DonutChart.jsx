// import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import e4 from "../assets/e4.svg"

// Register the required elements with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for the animations
      once: true, // Whether animation should happen only once or every time you scroll up and down
    });
  }, []);
  const data = {
    labels: ["ali"], // No labels
    datasets: [
      {
        label: "# of Votes",
        data: [7, 4, 4, 20, 30,35],
        backgroundColor: [
          "#9ad960", // Custom color 1
          "#63b4c9", // Custom color 2
          "#ed9c50", // Custom color 2 (repeated)
          "#602eeb", // Custom color 2 (repeated)
          "#5c4ffe", // Custom color 3
          "#cb795b", // Custom color 3
        ],
        borderColor: "transparent", // Remove borders
        borderWidth: 0, // Set border width to 0 to ensure no borders
        borderRadius: 10, // Round the corners of each segment
        spacing: 10, // Add space between the segments
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "50%", // Adjust this value to control the size of the donut hole
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
    hover: {
      mode: null, // Disable all hover interactions
    },
  };

  return (
    <div data-aos="fade-up"
      className="   rounded-[50%] flex p-10  bg-[#3f1d75c4] h-[320px] w-[320px] lg:h-[600px] lg:w-[600px] items-center justify-center"
    
    >
      <div className="w-[300px] relative h-[300px] lg:w-[500px] lg:h-[500px]">
        <img src={e4} alt="" className="absolute w-[100px] lg:w-[150px] top-[90px] left-[100px]  lg:left-[170px] lg:top-[150px]" />
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DonutChart;

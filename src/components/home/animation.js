'use client'
import React from "react";

import Lottie from 'react-lottie-player'

//import Lottie from "lottie-react";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "public/ani.json";

// import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function Animation() {
  return (
    <Lottie
    loop
    animationData={lottieJson}
    play
    // style={{ width: 150, height: 150 }}
  />
  );
}


import React from "react";

import Lottie from 'react-lottie-player'

//import Lottie from "lottie-react";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '../../public/ani.json';

export default function Lottiesss() {
    return (
        <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 150, height: 150 }}
      // src="https://assets3.lottiefiles.com/packages/lf20_XZ3pkn.json"
    />
    );
}


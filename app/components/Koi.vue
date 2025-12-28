<template>
  <div class="fish">
    <div class="koiCoil"></div>
    <div class="koiCoil"></div>
    <div class="koiCoil"></div>
    <div class="koiCoil"></div>
    <div class="koiCoil"></div>
    <div class="koiCoil"></div>
    <div class="koiCoil"></div>
    <div class="koiCoil"></div>
    <div class="koiCoil"></div>
    <div class="koiCoil"></div>
    <div class="koiCoil"></div>
    <div class="koiCoil"></div>
    <div class="koiCoil"></div>
    <div class="koiCoil"></div>
    <div class="koiCoil"></div>
  </div>
</template>

<style scoped lang="scss">
.fish {
  --coilSize: 14px;
  --delayCount: 80ms;
  --scaleMe: 1;
  --scaleFlip: 1;
  --posFlip: 0;
  
  position: absolute;
  top: -35%;
  left: 0;
  width: 100%;
  height: 100%;
  filter: drop-shadow(
    calc(var(--coilSize) * 4) calc(var(--coilSize) / 3) 5px rgba(0, 0, 0, 0.3)
  );

  .koiCoil {
    position: absolute;
    width: var(--coilSize);
    height: var(--coilSize);
    background-color: rgba(161, 81, 52, 0.472);;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    margin-left: calc(var(--coilSize) / -2);
    margin-top: calc(var(--coilSize) / -2);
    transform: scale(var(--scaleMe), var(--scaleMe));
    filter: contrast(200%);
    offset-path: path(
      "M11.7692 229.5C14.552 200.052 7.51901 171.858 -42.8757 170.644C-105.869 169.128 -131.294 76.612 -101.695 51.5872C-72.0955 26.5625 -24.6607 -50.7867 70.5883 51.5872C165.837 153.961 27.7073 131.211 33.0199 183.157C38.3326 235.102 90.3211 195.669 139.274 223.727C188.226 251.785 207.959 299.56 139.274 316.243C70.5883 332.926 41.3685 398.9 81.9726 419.754C122.577 440.608 222 478.524 222 419.754C222 372.738 222 242.432 222 183.157C219.091 129.948 175.78 30.8091 25.8099 59.9288C-161.652 96.3284 -30.3529 119.837 25.8099 141.07C81.9726 162.303 171.529 204.769 126.751 260.506C81.9726 316.243 101.326 362.501 139.274 373.496C177.222 384.492 170.012 464.495 70.5883 462.979C-28.835 461.462 -42.8757 393.015 -42.8757 373.496C-42.8757 238.288 11.7692 293 11.7692 240.506C11.7692 208.05 11.7692 237.336 11.7692 229.5Z"
    );
    animation: fishAnim 40000ms linear infinite;
    box-shadow: calc(var(--coilSize) / -2) calc(var(--coilSize) / -10) 0 rgb(241, 162, 126) inset;

    // Couleur de la queue
    &:nth-of-type(15),
    &:nth-of-type(14) {
      background-color: rgba(161, 81, 52, 0.472);
    }

    // Yeux
    &:nth-of-type(15)::after {
      content: ":";
      position: absolute;
      color: black;
      font-weight: 1000;
      text-align: center;
      line-height: 60%;
      font-size: calc(var(--coilSize) * 1.2);
    }

    // Nageoire arrière
    &:nth-of-type(1)::before {
      z-index: -3000;
      content: "";
      position: absolute;
      width: 150%;
      height: 50%;
      top: 25%;
      left: -100%;
      border-radius: var(--coilSize);
      background-color: rgb(241, 162, 126);
      transform-origin: center right;
      animation: backFlip 500ms ease-in-out alternate infinite;
    }

    &:nth-of-type(14) {
      --scaleMe: 1.5;
      animation-delay: calc(var(--delayCount) * 1);
    }

    &:nth-of-type(13) {
      --scaleMe: 1.75;
      animation-delay: calc(var(--delayCount) * 2);
    }

    &:nth-of-type(12) {
      --scaleMe: 1.85;
      animation-delay: calc(var(--delayCount) * 3);
    }

    &:nth-of-type(11) {
      --scaleMe: 2;
      animation-delay: calc(var(--delayCount) * 4);
    }

    &:nth-of-type(10) {
      --scaleMe: 2;
      animation-delay: calc(var(--delayCount) * 5);
    }

    &:nth-of-type(9) {
      --scaleMe: 2;
      animation-delay: calc(var(--delayCount) * 6);
    }

    &:nth-of-type(8) {
      --scaleMe: 1.9;
      animation-delay: calc(var(--delayCount) * 7);
    }

    &:nth-of-type(7) {
      --scaleMe: 1.75;
      animation-delay: calc(var(--delayCount) * 8);
    }

    &:nth-of-type(6) {
      --scaleMe: 1.60;
      animation-delay: calc(var(--delayCount) * 9);
    }

    &:nth-of-type(5) {
      --scaleMe: 1.55;
      animation-delay: calc(var(--delayCount) * 10);
    }

    &:nth-of-type(4) {
      --scaleMe: 1.35;
      animation-delay: calc(var(--delayCount) * 11);
    }

    &:nth-of-type(3) {
      --scaleMe: 1.25;
      animation-delay: calc(var(--delayCount) * 12);
    }

    &:nth-of-type(2) {
      --scaleMe: 1.2;
      animation-delay: calc(var(--delayCount) * 13);
    }

    &:nth-of-type(1) {
      animation-delay: calc(var(--delayCount) * 14);
    }

    // Nageoires latérales
    &:nth-of-type(12) {
      z-index: -3000;
      &::before,
      &::after {
        content: "";
        
        position: absolute;
        width: 100%;
        height: 30%;
        top: -20%;
        left: -100%;
        border-radius: 60% 40% 50% 50% / 50% 60% 40% 50%;
        background-color: rgb(241, 162, 126);
        transform-origin: center right;
        animation: sideFlip 500ms ease-in-out alternate infinite;
      }

      &::after {
        --scaleFlip: -1;
        --posFlip: calc(var(--coilSize) * -1);
      }
    }
  }
}

@keyframes fishAnim {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}

@keyframes backFlip {
  0% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(-15deg);
  }
}

@keyframes sideFlip {
  0% {
    transform: scale(1, var(--scaleFlip)) translateY(var(--posFlip)) rotate(40deg);
  }
  100% {
    transform: scale(1, var(--scaleFlip)) translateY(var(--posFlip)) rotate(20deg);
  }
}
</style>
import React from 'react';
import {mainColor,secondaryColor} from '../utils/theme';

const SvgComponent = props => (
  <svg height={props.width} viewBox="0 0 512 512" width={props.height} {...props}>
    <linearGradient
      id="prefix__a"
      gradientTransform="matrix(1 0 0 -1 0 -20854)"
      gradientUnits="userSpaceOnUse"
      x1={0}
      x2={512}
      y1={-21110}
      y2={-21110}
    >
       <stop offset={0} stopColor="#00f38d" />
      <stop offset={1} stopColor={secondaryColor} />
    </linearGradient>
    <path
      d="M512 256c0 141.387-114.613 256-256 256S0 397.387 0 256 114.613 0 256 0s256 114.613 256 256zm0 0"
      fill="url(#prefix__a)"
    />
    <g fill="#fff">
      <path d="M353.133 171.45c0-53.458-43.492-96.95-96.953-96.95-53.457 0-96.95 43.492-96.95 96.95 0 31.636 15.23 59.777 38.747 77.488C135.016 272.57 90.082 333.382 90.082 404.5h30c0-75.047 61.055-136.098 136.098-136.098 53.46 0 96.953-43.492 96.953-96.953zm-96.953 66.952c-36.918 0-66.95-30.035-66.95-66.953s30.032-66.949 66.95-66.949c36.918 0 66.953 30.031 66.953 66.95s-30.035 66.952-66.953 66.952zm0 0M422.918 322.914h-53.781v-53.781h-30v53.781h-53.782v30h53.782v53.781h30v-53.78h53.781zm0 0" />
    </g>
  </svg>
)

SvgComponent.defaultProps = {
  width:"4em",
  heihgt:"4em"
}

export default SvgComponent

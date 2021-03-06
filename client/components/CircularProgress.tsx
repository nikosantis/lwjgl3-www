import React from 'react';
import { css, keyframes } from '@emotion/css';
import { COLOR_PRIMARY } from '~/theme';
import { cx } from '@emotion/css';
import { easeInQuad as easeIn, easeOutCubic } from '~/theme/easing';

const SIZE = 44;

function getRelativeValue(value: number, min: number, max: number) {
  const clampedValue = Math.min(Math.max(min, value), max);
  return (clampedValue - min) / (max - min);
}

function easeOut(t: number) {
  return easeOutCubic(getRelativeValue(t, 0, 1));
}

const indeterminateAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const indeterminateStrokeAnimation = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -120px;
  }
`;

const cssProgressStyle = css`
  display: inline-block;
  line-height: 1;
  color: ${COLOR_PRIMARY.css()};
  circle {
    stroke: currentColor;
  }
  &.static {
    transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1);
    circle {
      transition: stroke-dashoffset 0.3s cubic-bezier(0, 0, 0.2, 1);
    }
  }
  &.indeterminate {
    animation: ${indeterminateAnimation} 1.8s linear infinite;
    circle {
      animation: ${indeterminateStrokeAnimation} 1.8s ease-in-out infinite;
      stroke-dasharray: 80px, 200px;
      stroke-dashoffset: 0px;
    }
  }
`;

interface Props {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
  thickness?: number;
  value?: number;
  variant?: 'determinate' | 'indeterminate' | 'static';
}

export function CircularProgress({
  size = 40,
  thickness = 3.6,
  value = 0,
  variant = 'indeterminate',
  className,
  style,
  ...other
}: Props & React.HTMLAttributes<any>) {
  const circleStyle: React.CSSProperties = {};
  const rootStyle: React.CSSProperties = {};
  const rootProps: React.HTMLAttributes<any> = {};

  if (variant === 'determinate' || variant === 'static') {
    const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps['aria-valuenow'] = Math.round(value);

    if (variant === 'static') {
      circleStyle.strokeDashoffset = `${(((100 - value) / 100) * circumference).toFixed(3)}px`;
      rootStyle.transform = 'rotate(-90deg)';
    } else {
      circleStyle.strokeDashoffset = `${(easeIn((100 - value) / 100) * circumference).toFixed(3)}px`;
      rootStyle.transform = `rotate(${(easeOut(value / 70) * 270).toFixed(3)}deg)`;
    }
  }

  return (
    <svg
      className={cx(cssProgressStyle, className, {
        indeterminate: variant === 'indeterminate',
        static: variant === 'static',
      })}
      style={{ width: size, height: size, ...rootStyle, ...style }}
      role="progressbar"
      {...rootProps}
      {...other}
      viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}
    >
      <circle style={circleStyle} cx={SIZE} cy={SIZE} r={(SIZE - thickness) / 2} fill="none" strokeWidth={thickness} />
    </svg>
  );
}

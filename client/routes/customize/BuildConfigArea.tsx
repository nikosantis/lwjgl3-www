import React, { useMemo } from 'react';
import { css, cx } from '@emotion/css';
import { COLOR_PRIMARY } from '~/theme';
import { mediaBreakpointUp } from '~/theme/media';
import { lighten } from '~/theme/color';
import { useSlice } from './Store';

import {
  COLOR_RELEASE,
  COLOR_RELEASE_LIGHT,
  COLOR_STABLE,
  COLOR_STABLE_LIGHT,
  COLOR_NIGHTLY,
  COLOR_NIGHTLY_LIGHT,
  SMALL_FONT_SIZE,
} from './theme';

export const BuildConfigArea: React.FC = ({ children }) => {
  const [slice] = useSlice(state => ({
    build: state.build,
  }));

  return useMemo(
    () => (slice.build !== null ? <div className={cx(CssConfigPanel, slice.build)}>{children}</div> : null),
    [slice.build, children]
  );
};

const CssConfigPanel = css`
  position: relative;
  z-index: 0;
  margin-bottom: 66px;
  padding: 0 1rem 1rem 1rem;

  ${mediaBreakpointUp('lg')} {
    &.release {
      background-color: ${`${COLOR_RELEASE_LIGHT.css()}`};
      border-color: ${COLOR_RELEASE.css()};
    }
    &.stable {
      background-color: ${COLOR_STABLE_LIGHT.css()};
      border-color: ${COLOR_STABLE.css()};
    }
    &.nightly {
      background-color: ${COLOR_NIGHTLY_LIGHT.css()};
      border-color: ${COLOR_NIGHTLY.css()};
    }
    margin-top: 1rem;
    border-width: 2px;
    border-style: solid;
  }

  p {
    line-height: 1.5rem;
  }

  .artifact {
    margin-bottom: 1.25rem;

    a {
      word-wrap: break-word;
    }

    svg {
      margin-right: 0.5rem;
    }

    p {
      margin-left: 1.5rem;
      margin-bottom: 0.25rem;
      font-size: ${SMALL_FONT_SIZE};
    }
  }

  pre {
    background-color: #ffffe6;
    font-size: 13px;
    line-height: 1rem;
    padding: 0.5rem;
    tab-size: 4;
  }

  .download-toolbar {
    background: ${lighten(COLOR_PRIMARY, 15).css()};
    padding: 1rem 0;
    text-align: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;

    .container {
      text-align: left;
    }

    .btn + .btn {
      margin-left: 0.5rem;
    }
  }
`;

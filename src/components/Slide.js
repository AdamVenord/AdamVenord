/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Slide = ({ content }) => (
  <div
    css={css`
      height: 100;
      width: 100%;
      background-image: url('${content}');
      background-size: cover;
      background-reapeat: no-reapeat;
      background-position: center;
    `}
  />
)

export default Slide
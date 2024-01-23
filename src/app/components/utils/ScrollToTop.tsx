'use client';

import React from 'react'
import { Icon } from "@iconify/react";

export default function ScrollToTop() {
  return (
    <>
    <a href="#banner" className="scroll-to-top" style={{position: 'fixed', bottom: '20px', right: '20px'}} aria-label="Scroll to top">
      <Icon icon="mingcute:up-line" width="32" height="32" />
    </a>
  </>
  )
}

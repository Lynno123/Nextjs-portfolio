"use client";

import React from 'react';
import Title from './Title';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { SiExpress, SiFlutter, SiLaravel, SiMysql, SiNextdotjs, SiReact } from 'react-icons/si'

export default function Skills() {
    const skills = [
        {
            text: "React",
            Icon: SiReact,
        },

        {
            text: "Laravel",
            Icon: SiLaravel,
        },

        {
            text: "MySQL",
            Icon: SiMysql,
        },

        {
            text: "Node",
            Icon: SiExpress,
        },

        {
            text: "Next.js",
            Icon: SiNextdotjs,
        },

        {
            text: "Flutter",
            Icon: SiFlutter,
        },
        
    ]
  return (
    <div className="max-w-5xl mx-auto px-8">
          <Title text="Compétences 🛠️" className="flex flex-col items-center justify-center -rotate-6"/>
          <HoverEffect items={skills}/>
    </div>
  )
}

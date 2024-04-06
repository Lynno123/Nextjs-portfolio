import { MovingBorderBtn } from '@/components/ui/moving-border'
import Link from 'next/link'
import React from 'react'
import Title from './Title'

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between 
                    animate-move-up">

        <div className="space-y-10 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold">
                Enchanté de vous rencontrer ! 👋
                <br/> <span className="underline underline-offset-8 decoration-green-500"> {"Je suis Lynno Solohery."}</span>
            </h1>

            <p className="md:w-96 text-lg text-gray-300">
                {
                 "Basé à Madagascar, je suis un développeur fullstack passionné par la construction d'une application web et mobile moderne que les utilisateurs aiment. "
                }
            </p>

            <Link href={"mailto:lynnosolohery123@gmail.com"} className="inline-block group">
               <Title text="Contactez-moi 📪"/>
            </Link>
        </div>

        <div className="relative">
            <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
                <div className="flex gap-3 translate-x-8">
                    <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
                    <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
                </div>

                <div className="flex gap-3 -translate-x-8">
                    <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
                    <div className="w-32 h-32 rounded-full bg-green-500"></div>
                </div>

                <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
            </div>

            <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
                <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
                    <p>🔔 Disponible pour travailler</p>
                </MovingBorderBtn>
            </div>
        </div>

    </div>
  )
}

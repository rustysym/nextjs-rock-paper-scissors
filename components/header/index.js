"use client"
import { GameContext } from '@/context/GameContext'
import React, { useContext } from 'react'

function Header() {
  const {score} = useContext(GameContext)
  return (
    <div className='flex flex-col items-center'>
        <div className='flex w-[70%] h-24 border-2 border-header-outline rounded-lg m-16 items-center justify-between md:w-[40%]'>
            <div className='pl-4'>
            <h1 className='text-2xl font-bold uppercase text-white w-16 leading-5 '>Rock Paper Scissors</h1>
            </div>
            <div className='flex flex-col mr-4 w-24 h-16 bg-white rounded-md text-center justify-center'>
                <span className='uppercase text-xs font-semibold text-score-text'>Score</span>
                <span className='text-4xl font-bold text-gray-600'>{`${score}`}</span>
            </div>
        </div>
    </div>
  )
}

export default Header
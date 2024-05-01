import React from 'react'
import { useModeContext } from '../contexts/hooks'

export default function Background({children}) {
    const {mode, colors} = useModeContext();
  return (
    <main className={`app flex ${mode}-background`}>
        {children}
    </main>
  )
}

import { ReactNode } from 'react'
import { View, Text, Pressable } from 'react-native'

interface IDoublePressable {
  onDoublePress?: () => void
  children: ReactNode
}
                                    // default function value
const DoublePressable = ({onDoublePress = () => {}, children}: IDoublePressable) => {

  let lastTap = 0
  const handleDoublePress = () => {
    const now = Date.now()
    if (now - lastTap < 300) {
      onDoublePress()
    }

    lastTap = now
  }



  return (
    <Pressable onPress={handleDoublePress}>
      {children}
    </Pressable>
  )
}

export default DoublePressable

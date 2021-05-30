import React from 'react'
import { Text, LayoutChangeEvent } from 'react-native'

import { Color, ColorName } from '../Color'

import styles from './styles'

export type BaseTypographyProps = {
  centered?: boolean
  children?: React.ReactNode
  color?: ColorName
  style?: TextStyleProp
}

export type HeadingProps = BaseTypographyProps & {
  level?: 1 | 2 | 3
  onLayout?: (e: LayoutChangeEvent) => void
}

export const Heading = (props: HeadingProps) => {
  const {
    centered,
    children,
    color = 'ink',
    level = 1,
    onLayout,
    style,
  } = props
  const headingStyle = [
    centered && styles.centered,
    level === 1 && styles.h1,
    level === 2 && styles.h2,
    level === 3 && styles.h3,
    { color: Color[color] },
    style,
  ]
  return (
    <Text onLayout={onLayout} style={headingStyle}>
      {children}
    </Text>
  )
}

export type BodyTextProps = BaseTypographyProps & {
  weight?: 'semibold' | 'bold'
  onPress?: () => void
}

export const BodyText = (props: BodyTextProps) => {
  const { centered, children, color = 'ash800', style, weight, onPress } = props
  const bodyTextStyle = [
    styles.body,
    centered && styles.centered,
    weight === 'semibold' && styles.bodySemibold,
    weight === 'bold' && styles.bodyBold,
    { color: Color[color] },
    style,
  ]
  return (
    <Text style={bodyTextStyle} onPress={onPress}>
      {children}
    </Text>
  )
}

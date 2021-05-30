import { StyleSheet, Platform } from 'react-native'
import { BorderRadius } from '../BorderRadius'
import { Color } from '../Color'
import { Spacing } from '../Spacing'

export default StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  label: {
    marginBottom: Spacing.xs,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: Color.milk,
    borderRadius: BorderRadius.base,
    borderColor: Color.ash400,
    paddingHorizontal: Spacing.xs,
  },
  inputContainerError: {
    borderWidth: 1,
    borderColor: Color.vermilion,
  },
  inputContainerFocused: {
    borderWidth: 1,
    borderColor: Color.cerulean,
  },
  prefix: {
    height: 24,
    justifyContent: 'center',
    paddingHorizontal: Spacing.xs,
    backgroundColor: Color.ash200,
    borderRadius: BorderRadius.base,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: Spacing.xs,
    color: Color.ash800,
    fontSize: 14,
    fontFamily: 'regular',
    ...Platform.select({
      web: { outlineWidth: 0 },
    }),
  },
  inputDisabled: {
    backgroundColor: Color.ash200,
  },
  error: {
    marginTop: Spacing.xs,
    fontSize: 12,
  },
  helper: {
    marginTop: Spacing.xs,
    fontSize: 12,
    color: Color.ash600,
  },
})

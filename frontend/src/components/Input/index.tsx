import React, { forwardRef, useCallback, useState } from "react";
import {
    View,
    TextInput,
    TextInputProps,
    NativeSyntheticEvent,
    TextInputFocusEventData,
    ViewStyle,
} from "react-native";

import { BodyText } from "../Typography";
import { Color } from "../Color";
import { Icon } from "../Icon";

import { composeStyles } from "@utils/composeStyles";
import styles from "./styles";

type Props = Omit<
    TextInputProps,
    "editable" | "onFocus" | "placeholderTextColor"
>;

export type InputProps = Props & {
    disabled?: boolean;
    errorMessage?: string;
    helperText?: string;
    label?: string;
    prefix?: string;
    showCheckmark?: boolean;
    style?: ViewStyle;
};

export const Input = forwardRef<TextInput, InputProps>((props, ref) => {
    const {
        disabled,
        errorMessage,
        helperText,
        label,
        prefix,
        showCheckmark,
        style,
        onBlur,
        ...textInputProps
    } = props;

    const [visible, setVisible] = useState(!props.secureTextEntry);
    const toggleVisible = useCallback(() => setVisible((v) => !v), []);

    const [focused, setFocused] = useState(false);
    const handleFocus = useCallback(() => setFocused(true), []);
    const handleBlur = useCallback(
        (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            onBlur?.(e);
            setFocused(false);
        },
        [onBlur]
    );

    const hasError = Boolean(errorMessage);

    return (
        <View style={composeStyles(styles.container, style)}>
            {Boolean(label) && (
                <BodyText
                    weight="semibold"
                    color={hasError ? "vermilion600" : "ash800"}
                    style={styles.label}
                >
                    {label}
                </BodyText>
            )}
            <View
                style={[
                    styles.inputContainer,
                    hasError && styles.inputContainerError,
                    focused && styles.inputContainerFocused,
                ]}
            >
                {Boolean(prefix) && (
                    <View style={styles.prefix}>
                        <BodyText weight="semibold">{prefix}</BodyText>
                    </View>
                )}
                <TextInput
                    {...textInputProps}
                    editable={!disabled}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    placeholderTextColor={Color.ash500}
                    secureTextEntry={!visible}
                    style={styles.input}
                    ref={ref}
                />
                {showCheckmark && (
                    <Icon color="forest600" name="checkmark" size={18} />
                )}
                {props.secureTextEntry && (
                    <Icon
                        name={visible ? "eye-outline" : "eye-off-outline"}
                        onPress={toggleVisible}
                        color={visible ? "cerulean" : "ash500"}
                    />
                )}
            </View>
            {hasError && (
                <BodyText
                    color="vermilion600"
                    weight="bold"
                    style={styles.error}
                >
                    {errorMessage}
                </BodyText>
            )}
            {helperText && (
                <BodyText color="cerulean" style={styles.helper}>
                    {helperText}
                </BodyText>
            )}
        </View>
    );
});

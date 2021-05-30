import { StyleSheet } from "react-native";
import {
    ViewStyleProp,
    TextStyleProp,
    ImageStyleProp,
} from "../types/styleProp";

type StyleProp = ViewStyleProp | TextStyleProp | ImageStyleProp;

export const composeStyles = (
    a: StyleProp | StyleProp[],
    b: StyleProp | StyleProp[]
) => StyleSheet.compose(a, b);

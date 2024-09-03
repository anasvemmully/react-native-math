import React from 'react';
import { ViewStyle } from 'react-native';
interface MathViewProps {
    style?: ViewStyle;
    textSize?: number;
    content: string;
    textColor?: string;
}
declare const MathView: React.FC<MathViewProps>;
export default MathView;

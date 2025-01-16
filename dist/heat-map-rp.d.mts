import React from 'react';

interface HeatMapProps {
    year?: number;
    colorRange?: string[];
    gridGap?: string;
    boxSize?: string;
    padding?: string;
    borderRadius?: string;
    boxShadow?: string;
    textColor?: string;
    backgroundColor?: string;
    dayLabels?: string[];
    monthLabels?: boolean;
    dayLabelsVisible?: boolean;
    dayMarginTop?: string;
    dayMarginLeft?: string;
    monthMarginTop?: string;
    monthMarginLeft?: string;
    textFontSize?: string;
    monthFontSize?: string;
    dayFontSize?: string;
    dayTextColor?: string;
    monthTextColor?: string;
    monthFormat?: 'short' | 'long';
    monthBgColor?: string;
    dayBgColor?: string;
    gridBgColor?: string;
    data: Record<string, number>;
}
declare const HeatMap: React.FC<HeatMapProps>;

export { HeatMap as default };

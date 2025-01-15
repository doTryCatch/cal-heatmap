import React, { useState, useEffect } from "react";

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

const HeatMap: React.FC<HeatMapProps> = ({
  year = new Date().getFullYear(),
  colorRange = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  gridGap = '3px',
  boxSize = '10px',
  padding = '5px',
  borderRadius = '5px',
  boxShadow = '',
  textColor = '#fff',
  backgroundColor = '#3d444d',
  dayLabels = ['Mon', 'Wed', 'Fri'],
  monthLabels = true,
  dayLabelsVisible = true,
  dayMarginTop = '',
  dayMarginLeft = '',
  monthMarginTop = '',
  monthMarginLeft = '25px',
  textFontSize = '12px',
  monthFontSize = '14px',
  dayFontSize = '12px',
  dayTextColor = '#fff',
  monthTextColor = '#fff',
  monthFormat = 'short',
  monthBgColor = '',
  dayBgColor = '',
  gridBgColor = '',
  data
}) => {
  const [currentYear, setYear] = useState(year);
  const [dates, setDates] = useState<string[]>([]);
  const [months, setMonths] = useState<string[]>([]);

  useEffect(() => {
    const getAllDates = (year: number) => {
      const dates: string[] = [];
      const months: string[] = [];
      const startDate = new Date(year, 0, 1); // January 1st of the given year
      const endDate = new Date(year, 11, 31); // December 31st of the given year

      let currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        dates.push(`${year}-${month}-${day}`);
        let mon = currentDate.toLocaleString('default', { month: monthFormat === 'short' ? 'short' : 'long' });
        if (!months.find((month) => month === mon)) months.push(mon);
        currentDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000); // Add 1 day
      }

      return { date: dates, month: months };
    };

    const { date, month } = getAllDates(currentYear);
    setDates(date);
    setMonths(month);

  }, [currentYear, monthFormat]);

  useEffect(() => {
    const showMsg = (elem: HTMLElement) => {
      const boxMsg = document.createElement('div');
      boxMsg.classList.add('msg-box');
      boxMsg.style.position = 'absolute';
      boxMsg.textContent = elem.getAttribute('data-content') || ''; // Correctly access the 'data-content' attribute
      boxMsg.style.backgroundColor = backgroundColor;
      boxMsg.style.marginTop = '-40px';
      boxMsg.style.padding = padding;
      boxMsg.style.borderRadius = borderRadius;
      boxMsg.style.boxShadow = boxShadow;
      boxMsg.style.color = textColor;
      elem.appendChild(boxMsg);
    };

    const dropMsg = (elem: HTMLElement) => {
      const msgBox = elem.querySelector('.msg-box');
      if (msgBox) {
        msgBox.remove();
      }
    };

    // Remove all tooltips before adding new ones
    const allBoxElems = document.querySelectorAll('.box');
    allBoxElems.forEach((elem) => {
      elem.addEventListener('mouseenter', () => showMsg(elem as HTMLElement));
      elem.addEventListener('mouseleave', () => dropMsg(elem as HTMLElement));
    });

    // Clean up event listeners on component unmount
    return () => {
      allBoxElems.forEach((elem) => {
        elem.removeEventListener('mouseenter', () => showMsg(elem as HTMLElement));
        elem.removeEventListener('mouseleave', () => dropMsg(elem as HTMLElement));
      });
    };
  }, [dates, backgroundColor, padding, borderRadius, boxShadow, textColor]);

  return (
    <section className="heatmap w-full flex space-x-4">
      <div className="map-area" style={{ backgroundColor: gridBgColor }}>
        {monthLabels && (
          <div 
            className="month text-sm flex space-x-[30px] px-6" 
            style={{ backgroundColor: monthBgColor, marginTop: monthMarginTop, marginLeft: monthMarginLeft }}
          >
            {months.map((month, index) => (
              <span
                key={index}
                style={{
                  color: monthTextColor,
                  fontSize: monthFontSize,
                }}
              >
                {month}
              </span>
            ))}
          </div>
        )}
        <div className="flex space-x-4">
          {dayLabelsVisible && (
            <div 
              className="days"
              style={{
                backgroundColor: dayBgColor,
                marginTop: dayMarginTop,
                marginLeft: dayMarginLeft,
              }}
            >
              {dayLabels.map((day, index) => (
                <span
                  className="block text-[12px] my-[12px]"
                  key={index}
                  style={{
                    color: dayTextColor,
                    fontSize: dayFontSize,
                  }}
                >
                  {day}
                </span>
              ))}
            </div>
          )}

          <div
            className="map"
            style={{
              display: "grid",
              margin: "10px 10px",
              gridTemplateRows: "repeat(7, 10px)",
              gridAutoFlow: "column",
              columnGap: gridGap,
              rowGap: gridGap,
              width: "auto",
              backgroundColor: gridBgColor, // Grid background color
            }}
          >
            {dates.map((date, index) => {
              const intensity = data[date] || 0;
              const color = colorRange[Math.min(intensity, colorRange.length - 1)];
              return (
                <span
                  className="rounded-sm box"
                  data-content={`${intensity} contribution on ${date}`}
                  style={{
                    width: boxSize,
                    height: boxSize,
                    backgroundColor: color,
                  }}
                  key={index}
                ></span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeatMap;

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
}): JSX.Element => {
  const [currentYear, setYear] = useState(year);
  const [dates, setDates] = useState<string[]>([]);
  const [months, setMonths] = useState<string[]>([]);

  useEffect(() => {
    const getAllDates = (year: number) => {
      const dates: string[] = [];
      const months: string[] = [];
      const startDate = new Date(year, 0, 1);
      const endDate = new Date(year, 11, 31);

      let currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        dates.push(`${year}-${month}-${day}`);
        let mon = currentDate.toLocaleString('default', { month: monthFormat === 'short' ? 'short' : 'long' });
        if (!months.find((month) => month === mon)) months.push(mon);
        currentDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
      }

      return { date: dates, month: months };
    };

    const { date, month } = getAllDates(currentYear);
    setDates(date);
    setMonths(month);
  }, [currentYear, monthFormat]);

 useEffect(() => {
  const showMsg = (elem: HTMLDivElement, x: number, y: number) => {
    const boxMsg = document.createElement('div');
    boxMsg.classList.add('msgBox');
    boxMsg.style.position = 'absolute';
    boxMsg.style.top = `${window.scrollY + y}px`; // Use the Y coordinate from mouse event
    boxMsg.style.left = `${window.scrollX + x - 40}px`; // Use the X coordinate from mouse event
    boxMsg.style.marginTop = '-40px';
    boxMsg.textContent = elem.getAttribute('data-content') || '';
    boxMsg.style.backgroundColor = backgroundColor;
    boxMsg.style.padding = padding;
    boxMsg.style.borderRadius = borderRadius;
    boxMsg.style.boxShadow = boxShadow;
    boxMsg.style.color = textColor;
    document.body.appendChild(boxMsg); // Append the tooltip to the body
  };

  const dropMsg = () => {
    const msgBox = document.querySelector('.msgBox');
    if (msgBox) {
      msgBox.remove();
    }
  };

  const handleMouseEnter = (e: MouseEvent) => {
    const elem = e.currentTarget as HTMLDivElement;
    if (elem) {
      showMsg(elem, e.clientX, e.clientY); // Use clientX and clientY for positioning
    }
  };

  const handleMouseLeave = () => {
    dropMsg();
  };

  const allBoxElems = document.querySelectorAll<HTMLDivElement>('.box');
  allBoxElems.forEach((elem) => {
    elem.addEventListener('mouseenter', handleMouseEnter as EventListener);
    elem.addEventListener('mouseleave', handleMouseLeave as EventListener);
  });

  return () => {
    allBoxElems.forEach((elem) => {
      elem.removeEventListener('mouseenter', handleMouseEnter as EventListener);
      elem.removeEventListener('mouseleave', handleMouseLeave as EventListener);
    });
  };
}, [dates, backgroundColor, padding, borderRadius, boxShadow, textColor]);  return (
    <section style={{ display: 'flex', width: '100%', gap: '16px' }}>
      <div style={{ backgroundColor: gridBgColor, flex: 1 }}>
        {monthLabels && (
          <div
            style={{
              display: 'flex',
              gap: '30px',
              padding: '0 24px',
              backgroundColor: monthBgColor,
              marginTop: monthMarginTop,
              marginLeft: monthMarginLeft,
              fontSize: monthFontSize,
              color: monthTextColor
            }}
          >
            {months.map((month, index) => (
              <span key={index}>{month}</span>
            ))}
          </div>
        )}
        <div style={{ display: 'flex', gap: '16px' }}>
          {dayLabelsVisible && (
            <div
              style={{
                backgroundColor: dayBgColor,
                marginTop: dayMarginTop,
                marginLeft: dayMarginLeft,
                fontSize: dayFontSize,
                color: dayTextColor,
              }}
            >
              {dayLabels.map((day, index) => (
                <span
                  key={index}
                  style={{ display: 'block', margin: '12px 0', fontSize: dayFontSize }}
                >
                  {day}
                </span>
              ))}
            </div>
          )}

          <div
            style={{
              display: 'grid',
              margin: '10px',
              gridTemplateRows: 'repeat(7, 10px)',
              gridAutoFlow: 'column',
              columnGap: gridGap,
              rowGap: gridGap,
              backgroundColor: gridBgColor
            }}
          >
            {dates.map((date, index) => {
              const intensity = data[date] || 0;
              const color = colorRange[Math.min(intensity, colorRange.length - 1)];
              return (
                <span
                  key={index}
                  className={"box"}
                  data-content={`${intensity} contribution on ${date}`}
                  style={{
                    display: 'block',
                    borderRadius: '2px',
                    width: boxSize,
                    height: boxSize,
                    backgroundColor: color
                  }}
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

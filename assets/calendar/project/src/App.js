import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Contents/Main";
import Footer from "./Footer/Footer";
import { useState } from "react";

function App() {
  const newDate = new Date();
  const newDateFullYear = newDate.getFullYear();
  const newDateMonth = newDate.getMonth();
  const newDates = newDate.getDate();

  let [paramDate, modifyParamDate] = useState({
    year: newDateFullYear,
    month: newDateMonth,
    date: newDates,
  });

  const baseDate = new Date(paramDate.year, paramDate.month, paramDate.date);
  const baseFullYear = baseDate.getFullYear();
  const baseMonth = baseDate.getMonth();
  const todayDate = baseDate.getDate();

  // 전월
  const prevDate = new Date(baseFullYear, baseMonth, 0);
  const nowDate = new Date(baseFullYear, baseMonth + 1, 0);

  const prevDay = prevDate.getDay();
  const prevDateDate = prevDate.getDate();

  const nowDateDate = nowDate.getDate();

  const prevDates = [];
  const nextDates = [];
  const nowDates = [...Array(nowDateDate + 1).keys()].slice(1);

  if (prevDay !== 6) {
    for (let i = 0; i <= prevDay; i++) {
      prevDates.unshift(prevDateDate - i);
    }
  }

  for (let i = 1; i < 7 - nowDateDate; i++) {
    nextDates.push(i);
  }

  let dates = [...prevDates, ...nowDates, ...nextDates];

  let dateArray = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
  let tmpIndex = 0;
  dates.forEach((val, idx) => {
    if (idx % 7 === 0) {
      tmpIndex++;
      dateArray[tmpIndex].push(val);
    } else {
      dateArray[tmpIndex].push(val);
    }
  });

  const todayArray = {
    year: baseFullYear,
    month: baseMonth + 1,
    date: todayDate,
  };

  let [today, modifyToday] = useState(todayArray);

  return (
    <div>
      <Header />
      <Main
        date={dateArray}
        prevDates={prevDates}
        nextDates={nextDates}
        today={today}
        modifyToday={modifyToday}
        paramDate={paramDate}
        paramModifyDate={modifyParamDate}
      />
      <Footer />
    </div>
  );
}

export default App;

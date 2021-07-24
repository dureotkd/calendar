export default function Main(props) {
  const date = props.date;
  const today = props.today;
  const prevDates = props.prevDates;
  const nextDates = props.nextDates;
  const todayDate = today.date;
  const tmpArray = [0, 1, 2, 3, 4, 5];

  function handleDatePlus(paramDate, paramModifyDate) {
    //year: 2021, month: 6, date: 24}
    const newDate = new Date(
      paramDate.year,
      paramDate.month + 1,
      paramDate.date
    );

    const newDateFullYear = newDate.getFullYear();
    const newDateMonth = newDate.getMonth();
    const newDates = newDate.getDate();

    paramModifyDate({
      year: newDateFullYear,
      month: newDateMonth,
      date: newDates,
    });
  }
  function handleDateMinus(paramDate, paramModifyDate) {
    //year: 2021, month: 6, date: 24}
    const newDate = new Date(
      paramDate.year,
      paramDate.month - 1,
      paramDate.date
    );

    const newDateFullYear = newDate.getFullYear();
    const newDateMonth = newDate.getMonth();
    const newDates = newDate.getDate();

    paramModifyDate({
      year: newDateFullYear,
      month: newDateMonth,
      date: newDates,
    });
  }

  return (
    <ul className="calendarWrap">
      <li className="todayWrap">
        <h2>
          {props.paramDate.year}년 {props.paramDate.month + 1}월
        </h2>
      </li>
      <li>
        <button
          type="button"
          onClick={handleDateMinus.bind(
            this,
            props.paramDate,
            props.paramModifyDate
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <p>일</p>
        <p>월</p>
        <p>화</p>
        <p>수</p>
        <p>목</p>
        <p>금</p>
        <p>토</p>
        <button
          type="button"
          onClick={handleDatePlus.bind(
            this,
            props.paramDate,
            props.paramModifyDate
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-right"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </li>

      {tmpArray.map((val, idx) => {
        const dateArray = date[val];
        const html =
          dateArray &&
          dateArray.map((date, index) => {
            let otherDateClass = "";

            if (
              todayDate === date &&
              today.month === props.paramDate.month + 1
            ) {
              console.log(idx);
              otherDateClass = "todayClass";
            } else if (prevDates.includes(date) && idx === 1) {
              otherDateClass = "prevClass";
            } else if (nextDates.includes(date) && idx === 3) {
              otherDateClass = "nextClass";
            }

            return <p className={otherDateClass}>{date}</p>;
          });

        if (html === undefined) return false;

        return <li>{html}</li>;
      })}
    </ul>
  );
}

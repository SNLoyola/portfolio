import {prevMonthBtn,
nextMonthBtn,
monthYearElement,
daysContainer,
monthDaysContainer,
detalleEvento,
fechasImportantesDiv,
feriados,
specialDates,
} from "./selectores"

document.addEventListener('DOMContentLoaded', function () {
   let currentDate = new Date();
   let currentMonth = currentDate.getMonth();
   let currentYear = currentDate.getFullYear();
   
//   const createSpecialDayDetails = (nuevoDiv, details) => {
//     const detalle = document.createElement('p')
//     detalle.classList.add('detalle-style')
//     detalle.textContent = specialDayDetails[details]
//     nuevoDiv.appendChild(detalle)
//   }

//   const createferiados = (nuevoDiv, details) => {
//     const detalle = document.createElement('p')
//     detalle.classList.add('feriados')
//     detalle.textContent = feriados[details]
//     nuevoDiv.appendChild(detalle)
//   }

  const createDetailsSection = (details, esFeriado) => {
    const nuevoDiv = document.createElement('div');
   //  nuevoDiv.classList.add('details-container')
   // Código nuevo:
   nuevoDiv.className = 'details-container feriado';
   // .............................
    nuevoDiv.textContent = details.titulo;
    nuevoDiv.classList.add(details.tipo);

    console.log(feriados[details]);
    const detalle = document.createElement('p');
    detalle.classList.add('detalle-style');

    detalle.textContent = details.descripcion;

    nuevoDiv.appendChild(detalle)

    fechasImportantesDiv.appendChild(nuevoDiv)
  }

//   const createSpecialSection = (details, esFeriado) => {
//     console.log("entrar");
//     const nuevoDiv = document.createElement('div');
//    //  nuevoDiv.classList.add('details-container')
//    // Codigo nuevo:
//    if(esFeriado) nuevoDiv.className = 'details-container feriado';
//    else nuevoDiv.className = 'details-container special';

//    nuevoDiv.classList.add(details.tipo);
//    nuevoDiv.dataset.fecha = details.fecha;
//    // .......................
//     nuevoDiv.textContent = details.titulo;
//     const detalle = document.createElement('p')
//     detalle.classList.add('detalle-style')
//     detalle.textContent = details.descripcion;

//     nuevoDiv.appendChild(detalle)

//     return nuevoDiv;
//   }

  const resetDetailsSection = () => {
    while (fechasImportantesDiv.firstChild) {
      fechasImportantesDiv.removeChild(fechasImportantesDiv.firstChild)
    }
  }

  function updateCalendar() {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    resetDetailsSection()
   
    let month = getMonthName(currentMonth);
    monthYearElement.textContent = `${month} ${currentYear}`;

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    daysContainer.innerHTML = daysOfWeek.map(day => `<div>${day}</div>`).join('');

    monthDaysContainer.innerHTML = '';

    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
    const startingDay = firstDayOfMonth.getDay();

    for (let i = startingDay - 1; i >= 0; i--) {
      const dayElement = createDayElement(prevMonthLastDay - i, true);
      monthDaysContainer.appendChild(dayElement);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      const dayElement = createDayElement(i, false);
      if(currentDate.getDate() == i && month === getMonthName(currentDate.getMonth()) && currentYear === currentDate.getFullYear()) dayElement.classList.add("dia-actual");
      monthDaysContainer.appendChild(dayElement);
    }

    const totalDays = 42;
    const remainingDays = Math.min(3, totalDays - (startingDay + daysInMonth));
    for (let i = 1; i <= remainingDays; i++) {
      const dayElement = createDayElement(i, true);
      monthDaysContainer.appendChild(dayElement);
    }

    specialDates.filter(date => getMonthName(parseInt(date.content.fecha[0] + date.content.fecha[1])-1) === month).forEach(date => {
        const dateObj = date['content'];
        const nuevoDiv = document.createElement('div');
       
        nuevoDiv.className = 'details-container special';

        nuevoDiv.classList.add(dateObj.tipo);
        nuevoDiv.dataset.fecha = dateObj.fecha;
        // .......................
        nuevoDiv.textContent = dateObj.titulo;
        const detalle = document.createElement('p')
        detalle.classList.add('detalle-style')
        detalle.textContent = dateObj.descripcion;

        nuevoDiv.appendChild(detalle)

        fechasImportantesDiv.appendChild(nuevoDiv);
    })
  }

  function createDayElement(day, isOtherMonth) {
    const dayElement = document.createElement('div');
    dayElement.textContent = day;

    if (isOtherMonth) {
      dayElement.classList.add('other-month');
    }


    const holidayDateKey = `${padZero(currentMonth + 1)}-${padZero(day)}`;
    if (feriados[holidayDateKey] && !isOtherMonth) {
      dayElement.classList.add('feriados');
      dayElement.classList.add(feriados[holidayDateKey].tipo);
      dayElement.title = feriados[holidayDateKey].titulo;
      createDetailsSection(feriados[holidayDateKey], true);
    }
    const arrFilter =  specialDates.filter(date => date.content.fecha == holidayDateKey);
    if(arrFilter.length != 0) {
        if(!dayElement.classList.contains("other-month")) {
            dayElement.classList.add("special-date");
            dayElement.title = arrFilter[0].content.titulo;
        }
    }

    dayElement.addEventListener('click', () => mostrarInformacionDetallada(`${getMonthName(currentMonth)} ${day}, ${currentYear}`));

    return dayElement;
  }

  function getMonthName(monthIndex) {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return months[monthIndex];
  }

  function padZero(number) {
    return number < 10 ? '0' + number : number;
  }

  function mostrarInformacionDetallada(detalle) {
    detalleEvento.innerHTML = `<p>${detalle}</p>`;
  }

  prevMonthBtn.addEventListener('click', () => {
    if (currentMonth === 0) {
      currentMonth = 11;
      currentYear--;
    } else {
      currentMonth--;
    }
    updateCalendar();
  });

  nextMonthBtn.addEventListener('click', () => {
    if (currentMonth === 11) {
      currentMonth = 0;
      currentYear++;
    } else {
      currentMonth++;
    }
    updateCalendar();
  });

  updateCalendar();
  
});

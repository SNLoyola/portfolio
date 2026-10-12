export const prevMonthBtn = document.getElementById('prevMonth');
export const nextMonthBtn = document.getElementById('nextMonth');
export const monthYearElement = document.getElementById('monthYear');
export const daysContainer = document.getElementById('daysContainer');
export const monthDaysContainer = document.getElementById('monthDaysContainer');
export const detalleEvento = document.getElementById('detalleEvento');
export const fechasImportantesDiv = document.getElementById('fechas-importantes-block-id')

export let currentDate = new Date();

console.log(currentDate.getDate());


export const feriados = {
   '01-01': {
     'titulo': 'Año nuevo',
     'tipo': 'feriado',
     'descripcion': 'Festejo del año nuevo.',
     'fechaFormateada': 'Domingo 1 de enero de 2024'
   },
   '12-25': {
     'titulo': 'Navidad',
     'tipo': 'feriado',
     'descripcion': 'Festividad religiosa en conmemoración del nacimiento de Jesucristo.',
     'fechaFormateada': 'Lunes 25 de diciembre de 2024'
   },
   '12-24': {
     'titulo': 'Noche Buena',
     'tipo': 'feriado',
     'descripcion': 'Víspera de Navidad, celebración familiar y religiosa.',
     'fechaFormateada': 'Domingo 24 de diciembre de 2024'
   },
   '02-12': {
     'titulo': 'Carnaval',
     'tipo': 'feriado',
     'descripcion': 'Fiesta popular que se celebra antes de la Cuaresma.',
     'fechaFormateada': 'Lunes 12 de febrero de 2024'
   },
   '02-13': {
     'titulo': 'Carnaval',
     'tipo': 'feriado',
     'descripcion': 'Fiesta popular que se celebra antes de la Cuaresma.',
     'fechaFormateada': 'Martes 13 de febrero de 2024'
   },
   '02-14': {
     'titulo': 'San Valentín',
     'tipo': 'SanValentin',
     'descripcion': 'Día dedicado a los enamorados.'
   },
   '03-24': {
     'titulo': 'Día Nacional de la Memoria por la Verdad y la Justicia',
     'tipo': 'feriado',
     'descripcion': 'Conmemoración del golpe de estado de 1976 en Argentina.',
     'fechaFormateada': 'Domingo 24 de marzo de 2024'
   },
   '03-29': {
     'titulo': 'Viernes Santo',
     'tipo': 'feriado',
     'descripcion': 'Día de la crucifixión de Jesús de Nazaret.',
     'fechaFormateada': 'Viernes 29 de marzo de 2024'
   },
   '04-02': {
     'titulo': 'Día del Veterano y de los Caídos en la Guerra de Malvinas',
     'tipo': 'feriado',
     'descripcion': 'Conmemoración de la Guerra de Malvinas entre Argentina y el Reino Unido.',
     'fechaFormateada': 'Lunes 2 de abril de 2024'
   },
   '04-22': {
     'titulo': 'Pascua Judía',
     'tipo': 'feriado',
     'descripcion': 'Fiesta religiosa que celebra la liberación del pueblo judío de la esclavitud en Egipto.',
     'fechaFormateada': 'Lunes 22 de abril de 2024'
   },
   '05-01': {
     'titulo': 'Día del Trabajador',
     'tipo': 'feriado',
     'descripcion': 'Día internacional que reivindica los derechos de los trabajadores.',
     'fechaFormateada': 'Miércoles 1 de mayo de 2024'
   },
   '05-25': {
     'titulo': 'Primer aniversario de la Revolución de Mayo',
     'tipo': 'feriado',
     'descripcion': 'Conmemoración del inicio de la Revolución de Mayo de 1810 en Argentina.',
     'fechaFormateada': 'Sábado 25 de mayo de 2024'
   },
   '06-17': {
     'titulo': 'Paso a la Inmortalidad del General Martín Miguel de Güemes',
     'tipo': 'feriado',
     'descripcion': 'Conmemoración del fallecimiento del General Güemes, héroe de la Guerra de la Independencia Argentina.',
     'fechaFormateada': 'Lunes 17 de junio de 2024'
   },
   '06-20': {
     'titulo': 'Día de la Bandera',
     'tipo': 'feriado',
     'descripcion': 'Conmemoración de la creación de la bandera argentina.',
     'fechaFormateada': 'Jueves 20 de junio de 2024'
  },
  '06-21': {
    'titulo': 'Feriado Puente',
    'tipo': 'puente',
    'descripcion': 'Día no laborable para crear un fin de semana largo.',
    'fechaFormateada': 'Viernes 21 de junio de 2024'
  },
  '07-09': {
    'titulo': 'Día de la Independencia',
    'tipo': 'feriado',
    'descripcion': 'Conmemoración de la declaración de la independencia de Argentina.',
    'fechaFormateada': 'Martes 9 de julio de 2024'
  },
  '08-17': {
    'titulo': 'Paso a la Inmortalidad del General Don José de San Martín',
    'tipo': 'feriado',
    'descripcion': 'Conmemoración del fallecimiento del General San Martín, libertador de Argentina, Chile y Perú.',
    'fechaFormateada': 'Sábado 17 de agosto de 2024'
  },
  '10-12': {
    'titulo': 'Día del Respeto a la Diversidad Cultural',
    'tipo': 'feriado',
    'descripcion': 'Conmemoración del Día de la Raza en Argentina.',
    'fechaFormateada': 'Sábado 12 de octubre de 2024'
  },
  '11-20': {
    'titulo': 'Día de la Soberanía Nacional',
    'tipo': 'feriado',
    'descripcion': 'Conmemoración de la Batalla de la Vuelta de Obligado.',
    'fechaFormateada': 'Miércoles 20 de noviembre de 2024'
  },
  '12-08': {
    'titulo': 'Inmaculada Concepción',
    'tipo': 'feriado',
    'descripcion': 'Fiesta religiosa católica en honor a la Inmaculada Concepción de la Virgen María.',
    'fechaFormateada': 'Domingo 8 de diciembre de 2024'
  },
};



export const specialDates = [
   // '03-18': `Mesa de Examen`,
   // '03-19': `Mesa de Examen`,
   // '03-20': `Mesa de Examen`,
   // '03-21': `Mesa de Examen`,
   // '03-22': `Mesa de Examen`,
   // '03-11': `Mesa de Examen`,
   // '03-12': `Mesa de Examen`,
   // '03-13': `Mesa de Examen`,
   // '03-14': `Mesa de Examen`,
   //  '03-13' : {
   //     'titulo' : 'Mesa de examen',
   //     'tipo' : 'matematica',
   //     'descripcion' : 'Examen de matematica'
   //  },
   {'content': {
    'fecha' : '02-01',     
    'titulo' : 'Mesa de examen2',
    'tipo' : 'lengua2',
    'descripcion' : 'Examen de lengua'}
    },
   {'content' : {
        'fecha' :  '03-18' ,  
    'titulo' : 'Mesa de examen',
      'tipo' : 'matematica',
      'descripcion' : 'Examen de matematica'}
   },
   {'content' : {
        'fecha' :  '03-20' ,  
    'titulo' : 'Mesa de examen',
      'tipo' : 'lengua',
      'descripcion' : 'Examen de lengua'}
   },
   {'content' : {
        'fecha' :  '02-14' ,  
    'titulo' : 'Mesa de examen 14-02',
      'tipo' : 'examenFebreroTecnicatura',
      'descripcion' : 'Seminario - Programación Logica - Sistemas Administrativos I-II - Programación IV'}
   },
   {'content' : {
        'fecha' :  '02-15' ,  
    'titulo' : 'Mesa de examen',
      'tipo' : 'examenFebreroTecnicatura',
      'descripcion' : 'Informática I-II-III - Programación I-II-III - Matemática Aplicada I-II'}
   },
   {'content' : {
        'fecha' :  '02-16' ,  
    'titulo' : 'Mesa de examen',
      'tipo' : 'examenFebreroTecnicatura',
      'descripcion' : 'EDI II - Ética I-II - Filosofía I-II - Inglés I-II'}
   },
   {'content' : {
        'fecha' :  '02-26' ,  
    'titulo' : 'Mesa de examen',
      'tipo' : 'examenFebreroTecnicatura',
      'descripcion' : 'Seminario - Programación Logica - Sistemas Administrativos I-II - Programación IV'}
   },
   {'content' : {
        'fecha' :  '02-27' ,  
    'titulo' : 'Mesa de examen',
      'tipo' : 'examenFebreroTecnicatura',
      'descripcion' : 'Informática I-II-III - Programación I-II-III - Matemática Aplicada I-II'}
   },
   {'content' : {
        'fecha' :  '02-28' ,  
    'titulo' : 'Mesa de examen',
      'tipo' : 'examenFebreroTecnicatura',
      'descripcion' : 'EDI II - Ética I-II - Filosofía I-II - Inglés I-II'}
   },
   {'content' : {
        'fecha' :  '03-20' ,  
    'titulo' : 'Mesa de examen',
      'tipo' : 'lengua',
      'descripcion' : 'Examen de lengua'}
   },
   {'content' : {
        'fecha' :  '03-18' ,  
    'titulo' : 'Mesa de examen',
      'tipo' : 'matematica',
      'descripcion' : 'Examen de matematica'}
   },
   {'content' : {
        'fecha' :  '03-20' ,  
    'titulo' : 'Mesa de examen',
      'tipo' : 'lengua',
      'descripcion' : 'Examen de lengua'}
   },
   {'content': {
        'fecha' : '02-01', 
    'titulo' : 'Mesa de examen4',
    'tipo' : 'lengua3',
    'descripcion' : 'Examen de lengua'}
}
];

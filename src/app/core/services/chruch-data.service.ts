import { Injectable } from '@angular/core';
import { Department, Memory, Pastor, ProgramEvent } from '../../shared/interfaces/chruch.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ChruchDataService {

  getCurrentPastor(): Pastor {
    return {
      id: "1",
      name: "Pastor Juan Carlos Mendoza",
      photo: "/placeholder.svg?height=400&width=300",
      period: "2020 - Presente",
      message: "Mensaje especial del pastor para el aniversario...",
      isCurrentPastor: true,
    }
  }

  getFormerPastors(): Pastor[] {
    return [
      {
        id: "2",
        name: "Pastor Miguel Rodríguez",
        photo: "/placeholder.svg?height=300&width=250",
        period: "2015 - 2020",
        message:
          "Es un honor saludar a la querida iglesia en este aniversario especial. Durante mis años como pastor, pude ver el crecimiento espiritual de esta congregación...",
      },
      {
        id: "3",
        name: "Pastor Carlos Hernández",
        photo: "/placeholder.svg?height=300&width=250",
        period: "2010 - 2015",
        message:
          "Que alegría saber que la iglesia continúa creciendo y bendiciendo a la comunidad. Los años que pasé con ustedes fueron de gran bendición...",
      },
      {
        id: "4",
        name: "Pastor Roberto Silva",
        photo: "/placeholder.svg?height=300&width=250",
        period: "2005 - 2010",
        message:
          "Desde la distancia, pero con el corazón cerca, los saludo en este día especial. Que Dios continúe bendiciendo abundantemente...",
      },
    ]
  }

  getDepartments(): Department[] {
    return [
      {
        id: "1",
        name: "Escuela Sabática",
        description: "Estudio sistemático de la Biblia para todas las edades",
        coordinator: "María González",
        photos: [
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
        ],
        activities: [
          {
            id: "1",
            name: "Clases de Adultos",
            description: "Estudio profundo de las lecciones bíblicas",
            date: "Sábados",
            time: "9:00 AM",
            location: "Aula Principal",
          },
          {
            id: "2",
            name: "Escuela de Niños",
            description: "Enseñanza bíblica adaptada para niños",
            date: "Sábados",
            time: "9:00 AM",
            location: "Aula Infantil",
          },
        ],
      },
      {
        id: "2",
        name: "Jóvenes Adventistas",
        description: "Ministerio dedicado al crecimiento espiritual de los jóvenes",
        coordinator: "David Morales",
        photos: [
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
        ],
        activities: [
          {
            id: "3",
            name: "Reunión de Jóvenes",
            description: "Encuentro semanal de estudio y compañerismo",
            date: "Viernes",
            time: "7:00 PM",
            location: "Salón de Jóvenes",
          },
          {
            id: "4",
            name: "Actividades Misioneras",
            description: "Proyectos de servicio a la comunidad",
            date: "Domingos",
            time: "2:00 PM",
            location: "Comunidad",
          },
        ],
      },
      {
        id: "3",
        name: "Ministerio de la Mujer",
        description: "Fortaleciendo el liderazgo femenino en la iglesia",
        coordinator: "Ana Patricia López",
        photos: [
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
        ],
        activities: [
          {
            id: "5",
            name: "Círculo de Oración",
            description: "Tiempo especial de intercesión y oración",
            date: "Miércoles",
            time: "6:00 PM",
            location: "Santuario",
          },
          {
            id: "6",
            name: "Talleres de Capacitación",
            description: "Desarrollo de habilidades y liderazgo",
            date: "Primer sábado del mes",
            time: "3:00 PM",
            location: "Aula de Capacitación",
          },
        ],
      },
      {
        id: "4",
        name: "Ministerio de Música",
        description: "Alabanza y adoración a través de la música",
        coordinator: "José Luis Ramírez",
        photos: [
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
        ],
        activities: [
          {
            id: "7",
            name: "Ensayo del Coro",
            description: "Preparación musical para los servicios",
            date: "Jueves",
            time: "7:00 PM",
            location: "Santuario",
          },
          {
            id: "8",
            name: "Grupo de Instrumentos",
            description: "Práctica instrumental para acompañamiento",
            date: "Martes",
            time: "7:30 PM",
            location: "Aula de Música",
          },
        ],
      },
    ]
  }

  getAnniversaryProgram(): ProgramEvent[] {
    return [
      {
        id: "1",
        time: "9:00 AM",
        title: "Escuela Sabática Especial",
        description: "Lección especial sobre la historia y misión de nuestra iglesia",
        speaker: "Equipo de Escuela Sabática",
        type: "worship",
      },
      {
        id: "2",
        time: "10:15 AM",
        title: "Himno de Apertura",
        description: "Canto congregacional de alabanza y gratitud",
        type: "music",
      },
      {
        id: "3",
        time: "10:20 AM",
        title: "Oración de Invocación",
        description: "Invocando la bendición de Dios sobre la celebración",
        speaker: "Anciano Pedro Martínez",
        type: "prayer",
      },
      {
        id: "4",
        time: "10:30 AM",
        title: "Presentación Histórica",
        description: "Recorrido por los momentos más importantes de nuestra iglesia",
        speaker: "Comité de Historia",
        type: "presentation",
      },
      {
        id: "5",
        time: "10:50 AM",
        title: "Canto Especial del Coro",
        description: '"Grande es Tu Fidelidad" - Coro de la Iglesia',
        speaker: "Coro Principal",
        type: "music",
      },
      {
        id: "6",
        time: "11:00 AM",
        title: "Mensaje del Pastor",
        description: 'Sermón especial: "Recordando las Bendiciones de Dios"',
        speaker: "Pastor Juan Carlos Mendoza",
        type: "worship",
      },
      {
        id: "7",
        time: "11:45 AM",
        title: "Dedicación y Compromiso",
        description: "Momento de renovación de votos y compromiso con la misión",
        type: "special",
      },
      {
        id: "8",
        time: "12:00 PM",
        title: "Oración de Clausura",
        description: "Agradecimiento y bendición final",
        speaker: "Pastor Juan Carlos Mendoza",
        type: "prayer",
      },
      {
        id: "9",
        time: "12:15 PM",
        title: "Almuerzo de Confraternidad",
        description: "Comida especial compartida en el salón social",
        type: "special",
      },
      {
        id: "10",
        time: "2:00 PM",
        title: "Programa Cultural",
        description: "Presentaciones especiales de los diferentes departamentos",
        type: "presentation",
      },
      {
        id: "11",
        time: "3:30 PM",
        title: "Sesión de Fotografías",
        description: "Tiempo para capturar recuerdos de esta celebración especial",
        type: "special",
      },
    ]
  }

  getMemories(): Memory[] {
    return [
      {
        id: "1",
        title: "Construcción del Templo",
        description: "Los primeros pasos en la construcción de nuestro hermoso templo",
        photo: "/placeholder.svg?height=300&width=400",
        date: "2010",
        category: "construction",
      },
      {
        id: "2",
        title: "Primera Piedra",
        description: "Ceremonia de colocación de la primera piedra del templo",
        photo: "/placeholder.svg?height=300&width=400",
        date: "2009",
        category: "construction",
      },
      {
        id: "3",
        title: "Bautismo Masivo",
        description: "Celebración especial con 25 nuevos miembros bautizados",
        photo: "/placeholder.svg?height=300&width=400",
        date: "2018",
        category: "celebration",
      },
      {
        id: "4",
        title: "Campaña Evangelística",
        description: "Gran campaña que trajo muchas almas a los pies de Cristo",
        photo: "/placeholder.svg?height=300&width=400",
        date: "2019",
        category: "worship",
      },
      {
        id: "5",
        title: "Ayuda a la Comunidad",
        description: "Entrega de alimentos durante la pandemia",
        photo: "/placeholder.svg?height=300&width=400",
        date: "2020",
        category: "community",
      },
      {
        id: "6",
        title: "Dedicación del Templo",
        description: "Ceremonia oficial de dedicación de nuestro templo",
        photo: "/placeholder.svg?height=300&width=400",
        date: "2012",
        category: "celebration",
      },
    ]
  }

}

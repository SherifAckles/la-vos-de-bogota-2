import React from "react";

import "./podcastSchedule.scss";

const scheduleData = [
  {
    day: "Lunes a Viernes",
    schedule: [
      {
        time: "4:00 am a 4:30 am",
        program: "Más allá de la verdad",
        profile:
          "Programa de Productos naturales, fórmulas médicas y Consejería Social.",
      },
      {
        time: "6:00 am a 8:00 am",
        program: "Noticiero Todelar",
        profile:
          "El Noticiero Todelar se transmite desde los estudios de la Voz de Bogotá...",
      },
      // Add more schedule items for Monday to Friday
    ],
  },
  {
    day: "Sábados",
    schedule: [
      {
        time: "4:00 am a 4:30 am",
        program: "Solución a sus problemas",
        profile: "Programa enfocado a la Consejería Social.",
      },
      {
        time: "6:00 am a 9:00 am",
        program: "El Arte de Vivir",
        profile:
          "Es un programa que recopila y transmite la mejor información en pro de mejorar...",
      },
      // Add more schedule items for Saturdays
    ],
  },
  {
    day: "Domingos",
    schedule: [
      {
        time: "4:00 am a 4:30 am",
        program: "Solución a sus problemas",
        profile: "Programa enfocado a la Consejería Social.",
      },
      {
        time: "8:00 am a 9:00 am",
        program: "Radio Revista Proyección",
        profile:
          "Programa institucional de la Asociación Distrital de Trabajadores y Trabajadoras...",
      },
      
    ],
  },
];

const PodcastSchedule = () => {
   return (
     <section className="podcast-schedule">
       {scheduleData.map(({ day, schedule }) => (
         <div key={day} className="schedule-day">
           <h3>{day}</h3>
           <div className="episode-list">
             {schedule.map(({ time, program, profile }, index) => (
               <div key={index} className="episode">
                 <div className="time">{time}</div>
                 <div className="details">
                   <p className="program">{program}</p>
                   <p className="profile">{profile}</p>
                 </div>
               </div>
             ))}
           </div>
         </div>
       ))}
       <div className="wavy-background" />
     </section>
   );
};

export default PodcastSchedule;
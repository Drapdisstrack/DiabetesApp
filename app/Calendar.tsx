import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import Modal from "react-native-modal";
import useCalendarEvents from "../hooks/CalendarDB";

LocaleConfig.locales['es'] = {
  monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
  monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
  dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
  dayNamesShort: ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],
  today: 'Hoy'
};
LocaleConfig.defaultLocale = 'es';

const today = new Intl.DateTimeFormat("es-MX", {
  timeZone: "America/Merida",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
}).format(new Date()).split("/").reverse().join("-");

// Devuelve todas las fechas del mes visible en formato YYYY-MM-DD
const getDaysInMonth = (ym: string): string[] => {
  const [y, m] = ym.split("-");
  const year = Number(y);
  const month = Number(m); // 1..12
  const daysInMonth = new Date(year, month, 0).getDate();
  const mm = String(month).padStart(2, "0");
  return Array.from({ length: daysInMonth }, (_, i) =>
    `${year}-${mm}-${String(i + 1).padStart(2, "0")}`
  );
};


const availableEvents = [
  { 
    title: "Camina 20 minutos al aire libre",
    description: "Realiza una caminata suave para mejorar la circulación y controlar la glucosa."
  },
  { 
    title: "Realiza 10 minutos de estiramientos",
    description: "Estira tus músculos para mejorar la flexibilidad y reducir tensiones."
  },
  { 
    title: "Cocina una comida saludable con bajo índice glucémico",
    description: "Prepara alimentos frescos que ayuden a controlar tus niveles de azúcar en sangre."
  },
  { 
    title: "Realiza una actividad física que disfrutes",
    description: "Haz una actividad física divertida, como bailar o nadar, para mantenerte activo."
  },
  { 
    title: "Escribe 3 cosas por las que estés agradecido/a",
    description: "Anota lo positivo del día para fomentar una mentalidad positiva."
  },
  { 
    title: "Haz una llamada o videollamada a un" + "\nser querido",
    description: "Conéctate con alguien cercano para sentirte acompañado y reducir el estrés."
  },
  { 
    title: "Practica 5 minutos de respiración" + "\nprofunda",
    description: "Relájate con respiraciones profundas para reducir la ansiedad y mejorar el bienestar."
  },
  { 
    title: "Escucha música relajante durante 15 minutos",
    description: "Disfruta de melodías tranquilas para reducir el estrés y mejorar tu estado de ánimo."
  },
  { 
    title: "Lee 10 minutos sobre un tema que te interese",
    description: "Dedica unos minutos a la lectura para mantener tu mente activa y aprendiendo."
  },
  { 
    title: "Realiza un rompecabezas o un juego de memoria",
    description: "Ejercita tu mente con actividades que estimulen tu memoria y concentración."
  },
  { 
    title: "Dedica 10 minutos a aprender algo " + "\nnuevo en línea",
    description: "Explora un tema nuevo para seguir aprendiendo y mantener tu cerebro ágil."
  },
  { 
    title: "Escribe 5 cosas que aprendiste durante " + "\nla semana",
    description: "Reflexiona y anota lo aprendido para reforzar tus conocimientos."
  },
  { 
    title: "Invita a un amigo o familiar a caminar o tomar un café",
    description: "Disfruta de la compañía de tus seres queridos mientras realizas una actividad saludable."
  },
  { 
    title: "Participa en una actividad comunitaria o grupo de apoyo",
    description: "Conéctate con otros para compartir experiencias y mantener la motivación."
  },
  { 
    title: "Organiza una tarde de juegos de mesa " + "\ncon familiares o amigos",
    description: "Comparte un momento divertido para fortalecer tus lazos sociales."
  },
  { 
    title: "Llama a un amigo para ponerte al día",
    description: "Mantén el contacto regular con amigos para evitar el aislamiento y fomentar la amistad."
  },
  { 
    title: "Medita durante 5 minutos en la mañana",
    description: "Inicia el día con tranquilidad, enfocándote en tu bienestar y paz interior."
  },
  { 
    title: "Dedica 10 minutos para disfrutar del aire libre",
    description: "Sal a caminar o simplemente a respirar aire fresco para conectar con la naturaleza."
  },
  { 
    title: "Reflexiona sobre una experiencia " + "\npositiva del día",
    description: "Tómate un momento para recordar lo bueno y fomentar un estado de ánimo positivo."
  },
  { 
    title: "Realiza una actividad que te conecte " + "\ncon la naturaleza",
    description: "Camina por el parque o la playa para relajarte y revitalizar tu energía."
  },
];


const formatDate = (dateString : string): string => {
  const date = new Date(dateString + "T00:00:00");
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

export function BasicCalendar() {
  const { eventsByDate, saveEvents } = useCalendarEvents(); 
  const [selectedDate, setSelectedDate] = useState(today);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleMonth, setVisibleMonth] = useState(today.slice(0, 7)); // "YYYY-MM"
  const eventsPerPage = 5;
  const totalPages = Math.ceil(availableEvents.length / eventsPerPage);
  type Event = {
    title: string;
    description: string;
  };
  const [selectedInfoEvent, setSelectedInfoEvent] = useState<Event | null>(null);


  const handleDatePress = (day : any) => {
    setSelectedDate(day.dateString);
  };  
  

  const handleAddEvent = (event : any) => {
    if (eventsByDate[selectedDate]?.includes(event)) {
      alert("Este evento ya está agregado en esta fecha.");
      return;
    }
    const updatedEvents = {
      ...eventsByDate,
      [selectedDate]: [...(eventsByDate[selectedDate] || []), event],
    };
    saveEvents(updatedEvents);
    setIsModalVisible(false);
  };

  const handleDeleteEvent = (event : any) => {
    const updatedEvents = {
      ...eventsByDate,
      [selectedDate]: eventsByDate[selectedDate].filter(e => e !== event)
    };
    saveEvents(updatedEvents);
  };

  type MarkedDates = Record< string,
  {
    customStyles: {
      container?: any;
      text?: any;
    };
  }>;

  const getCustomMarkedDates = (): MarkedDates => {
    const marked: MarkedDates = {};

    // 1) Marcar TODOS los días del mes visible con borde rojo por defecto
    const monthDays = getDaysInMonth(visibleMonth);
    monthDays.forEach((date) => {
      marked[date] = {
        customStyles: {
          container: {
            backgroundColor: "#fff",
            borderColor: "red",     // 🔴 borde rojo por defecto
            borderWidth: 1,
            borderRadius: 10,
          },
          text: {
            color: "#000",
          },
        },
      };
    });

    Object.keys(eventsByDate).forEach((date) => {
      const eventCount = eventsByDate[date]?.length || 0;

      let backgroundColor = "#ffffff"; // default

      if (eventCount === 1) {
        backgroundColor = "#C3F8B4"; // verde
      } else if (eventCount >= 2) {
        backgroundColor = "#5EC465"; // verde más oscuro
      }

      marked[date] = {
        customStyles: {
          container: {
            backgroundColor,
            borderRadius: 10,
            borderWidth: 0,
          },
          text: {
            color: "#000",
            fontWeight: "bold",
          },
        },
      };
    });

    // 3) Día seleccionado: borde negro más grueso
  if (!marked[selectedDate]) {
    marked[selectedDate] = { customStyles: { container: { borderRadius: 10 }, text: {} } };
  }
  marked[selectedDate].customStyles.container = {
    ...marked[selectedDate].customStyles.container,
    borderColor: "#000",
    borderWidth: 3,
  };

  // 4) Hoy: borde azul (si coincide con seleccionado, prevalece el borde más grueso)
  if (!marked[today]) {
    marked[today] = { customStyles: { container: { borderRadius: 10 }, text: {} } };
  }
  marked[today].customStyles.container = {
    ...marked[today].customStyles.container,
    borderColor: "#00adf5",
    borderWidth: Math.max( marked[today].customStyles.container?.borderWidth ?? 0, 3 ),
  };
  marked[today].customStyles.text = {
    ...marked[today].customStyles.text,
    color: "#00adf5",
    fontWeight: "bold",
  };

  return marked;
};

  return (
    <View style={styles.container}>

      <Calendar
        onDayPress={handleDatePress}
        onMonthChange={(m) => setVisibleMonth(`${m.year}-${String(m.month).padStart(2, "0")}`)}
        markingType="custom"
        markedDates={getCustomMarkedDates()}
        theme={{
          todayTextColor: "#000",
          textSectionTitleColor: "#222222", // Color oscuro para los nombres de los días
          textSectionTitleDisabledColor: "#666666", // Color menos oscuro para sábado y domingo
        }}
      />

      <View style={styles.todayEventsContainer}>
        <Text style={styles.eventsHeaderText}>Actividades de hoy ({formatDate(today)})</Text>
        {eventsByDate[today]?.map((event, index) => (
          <View key={index} style={styles.eventRow}>
            <Text style={styles.eventText}>{event}</Text>
            <TouchableOpacity onPress={() => handleDeleteEvent(event)}>
              <Text style={styles.deleteButton}>X</Text>
            </TouchableOpacity>
          </View>
        )) || <Text style={styles.noEventsText}>Sin actividades</Text>}
      </View>

      {selectedDate !== today && (
        <View style={styles.selectedEventsContainer}>
          <Text style={styles.eventsHeaderText}>Actividades para {formatDate(selectedDate)}</Text>
          {eventsByDate[selectedDate]?.map((event, index) => (
            <View key={index} style={styles.eventRow}>
              <Text style={styles.eventText}>{event}</Text>
              <TouchableOpacity onPress={() => handleDeleteEvent(event)}>
                <Text style={styles.deleteButton}>X</Text>
              </TouchableOpacity>
            </View>
          )) || <Text style={styles.noEventsText}>Sin actividades</Text>}
        </View>
      )}

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          {!selectedInfoEvent ? (
            <>
              <Text style={styles.modalTitle}>Agregar actividad</Text>
              <FlatList
                data={availableEvents.slice(currentPage * eventsPerPage, (currentPage + 1) * eventsPerPage)}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                  <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => handleAddEvent(item.title)}>
                      <Text style={styles.modalItem}>{item.title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedInfoEvent(item)} style={styles.infoButton}>
                      <Text style={styles.infoButtonText}>i</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
              <View style={styles.paginationContainer}>
                <TouchableOpacity onPress={() => setCurrentPage(Math.max(currentPage - 1, 0))}>
                  <Text style={styles.paginationButton}>Anterior</Text>
                </TouchableOpacity>
                <Text style={styles.pageIndicator}>{currentPage + 1} / {totalPages}</Text>
                <TouchableOpacity onPress={() => setCurrentPage(Math.min(currentPage + 1, totalPages - 1))}>
                  <Text style={styles.paginationButton}>Siguiente</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Text style={styles.modalCloseButton}>Cerrar</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.modalTitle}>{selectedInfoEvent.title}</Text>
              <Text style={{ marginTop: 10, fontSize: 16, color: "#333" }}>
                {selectedInfoEvent.description}
              </Text>
              <TouchableOpacity onPress={() => setSelectedInfoEvent(null)} >
                <Text style={styles.modalCloseButton}>Volver</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Modal>
      
      <TouchableOpacity 
        style={styles.fabButton} 
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.fabButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: "#f5f5f5", 
    position: "relative" // importante para que el botón se posicione relativo a este contenedor
  },
  eventRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 5 },
  deleteButton: { color: "red", fontSize: 14 },
  todayEventsContainer: { backgroundColor: "white", padding: 15, borderRadius: 10, marginVertical: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 5, borderLeftWidth: 5, borderLeftColor: "#00adf5" },
  selectedEventsContainer: { backgroundColor: "white", padding: 15, borderRadius: 10, marginVertical: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 5, borderLeftWidth: 5, borderLeftColor: "#99d17d" },
  eventsHeaderText: { fontSize: 18, fontWeight: "bold", color: "#2d4150", marginBottom: 10 },
  eventText: { fontSize: 16, color: "#2d4150", marginBottom: 5 },
  noEventsText: { fontSize: 16, color: "gray" },
  modalContent: { backgroundColor: "white", padding: 20, borderRadius: 10 },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10, color: "#2d4150" },
  modalItem: { fontSize: 16, paddingVertical: 10, color: "#2d4150" },
  modalCloseButton: { marginTop: 20, fontSize: 16, color: "red", textAlign: "center" },
  paginationContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: 10, alignItems: "center" },
  paginationButton: { fontSize: 16, color: "#00adf5", paddingVertical: 5, paddingHorizontal: 10 },
  pageIndicator: { fontSize: 16, fontWeight: "bold" },
  fabButton: {
    position: "absolute",
    right: 20,
    bottom: 40,
    width: 60,
    height: 60,
    backgroundColor: "#66D2A5", // Verde menta
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1000,
  },
  fabButtonText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    marginBottom: 2,
  },
  infoButton: {
  backgroundColor: '#e6f7ff',
  borderRadius: 10,
  width: 15,
  height: 25,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 2,
},
infoButtonText: {
  color: '#00adf5',
  fontWeight: 'bold',
},
buttonRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 10, 
  marginBottom: 10,
}
});

export default BasicCalendar;

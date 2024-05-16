import {
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
import { database } from "./firebaseConfig.js";

const sensorRef = ref(database, "sensor");
onValue(sensorRef, (snapshot) => {
  const data = snapshot.val();
  if (data) {
    const altitude = data.altitude.toFixed(2);
    const pressure = data.pressure.toFixed(2);
    const lightLevel = data.lightLevel.toFixed(2);

    document.getElementById("temperature").textContent =
      `${data.temperature.toFixed(2)} °C` || "N/A";
    document.getElementById("rainLevel").textContent =
      `${data.rainStatus}` || "N/A";
    document.getElementById("humidity").textContent =
      `${altitude} m.n.p.m` || "N/A";
    document.getElementById("pressure").textContent =
      `${pressure} hPa` || "N/A";
    document.getElementById("lightIntensity").textContent =
      `${lightLevel} lux` || "N/A";
  }
});

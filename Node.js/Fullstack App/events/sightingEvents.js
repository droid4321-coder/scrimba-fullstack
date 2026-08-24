import EventEmitter from "node:events";
import { createAlert } from "../utils/createAlert.js";

//the event is created
export const sightingEvents = new EventEmitter();

//event is "enabled", a name is coded and the function to run is added!
sightingEvents.on("sighting-added", createAlert);
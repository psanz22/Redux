import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store"; // vienen de mi store y contienen tipos de TypeScript.
// RootState es el tipo del estado global de Redux
// AppDispatch es el tipo de la función dispatch de Redux, incluyendo todas tus acciones.

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>(); // crea un hook personalizado llamado useAppDispatch que utiliza el tipo AppDispatch para tipar correctamente el dispatch.
// Permite que TS sepa exactamente qué acciones puedes dispatchar. Evitas errores de typo o de enviar un objeto incorrecto.
export const useAppSelector = <TSelected>(
  selector: (state: RootState) => TSelected
) => useSelector(selector); // crea un hook personalizado llamado useAppSelector que utiliza el tipo RootState para tipar correctamente el estado.
// Permite que TS sepa la forma exacta del estado global de Redux.
// Al usar este hook, obtienes autocompletado y verificación de tipos al seleccionar partes del estado.
// Esto ayuda a prevenir errores al acceder a propiedades que no existen o tienen el tipo incorrecto.
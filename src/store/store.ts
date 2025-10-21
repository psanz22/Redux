import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice' // aquí le estoy dando el nombre userReducer al reducer exportado desde userSlice.ts
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Creamos el rootReducer para poder combinar reducers en un solo objeto. Será state.user. state es todo el arbol global, state.user es la parte que maneja el userReducer.
const rootReducer = combineReducers({
  user: userReducer, //aquí defino el nombre de la rama del estado como "user". Esto es un slice.
})

// Definimos la configuración de persistencia. key: "root" es la calve bajo la cual se guarda el estado en localStorage.
// localStorage es el almacenamiento por defecto.
const persistConfig = {
  key: "root",
  storage,
}

// Envuelvemos el rootReducer con persistReducer para habilitar la persistencia.
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // asocia el reducer persistinte al store
  reducer: persistedReducer,
  // toma el middleware por defecto y deshabilita la verificación de serializabilidad para las acciones de persistencia
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // redux-persiste crea acciones internas no serializables, lo que dan un falso positivo para la regla de serlialización
        // de redux, ignorarlas evita la advertencia sin romper nada.
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // habilita las Redux DevTools solo en desarrollo. Esto se hace para no exponer el estado de la app en producción.
  devTools: process.env.NODE_ENV !== 'production',
})
// crea el persistor que se usará en StoreProvider para envolver la app y habilitar la persistencia
export const persistor = persistStore(store);

// Tipos para RootState y AppDispatch para usar en hooks personalizados
// que interactúan con el store de Redux. 
export type RootState = ReturnType<typeof store.getState> //store.getState devuelve el estado actual del store
// ReturnType obtiene el tipo de retorno de la función getState. Typescript sabe qué propiedades existen en el estado, sus tipos y subtipos.
export type AppDispatch = typeof store.dispatch //store.dispatch es la función para enviar acciones al store
// typeof store.dispatch captura todos los tipos de acciones en tu app.


// persistStore debe ejecutarse en el cliente, si corres esto en el servidor, da error porque localStorage no existe.
// Por eso conviene inicializar este código dentro de un Client Component. (ver StoreProvider.tsx)

//puedes usar whitelist y blacklist para indicar qué datos quieren que se persistan y cuales no.
// Ejemplo:
// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["user"], // solo el estado user se persistirá
//   blacklist: [] // ningún estado se excluirá de la persistencia
// }


// Nota: Si tienes múltiples slices y quieres persistir solo algunos de ellos,
// puedes configurar persistReducer individualmente para cada slice en lugar de para el rootReducer.
// Esto te da un control más granular sobre qué partes del estado se persisten.

// Version y migraciones. Si necesitas manejar versiones de estado y migraciones,
// puedes agregar la propiedad version y un objeto migrate al persistConfig.
// Ejemplo:
// const persistConfig = {
//   key: "root",
//   storage,
//   version: 1, // versión del estado persistente
//   migrate: (state) => {
//     // lógica de migración aquí
//     return Promise.resolve(newState);
//   },
// }


//Transform: Si necesitas transformar los datos antes de guardarlos o cargarlos,
// puedes usar transforms en el persistConfig.
// Ejemplo:
// import { createTransform } from 'redux-persist';
// const encryptTransform = createTransform(
//   // función para transformar el estado antes de guardarlo
//   (inboundState) => encrypt(inboundState), // al guardar
//   (outboundState) => decrypt(outboundState) // al recuperar
// );
// const persistConfig = {
//   key: "root",
//   storage,
//   transforms: [encryptTransform], // aplicar la transformación
// }
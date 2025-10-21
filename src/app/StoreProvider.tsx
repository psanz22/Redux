"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      {/* proporciona la store a toda la app */}
      <PersistGate
        loading={
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500"></div>
          </div>
        }
        persistor={persistor}
      >
        {/* espera a que se rehidrate la store, mietnras tanto puedes mostrar un loading; este archivo va a parte en vez
        de ponerlo en el layout directamente por tema de componentes cliente, siendo layout server para exportar metadata. */}
        {children}
      </PersistGate>
    </Provider>
  );
}

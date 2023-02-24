import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { store, persistor } from "redux/store";

import { Layout } from "./Layout/Layout";
import { PublicRoute } from "./PublicRoute/PublicRoute";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { Contacts } from "pages/Contacts/Contacts";
import { Login } from "pages/Login/Login";
import { NotFound } from "pages/NotFound/NotFound";
import { Register } from "pages/Register/Register";
import { UserMenu } from "pages/UserMenu/UserMenu";


export const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <BrowserRouter basename="goit-react-hw-08-phonebook">

          <Routes>

            <Route path='/' element={<Layout/>}>

              <Route path="" element={<PublicRoute/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
              </Route>

              <Route path="" element={<PrivateRoute/>}>
                <Route path="usermenu" element={<UserMenu/>}/>
                <Route path="contacts" element={<Contacts/>}/>
              </Route>

            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </PersistGate>
    </Provider>
  );
};

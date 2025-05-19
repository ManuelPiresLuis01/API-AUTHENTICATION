import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NotFound from './pages/notfound/notfound';
import UnderConstruction from './pages/underconstruction/underconstruction';
import SignIn from './pages/authentication/signIn/signIn';
import SignUp from './pages/authentication/signUp/signUp';
import WelcomePage from './pages/authentication/welcome/welcome';
import { ActivateAccount } from './pages/authentication/typeCode/code';
import { TypeEmail, TypeCode, ResetPassword } from './pages/authentication/forgotPassword/Forgot';
import RecoveryAccount from './pages/authentication/forgotPassword/SendingRecoveryCode';
import Succes from './components/ui/succes/succes';
import { CreatedAccount } from './components/ui/succes/succes';
import ProfilePhoto from './pages/onboard/profilePhoto';
import CountryCity from './pages/onboard/countryCity';
import Profile from './pages/main/profile/userProfile';

function App() {
  console.log("SITE EM CONSTRUCAO, MUDAREMOS A EDUCAÇÃO A NIVEL NACIONAL, CONTINENTAL E MUNDIAL!")
  console.log("PODEM CRER!")
  return (
    <div>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Navigate to="/auth/login" replace />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
          <Route path="/auth/login" element={<SignIn />} />
          <Route path="/auth/registration" element={<SignUp />} />
          <Route path="/auth/registration/welcome/:name/:email" element={<WelcomePage />} />
          <Route path="/auth/registration/activate-account/:email" element={<ActivateAccount />} />
          <Route path="/auth/createdAccount" element={< CreatedAccount />} />
          <Route path="/onboard/profilePhoto" element={< ProfilePhoto />} />
          <Route path="/onboard/countryCity" element={< CountryCity />} />
          <Route path="/auth/forgot-password" element={<TypeEmail />} />
          <Route path="/auth/forgot-password/:name/:email" element={<RecoveryAccount />} />
          <Route path="/auth/forgot-password/typecode/:email" element={<TypeCode />} />
          <Route path="/auth/forgot-password/newPassword/:email" element={<ResetPassword />} />
          <Route path="/auth/forgot-password/newPasswordSaved" element={<Succes route='/auth/login' value='Palavra passe alterada com sucesso, serás direcionado ao login' />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id/public"/>
          <Route path="/feed"/>
        </Routes>
      </Router>
    </div >
  )
}

export default App

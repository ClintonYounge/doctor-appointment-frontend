import { Route, Routes } from 'react-router-dom';
import DoctorsContainer from './components/doctors/DoctorsContainer';
import DoctorForm from './components/doctors/DoctorForm';
import Header from './components/doctors/Header';
import ShowDoctor from './components/doctors/ShowDoctor';
import DeleteDoctorContainer from './components/doctors/DeleteDoctorContainer';
import Main_page from './components/main_page'
// import Set_appoiment from './components/set_appoiment'
import Show from './components/show'
// import './App.css'
import './App.css';

function App() {
  return (
  // <Routes>
  //   <Route path="/" element={<Main_page />} />
  //   <Route path="/show" element={<Show />} />
  //   <Route path="/doctor:id" element={<Main_page />} />
  //   <Route path="/set_appoinment" element={<Set_appoiment  />} />
  // </Routes>
    <>
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/" element={<DoctorsContainer />} /> */}
        <Route path="/" element={<Main_page />} />
        <Route path="/add-doctor" element={<DoctorForm />} />
        {/* <Route path="/doctors/:doctorId" element={<ShowDoctor />} /> */}
        <Route path="/doctors/:doctorId" element={<Show />} />
        <Route path="/delete-doctor" element={<DeleteDoctorContainer />} />
      </Routes>
    </>
  );
}

export default App;

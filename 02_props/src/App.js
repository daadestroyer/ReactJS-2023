import Navbar from "./components/Navbar";



function App() {
  // const navBarDetails = {navbarname : 'TheCoders TV' , about : 'About Us' ,services : 'Our Services'}
  return (
    <>
    
      {/* <Navbar {...navBarDetails}/> */}
      <Navbar navbarname = "TheCoders TV" about = "About Us" services = "Our Services"/>
      
      {/* this navbar is for showing the example of PropTypes */}
      {/* <Navbar/> */}
    </>
  );
}

export default App;

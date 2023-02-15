import React from 'react'
import { Provider } from 'react-redux'
import Home from './Pages/Home'
import { store } from './Redux/configureStore'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <Provider store={store}>
     <Navbar />
      <Home/>
    </Provider>
  )
}
export default App
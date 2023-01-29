import React from 'react'
import { Provider } from 'react-redux'
import Home from './Pages/Home'
import { store } from './Redux/configureStore'

const App = () => {
  return (
    <Provider store={store}>
    <div className='flex justify-center items-center'>
      <Home/>
    </div>
    </Provider>
  )
}
export default App
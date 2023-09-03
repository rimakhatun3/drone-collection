import Navbar from '@/components/Navbar'
import './globals.css'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayout =({ children }) =>{
  return (
    <div className='container mx-auto'>
      <Navbar/>

      <main>
        {children}
      </main>
    </div>
  )
}

export default RootLayout;
import React from 'react'
import NavBar from './Dashboard/components/NavBar';
// import Footer from './Dashboard/components/Footer';

const TemplatePage = ({ navbarOptions, children, title }) => {
  return (
    <div className='template-page'>
      <div className='template-page__title'>{title}</div>
      <NavBar navbarOptions={navbarOptions} />
      {children}
    </div>
  )
}

export default TemplatePage;

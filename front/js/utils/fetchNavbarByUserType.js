const fetchNavbarByUserType = (userType) => {
  const adminNavbarOptions = [
    {
      'label': 'Vehiculos',
      'url': '/dashboard',
      'icon': '../../static/images/car.svg'
    },
    {
      'label': 'Usuarios',
      'url': '/dashboard/user',
      'icon': '../../static/images/person.svg'
    },
    {
      'label': 'Centro de costo',
      'url': '/dashboard/costcenter',
      'icon': '../../static/images/document.svg'
    },
    {
      'label': 'Faena',
      'url': '/dashboard/mining',
      'icon': '../../static/images/costcenter.svg'
    }
  ];

  const moderatorNavbarOptions = [
    {
      'label': 'Vehiculos',
      'url': '/dashboard',
      'icon': '../../static/images/car.svg'
    },
    {
      'label': 'Usuarios',
      'url': '/dashboard/user',
      'icon': '../../static/images/person.svg'
    }
  ];

  const userNavbarOptions = [
  ];

  let navbarOptions;
  if(userType == 1) {
    navbarOptions = adminNavbarOptions;
  } else if(userType == 2) {
    navbarOptions = moderatorNavbarOptions;
  } else {
    navbarOptions = userNavbarOptions;
  }

  return navbarOptions;
}

export default fetchNavbarByUserType;

const fetchNavbarByUserType = (userType) => {
  const adminNavbarOptions = [
    {
      'label': 'Vehiculos',
      'url': '/dashboard'
    },
    {
      'label': 'Usuarios',
      'url': '/dashboard/user'
    },
    {
      'label': 'Centro de costo',
      'url': '/dashboard/costcenter'
    }
  ];

  const moderatorNavbarOptions = [
    {
      'label': 'Vehiculos',
      'url': '/dashboard'
    },
    {
      'label': 'Usuarios',
      'url': '/dashboard/user'
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

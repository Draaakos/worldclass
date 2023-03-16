const EXPIRED_DAYS_VALUES = {
  EXPIRED: 0,
  TWENTY_DAYS: 1,
  FORTY_DAYS: 2,
  SIXTY_DAYS: 3
};


const getExpiredType = expiredDateValue => {
  const now = new Date();

  const splittedDate = expiredDateValue.split('-');

  const expiredDate = new Date(splittedDate[2], parseInt(splittedDate[1]) - 1, splittedDate[0]);

  const twentyDays = new Date(splittedDate[2], parseInt(splittedDate[1]) - 1, splittedDate[0]);
  twentyDays.setUTCDate(twentyDays.getUTCDate() - 20);

  const fortyDays = new Date(splittedDate[2], parseInt(splittedDate[1]) - 1, splittedDate[0]);
  fortyDays.setUTCDate(fortyDays.getUTCDate() - 40);

  const sixtyDays = new Date(splittedDate[2], parseInt(splittedDate[1]) - 1, splittedDate[0]);
  sixtyDays.setUTCDate(sixtyDays.getUTCDate() - 60);

  if(now.getTime() > expiredDate.getTime()) {
    return EXPIRED_DAYS_VALUES.EXPIRED;
  } else if(now.getTime() > twentyDays.getTime()) {
    return EXPIRED_DAYS_VALUES.TWENTY_DAYS;
  } else if(now.getTime() > fortyDays.getTime()) {
    return EXPIRED_DAYS_VALUES.FORTY_DAYS;
  } else if(now.getTime() > sixtyDays.getTime()){
    return EXPIRED_DAYS_VALUES.SIXTY_DAYS;
  } else {
    return 4
  }
}

export default getExpiredType;

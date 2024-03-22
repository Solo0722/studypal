export const getUpcomingClasses = (classesData) => {
  // return classesData.filter((item) => item.date > new Date());
  return new Array(2);
};

export const getRecentNotes = (notesData) => {
  return new Array(2);
};

export const getHomeSummaryData = (notesData, classesData) => {
  return {
    upcomingClasses: getUpcomingClasses(classesData),
    recentNotes: getRecentNotes(notesData),
  };
};

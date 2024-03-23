import moment from "moment";
import { ClassData, Note } from "../shared/types";

export const getUpcomingClasses = (classesData: ClassData[]) => {
  return classesData.filter((item) =>
    moment().isBetween(item.startDate, item.endDate)
  );
};

export const getRecentNotes = (notesData: Note[]) => {
  return notesData.filter((item) =>
    moment(item.updatedAt).isBetween(
      moment().subtract(5, "days").toDate(),
      moment().add(5, "days").toDate()
    )
  );
};

export const getHomeSummaryData = (
  notesData: Note[],
  classesData: ClassData[]
) => {
  return {
    upcomingClasses: getUpcomingClasses(classesData),
    recentNotes: getRecentNotes(notesData),
  };
};

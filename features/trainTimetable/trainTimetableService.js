import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

const getTrainTimetableData = async (trainNo) => {
  console.log({ trainNo }, import.meta.env);
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_TRAIN_TIMETABLE_URL}/${trainNo}`
  );
  console.log(response?.data);
  return response?.data;
};

const trainTimetableService = {
  getTrainTimetableData,
};

export default trainTimetableService;

import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

const getTrainBetweenStations = async (fromStation, toStation) => {
  console.log("getTrainBetweenStations", { fromStation, toStation });
  console.log(process.env);
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_TRAIN_TIMETABLE_URL}/${fromStation}/${toStation}`
  ); // { stationCode: fromStation, destinationStation: toStation }
  console.log({ response });
  console.log("---->", response?.data?.trains);
  return response?.data?.trains;
};

const trainBetweenStationsService = {
  getTrainBetweenStations,
};

export default trainBetweenStationsService;

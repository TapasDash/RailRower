import { useEffect } from "react";
import { reset } from "../features/trainTimetable/trainTimetableSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/trainTimetableDetails.scss";
import TrainLoader from "../utils/TrainLoader/TrainLoader";

const TrainTimetableDetails = () => {
  const { trainTimetableData, isLoading, isError, message, isSuccess } =
    useSelector((state) => state.trainTimetable);

  if (isLoading) return <TrainLoader />;
  return (
    <section className="trainTimetableDetails">
      <table>
        <thead>
          <tr>
            <th>Station</th>
            <th>Arrival</th>
            <th>Distance</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th>Departure</th>
          </tr>
        </thead>
        <tbody>
          {trainTimetableData &&
            trainTimetableData.schedules.map(
              ({ _id, dstName, dstCode, dstArrive, orgDepart, distance }) => (
                <>
                  <tr key={_id}>
                    <td>{dstName}</td>
                    <td>{dstArrive.substring(0, 5)}</td>
                    <td>{distance} km</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>({dstCode})</td>
                    <td>{orgDepart.substring(0, 5)}</td>
                  </tr>
                </>
              )
            )}
        </tbody>
      </table>
    </section>
  );
};

export default TrainTimetableDetails;

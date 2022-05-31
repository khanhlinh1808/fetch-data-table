import "./styles.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://mocki.io/v1/16a61713-1b8f-4fb8-9900-a6252e9f5abf")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên ứng viên</th>
            <th>Năm sinh</th>
            <th>Trường</th>
            <th>Chuyên ngành</th>
          </tr>
        </thead>
        {data &&
          data.map((item, index) => {
            return (
              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.year_of_birth}</td>
                  <td>{item.school}</td>
                  <td>{item.major}</td>
                </tr>
              </tbody>
            );
          })}
      </Table>
    </div>
  );
}

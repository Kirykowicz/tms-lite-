export default function LoadBoardItem({ load }) {
  return (
    <tr>
      <td>{load.id}</td>
      <td>{load.customer_name}</td>
      <td>{load.carrier_name}</td>
      <td>{load.stops[0] ? load.stops[0].city : "-"}</td>
      <td>{load.stops[0] ? load.stops[0].state : "-"}</td>
      <td>{load.stops[1] ? load.stops[1].city : "-"}</td>
      <td>{load.stops[1] ? load.stops[1].state : "-"}</td>
      <td>${load.revenue ? load.revenue : "-"}</td>
      <td>${load.cost ? load.cost : "-"}</td>
      <td>{load.total ? load.total : "-"}</td>
      <td>{load.equipment_type ? load.equipment_type : "-"}</td>
    </tr>
  );
}

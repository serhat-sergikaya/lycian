interface Props {
  change: number;
}
const Change = ({ change }: Props) => {
  let color = change > 0 ? "green" : "crimson";

  console.log(color);
  return (
    <td className="table__data-col" style={{ color: color }}>
      {change} %
    </td>
  );
};

export default Change;

// GenericTableComponent.js
import { Table } from "react-bootstrap";

interface Column {
  header: string;
  accessor: string;
}

interface GenericTableComponentProps {
  data: never[];
  columns: Column[];
  loading: boolean;
  error: string | null;
}

const GenericTableComponent: React.FC<GenericTableComponentProps> = ({
  data,
  columns,
  loading,
  error,
}) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, itemIndex) => (
          <tr key={itemIndex}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex}>{item[column.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default GenericTableComponent;

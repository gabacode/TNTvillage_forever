import { useMagnet } from "../../../hooks";
import { Record } from "../../../types";
import { Table } from "react-bootstrap";
import { CategoryImage } from "../../atoms/CategoryImage";
import { useMemo } from "react";

interface Props {
  results: Record[];
}

export const Results = ({ results }: Props) => {
  const { getMagnetLink, getDimension } = useMagnet();

  const resultComponent = useMemo(() => {
    return (
      <>
        {results.map((result, index) => (
          <tr key={index}>
            <td className="text-center">
              <a href={getMagnetLink(result.HASH, result.TITOLO)}>
                <CategoryImage category={0} />
              </a>
            </td>
            <td className="text-center">
              <CategoryImage category={result.CATEGORIA} />
            </td>
            <td>
              <a href={getMagnetLink(result.HASH, result.TITOLO)}>
                {result.TITOLO}
              </a>
              &nbsp;
              <small>{result.DESCRIZIONE}</small>
            </td>
            <td className="text-end">
              <small>{getDimension(result.DIMENSIONE)}</small>
            </td>
          </tr>
        ))}
      </>
    );
  }, [getDimension, getMagnetLink, results]);

  return results.length > 0 ? (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>M</th>
          <th>Cat</th>
          <th>Titolo</th>
          <th>Dimensione</th>
        </tr>
      </thead>
      <tbody>{resultComponent}</tbody>
    </Table>
  ) : (
    <div />
  );
};


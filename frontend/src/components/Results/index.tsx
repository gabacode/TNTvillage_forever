import { useMagnet } from "../../hooks";
import { Categories, Record } from "../../types";

interface Props {
  results: Record[];
}

export const Results = ({ results }: Props) => {
  const { getMagnetLink, getDimension } = useMagnet();

  return results.length > 0 ? (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Titolo</th>
          <th>Categoria</th>
          <th>Dimensione</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={index}>
            <td>
              <a href={getMagnetLink(result.HASH, result.TITOLO)}>
                {result.TITOLO}
              </a>
              <small className="d-block">{result.DESCRIZIONE}</small>
            </td>
            <td>{Categories[result.CATEGORIA]}</td>
            <td>{getDimension(result.DIMENSIONE)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div />
  );
};


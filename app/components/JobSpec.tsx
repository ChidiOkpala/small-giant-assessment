import { getSpecLabel } from "../helpers";

type JobSpecProps = {
  specs: Record<string, string | number>;
  specCount?: number;
};

const JobSpec = ({ specs, specCount }: JobSpecProps) => {
  const count = specCount ? specCount + 1 : Object.keys(specs).length;

  const specsWithValue = Object.entries(specs).filter(([_, value]) => value);

  return (
    <ul className="flex flex-col gap-1 pt-1">
      {specsWithValue.slice(0, count).map(([key, value]) => {
        if (!key.startsWith("_")) {
          return (
            <li className="text-sm capitalize" key={key}>{getSpecLabel(key)}: <span className="font-semibold">{value}</span></li>
          )
        }
      })}
    </ul>
  );
};

export default JobSpec;

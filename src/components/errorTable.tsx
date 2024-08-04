import { AxiosError } from "axios";

interface IErrorTable {
  message?: string;
  error: AxiosError;
}

const ErrorTable = (props: IErrorTable) => {
  return (
    <div className="flex items-center justify-center font-bold w-full h-12 border border-black rounded bg-white">
      <h1>{props.error.message}</h1>
    </div>
  );
};

export default ErrorTable;

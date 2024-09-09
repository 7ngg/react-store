import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks";
import { logState } from "../store/slices/modalContentSlice";

const Auth: React.FC = () => {
  let Content = useAppSelector((state) => state.modalContent.component);

  return (
    <div className="w-[400px] h-[500px] bg-white border border-black rounded font-bold">
      {Content && <Content />}
    </div>
  );
};

export default Auth;

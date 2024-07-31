interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ title, children, onClose }: ModalProps) => {
  return (
    <>
      <div
        onClick={onClose}
        className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"
      />
      <div className="modal w-[500px] p-5 rounded bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between mb-5">
          <h1 className="font-bold text-2xl">{title}</h1>
          <button className="text-2xl outline-none" onClick={onClose}>
            &times;
          </button>
        </div>
        {children}
      </div>
    </>
  );
};

export default Modal;

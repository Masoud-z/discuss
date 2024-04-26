interface Props {
  message?: string[];
}

const FormError = ({ message }: Props) => {
  return (
    <>
      {message && <div className="error-container">{message.join(", ")}</div>}
    </>
  );
};

export default FormError;

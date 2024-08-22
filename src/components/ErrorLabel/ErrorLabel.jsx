import { ErrorLabelContainer, ErrorLabelMessage } from "./ErrorLabelStyles";

export function ErrorLabel({ show, message }) {
  if (!show) return;
  return (
    <ErrorLabelContainer>
      <ErrorLabelMessage>{message}</ErrorLabelMessage>
    </ErrorLabelContainer>
  );
}

import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmName = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  @media (max-width: 500px) {
    width: 100%;
  }

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }
  & textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid var(--color-grey-300);
    border-radius: 4px;
    font-size: 2rem;
    outline: none;
    transition: border-color 0.3s ease; /* Smooth transition for border color on focus */
    background-color: var(--color-grey-50);
    color: var(--color-grey-600);

    &:focus {
      border-color: var(--color-primary); /* Change border color on focus */
    }
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmName({ name, onConfirm, disabled, onCloseModal, onChange }) {
  const handleSave = () => {
    onConfirm();
    onCloseModal();
  };

  return (
    <StyledConfirmName>
      <Heading as="h3">Note Name</Heading>
      <p>Enter a new name for your note:</p>
      <textarea
        value={name}
        onChange={(e) => onChange(e.target.value)}
        placeholder="New note name"
      />
      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation="primary" disabled={disabled} onClick={handleSave}>
          Save
        </Button>
      </div>
    </StyledConfirmName>
  );
}

export default ConfirmName;

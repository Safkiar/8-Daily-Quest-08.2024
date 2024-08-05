import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  //  part of the URL that come after the ? and are typically used to pass key-value pairs
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
  // determine the current filter value based on the URL's search parameters and a default option.
  // This method retrieves the value of the query parameter specified by filterField if does not exist in the URL it returns NULL

  function handleClick(value) {
    searchParams.set(filterField, value);
    // set()  is used to set or update the value of  query parameter in the search parameters object.
    // value: This is the new value
    if (searchParams.get("page")) searchParams.set("page", 1);
    // get =  checks if there is a query parameter named "page" in the current URL's
    setSearchParams(searchParams);
    // update the URL's query parameters with the new searchParams object after modifications have been made
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;

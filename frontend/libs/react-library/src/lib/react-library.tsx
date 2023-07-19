import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactLibraryProps {}

const StyledReactLibrary = styled.div`
  color: pink;
`;

export function ReactLibrary(props: ReactLibraryProps) {
  return (
    <StyledReactLibrary>
      <h1>Welcome to ReactLibrary!</h1>
    </StyledReactLibrary>
  );
}

export default ReactLibrary;

import styled from "styled-components";

const App = () => {
  return (
    <PageViewWrapper>
      <Center>here it starts</Center>
    </PageViewWrapper>
  );
};

export default App;

const PageViewWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
const Center = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

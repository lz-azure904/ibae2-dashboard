// Import styled-components and define your grid styles
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  padding: 16px;
`;

// Create styled components for each grid item with different sizes
const GridItem = styled.div<{ size: number }>`
  background: #f3f3f3;
  border-radius: 8px;
  padding: 20px;
  grid-column: span ${(props) => props.size};
  /* Add more styles as needed */
`;

// StyledComponents.ts
import styled from 'styled-components';

export const Dashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Module = styled.div`
  background: #333;
  color: white;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const ModuleTitle = styled.h2`
  font-size: 1.5rem;
  border-bottom: 1px solid #777;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
//   text-align: center; /* Center the text inside the h2 */
`;

export const LogModuleTitle = styled.h2`
  font-size: 1.5rem;
//   border-bottom: 1px solid #777;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  text-align: center; /* Center the text inside the h2 */
`;

export const SubModule = styled.div`
  flex-grow: 1;
  /* Additional styles for submodule */
  background: #333;
  color: white;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

// export const GridContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   grid-gap: 1px;
//   padding: 15px;

//   @media (max-width: 1000px) {
//     grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
//   }
// `;

interface GridItemProps {
    columnSpan?: number;
    rowSpan?: number;
    backgroundImage?: string;
}

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(200px, 1fr));
  grid-gap: 1px;
  padding: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  @media (max-width: 200px) {
    grid-template-columns: repeat(1, minmax(100px, 1fr));
  }
`;

// Create styled components for each grid item with different sizes
// export const GridItem = styled.div<{ size: number }>`
//   background: #f3f3f3;
//   border-radius: 8px;
//   padding: 20px;
//   grid-column: span ${(props) => props.size};
//   /* Add more styles as needed */
// `;


// export const GridItem = styled.div<GridItemProps>`
// background: url(${(props) => props.backgroundImg}) no-repeat center center;
// background-size:
//   color: white;
//   padding: 5px;
//   border-radius: 5px;
//   display: flex;
//   flex-direction: column;

//   /* If columnSpan is not provided, it defaults to span 1 */
//   grid-column: span ${(props) => props.columnSpan || 1};
//   /* If rowSpan is provided, use it to span multiple rows */
//   grid-row: span ${(props) => props.rowSpan || 1};

//   border-radius: 8px;
//   padding: 20px;
//   grid-column: span ${(props) => props.columnSpan};

//   img {
//     width: 100%; /* or any specific size */
//     height: auto; /* maintain aspect ratio */
//     /* you can also use specific sizes like */
//     /* width: 200px;
//     height: 150px; */
//   }
//   /* Add more styles as needed */
// `;

// export const GridItem = styled.div<GridItemProps>`
export const GridItem = styled.a<GridItemProps>`
  background: #333;
  color: white;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  &:hover {
    text-decoration: underline; // Optional: Adds underline on hover for visual feedback
  }

  /* If columnSpan is not provided, it defaults to span 1 */
  grid-column: span ${(props) => props.columnSpan || 1};
  /* If rowSpan is provided, use it to span multiple rows */
  grid-row: span ${(props) => props.rowSpan || 1};

  border-radius: 8px;
  padding: 20px;
  grid-column: span ${(props) => props.columnSpan};
  /* Add more styles as needed */

  img {
    width: 100%; /* or any specific size */
    height: auto; /* maintain aspect ratio */
    /* you can also use specific sizes like */
    /* width: 200px; */
    height: 100px;
}
`;

export const LogoGridItem = styled.a<GridItemProps>`
  background: #333;
  color: white;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  // justify-content: center; // Horizontal centering
  // align-items: center; // Vertical centering
  flex-direction: column;
  &:hover {
    text-decoration: underline; // Optional: Adds underline on hover for visual feedback
  }

  /* If columnSpan is not provided, it defaults to span 1 */
  grid-column: span ${(props) => props.columnSpan || 1};
  /* If rowSpan is provided, use it to span multiple rows */
  grid-row: span ${(props) => props.rowSpan || 1};

  border-radius: 8px;
  padding: 20px;
  grid-column: span ${(props) => props.columnSpan};
  /* Add more styles as needed */

  img {
    width: 150px; /* or any specific size */
    height: auto; /* maintain aspect ratio */
    /* you can also use specific sizes like */
    /* width: 200px; */
    height: 100px;
}
`;

export const VerticalGridItem = styled.a<GridItemProps>`
  background: #333;
  color: white;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  // justify-content: center; // Horizontal centering
  // align-items: center; // Vertical centering
  flex-direction: column;
  &:hover {
    text-decoration: underline; // Optional: Adds underline on hover for visual feedback
  }

  /* If columnSpan is not provided, it defaults to span 1 */
  grid-column: span ${(props) => props.columnSpan || 1};
  /* If rowSpan is provided, use it to span multiple rows */
  grid-row: span ${(props) => props.rowSpan || 1};

//   background-image: url(${props => props.backgroundImage});
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover; // or contain depending on your needs

  border-radius: 8px;
  padding: 20px;
  grid-column: span ${(props) => props.columnSpan};
  /* Add more styles as needed */

  img {
    width: 100% /* or any specific size */
    height: auto; /* maintain aspect ratio */
    /* you can also use specific sizes like */
    /* width: 200px; 
    height: 100px; */
}
`;

// Add more styled components as needed

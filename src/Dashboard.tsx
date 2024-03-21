// Dashboard.tsx
import React from 'react';
import { Dashboard, Module, LogoGridItem, ModuleTitle, SubModule, VerticalGridItem, GridContainer, LogModuleTitle, GridItem } from './StyledComponents';
import testImage1 from './203354.png'
import testImage2 from './203413.png'
import testImage3 from './002309.png'
import testImage4 from './001954.png'
import testImage5 from './203431.png'
import testImage6 from './214122.png'
import logo from './logo512.png'

const RPTProductGradeMappingEvent: React.FC = () => {
  return (
    <GridContainer>
      <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={2} rowSpan={1}> {/* This item will span 2 columns */}
        <ModuleTitle>Business Activity Modeling</ModuleTitle>
        <img src={testImage1} />
        {/* Content for Business Activity Modeling */}
      </GridItem>
      <GridItem columnSpan={2} rowSpan={1}> {/* This item will span 1 column */}
        <ModuleTitle>Enterprise Connector No-Code Builder</ModuleTitle>
        <img src={testImage2} />
        {/* Content for Domain Model Customization */}
      </GridItem>
      <GridItem columnSpan={1} rowSpan={1}> {/* This item will span 3 columns */}
        <ModuleTitle>Prompt Library</ModuleTitle>
        <img src={testImage4} />
        {/* Content for Intelligent Business Technology Studio (IBTS) */}
      </GridItem>
      <VerticalGridItem columnSpan={1} rowSpan={3}> {/* This item will span 3 columns */}
        <ModuleTitle>Execution Tracing</ModuleTitle>
        <img src={testImage3} />
        {/* Content for Intelligent Business Technology Studio (IBTS) */}
      </VerticalGridItem>
      <LogoGridItem columnSpan={4} rowSpan={1}> {/* This item will span 2 columns */}
        <LogModuleTitle>Intelligent Business Technology Studio (IBTS)</LogModuleTitle>
        <img src={logo} />
        {/* Content for Business Activity Modeling */}
      </LogoGridItem>
      <GridItem columnSpan={1} rowSpan={1}> {/* This item will span 2 columns */}
        <ModuleTitle>Content Repo</ModuleTitle>
        <img src={testImage4} />
        {/* Content for Business Activity Modeling */}
      </GridItem>
      <GridItem columnSpan={2} rowSpan={1}> {/* This item will span 2 columns */}
        <ModuleTitle>Domain Model Customization</ModuleTitle>
        <img src={testImage5} />
        {/* Content for Business Activity Modeling */}
      </GridItem>
      <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={2} rowSpan={1}> {/* This item will span 1 column */}
        <ModuleTitle>Execution</ModuleTitle>
        <img src={testImage6} />
        {/* Content for Domain Model Customization */}
      </GridItem>
      <GridItem columnSpan={1} rowSpan={1}> {/* This item will span 3 columns */}
        <ModuleTitle>Finetuning</ModuleTitle>
        <img src={testImage4} />
        {/* Content for Intelligent Business Technology Studio (IBTS) */}
      </GridItem>
      {/* More GridItems here */}
    </GridContainer>
    // <Dashboard>
    //   <Module>
    //     <ModuleTitle>Business Activity Modeling</ModuleTitle>
    //     {/* Content */
    //     }
    //   </Module>
    //   <Module>
    //     <ModuleTitle>Enterprise Connector No Code Builder</ModuleTitle>
    //     {/* Content */}
    //   </Module>
    //   <Module>
    //     <ModuleTitle>Business Activity Modeling</ModuleTitle>
    //     {/* Content */
    //     }
    //   </Module>
    //   <Module>
    //     <ModuleTitle>Enterprise Connector No Code Builder</ModuleTitle>
    //     {/* Content */}
    //   </Module>
    //   <Module>
    //     <ModuleTitle>Business Activity Modeling</ModuleTitle>
    //     {/* Content */
    //     }
    //   </Module>
    //   <Module>
    //     <ModuleTitle>Enterprise Connector No Code Builder</ModuleTitle>
    //     {/* Content */}
    //   </Module>
    //   {/* Repeat for each module */}
    // </Dashboard>
  );
};

export default RPTProductGradeMappingEvent;

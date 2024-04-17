// Dashboard.tsx
import React from 'react';
import { useMsal } from '@azure/msal-react';
import { LogoGridItem, ModuleTitle, VerticalGridItem, GridContainer, LogModuleTitle, GridItem } from './StyledComponents';
import testImage1 from './203354.png'
import testImage2 from './203413.png'
import testImage3 from './002309.png'
import testImage4 from './214122.png'
import testImage8 from './214129.png'
import testImage5 from './203431.png'
import testImage6 from './203439.png'
import eventMgmt from './203359.png'
import partnerImg from './partnerEcosystem.jpg'
import modelImg from './domainModelCustomization.png'
import logo from './CW3_icon.png'

const LogoutButton: React.FC = () => {
    const { instance } = useMsal();

    return (
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => instance.logoutRedirect({ postLogoutRedirectUri: "https://dashboard.cloudwave3.com" })}>
        Logout
        </button>
    );
};

const IBAE2DashBoard: React.FC = () => {
  return (
    <GridContainer>
      <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 2 columns */}
        <ModuleTitle>Business Activity Model</ModuleTitle>
        <img src={testImage6} alt='' />
        {/* Content for Business Activity Modeling */}
      </GridItem>
      <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 1 column */}
        <ModuleTitle>Digital Capability Model</ModuleTitle>
        <img src={testImage6}  alt=''/>
        {/* Content for Domain Model Customization */}
      </GridItem>
      <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 2 columns */}
        <ModuleTitle>Connector Hosting</ModuleTitle>
        <img src={testImage5} alt='' />
        {/* Content for Business Activity Modeling */}
      </GridItem>
      <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 1 column */}
        <ModuleTitle>Enterprise Applications</ModuleTitle>
        <img src={testImage5}  alt=''/>
        {/* Content for Domain Model Customization */}
      </GridItem>
      <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 3 columns */}
        <ModuleTitle>No-Code Workbench</ModuleTitle>
        <img src={testImage4}  alt=''/>
        {/* Content for Intelligent Business Technology Studio (IBTS) */}
      </GridItem>
      <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 3 columns */}
        <ModuleTitle>Domain Agencies</ModuleTitle>
        <img src={partnerImg}  alt=''/>
        {/* Content for Intelligent Business Technology Studio (IBTS) */}
      </GridItem>
      <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 2 columns */}
        <ModuleTitle>API Management</ModuleTitle>
        <img src={testImage1} alt='' />
        {/* Content for Business Activity Modeling */}
      </GridItem>
      <LogoGridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={2} rowSpan={1}> {/* This item will span 2 columns */}
        <LogModuleTitle>Intelligent Business Execution Environment</LogModuleTitle>
        
        <img src={logo}  alt=''/>
        <LogoutButton />
        {/* Content for Business Activity Modeling */}
      </LogoGridItem>
      <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 1 column */}
        <ModuleTitle>Event Management</ModuleTitle>
        <img src={eventMgmt}  alt=''/>
        {/* Content for Domain Model Customization */}
      </GridItem>
      <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 2 columns */}
        <ModuleTitle>Content Repository</ModuleTitle>
        <img src={testImage8}  alt=''/>
        {/* Content for Business Activity Modeling */}
      </GridItem>
      <VerticalGridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={2}> {/* This item will span 3 columns */}
        <ModuleTitle>Execution Tracing</ModuleTitle>
        <img src={testImage3}  alt=''/>
        {/* Content for Intelligent Business Technology Studio (IBTS) */}
      </VerticalGridItem>
      <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={2} rowSpan={1}> {/* This item will span 2 columns */}
        <ModuleTitle>Domain Model Customization</ModuleTitle>
        <img src={modelImg}  alt=''/>
        {/* Content for Business Activity Modeling */}
      </GridItem>
      <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={2} rowSpan={1}> {/* This item will span 1 column */}
        <ModuleTitle>Assistant Lifecycle Management</ModuleTitle>
        <img src={testImage2}  alt=''/>
        {/* Content for Domain Model Customization */}
      </GridItem>
      <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 3 columns */}
        <ModuleTitle>Prompt Library</ModuleTitle>
        <img src={testImage4}  alt=''/>
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

export default IBAE2DashBoard;

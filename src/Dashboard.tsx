// Dashboard.tsx
import React from 'react';
import { 
  IconArrowDown,
  IconBolt,
  IconBrandGoogle,
  IconFileUpload,
  IconPlayerStop,
  IconRepeat,
  IconSettings,
  IconActivity,
  IconSend,} 
  from '@tabler/icons-react';
import { useMsal } from '@azure/msal-react';
import { LogoGridItem, ModuleTitle, GridContainer, LogModuleTitle, GridItem } from './StyledComponents';
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
      <div>
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => instance.logoutRedirect({ postLogoutRedirectUri: "https://dashboard.cloudwave3.com" })}>
        Logout
        </button>
      </div>
        
    );
};

const IBAE2DashBoard: React.FC = () => {
  return (
    <div>
      <GridContainer>
        <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 2 columns */}
          <ModuleTitle>Business Activity Model</ModuleTitle>
          <img src={testImage6} alt='' />
          {/* Content for Business Activity Modeling */}
        </GridItem>
        <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 1 column */}
          <ModuleTitle>Digital Function Mapping</ModuleTitle>
          <img src={testImage6}  alt=''/>
          {/* Content for Domain Model Customization */}
        </GridItem>
        <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 2 columns */}
          <ModuleTitle>No-Code Workbench</ModuleTitle>
          <img src={testImage5} alt='' />
          {/* Content for Business Activity Modeling */}
        </GridItem>
        <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 1 column */}
          <ModuleTitle> Business Connectors</ModuleTitle>
          <img src={testImage5}  alt=''/>
          {/* Content for Domain Model Customization */}
        </GridItem>
        <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 3 columns */}
          <ModuleTitle>Enterprise Applications</ModuleTitle>
          <img src={testImage4}  alt=''/>
          {/* Content for Intelligent Business Technology Studio (IBTS) */}
        </GridItem>
        <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 3 columns */}
          <ModuleTitle>Subject Matter Experts</ModuleTitle>
          <img src={partnerImg}  alt=''/>
          {/* Content for Intelligent Business Technology Studio (IBTS) */}
        </GridItem>
        <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 2 columns */}
          <ModuleTitle>Business Function Mgmt</ModuleTitle>
          <img src={testImage1} alt='' />
          {/* Content for Business Activity Modeling */}
        </GridItem>
        <LogoGridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={2} rowSpan={1}> {/* This item will span 2 columns */}
          <LogModuleTitle>Intelligent Business Execution Environment</LogModuleTitle>
          
          <img src={logo}  alt=''/>
         
          {/* Content for Business Activity Modeling */}
        </LogoGridItem>
        <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 1 column */}
          <ModuleTitle>Business Event Mgmt</ModuleTitle>
          <img src={eventMgmt}  alt=''/>
          {/* Content for Domain Model Customization */}
        </GridItem>
        <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 2 columns */}
          <ModuleTitle>Content Repository</ModuleTitle>
          <img src={testImage8}  alt=''/>
          {/* Content for Business Activity Modeling */}
        </GridItem>
        <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 3 columns */}
          <ModuleTitle>Execution Tracing</ModuleTitle>
          <img src={testImage8}  alt=''/>
          {/* Content for Intelligent Business Technology Studio (IBTS) */}
        </GridItem>
        <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={2} rowSpan={1}> {/* This item will span 2 columns */}
          <ModuleTitle>Domain Model Customization</ModuleTitle>
          <img src={modelImg}  alt=''/>
          {/* Content for Business Activity Modeling */}
        </GridItem>
        <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={2} rowSpan={1}> {/* This item will span 1 column */}
          <ModuleTitle>Model Lifecycle Management</ModuleTitle>
          <img src={testImage2}  alt=''/>
          {/* Content for Domain Model Customization */}
        </GridItem>
        <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 3 columns */}
          <ModuleTitle>Model Hosting</ModuleTitle>
          <img src={testImage4}  alt=''/>
          {/* Content for Intelligent Business Technology Studio (IBTS) */}
        </GridItem>
        <GridItem href="https://ibae2.cloudwave3.com" target="_blank" rel="noopener noreferrer" columnSpan={1} rowSpan={1}> {/* This item will span 3 columns */}
          <ModuleTitle>Account Settings</ModuleTitle>
          <ul>
            <li><IconFileUpload size={18}/>General</li>
            <li><IconFileUpload size={18}/>Usage</li>
            <li><IconFileUpload size={18}/>Billing</li>
            <li><IconFileUpload size={18}/>Preferences</li>
          </ul>
        </GridItem>
        {/* More GridItems here */}
      </GridContainer>
      <LogoutButton />
      </div>
    
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

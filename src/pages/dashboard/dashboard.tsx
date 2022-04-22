import React, { ReactElement } from 'react';
import { LaunchpadHeader } from './components/LaunchpadHeader';
import { TrainingCardColumn } from './components/TrainingCardColumn';
import {
  DashboardPageContainer,
  TopSectionContainer,
  Column,
  HorizontalRule,
  ComingSoonContainer,
  ComingSoonTitle,
  ComingSoonText,
} from './dashboard.styled';
import { CardDataRowDisplay } from './components/CardDataRowDisplay';
import { BrandingMaterial } from './components/BrandingMaterial';
import { CopyrightNotice } from './components/CopyrightNotice';
import {Graph} from '../../pages/manager/components/chordGraphs'
import CardData from './components/dataCard';



// Change this variable to true to display Improving, Code Authority, and Code Launch branding material at the bottom of the dashboard screen
const SHOULD_DISPLAY_BRANDING_MATERIAL = true;

/**
 * This is the main dashboard page. It is responsible for displaying all of the training cards, statistics tables, etc.
 * The styled components for this page are located in the dashboard.styled.tsx file in the same directory.
 */
const Dashboard = (): ReactElement => {
  React.useEffect(() => {
    document.title = "CharaChorder Launchpad"
    
  }, []);

  return (
    <DashboardPageContainer>
      <TopSectionContainer>
        <LaunchpadHeader />
        <Column>
        <Graph/>

          <CardDataRowDisplay />
          {/* This is the most important component in the dashboard. It includes the entire list of training module cards. */}
          <TrainingCardColumn />
        </Column>
      </TopSectionContainer>

      <HorizontalRule />

      <ComingSoonContainer>
        <ComingSoonTitle>Coming Soon...</ComingSoonTitle>
        <ComingSoonText>
          Charachorder is working daily to add and improve these training
          courses. Be sure to check back again soon to take your Charachorder
          skills to the next level!
        </ComingSoonText>
      </ComingSoonContainer>

      {SHOULD_DISPLAY_BRANDING_MATERIAL && <BrandingMaterial />}

      <CopyrightNotice lightBg={SHOULD_DISPLAY_BRANDING_MATERIAL} />
    </DashboardPageContainer>
  );
};

export default Dashboard;

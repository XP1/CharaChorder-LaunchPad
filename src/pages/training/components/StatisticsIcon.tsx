import React, { ReactElement } from 'react';
import { useStoreActions, useStoreState } from '../../../store/store';

export function StatisticsIcon(): ReactElement {
  const setTrainingSettings = useStoreActions(
    (store) => store.setTrainingSettings,
  );
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const onClick = () =>
    setTrainingSettings({
      ...trainingSettings,
      isDisplayingStatisticsModal:
        !trainingSettings.isDisplayingStatisticsModal,
    });

  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bar-chart-2 lg:hidden feather feather-settings hover:text-gray-400 text-white cursor-pointer active:text-gray-700"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

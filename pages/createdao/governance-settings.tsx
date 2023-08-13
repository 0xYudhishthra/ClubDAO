import React, { useState } from 'react';
import FrostedGlassBox from '../../components/FrostedCard';
import Button from '../../components/Button';

const GovernanceSettings = () => {

  const [supportThreshold, setSupportThreshold] = useState(50);
  const [durationHours, setDurationHours] = useState(24);
  const [durationMinutes, setDurationMinutes] = useState(30);

  const handleSupportThresholdChange = (event) => {
    setSupportThreshold(event.target.value);
  };

  const handleDurationHoursChange = (event) => {
    setDurationHours(event.target.value);
  };

  const handleDurationMinutesChange = (event) => {
    setDurationMinutes(event.target.value);
  };

  return (
    <FrostedGlassBox className={"h-auto"}>
        <div className="space-y-4">
        <div>
            <div className='font-bold card-title'>Governance Setting</div>
            <label className="card-body font-bold">Support Threshold</label>
            <p>The number of tokens that vote "Yes" in support of a proposal...</p>
            <input
            type="range"
            className="w-80"
            min="0"
            max="100"
            value={supportThreshold}
            onChange={handleSupportThresholdChange}
            />
            <span className="font-bold ml-2">{supportThreshold}</span>
        </div>

        <div>
            <label className="card-body font-bold">Minimum Duration</label>
            <p>The shortest period of time a proposal is open for voting...</p>
            <div className="flex items-center space-x-2">
            <input
                type="range"
                className="w-60"
                min="0"
                max="48"
                value={durationHours}
                onChange={handleDurationHoursChange}
            />
            <span className="font-bold">{durationHours} hours</span>
            </div>
            <div className="flex items-center space-x-2">
            <input
                type="range"
                className="w-60"
                min="0"
                max="59"
                value={durationMinutes}
                onChange={handleDurationMinutesChange}
            />
            <span className="font-bold">{durationMinutes} minutes</span>
            </div>
        </div>
        </div>
    </FrostedGlassBox>
  );
};

export default GovernanceSettings;

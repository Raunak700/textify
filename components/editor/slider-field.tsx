'use client'

import React from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { LockIcon } from 'lucide-react';

interface SliderFieldProps {
  attribute: string;
  label: string;
  min: number;
  max: number;
  step: number;
  currentValue: number;
  hasTopPadding?: boolean;
  disabled?: boolean;
  premiumFeature?: boolean;
  handleAttributeChange: (attribute: string, value: number) => void;
}

const SliderField: React.FC<SliderFieldProps> = ({
    attribute,
    label,
    min,
    max,
    step,
    currentValue,
    hasTopPadding = true,
    disabled = false,
    premiumFeature = false,
    handleAttributeChange
  }) => { 
    const handleSliderInputFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      const value = parseFloat(event.target.value);
      handleAttributeChange(attribute, value);
    };
  
    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label>{label}</Label>
          <span className="text-sm text-muted-foreground">{currentValue}</span>
        </div>
        <Slider
          value={[currentValue]}
          min={min}
          max={max}
          step={step}
          onValueChange={([newValue]) => !disabled && handleAttributeChange(attribute, newValue)}
          className="w-full"
          disabled={disabled}
        />
      </div>
    );
};

export default SliderField
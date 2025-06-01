'use client'

import React from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@/components/ui/dropdown-menu';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ChromePicker } from 'react-color';
import { colors } from '@/constants/colors';
import { HexColorPicker } from "react-colorful";

interface ColorPickerProps {
  attribute: string;
  label: string;
  currentColor: string;
  handleAttributeChange: (attribute: string, value: any) => void;
} 

const ColorPicker: React.FC<ColorPickerProps> = ({
  attribute,
  label,
  currentColor,
  handleAttributeChange,
}) => {

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-md border" style={{ backgroundColor: currentColor }} />
        <input
          type="text"
          value={currentColor}
          onChange={(e) => handleAttributeChange(attribute, e.target.value)}
          className="flex-1 px-2 py-1 text-sm border rounded-md"
          placeholder="#000000"
        />
      </div>
      <div className="mt-2">
        <HexColorPicker color={currentColor} onChange={(value) => handleAttributeChange(attribute, value)} />
      </div>
    </div>
  );
};

export default ColorPicker;
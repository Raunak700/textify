import React from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { InputField } from "./input-field";
import { SliderField } from "./slider-field";
import { FontFamilyPicker } from "./font-picker";
import { ColorPicker } from "./color-picker";
import { DuplicateIcon, TrashIcon } from '@radix-ui/react-icons';

interface TextCustomizerProps {
    textSet: any;
    handleAttributeChange: (id: number, attribute: string, value: any) => void;
    removeTextSet: (id: number) => void;
    duplicateTextSet: (textSet: any) => void;
    userId: string;
}

const TextCustomizer: React.FC<TextCustomizerProps> = ({
    textSet,
    handleAttributeChange,
    removeTextSet,
    duplicateTextSet,
    userId
}) => {
    return (
        <AccordionItem value={textSet.id.toString()}>
            <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                    <span className="font-medium">{textSet.text}</span>
                    <span className="text-sm text-muted-foreground">
                        ({textSet.fontFamily})
                    </span>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <div className="space-y-4 p-2">
                    <InputField
                        label="Text"
                        value={textSet.text}
                        onChange={(value) => handleAttributeChange(textSet.id, 'text', value)}
                    />
                    
                    <FontFamilyPicker
                        attribute="fontFamily"
                        currentFont={textSet.fontFamily}
                        handleAttributeChange={(attr, value) => handleAttributeChange(textSet.id, attr, value)}
                        userId={userId}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <SliderField
                            label="Font Size"
                            value={textSet.fontSize}
                            min={10}
                            max={300}
                            onChange={(value) => handleAttributeChange(textSet.id, 'fontSize', value)}
                        />
                        <SliderField
                            label="Font Weight"
                            value={textSet.fontWeight}
                            min={100}
                            max={900}
                            step={100}
                            onChange={(value) => handleAttributeChange(textSet.id, 'fontWeight', value)}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <SliderField
                            label="Position X"
                            value={textSet.left}
                            min={-50}
                            max={50}
                            onChange={(value) => handleAttributeChange(textSet.id, 'left', value)}
                        />
                        <SliderField
                            label="Position Y"
                            value={textSet.top}
                            min={-50}
                            max={50}
                            onChange={(value) => handleAttributeChange(textSet.id, 'top', value)}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <SliderField
                            label="Rotation"
                            value={textSet.rotation}
                            min={-180}
                            max={180}
                            onChange={(value) => handleAttributeChange(textSet.id, 'rotation', value)}
                        />
                        <SliderField
                            label="Opacity"
                            value={textSet.opacity}
                            min={0}
                            max={1}
                            step={0.1}
                            onChange={(value) => handleAttributeChange(textSet.id, 'opacity', value)}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <SliderField
                            label="Tilt X"
                            value={textSet.tiltX}
                            min={-45}
                            max={45}
                            onChange={(value) => handleAttributeChange(textSet.id, 'tiltX', value)}
                        />
                        <SliderField
                            label="Tilt Y"
                            value={textSet.tiltY}
                            min={-45}
                            max={45}
                            onChange={(value) => handleAttributeChange(textSet.id, 'tiltY', value)}
                        />
                    </div>

                    <SliderField
                        label="Letter Spacing"
                        value={textSet.letterSpacing}
                        min={-10}
                        max={50}
                        onChange={(value) => handleAttributeChange(textSet.id, 'letterSpacing', value)}
                    />

                    <ColorPicker
                        label="Text Color"
                        color={textSet.color}
                        onChange={(value) => handleAttributeChange(textSet.id, 'color', value)}
                    />

                    <div className="flex justify-end gap-2 pt-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => duplicateTextSet(textSet)}
                        >
                            <DuplicateIcon className="h-4 w-4 mr-2" />
                            Duplicate
                        </Button>
                        <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => removeTextSet(textSet.id)}
                        >
                            <TrashIcon className="h-4 w-4 mr-2" />
                            Remove
                        </Button>
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    );
};

export default TextCustomizer;
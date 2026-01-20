import { useEffect, useState } from 'react';
import { fetchFormStep } from '../api/mockApi';
import { FormStep, SelectedStep } from '../types/form';
import { Badge } from './Badge';
import { GroupedSelect } from './GroupedSelect';
import { SimpleSelect } from './SimpleSelect';

export const DynamicStepForm = () => {
    const [selectedSteps, setSelectedSteps] = useState<SelectedStep[]>([]);
    const [currentChildren, setCurrentChildren] = useState<FormStep[]>([]);
    const [currentDisplayType, setCurrentDisplayType] = useState<string | null>(null);

    useEffect(() => {
        loadRoot();
    }, []);

    const loadRoot = async () => {
        const response = await fetchFormStep('/');

        if (response.children) {
            setCurrentChildren(response.children);
            setCurrentDisplayType(response.childrenDisplayType || 'badge_list');
        }
    };

    const handleBadgeClick = async (step: FormStep) => {
        if (!step.hasChildren) {
            return;
        }

        const response = await fetchFormStep(step.path);

        const newStep: SelectedStep = {
            id: step.id,
            path: step.path,
            label: step.label || step.displayValue || step.id,
            step: response
        };

        setSelectedSteps([...selectedSteps, newStep]);

        if (response.children) {
            setCurrentChildren(response.children);
            setCurrentDisplayType(response.childrenDisplayType || 'badge_list');
        }
    };

    const handleSelectOption = async (step: FormStep) => {
        if (!step.hasChildren) {
            console.log('Final selection!', step);
            return;
        }

        const response = await fetchFormStep(step.path);

        const newStep: SelectedStep = {
            id: step.id,
            path: step.path,
            label: step.label || step.displayValue || step.id,
            step: response
        };

        setSelectedSteps([...selectedSteps, newStep]);

        if (response.children) {
            setCurrentChildren(response.children);
            setCurrentDisplayType(response.childrenDisplayType || 'badge_list');
        }
    };

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Dynamic Step Form</h1>

            {selectedSteps.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-sm font-semibold text-gray-600 mb-2">Selected Path:</h2>
                    <div className="flex flex-wrap gap-3">
                        {selectedSteps.map((selected) => (
                            <Badge
                                key={selected.path}
                                step={selected.step}
                                onClick={() => { }}
                                isActive={true}
                            />
                        ))}
                    </div>
                </div>
            )}

            <div className="space-y-4">
                <h2 className="text-lg font-semibold">
                    {selectedSteps.length === 0 ? 'Select an engine:' : 'Next step:'}
                </h2>

                {currentDisplayType === 'badge_list' && (
                    <div className="flex flex-wrap gap-3">
                        {currentChildren.map(child => (
                            <Badge
                                key={child.id}
                                step={child}
                                onClick={handleBadgeClick}
                            />
                        ))}
                    </div>
                )}

                {currentDisplayType === 'grouped_select' && (
                    <GroupedSelect
                        options={currentChildren}
                        onSelect={handleSelectOption}
                    />
                )}

                {currentDisplayType === 'select' && (
                    <SimpleSelect
                        options={currentChildren}
                        onSelect={handleSelectOption}
                    />
                )}
            </div>


        </div>
    );
};
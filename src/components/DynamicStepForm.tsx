import { useEffect, useState } from 'react';
import { fetchRoot } from '../api/mockApi';
import { FormStep, SelectedStep } from '../types/form';
import { Badge } from './Badge';
import { GroupedSelect } from './GroupedSelect';
import { SimpleSelect } from './SimpleSelect';

export const DynamicStepForm = () => {
    const [selectedSteps, setSelectedSteps] = useState<SelectedStep[]>([]);
    const [currentChildren, setCurrentChildren] = useState<FormStep[]>([]);

    useEffect(() => {
        loadRoot();
    }, []);

    const loadRoot = async () => {
        const response = await fetchRoot('/');

        if (response.children) {
            setCurrentChildren(response.children);
        }
    };

    const inferDisplayType = (children: FormStep[]): 'badge_list' | 'grouped_select' | 'select' => {
        if (children.length === 0) return 'badge_list';

        const firstChild = children[0];

        if (firstChild.component === 'badge') {
            return 'badge_list';
        }

        if (firstChild.component === 'select_item') {
            const hasGroups = children.some(child => child.uiGroup !== null);
            return hasGroups ? 'grouped_select' : 'select';
        }

        return 'badge_list';
    };

    const handleBadgeClick = async (step: FormStep) => {
        if (!step.hasChildren) {
            return;
        }

        const response = await fetchRoot(step.path);

        const newStep: SelectedStep = {
            id: step.id,
            path: step.path,
            label: step.label || step.displayValue || step.id,
            step: response
        };

        setSelectedSteps([...selectedSteps, newStep]);

        if (response.children) {
            setCurrentChildren(response.children);
        }
    };

    const handleSelectOption = async (step: FormStep) => {
        if (!step.hasChildren) {
            console.log('Final selection!', step);
            return;
        }

        const response = await fetchRoot(step.path);

        const newStep: SelectedStep = {
            id: step.id,
            path: step.path,
            label: step.label || step.displayValue || step.id,
            step: response
        };

        setSelectedSteps([...selectedSteps, newStep]);

        if (response.children) {
            setCurrentChildren(response.children);
        }
    };

    const currentDisplayType = inferDisplayType(currentChildren);

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Dynamic Step Form</h1>

            <h2 className="text-lg font-semibold mb-8 text-red-500">
                Open the network tab to see the requests being made.
            </h2>

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
                        config={selectedSteps.length > 0 ? selectedSteps[selectedSteps.length - 1].step.component_config : undefined}
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
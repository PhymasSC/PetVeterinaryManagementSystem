import React from "react";
import Step from "./style";

const StepComponent = () => {
    return (
        <div>
            <h2 class="sr-only">Steps</h2>

            <div>
                <p class="text-xs font-medium text-gray-500">2/3 - Address</p>

                <div class="mt-4 overflow-hidden bg-gray-200 rounded-full">
                    <div class="w-2/3 h-2 bg-blue-500 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default StepComponent;

'use strict';

import componentExists from './componentExists';

module.exports = function (plop: any) {
    // create your generators here
    plop.setGenerator('components', {
        description: 'Add Components',
        prompts: [
            {
                type: 'input',
                name: 'type',
                message:
                    '\n1. Generic \n2. Reusable \n3. Custom \n4. Macros \n',
                default: 'Enter a number',
                validate: (value: any) => {
                    if (/.+/.test(value)) {
                        return componentExists(value)
                            ? 'A component or container with this name already exists'
                            : true;
                    }
                    return 'The name is required';
                },
            },
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of your component \n',
                validate: (value: any) => {
                    if (/.+/.test(value)) {
                        return componentExists(value)
                            ? 'A component or container with this name already exists'
                            : true;
                    }
                    return 'The name is required';
                },
            },
        ],
        actions: function (data: { type: string; name: string }): Array<any> {
            let action: Array<any> = [];
            switch (data.type) {
                case '1':
                    action.push({
                        type: 'add',
                        path: `src/components/Generic/${data.name}.tsx`,
                        templateFile: 'templates/component.ts.hbs',
                    });
                    break;
                case '2':
                    action.push({
                        type: 'add',
                        path: 'src/components/Reusable/{{name}}/index.tsx',
                        templateFile: 'templates/component.ts.hbs',
                    });
                    break;
                case '3':
                    action.push({
                        type: 'add',
                        path: 'src/components/Custom/{{name}}/index.tsx',
                        templateFile: 'templates/component.ts.hbs',
                    });
                    break;
                case '4':
                    action.push({
                        type: 'add',
                        path: 'src/components/Macros/{{name}}.tsx',
                        templateFile: 'templates/component.ts.hbs',
                    });
                    break;
            }
            return action;
        },
    });
};

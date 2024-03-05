import {Meta} from "@storybook/react";

import {Button} from './button';

const meta: Meta<typeof Button> = {
    title: 'Действия/Кнопки/Кнопка',
    component: Button,
    tags: ['autodocs'],
};


export const Example = {
    args: {
        text: "Кнопка",
        size: "medium",
        variant: "default",
        border: true,
        dropdownIcon: false,
        link: false,
        icon: false,
    },
};

export default meta;
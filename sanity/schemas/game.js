import { MDLocalPizza as icon } from 'react-icons/md'
import PriceInput from '../components/PriceInput';
export default {

    name: 'game',

    title: 'Games',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Game Name',
            type: 'string',
            description: 'Name of the game',
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Tell us a bit about the project',
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'text',
            description: 'What are your personal thoughts on this project?',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of the game in cents',
            validation: Rule => Rule.min(0),
            inputComponent: PriceInput,

        },

    ]
};
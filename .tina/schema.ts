import { defineSchema } from '@tinacms/cli';

export default defineSchema({
  collections: [
    {
      label: 'Pages Content',
      name: 'page',
      path: '_content/pages',
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title'
        },
        {
          type: 'string',
          label: 'Sub Title',
          name: 'subTitle'
        },
        {
          type: 'string',
          label: 'Address',
          name: 'address'
        },
        {
          type: 'datetime',
          label: 'Event Date',
          name: 'evDate',
          ui: {
            dateFormat: 'DD/MM/YYYY - hh:mm'
          }
        },
        {
          type: 'object',
          label: 'Map Coordinates',
          name: 'mapProps',
          fields: [
            {
              type: 'number',
              label: 'Longitude',
              name: 'longitude',
              ui: {
                component: 'number'
              }
            },
            {
              type: 'number',
              label: 'Latitude',
              name: 'latitude',
              ui: {
                component: 'number'
              }
            },
            {
              type: 'number',
              label: 'Zoom',
              name: 'zoom',
              ui: {
                component: 'number'
              }
            }
          ]
        },
        {
          type: 'string',
          label: 'Description',
          name: 'description',
          isBody: true,
          ui: {
            component: 'markdown'
          }
        }
      ]
    }
  ]
});

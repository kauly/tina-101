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
              type: 'string',
              label: 'Longitude',
              name: 'lng'
            },
            {
              type: 'string',
              label: 'Latitude',
              name: 'lat'
            },
            {
              type: 'string',
              label: 'Zoom',
              name: 'zoom'
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

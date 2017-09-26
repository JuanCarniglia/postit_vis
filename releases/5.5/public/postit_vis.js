  import 'ui/agg_table';
  import 'ui/agg_table/agg_table_group';

  import './postit_vis.less';
  import './postit_vis_controller';
  import './postit_vis_params';

  import {
    TemplateVisTypeProvider
  } from 'ui/template_vis_type/template_vis_type';

  import {
    VisSchemasProvider
  } from 'ui/vis/schemas';

  import postitVisTemplate from './postit_vis.html';

  import {
    VisTypesRegistryProvider
  } from 'ui/registry/vis_types';

  VisTypesRegistryProvider.register(KbnPostitVisProvider);

  function KbnPostitVisProvider(Private) {
    const TemplateVisType = Private(TemplateVisTypeProvider);
    const Schemas = Private(VisSchemasProvider);

    var options = [];

    return new TemplateVisType({
      name: 'postit_vis',
      title: 'Postit Chart',
      icon: 'fa-table',
      description: 'Post-its!',
      template: postitVisTemplate,
      params: {
        defaults: {
          /*showText: true,
          showValues: true,
          showPictures: true,
          jsonLabels: JSON.stringify(options),*/
          fontSizeLabel: 14,
          fontSizeValue: 14/*,
          showMetricsAtAllLevels: false*/
        },
        editor: '<postit-vis-params></postit-vis-params>'
      },
      schemas: new Schemas([{
        group: 'metrics',
        name: 'metric',
        title: 'Value',
        min: 1,
        defaults: [{
          type: 'count',
          schema: 'metric'
        }]
      }]),
      requiresSearch: true
    });
  }

  export default KbnPostitVisProvider;

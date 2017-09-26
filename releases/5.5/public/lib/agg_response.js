import _  from 'lodash';
import arrayToLinkedList from 'ui/agg_response/hierarchical/_array_to_linked_list';

module.exports = function pictureValuesProvider(Private, Notifier) {

    let notify = new Notifier({
      location: 'Picture Values Response Converter'
    });

    return function (vis, resp) {

      let metric = vis.aggs.bySchemaGroup.metrics[0];

      let notes = [];

      let pos = 0;
      /*
      let labels = null;

      try {
        labels = JSON.parse(vis.params.jsonLabels); //[ { 'text' : 'CUENTA'}, { 'text' : 'Maximo'}, { 'text' : 'Promedio'} ];
      } catch (e) {
        labels = '';
      }
      */
      _.each(vis.aggs, function (d, i) {

        let type = (d.params.customLabel ? d.params.customLabel : d.__type.title);

        let value = 0;

        if (!d.__type.hasNoDsl) {
          value = resp.aggregations[d.id].value;
        } else {
          value = resp.hits.total;
        }

        notes.push({
          label: type,
          value: value
        });

        /*
        if (labels.length > pos) {

          let letter = labels[pos].letter; // Default letter to use

          let valueColor = 'black'; // default

          if (labels[pos].ranges) {
            _.each(labels[pos].ranges, function (range, p) {
              if (value >= range.min && value < range.max) {
                // Found!
                letter = range.letter;
                valueColor = range.valueColor;
                return;
              }
            });
          }

          nodes.push({
            type: type,
            value: value,
            label: labels[pos].text,
            letter: letter,
            formatNumber: labels[pos].numeralFormat ? labels[pos].numeralFormat : null,
            valueColor: valueColor
          });
        } else {
          nodes.push({
            type: type,
            value: value,
            label: type,
            letter: '\uf06a'
          });
        }*/

        //pos++;
      });

      return notes;
    };
  };

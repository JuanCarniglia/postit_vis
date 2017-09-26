  import {
    uiModules
  } from 'ui/modules';

  import $ from 'jquery';
  import _ from 'lodash';
  import numeral from 'numeral';

  import AggResponseProvider from './lib/agg_response';

  const module = uiModules.get('kibana/postit_vis', ['kibana']);

  module.controller('KbnPostitVisController',
    function ($scope, $element, $rootScope, Private) {

      var aggResponse = Private(AggResponseProvider);

      var svgRoot = $element[0];

      $scope.colors = ['cfc', 'ccf'];

      var _render = function _render(results) {

        $scope.notes = results;

      };

      $scope.$watch('vis.params', (visParams) => {
        $scope.labelStyle = {
          "font-size": $scope.vis.params.fontSizeLabel + "pt"
        };
        $scope.valueStyle = {
          "font-size": $scope.vis.params.fontSizeValue + "pt"
        };

        if ($scope.vis.params.alternateColors) {

        }
      });

      $scope.getColor = function (idx) {
        if ((idx % 2) == 0) {
          return {
            background: '#' + $scope.colors[idx % $scope.colors.length],
            "-o-transform": "rotate(-3deg)",
            "-webkit-transform": "rotate(-3deg)",
            "-moz-transform": "rotate(-3deg)",
            position: "relative",
            top: "-5px"
          };
        } else {
          return {
            background: '#' + $scope.colors[idx % $scope.colors.length],
            "-o-transform": "rotate(5deg)",
            "-webkit-transform": "rotate(5deg)",
            "-moz-transform": "rotate(5deg)",
            position: "relative",
            top: "-10px"
          };
        }
      };

      $scope.$watch('esResponse', function (resp) {
        if (resp) {
          _render(aggResponse($scope.vis, resp));
        }
      });
    });

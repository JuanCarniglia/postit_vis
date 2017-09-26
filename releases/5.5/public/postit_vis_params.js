  import postitVisParamsTemplate from 'plugins/postit_vis/postit_vis_params.html';

  import { uiModules } from 'ui/modules';

  uiModules.get('kibana/postit_vis')
  .directive('postitVisParams', function () {
    return {
      restrict: 'E',
      template: postitVisParamsTemplate,
      link: function ($scope) {
        $scope.$watchMulti([
          'vis.params.fontSizeLabel',
          'vis.params.fontSizeValue',
          'vis.params.alternateColors'
        ], function () {
          if (!$scope.vis) return;
        });
      }
    };
  }
);

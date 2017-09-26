export default function (kibana) {
  return new kibana.Plugin({
    name: 'postit_vis',
    require: ['kibana'],
    uiExports: {
      visTypes: [
        'plugins/postit_vis/postit_vis'
      ]
    }
  });
}

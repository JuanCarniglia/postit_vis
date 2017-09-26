# Kibana Postit Visualization to show little postits with some information

This is a new custom visualization (mainly for Kibana version 5.5.x) that allows
displaying one or more postits (notes) with information from a Metric.

It is based on some code from :

https://code.tutsplus.com/tutorials/create-a-sticky-note-effect-in-5-easy-steps-with-css3-and-html5--net-13934
By Chris Heilmann

If you really liked this and feel like making a donation : <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=juan.carniglia@gmail.com&lc=AR&item_name=JuanCarniglia&item_number=1010&currency_code=USD&bn=PP-DonationsBF:btn_donate_LG.gif:NonHosted">
<img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" alt="Contribute!" />
</a>

If you need a modified version, or one that works on a previous (or future) Kibana release,
please let me know.

Example of how it looks:

![Screenshot](screenshot_postits.PNG)

## Installation Steps

You can just copy the postit_vis folder into KIBANA_HOME/src/core_plugins)
and run kibana.

You will have to re-bundle, if you just start the service or run in non-dev mode.

## How does it work

In order to work this plugins needs a simple Schema configuration:

- At least one (or more) Metric Parameter.

In the options pane, you can change the Font Size of the Labels and the Values.

This plugin uses a specific font from Google Fonts.

## Future changes

- Some animation on the Notes.
- Selecting a color scheme.

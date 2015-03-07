// Generated by CoffeeScript 1.4.0
/**
* Main (root) UI container.
*/

Ext.define("Phoenix.view.MainPanel", {
  extend: "Ext.tab.Panel",
  alias: "widget.phoenix-view-mainPanel",
  requires: [
    "Phoenix.view.ScenarioGrid",
    "Phoenix.view.Some11Panel",
    "Phoenix.view.Some12Panel",
    "Phoenix.view.Some13Panel",
    "Phoenix.view.Some14Panel"
  ],
  controller: "Phoenix.controller.MainPanelController",
  itemId: 'myMainPanel',
  header: false,
  plain: true,
  title: "PHOENIX Disaster Recovery Scenario Planner (DeftJS Example Application)",
  initComponent: function() {
    Ext.applyIf(this, {
      items: [
        {
          xtype: "phoenix-view-scenarioGrid",
          itemId: "scenarioGrid"
        },
        {
          xtype: "some-11-panel",
          itemId: "some11Panel"
        },
        {
          xtype: "some-12-panel",
          itemId: "some12Panel"
        },
        {
          xtype: "some-13-panel",
          itemId: "some13Panel"
        },
        {
          xtype: "some-14-panel",
          itemId: "some14Panel"
        }
      ]
    });
    return this.callParent(arguments);
  }
});
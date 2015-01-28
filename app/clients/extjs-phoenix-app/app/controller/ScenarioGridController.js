// Generated by CoffeeScript 1.4.0
/**
* Controls the scenario grid.
*/

Ext.define("Phoenix.controller.ScenarioGridController", {
  extend: "Phoenix.controller.AbstractPhoenixController",
  requires: ["Ext.data.UuidGenerator"],
  observe: {
    scenarioContext: {
      initialDataLoaded: "loadScenarios"
    }
  },
  control: {
    view: {
      itemdblclick: "onEditScenario"
    },
    addButton: {
      click: "onAddButtonClick"
    },
    scenarioActionColumn: {
      click: "onActionColumnClick"
    }
  },
  config: {
    uuidGenerator: Ext.create("Ext.data.UuidGenerator")
  },
  init: function() {
    return this.callParent(arguments);
  },
  /**
  	* Loads the set of {Phoenix.model.Scenario} models
  */

  loadScenarios: function() {
    var _this = this;
    this.getView().setLoading(true);
    return this.getScenarioService().loadScenarios().then({
      failure: function(errorMessage) {
        return _this.getNotificationService().error("Error", errorMessage);
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },
  /**
  	* Deletes the passed {Phoenix.model.Scenario}.
  	* @param {Phoenix.model.Scenario} Scenario to delete.
  */

  deleteScenario: function(scenario) {
    var _this = this;
    this.getView().setLoading(true);
    return this.getScenarioService().deleteScenario(scenario).then({
      success: function() {
        _this.getScenarioContext().scenarioDeleted(scenario);
        return _this.getNotificationService().success("Success", "The scenario was deleted successfully.");
      },
      failure: function() {
        return _this.getNotificationService().error("Error", "Error deleting Scenario.");
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },
  /**
  	* Handles a click on the add button and opens a new Scenario view.
  */

  onAddButtonClick: function() {
    var scenario;
    scenario = Ext.create("Phoenix.model.Scenario", {
      id: this.getUuidGenerator().generate(),
      name: "New Scenario"
    });
    return this.getScenarioContext().scenarioOpened(scenario);
  },
  /**
  	* Handles a request to edit a {Phoenix.model.Scenario} model.
  */

  onEditScenario: function(grid, scenario, row, rowIndex, event) {
    return this.getScenarioContext().scenarioOpened(scenario);
  },
  /**
  	* Handles a click on the grid's action column.
  */

  onActionColumnClick: function(view, cell, rowIndex, columnIndex, event, scenario, row) {
    return Ext.MessageBox.confirm("Confirm", "Are you sure you want to delete the this Scenario: " + (scenario.get("name")), function(button) {
      if (button === "yes") {
        return this.deleteScenario(scenario);
      }
    }, this);
  }
});

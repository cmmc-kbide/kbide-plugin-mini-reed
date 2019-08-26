Blockly.Blocks["ky_021_mini_reed_block"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("KY-021 MINI REED")
        .appendField("PIN")
        .appendField(new Blockly.FieldTextInput("0"), "KY_021_MINI_REED_PIN")
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("KY_021_MINI_REED_VALUE"),
          "KY_021_MINI_REED_VALUE"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
Blockly.Blocks['ky_021_mini_reed_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("KY-021 MINI REED");
    this.appendValueInput("KY_021_MINI_REED_PIN")
        .setCheck("Number")
        .appendField("PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
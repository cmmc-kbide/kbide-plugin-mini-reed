Blockly.JavaScript["ky_021_mini_reed_block"] = function(block) {
    var text_ky_021_mini_reed_pin = block.getFieldValue("KY_021_MINI_REED_PIN");
    var variable_ky_021_mini_reed_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("KY_021_MINI_REED_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
	#VARIABLE
	int KY_021_MINI_REED_PIN = ${text_ky_021_mini_reed_pin}; // magnetic senso rpin
	#END

	#SETUP
	pinMode (KY_021_MINI_REED_PIN, INPUT);
	#END

	${variable_ky_021_mini_reed_value} = digitalRead(KY_021_MINI_REED_PIN); // read the value of digital interface 2 and assign it to switchState
    `;
    return code;
  };
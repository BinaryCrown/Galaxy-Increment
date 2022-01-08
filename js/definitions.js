class UpgradeObject {
  constructor(PROPS) {
    this.PROPS = PROPS;
  }
}

var ActiveUpgrades = [];

// PROPS is a dictionary containing: ID, PARENT_ID, LABEL, TYPE, TARGET, FACTOR, CONDITIONS
UpgradeObject.prototype.Parse = function () {
  let parent = null;
  let props = null;
  for (let j in ActiveUpgrades) {
    if (j.ID === this.PARENT_ID) {
      parent = j;
    }
  }
  if (parent === null) {
    throw "No active upgrade with ID matching parent ID found."; return null;
  } else {
    props = parent.PROPS;
    if (props.LABEL !== null) {props.LABEL = this.props.LABEL;}
    if (props.TYPE !== null) {props.TYPE = this.props.TYPE;}
    if (props.TARGET !== null) {props.TARGET = this.props.TARGET;}
    if (props.FACTOR !== null) {props.FACTOR = this.props.FACTOR;}
    if (props.CONDITIONS !== null) {props.CONDITIONS = this.props.CONDITIONS;}
  }
  return props
};

exports.genericUpgradeObject = new UpgradeObject({
  
});

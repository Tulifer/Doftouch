import React from 'react';

import Widget from './Widget';
import Module from '../Module';

import ResourceChoser from '../modules/harvester/ResourceChoser';

class Harvester extends Module {
  constructor(props) {
    super(props);
    this.tag = "harvester";
    this.state._[this.tag] = false;
  }

  onEnable() {
    console.debug("[HARVESTER] started");
    this.props.win.Dofucks.Farmer.Harvester.enable();
    this.setValue(true);
  }

  onDisable() {
    console.debug("[HARVESTER] stopped");
    this.props.win.Dofucks.Farmer.Harvester.disable();
    this.setValue(false);
  }

  onLoaded(data) {
    if (data) {
      setTimeout(() => {this.onEnable()}, 3000);
    }
    return data;
  }

  render() {
    return (
      <Widget title="Harvester"
        activable={true}
        enabled={this.state._[this.tag]}
        onEnable={this.onEnable.bind(this)}
        onDisable={this.onDisable.bind(this)}
      >
        <ResourceChoser win={this.props.win} />
      </Widget>
    )
  }
}

export default Harvester;

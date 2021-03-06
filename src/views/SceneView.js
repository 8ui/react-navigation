/* @flow */

import React, { PureComponent } from 'react';

import type {
  NavigationScreenProp,
  NavigationState,
  NavigationRoute,
  NavigationAction,
} from '../TypeDefinition';

type Props = {
  screenProps?: {};
  navigation: NavigationScreenProp<NavigationRoute, NavigationAction>;
  component: ReactClass<*>;
};

export default class SceneView extends PureComponent<void, Props, void> {
  static childContextTypes = {
    navigation: React.PropTypes.object.isRequired,
  };

  props: Props;

  getChildContext() {
    return {
      navigation: this.props.navigation,
    };
  }

  render() {
    const {
      screenProps,
      navigation,
      component: Component,
    } = this.props;

    return (
      <Component
        screenProps={screenProps}
        navigation={navigation}
      />
    );
  }
}

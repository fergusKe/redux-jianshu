import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends PureComponent {
  render() {
    const { loginState } = this.props;
    if (loginState) {
      return (
        <div>
          写文章页面
        </div>
      );
    }

    return <Redirect to="/login" />;
  }
}

const mapStateToProps = state => ({
  loginState: state.getIn(['login', 'login'])
});

export default connect(mapStateToProps)(Write);

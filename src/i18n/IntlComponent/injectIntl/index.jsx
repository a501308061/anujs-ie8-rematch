import React, { PureComponent } from 'react'
// import utils from "../../Utils"
import PropTypes from 'prop-types'
import zh from '../../lang/zh.json'
import en from '../../lang/en.json'

/**
 * 注入国际化及当前语言
 * @param {Component} WrapperComponent - react组件
 * @param {Object}    intl - 国际语言包 {zh: {}, en: {}, ...其他语言}
 * @param {String}    lang - 语言
 * @return {Component}
 */
function injectIntl(intl = {'zh':zh,'en':en}, lang = "") {
  return (WrapperComponent) => class extends PureComponent {
    constructor(props) {
      super(props)

      const _lang = this._lang = lang || this.props.location.query.lang || 'zh'
      this._intl = intl[_lang] || {}
    }

    getIntl = () => {
      let oldIntl = {}
      if (Object.keys(this._intl).length > 0) {
        oldIntl = this._intl
      }
      const newIntl = this.props.intl || {}
      return {
        ...oldIntl,
        ...newIntl,
      }

    }
    render() {
      const { intl, ...otherProps } = this.props
      return <WrapperComponent {...otherProps} intl={this.getIntl()} lang={this._lang} />
    }
  }
}


injectIntl.propTypes = {
  /**
   * @param 自定义语言包
   */
  intl: PropTypes.object,
}

export default injectIntl;

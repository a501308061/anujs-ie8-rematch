# 说明
高阶组件：为组件增加intl属性
props.intl: 当前语言的国际化语言数据

# 调用方式
1. injectIntl(lang={zh:{},en:{}})(Component)
2. lang非必填，为空则直接读取i18n/zh.json及i18n/en.json
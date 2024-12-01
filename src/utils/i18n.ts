import nls = require('../../package.nls.json')
import nlsZhCn = require('../../package.nls.zh-cn.json')

type NLSKeys = keyof typeof nls

export function localize(key: NLSKeys, ...args: string[]) {
  // 获取当前语言环境的字符串
  const locale = process.env.VSCODE_NLS_CONFIG
    ? JSON.parse(process.env.VSCODE_NLS_CONFIG).locale
    : 'en'

  let text = locale === 'zh-cn' ? nlsZhCn[key] : nls[key]

  // 替换参数
  if (args.length > 0) {
    args.forEach((arg, index) => {
      text = text.replace(`{${index}}`, arg)
    })
  }

  return text
}

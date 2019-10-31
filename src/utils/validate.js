/**
 * Created by Zhourusheng on 2019/05/27.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const validMap = ['admin', 'editor']
  return validMap.indexOf(str.trim()) >= 0
}

/**
 * 短信验证码验证
 * @type {Array}
 */
export const verifyCodeInput = [
  {
    required: true,
    message: '请输入验证码',
    trigger: 'blur'
  },
  {
    len: 6,
    message: '验证码格式不正确',
    trigger: 'blur'
  }
]

/**
 * 密码验证
 * @type {Array}
 */
export const passwordInput = [

  {
    required: true,
    message: '请输入密码',
    trigger: 'blur'
  },
  {
    min: 6,
    message: '密码长度不小于6位',
    trigger: 'blur'
  }
]

/**
 * 咨询原文链接
 * @type {Array}
 */
export const infomationLinkInput = [
  {
    required: true,
    message: '请输入原文链接',
    trigger: 'blur'
  },
  {
    min: 1,
    max: 300,
    message: '300个字符以内',
    trigger: 'blur'
  },
  {
    type: 'url',
    message: '链接格式不正确',
    trigger: 'blur'
  }
]

/**
 * 修改密码
 * @type {Array}
 */
export const resetPasswordInput = (message = '请输入') => [
  {
    required: true,
    message: message,
    trigger: 'blur'
  },
  {
    pattern: /^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*).([A-Z]|[a-z]|[0-9]|[,./!@#$%^&]){5,19}$/,
    message: '密码格式有误',
    trigger: 'blur'
  }
]

/**
 * [校验是否必传]
 * @param  {[type]} message [description]
 * @return {[type]}         [description]
 */
export const require = (message = '请输入', ev = 'blur') => [{
  required: true,
  message: message,
  trigger: ev
}
]

/**
 *  * [校验是否必传，有长度限制]
 * @param  {[type]} required [description]
 * @param  {[type]} message [description]
 * @param  {[type]} min [description]
 * @param  {[type]} max [description]
 * @return {[type]}         [description]
 */
export const requireLength = (required = true, message = '请输入', min = 0, max = 20, ev = 'blur') => [
  {
    required: required,
    message: message,
    trigger: ev
  },
  {
    min: min,
    max: max,
    message: `只能输入${min}到${max}个字符`,
    trigger: ev
  }
]

/**
 * 验证邮箱
 ** [校验是否必传]
 * @param  {[type]} required [description]
 * @param  {[type]} message [description]
 */
export const email = (required = true, message = '请输入', ev = 'blur') => [{
  required: required,
  message: message,
  type: 'email',
  trigger: ev
}]

/**
 * 验证URL链接
 ** [校验是否必传]
 * @param  {[type]} required [description]
 * @param  {[type]} message [description]
 */
export const requireURL = (required = true, message = '请输入', ev = 'blur') => [{
  required: required,
  message: message,
  type: 'url',
  trigger: ev
}]

/**
 * 验证手机号
 ** [校验是否必传]
 * @param  {[type]} required [description]
 * @param  {[type]} message [description]
 */
export const phone = (required = true, message = '请输入', ev = 'blur') => [{
  required: required,
  message: message,
  trigger: ev
}, {
  pattern: /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/,
  message: '手机号格式不正确',
  trigger: 'blur'
}
]

/**
 * 验证固定电话
 ** [校验是否必传]
 * @param  {[type]} required [description]
 * @param  {[type]} message [description]
 */
export const telephone = (required = true, message = '请输入', ev = 'blur') => [
  {
    required: required,
    message: message,
    trigger: ev
  },
  {
    pattern: /(^0\d{2,3}-\d{7,8}(-\d{1,6})?$)|(^(400)-\d{7,8}(-\d{1,6})?$)/,
    message: '固定电话格式不正确，示例：021/400-1234567',
    trigger: 'blur'
  }
]

/**
 * 验证电话号码
 ** [校验是否必传]
 * @param  {[type]} required [description]
 * @param  {[type]} message [description]
 */
export const twoTypePhone = (required = true, message = '请输入', ev = 'blur') => [
  {
    required: required,
    message: message,
    trigger: ev
  },
  {
    pattern: /^(((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8})|(0\d{2,3}-\d{7,8}(-\d{1,6})?$)|(^(400)-\d{7,8}(-\d{1,6})?)$/,
    message: '电话格式不正确，请重新输入',
    trigger: 'blur'
  }
]

/**
 *  * [校验是否必传，只能输入数字]
 * @param  {[type]} required [description]
 * @param  {[type]} message [description]
 * @return {[type]}         [description]
 */
export const requireNumber = (required = true, message = '请输入', ev = 'blur') => [
  {
    required: required,
    message: message,
    trigger: ev
  },
  {
    pattern: /^\d+$/,
    message: '只能输入数字',
    trigger: 'blur'
  }
]

/**
 *  * [校验是否必传，只能输入数字,最多两位小数]
 * @param  {[type]} required [description]
 * @param  {[type]} message [description]
 * @return {[type]}         [description]
 */
export const requireNumberFloat = (required = true, message = '请输入', ev = 'blur') => [
  {
    required: required,
    message: message,
    trigger: ev
  },
  {
    pattern: /^\d+(\.\d{1,2})?$/,
    message: '只能输入数字，最多2位小数',
    trigger: 'blur'
  }
]

/**
 *  * [校验是否必传，只能输入数字,最多两位小数]
 * @param  {[type]} required [description]
 * @param  {[type]} message [description]
 * @return {[type]}         [description]
 */
export const requireNumberFloat8 = (required = true, message = '请输入', ev = 'blur') => [
  {
    required: required,
    message: message,
    trigger: ev
  },
  {
    pattern: /^[0-9]\d{0,7}(\.\d{1,2})?$/,
    message: '只能输入8位数字，最多2位小数',
    trigger: 'blur'
  }
]

/**
 *  * [校验是否必传，只能输入0-20的整数]
 * @param  {[type]} required [description]
 * @param  {[type]} message [description]
 * @return {[type]}         [description]
 */
export const requireNumber20 = (required = true, message = '请输入', ev = 'blur') => [
  {
    required: required,
    message: message,
    trigger: ev
  }, {
    pattern: /^([0-9]|[1][0-9]|20)$/,
    message: '只能输入0-20的整数',
    trigger: 'blur'
  }
]

/**
 *  * [校验是否必传，只能输入数字，最多9位]
 * @param  {[type]} required [description]
 * @param  {[type]} message [description]
 * @return {[type]}         [description]
 */
export const requireNumberLength = (required = true, message = '请输入', ev = 'blur') => [
  {
    required: required,
    message: message,
    trigger: ev
  }, {
    pattern: /(^[1-9]\d{0,8}$)/,
    message: '请填写正整数,最多9位',
    trigger: 'blur'
  }
]

/**
 * [校验是否必传，且小数点后最多只能保留两位]
 * @param  {[type]} message [description]
 * @return {[type]}         [description]
 */
export const requireNumberPoint = (required = true, message = '请输入', ev = 'blur') => [{
  required: required,
  message: message,
  trigger: ev
},
{
  pattern: /^[1-9]\d*$|^[1-9]\d*\.\d\d?$|^0\.\d\d? /, // /^\d+(\.\d{0,2})?$/
  message: '只能输入大于0的数',
  trigger: 'blur'
}
]

/**
 *  * [校验是否必传，只能输入20位数字或者-，号码的模糊匹配]
 * @param  {[type]} required [description]
 * @param  {[type]} message [description]
 * @return {[type]}         [description]
 */
export const phoneNumber20 = (required = true, message = '请输入', ev = 'blur') => [
  {
    required: required,
    message: message,
    trigger: ev
  },
  {
    pattern: /^(\d|-){0,20}$/,
    message: '只能输入数字或 - ，最多20位',
    trigger: 'blur'
  }
]

/**
 *  * [校验是否必传，车牌号]
 * @param  {[type]} required [description]
 * @param  {[type]} message [description]
 * @return {[type]}         [description]
 */
export const userPlateNo = (required = true, message = '请输入正确的车牌号', ev = 'blur') => [
  {
    required: required,
    message: message,
    trigger: ev
  },
  {
    pattern: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
    message: '请输入正确车牌号码',
    trigger: 'blur'
  }
]

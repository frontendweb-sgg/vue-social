import { setupDevtoolsPlugin } from './chunk-AYVSL3LM.js'
import {
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  isRef,
  nextTick,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  provide,
  reactive,
  readonly,
  ref,
  resolveDynamicComponent,
  shallowRef,
  toRef,
  toValue,
  unref,
  warn,
  watch,
  watchEffect
} from './chunk-GU3YDFVY.js'
import './chunk-ZS7NZCD4.js'

// node_modules/vee-validate/dist/vee-validate.esm.js
function isCallable(fn) {
  return typeof fn === 'function'
}
function isNullOrUndefined(value) {
  return value === null || value === void 0
}
var isObject = (obj) => obj !== null && !!obj && typeof obj === 'object' && !Array.isArray(obj)
function isIndex(value) {
  return Number(value) >= 0
}
function toNumber(value) {
  const n = parseFloat(value)
  return isNaN(n) ? value : n
}
function isObjectLike(value) {
  return typeof value === 'object' && value !== null
}
function getTag(value) {
  if (value == null) {
    return value === void 0 ? '[object Undefined]' : '[object Null]'
  }
  return Object.prototype.toString.call(value)
}
function isPlainObject(value) {
  if (!isObjectLike(value) || getTag(value) !== '[object Object]') {
    return false
  }
  if (Object.getPrototypeOf(value) === null) {
    return true
  }
  let proto = value
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(value) === proto
}
function merge(target, source) {
  Object.keys(source).forEach((key) => {
    if (isPlainObject(source[key]) && isPlainObject(target[key])) {
      if (!target[key]) {
        target[key] = {}
      }
      merge(target[key], source[key])
      return
    }
    target[key] = source[key]
  })
  return target
}
function normalizeFormPath(path) {
  const pathArr = path.split('.')
  if (!pathArr.length) {
    return ''
  }
  let fullPath = String(pathArr[0])
  for (let i = 1; i < pathArr.length; i++) {
    if (isIndex(pathArr[i])) {
      fullPath += `[${pathArr[i]}]`
      continue
    }
    fullPath += `.${pathArr[i]}`
  }
  return fullPath
}
var RULES = {}
function defineRule(id, validator) {
  guardExtend(id, validator)
  RULES[id] = validator
}
function resolveRule(id) {
  return RULES[id]
}
function guardExtend(id, validator) {
  if (isCallable(validator)) {
    return
  }
  throw new Error(`Extension Error: The validator '${id}' must be a function.`)
}
function set(obj, key, val) {
  if (typeof val.value === 'object') val.value = klona(val.value)
  if (
    !val.enumerable ||
    val.get ||
    val.set ||
    !val.configurable ||
    !val.writable ||
    key === '__proto__'
  ) {
    Object.defineProperty(obj, key, val)
  } else obj[key] = val.value
}
function klona(x) {
  if (typeof x !== 'object') return x
  var i = 0,
    k,
    list,
    tmp,
    str = Object.prototype.toString.call(x)
  if (str === '[object Object]') {
    tmp = Object.create(x.__proto__ || null)
  } else if (str === '[object Array]') {
    tmp = Array(x.length)
  } else if (str === '[object Set]') {
    tmp = /* @__PURE__ */ new Set()
    x.forEach(function (val) {
      tmp.add(klona(val))
    })
  } else if (str === '[object Map]') {
    tmp = /* @__PURE__ */ new Map()
    x.forEach(function (val, key) {
      tmp.set(klona(key), klona(val))
    })
  } else if (str === '[object Date]') {
    tmp = /* @__PURE__ */ new Date(+x)
  } else if (str === '[object RegExp]') {
    tmp = new RegExp(x.source, x.flags)
  } else if (str === '[object DataView]') {
    tmp = new x.constructor(klona(x.buffer))
  } else if (str === '[object ArrayBuffer]') {
    tmp = x.slice(0)
  } else if (str.slice(-6) === 'Array]') {
    tmp = new x.constructor(x)
  }
  if (tmp) {
    for (list = Object.getOwnPropertySymbols(x); i < list.length; i++) {
      set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]))
    }
    for (i = 0, list = Object.getOwnPropertyNames(x); i < list.length; i++) {
      if (Object.hasOwnProperty.call(tmp, (k = list[i])) && tmp[k] === x[k]) continue
      set(tmp, k, Object.getOwnPropertyDescriptor(x, k))
    }
  }
  return tmp || x
}
var FormContextKey = Symbol('vee-validate-form')
var FieldContextKey = Symbol('vee-validate-field-instance')
var IS_ABSENT = Symbol('Default empty value')
var isClient = typeof window !== 'undefined'
function isLocator(value) {
  return isCallable(value) && !!value.__locatorRef
}
function isTypedSchema(value) {
  return !!value && isCallable(value.parse) && value.__type === 'VVTypedSchema'
}
function isYupValidator(value) {
  return !!value && isCallable(value.validate)
}
function hasCheckedAttr(type) {
  return type === 'checkbox' || type === 'radio'
}
function isContainerValue(value) {
  return isObject(value) || Array.isArray(value)
}
function isEmptyContainer(value) {
  if (Array.isArray(value)) {
    return value.length === 0
  }
  return isObject(value) && Object.keys(value).length === 0
}
function isNotNestedPath(path) {
  return /^\[.+\]$/i.test(path)
}
function isNativeMultiSelect(el) {
  return isNativeSelect(el) && el.multiple
}
function isNativeSelect(el) {
  return el.tagName === 'SELECT'
}
function isNativeMultiSelectNode(tag, attrs) {
  const hasTruthyBindingValue =
    ![false, null, void 0, 0].includes(attrs.multiple) && !Number.isNaN(attrs.multiple)
  return tag === 'select' && 'multiple' in attrs && hasTruthyBindingValue
}
function shouldHaveValueBinding(tag, attrs) {
  return (
    !isNativeMultiSelectNode(tag, attrs) && attrs.type !== 'file' && !hasCheckedAttr(attrs.type)
  )
}
function isFormSubmitEvent(evt) {
  return isEvent(evt) && evt.target && 'submit' in evt.target
}
function isEvent(evt) {
  if (!evt) {
    return false
  }
  if (typeof Event !== 'undefined' && isCallable(Event) && evt instanceof Event) {
    return true
  }
  if (evt && evt.srcElement) {
    return true
  }
  return false
}
function isPropPresent(obj, prop) {
  return prop in obj && obj[prop] !== IS_ABSENT
}
function isEqual(a, b) {
  if (a === b) return true
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    if (a.constructor !== b.constructor) return false
    var length, i, keys
    if (Array.isArray(a)) {
      length = a.length
      if (length != b.length) return false
      for (i = length; i-- !== 0; ) if (!isEqual(a[i], b[i])) return false
      return true
    }
    if (a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false
      for (i of a.entries()) if (!b.has(i[0])) return false
      for (i of a.entries()) if (!isEqual(i[1], b.get(i[0]))) return false
      return true
    }
    if (isFile(a) && isFile(b)) {
      if (a.size !== b.size) return false
      if (a.name !== b.name) return false
      if (a.lastModified !== b.lastModified) return false
      if (a.type !== b.type) return false
      return true
    }
    if (a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false
      for (i of a.entries()) if (!b.has(i[0])) return false
      return true
    }
    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length
      if (length != b.length) return false
      for (i = length; i-- !== 0; ) if (a[i] !== b[i]) return false
      return true
    }
    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf()
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString()
    keys = Object.keys(a)
    length = keys.length
    for (i = length; i-- !== 0; ) {
      var key = keys[i]
      if (!isEqual(a[key], b[key])) return false
    }
    return true
  }
  return a !== a && b !== b
}
function isFile(a) {
  if (!isClient) {
    return false
  }
  return a instanceof File
}
function cleanupNonNestedPath(path) {
  if (isNotNestedPath(path)) {
    return path.replace(/\[|\]/gi, '')
  }
  return path
}
function getFromPath(object, path, fallback) {
  if (!object) {
    return fallback
  }
  if (isNotNestedPath(path)) {
    return object[cleanupNonNestedPath(path)]
  }
  const resolvedValue = (path || '')
    .split(/\.|\[(\d+)\]/)
    .filter(Boolean)
    .reduce((acc, propKey) => {
      if (isContainerValue(acc) && propKey in acc) {
        return acc[propKey]
      }
      return fallback
    }, object)
  return resolvedValue
}
function setInPath(object, path, value) {
  if (isNotNestedPath(path)) {
    object[cleanupNonNestedPath(path)] = value
    return
  }
  const keys = path.split(/\.|\[(\d+)\]/).filter(Boolean)
  let acc = object
  for (let i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      acc[keys[i]] = value
      return
    }
    if (!(keys[i] in acc) || isNullOrUndefined(acc[keys[i]])) {
      acc[keys[i]] = isIndex(keys[i + 1]) ? [] : {}
    }
    acc = acc[keys[i]]
  }
}
function unset(object, key) {
  if (Array.isArray(object) && isIndex(key)) {
    object.splice(Number(key), 1)
    return
  }
  if (isObject(object)) {
    delete object[key]
  }
}
function unsetPath(object, path) {
  if (isNotNestedPath(path)) {
    delete object[cleanupNonNestedPath(path)]
    return
  }
  const keys = path.split(/\.|\[(\d+)\]/).filter(Boolean)
  let acc = object
  for (let i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      unset(acc, keys[i])
      break
    }
    if (!(keys[i] in acc) || isNullOrUndefined(acc[keys[i]])) {
      break
    }
    acc = acc[keys[i]]
  }
  const pathValues = keys.map((_, idx) => {
    return getFromPath(object, keys.slice(0, idx).join('.'))
  })
  for (let i = pathValues.length - 1; i >= 0; i--) {
    if (!isEmptyContainer(pathValues[i])) {
      continue
    }
    if (i === 0) {
      unset(object, keys[0])
      continue
    }
    unset(pathValues[i - 1], keys[i - 1])
  }
}
function keysOf(record) {
  return Object.keys(record)
}
function injectWithSelf(symbol, def = void 0) {
  const vm = getCurrentInstance()
  return (vm === null || vm === void 0 ? void 0 : vm.provides[symbol]) || inject(symbol, def)
}
function warn2(message) {
  warn(`[vee-validate]: ${message}`)
}
function resolveNextCheckboxValue(currentValue, checkedValue, uncheckedValue) {
  if (Array.isArray(currentValue)) {
    const newVal = [...currentValue]
    const idx = newVal.findIndex((v) => isEqual(v, checkedValue))
    idx >= 0 ? newVal.splice(idx, 1) : newVal.push(checkedValue)
    return newVal
  }
  return isEqual(currentValue, checkedValue) ? uncheckedValue : checkedValue
}
function throttle(func, limit) {
  let inThrottle
  let lastResult
  return function (...args) {
    const context = this
    if (!inThrottle) {
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
      lastResult = func.apply(context, args)
    }
    return lastResult
  }
}
function debounceAsync(inner, ms = 0) {
  let timer = null
  let resolves = []
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      const result = inner(...args)
      resolves.forEach((r) => r(result))
      resolves = []
    }, ms)
    return new Promise((resolve) => resolves.push(resolve))
  }
}
function applyModelModifiers(value, modifiers) {
  if (!isObject(modifiers)) {
    return value
  }
  if (modifiers.number) {
    return toNumber(value)
  }
  return value
}
function withLatest(fn, onDone) {
  let latestRun
  return async function runLatest(...args) {
    const pending = fn(...args)
    latestRun = pending
    const result = await pending
    if (pending !== latestRun) {
      return result
    }
    latestRun = void 0
    return onDone(result, args)
  }
}
function computedDeep({ get, set: set2 }) {
  const baseRef = ref(klona(get()))
  watch(
    get,
    (newValue) => {
      if (isEqual(newValue, baseRef.value)) {
        return
      }
      baseRef.value = klona(newValue)
    },
    {
      deep: true
    }
  )
  watch(
    baseRef,
    (newValue) => {
      if (isEqual(newValue, get())) {
        return
      }
      set2(klona(newValue))
    },
    {
      deep: true
    }
  )
  return baseRef
}
function normalizeErrorItem(message) {
  return Array.isArray(message) ? message : message ? [message] : []
}
function resolveFieldOrPathState(path) {
  const form = injectWithSelf(FormContextKey)
  const state = path
    ? computed(() => (form === null || form === void 0 ? void 0 : form.getPathState(toValue(path))))
    : void 0
  const field = path ? void 0 : inject(FieldContextKey)
  if (!field && !(state === null || state === void 0 ? void 0 : state.value)) {
    if (true) {
      warn2(`field with name ${toValue(path)} was not found`)
    }
  }
  return state || field
}
function omit(obj, keys) {
  const target = {}
  for (const key in obj) {
    if (!keys.includes(key)) {
      target[key] = obj[key]
    }
  }
  return target
}
function debounceNextTick(inner) {
  let lastTick = null
  let resolves = []
  return function (...args) {
    const thisTick = nextTick(() => {
      if (lastTick !== thisTick) {
        return
      }
      const result = inner(...args)
      resolves.forEach((r) => r(result))
      resolves = []
      lastTick = null
    })
    lastTick = thisTick
    return new Promise((resolve) => resolves.push(resolve))
  }
}
function normalizeChildren(tag, context, slotProps) {
  if (!context.slots.default) {
    return context.slots.default
  }
  if (typeof tag === 'string' || !tag) {
    return context.slots.default(slotProps())
  }
  return {
    default: () => {
      var _a, _b
      return (_b = (_a = context.slots).default) === null || _b === void 0
        ? void 0
        : _b.call(_a, slotProps())
    }
  }
}
function getBoundValue(el) {
  if (hasValueBinding(el)) {
    return el._value
  }
  return void 0
}
function hasValueBinding(el) {
  return '_value' in el
}
function parseInputValue(el) {
  if (el.type === 'number') {
    return Number.isNaN(el.valueAsNumber) ? el.value : el.valueAsNumber
  }
  if (el.type === 'range') {
    return Number.isNaN(el.valueAsNumber) ? el.value : el.valueAsNumber
  }
  return el.value
}
function normalizeEventValue(value) {
  if (!isEvent(value)) {
    return value
  }
  const input = value.target
  if (hasCheckedAttr(input.type) && hasValueBinding(input)) {
    return getBoundValue(input)
  }
  if (input.type === 'file' && input.files) {
    const files = Array.from(input.files)
    return input.multiple ? files : files[0]
  }
  if (isNativeMultiSelect(input)) {
    return Array.from(input.options)
      .filter((opt) => opt.selected && !opt.disabled)
      .map(getBoundValue)
  }
  if (isNativeSelect(input)) {
    const selectedOption = Array.from(input.options).find((opt) => opt.selected)
    return selectedOption ? getBoundValue(selectedOption) : input.value
  }
  return parseInputValue(input)
}
function normalizeRules(rules) {
  const acc = {}
  Object.defineProperty(acc, '_$$isNormalized', {
    value: true,
    writable: false,
    enumerable: false,
    configurable: false
  })
  if (!rules) {
    return acc
  }
  if (isObject(rules) && rules._$$isNormalized) {
    return rules
  }
  if (isObject(rules)) {
    return Object.keys(rules).reduce((prev, curr) => {
      const params = normalizeParams(rules[curr])
      if (rules[curr] !== false) {
        prev[curr] = buildParams(params)
      }
      return prev
    }, acc)
  }
  if (typeof rules !== 'string') {
    return acc
  }
  return rules.split('|').reduce((prev, rule) => {
    const parsedRule = parseRule(rule)
    if (!parsedRule.name) {
      return prev
    }
    prev[parsedRule.name] = buildParams(parsedRule.params)
    return prev
  }, acc)
}
function normalizeParams(params) {
  if (params === true) {
    return []
  }
  if (Array.isArray(params)) {
    return params
  }
  if (isObject(params)) {
    return params
  }
  return [params]
}
function buildParams(provided) {
  const mapValueToLocator = (value) => {
    if (typeof value === 'string' && value[0] === '@') {
      return createLocator(value.slice(1))
    }
    return value
  }
  if (Array.isArray(provided)) {
    return provided.map(mapValueToLocator)
  }
  if (provided instanceof RegExp) {
    return [provided]
  }
  return Object.keys(provided).reduce((prev, key) => {
    prev[key] = mapValueToLocator(provided[key])
    return prev
  }, {})
}
var parseRule = (rule) => {
  let params = []
  const name = rule.split(':')[0]
  if (rule.includes(':')) {
    params = rule.split(':').slice(1).join(':').split(',')
  }
  return { name, params }
}
function createLocator(value) {
  const locator = (crossTable) => {
    const val = getFromPath(crossTable, value) || crossTable[value]
    return val
  }
  locator.__locatorRef = value
  return locator
}
function extractLocators(params) {
  if (Array.isArray(params)) {
    return params.filter(isLocator)
  }
  return keysOf(params)
    .filter((key) => isLocator(params[key]))
    .map((key) => params[key])
}
var DEFAULT_CONFIG = {
  generateMessage: ({ field }) => `${field} is not valid.`,
  bails: true,
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: false,
  validateOnModelUpdate: true
}
var currentConfig = Object.assign({}, DEFAULT_CONFIG)
var getConfig = () => currentConfig
var setConfig = (newConf) => {
  currentConfig = Object.assign(Object.assign({}, currentConfig), newConf)
}
var configure = setConfig
async function validate(value, rules, options = {}) {
  const shouldBail = options === null || options === void 0 ? void 0 : options.bails
  const field = {
    name: (options === null || options === void 0 ? void 0 : options.name) || '{field}',
    rules,
    label: options === null || options === void 0 ? void 0 : options.label,
    bails: shouldBail !== null && shouldBail !== void 0 ? shouldBail : true,
    formData: (options === null || options === void 0 ? void 0 : options.values) || {}
  }
  const result = await _validate(field, value)
  const errors = result.errors
  return {
    errors,
    valid: !errors.length
  }
}
async function _validate(field, value) {
  if (isTypedSchema(field.rules) || isYupValidator(field.rules)) {
    return validateFieldWithTypedSchema(value, field.rules)
  }
  if (isCallable(field.rules) || Array.isArray(field.rules)) {
    const ctx = {
      field: field.label || field.name,
      name: field.name,
      label: field.label,
      form: field.formData,
      value
    }
    const pipeline = Array.isArray(field.rules) ? field.rules : [field.rules]
    const length2 = pipeline.length
    const errors2 = []
    for (let i = 0; i < length2; i++) {
      const rule = pipeline[i]
      const result = await rule(value, ctx)
      const isValid = typeof result !== 'string' && !Array.isArray(result) && result
      if (isValid) {
        continue
      }
      if (Array.isArray(result)) {
        errors2.push(...result)
      } else {
        const message = typeof result === 'string' ? result : _generateFieldError(ctx)
        errors2.push(message)
      }
      if (field.bails) {
        return {
          errors: errors2
        }
      }
    }
    return {
      errors: errors2
    }
  }
  const normalizedContext = Object.assign(Object.assign({}, field), {
    rules: normalizeRules(field.rules)
  })
  const errors = []
  const rulesKeys = Object.keys(normalizedContext.rules)
  const length = rulesKeys.length
  for (let i = 0; i < length; i++) {
    const rule = rulesKeys[i]
    const result = await _test(normalizedContext, value, {
      name: rule,
      params: normalizedContext.rules[rule]
    })
    if (result.error) {
      errors.push(result.error)
      if (field.bails) {
        return {
          errors
        }
      }
    }
  }
  return {
    errors
  }
}
function isYupError(err) {
  return !!err && err.name === 'ValidationError'
}
function yupToTypedSchema(yupSchema) {
  const schema = {
    __type: 'VVTypedSchema',
    async parse(values) {
      var _a
      try {
        const output = await yupSchema.validate(values, { abortEarly: false })
        return {
          output,
          errors: []
        }
      } catch (err) {
        if (!isYupError(err)) {
          throw err
        }
        if (
          !((_a = err.inner) === null || _a === void 0 ? void 0 : _a.length) &&
          err.errors.length
        ) {
          return { errors: [{ path: err.path, errors: err.errors }] }
        }
        const errors = err.inner.reduce((acc, curr) => {
          const path = curr.path || ''
          if (!acc[path]) {
            acc[path] = { errors: [], path }
          }
          acc[path].errors.push(...curr.errors)
          return acc
        }, {})
        return { errors: Object.values(errors) }
      }
    }
  }
  return schema
}
async function validateFieldWithTypedSchema(value, schema) {
  const typedSchema = isTypedSchema(schema) ? schema : yupToTypedSchema(schema)
  const result = await typedSchema.parse(value)
  const messages = []
  for (const error of result.errors) {
    if (error.errors.length) {
      messages.push(...error.errors)
    }
  }
  return {
    errors: messages
  }
}
async function _test(field, value, rule) {
  const validator = resolveRule(rule.name)
  if (!validator) {
    throw new Error(`No such validator '${rule.name}' exists.`)
  }
  const params = fillTargetValues(rule.params, field.formData)
  const ctx = {
    field: field.label || field.name,
    name: field.name,
    label: field.label,
    value,
    form: field.formData,
    rule: Object.assign(Object.assign({}, rule), { params })
  }
  const result = await validator(value, params, ctx)
  if (typeof result === 'string') {
    return {
      error: result
    }
  }
  return {
    error: result ? void 0 : _generateFieldError(ctx)
  }
}
function _generateFieldError(fieldCtx) {
  const message = getConfig().generateMessage
  if (!message) {
    return 'Field is invalid'
  }
  return message(fieldCtx)
}
function fillTargetValues(params, crossTable) {
  const normalize = (value) => {
    if (isLocator(value)) {
      return value(crossTable)
    }
    return value
  }
  if (Array.isArray(params)) {
    return params.map(normalize)
  }
  return Object.keys(params).reduce((acc, param) => {
    acc[param] = normalize(params[param])
    return acc
  }, {})
}
async function validateTypedSchema(schema, values) {
  const typedSchema = isTypedSchema(schema) ? schema : yupToTypedSchema(schema)
  const validationResult = await typedSchema.parse(klona(values))
  const results = {}
  const errors = {}
  for (const error of validationResult.errors) {
    const messages = error.errors
    const path = (error.path || '').replace(/\["(\d+)"\]/g, (_, m) => {
      return `[${m}]`
    })
    results[path] = { valid: !messages.length, errors: messages }
    if (messages.length) {
      errors[path] = messages[0]
    }
  }
  return {
    valid: !validationResult.errors.length,
    results,
    errors,
    values: validationResult.value
  }
}
async function validateObjectSchema(schema, values, opts) {
  const paths = keysOf(schema)
  const validations = paths.map(async (path) => {
    var _a, _b, _c
    const strings =
      (_a = opts === null || opts === void 0 ? void 0 : opts.names) === null || _a === void 0
        ? void 0
        : _a[path]
    const fieldResult = await validate(getFromPath(values, path), schema[path], {
      name: (strings === null || strings === void 0 ? void 0 : strings.name) || path,
      label: strings === null || strings === void 0 ? void 0 : strings.label,
      values,
      bails:
        (_c =
          (_b = opts === null || opts === void 0 ? void 0 : opts.bailsMap) === null || _b === void 0
            ? void 0
            : _b[path]) !== null && _c !== void 0
          ? _c
          : true
    })
    return Object.assign(Object.assign({}, fieldResult), { path })
  })
  let isAllValid = true
  const validationResults = await Promise.all(validations)
  const results = {}
  const errors = {}
  for (const result of validationResults) {
    results[result.path] = {
      valid: result.valid,
      errors: result.errors
    }
    if (!result.valid) {
      isAllValid = false
      errors[result.path] = result.errors[0]
    }
  }
  return {
    valid: isAllValid,
    results,
    errors
  }
}
var ID_COUNTER = 0
function useFieldState(path, init) {
  const { value, initialValue, setInitialValue } = _useFieldValue(path, init.modelValue, init.form)
  if (!init.form) {
    let setState2 = function (state2) {
      var _a
      if ('value' in state2) {
        value.value = state2.value
      }
      if ('errors' in state2) {
        setErrors(state2.errors)
      }
      if ('touched' in state2) {
        meta.touched = (_a = state2.touched) !== null && _a !== void 0 ? _a : meta.touched
      }
      if ('initialValue' in state2) {
        setInitialValue(state2.initialValue)
      }
    }
    const { errors: errors2, setErrors } = createFieldErrors()
    const id = ID_COUNTER >= Number.MAX_SAFE_INTEGER ? 0 : ++ID_COUNTER
    const meta = createFieldMeta(value, initialValue, errors2, init.schema)
    return {
      id,
      path,
      value,
      initialValue,
      meta,
      flags: { pendingUnmount: { [id]: false }, pendingReset: false },
      errors: errors2,
      setState: setState2
    }
  }
  const state = init.form.createPathState(path, {
    bails: init.bails,
    label: init.label,
    type: init.type,
    validate: init.validate,
    schema: init.schema
  })
  const errors = computed(() => state.errors)
  function setState(state2) {
    var _a, _b, _c
    if ('value' in state2) {
      value.value = state2.value
    }
    if ('errors' in state2) {
      ;(_a = init.form) === null || _a === void 0
        ? void 0
        : _a.setFieldError(unref(path), state2.errors)
    }
    if ('touched' in state2) {
      ;(_b = init.form) === null || _b === void 0
        ? void 0
        : _b.setFieldTouched(
            unref(path),
            (_c = state2.touched) !== null && _c !== void 0 ? _c : false
          )
    }
    if ('initialValue' in state2) {
      setInitialValue(state2.initialValue)
    }
  }
  return {
    id: Array.isArray(state.id) ? state.id[state.id.length - 1] : state.id,
    path,
    value,
    errors,
    meta: state,
    initialValue,
    flags: state.__flags,
    setState
  }
}
function _useFieldValue(path, modelValue, form) {
  const modelRef = ref(unref(modelValue))
  function resolveInitialValue2() {
    if (!form) {
      return unref(modelRef)
    }
    return getFromPath(form.initialValues.value, unref(path), unref(modelRef))
  }
  function setInitialValue(value2) {
    if (!form) {
      modelRef.value = value2
      return
    }
    form.setFieldInitialValue(unref(path), value2, true)
  }
  const initialValue = computed(resolveInitialValue2)
  if (!form) {
    const value2 = ref(resolveInitialValue2())
    return {
      value: value2,
      initialValue,
      setInitialValue
    }
  }
  const currentValue = resolveModelValue(modelValue, form, initialValue, path)
  form.stageInitialValue(unref(path), currentValue, true)
  const value = computed({
    get() {
      return getFromPath(form.values, unref(path))
    },
    set(newVal) {
      form.setFieldValue(unref(path), newVal, false)
    }
  })
  return {
    value,
    initialValue,
    setInitialValue
  }
}
function resolveModelValue(modelValue, form, initialValue, path) {
  if (isRef(modelValue)) {
    return unref(modelValue)
  }
  if (modelValue !== void 0) {
    return modelValue
  }
  return getFromPath(form.values, unref(path), unref(initialValue))
}
function createFieldMeta(currentValue, initialValue, errors, schema) {
  var _a, _b
  const isRequired =
    (_b =
      (_a = schema === null || schema === void 0 ? void 0 : schema.describe) === null ||
      _a === void 0
        ? void 0
        : _a.call(schema).required) !== null && _b !== void 0
      ? _b
      : false
  const meta = reactive({
    touched: false,
    pending: false,
    valid: true,
    required: isRequired,
    validated: !!unref(errors).length,
    initialValue: computed(() => unref(initialValue)),
    dirty: computed(() => {
      return !isEqual(unref(currentValue), unref(initialValue))
    })
  })
  watch(
    errors,
    (value) => {
      meta.valid = !value.length
    },
    {
      immediate: true,
      flush: 'sync'
    }
  )
  return meta
}
function createFieldErrors() {
  const errors = ref([])
  return {
    errors,
    setErrors: (messages) => {
      errors.value = normalizeErrorItem(messages)
    }
  }
}
function installDevtoolsPlugin(app) {
  if (true) {
    setupDevtoolsPlugin(
      {
        id: 'vee-validate-devtools-plugin',
        label: 'VeeValidate Plugin',
        packageName: 'vee-validate',
        homepage: 'https://vee-validate.logaretm.com/v4',
        app,
        logo: 'https://vee-validate.logaretm.com/v4/logo.png'
      },
      setupApiHooks
    )
  }
}
var DEVTOOLS_FORMS = {}
var DEVTOOLS_FIELDS = {}
var API
var refreshInspector = throttle(() => {
  setTimeout(async () => {
    await nextTick()
    API === null || API === void 0 ? void 0 : API.sendInspectorState(INSPECTOR_ID)
    API === null || API === void 0 ? void 0 : API.sendInspectorTree(INSPECTOR_ID)
  }, 100)
}, 100)
function registerFormWithDevTools(form) {
  const vm = getCurrentInstance()
  if (!API) {
    const app = vm === null || vm === void 0 ? void 0 : vm.appContext.app
    if (!app) {
      return
    }
    installDevtoolsPlugin(app)
  }
  DEVTOOLS_FORMS[form.formId] = Object.assign({}, form)
  DEVTOOLS_FORMS[form.formId]._vm = vm
  onUnmounted(() => {
    delete DEVTOOLS_FORMS[form.formId]
    refreshInspector()
  })
  refreshInspector()
}
function registerSingleFieldWithDevtools(field) {
  const vm = getCurrentInstance()
  if (!API) {
    const app = vm === null || vm === void 0 ? void 0 : vm.appContext.app
    if (!app) {
      return
    }
    installDevtoolsPlugin(app)
  }
  DEVTOOLS_FIELDS[field.id] = Object.assign({}, field)
  DEVTOOLS_FIELDS[field.id]._vm = vm
  onUnmounted(() => {
    delete DEVTOOLS_FIELDS[field.id]
    refreshInspector()
  })
  refreshInspector()
}
var INSPECTOR_ID = 'vee-validate-inspector'
var COLORS = {
  error: 12405579,
  success: 448379,
  unknown: 5522283,
  white: 16777215,
  black: 0,
  blue: 218007,
  purple: 12157168,
  orange: 16099682,
  gray: 12304330
}
var SELECTED_NODE = null
function setupApiHooks(api) {
  API = api
  api.addInspector({
    id: INSPECTOR_ID,
    icon: 'rule',
    label: 'vee-validate',
    noSelectionText: 'Select a vee-validate node to inspect',
    actions: [
      {
        icon: 'done_outline',
        tooltip: 'Validate selected item',
        action: async () => {
          if (!SELECTED_NODE) {
            console.error('There is not a valid selected vee-validate node or component')
            return
          }
          if (SELECTED_NODE.type === 'field') {
            await SELECTED_NODE.field.validate()
            return
          }
          if (SELECTED_NODE.type === 'form') {
            await SELECTED_NODE.form.validate()
            return
          }
          if (SELECTED_NODE.type === 'pathState') {
            await SELECTED_NODE.form.validateField(SELECTED_NODE.state.path)
          }
        }
      },
      {
        icon: 'delete_sweep',
        tooltip: 'Clear validation state of the selected item',
        action: () => {
          if (!SELECTED_NODE) {
            console.error('There is not a valid selected vee-validate node or component')
            return
          }
          if (SELECTED_NODE.type === 'field') {
            SELECTED_NODE.field.resetField()
            return
          }
          if (SELECTED_NODE.type === 'form') {
            SELECTED_NODE.form.resetForm()
          }
          if (SELECTED_NODE.type === 'pathState') {
            SELECTED_NODE.form.resetField(SELECTED_NODE.state.path)
          }
        }
      }
    ]
  })
  api.on.getInspectorTree((payload) => {
    if (payload.inspectorId !== INSPECTOR_ID) {
      return
    }
    const forms = Object.values(DEVTOOLS_FORMS)
    const fields = Object.values(DEVTOOLS_FIELDS)
    payload.rootNodes = [
      ...forms.map(mapFormForDevtoolsInspector),
      ...fields.map((field) => mapFieldForDevtoolsInspector(field))
    ]
  })
  api.on.getInspectorState((payload, ctx) => {
    if (
      payload.inspectorId !== INSPECTOR_ID ||
      ctx.currentTab !== `custom-inspector:${INSPECTOR_ID}`
    ) {
      return
    }
    const { form, field, state, type } = decodeNodeId(payload.nodeId)
    if (form && type === 'form') {
      payload.state = buildFormState(form)
      SELECTED_NODE = { type: 'form', form }
      return
    }
    if (state && type === 'pathState' && form) {
      payload.state = buildFieldState(state)
      SELECTED_NODE = { type: 'pathState', state, form }
      return
    }
    if (field && type === 'field') {
      payload.state = buildFieldState({
        errors: field.errors.value,
        dirty: field.meta.dirty,
        valid: field.meta.valid,
        touched: field.meta.touched,
        value: field.value.value,
        initialValue: field.meta.initialValue
      })
      SELECTED_NODE = { field, type: 'field' }
      return
    }
    SELECTED_NODE = null
  })
}
function mapFormForDevtoolsInspector(form) {
  const { textColor, bgColor } = getValidityColors(form.meta.value.valid)
  const formTreeNodes = {}
  Object.values(form.getAllPathStates()).forEach((state) => {
    setInPath(formTreeNodes, unref(state.path), mapPathForDevtoolsInspector(state, form))
  })
  function buildFormTree(tree, path = []) {
    const key = [...path].pop()
    if ('id' in tree) {
      return Object.assign(Object.assign({}, tree), { label: key || tree.label })
    }
    if (isObject(tree)) {
      return {
        id: `${path.join('.')}`,
        label: key || '',
        children: Object.keys(tree).map((key2) => buildFormTree(tree[key2], [...path, key2]))
      }
    }
    if (Array.isArray(tree)) {
      return {
        id: `${path.join('.')}`,
        label: `${key}[]`,
        children: tree.map((c, idx) => buildFormTree(c, [...path, String(idx)]))
      }
    }
    return { id: '', label: '', children: [] }
  }
  const { children } = buildFormTree(formTreeNodes)
  return {
    id: encodeNodeId(form),
    label: 'Form',
    children,
    tags: [
      {
        label: 'Form',
        textColor,
        backgroundColor: bgColor
      },
      {
        label: `${form.getAllPathStates().length} fields`,
        textColor: COLORS.white,
        backgroundColor: COLORS.unknown
      }
    ]
  }
}
function mapPathForDevtoolsInspector(state, form) {
  return {
    id: encodeNodeId(form, state),
    label: unref(state.path),
    tags: getFieldNodeTags(state.multiple, state.fieldsCount, state.type, state.valid, form)
  }
}
function mapFieldForDevtoolsInspector(field, form) {
  return {
    id: encodeNodeId(form, field),
    label: unref(field.name),
    tags: getFieldNodeTags(false, 1, field.type, field.meta.valid, form)
  }
}
function getFieldNodeTags(multiple, fieldsCount, type, valid, form) {
  const { textColor, bgColor } = getValidityColors(valid)
  return [
    multiple
      ? void 0
      : {
          label: 'Field',
          textColor,
          backgroundColor: bgColor
        },
    !form
      ? {
          label: 'Standalone',
          textColor: COLORS.black,
          backgroundColor: COLORS.gray
        }
      : void 0,
    type === 'checkbox'
      ? {
          label: 'Checkbox',
          textColor: COLORS.white,
          backgroundColor: COLORS.blue
        }
      : void 0,
    type === 'radio'
      ? {
          label: 'Radio',
          textColor: COLORS.white,
          backgroundColor: COLORS.purple
        }
      : void 0,
    multiple
      ? {
          label: 'Multiple',
          textColor: COLORS.black,
          backgroundColor: COLORS.orange
        }
      : void 0
  ].filter(Boolean)
}
function encodeNodeId(form, stateOrField) {
  const type = stateOrField ? ('path' in stateOrField ? 'pathState' : 'field') : 'form'
  const fieldPath = stateOrField
    ? 'path' in stateOrField
      ? stateOrField === null || stateOrField === void 0
        ? void 0
        : stateOrField.path
      : unref(stateOrField === null || stateOrField === void 0 ? void 0 : stateOrField.name)
    : ''
  const idObject = {
    f: form === null || form === void 0 ? void 0 : form.formId,
    ff: fieldPath,
    type
  }
  return btoa(encodeURIComponent(JSON.stringify(idObject)))
}
function decodeNodeId(nodeId) {
  try {
    const idObject = JSON.parse(decodeURIComponent(atob(nodeId)))
    const form = DEVTOOLS_FORMS[idObject.f]
    if (!form && idObject.ff) {
      const field = DEVTOOLS_FIELDS[idObject.ff]
      if (!field) {
        return {}
      }
      return {
        type: idObject.type,
        field
      }
    }
    if (!form) {
      return {}
    }
    const state = form.getPathState(idObject.ff)
    return {
      type: idObject.type,
      form,
      state
    }
  } catch (err) {}
  return {}
}
function buildFieldState(state) {
  return {
    'Field state': [
      { key: 'errors', value: state.errors },
      {
        key: 'initialValue',
        value: state.initialValue
      },
      {
        key: 'currentValue',
        value: state.value
      },
      {
        key: 'touched',
        value: state.touched
      },
      {
        key: 'dirty',
        value: state.dirty
      },
      {
        key: 'valid',
        value: state.valid
      }
    ]
  }
}
function buildFormState(form) {
  const { errorBag, meta, values, isSubmitting, isValidating, submitCount } = form
  return {
    'Form state': [
      {
        key: 'submitCount',
        value: submitCount.value
      },
      {
        key: 'isSubmitting',
        value: isSubmitting.value
      },
      {
        key: 'isValidating',
        value: isValidating.value
      },
      {
        key: 'touched',
        value: meta.value.touched
      },
      {
        key: 'dirty',
        value: meta.value.dirty
      },
      {
        key: 'valid',
        value: meta.value.valid
      },
      {
        key: 'initialValues',
        value: meta.value.initialValues
      },
      {
        key: 'currentValues',
        value: values
      },
      {
        key: 'errors',
        value: keysOf(errorBag.value).reduce((acc, key) => {
          var _a
          const message = (_a = errorBag.value[key]) === null || _a === void 0 ? void 0 : _a[0]
          if (message) {
            acc[key] = message
          }
          return acc
        }, {})
      }
    ]
  }
}
function getValidityColors(valid) {
  return {
    bgColor: valid ? COLORS.success : COLORS.error,
    textColor: valid ? COLORS.black : COLORS.white
  }
}
function useField(path, rules, opts) {
  if (hasCheckedAttr(opts === null || opts === void 0 ? void 0 : opts.type)) {
    return useFieldWithChecked(path, rules, opts)
  }
  return _useField(path, rules, opts)
}
function _useField(path, rules, opts) {
  const {
    initialValue: modelValue,
    validateOnMount,
    bails,
    type,
    checkedValue,
    label,
    validateOnValueUpdate,
    uncheckedValue,
    controlled,
    keepValueOnUnmount,
    syncVModel,
    form: controlForm
  } = normalizeOptions(opts)
  const injectedForm = controlled ? injectWithSelf(FormContextKey) : void 0
  const form = controlForm || injectedForm
  const name = computed(() => normalizeFormPath(toValue(path)))
  const validator = computed(() => {
    const schema = toValue(form === null || form === void 0 ? void 0 : form.schema)
    if (schema) {
      return void 0
    }
    const rulesValue = unref(rules)
    if (
      isYupValidator(rulesValue) ||
      isTypedSchema(rulesValue) ||
      isCallable(rulesValue) ||
      Array.isArray(rulesValue)
    ) {
      return rulesValue
    }
    return normalizeRules(rulesValue)
  })
  const { id, value, initialValue, meta, setState, errors, flags } = useFieldState(name, {
    modelValue,
    form,
    bails,
    label,
    type,
    validate: validator.value ? validate$1 : void 0,
    schema: isTypedSchema(rules) ? rules : void 0
  })
  const errorMessage = computed(() => errors.value[0])
  if (syncVModel) {
    useVModel({
      value,
      prop: syncVModel,
      handleChange,
      shouldValidate: () => validateOnValueUpdate && !flags.pendingReset
    })
  }
  const handleBlur = (evt, shouldValidate = false) => {
    meta.touched = true
    if (shouldValidate) {
      validateWithStateMutation()
    }
  }
  async function validateCurrentValue(mode) {
    var _a, _b
    if (form === null || form === void 0 ? void 0 : form.validateSchema) {
      const { results } = await form.validateSchema(mode)
      return (_a = results[toValue(name)]) !== null && _a !== void 0
        ? _a
        : { valid: true, errors: [] }
    }
    if (validator.value) {
      return validate(value.value, validator.value, {
        name: toValue(name),
        label: toValue(label),
        values:
          (_b = form === null || form === void 0 ? void 0 : form.values) !== null && _b !== void 0
            ? _b
            : {},
        bails
      })
    }
    return { valid: true, errors: [] }
  }
  const validateWithStateMutation = withLatest(
    async () => {
      meta.pending = true
      meta.validated = true
      return validateCurrentValue('validated-only')
    },
    (result) => {
      if (flags.pendingUnmount[field.id]) {
        return result
      }
      setState({ errors: result.errors })
      meta.pending = false
      meta.valid = result.valid
      return result
    }
  )
  const validateValidStateOnly = withLatest(
    async () => {
      return validateCurrentValue('silent')
    },
    (result) => {
      meta.valid = result.valid
      return result
    }
  )
  function validate$1(opts2) {
    if ((opts2 === null || opts2 === void 0 ? void 0 : opts2.mode) === 'silent') {
      return validateValidStateOnly()
    }
    return validateWithStateMutation()
  }
  function handleChange(e, shouldValidate = true) {
    const newValue = normalizeEventValue(e)
    setValue(newValue, shouldValidate)
  }
  onMounted(() => {
    if (validateOnMount) {
      return validateWithStateMutation()
    }
    if (!form || !form.validateSchema) {
      validateValidStateOnly()
    }
  })
  function setTouched(isTouched) {
    meta.touched = isTouched
  }
  function resetField(state) {
    var _a
    const newValue = state && 'value' in state ? state.value : initialValue.value
    setState({
      value: klona(newValue),
      initialValue: klona(newValue),
      touched:
        (_a = state === null || state === void 0 ? void 0 : state.touched) !== null && _a !== void 0
          ? _a
          : false,
      errors: (state === null || state === void 0 ? void 0 : state.errors) || []
    })
    meta.pending = false
    meta.validated = false
    validateValidStateOnly()
  }
  const vm = getCurrentInstance()
  function setValue(newValue, shouldValidate = true) {
    value.value =
      vm && syncVModel ? applyModelModifiers(newValue, vm.props.modelModifiers) : newValue
    const validateFn = shouldValidate ? validateWithStateMutation : validateValidStateOnly
    validateFn()
  }
  function setErrors(errors2) {
    setState({ errors: Array.isArray(errors2) ? errors2 : [errors2] })
  }
  const valueProxy = computed({
    get() {
      return value.value
    },
    set(newValue) {
      setValue(newValue, validateOnValueUpdate)
    }
  })
  const field = {
    id,
    name,
    label,
    value: valueProxy,
    meta,
    errors,
    errorMessage,
    type,
    checkedValue,
    uncheckedValue,
    bails,
    keepValueOnUnmount,
    resetField,
    handleReset: () => resetField(),
    validate: validate$1,
    handleChange,
    handleBlur,
    setState,
    setTouched,
    setErrors,
    setValue
  }
  provide(FieldContextKey, field)
  if (isRef(rules) && typeof unref(rules) !== 'function') {
    watch(
      rules,
      (value2, oldValue) => {
        if (isEqual(value2, oldValue)) {
          return
        }
        meta.validated ? validateWithStateMutation() : validateValidStateOnly()
      },
      {
        deep: true
      }
    )
  }
  if (true) {
    field._vm = getCurrentInstance()
    watch(
      () => Object.assign(Object.assign({ errors: errors.value }, meta), { value: value.value }),
      refreshInspector,
      {
        deep: true
      }
    )
    if (!form) {
      registerSingleFieldWithDevtools(field)
    }
  }
  if (!form) {
    return field
  }
  const dependencies = computed(() => {
    const rulesVal = validator.value
    if (
      !rulesVal ||
      isCallable(rulesVal) ||
      isYupValidator(rulesVal) ||
      isTypedSchema(rulesVal) ||
      Array.isArray(rulesVal)
    ) {
      return {}
    }
    return Object.keys(rulesVal).reduce((acc, rule) => {
      const deps = extractLocators(rulesVal[rule])
        .map((dep) => dep.__locatorRef)
        .reduce((depAcc, depName) => {
          const depValue = getFromPath(form.values, depName) || form.values[depName]
          if (depValue !== void 0) {
            depAcc[depName] = depValue
          }
          return depAcc
        }, {})
      Object.assign(acc, deps)
      return acc
    }, {})
  })
  watch(dependencies, (deps, oldDeps) => {
    if (!Object.keys(deps).length) {
      return
    }
    const shouldValidate = !isEqual(deps, oldDeps)
    if (shouldValidate) {
      meta.validated ? validateWithStateMutation() : validateValidStateOnly()
    }
  })
  onBeforeUnmount(() => {
    var _a
    const shouldKeepValue =
      (_a = toValue(field.keepValueOnUnmount)) !== null && _a !== void 0
        ? _a
        : toValue(form.keepValuesOnUnmount)
    const path2 = toValue(name)
    if (shouldKeepValue || !form || flags.pendingUnmount[field.id]) {
      form === null || form === void 0 ? void 0 : form.removePathState(path2, id)
      return
    }
    flags.pendingUnmount[field.id] = true
    const pathState = form.getPathState(path2)
    const matchesId =
      Array.isArray(pathState === null || pathState === void 0 ? void 0 : pathState.id) &&
      (pathState === null || pathState === void 0 ? void 0 : pathState.multiple)
        ? pathState === null || pathState === void 0
          ? void 0
          : pathState.id.includes(field.id)
        : (pathState === null || pathState === void 0 ? void 0 : pathState.id) === field.id
    if (!matchesId) {
      return
    }
    if (
      (pathState === null || pathState === void 0 ? void 0 : pathState.multiple) &&
      Array.isArray(pathState.value)
    ) {
      const valueIdx = pathState.value.findIndex((i) => isEqual(i, toValue(field.checkedValue)))
      if (valueIdx > -1) {
        const newVal = [...pathState.value]
        newVal.splice(valueIdx, 1)
        form.setFieldValue(path2, newVal)
      }
      if (Array.isArray(pathState.id)) {
        pathState.id.splice(pathState.id.indexOf(field.id), 1)
      }
    } else {
      form.unsetPathValue(toValue(name))
    }
    form.removePathState(path2, id)
  })
  return field
}
function normalizeOptions(opts) {
  const defaults = () => ({
    initialValue: void 0,
    validateOnMount: false,
    bails: true,
    label: void 0,
    validateOnValueUpdate: true,
    keepValueOnUnmount: void 0,
    syncVModel: false,
    controlled: true
  })
  const isVModelSynced = !!(opts === null || opts === void 0 ? void 0 : opts.syncVModel)
  const modelPropName =
    typeof (opts === null || opts === void 0 ? void 0 : opts.syncVModel) === 'string'
      ? opts.syncVModel
      : (opts === null || opts === void 0 ? void 0 : opts.modelPropName) || 'modelValue'
  const initialValue =
    isVModelSynced && !('initialValue' in (opts || {}))
      ? getCurrentModelValue(getCurrentInstance(), modelPropName)
      : opts === null || opts === void 0
        ? void 0
        : opts.initialValue
  if (!opts) {
    return Object.assign(Object.assign({}, defaults()), { initialValue })
  }
  const checkedValue = 'valueProp' in opts ? opts.valueProp : opts.checkedValue
  const controlled = 'standalone' in opts ? !opts.standalone : opts.controlled
  const syncVModel =
    (opts === null || opts === void 0 ? void 0 : opts.modelPropName) ||
    (opts === null || opts === void 0 ? void 0 : opts.syncVModel) ||
    false
  return Object.assign(Object.assign(Object.assign({}, defaults()), opts || {}), {
    initialValue,
    controlled: controlled !== null && controlled !== void 0 ? controlled : true,
    checkedValue,
    syncVModel
  })
}
function useFieldWithChecked(name, rules, opts) {
  const form = !(opts === null || opts === void 0 ? void 0 : opts.standalone)
    ? injectWithSelf(FormContextKey)
    : void 0
  const checkedValue = opts === null || opts === void 0 ? void 0 : opts.checkedValue
  const uncheckedValue = opts === null || opts === void 0 ? void 0 : opts.uncheckedValue
  function patchCheckedApi(field) {
    const handleChange = field.handleChange
    const checked = computed(() => {
      const currentValue = toValue(field.value)
      const checkedVal = toValue(checkedValue)
      return Array.isArray(currentValue)
        ? currentValue.findIndex((v) => isEqual(v, checkedVal)) >= 0
        : isEqual(checkedVal, currentValue)
    })
    function handleCheckboxChange(e, shouldValidate = true) {
      var _a, _b
      if (
        checked.value ===
        ((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0
          ? void 0
          : _a.checked)
      ) {
        if (shouldValidate) {
          field.validate()
        }
        return
      }
      const path = toValue(name)
      const pathState = form === null || form === void 0 ? void 0 : form.getPathState(path)
      const value = normalizeEventValue(e)
      let newValue = (_b = toValue(checkedValue)) !== null && _b !== void 0 ? _b : value
      if (
        form &&
        (pathState === null || pathState === void 0 ? void 0 : pathState.multiple) &&
        pathState.type === 'checkbox'
      ) {
        newValue = resolveNextCheckboxValue(getFromPath(form.values, path) || [], newValue, void 0)
      } else if ((opts === null || opts === void 0 ? void 0 : opts.type) === 'checkbox') {
        newValue = resolveNextCheckboxValue(toValue(field.value), newValue, toValue(uncheckedValue))
      }
      handleChange(newValue, shouldValidate)
    }
    return Object.assign(Object.assign({}, field), {
      checked,
      checkedValue,
      uncheckedValue,
      handleChange: handleCheckboxChange
    })
  }
  return patchCheckedApi(_useField(name, rules, opts))
}
function useVModel({ prop, value, handleChange, shouldValidate }) {
  const vm = getCurrentInstance()
  if (!vm || !prop) {
    if (true) {
      console.warn('Failed to setup model events because `useField` was not called in setup.')
    }
    return
  }
  const propName = typeof prop === 'string' ? prop : 'modelValue'
  const emitName = `update:${propName}`
  if (!(propName in vm.props)) {
    return
  }
  watch(value, (newValue) => {
    if (isEqual(newValue, getCurrentModelValue(vm, propName))) {
      return
    }
    vm.emit(emitName, newValue)
  })
  watch(
    () => getCurrentModelValue(vm, propName),
    (propValue) => {
      if (propValue === IS_ABSENT && value.value === void 0) {
        return
      }
      const newValue = propValue === IS_ABSENT ? void 0 : propValue
      if (isEqual(newValue, value.value)) {
        return
      }
      handleChange(newValue, shouldValidate())
    }
  )
}
function getCurrentModelValue(vm, propName) {
  if (!vm) {
    return void 0
  }
  return vm.props[propName]
}
var FieldImpl = defineComponent({
  name: 'Field',
  inheritAttrs: false,
  props: {
    as: {
      type: [String, Object],
      default: void 0
    },
    name: {
      type: String,
      required: true
    },
    rules: {
      type: [Object, String, Function],
      default: void 0
    },
    validateOnMount: {
      type: Boolean,
      default: false
    },
    validateOnBlur: {
      type: Boolean,
      default: void 0
    },
    validateOnChange: {
      type: Boolean,
      default: void 0
    },
    validateOnInput: {
      type: Boolean,
      default: void 0
    },
    validateOnModelUpdate: {
      type: Boolean,
      default: void 0
    },
    bails: {
      type: Boolean,
      default: () => getConfig().bails
    },
    label: {
      type: String,
      default: void 0
    },
    uncheckedValue: {
      type: null,
      default: void 0
    },
    modelValue: {
      type: null,
      default: IS_ABSENT
    },
    modelModifiers: {
      type: null,
      default: () => ({})
    },
    'onUpdate:modelValue': {
      type: null,
      default: void 0
    },
    standalone: {
      type: Boolean,
      default: false
    },
    keepValue: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props, ctx) {
    const rules = toRef(props, 'rules')
    const name = toRef(props, 'name')
    const label = toRef(props, 'label')
    const uncheckedValue = toRef(props, 'uncheckedValue')
    const keepValue = toRef(props, 'keepValue')
    const {
      errors,
      value,
      errorMessage,
      validate: validateField,
      handleChange,
      handleBlur,
      setTouched,
      resetField,
      handleReset,
      meta,
      checked,
      setErrors
    } = useField(name, rules, {
      validateOnMount: props.validateOnMount,
      bails: props.bails,
      standalone: props.standalone,
      type: ctx.attrs.type,
      initialValue: resolveInitialValue(props, ctx),
      // Only for checkboxes and radio buttons
      checkedValue: ctx.attrs.value,
      uncheckedValue,
      label,
      validateOnValueUpdate: props.validateOnModelUpdate,
      keepValueOnUnmount: keepValue,
      syncVModel: true
    })
    const onChangeHandler = function handleChangeWithModel(e, shouldValidate = true) {
      handleChange(e, shouldValidate)
    }
    const sharedProps = computed(() => {
      const { validateOnInput, validateOnChange, validateOnBlur, validateOnModelUpdate } =
        resolveValidationTriggers(props)
      function baseOnBlur(e) {
        handleBlur(e, validateOnBlur)
        if (isCallable(ctx.attrs.onBlur)) {
          ctx.attrs.onBlur(e)
        }
      }
      function baseOnInput(e) {
        onChangeHandler(e, validateOnInput)
        if (isCallable(ctx.attrs.onInput)) {
          ctx.attrs.onInput(e)
        }
      }
      function baseOnChange(e) {
        onChangeHandler(e, validateOnChange)
        if (isCallable(ctx.attrs.onChange)) {
          ctx.attrs.onChange(e)
        }
      }
      const attrs = {
        name: props.name,
        onBlur: baseOnBlur,
        onInput: baseOnInput,
        onChange: baseOnChange
      }
      attrs['onUpdate:modelValue'] = (e) => onChangeHandler(e, validateOnModelUpdate)
      return attrs
    })
    const fieldProps = computed(() => {
      const attrs = Object.assign({}, sharedProps.value)
      if (hasCheckedAttr(ctx.attrs.type) && checked) {
        attrs.checked = checked.value
      }
      const tag = resolveTag(props, ctx)
      if (shouldHaveValueBinding(tag, ctx.attrs)) {
        attrs.value = value.value
      }
      return attrs
    })
    const componentProps = computed(() => {
      return Object.assign(Object.assign({}, sharedProps.value), { modelValue: value.value })
    })
    function slotProps() {
      return {
        field: fieldProps.value,
        componentField: componentProps.value,
        value: value.value,
        meta,
        errors: errors.value,
        errorMessage: errorMessage.value,
        validate: validateField,
        resetField,
        handleChange: onChangeHandler,
        handleInput: (e) => onChangeHandler(e, false),
        handleReset,
        handleBlur: sharedProps.value.onBlur,
        setTouched,
        setErrors
      }
    }
    ctx.expose({
      value,
      meta,
      errors,
      errorMessage,
      setErrors,
      setTouched,
      reset: resetField,
      validate: validateField,
      handleChange
    })
    return () => {
      const tag = resolveDynamicComponent(resolveTag(props, ctx))
      const children = normalizeChildren(tag, ctx, slotProps)
      if (tag) {
        return h(tag, Object.assign(Object.assign({}, ctx.attrs), fieldProps.value), children)
      }
      return children
    }
  }
})
function resolveTag(props, ctx) {
  let tag = props.as || ''
  if (!props.as && !ctx.slots.default) {
    tag = 'input'
  }
  return tag
}
function resolveValidationTriggers(props) {
  var _a, _b, _c, _d
  const { validateOnInput, validateOnChange, validateOnBlur, validateOnModelUpdate } = getConfig()
  return {
    validateOnInput: (_a = props.validateOnInput) !== null && _a !== void 0 ? _a : validateOnInput,
    validateOnChange:
      (_b = props.validateOnChange) !== null && _b !== void 0 ? _b : validateOnChange,
    validateOnBlur: (_c = props.validateOnBlur) !== null && _c !== void 0 ? _c : validateOnBlur,
    validateOnModelUpdate:
      (_d = props.validateOnModelUpdate) !== null && _d !== void 0 ? _d : validateOnModelUpdate
  }
}
function resolveInitialValue(props, ctx) {
  if (!hasCheckedAttr(ctx.attrs.type)) {
    return isPropPresent(props, 'modelValue') ? props.modelValue : ctx.attrs.value
  }
  return isPropPresent(props, 'modelValue') ? props.modelValue : void 0
}
var Field = FieldImpl
var FORM_COUNTER = 0
var PRIVATE_PATH_STATE_KEYS = ['bails', 'fieldsCount', 'id', 'multiple', 'type', 'validate']
function resolveInitialValues(opts) {
  const providedValues = Object.assign(
    {},
    toValue((opts === null || opts === void 0 ? void 0 : opts.initialValues) || {})
  )
  const schema = unref(opts === null || opts === void 0 ? void 0 : opts.validationSchema)
  if (schema && isTypedSchema(schema) && isCallable(schema.cast)) {
    return klona(schema.cast(providedValues) || {})
  }
  return klona(providedValues)
}
function useForm(opts) {
  var _a
  const formId = FORM_COUNTER++
  let FIELD_ID_COUNTER = 0
  const isSubmitting = ref(false)
  const isValidating = ref(false)
  const submitCount = ref(0)
  const fieldArrays = []
  const formValues = reactive(resolveInitialValues(opts))
  const pathStates = ref([])
  const extraErrorsBag = ref({})
  const pathStateLookup = ref({})
  const rebuildPathLookup = debounceNextTick(() => {
    pathStateLookup.value = pathStates.value.reduce((names, state) => {
      names[normalizeFormPath(toValue(state.path))] = state
      return names
    }, {})
  })
  function setFieldError(field, message) {
    const state = findPathState(field)
    if (!state) {
      if (typeof field === 'string') {
        extraErrorsBag.value[normalizeFormPath(field)] = normalizeErrorItem(message)
      }
      return
    }
    if (typeof field === 'string') {
      const normalizedPath = normalizeFormPath(field)
      if (extraErrorsBag.value[normalizedPath]) {
        delete extraErrorsBag.value[normalizedPath]
      }
    }
    state.errors = normalizeErrorItem(message)
    state.valid = !state.errors.length
  }
  function setErrors(paths) {
    keysOf(paths).forEach((path) => {
      setFieldError(path, paths[path])
    })
  }
  if (opts === null || opts === void 0 ? void 0 : opts.initialErrors) {
    setErrors(opts.initialErrors)
  }
  const errorBag = computed(() => {
    const pathErrors = pathStates.value.reduce((acc, state) => {
      if (state.errors.length) {
        acc[state.path] = state.errors
      }
      return acc
    }, {})
    return Object.assign(Object.assign({}, extraErrorsBag.value), pathErrors)
  })
  const errors = computed(() => {
    return keysOf(errorBag.value).reduce((acc, key) => {
      const errors2 = errorBag.value[key]
      if (errors2 === null || errors2 === void 0 ? void 0 : errors2.length) {
        acc[key] = errors2[0]
      }
      return acc
    }, {})
  })
  const fieldNames = computed(() => {
    return pathStates.value.reduce((names, state) => {
      names[state.path] = { name: state.path || '', label: state.label || '' }
      return names
    }, {})
  })
  const fieldBailsMap = computed(() => {
    return pathStates.value.reduce((map, state) => {
      var _a2
      map[state.path] = (_a2 = state.bails) !== null && _a2 !== void 0 ? _a2 : true
      return map
    }, {})
  })
  const initialErrors = Object.assign(
    {},
    (opts === null || opts === void 0 ? void 0 : opts.initialErrors) || {}
  )
  const keepValuesOnUnmount =
    (_a = opts === null || opts === void 0 ? void 0 : opts.keepValuesOnUnmount) !== null &&
    _a !== void 0
      ? _a
      : false
  const { initialValues, originalInitialValues, setInitialValues } = useFormInitialValues(
    pathStates,
    formValues,
    opts
  )
  const meta = useFormMeta(pathStates, formValues, originalInitialValues, errors)
  const controlledValues = computed(() => {
    return pathStates.value.reduce((acc, state) => {
      const value = getFromPath(formValues, state.path)
      setInPath(acc, state.path, value)
      return acc
    }, {})
  })
  const schema = opts === null || opts === void 0 ? void 0 : opts.validationSchema
  function createPathState(path, config) {
    var _a2, _b
    const initialValue = computed(() => getFromPath(initialValues.value, toValue(path)))
    const pathStateExists = pathStateLookup.value[toValue(path)]
    const isCheckboxOrRadio =
      (config === null || config === void 0 ? void 0 : config.type) === 'checkbox' ||
      (config === null || config === void 0 ? void 0 : config.type) === 'radio'
    if (pathStateExists && isCheckboxOrRadio) {
      pathStateExists.multiple = true
      const id2 = FIELD_ID_COUNTER++
      if (Array.isArray(pathStateExists.id)) {
        pathStateExists.id.push(id2)
      } else {
        pathStateExists.id = [pathStateExists.id, id2]
      }
      pathStateExists.fieldsCount++
      pathStateExists.__flags.pendingUnmount[id2] = false
      return pathStateExists
    }
    const currentValue = computed(() => getFromPath(formValues, toValue(path)))
    const pathValue = toValue(path)
    const unsetBatchIndex = UNSET_BATCH.findIndex((_path) => _path === pathValue)
    if (unsetBatchIndex !== -1) {
      UNSET_BATCH.splice(unsetBatchIndex, 1)
    }
    const isRequired = computed(() => {
      var _a3, _b2, _c, _d, _e, _f
      if (isTypedSchema(schema)) {
        return (_c =
          (_b2 = (_a3 = schema).describe) === null || _b2 === void 0
            ? void 0
            : _b2.call(_a3, toValue(path)).required) !== null && _c !== void 0
          ? _c
          : false
      }
      if (isTypedSchema(config === null || config === void 0 ? void 0 : config.schema)) {
        return (_f =
          (_e = (_d = config === null || config === void 0 ? void 0 : config.schema).describe) ===
            null || _e === void 0
            ? void 0
            : _e.call(_d).required) !== null && _f !== void 0
          ? _f
          : false
      }
      return false
    })
    const id = FIELD_ID_COUNTER++
    const state = reactive({
      id,
      path,
      touched: false,
      pending: false,
      valid: true,
      validated: !!((_a2 = initialErrors[pathValue]) === null || _a2 === void 0
        ? void 0
        : _a2.length),
      required: isRequired,
      initialValue,
      errors: shallowRef([]),
      bails:
        (_b = config === null || config === void 0 ? void 0 : config.bails) !== null &&
        _b !== void 0
          ? _b
          : false,
      label: config === null || config === void 0 ? void 0 : config.label,
      type: (config === null || config === void 0 ? void 0 : config.type) || 'default',
      value: currentValue,
      multiple: false,
      __flags: {
        pendingUnmount: { [id]: false },
        pendingReset: false
      },
      fieldsCount: 1,
      validate: config === null || config === void 0 ? void 0 : config.validate,
      dirty: computed(() => {
        return !isEqual(unref(currentValue), unref(initialValue))
      })
    })
    pathStates.value.push(state)
    pathStateLookup.value[pathValue] = state
    rebuildPathLookup()
    if (errors.value[pathValue] && !initialErrors[pathValue]) {
      nextTick(() => {
        validateField(pathValue, { mode: 'silent' })
      })
    }
    if (isRef(path)) {
      watch(path, (newPath) => {
        rebuildPathLookup()
        const nextValue = klona(currentValue.value)
        pathStateLookup.value[newPath] = state
        nextTick(() => {
          setInPath(formValues, newPath, nextValue)
        })
      })
    }
    return state
  }
  const debouncedSilentValidation = debounceAsync(_validateSchema, 5)
  const debouncedValidation = debounceAsync(_validateSchema, 5)
  const validateSchema = withLatest(
    async (mode) => {
      return await (mode === 'silent' ? debouncedSilentValidation() : debouncedValidation())
    },
    (formResult, [mode]) => {
      const currentErrorsPaths = keysOf(formCtx.errorBag.value)
      const paths = [
        .../* @__PURE__ */ new Set([
          ...keysOf(formResult.results),
          ...pathStates.value.map((p) => p.path),
          ...currentErrorsPaths
        ])
      ].sort()
      const results = paths.reduce(
        (validation, _path) => {
          var _a2
          const expectedPath = _path
          const pathState = findPathState(expectedPath) || findHoistedPath(expectedPath)
          const messages =
            ((_a2 = formResult.results[expectedPath]) === null || _a2 === void 0
              ? void 0
              : _a2.errors) || []
          const path =
            toValue(pathState === null || pathState === void 0 ? void 0 : pathState.path) ||
            expectedPath
          const fieldResult = mergeValidationResults(
            { errors: messages, valid: !messages.length },
            validation.results[path]
          )
          validation.results[path] = fieldResult
          if (!fieldResult.valid) {
            validation.errors[path] = fieldResult.errors[0]
          }
          if (pathState && extraErrorsBag.value[path]) {
            delete extraErrorsBag.value[path]
          }
          if (!pathState) {
            setFieldError(path, messages)
            return validation
          }
          pathState.valid = fieldResult.valid
          if (mode === 'silent') {
            return validation
          }
          if (mode === 'validated-only' && !pathState.validated) {
            return validation
          }
          setFieldError(pathState, fieldResult.errors)
          return validation
        },
        { valid: formResult.valid, results: {}, errors: {} }
      )
      if (formResult.values) {
        results.values = formResult.values
      }
      keysOf(results.results).forEach((path) => {
        var _a2
        const pathState = findPathState(path)
        if (!pathState) {
          return
        }
        if (mode === 'silent') {
          return
        }
        if (mode === 'validated-only' && !pathState.validated) {
          return
        }
        setFieldError(
          pathState,
          (_a2 = results.results[path]) === null || _a2 === void 0 ? void 0 : _a2.errors
        )
      })
      return results
    }
  )
  function mutateAllPathState(mutation) {
    pathStates.value.forEach(mutation)
  }
  function findPathState(path) {
    const normalizedPath = typeof path === 'string' ? normalizeFormPath(path) : path
    const pathState =
      typeof normalizedPath === 'string' ? pathStateLookup.value[normalizedPath] : normalizedPath
    return pathState
  }
  function findHoistedPath(path) {
    const candidates = pathStates.value.filter((state) => path.startsWith(state.path))
    return candidates.reduce(
      (bestCandidate, candidate) => {
        if (!bestCandidate) {
          return candidate
        }
        return candidate.path.length > bestCandidate.path.length ? candidate : bestCandidate
      },
      void 0
    )
  }
  let UNSET_BATCH = []
  let PENDING_UNSET
  function unsetPathValue(path) {
    UNSET_BATCH.push(path)
    if (!PENDING_UNSET) {
      PENDING_UNSET = nextTick(() => {
        const sortedPaths = [...UNSET_BATCH].sort().reverse()
        sortedPaths.forEach((p) => {
          unsetPath(formValues, p)
        })
        UNSET_BATCH = []
        PENDING_UNSET = null
      })
    }
    return PENDING_UNSET
  }
  function makeSubmissionFactory(onlyControlled) {
    return function submitHandlerFactory(fn, onValidationError) {
      return function submissionHandler(e) {
        if (e instanceof Event) {
          e.preventDefault()
          e.stopPropagation()
        }
        mutateAllPathState((s) => (s.touched = true))
        isSubmitting.value = true
        submitCount.value++
        return validate2()
          .then((result) => {
            const values = klona(formValues)
            if (result.valid && typeof fn === 'function') {
              const controlled = klona(controlledValues.value)
              let submittedValues = onlyControlled ? controlled : values
              if (result.values) {
                submittedValues = result.values
              }
              return fn(submittedValues, {
                evt: e,
                controlledValues: controlled,
                setErrors,
                setFieldError,
                setTouched,
                setFieldTouched,
                setValues,
                setFieldValue,
                resetForm,
                resetField
              })
            }
            if (!result.valid && typeof onValidationError === 'function') {
              onValidationError({
                values,
                evt: e,
                errors: result.errors,
                results: result.results
              })
            }
          })
          .then(
            (returnVal) => {
              isSubmitting.value = false
              return returnVal
            },
            (err) => {
              isSubmitting.value = false
              throw err
            }
          )
      }
    }
  }
  const handleSubmitImpl = makeSubmissionFactory(false)
  const handleSubmit = handleSubmitImpl
  handleSubmit.withControlled = makeSubmissionFactory(true)
  function removePathState(path, id) {
    const idx = pathStates.value.findIndex((s) => {
      return s.path === path && (Array.isArray(s.id) ? s.id.includes(id) : s.id === id)
    })
    const pathState = pathStates.value[idx]
    if (idx === -1 || !pathState) {
      return
    }
    nextTick(() => {
      validateField(path, { mode: 'silent', warn: false })
    })
    if (pathState.multiple && pathState.fieldsCount) {
      pathState.fieldsCount--
    }
    if (Array.isArray(pathState.id)) {
      const idIndex = pathState.id.indexOf(id)
      if (idIndex >= 0) {
        pathState.id.splice(idIndex, 1)
      }
      delete pathState.__flags.pendingUnmount[id]
    }
    if (!pathState.multiple || pathState.fieldsCount <= 0) {
      pathStates.value.splice(idx, 1)
      unsetInitialValue(path)
      rebuildPathLookup()
      delete pathStateLookup.value[path]
    }
  }
  function destroyPath(path) {
    keysOf(pathStateLookup.value).forEach((key) => {
      if (key.startsWith(path)) {
        delete pathStateLookup.value[key]
      }
    })
    pathStates.value = pathStates.value.filter((s) => !s.path.startsWith(path))
    nextTick(() => {
      rebuildPathLookup()
    })
  }
  const formCtx = {
    formId,
    values: formValues,
    controlledValues,
    errorBag,
    errors,
    schema,
    submitCount,
    meta,
    isSubmitting,
    isValidating,
    fieldArrays,
    keepValuesOnUnmount,
    validateSchema: unref(schema) ? validateSchema : void 0,
    validate: validate2,
    setFieldError,
    validateField,
    setFieldValue,
    setValues,
    setErrors,
    setFieldTouched,
    setTouched,
    resetForm,
    resetField,
    handleSubmit,
    useFieldModel,
    defineInputBinds,
    defineComponentBinds,
    defineField,
    stageInitialValue,
    unsetInitialValue,
    setFieldInitialValue,
    createPathState,
    getPathState: findPathState,
    unsetPathValue,
    removePathState,
    initialValues,
    getAllPathStates: () => pathStates.value,
    destroyPath,
    isFieldTouched,
    isFieldDirty,
    isFieldValid
  }
  function setFieldValue(field, value, shouldValidate = true) {
    const clonedValue = klona(value)
    const path = typeof field === 'string' ? field : field.path
    const pathState = findPathState(path)
    if (!pathState) {
      createPathState(path)
    }
    setInPath(formValues, path, clonedValue)
    if (shouldValidate) {
      validateField(path)
    }
  }
  function forceSetValues(fields, shouldValidate = true) {
    keysOf(formValues).forEach((key) => {
      delete formValues[key]
    })
    keysOf(fields).forEach((path) => {
      setFieldValue(path, fields[path], false)
    })
    if (shouldValidate) {
      validate2()
    }
  }
  function setValues(fields, shouldValidate = true) {
    merge(formValues, fields)
    fieldArrays.forEach((f) => f && f.reset())
    if (shouldValidate) {
      validate2()
    }
  }
  function createModel(path, shouldValidate) {
    const pathState = findPathState(toValue(path)) || createPathState(path)
    return computed({
      get() {
        return pathState.value
      },
      set(value) {
        var _a2
        const pathValue = toValue(path)
        setFieldValue(
          pathValue,
          value,
          (_a2 = toValue(shouldValidate)) !== null && _a2 !== void 0 ? _a2 : false
        )
      }
    })
  }
  function setFieldTouched(field, isTouched) {
    const pathState = findPathState(field)
    if (pathState) {
      pathState.touched = isTouched
    }
  }
  function isFieldTouched(field) {
    const pathState = findPathState(field)
    if (pathState) {
      return pathState.touched
    }
    return pathStates.value.filter((s) => s.path.startsWith(field)).some((s) => s.touched)
  }
  function isFieldDirty(field) {
    const pathState = findPathState(field)
    if (pathState) {
      return pathState.dirty
    }
    return pathStates.value.filter((s) => s.path.startsWith(field)).some((s) => s.dirty)
  }
  function isFieldValid(field) {
    const pathState = findPathState(field)
    if (pathState) {
      return pathState.valid
    }
    return pathStates.value.filter((s) => s.path.startsWith(field)).every((s) => s.valid)
  }
  function setTouched(fields) {
    if (typeof fields === 'boolean') {
      mutateAllPathState((state) => {
        state.touched = fields
      })
      return
    }
    keysOf(fields).forEach((field) => {
      setFieldTouched(field, !!fields[field])
    })
  }
  function resetField(field, state) {
    var _a2
    const newValue =
      state && 'value' in state ? state.value : getFromPath(initialValues.value, field)
    const pathState = findPathState(field)
    if (pathState) {
      pathState.__flags.pendingReset = true
    }
    setFieldInitialValue(field, klona(newValue), true)
    setFieldValue(field, newValue, false)
    setFieldTouched(
      field,
      (_a2 = state === null || state === void 0 ? void 0 : state.touched) !== null && _a2 !== void 0
        ? _a2
        : false
    )
    setFieldError(field, (state === null || state === void 0 ? void 0 : state.errors) || [])
    nextTick(() => {
      if (pathState) {
        pathState.__flags.pendingReset = false
      }
    })
  }
  function resetForm(resetState, opts2) {
    let newValues = klona(
      (resetState === null || resetState === void 0 ? void 0 : resetState.values)
        ? resetState.values
        : originalInitialValues.value
    )
    newValues = (opts2 === null || opts2 === void 0 ? void 0 : opts2.force)
      ? newValues
      : merge(originalInitialValues.value, newValues)
    newValues =
      isTypedSchema(schema) && isCallable(schema.cast) ? schema.cast(newValues) : newValues
    setInitialValues(newValues)
    mutateAllPathState((state) => {
      var _a2
      state.__flags.pendingReset = true
      state.validated = false
      state.touched =
        ((_a2 = resetState === null || resetState === void 0 ? void 0 : resetState.touched) ===
          null || _a2 === void 0
          ? void 0
          : _a2[state.path]) || false
      setFieldValue(state.path, getFromPath(newValues, state.path), false)
      setFieldError(state.path, void 0)
    })
    ;(opts2 === null || opts2 === void 0 ? void 0 : opts2.force)
      ? forceSetValues(newValues, false)
      : setValues(newValues, false)
    setErrors((resetState === null || resetState === void 0 ? void 0 : resetState.errors) || {})
    submitCount.value =
      (resetState === null || resetState === void 0 ? void 0 : resetState.submitCount) || 0
    nextTick(() => {
      validate2({ mode: 'silent' })
      mutateAllPathState((state) => {
        state.__flags.pendingReset = false
      })
    })
  }
  async function validate2(opts2) {
    const mode = (opts2 === null || opts2 === void 0 ? void 0 : opts2.mode) || 'force'
    if (mode === 'force') {
      mutateAllPathState((f) => (f.validated = true))
    }
    if (formCtx.validateSchema) {
      return formCtx.validateSchema(mode)
    }
    isValidating.value = true
    const validations = await Promise.all(
      pathStates.value.map((state) => {
        if (!state.validate) {
          return Promise.resolve({
            key: state.path,
            valid: true,
            errors: []
          })
        }
        return state.validate(opts2).then((result) => {
          return {
            key: state.path,
            valid: result.valid,
            errors: result.errors
          }
        })
      })
    )
    isValidating.value = false
    const results = {}
    const errors2 = {}
    for (const validation of validations) {
      results[validation.key] = {
        valid: validation.valid,
        errors: validation.errors
      }
      if (validation.errors.length) {
        errors2[validation.key] = validation.errors[0]
      }
    }
    return {
      valid: validations.every((r) => r.valid),
      results,
      errors: errors2
    }
  }
  async function validateField(path, opts2) {
    var _a2
    const state = findPathState(path)
    if (state && (opts2 === null || opts2 === void 0 ? void 0 : opts2.mode) !== 'silent') {
      state.validated = true
    }
    if (schema) {
      const { results } = await validateSchema(
        (opts2 === null || opts2 === void 0 ? void 0 : opts2.mode) || 'validated-only'
      )
      return results[path] || { errors: [], valid: true }
    }
    if (state === null || state === void 0 ? void 0 : state.validate) {
      return state.validate(opts2)
    }
    const shouldWarn =
      !state &&
      ((_a2 = opts2 === null || opts2 === void 0 ? void 0 : opts2.warn) !== null && _a2 !== void 0
        ? _a2
        : true)
    if (shouldWarn) {
      if (true) {
        warn(`field with path ${path} was not found`)
      }
    }
    return Promise.resolve({ errors: [], valid: true })
  }
  function unsetInitialValue(path) {
    unsetPath(initialValues.value, path)
  }
  function stageInitialValue(path, value, updateOriginal = false) {
    setFieldInitialValue(path, value)
    setInPath(formValues, path, value)
    if (updateOriginal && !(opts === null || opts === void 0 ? void 0 : opts.initialValues)) {
      setInPath(originalInitialValues.value, path, klona(value))
    }
  }
  function setFieldInitialValue(path, value, updateOriginal = false) {
    setInPath(initialValues.value, path, klona(value))
    if (updateOriginal) {
      setInPath(originalInitialValues.value, path, klona(value))
    }
  }
  async function _validateSchema() {
    const schemaValue = unref(schema)
    if (!schemaValue) {
      return { valid: true, results: {}, errors: {} }
    }
    isValidating.value = true
    const formResult =
      isYupValidator(schemaValue) || isTypedSchema(schemaValue)
        ? await validateTypedSchema(schemaValue, formValues)
        : await validateObjectSchema(schemaValue, formValues, {
            names: fieldNames.value,
            bailsMap: fieldBailsMap.value
          })
    isValidating.value = false
    return formResult
  }
  const submitForm = handleSubmit((_, { evt }) => {
    if (isFormSubmitEvent(evt)) {
      evt.target.submit()
    }
  })
  onMounted(() => {
    if (opts === null || opts === void 0 ? void 0 : opts.initialErrors) {
      setErrors(opts.initialErrors)
    }
    if (opts === null || opts === void 0 ? void 0 : opts.initialTouched) {
      setTouched(opts.initialTouched)
    }
    if (opts === null || opts === void 0 ? void 0 : opts.validateOnMount) {
      validate2()
      return
    }
    if (formCtx.validateSchema) {
      formCtx.validateSchema('silent')
    }
  })
  if (isRef(schema)) {
    watch(schema, () => {
      var _a2
      ;(_a2 = formCtx.validateSchema) === null || _a2 === void 0
        ? void 0
        : _a2.call(formCtx, 'validated-only')
    })
  }
  provide(FormContextKey, formCtx)
  if (true) {
    registerFormWithDevTools(formCtx)
    watch(
      () =>
        Object.assign(Object.assign({ errors: errorBag.value }, meta.value), {
          values: formValues,
          isSubmitting: isSubmitting.value,
          isValidating: isValidating.value,
          submitCount: submitCount.value
        }),
      refreshInspector,
      {
        deep: true
      }
    )
  }
  function defineField(path, config) {
    const label = isCallable(config)
      ? void 0
      : config === null || config === void 0
        ? void 0
        : config.label
    const pathState = findPathState(toValue(path)) || createPathState(path, { label })
    const evalConfig = () =>
      isCallable(config) ? config(omit(pathState, PRIVATE_PATH_STATE_KEYS)) : config || {}
    function onBlur() {
      var _a2
      pathState.touched = true
      const validateOnBlur =
        (_a2 = evalConfig().validateOnBlur) !== null && _a2 !== void 0
          ? _a2
          : getConfig().validateOnBlur
      if (validateOnBlur) {
        validateField(pathState.path)
      }
    }
    function onInput() {
      var _a2
      const validateOnInput =
        (_a2 = evalConfig().validateOnInput) !== null && _a2 !== void 0
          ? _a2
          : getConfig().validateOnInput
      if (validateOnInput) {
        nextTick(() => {
          validateField(pathState.path)
        })
      }
    }
    function onChange() {
      var _a2
      const validateOnChange =
        (_a2 = evalConfig().validateOnChange) !== null && _a2 !== void 0
          ? _a2
          : getConfig().validateOnChange
      if (validateOnChange) {
        nextTick(() => {
          validateField(pathState.path)
        })
      }
    }
    const props = computed(() => {
      const base = {
        onChange,
        onInput,
        onBlur
      }
      if (isCallable(config)) {
        return Object.assign(
          Object.assign({}, base),
          config(omit(pathState, PRIVATE_PATH_STATE_KEYS)).props || {}
        )
      }
      if (config === null || config === void 0 ? void 0 : config.props) {
        return Object.assign(
          Object.assign({}, base),
          config.props(omit(pathState, PRIVATE_PATH_STATE_KEYS))
        )
      }
      return base
    })
    const model = createModel(path, () => {
      var _a2, _b, _c
      return (_c =
        (_a2 = evalConfig().validateOnModelUpdate) !== null && _a2 !== void 0
          ? _a2
          : (_b = getConfig()) === null || _b === void 0
            ? void 0
            : _b.validateOnModelUpdate) !== null && _c !== void 0
        ? _c
        : true
    })
    return [model, props]
  }
  function useFieldModel(pathOrPaths) {
    if (!Array.isArray(pathOrPaths)) {
      return createModel(pathOrPaths)
    }
    return pathOrPaths.map((p) => createModel(p, true))
  }
  function defineInputBinds(path, config) {
    const [model, props] = defineField(path, config)
    function onBlur() {
      props.value.onBlur()
    }
    function onInput(e) {
      const value = normalizeEventValue(e)
      setFieldValue(toValue(path), value, false)
      props.value.onInput()
    }
    function onChange(e) {
      const value = normalizeEventValue(e)
      setFieldValue(toValue(path), value, false)
      props.value.onChange()
    }
    return computed(() => {
      return Object.assign(Object.assign({}, props.value), {
        onBlur,
        onInput,
        onChange,
        value: model.value
      })
    })
  }
  function defineComponentBinds(path, config) {
    const [model, props] = defineField(path, config)
    const pathState = findPathState(toValue(path))
    function onUpdateModelValue(value) {
      model.value = value
    }
    return computed(() => {
      const conf = isCallable(config)
        ? config(omit(pathState, PRIVATE_PATH_STATE_KEYS))
        : config || {}
      return Object.assign(
        {
          [conf.model || 'modelValue']: model.value,
          [`onUpdate:${conf.model || 'modelValue'}`]: onUpdateModelValue
        },
        props.value
      )
    })
  }
  return Object.assign(Object.assign({}, formCtx), {
    values: readonly(formValues),
    handleReset: () => resetForm(),
    submitForm
  })
}
function useFormMeta(pathsState, currentValues, initialValues, errors) {
  const MERGE_STRATEGIES = {
    touched: 'some',
    pending: 'some',
    valid: 'every'
  }
  const isDirty = computed(() => {
    return !isEqual(currentValues, unref(initialValues))
  })
  function calculateFlags() {
    const states = pathsState.value
    return keysOf(MERGE_STRATEGIES).reduce((acc, flag) => {
      const mergeMethod = MERGE_STRATEGIES[flag]
      acc[flag] = states[mergeMethod]((s) => s[flag])
      return acc
    }, {})
  }
  const flags = reactive(calculateFlags())
  watchEffect(() => {
    const value = calculateFlags()
    flags.touched = value.touched
    flags.valid = value.valid
    flags.pending = value.pending
  })
  return computed(() => {
    return Object.assign(Object.assign({ initialValues: unref(initialValues) }, flags), {
      valid: flags.valid && !keysOf(errors.value).length,
      dirty: isDirty.value
    })
  })
}
function useFormInitialValues(pathsState, formValues, opts) {
  const values = resolveInitialValues(opts)
  const initialValues = ref(values)
  const originalInitialValues = ref(klona(values))
  function setInitialValues(values2, updateFields = false) {
    initialValues.value = merge(klona(initialValues.value) || {}, klona(values2))
    originalInitialValues.value = merge(klona(originalInitialValues.value) || {}, klona(values2))
    if (!updateFields) {
      return
    }
    pathsState.value.forEach((state) => {
      const wasTouched = state.touched
      if (wasTouched) {
        return
      }
      const newValue = getFromPath(initialValues.value, state.path)
      setInPath(formValues, state.path, klona(newValue))
    })
  }
  return {
    initialValues,
    originalInitialValues,
    setInitialValues
  }
}
function mergeValidationResults(a, b) {
  if (!b) {
    return a
  }
  return {
    valid: a.valid && b.valid,
    errors: [...a.errors, ...b.errors]
  }
}
var FormImpl = defineComponent({
  name: 'Form',
  inheritAttrs: false,
  props: {
    as: {
      type: null,
      default: 'form'
    },
    validationSchema: {
      type: Object,
      default: void 0
    },
    initialValues: {
      type: Object,
      default: void 0
    },
    initialErrors: {
      type: Object,
      default: void 0
    },
    initialTouched: {
      type: Object,
      default: void 0
    },
    validateOnMount: {
      type: Boolean,
      default: false
    },
    onSubmit: {
      type: Function,
      default: void 0
    },
    onInvalidSubmit: {
      type: Function,
      default: void 0
    },
    keepValues: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx) {
    const validationSchema = toRef(props, 'validationSchema')
    const keepValues = toRef(props, 'keepValues')
    const {
      errors,
      errorBag,
      values,
      meta,
      isSubmitting,
      isValidating,
      submitCount,
      controlledValues,
      validate: validate2,
      validateField,
      handleReset,
      resetForm,
      handleSubmit,
      setErrors,
      setFieldError,
      setFieldValue,
      setValues,
      setFieldTouched,
      setTouched,
      resetField
    } = useForm({
      validationSchema: validationSchema.value ? validationSchema : void 0,
      initialValues: props.initialValues,
      initialErrors: props.initialErrors,
      initialTouched: props.initialTouched,
      validateOnMount: props.validateOnMount,
      keepValuesOnUnmount: keepValues
    })
    const submitForm = handleSubmit((_, { evt }) => {
      if (isFormSubmitEvent(evt)) {
        evt.target.submit()
      }
    }, props.onInvalidSubmit)
    const onSubmit = props.onSubmit
      ? handleSubmit(props.onSubmit, props.onInvalidSubmit)
      : submitForm
    function handleFormReset(e) {
      if (isEvent(e)) {
        e.preventDefault()
      }
      handleReset()
      if (typeof ctx.attrs.onReset === 'function') {
        ctx.attrs.onReset()
      }
    }
    function handleScopedSlotSubmit(evt, onSubmit2) {
      const onSuccess = typeof evt === 'function' && !onSubmit2 ? evt : onSubmit2
      return handleSubmit(onSuccess, props.onInvalidSubmit)(evt)
    }
    function getValues() {
      return klona(values)
    }
    function getMeta() {
      return klona(meta.value)
    }
    function getErrors() {
      return klona(errors.value)
    }
    function slotProps() {
      return {
        meta: meta.value,
        errors: errors.value,
        errorBag: errorBag.value,
        values,
        isSubmitting: isSubmitting.value,
        isValidating: isValidating.value,
        submitCount: submitCount.value,
        controlledValues: controlledValues.value,
        validate: validate2,
        validateField,
        handleSubmit: handleScopedSlotSubmit,
        handleReset,
        submitForm,
        setErrors,
        setFieldError,
        setFieldValue,
        setValues,
        setFieldTouched,
        setTouched,
        resetForm,
        resetField,
        getValues,
        getMeta,
        getErrors
      }
    }
    ctx.expose({
      setFieldError,
      setErrors,
      setFieldValue,
      setValues,
      setFieldTouched,
      setTouched,
      resetForm,
      validate: validate2,
      validateField,
      resetField,
      getValues,
      getMeta,
      getErrors,
      values,
      meta,
      errors
    })
    return function renderForm() {
      const tag =
        props.as === 'form' ? props.as : !props.as ? null : resolveDynamicComponent(props.as)
      const children = normalizeChildren(tag, ctx, slotProps)
      if (!tag) {
        return children
      }
      const formAttrs =
        tag === 'form'
          ? {
              // Disables native validation as vee-validate will handle it.
              novalidate: true
            }
          : {}
      return h(
        tag,
        Object.assign(Object.assign(Object.assign({}, formAttrs), ctx.attrs), {
          onSubmit,
          onReset: handleFormReset
        }),
        children
      )
    }
  }
})
var Form = FormImpl
function useFieldArray(arrayPath) {
  const form = injectWithSelf(FormContextKey, void 0)
  const fields = ref([])
  const noOp = () => {}
  const noOpApi = {
    fields,
    remove: noOp,
    push: noOp,
    swap: noOp,
    insert: noOp,
    update: noOp,
    replace: noOp,
    prepend: noOp,
    move: noOp
  }
  if (!form) {
    if (true) {
      warn2(
        'FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly'
      )
    }
    return noOpApi
  }
  if (!unref(arrayPath)) {
    if (true) {
      warn2(
        'FieldArray requires a field path to be provided, did you forget to pass the `name` prop?'
      )
    }
    return noOpApi
  }
  const alreadyExists = form.fieldArrays.find((a) => unref(a.path) === unref(arrayPath))
  if (alreadyExists) {
    return alreadyExists
  }
  let entryCounter = 0
  function getCurrentValues() {
    return (
      getFromPath(
        form === null || form === void 0 ? void 0 : form.values,
        toValue(arrayPath),
        []
      ) || []
    )
  }
  function initFields() {
    const currentValues = getCurrentValues()
    if (!Array.isArray(currentValues)) {
      return
    }
    fields.value = currentValues.map((v, idx) => createEntry(v, idx, fields.value))
    updateEntryFlags()
  }
  initFields()
  function updateEntryFlags() {
    const fieldsLength = fields.value.length
    for (let i = 0; i < fieldsLength; i++) {
      const entry = fields.value[i]
      entry.isFirst = i === 0
      entry.isLast = i === fieldsLength - 1
    }
  }
  function createEntry(value, idx, currentFields) {
    if (currentFields && !isNullOrUndefined(idx) && currentFields[idx]) {
      return currentFields[idx]
    }
    const key = entryCounter++
    const entry = {
      key,
      value: computedDeep({
        get() {
          const currentValues =
            getFromPath(
              form === null || form === void 0 ? void 0 : form.values,
              toValue(arrayPath),
              []
            ) || []
          const idx2 = fields.value.findIndex((e) => e.key === key)
          return idx2 === -1 ? value : currentValues[idx2]
        },
        set(value2) {
          const idx2 = fields.value.findIndex((e) => e.key === key)
          if (idx2 === -1) {
            if (true) {
              warn2(`Attempting to update a non-existent array item`)
            }
            return
          }
          update(idx2, value2)
        }
      }),
      // will be auto unwrapped
      isFirst: false,
      isLast: false
    }
    return entry
  }
  function afterMutation() {
    updateEntryFlags()
    form === null || form === void 0 ? void 0 : form.validate({ mode: 'silent' })
  }
  function remove(idx) {
    const pathName = toValue(arrayPath)
    const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName)
    if (!pathValue || !Array.isArray(pathValue)) {
      return
    }
    const newValue = [...pathValue]
    newValue.splice(idx, 1)
    const fieldPath = pathName + `[${idx}]`
    form.destroyPath(fieldPath)
    form.unsetInitialValue(fieldPath)
    setInPath(form.values, pathName, newValue)
    fields.value.splice(idx, 1)
    afterMutation()
  }
  function push(initialValue) {
    const value = klona(initialValue)
    const pathName = toValue(arrayPath)
    const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName)
    const normalizedPathValue = isNullOrUndefined(pathValue) ? [] : pathValue
    if (!Array.isArray(normalizedPathValue)) {
      return
    }
    const newValue = [...normalizedPathValue]
    newValue.push(value)
    form.stageInitialValue(pathName + `[${newValue.length - 1}]`, value)
    setInPath(form.values, pathName, newValue)
    fields.value.push(createEntry(value))
    afterMutation()
  }
  function swap(indexA, indexB) {
    const pathName = toValue(arrayPath)
    const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName)
    if (!Array.isArray(pathValue) || !(indexA in pathValue) || !(indexB in pathValue)) {
      return
    }
    const newValue = [...pathValue]
    const newFields = [...fields.value]
    const temp = newValue[indexA]
    newValue[indexA] = newValue[indexB]
    newValue[indexB] = temp
    const tempEntry = newFields[indexA]
    newFields[indexA] = newFields[indexB]
    newFields[indexB] = tempEntry
    setInPath(form.values, pathName, newValue)
    fields.value = newFields
    updateEntryFlags()
  }
  function insert(idx, initialValue) {
    const value = klona(initialValue)
    const pathName = toValue(arrayPath)
    const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName)
    if (!Array.isArray(pathValue) || pathValue.length < idx) {
      return
    }
    const newValue = [...pathValue]
    const newFields = [...fields.value]
    newValue.splice(idx, 0, value)
    newFields.splice(idx, 0, createEntry(value))
    setInPath(form.values, pathName, newValue)
    fields.value = newFields
    afterMutation()
  }
  function replace(arr) {
    const pathName = toValue(arrayPath)
    form.stageInitialValue(pathName, arr)
    setInPath(form.values, pathName, arr)
    initFields()
    afterMutation()
  }
  function update(idx, value) {
    const pathName = toValue(arrayPath)
    const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName)
    if (!Array.isArray(pathValue) || pathValue.length - 1 < idx) {
      return
    }
    setInPath(form.values, `${pathName}[${idx}]`, value)
    form === null || form === void 0 ? void 0 : form.validate({ mode: 'validated-only' })
  }
  function prepend(initialValue) {
    const value = klona(initialValue)
    const pathName = toValue(arrayPath)
    const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName)
    const normalizedPathValue = isNullOrUndefined(pathValue) ? [] : pathValue
    if (!Array.isArray(normalizedPathValue)) {
      return
    }
    const newValue = [value, ...normalizedPathValue]
    setInPath(form.values, pathName, newValue)
    form.stageInitialValue(pathName + `[0]`, value)
    fields.value.unshift(createEntry(value))
    afterMutation()
  }
  function move(oldIdx, newIdx) {
    const pathName = toValue(arrayPath)
    const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName)
    const newValue = isNullOrUndefined(pathValue) ? [] : [...pathValue]
    if (!Array.isArray(pathValue) || !(oldIdx in pathValue) || !(newIdx in pathValue)) {
      return
    }
    const newFields = [...fields.value]
    const movedItem = newFields[oldIdx]
    newFields.splice(oldIdx, 1)
    newFields.splice(newIdx, 0, movedItem)
    const movedValue = newValue[oldIdx]
    newValue.splice(oldIdx, 1)
    newValue.splice(newIdx, 0, movedValue)
    setInPath(form.values, pathName, newValue)
    fields.value = newFields
    afterMutation()
  }
  const fieldArrayCtx = {
    fields,
    remove,
    push,
    swap,
    insert,
    update,
    replace,
    prepend,
    move
  }
  form.fieldArrays.push(Object.assign({ path: arrayPath, reset: initFields }, fieldArrayCtx))
  onBeforeUnmount(() => {
    const idx = form.fieldArrays.findIndex((i) => toValue(i.path) === toValue(arrayPath))
    if (idx >= 0) {
      form.fieldArrays.splice(idx, 1)
    }
  })
  watch(getCurrentValues, (formValues) => {
    const fieldsValues = fields.value.map((f) => f.value)
    if (!isEqual(formValues, fieldsValues)) {
      initFields()
    }
  })
  return fieldArrayCtx
}
var FieldArrayImpl = defineComponent({
  name: 'FieldArray',
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props, ctx) {
    const { push, remove, swap, insert, replace, update, prepend, move, fields } = useFieldArray(
      () => props.name
    )
    function slotProps() {
      return {
        fields: fields.value,
        push,
        remove,
        swap,
        insert,
        update,
        replace,
        prepend,
        move
      }
    }
    ctx.expose({
      push,
      remove,
      swap,
      insert,
      update,
      replace,
      prepend,
      move
    })
    return () => {
      const children = normalizeChildren(void 0, ctx, slotProps)
      return children
    }
  }
})
var FieldArray = FieldArrayImpl
var ErrorMessageImpl = defineComponent({
  name: 'ErrorMessage',
  props: {
    as: {
      type: String,
      default: void 0
    },
    name: {
      type: String,
      required: true
    }
  },
  setup(props, ctx) {
    const form = inject(FormContextKey, void 0)
    const message = computed(() => {
      return form === null || form === void 0 ? void 0 : form.errors.value[props.name]
    })
    function slotProps() {
      return {
        message: message.value
      }
    }
    return () => {
      if (!message.value) {
        return void 0
      }
      const tag = props.as ? resolveDynamicComponent(props.as) : props.as
      const children = normalizeChildren(tag, ctx, slotProps)
      const attrs = Object.assign({ role: 'alert' }, ctx.attrs)
      if (
        !tag &&
        (Array.isArray(children) || !children) &&
        (children === null || children === void 0 ? void 0 : children.length)
      ) {
        return children
      }
      if (
        (Array.isArray(children) || !children) &&
        !(children === null || children === void 0 ? void 0 : children.length)
      ) {
        return h(tag || 'span', attrs, message.value)
      }
      return h(tag, attrs, children)
    }
  }
})
var ErrorMessage = ErrorMessageImpl
function useResetForm() {
  const form = injectWithSelf(FormContextKey)
  if (!form) {
    if (true) {
      warn2('No vee-validate <Form /> or `useForm` was detected in the component tree')
    }
  }
  return function resetForm(state) {
    if (!form) {
      return
    }
    return form.resetForm(state)
  }
}
function useIsFieldDirty(path) {
  const fieldOrPath = resolveFieldOrPathState(path)
  return computed(() => {
    var _a, _b
    if (!fieldOrPath) {
      return false
    }
    return (_b =
      'meta' in fieldOrPath
        ? fieldOrPath.meta.dirty
        : (_a = fieldOrPath === null || fieldOrPath === void 0 ? void 0 : fieldOrPath.value) ===
              null || _a === void 0
          ? void 0
          : _a.dirty) !== null && _b !== void 0
      ? _b
      : false
  })
}
function useIsFieldTouched(path) {
  const fieldOrPath = resolveFieldOrPathState(path)
  return computed(() => {
    var _a, _b
    if (!fieldOrPath) {
      return false
    }
    return (_b =
      'meta' in fieldOrPath
        ? fieldOrPath.meta.touched
        : (_a = fieldOrPath === null || fieldOrPath === void 0 ? void 0 : fieldOrPath.value) ===
              null || _a === void 0
          ? void 0
          : _a.touched) !== null && _b !== void 0
      ? _b
      : false
  })
}
function useIsFieldValid(path) {
  const fieldOrPath = resolveFieldOrPathState(path)
  return computed(() => {
    var _a, _b
    if (!fieldOrPath) {
      return false
    }
    return (_b =
      'meta' in fieldOrPath
        ? fieldOrPath.meta.valid
        : (_a = fieldOrPath === null || fieldOrPath === void 0 ? void 0 : fieldOrPath.value) ===
              null || _a === void 0
          ? void 0
          : _a.valid) !== null && _b !== void 0
      ? _b
      : false
  })
}
function useIsSubmitting() {
  const form = injectWithSelf(FormContextKey)
  if (!form) {
    if (true) {
      warn2('No vee-validate <Form /> or `useForm` was detected in the component tree')
    }
  }
  return computed(() => {
    var _a
    return (_a = form === null || form === void 0 ? void 0 : form.isSubmitting.value) !== null &&
      _a !== void 0
      ? _a
      : false
  })
}
function useIsValidating() {
  const form = injectWithSelf(FormContextKey)
  if (!form) {
    if (true) {
      warn2('No vee-validate <Form /> or `useForm` was detected in the component tree')
    }
  }
  return computed(() => {
    var _a
    return (_a = form === null || form === void 0 ? void 0 : form.isValidating.value) !== null &&
      _a !== void 0
      ? _a
      : false
  })
}
function useValidateField(path) {
  const form = injectWithSelf(FormContextKey)
  const field = path ? void 0 : inject(FieldContextKey)
  return function validateField() {
    if (field) {
      return field.validate()
    }
    if (form && path) {
      return form === null || form === void 0 ? void 0 : form.validateField(toValue(path))
    }
    if (true) {
      warn2(`field with name ${unref(path)} was not found`)
    }
    return Promise.resolve({
      errors: [],
      valid: true
    })
  }
}
function useIsFormDirty() {
  const form = injectWithSelf(FormContextKey)
  if (!form) {
    if (true) {
      warn2('No vee-validate <Form /> or `useForm` was detected in the component tree')
    }
  }
  return computed(() => {
    var _a
    return (_a = form === null || form === void 0 ? void 0 : form.meta.value.dirty) !== null &&
      _a !== void 0
      ? _a
      : false
  })
}
function useIsFormTouched() {
  const form = injectWithSelf(FormContextKey)
  if (!form) {
    if (true) {
      warn2('No vee-validate <Form /> or `useForm` was detected in the component tree')
    }
  }
  return computed(() => {
    var _a
    return (_a = form === null || form === void 0 ? void 0 : form.meta.value.touched) !== null &&
      _a !== void 0
      ? _a
      : false
  })
}
function useIsFormValid() {
  const form = injectWithSelf(FormContextKey)
  if (!form) {
    if (true) {
      warn2('No vee-validate <Form /> or `useForm` was detected in the component tree')
    }
  }
  return computed(() => {
    var _a
    return (_a = form === null || form === void 0 ? void 0 : form.meta.value.valid) !== null &&
      _a !== void 0
      ? _a
      : false
  })
}
function useValidateForm() {
  const form = injectWithSelf(FormContextKey)
  if (!form) {
    if (true) {
      warn2('No vee-validate <Form /> or `useForm` was detected in the component tree')
    }
  }
  return function validateField() {
    if (!form) {
      return Promise.resolve({ results: {}, errors: {}, valid: true })
    }
    return form.validate()
  }
}
function useSubmitCount() {
  const form = injectWithSelf(FormContextKey)
  if (!form) {
    if (true) {
      warn2('No vee-validate <Form /> or `useForm` was detected in the component tree')
    }
  }
  return computed(() => {
    var _a
    return (_a = form === null || form === void 0 ? void 0 : form.submitCount.value) !== null &&
      _a !== void 0
      ? _a
      : 0
  })
}
function useFieldValue(path) {
  const form = injectWithSelf(FormContextKey)
  const field = path ? void 0 : inject(FieldContextKey)
  return computed(() => {
    if (path) {
      return getFromPath(form === null || form === void 0 ? void 0 : form.values, toValue(path))
    }
    return toValue(field === null || field === void 0 ? void 0 : field.value)
  })
}
function useFormValues() {
  const form = injectWithSelf(FormContextKey)
  if (!form) {
    if (true) {
      warn2('No vee-validate <Form /> or `useForm` was detected in the component tree')
    }
  }
  return computed(() => {
    return (form === null || form === void 0 ? void 0 : form.values) || {}
  })
}
function useFormErrors() {
  const form = injectWithSelf(FormContextKey)
  if (!form) {
    if (true) {
      warn2('No vee-validate <Form /> or `useForm` was detected in the component tree')
    }
  }
  return computed(() => {
    return (form === null || form === void 0 ? void 0 : form.errors.value) || {}
  })
}
function useFieldError(path) {
  const form = injectWithSelf(FormContextKey)
  const field = path ? void 0 : inject(FieldContextKey)
  return computed(() => {
    if (path) {
      return form === null || form === void 0 ? void 0 : form.errors.value[toValue(path)]
    }
    return field === null || field === void 0 ? void 0 : field.errorMessage.value
  })
}
function useSubmitForm(cb) {
  const form = injectWithSelf(FormContextKey)
  if (!form) {
    if (true) {
      warn2('No vee-validate <Form /> or `useForm` was detected in the component tree')
    }
  }
  const onSubmit = form ? form.handleSubmit(cb) : void 0
  return function submitForm(e) {
    if (!onSubmit) {
      return
    }
    return onSubmit(e)
  }
}
function useSetFieldError(path) {
  const form = injectWithSelf(FormContextKey)
  const field = path ? void 0 : inject(FieldContextKey)
  return function setFieldError(message) {
    if (path && form) {
      form.setFieldError(toValue(path), message)
      return
    }
    if (field) {
      field.setErrors(message || [])
      return
    }
    if (true) {
      warn2(
        `Could not set error message since there is no form context or a field named "${toValue(path)}", did you forget to call "useField" or "useForm"?`
      )
    }
  }
}
function useSetFieldTouched(path) {
  const form = injectWithSelf(FormContextKey)
  const field = path ? void 0 : inject(FieldContextKey)
  return function setFieldTouched(touched) {
    if (path && form) {
      form.setFieldTouched(toValue(path), touched)
      return
    }
    if (field) {
      field.setTouched(touched)
      return
    }
    if (true) {
      warn2(
        `Could not set touched state since there is no form context or a field named "${toValue(path)}", did you forget to call "useField" or "useForm"?`
      )
    }
  }
}
function useSetFieldValue(path) {
  const form = injectWithSelf(FormContextKey)
  const field = path ? void 0 : inject(FieldContextKey)
  return function setFieldValue(value, shouldValidate = true) {
    if (path && form) {
      form.setFieldValue(toValue(path), value, shouldValidate)
      return
    }
    if (field) {
      field.setValue(value, shouldValidate)
      return
    }
    if (true) {
      warn2(
        `Could not set value since there is no form context or a field named "${toValue(path)}", did you forget to call "useField" or "useForm"?`
      )
    }
  }
}
function useSetFormErrors() {
  const form = injectWithSelf(FormContextKey)
  function setFormErrors(fields) {
    if (form) {
      form.setErrors(fields)
      return
    }
    if (true) {
      warn2(
        `Could not set errors because a form was not detected, did you forget to use "useForm" in a parent component?`
      )
    }
  }
  return setFormErrors
}
function useSetFormTouched() {
  const form = injectWithSelf(FormContextKey)
  function setFormTouched(fields) {
    if (form) {
      form.setTouched(fields)
      return
    }
    if (true) {
      warn2(
        `Could not set touched state because a form was not detected, did you forget to use "useForm" in a parent component?`
      )
    }
  }
  return setFormTouched
}
function useSetFormValues() {
  const form = injectWithSelf(FormContextKey)
  function setFormValues(fields, shouldValidate = true) {
    if (form) {
      form.setValues(fields, shouldValidate)
      return
    }
    if (true) {
      warn2(
        `Could not set form values because a form was not detected, did you forget to use "useForm" in a parent component?`
      )
    }
  }
  return setFormValues
}
export {
  ErrorMessage,
  Field,
  FieldArray,
  FieldContextKey,
  Form,
  FormContextKey,
  IS_ABSENT,
  cleanupNonNestedPath,
  configure,
  defineRule,
  isNotNestedPath,
  normalizeRules,
  useField,
  useFieldArray,
  useFieldError,
  useFieldValue,
  useForm,
  useFormErrors,
  useFormValues,
  useIsFieldDirty,
  useIsFieldTouched,
  useIsFieldValid,
  useIsFormDirty,
  useIsFormTouched,
  useIsFormValid,
  useIsSubmitting,
  useIsValidating,
  useResetForm,
  useSetFieldError,
  useSetFieldTouched,
  useSetFieldValue,
  useSetFormErrors,
  useSetFormTouched,
  useSetFormValues,
  useSubmitCount,
  useSubmitForm,
  useValidateField,
  useValidateForm,
  validate,
  validateObjectSchema as validateObject
}
/*! Bundled license information:

vee-validate/dist/vee-validate.esm.js:
  (**
    * vee-validate v4.12.6
    * (c) 2024 Abdelrahman Awad
    * @license MIT
    *)
*/
//# sourceMappingURL=vee-validate.js.map

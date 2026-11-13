"use strict";
(function(module) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], function(exports)  {
            module(exports);
        });
    } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeName !== 'string') {
        module(exports);
    } else {
        module(typeof self !== 'undefined' ? self : this);
}
}(function($rt_exports) {
let $rt_seed = 2463534242,
$rt_nextId = () => {
    let x = $rt_seed;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    $rt_seed = x;
    return x;
},
$rt_wrapFunction0 = f => function() {
    return f(this);
},
$rt_wrapFunction1 = f => function(p1) {
    return f(this, p1);
},
$rt_wrapFunction2 = f => function(p1, p2) {
    return f(this, p1, p2);
},
$rt_wrapFunction3 = f => function(p1, p2, p3) {
    return f(this, p1, p2, p3, p3);
},
$rt_wrapFunction4 = f => function(p1, p2, p3, p4) {
    return f(this, p1, p2, p3, p4);
},
$rt_mainStarter = f => (args, callback) => {
    if (!args) {
        args = [];
    }
    let javaArgs = $rt_createArray($rt_objcls(), args.length);
    for (let i = 0;i < args.length;++i) {
        javaArgs.data[i] = $rt_str(args[i]);
    }
    $rt_startThread(() => {
        f.call(null, javaArgs);
    }, callback);
},
$rt_eraseClinit = target => target.$clinit = () => {
},
$dbg_class = obj => {
    let cls = obj.constructor;
    let arrayDegree = 0;
    while (cls.$meta && cls.$meta.item) {
        ++arrayDegree;
        cls = cls.$meta.item;
    }
    let clsName = "";
    if (cls.$meta.primitive) {
        clsName = cls.$meta.name;
    } else {
        clsName = cls.$meta ? cls.$meta.name || "a/" + cls.name : "@" + cls.name;
    }
    while (arrayDegree-- > 0) {
        clsName += "[]";
    }
    return clsName;
},
$rt_classWithoutFields = superclass => {
    if (superclass === 0) {
        return function() {
        };
    }
    if (superclass === void 0) {
        superclass = $rt_objcls();
    }
    return function() {
        superclass.call(this);
    };
},
$rt_cls = cls => jl_Class_getClass(cls),
$rt_objcls = () => jl_Object,
$rt_callWithReceiver = f => function() {
    return f.apply(null, [this].concat(Array.prototype.slice.call(arguments)));
},
$rt_createcls = () => {
    return { $array : null, classObject : null, $meta : { supertypes : [], superclass : null } };
},
$rt_createPrimitiveCls = (name, binaryName) => {
    let cls = $rt_createcls();
    cls.$meta.primitive = true;
    cls.$meta.name = name;
    cls.$meta.binaryName = binaryName;
    cls.$meta.enum = false;
    cls.$meta.item = null;
    cls.$meta.simpleName = null;
    cls.$meta.declaringClass = null;
    cls.$meta.enclosingClass = null;
    return cls;
},
$rt_charcls = $rt_createPrimitiveCls("char", "C"),
$rt_shortcls = $rt_createPrimitiveCls("short", "S"),
$rt_intcls = $rt_createPrimitiveCls("int", "I"),
$rt_longcls = $rt_createPrimitiveCls("long", "J"),
$rt_doublecls = $rt_createPrimitiveCls("double", "D"),
$rt_voidcls = $rt_createPrimitiveCls("void", "V"),
$rt_numberConversionBuffer = new ArrayBuffer(16),
$rt_numberConversionDoubleArray = new Float64Array($rt_numberConversionBuffer),
$rt_numberConversionIntArray = new Int32Array($rt_numberConversionBuffer),
$rt_numberConversionLongArray = new BigInt64Array($rt_numberConversionBuffer),
$rt_doubleToRawLongBits = n => {
    $rt_numberConversionDoubleArray[0] = n;
    return $rt_numberConversionLongArray[0];
},
$rt_longBitsToDouble = n => {
    $rt_numberConversionLongArray[0] = n;
    return $rt_numberConversionDoubleArray[0];
},
$rt_equalDoubles = (a, b) => {
    if (a !== a) {
        return b !== b;
    }
    $rt_numberConversionDoubleArray[0] = a;
    $rt_numberConversionDoubleArray[1] = b;
    return $rt_numberConversionIntArray[0] === $rt_numberConversionIntArray[2] && $rt_numberConversionIntArray[1] === $rt_numberConversionIntArray[3];
},
$rt_compare = (a, b) => a > b ? 1 : a < b ?  -1 : a === b ? 0 : 1,
$rt_imul = Math.imul || function(a, b) {
    let ah = a >>> 16 & 0xFFFF;
    let al = a & 0xFFFF;
    let bh = b >>> 16 & 0xFFFF;
    let bl = b & 0xFFFF;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
},
$rt_udiv = (a, b) => (a >>> 0) / (b >>> 0) >>> 0,
$rt_umod = (a, b) => (a >>> 0) % (b >>> 0) >>> 0,
$rt_ucmp = (a, b) => {
    a >>>= 0;
    b >>>= 0;
    return a < b ?  -1 : a > b ? 1 : 0;
},
Long_ZERO = BigInt(0),
Long_create = (lo, hi) => BigInt.asIntN(64, BigInt.asUintN(64, BigInt(lo)) | BigInt.asUintN(64, BigInt(hi) << BigInt(32))),
Long_fromInt = val => BigInt.asIntN(64, BigInt(val | 0)),
Long_fromNumber = val => BigInt.asIntN(64, BigInt(val >= 0 ? Math.floor(val) : Math.ceil(val))),
Long_toNumber = val => Number(val),
Long_hi = val => Number(BigInt.asIntN(64, val >> BigInt(32))) | 0,
Long_lo = val => Number(BigInt.asIntN(32, val)) | 0,
Long_eq = (a, b) => a === b,
Long_ne = (a, b) => a !== b,
Long_gt = (a, b) => a > b,
Long_ge = (a, b) => a >= b,
Long_lt = (a, b) => a < b,
Long_le = (a, b) => a <= b,
Long_add = (a, b) => BigInt.asIntN(64, a + b),
Long_neg = a => BigInt.asIntN(64,  -a),
Long_sub = (a, b) => BigInt.asIntN(64, a - b);
let Long_compare = (a, b) => a < b ?  -1 : a > b ? 1 : 0,
Long_ucompare = (a, b) => {
    a = BigInt.asUintN(64, a);
    b = BigInt.asUintN(64, b);
    return a < b ?  -1 : a > b ? 1 : 0;
},
Long_mul = (a, b) => BigInt.asIntN(64, a * b),
Long_div = (a, b) => BigInt.asIntN(64, a / b),
Long_udiv = (a, b) => BigInt.asIntN(64, BigInt.asUintN(64, a) / BigInt.asUintN(64, b)),
Long_rem = (a, b) => BigInt.asIntN(64, a % b),
Long_urem = (a, b) => BigInt.asIntN(64, BigInt.asUintN(64, a) % BigInt.asUintN(64, b)),
Long_and = (a, b) => BigInt.asIntN(64, a & b),
Long_or = (a, b) => BigInt.asIntN(64, a | b),
Long_xor = (a, b) => BigInt.asIntN(64, a ^ b),
Long_shl = (a, b) => BigInt.asIntN(64, a << BigInt(b & 63)),
Long_shr = (a, b) => BigInt.asIntN(64, a >> BigInt(b & 63)),
Long_shru = (a, b) => BigInt.asIntN(64, BigInt.asUintN(64, a) >> BigInt(b & 63)),
$rt_createArray = (cls, sz) => {
    let data = new Array(sz);
    data.fill(null);
    return new ($rt_arraycls(cls))(data);
},
$rt_wrapArray = (cls, data) => new ($rt_arraycls(cls))(data),
$rt_createLongArrayFromData = data => {
    let buffer = new BigInt64Array(data.length);
    buffer.set(data);
    return new $rt_longArrayCls(buffer);
},
$rt_createCharArray = sz => new $rt_charArrayCls(new Uint16Array(sz)),
$rt_createShortArrayFromData = data => {
    let buffer = new Int16Array(data.length);
    buffer.set(data);
    return new $rt_shortArrayCls(buffer);
},
$rt_createIntArray = sz => new $rt_intArrayCls(new Int32Array(sz)),
$rt_createIntArrayFromData = data => {
    let buffer = new Int32Array(data.length);
    buffer.set(data);
    return new $rt_intArrayCls(buffer);
},
$rt_createDoubleArray = sz => new $rt_doubleArrayCls(new Float64Array(sz)),
$rt_createDoubleArrayFromData = data => {
    let buffer = new Float64Array(data.length);
    buffer.set(data);
    return new $rt_doubleArrayCls(buffer);
},
$rt_arraycls = cls => {
    let result = cls.$array;
    if (result === null) {
        function JavaArray(data) {
            ($rt_objcls()).call(this);
            this.data = data;
        }
        JavaArray.prototype = Object.create(($rt_objcls()).prototype);
        JavaArray.prototype.type = cls;
        JavaArray.prototype.constructor = JavaArray;
        JavaArray.prototype.toString = function() {
            let str = "[";
            for (let i = 0;i < this.data.length;++i) {
                if (i > 0) {
                    str += ", ";
                }
                str += this.data[i].toString();
            }
            str += "]";
            return str;
        };
        JavaArray.prototype.$clone0 = function() {
            let dataCopy;
            if ('slice' in this.data) {
                dataCopy = this.data.slice();
            } else {
                dataCopy = new this.data.constructor(this.data.length);
                for (let i = 0;i < dataCopy.length;++i) {
                    dataCopy[i] = this.data[i];
                }
            }
            return new ($rt_arraycls(this.type))(dataCopy);
        };
        let name = "[" + cls.$meta.binaryName;
        JavaArray.$meta = { item : cls, supertypes : [$rt_objcls()], primitive : false, superclass : $rt_objcls(), name : name, binaryName : name, enum : false, simpleName : null, declaringClass : null, enclosingClass : null };
        JavaArray.classObject = null;
        JavaArray.$array = null;
        result = JavaArray;
        cls.$array = JavaArray;
    }
    return result;
},
$rt_stringPool_instance,
$rt_stringPool = strings => {
    $rt_stringClassInit();
    $rt_stringPool_instance = new Array(strings.length);
    for (let i = 0;i < strings.length;++i) {
        $rt_stringPool_instance[i] = $rt_intern($rt_str(strings[i]));
    }
},
$rt_s = index => $rt_stringPool_instance[index],
$rt_charArrayToString = (array, offset, count) => {
    let result = "";
    let limit = offset + count;
    for (let i = offset;i < limit;i = i + 1024 | 0) {
        let next = Math.min(limit, i + 1024 | 0);
        result += String.fromCharCode.apply(null, array.subarray(i, next));
    }
    return result;
},
$rt_fullArrayToString = array => $rt_charArrayToString(array, 0, array.length),
$rt_stringToCharArray = (string, begin, dst, dstBegin, count) => {
    for (let i = 0;i < count;i = i + 1 | 0) {
        dst[dstBegin + i] = string.charCodeAt(begin + i);
    }
},
$rt_str = str => str === null ? null : jl_String__init_1(str),
$rt_ustr = str => str === null ? null : str.$nativeString,
$rt_stringClassInit = () => jl_String_$callClinit(),
$rt_intern;
{
    $rt_intern = str => str;
}
let $rt_isInstance = (obj, cls) => obj instanceof $rt_objcls() && !!obj.constructor.$meta && $rt_isAssignable(obj.constructor, cls),
$rt_isAssignable = (from, to) => {
    if (from === to) {
        return true;
    }
    let map = from.$meta.assignableCache;
    if (typeof map === 'undefined') {
        map = new Map();
        from.$meta.assignableCache = map;
    }
    let cachedResult = map.get(to);
    if (typeof cachedResult !== 'undefined') {
        return cachedResult;
    }
    if (to.$meta.item !== null) {
        let result = from.$meta.item !== null && $rt_isAssignable(from.$meta.item, to.$meta.item);
        map.set(to, result);
        return result;
    }
    let supertypes = from.$meta.supertypes;
    for (let i = 0;i < supertypes.length;i = i + 1 | 0) {
        if ($rt_isAssignable(supertypes[i], to)) {
            map.set(to, true);
            return true;
        }
    }
    map.set(to, false);
    return false;
},
$rt_throw = ex => {
    throw $rt_exception(ex);
},
$rt_javaExceptionProp = Symbol("javaException"),
$rt_exception = ex => {
    if (!ex.$jsException) {
        $rt_fillNativeException(ex);
    }
    return ex.$jsException;
},
$rt_fillNativeException = ex => {
    let javaCause = $rt_throwableCause(ex);
    let jsCause = javaCause !== null ? javaCause.$jsException : void 0;
    let cause = typeof jsCause === "object" ? { cause : jsCause } : void 0;
    let err = new JavaError("Java exception thrown", cause);
    if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(err);
    }
    err[$rt_javaExceptionProp] = ex;
    ex.$jsException = err;
    $rt_fillStack(err, ex);
},
$rt_fillStack = (err, ex) => {
    if (typeof $rt_decodeStack === "function" && err.stack) {
        let stack = $rt_decodeStack(err.stack);
        let javaStack = $rt_createArray($rt_stecls(), stack.length);
        let elem;
        let noStack = false;
        for (let i = 0;i < stack.length;++i) {
            let element = stack[i];
            elem = $rt_createStackElement($rt_str(element.className), $rt_str(element.methodName), $rt_str(element.fileName), element.lineNumber);
            if (elem == null) {
                noStack = true;
                break;
            }
            javaStack.data[i] = elem;
        }
        if (!noStack) {
            $rt_setStack(ex, javaStack);
        }
    }
},
JavaError;
if (typeof Reflect === 'object') {
    let defaultMessage = Symbol("defaultMessage");
    JavaError = function JavaError(message, cause) {
        let self = Reflect.construct(Error, [void 0, cause], JavaError);
        Object.setPrototypeOf(self, JavaError.prototype);
        self[defaultMessage] = message;
        return self;
    }
    ;
    JavaError.prototype = Object.create(Error.prototype, { constructor : { configurable : true, writable : true, value : JavaError }, message : { get() {
        try {
            let javaException = this[$rt_javaExceptionProp];
            if (typeof javaException === 'object') {
                let javaMessage = $rt_throwableMessage(javaException);
                if (typeof javaMessage === "object") {
                    return javaMessage !== null ? javaMessage.toString() : null;
                }
            }
            return this[defaultMessage];
        } catch (e){
            return "Exception occurred trying to extract Java exception message: " + e;
        }
    } } });
} else {
    JavaError = Error;
}
let $rt_javaException = e => e instanceof Error && typeof e[$rt_javaExceptionProp] === 'object' ? e[$rt_javaExceptionProp] : null,
$rt_wrapException = err => {
    let ex = err[$rt_javaExceptionProp];
    if (!ex) {
        ex = $rt_createException($rt_str("(JavaScript) " + err.toString()));
        err[$rt_javaExceptionProp] = ex;
        ex.$jsException = err;
        $rt_fillStack(err, ex);
    }
    return ex;
},
$rt_createException = message => jl_RuntimeException__init_1(message),
$rt_throwableMessage = t => jl_Throwable_getMessage(t),
$rt_throwableCause = t => jl_Throwable_getCause(t),
$rt_stecls = () => jl_StackTraceElement,
$rt_createStackElement = (className, methodName, fileName, lineNumber) => {
    {
        return null;
    }
},
$rt_setStack = (e, stack) => {
},
$rt_packageData = null,
$rt_packages = data => {
    let i = 0;
    let packages = new Array(data.length);
    for (let j = 0;j < data.length;++j) {
        let prefixIndex = data[i++];
        let prefix = prefixIndex >= 0 ? packages[prefixIndex] : "";
        packages[j] = prefix + data[i++] + ".";
    }
    $rt_packageData = packages;
},
$rt_metadata = data => {
    let packages = $rt_packageData;
    let i = 0;
    while (i < data.length) {
        let cls = data[i++];
        cls.$meta = {  };
        let m = cls.$meta;
        let className = data[i++];
        m.name = className !== 0 ? className : null;
        if (m.name !== null) {
            let packageIndex = data[i++];
            if (packageIndex >= 0) {
                m.name = packages[packageIndex] + m.name;
            }
        }
        m.binaryName = "L" + m.name + ";";
        let superclass = data[i++];
        m.superclass = superclass !== 0 ? superclass : null;
        m.supertypes = data[i++];
        if (m.superclass) {
            m.supertypes.push(m.superclass);
            cls.prototype = Object.create(m.superclass.prototype);
        } else {
            cls.prototype = {  };
        }
        let flags = data[i++];
        m.enum = (flags & 8) !== 0;
        m.flags = flags;
        m.primitive = false;
        m.item = null;
        cls.prototype.constructor = cls;
        cls.classObject = null;
        m.accessLevel = data[i++];
        let innerClassInfo = data[i++];
        if (innerClassInfo === 0) {
            m.simpleName = null;
            m.declaringClass = null;
            m.enclosingClass = null;
        } else {
            let enclosingClass = innerClassInfo[0];
            m.enclosingClass = enclosingClass !== 0 ? enclosingClass : null;
            let declaringClass = innerClassInfo[1];
            m.declaringClass = declaringClass !== 0 ? declaringClass : null;
            let simpleName = innerClassInfo[2];
            m.simpleName = simpleName !== 0 ? simpleName : null;
        }
        let clinit = data[i++];
        cls.$clinit = clinit !== 0 ? clinit : function() {
        };
        let virtualMethods = data[i++];
        if (virtualMethods !== 0) {
            for (let j = 0;j < virtualMethods.length;j += 2) {
                let name = virtualMethods[j];
                let func = virtualMethods[j + 1];
                if (typeof name === 'string') {
                    name = [name];
                }
                for (let k = 0;k < name.length;++k) {
                    cls.prototype[name[k]] = func;
                }
            }
        }
        cls.$array = null;
    }
},
$rt_startThread = (runner, callback) => {
    let result;
    try {
        result = runner();
    } catch (e){
        result = e;
    }
    if (typeof callback !== 'undefined') {
        callback(result);
    } else if (result instanceof Error) {
        throw result;
    }
};
function jl_Object() {
    this.$id$ = 0;
}
let jl_Object__init_ = $this => {
    return;
},
jl_Object__init_0 = () => {
    let var_0 = new jl_Object();
    jl_Object__init_(var_0);
    return var_0;
},
jl_Object_getClass = $this => {
    return jl_Class_getClass($this.constructor);
},
jl_Object_equals = ($this, $other) => {
    return $this !== $other ? 0 : 1;
},
jl_Object_toString = $this => {
    let var$1, var$2, var$3;
    var$1 = jl_Class_getName(jl_Object_getClass($this));
    var$2 = jl_Integer_toHexString(jl_Object_identity($this));
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$3, var$1), 64), var$2);
    return jl_StringBuilder_toString(var$3);
},
jl_Object_identity = $this => {
    let $platformThis;
    $platformThis = $this;
    if (!$platformThis.$id$)
        $platformThis.$id$ = $rt_nextId();
    return $this.$id$;
},
jl_Object_clone = $this => {
    let var$1, $result, var$3;
    if (!$rt_isInstance($this, jl_Cloneable)) {
        var$1 = $this;
        if (var$1.constructor.$meta.item === null)
            $rt_throw(jl_CloneNotSupportedException__init_0());
    }
    $result = otp_Platform_clone($this);
    var$1 = $result;
    var$3 = $rt_nextId();
    var$1.$id$ = var$3;
    return $result;
},
jl_Comparable = $rt_classWithoutFields(0),
ji_Serializable = $rt_classWithoutFields(0);
function jl_Enum() {
    let a = this; jl_Object.call(a);
    a.$name2 = null;
    a.$ordinal0 = 0;
}
let jl_Enum__init_ = ($this, $name, $ordinal) => {
    jl_Object__init_($this);
    $this.$name2 = $name;
    $this.$ordinal0 = $ordinal;
},
jl_Enum_name = $this => {
    return $this.$name2;
},
jl_Enum_ordinal = $this => {
    return $this.$ordinal0;
},
jl_Enum_getDeclaringClass = $this => {
    let $result;
    $result = jl_Object_getClass($this);
    if (!(jl_Class_getSuperclass($result)).$equals($rt_cls(jl_Enum)))
        $result = jl_Class_getSuperclass($result);
    return $result;
},
jl_Enum_compareTo = ($this, $o) => {
    let var$2, var$3, var$4, var$5;
    if (jl_Enum_getDeclaringClass($o) === jl_Enum_getDeclaringClass($this))
        return jl_Integer_compare($this.$ordinal0, jl_Enum_ordinal($o));
    var$2 = new jl_IllegalArgumentException;
    var$3 = jl_String_valueOf0(jl_Enum_getDeclaringClass($this));
    var$4 = jl_String_valueOf0(jl_Enum_getDeclaringClass($o));
    var$5 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$5, $rt_s(0)), var$3), $rt_s(1)), var$4);
    jl_IllegalArgumentException__init_0(var$2, jl_StringBuilder_toString(var$5));
    $rt_throw(var$2);
},
jl_Enum_compareTo0 = ($this, var$1) => {
    return jl_Enum_compareTo($this, var$1);
},
cpcm_SlotState = $rt_classWithoutFields(jl_Enum),
cpcm_SlotState_FREE = null,
cpcm_SlotState_WRITING = null,
cpcm_SlotState_PUBLISHED = null,
cpcm_SlotState_JOURNALED = null,
cpcm_SlotState_MATCHED = null,
cpcm_SlotState_DISPATCHED = null,
cpcm_SlotState_$VALUES = null,
cpcm_SlotState_$callClinit = () => {
    cpcm_SlotState_$callClinit = $rt_eraseClinit(cpcm_SlotState);
    cpcm_SlotState__clinit_();
},
cpcm_SlotState_values = () => {
    cpcm_SlotState_$callClinit();
    return cpcm_SlotState_$VALUES.$clone0();
},
cpcm_SlotState__init_0 = ($this, var$1, var$2) => {
    cpcm_SlotState_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
},
cpcm_SlotState__init_ = (var_0, var_1) => {
    let var_2 = new cpcm_SlotState();
    cpcm_SlotState__init_0(var_2, var_0, var_1);
    return var_2;
},
cpcm_SlotState_$values = () => {
    let var$1, var$2;
    cpcm_SlotState_$callClinit();
    var$1 = $rt_createArray(cpcm_SlotState, 6);
    var$2 = var$1.data;
    var$2[0] = cpcm_SlotState_FREE;
    var$2[1] = cpcm_SlotState_WRITING;
    var$2[2] = cpcm_SlotState_PUBLISHED;
    var$2[3] = cpcm_SlotState_JOURNALED;
    var$2[4] = cpcm_SlotState_MATCHED;
    var$2[5] = cpcm_SlotState_DISPATCHED;
    return var$1;
},
cpcm_SlotState__clinit_ = () => {
    cpcm_SlotState_FREE = cpcm_SlotState__init_($rt_s(2), 0);
    cpcm_SlotState_WRITING = cpcm_SlotState__init_($rt_s(3), 1);
    cpcm_SlotState_PUBLISHED = cpcm_SlotState__init_($rt_s(4), 2);
    cpcm_SlotState_JOURNALED = cpcm_SlotState__init_($rt_s(5), 3);
    cpcm_SlotState_MATCHED = cpcm_SlotState__init_($rt_s(6), 4);
    cpcm_SlotState_DISPATCHED = cpcm_SlotState__init_($rt_s(7), 5);
    cpcm_SlotState_$VALUES = cpcm_SlotState_$values();
};
function jl_Throwable() {
    let a = this; jl_Object.call(a);
    a.$message = null;
    a.$cause = null;
    a.$suppressionEnabled = 0;
    a.$writableStackTrace = 0;
}
let jl_Throwable__init_ = $this => {
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$fillInStackTrace();
},
jl_Throwable__init_2 = () => {
    let var_0 = new jl_Throwable();
    jl_Throwable__init_(var_0);
    return var_0;
},
jl_Throwable__init_0 = ($this, $message) => {
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$fillInStackTrace();
    $this.$message = $message;
},
jl_Throwable__init_1 = var_0 => {
    let var_1 = new jl_Throwable();
    jl_Throwable__init_0(var_1, var_0);
    return var_1;
},
jl_Throwable_fillInStackTrace = $this => {
    return $this;
},
jl_Throwable_initNativeException = $this => {
    $rt_fillNativeException($this);
},
jl_Throwable_getMessage = $this => {
    return $this.$message;
},
jl_Throwable_getCause = $this => {
    return $this.$cause === $this ? null : $this.$cause;
},
jl_Exception = $rt_classWithoutFields(jl_Throwable),
jl_Exception__init_ = $this => {
    jl_Throwable__init_($this);
},
jl_Exception__init_1 = () => {
    let var_0 = new jl_Exception();
    jl_Exception__init_(var_0);
    return var_0;
},
jl_Exception__init_0 = ($this, $message) => {
    jl_Throwable__init_0($this, $message);
},
jl_Exception__init_2 = var_0 => {
    let var_1 = new jl_Exception();
    jl_Exception__init_0(var_1, var_0);
    return var_1;
},
jl_RuntimeException = $rt_classWithoutFields(jl_Exception),
jl_RuntimeException__init_ = $this => {
    jl_Exception__init_($this);
},
jl_RuntimeException__init_2 = () => {
    let var_0 = new jl_RuntimeException();
    jl_RuntimeException__init_(var_0);
    return var_0;
},
jl_RuntimeException__init_0 = ($this, $message) => {
    jl_Exception__init_0($this, $message);
},
jl_RuntimeException__init_1 = var_0 => {
    let var_1 = new jl_RuntimeException();
    jl_RuntimeException__init_0(var_1, var_0);
    return var_1;
},
jl_IndexOutOfBoundsException = $rt_classWithoutFields(jl_RuntimeException),
jl_IndexOutOfBoundsException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
jl_IndexOutOfBoundsException__init_ = () => {
    let var_0 = new jl_IndexOutOfBoundsException();
    jl_IndexOutOfBoundsException__init_0(var_0);
    return var_0;
},
cpcm_OrderStatus = $rt_classWithoutFields(jl_Enum),
cpcm_OrderStatus_NEW = null,
cpcm_OrderStatus_PARTIALLY_FILLED = null,
cpcm_OrderStatus_FILLED = null,
cpcm_OrderStatus_CANCELLED = null,
cpcm_OrderStatus_REJECTED = null,
cpcm_OrderStatus_$VALUES = null,
cpcm_OrderStatus_$callClinit = () => {
    cpcm_OrderStatus_$callClinit = $rt_eraseClinit(cpcm_OrderStatus);
    cpcm_OrderStatus__clinit_();
},
cpcm_OrderStatus__init_0 = ($this, var$1, var$2) => {
    cpcm_OrderStatus_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
},
cpcm_OrderStatus__init_ = (var_0, var_1) => {
    let var_2 = new cpcm_OrderStatus();
    cpcm_OrderStatus__init_0(var_2, var_0, var_1);
    return var_2;
},
cpcm_OrderStatus_$values = () => {
    let var$1, var$2;
    cpcm_OrderStatus_$callClinit();
    var$1 = $rt_createArray(cpcm_OrderStatus, 5);
    var$2 = var$1.data;
    var$2[0] = cpcm_OrderStatus_NEW;
    var$2[1] = cpcm_OrderStatus_PARTIALLY_FILLED;
    var$2[2] = cpcm_OrderStatus_FILLED;
    var$2[3] = cpcm_OrderStatus_CANCELLED;
    var$2[4] = cpcm_OrderStatus_REJECTED;
    return var$1;
},
cpcm_OrderStatus__clinit_ = () => {
    cpcm_OrderStatus_NEW = cpcm_OrderStatus__init_($rt_s(8), 0);
    cpcm_OrderStatus_PARTIALLY_FILLED = cpcm_OrderStatus__init_($rt_s(9), 1);
    cpcm_OrderStatus_FILLED = cpcm_OrderStatus__init_($rt_s(10), 2);
    cpcm_OrderStatus_CANCELLED = cpcm_OrderStatus__init_($rt_s(11), 3);
    cpcm_OrderStatus_REJECTED = cpcm_OrderStatus__init_($rt_s(12), 4);
    cpcm_OrderStatus_$VALUES = cpcm_OrderStatus_$values();
},
jl_Record = $rt_classWithoutFields(),
jl_Record__init_ = $this => {
    jl_Object__init_($this);
};
function cpcm_Trade() {
    let a = this; jl_Record.call(a);
    a.$id6 = null;
    a.$buyOrderId = null;
    a.$sellOrderId = null;
    a.$buyerName = null;
    a.$sellerName = null;
    a.$price2 = 0.0;
    a.$size3 = 0.0;
    a.$timestamp2 = Long_ZERO;
    a.$aggressiveSide0 = null;
    a.$optionKey2 = null;
}
let cpcm_Trade__init_ = ($this, $id, $buyOrderId, $sellOrderId, $buyerName, $sellerName, $price, $size, $timestamp, $aggressiveSide, $optionKey) => {
    jl_Record__init_($this);
    $this.$id6 = $id;
    $this.$buyOrderId = $buyOrderId;
    $this.$sellOrderId = $sellOrderId;
    $this.$buyerName = $buyerName;
    $this.$sellerName = $sellerName;
    $this.$price2 = $price;
    $this.$size3 = $size;
    $this.$timestamp2 = $timestamp;
    $this.$aggressiveSide0 = $aggressiveSide;
    $this.$optionKey2 = $optionKey;
},
cpcm_Trade__init_0 = (var_0, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9) => {
    let var_10 = new cpcm_Trade();
    cpcm_Trade__init_(var_10, var_0, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9);
    return var_10;
},
cpcm_Trade_price = $this => {
    return $this.$price2;
},
cpcm_Trade_size = $this => {
    return $this.$size3;
},
cpcm_Trade_timestamp = $this => {
    return $this.$timestamp2;
},
cpcm_Trade_aggressiveSide = $this => {
    return $this.$aggressiveSide0;
};
function cpce_RingBuffer$Cursors() {
    let a = this; jl_Record.call(a);
    a.$producer0 = Long_ZERO;
    a.$journaler = Long_ZERO;
    a.$matching0 = Long_ZERO;
    a.$publisher = Long_ZERO;
}
let cpce_RingBuffer$Cursors__init_ = ($this, $producer, $journaler, $matching, $publisher) => {
    jl_Record__init_($this);
    $this.$producer0 = $producer;
    $this.$journaler = $journaler;
    $this.$matching0 = $matching;
    $this.$publisher = $publisher;
},
cpce_RingBuffer$Cursors__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new cpce_RingBuffer$Cursors();
    cpce_RingBuffer$Cursors__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
cpce_RingBuffer$Cursors_producer = $this => {
    return $this.$producer0;
},
cpce_RingBuffer$Cursors_matching = $this => {
    return $this.$matching0;
},
jl_Number = $rt_classWithoutFields(),
jl_Number__init_ = $this => {
    jl_Object__init_($this);
};
function jl_Integer() {
    jl_Number.call(this);
    this.$value1 = 0;
}
let jl_Integer_TYPE = null,
jl_Integer_integerCache = null,
jl_Integer_$callClinit = () => {
    jl_Integer_$callClinit = $rt_eraseClinit(jl_Integer);
    jl_Integer__clinit_();
},
jl_Integer__init_ = ($this, $value) => {
    jl_Integer_$callClinit();
    jl_Number__init_($this);
    $this.$value1 = $value;
},
jl_Integer__init_0 = var_0 => {
    let var_1 = new jl_Integer();
    jl_Integer__init_(var_1, var_0);
    return var_1;
},
jl_Integer_toString0 = ($i, $radix) => {
    jl_Integer_$callClinit();
    if (!($radix >= 2 && $radix <= 36))
        $radix = 10;
    return ((jl_AbstractStringBuilder__init_1(20)).$append1($i, $radix)).$toString();
},
jl_Integer_toHexString = $i => {
    jl_Integer_$callClinit();
    return otci_IntegerUtil_toUnsignedLogRadixString($i, 4);
},
jl_Integer_toString = $i => {
    jl_Integer_$callClinit();
    return jl_Integer_toString0($i, 10);
},
jl_Integer_valueOf = $i => {
    jl_Integer_$callClinit();
    if ($i >= (-128) && $i <= 127) {
        jl_Integer_ensureIntegerCache();
        return jl_Integer_integerCache.data[$i + 128 | 0];
    }
    return jl_Integer__init_0($i);
},
jl_Integer_ensureIntegerCache = () => {
    let $j;
    jl_Integer_$callClinit();
    a: {
        if (jl_Integer_integerCache === null) {
            jl_Integer_integerCache = $rt_createArray(jl_Integer, 256);
            $j = 0;
            while (true) {
                if ($j >= jl_Integer_integerCache.data.length)
                    break a;
                jl_Integer_integerCache.data[$j] = jl_Integer__init_0($j - 128 | 0);
                $j = $j + 1 | 0;
            }
        }
    }
},
jl_Integer_intValue = $this => {
    return $this.$value1;
},
jl_Integer_toString1 = $this => {
    return jl_Integer_toString($this.$value1);
},
jl_Integer_equals = ($this, $other) => {
    if ($this === $other)
        return 1;
    return $other instanceof jl_Integer && $other.$value1 == $this.$value1 ? 1 : 0;
},
jl_Integer_compareTo = ($this, $other) => {
    return jl_Integer_compare($this.$value1, $other.$value1);
},
jl_Integer_compare = (var$1, var$2) => {
    jl_Integer_$callClinit();
    return $rt_compare(var$1, var$2);
},
jl_Integer_numberOfLeadingZeros = $i => {
    let $n, var$3, var$4;
    jl_Integer_$callClinit();
    if (!$i)
        return 32;
    $n = 0;
    var$3 = $i >>> 16 | 0;
    if (var$3)
        $n = 16;
    else
        var$3 = $i;
    var$4 = var$3 >>> 8 | 0;
    if (!var$4)
        var$4 = var$3;
    else
        $n = $n | 8;
    var$3 = var$4 >>> 4 | 0;
    if (!var$3)
        var$3 = var$4;
    else
        $n = $n | 4;
    var$4 = var$3 >>> 2 | 0;
    if (!var$4)
        var$4 = var$3;
    else
        $n = $n | 2;
    if (var$4 >>> 1 | 0)
        $n = $n | 1;
    return (32 - $n | 0) - 1 | 0;
},
jl_Integer_numberOfTrailingZeros = $i => {
    let $n, var$3, var$4;
    jl_Integer_$callClinit();
    if (!$i)
        return 32;
    $n = 0;
    var$3 = $i << 16;
    if (var$3)
        $n = 16;
    else
        var$3 = $i;
    var$4 = var$3 << 8;
    if (!var$4)
        var$4 = var$3;
    else
        $n = $n | 8;
    var$3 = var$4 << 4;
    if (!var$3)
        var$3 = var$4;
    else
        $n = $n | 4;
    var$4 = var$3 << 2;
    if (!var$4)
        var$4 = var$3;
    else
        $n = $n | 2;
    if (var$4 << 1)
        $n = $n | 1;
    return (32 - $n | 0) - 1 | 0;
},
jl_Integer_highestOneBit = $i => {
    jl_Integer_$callClinit();
    return $i & ((-2147483648) >>> jl_Integer_numberOfLeadingZeros($i) | 0);
},
jl_Integer_signum = $i => {
    jl_Integer_$callClinit();
    return $i >> 31 | (( -$i | 0) >>> 31 | 0);
},
jl_Integer_compareTo0 = ($this, var$1) => {
    return $this.$compareTo0(var$1);
},
jl_Integer__clinit_ = () => {
    jl_Integer_TYPE = $rt_cls($rt_intcls);
},
cpcs_Ui$InputHandler = $rt_classWithoutFields(0);
function cpce_MatchingEngineStudio$_init_$lambda$_0_10() {
    jl_Object.call(this);
    this.$_066 = null;
}
let cpce_MatchingEngineStudio$_init_$lambda$_0_10__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_066 = var$1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_10__init_0 = var_0 => {
    let var_1 = new cpce_MatchingEngineStudio$_init_$lambda$_0_10();
    cpce_MatchingEngineStudio$_init_$lambda$_0_10__init_(var_1, var_0);
    return var_1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_10_handle = (var$0, var$1) => {
    cpce_MatchingEngineStudio_lambda$new$9(var$0.$_066, var$1);
},
jl_Runnable = $rt_classWithoutFields(0),
cpce_MatchingEngineStudio$_init_$lambda$_0_11 = $rt_classWithoutFields(),
cpce_MatchingEngineStudio$_init_$lambda$_0_11__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cpce_MatchingEngineStudio$_init_$lambda$_0_11__init_0 = () => {
    let var_0 = new cpce_MatchingEngineStudio$_init_$lambda$_0_11();
    cpce_MatchingEngineStudio$_init_$lambda$_0_11__init_(var_0);
    return var_0;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_11_run = var$0 => {
    cpce_MatchingEngineStudio_lambda$new$10();
},
jl_CloneNotSupportedException = $rt_classWithoutFields(jl_Exception),
jl_CloneNotSupportedException__init_ = $this => {
    jl_Exception__init_($this);
},
jl_CloneNotSupportedException__init_0 = () => {
    let var_0 = new jl_CloneNotSupportedException();
    jl_CloneNotSupportedException__init_(var_0);
    return var_0;
},
otj_JSObject = $rt_classWithoutFields(0),
cpcj_Js$VoidCb = $rt_classWithoutFields(0);
function cpce_MatchingEngineStudio$_init_$lambda$_0_12() {
    jl_Object.call(this);
    this.$_012 = null;
}
let cpce_MatchingEngineStudio$_init_$lambda$_0_12__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_012 = var$1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_12__init_0 = var_0 => {
    let var_1 = new cpce_MatchingEngineStudio$_init_$lambda$_0_12();
    cpce_MatchingEngineStudio$_init_$lambda$_0_12__init_(var_1, var_0);
    return var_1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_12_call = var$0 => {
    cpce_MatchingEngineStudio_telemetryTick(var$0.$_012);
},
cpce_MatchingEngineStudio$_init_$lambda$_0_12_call$exported$0 = var$1 => {
    var$1.$call();
},
jm_BigDecimal$1 = $rt_classWithoutFields(),
jm_BigDecimal$1_$SwitchMap$org$teavm$classlib$java$math$TRoundingMode = null,
jm_BigDecimal$1_$callClinit = () => {
    jm_BigDecimal$1_$callClinit = $rt_eraseClinit(jm_BigDecimal$1);
    jm_BigDecimal$1__clinit_();
},
jm_BigDecimal$1__clinit_ = () => {
    jm_BigDecimal$1_$SwitchMap$org$teavm$classlib$java$math$TRoundingMode = $rt_createIntArray((jm_RoundingMode_values()).data.length);
    jm_BigDecimal$1_$SwitchMap$org$teavm$classlib$java$math$TRoundingMode.data[jl_Enum_ordinal(jm_RoundingMode_UNNECESSARY)] = 1;
    jm_BigDecimal$1_$SwitchMap$org$teavm$classlib$java$math$TRoundingMode.data[jl_Enum_ordinal(jm_RoundingMode_UP)] = 2;
    jm_BigDecimal$1_$SwitchMap$org$teavm$classlib$java$math$TRoundingMode.data[jl_Enum_ordinal(jm_RoundingMode_DOWN)] = 3;
    jm_BigDecimal$1_$SwitchMap$org$teavm$classlib$java$math$TRoundingMode.data[jl_Enum_ordinal(jm_RoundingMode_CEILING)] = 4;
    jm_BigDecimal$1_$SwitchMap$org$teavm$classlib$java$math$TRoundingMode.data[jl_Enum_ordinal(jm_RoundingMode_FLOOR)] = 5;
    jm_BigDecimal$1_$SwitchMap$org$teavm$classlib$java$math$TRoundingMode.data[jl_Enum_ordinal(jm_RoundingMode_HALF_UP)] = 6;
    jm_BigDecimal$1_$SwitchMap$org$teavm$classlib$java$math$TRoundingMode.data[jl_Enum_ordinal(jm_RoundingMode_HALF_DOWN)] = 7;
    jm_BigDecimal$1_$SwitchMap$org$teavm$classlib$java$math$TRoundingMode.data[jl_Enum_ordinal(jm_RoundingMode_HALF_EVEN)] = 8;
},
otjdx_Node = $rt_classWithoutFields(0),
otjdx_Document = $rt_classWithoutFields(0),
otjde_EventTarget = $rt_classWithoutFields(0),
otjdh_HTMLDocument = $rt_classWithoutFields(),
otjdh_HTMLDocument_current = () => {
    return window.document;
};
function jl_Long() {
    jl_Number.call(this);
    this.$value3 = Long_ZERO;
}
let jl_Long_TYPE = null,
jl_Long_$callClinit = () => {
    jl_Long_$callClinit = $rt_eraseClinit(jl_Long);
    jl_Long__clinit_();
},
jl_Long__init_ = ($this, $value) => {
    jl_Long_$callClinit();
    jl_Number__init_($this);
    $this.$value3 = $value;
},
jl_Long__init_0 = var_0 => {
    let var_1 = new jl_Long();
    jl_Long__init_(var_1, var_0);
    return var_1;
},
jl_Long_valueOf = $value => {
    jl_Long_$callClinit();
    return jl_Long__init_0($value);
},
jl_Long_longValue = $this => {
    return $this.$value3;
},
jl_Long_numberOfLeadingZeros = $i => {
    let $n, var$3, var$4;
    jl_Long_$callClinit();
    if (Long_eq($i, Long_ZERO))
        return 64;
    $n = 0;
    var$3 = Long_shru($i, 32);
    if (Long_ne(var$3, Long_ZERO))
        $n = 32;
    else
        var$3 = $i;
    var$4 = Long_shru(var$3, 16);
    if (Long_eq(var$4, Long_ZERO))
        var$4 = var$3;
    else
        $n = $n | 16;
    var$3 = Long_shru(var$4, 8);
    if (Long_eq(var$3, Long_ZERO))
        var$3 = var$4;
    else
        $n = $n | 8;
    var$4 = Long_shru(var$3, 4);
    if (Long_eq(var$4, Long_ZERO))
        var$4 = var$3;
    else
        $n = $n | 4;
    var$3 = Long_shru(var$4, 2);
    if (Long_eq(var$3, Long_ZERO))
        var$3 = var$4;
    else
        $n = $n | 2;
    if (Long_ne(Long_shru(var$3, 1), Long_ZERO))
        $n = $n | 1;
    return (64 - $n | 0) - 1 | 0;
},
jl_Long_numberOfTrailingZeros = $i => {
    let $n, var$3, var$4;
    jl_Long_$callClinit();
    if (Long_eq($i, Long_ZERO))
        return 64;
    $n = 0;
    var$3 = Long_shl($i, 32);
    if (Long_ne(var$3, Long_ZERO))
        $n = 32;
    else
        var$3 = $i;
    var$4 = Long_shl(var$3, 16);
    if (Long_eq(var$4, Long_ZERO))
        var$4 = var$3;
    else
        $n = $n | 16;
    var$3 = Long_shl(var$4, 8);
    if (Long_eq(var$3, Long_ZERO))
        var$3 = var$4;
    else
        $n = $n | 8;
    var$4 = Long_shl(var$3, 4);
    if (Long_eq(var$4, Long_ZERO))
        var$4 = var$3;
    else
        $n = $n | 4;
    var$3 = Long_shl(var$4, 2);
    if (Long_eq(var$3, Long_ZERO))
        var$3 = var$4;
    else
        $n = $n | 2;
    if (Long_ne(Long_shl(var$3, 1), Long_ZERO))
        $n = $n | 1;
    return (64 - $n | 0) - 1 | 0;
},
jl_Long_signum = $i => {
    jl_Long_$callClinit();
    return Long_lo(Long_or(Long_shr($i, 63), Long_shru(Long_neg($i), 63)));
},
jl_Long_divideUnsigned = (var$1, var$2) => {
    return Long_udiv(var$1, var$2);
},
jl_Long_remainderUnsigned = (var$1, var$2) => {
    return Long_urem(var$1, var$2);
},
jl_Long_compareUnsigned = (var$1, var$2) => {
    return Long_ucompare(var$1, var$2);
},
jl_Long__clinit_ = () => {
    jl_Long_TYPE = $rt_cls($rt_longcls);
},
ju_Map = $rt_classWithoutFields(0),
ju_Map_computeIfAbsent = ($this, $key, $mappingFunction) => {
    let $v, $newValue;
    ju_Objects_requireNonNull($mappingFunction);
    $v = $this.$get($key);
    if ($v !== null)
        return $v;
    $newValue = $mappingFunction.$apply($key);
    if ($newValue !== null)
        $this.$put($key, $newValue);
    return $newValue;
};
function jm_BigInteger() {
    let a = this; jl_Number.call(a);
    a.$digits = null;
    a.$numberLength = 0;
    a.$sign0 = 0;
    a.$firstNonzeroDigit = 0;
}
let jm_BigInteger_ZERO = null,
jm_BigInteger_ONE = null,
jm_BigInteger_TWO = null,
jm_BigInteger_TEN = null,
jm_BigInteger_MINUS_ONE = null,
jm_BigInteger_SMALL_VALUES = null,
jm_BigInteger_TWO_POWS = null,
jm_BigInteger_$callClinit = () => {
    jm_BigInteger_$callClinit = $rt_eraseClinit(jm_BigInteger);
    jm_BigInteger__clinit_();
},
jm_BigInteger__init_2 = ($this, $sign, $value) => {
    let var$3;
    jm_BigInteger_$callClinit();
    jl_Number__init_($this);
    $this.$firstNonzeroDigit = (-2);
    $this.$sign0 = $sign;
    $this.$numberLength = 1;
    var$3 = $rt_createIntArray(1);
    var$3.data[0] = $value;
    $this.$digits = var$3;
},
jm_BigInteger__init_0 = (var_0, var_1) => {
    let var_2 = new jm_BigInteger();
    jm_BigInteger__init_2(var_2, var_0, var_1);
    return var_2;
},
jm_BigInteger__init_3 = ($this, $sign, $numberLength, $digits) => {
    jm_BigInteger_$callClinit();
    jl_Number__init_($this);
    $this.$firstNonzeroDigit = (-2);
    $this.$sign0 = $sign;
    $this.$numberLength = $numberLength;
    $this.$digits = $digits;
},
jm_BigInteger__init_ = (var_0, var_1, var_2) => {
    let var_3 = new jm_BigInteger();
    jm_BigInteger__init_3(var_3, var_0, var_1, var_2);
    return var_3;
},
jm_BigInteger__init_1 = ($this, $sign, $val) => {
    let var$3;
    jm_BigInteger_$callClinit();
    jl_Number__init_($this);
    $this.$firstNonzeroDigit = (-2);
    $this.$sign0 = $sign;
    if (Long_eq(Long_and($val, Long_create(0, 4294967295)), Long_ZERO)) {
        $this.$numberLength = 1;
        var$3 = $rt_createIntArray(1);
        var$3.data[0] = Long_lo($val);
        $this.$digits = var$3;
    } else {
        $this.$numberLength = 2;
        $this.$digits = $rt_createIntArrayFromData([Long_lo($val), Long_hi($val)]);
    }
},
jm_BigInteger__init_4 = (var_0, var_1) => {
    let var_2 = new jm_BigInteger();
    jm_BigInteger__init_1(var_2, var_0, var_1);
    return var_2;
},
jm_BigInteger__init_5 = ($this, $signum, $digits) => {
    let var$3, var$4;
    jm_BigInteger_$callClinit();
    var$3 = $digits.data;
    jl_Number__init_($this);
    $this.$firstNonzeroDigit = (-2);
    var$4 = var$3.length;
    if (var$4) {
        $this.$sign0 = $signum;
        $this.$numberLength = var$4;
        $this.$digits = $digits;
        jm_BigInteger_cutOffLeadingZeroes($this);
    } else {
        $this.$sign0 = 0;
        $this.$numberLength = 1;
        var$3 = $rt_createIntArray(1);
        var$3.data[0] = 0;
        $this.$digits = var$3;
    }
},
jm_BigInteger__init_6 = (var_0, var_1) => {
    let var_2 = new jm_BigInteger();
    jm_BigInteger__init_5(var_2, var_0, var_1);
    return var_2;
},
jm_BigInteger_valueOf = $val => {
    jm_BigInteger_$callClinit();
    if (Long_lt($val, Long_ZERO)) {
        if (Long_eq($val, Long_fromInt(-1)))
            return jm_BigInteger_MINUS_ONE;
        return jm_BigInteger__init_4((-1), Long_neg($val));
    }
    if (Long_gt($val, Long_fromInt(10)))
        return jm_BigInteger__init_4(1, $val);
    return jm_BigInteger_SMALL_VALUES.data[Long_lo($val)];
},
jm_BigInteger_abs = $this => {
    if ($this.$sign0 < 0)
        $this = jm_BigInteger__init_(1, $this.$numberLength, $this.$digits);
    return $this;
},
jm_BigInteger_negate = $this => {
    return !$this.$sign0 ? $this : jm_BigInteger__init_( -$this.$sign0 | 0, $this.$numberLength, $this.$digits);
},
jm_BigInteger_add = ($this, $val) => {
    return jm_Elementary_add1($this, $val);
},
jm_BigInteger_subtract = ($this, $val) => {
    return jm_Elementary_subtract0($this, $val);
},
jm_BigInteger_signum = $this => {
    return $this.$sign0;
},
jm_BigInteger_shiftRight = ($this, $n) => {
    if ($n && $this.$sign0)
        return $n > 0 ? jm_BitLevel_shiftRight($this, $n) : jm_BitLevel_shiftLeft0($this,  -$n | 0);
    return $this;
},
jm_BigInteger_shiftLeft = ($this, $n) => {
    if ($n && $this.$sign0)
        return $n > 0 ? jm_BitLevel_shiftLeft0($this, $n) : jm_BitLevel_shiftRight($this,  -$n | 0);
    return $this;
},
jm_BigInteger_shiftLeftOneBit = $this => {
    if ($this.$sign0)
        $this = jm_BitLevel_shiftLeftOneBit0($this);
    return $this;
},
jm_BigInteger_bitLength = $this => {
    return jm_BitLevel_bitLength($this);
},
jm_BigInteger_testBit = ($this, $n) => {
    let $intCount, $digit, var$4, $firstNonZeroDigit;
    if (!$n)
        return !($this.$digits.data[0] & 1) ? 0 : 1;
    if ($n < 0)
        $rt_throw(jl_ArithmeticException__init_($rt_s(13)));
    $intCount = $n >> 5;
    if ($intCount >= $this.$numberLength)
        return $this.$sign0 >= 0 ? 0 : 1;
    $digit = $this.$digits.data[$intCount];
    var$4 = 1 << ($n & 31);
    if ($this.$sign0 < 0) {
        $firstNonZeroDigit = $this.$getFirstNonzeroDigit();
        if ($intCount < $firstNonZeroDigit)
            return 0;
        $digit = $firstNonZeroDigit == $intCount ?  -$digit | 0 : $digit ^ (-1);
    }
    return !($digit & var$4) ? 0 : 1;
},
jm_BigInteger_getLowestSetBit = $this => {
    let $i;
    if (!$this.$sign0)
        return (-1);
    $i = $this.$getFirstNonzeroDigit();
    return ($i << 5) + jl_Integer_numberOfTrailingZeros($this.$digits.data[$i]) | 0;
},
jm_BigInteger_longValue = $this => {
    let $value;
    $value = $this.$numberLength <= 1 ? Long_and(Long_fromInt($this.$digits.data[0]), Long_create(4294967295, 0)) : Long_or(Long_shl(Long_fromInt($this.$digits.data[1]), 32), Long_and(Long_fromInt($this.$digits.data[0]), Long_create(4294967295, 0)));
    return Long_mul(Long_fromInt($this.$sign0), $value);
},
jm_BigInteger_compareTo = ($this, $val) => {
    if ($this.$sign0 > $val.$sign0)
        return 1;
    if ($this.$sign0 < $val.$sign0)
        return (-1);
    if ($this.$numberLength > $val.$numberLength)
        return $this.$sign0;
    if ($this.$numberLength < $val.$numberLength)
        return  -$val.$sign0 | 0;
    return $rt_imul($this.$sign0, jm_Elementary_compareArrays($this.$digits, $val.$digits, $this.$numberLength));
},
jm_BigInteger_equals = ($this, $x) => {
    let $x1;
    if ($this === $x)
        return 1;
    if (!($x instanceof jm_BigInteger))
        return 0;
    $x1 = $x;
    return $this.$sign0 == $x1.$sign0 && $this.$numberLength == $x1.$numberLength && $this.$equalsArrays($x1.$digits) ? 1 : 0;
},
jm_BigInteger_equalsArrays = ($this, $b) => {
    let $i, var$3;
    $i = $this.$numberLength - 1 | 0;
    while ($i >= 0) {
        var$3 = $b.data;
        if ($this.$digits.data[$i] != var$3[$i])
            break;
        $i = $i + (-1) | 0;
    }
    return $i >= 0 ? 0 : 1;
},
jm_BigInteger_multiply = ($this, $val) => {
    if (!$val.$sign0) {
        jm_BigInteger_$callClinit();
        return jm_BigInteger_ZERO;
    }
    if ($this.$sign0)
        return jm_Multiplication_multiply($this, $val);
    jm_BigInteger_$callClinit();
    return jm_BigInteger_ZERO;
},
jm_BigInteger_pow = ($this, $exp) => {
    let $x;
    if ($exp < 0)
        $rt_throw(jl_ArithmeticException__init_($rt_s(14)));
    if (!$exp) {
        jm_BigInteger_$callClinit();
        return jm_BigInteger_ONE;
    }
    if ($exp != 1) {
        jm_BigInteger_$callClinit();
        if (!$this.$equals(jm_BigInteger_ONE) && !$this.$equals(jm_BigInteger_ZERO)) {
            if ($this.$testBit(0))
                return jm_Multiplication_pow($this, $exp);
            $x = 1;
            while (!$this.$testBit($x)) {
                $x = $x + 1 | 0;
            }
            return (jm_BigInteger_getPowerOfTwo($rt_imul($x, $exp))).$multiply0(($this.$shiftRight0($x)).$pow0($exp));
        }
    }
    return $this;
},
jm_BigInteger_divideAndRemainder = ($this, $divisor) => {
    let $divisorSign, $divisorLen, $divisorDigits, $thisDigits, $thisLen, var$7, $cmp, var$9, var$10, $thisSign, $quotientLength, $quotientSign, $quotientDigits, $remainderDigits, $result0, $result1;
    $divisorSign = $divisor.$sign0;
    if (!$divisorSign)
        $rt_throw(jl_ArithmeticException__init_($rt_s(15)));
    $divisorLen = $divisor.$numberLength;
    $divisorDigits = $divisor.$digits;
    if ($divisorLen == 1)
        return jm_Division_divideAndRemainderByInteger($this, $divisorDigits.data[0], $divisorSign);
    $thisDigits = $this.$digits;
    $thisLen = $this.$numberLength;
    var$7 = $rt_compare($thisLen, $divisorLen);
    $cmp = !var$7 ? jm_Elementary_compareArrays($thisDigits, $divisorDigits, $thisLen) : var$7 <= 0 ? (-1) : 1;
    if ($cmp < 0) {
        var$9 = $rt_createArray(jm_BigInteger, 2);
        var$10 = var$9.data;
        jm_BigInteger_$callClinit();
        var$10[0] = jm_BigInteger_ZERO;
        var$10[1] = $this;
        return var$9;
    }
    $thisSign = $this.$sign0;
    $quotientLength = ($thisLen - $divisorLen | 0) + 1 | 0;
    $quotientSign = $thisSign != $divisorSign ? (-1) : 1;
    $quotientDigits = $rt_createIntArray($quotientLength);
    $remainderDigits = jm_Division_divide($quotientDigits, $quotientLength, $thisDigits, $thisLen, $divisorDigits, $divisorLen);
    $result0 = jm_BigInteger__init_($quotientSign, $quotientLength, $quotientDigits);
    $result1 = jm_BigInteger__init_($thisSign, $divisorLen, $remainderDigits);
    jm_BigInteger_cutOffLeadingZeroes($result0);
    jm_BigInteger_cutOffLeadingZeroes($result1);
    return $rt_wrapArray(jm_BigInteger, [$result0, $result1]);
},
jm_BigInteger_cutOffLeadingZeroes = $this => {
    let var$1, var$2, var$3;
    while ($this.$numberLength > 0) {
        var$1 = $this.$digits.data;
        var$2 = $this.$numberLength - 1 | 0;
        $this.$numberLength = var$2;
        if (var$1[var$2])
            break;
    }
    var$1 = $this.$digits.data;
    var$3 = $this.$numberLength;
    $this.$numberLength = var$3 + 1 | 0;
    if (!var$1[var$3])
        $this.$sign0 = 0;
},
jm_BigInteger_getFirstNonzeroDigit = $this => {
    let $i;
    if ($this.$firstNonzeroDigit == (-2)) {
        if (!$this.$sign0)
            $i = (-1);
        else {
            $i = 0;
            while (!$this.$digits.data[$i]) {
                $i = $i + 1 | 0;
            }
        }
        $this.$firstNonzeroDigit = $i;
    }
    return $this.$firstNonzeroDigit;
},
jm_BigInteger_getPowerOfTwo = $exp => {
    let $intCount, $bitN, var$4, $resDigits, var$6;
    jm_BigInteger_$callClinit();
    if ($exp < jm_BigInteger_TWO_POWS.data.length)
        return jm_BigInteger_TWO_POWS.data[$exp];
    $intCount = $exp >> 5;
    $bitN = $exp & 31;
    var$4 = $intCount + 1 | 0;
    $resDigits = $rt_createIntArray(var$4);
    var$6 = $resDigits.data;
    var$6[$intCount] = 1 << $bitN;
    return jm_BigInteger__init_(1, var$4, $resDigits);
},
jm_BigInteger__clinit_ = () => {
    let var$1, var$2, $i;
    jm_BigInteger_ZERO = jm_BigInteger__init_0(0, 0);
    jm_BigInteger_ONE = jm_BigInteger__init_0(1, 1);
    jm_BigInteger_TWO = jm_BigInteger__init_0(1, 2);
    jm_BigInteger_TEN = jm_BigInteger__init_0(1, 10);
    jm_BigInteger_MINUS_ONE = jm_BigInteger__init_0((-1), 1);
    var$1 = $rt_createArray(jm_BigInteger, 11);
    var$2 = var$1.data;
    var$2[0] = jm_BigInteger_ZERO;
    var$2[1] = jm_BigInteger_ONE;
    var$2[2] = jm_BigInteger_TWO;
    var$2[3] = jm_BigInteger__init_0(1, 3);
    var$2[4] = jm_BigInteger__init_0(1, 4);
    var$2[5] = jm_BigInteger__init_0(1, 5);
    var$2[6] = jm_BigInteger__init_0(1, 6);
    var$2[7] = jm_BigInteger__init_0(1, 7);
    var$2[8] = jm_BigInteger__init_0(1, 8);
    var$2[9] = jm_BigInteger__init_0(1, 9);
    var$2[10] = jm_BigInteger_TEN;
    jm_BigInteger_SMALL_VALUES = var$1;
    jm_BigInteger_TWO_POWS = $rt_createArray(jm_BigInteger, 32);
    $i = 0;
    while ($i < jm_BigInteger_TWO_POWS.data.length) {
        jm_BigInteger_TWO_POWS.data[$i] = jm_BigInteger_valueOf(Long_shl(Long_fromInt(1), $i));
        $i = $i + 1 | 0;
    }
},
jl_ArithmeticException = $rt_classWithoutFields(jl_RuntimeException),
jl_ArithmeticException__init_0 = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_ArithmeticException__init_ = var_0 => {
    let var_1 = new jl_ArithmeticException();
    jl_ArithmeticException__init_0(var_1, var_0);
    return var_1;
};
function cpcm_McqConsensusView$_init_$lambda$_0_0() {
    jl_Object.call(this);
    this.$_075 = null;
}
let cpcm_McqConsensusView$_init_$lambda$_0_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_075 = var$1;
},
cpcm_McqConsensusView$_init_$lambda$_0_0__init_0 = var_0 => {
    let var_1 = new cpcm_McqConsensusView$_init_$lambda$_0_0();
    cpcm_McqConsensusView$_init_$lambda$_0_0__init_(var_1, var_0);
    return var_1;
},
cpcm_McqConsensusView$_init_$lambda$_0_0_handle = (var$0, var$1) => {
    cpcm_McqConsensusView_lambda$new$0(var$0.$_075, var$1);
},
jl_CharSequence = $rt_classWithoutFields(0);
function cpcm_McqConsensusView$_init_$lambda$_0_2() {
    jl_Object.call(this);
    this.$_029 = null;
}
let cpcm_McqConsensusView$_init_$lambda$_0_2__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_029 = var$1;
},
cpcm_McqConsensusView$_init_$lambda$_0_2__init_0 = var_0 => {
    let var_1 = new cpcm_McqConsensusView$_init_$lambda$_0_2();
    cpcm_McqConsensusView$_init_$lambda$_0_2__init_(var_1, var_0);
    return var_1;
},
cpcm_McqConsensusView$_init_$lambda$_0_2_run = var$0 => {
    cpcm_McqConsensusView_reveal(var$0.$_029);
};
function cpcm_McqConsensusView$_init_$lambda$_0_1() {
    jl_Object.call(this);
    this.$_011 = null;
}
let cpcm_McqConsensusView$_init_$lambda$_0_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_011 = var$1;
},
cpcm_McqConsensusView$_init_$lambda$_0_1__init_0 = var_0 => {
    let var_1 = new cpcm_McqConsensusView$_init_$lambda$_0_1();
    cpcm_McqConsensusView$_init_$lambda$_0_1__init_(var_1, var_0);
    return var_1;
},
cpcm_McqConsensusView$_init_$lambda$_0_1_run = var$0 => {
    cpcm_McqConsensusView_startPoll(var$0.$_011);
};
function cpcw_BotSwarm$restartLoop$lambda$_15_0() {
    jl_Object.call(this);
    this.$_065 = null;
}
let cpcw_BotSwarm$restartLoop$lambda$_15_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_065 = var$1;
},
cpcw_BotSwarm$restartLoop$lambda$_15_0__init_0 = var_0 => {
    let var_1 = new cpcw_BotSwarm$restartLoop$lambda$_15_0();
    cpcw_BotSwarm$restartLoop$lambda$_15_0__init_(var_1, var_0);
    return var_1;
},
cpcw_BotSwarm$restartLoop$lambda$_15_0_call = var$0 => {
    cpcw_BotSwarm_tick(var$0.$_065);
},
cpcw_BotSwarm$restartLoop$lambda$_15_0_call$exported$0 = var$1 => {
    var$1.$call();
},
ju_SequencedMap = $rt_classWithoutFields(0);
function cpcm_McqConsensusView$_init_$lambda$_0_4() {
    let a = this; jl_Object.call(a);
    a.$_073 = null;
    a.$_113 = 0;
}
let cpcm_McqConsensusView$_init_$lambda$_0_4__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_073 = var$1;
    var$0.$_113 = var$2;
},
cpcm_McqConsensusView$_init_$lambda$_0_4__init_0 = (var_0, var_1) => {
    let var_2 = new cpcm_McqConsensusView$_init_$lambda$_0_4();
    cpcm_McqConsensusView$_init_$lambda$_0_4__init_(var_2, var_0, var_1);
    return var_2;
},
cpcm_McqConsensusView$_init_$lambda$_0_4_run = var$0 => {
    cpcm_McqConsensusView_lambda$new$1(var$0.$_073, var$0.$_113);
};
function cpcm_McqConsensusView$_init_$lambda$_0_3() {
    jl_Object.call(this);
    this.$_049 = null;
}
let cpcm_McqConsensusView$_init_$lambda$_0_3__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_049 = var$1;
},
cpcm_McqConsensusView$_init_$lambda$_0_3__init_0 = var_0 => {
    let var_1 = new cpcm_McqConsensusView$_init_$lambda$_0_3();
    cpcm_McqConsensusView$_init_$lambda$_0_3__init_(var_1, var_0);
    return var_1;
},
cpcm_McqConsensusView$_init_$lambda$_0_3_run = var$0 => {
    cpcm_McqConsensusView_nextQuestion(var$0.$_049);
},
jl_StringIndexOutOfBoundsException = $rt_classWithoutFields(jl_IndexOutOfBoundsException),
jl_StringIndexOutOfBoundsException__init_0 = $this => {
    jl_IndexOutOfBoundsException__init_0($this);
},
jl_StringIndexOutOfBoundsException__init_ = () => {
    let var_0 = new jl_StringIndexOutOfBoundsException();
    jl_StringIndexOutOfBoundsException__init_0(var_0);
    return var_0;
},
cpcj_Js = $rt_classWithoutFields(),
cpcj_Js_clockString$js_body$_12 = () => {
    return (new Date()).toLocaleTimeString('en-US', { hour : 'numeric', minute : '2-digit' });
},
cpcj_Js_download$js_body$_13 = (var$1, var$2) => {
    var a = document.createElement('a');
    a.href = var$2;
    a.download = var$1;
    document.body.appendChild(a);
    a.click();
    a.remove();
},
cpcj_Js_createBlobUrl$js_body$_14 = (var$1, var$2) => {
    return URL.createObjectURL(new Blob([var$1], { type : var$2 }));
},
otci_Base46 = $rt_classWithoutFields(),
otci_Base46_decodeUnsigned = var$1 => {
    let var$2, $pos, var$4, var$5, $digit, $hasMore;
    var$2 = 0;
    $pos = 1;
    while (true) {
        var$4 = var$1.$characters.data;
        var$5 = var$1.$pointer;
        var$1.$pointer = var$5 + 1 | 0;
        $digit = otci_Base46_decodeDigit(var$4[var$5]);
        $hasMore = ($digit % 2 | 0) != 1 ? 0 : 1;
        var$2 = var$2 + $rt_imul($pos, $digit / 2 | 0) | 0;
        $pos = $pos * 46 | 0;
        if (!$hasMore)
            break;
    }
    return var$2;
},
otci_Base46_decode = $seq => {
    let $number, $result;
    $number = otci_Base46_decodeUnsigned($seq);
    $result = $number / 2 | 0;
    if ($number % 2 | 0)
        $result =  -$result | 0;
    return $result;
},
otci_Base46_decodeDigit = $c => {
    if ($c < 34)
        return $c - 32 | 0;
    if ($c >= 92)
        return ($c - 32 | 0) - 2 | 0;
    return ($c - 32 | 0) - 1 | 0;
};
function cpcj_JavaArchitectureViewer$buildFileSelector$lambda$_6_0() {
    let a = this; jl_Object.call(a);
    a.$_019 = null;
    a.$_11 = null;
}
let cpcj_JavaArchitectureViewer$buildFileSelector$lambda$_6_0__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_019 = var$1;
    var$0.$_11 = var$2;
},
cpcj_JavaArchitectureViewer$buildFileSelector$lambda$_6_0__init_0 = (var_0, var_1) => {
    let var_2 = new cpcj_JavaArchitectureViewer$buildFileSelector$lambda$_6_0();
    cpcj_JavaArchitectureViewer$buildFileSelector$lambda$_6_0__init_(var_2, var_0, var_1);
    return var_2;
},
cpcj_JavaArchitectureViewer$buildFileSelector$lambda$_6_0_run = var$0 => {
    cpcj_JavaArchitectureViewer_lambda$buildFileSelector$0(var$0.$_019, var$0.$_11);
},
otji_JSWrapper$Helper = $rt_classWithoutFields(),
otji_JSWrapper$Helper_hashCodes = null,
otji_JSWrapper$Helper_wrappers = null,
otji_JSWrapper$Helper_stringWrappers = null,
otji_JSWrapper$Helper_numberWrappers = null,
otji_JSWrapper$Helper_undefinedWrapper = null,
otji_JSWrapper$Helper_stringFinalizationRegistry = null,
otji_JSWrapper$Helper_numberFinalizationRegistry = null,
otji_JSWrapper$Helper_$callClinit = () => {
    otji_JSWrapper$Helper_$callClinit = $rt_eraseClinit(otji_JSWrapper$Helper);
    otji_JSWrapper$Helper__clinit_();
},
otji_JSWrapper$Helper_lambda$static$1 = $token => {
    let var$2, var$3;
    otji_JSWrapper$Helper_$callClinit();
    var$2 = otji_JSWrapper$Helper_numberWrappers;
    var$3 = otji_JSWrapper_unwrap($token);
    var$2.delete(var$3);
},
otji_JSWrapper$Helper_lambda$static$0 = $token => {
    let var$2, var$3;
    otji_JSWrapper$Helper_$callClinit();
    var$2 = otji_JSWrapper$Helper_stringWrappers;
    var$3 = otji_JSWrapper_unwrap($token);
    var$2.delete(var$3);
},
otji_JSWrapper$Helper__clinit_ = () => {
    let var$1;
    otji_JSWrapper$Helper_hashCodes = new WeakMap();
    var$1 = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new WeakMap();
    otji_JSWrapper$Helper_wrappers = var$1;
    var$1 = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new Map();
    otji_JSWrapper$Helper_stringWrappers = var$1;
    var$1 = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new Map();
    otji_JSWrapper$Helper_numberWrappers = var$1;
    if (otji_JSWrapper$Helper_stringWrappers === null)
        var$1 = null;
    else {
        var$1 = otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_0();
        var$1 = new FinalizationRegistry(otji_JS_function(otji_JSWrapper_unwrap(var$1), "accept"));
    }
    otji_JSWrapper$Helper_stringFinalizationRegistry = var$1;
    if (otji_JSWrapper$Helper_numberWrappers === null)
        var$1 = null;
    else {
        var$1 = otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_0();
        var$1 = new FinalizationRegistry(otji_JS_function(otji_JSWrapper_unwrap(var$1), "accept"));
    }
    otji_JSWrapper$Helper_numberFinalizationRegistry = var$1;
};
function jl_AbstractStringBuilder() {
    let a = this; jl_Object.call(a);
    a.$buffer = null;
    a.$length0 = 0;
}
let jl_AbstractStringBuilder__init_0 = $this => {
    jl_AbstractStringBuilder__init_($this, 16);
},
jl_AbstractStringBuilder__init_2 = () => {
    let var_0 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_0(var_0);
    return var_0;
},
jl_AbstractStringBuilder__init_ = ($this, $capacity) => {
    jl_Object__init_($this);
    $this.$buffer = $rt_createCharArray($capacity);
},
jl_AbstractStringBuilder__init_1 = var_0 => {
    let var_1 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_(var_1, var_0);
    return var_1;
},
jl_AbstractStringBuilder_append2 = ($this, $obj) => {
    return $this.$insert($this.$length0, $obj);
},
jl_AbstractStringBuilder_insert0 = ($this, $index, $string) => {
    let $i, var$4, var$5;
    if ($index >= 0 && $index <= $this.$length0) {
        if ($string === null)
            $string = $rt_s(16);
        else if ($string.$isEmpty())
            return $this;
        $this.$ensureCapacity($this.$length0 + $string.$length() | 0);
        $i = $this.$length0 - 1 | 0;
        while ($i >= $index) {
            $this.$buffer.data[$i + $string.$length() | 0] = $this.$buffer.data[$i];
            $i = $i + (-1) | 0;
        }
        $this.$length0 = $this.$length0 + $string.$length() | 0;
        $i = 0;
        while ($i < $string.$length()) {
            var$4 = $this.$buffer.data;
            var$5 = $index + 1 | 0;
            var$4[$index] = $string.$charAt($i);
            $i = $i + 1 | 0;
            $index = var$5;
        }
        return $this;
    }
    $rt_throw(jl_StringIndexOutOfBoundsException__init_());
},
jl_AbstractStringBuilder_append = ($this, $value) => {
    return $this.$append1($value, 10);
},
jl_AbstractStringBuilder_append4 = ($this, $value, $radix) => {
    return $this.$insert0($this.$length0, $value, $radix);
},
jl_AbstractStringBuilder_insert5 = ($this, $target, $value, $radix) => {
    let $positive, var$5, var$6, $pos, $sz, $posLimit, var$10, var$11;
    $positive = 1;
    if ($value < 0) {
        $positive = 0;
        $value =  -$value | 0;
    }
    a: {
        if ($rt_ucmp($value, $radix) < 0) {
            if ($positive)
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 1 | 0);
            else {
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 2 | 0);
                var$5 = $this.$buffer.data;
                var$6 = $target + 1 | 0;
                var$5[$target] = 45;
                $target = var$6;
            }
            $this.$buffer.data[$target] = jl_Character_forDigit($value, $radix);
        } else {
            $pos = 1;
            $sz = 1;
            $posLimit = $rt_udiv((-1), $radix);
            b: {
                while (true) {
                    var$10 = $rt_imul($pos, $radix);
                    if ($rt_ucmp(var$10, $value) > 0) {
                        var$10 = $pos;
                        break b;
                    }
                    $sz = $sz + 1 | 0;
                    if ($rt_ucmp(var$10, $posLimit) > 0)
                        break;
                    $pos = var$10;
                }
            }
            if (!$positive)
                $sz = $sz + 1 | 0;
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + $sz | 0);
            if ($positive)
                var$11 = $target;
            else {
                var$5 = $this.$buffer.data;
                var$11 = $target + 1 | 0;
                var$5[$target] = 45;
            }
            while (true) {
                if (!var$10)
                    break a;
                var$5 = $this.$buffer.data;
                var$6 = var$11 + 1 | 0;
                var$5[var$11] = jl_Character_forDigit($rt_udiv($value, var$10), $radix);
                $value = $rt_umod($value, var$10);
                var$10 = $rt_udiv(var$10, $radix);
                var$11 = var$6;
            }
        }
    }
    return $this;
},
jl_AbstractStringBuilder_append1 = ($this, $value) => {
    return $this.$insert1($this.$length0, $value);
},
jl_AbstractStringBuilder_insert3 = ($this, $target, $value) => {
    return $this.$insert2($target, $value, 10);
},
jl_AbstractStringBuilder_insert4 = ($this, $target, $value, $radix) => {
    let $positive, var$5, var$6, var$7, $sz, $pos, $posLimit, var$11, var$12;
    $positive = 1;
    if (Long_lt($value, Long_ZERO)) {
        $positive = 0;
        $value = Long_neg($value);
    }
    a: {
        var$5 = Long_fromInt($radix);
        if (jl_Long_compareUnsigned($value, var$5) < 0) {
            if ($positive)
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 1 | 0);
            else {
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 2 | 0);
                var$6 = $this.$buffer.data;
                var$7 = $target + 1 | 0;
                var$6[$target] = 45;
                $target = var$7;
            }
            $this.$buffer.data[$target] = jl_Character_forDigit(Long_lo($value), $radix);
        } else {
            $sz = 1;
            $pos = Long_fromInt(1);
            $posLimit = jl_Long_divideUnsigned(Long_fromInt(-1), var$5);
            b: {
                while (true) {
                    var$11 = Long_mul($pos, var$5);
                    if (jl_Long_compareUnsigned(var$11, $value) > 0) {
                        var$11 = $pos;
                        break b;
                    }
                    $sz = $sz + 1 | 0;
                    if (jl_Long_compareUnsigned(var$11, $posLimit) > 0)
                        break;
                    $pos = var$11;
                }
            }
            if (!$positive)
                $sz = $sz + 1 | 0;
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + $sz | 0);
            if ($positive)
                var$12 = $target;
            else {
                var$6 = $this.$buffer.data;
                var$12 = $target + 1 | 0;
                var$6[$target] = 45;
            }
            while (true) {
                if (Long_eq(var$11, Long_ZERO))
                    break a;
                var$6 = $this.$buffer.data;
                var$7 = var$12 + 1 | 0;
                var$6[var$12] = jl_Character_forDigit(Long_lo((jl_Long_divideUnsigned($value, var$11))), $radix);
                $value = jl_Long_remainderUnsigned($value, var$11);
                var$11 = jl_Long_divideUnsigned(var$11, var$5);
                var$12 = var$7;
            }
        }
    }
    return $this;
},
jl_AbstractStringBuilder_append3 = ($this, $c) => {
    return $this.$insert3($this.$length0, $c);
},
jl_AbstractStringBuilder_insert2 = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insertSpace($this, $index, $index + 1 | 0);
    $this.$buffer.data[$index] = $c;
    return $this;
},
jl_AbstractStringBuilder_insert1 = ($this, $index, $obj) => {
    return $this.$insert4($index, $obj === null ? $rt_s(16) : $obj.$toString());
},
jl_AbstractStringBuilder_append0 = ($this, $b) => {
    return $this.$insert5($this.$length0, $b);
},
jl_AbstractStringBuilder_insert = ($this, $index, $b) => {
    return $this.$insert4($index, !$b ? $rt_s(17) : $rt_s(18));
},
jl_AbstractStringBuilder_ensureCapacity = ($this, $capacity) => {
    let $newLength;
    if ($this.$buffer.data.length >= $capacity)
        return;
    $newLength = $this.$buffer.data.length >= 1073741823 ? 2147483647 : jl_Math_max($capacity, jl_Math_max($this.$buffer.data.length * 2 | 0, 5));
    $this.$buffer = ju_Arrays_copyOf($this.$buffer, $newLength);
},
jl_AbstractStringBuilder_toString = $this => {
    return jl_String__init_6($this.$buffer, 0, $this.$length0);
},
jl_AbstractStringBuilder_insertSpace = ($this, $start, $end) => {
    let $sz, $i;
    $sz = $this.$length0 - $start | 0;
    $this.$ensureCapacity(($this.$length0 + $end | 0) - $start | 0);
    $i = $sz - 1 | 0;
    while ($i >= 0) {
        $this.$buffer.data[$end + $i | 0] = $this.$buffer.data[$start + $i | 0];
        $i = $i + (-1) | 0;
    }
    $this.$length0 = $this.$length0 + ($end - $start | 0) | 0;
},
jl_Appendable = $rt_classWithoutFields(0),
jl_StringBuilder = $rt_classWithoutFields(jl_AbstractStringBuilder),
jl_StringBuilder__init_2 = ($this, $capacity) => {
    jl_AbstractStringBuilder__init_($this, $capacity);
},
jl_StringBuilder__init_0 = var_0 => {
    let var_1 = new jl_StringBuilder();
    jl_StringBuilder__init_2(var_1, var_0);
    return var_1;
},
jl_StringBuilder__init_1 = $this => {
    jl_AbstractStringBuilder__init_0($this);
},
jl_StringBuilder__init_ = () => {
    let var_0 = new jl_StringBuilder();
    jl_StringBuilder__init_1(var_0);
    return var_0;
},
jl_StringBuilder_append = ($this, $obj) => {
    jl_AbstractStringBuilder_append2($this, $obj);
    return $this;
},
jl_StringBuilder_append1 = ($this, $value) => {
    jl_AbstractStringBuilder_append($this, $value);
    return $this;
},
jl_StringBuilder_append2 = ($this, $value) => {
    jl_AbstractStringBuilder_append1($this, $value);
    return $this;
},
jl_StringBuilder_append0 = ($this, $c) => {
    jl_AbstractStringBuilder_append3($this, $c);
    return $this;
},
jl_StringBuilder_append3 = ($this, $b) => {
    jl_AbstractStringBuilder_append0($this, $b);
    return $this;
},
jl_StringBuilder_insert4 = ($this, $target, $value) => {
    jl_AbstractStringBuilder_insert3($this, $target, $value);
    return $this;
},
jl_StringBuilder_insert5 = ($this, $index, $obj) => {
    jl_AbstractStringBuilder_insert1($this, $index, $obj);
    return $this;
},
jl_StringBuilder_insert1 = ($this, $index, $b) => {
    jl_AbstractStringBuilder_insert($this, $index, $b);
    return $this;
},
jl_StringBuilder_insert2 = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insert2($this, $index, $c);
    return $this;
},
jl_StringBuilder_insert6 = ($this, $index, $string) => {
    jl_AbstractStringBuilder_insert0($this, $index, $string);
    return $this;
},
jl_StringBuilder_toString = $this => {
    return jl_AbstractStringBuilder_toString($this);
},
jl_StringBuilder_ensureCapacity = ($this, var$1) => {
    jl_AbstractStringBuilder_ensureCapacity($this, var$1);
},
jl_StringBuilder_insert7 = ($this, var$1, var$2) => {
    return $this.$insert6(var$1, var$2);
},
jl_StringBuilder_insert0 = ($this, var$1, var$2) => {
    return $this.$insert7(var$1, var$2);
},
jl_StringBuilder_insert = ($this, var$1, var$2) => {
    return $this.$insert8(var$1, var$2);
},
jl_StringBuilder_insert3 = ($this, var$1, var$2) => {
    return $this.$insert9(var$1, var$2);
},
jl_StringBuilder_insert8 = ($this, var$1, var$2) => {
    return $this.$insert10(var$1, var$2);
};
function cpcs_AppShell() {
    let a = this; jl_Object.call(a);
    a.$activeTab = null;
    a.$windowState = null;
    a.$startOpen = 0;
    a.$dialog = null;
    a.$root3 = null;
    a.$bodyArea = null;
    a.$windowEl = null;
    a.$headerSlot = null;
    a.$mainEl = null;
    a.$overlayLayer = null;
    a.$startBtn = null;
    a.$taskbarWindowBtn = null;
    a.$clockEl = null;
    a.$currentView = null;
    a.$whiteboardView = null;
}
let cpcs_AppShell_DESKTOP_ICONS = null,
cpcs_AppShell_START_MENU_TABS = null,
cpcs_AppShell_$callClinit = () => {
    cpcs_AppShell_$callClinit = $rt_eraseClinit(cpcs_AppShell);
    cpcs_AppShell__clinit_();
},
cpcs_AppShell__init_ = $this => {
    let $titleBar, var$2, var$3, $titleBtns, $aboutBtn, $minBtn, $restoreBtn, $closeBtn, $marquee, $track, $repeated, var$12, $taskbar;
    cpcs_AppShell_$callClinit();
    jl_Object__init_($this);
    $this.$activeTab = $rt_s(19);
    $this.$windowState = $rt_s(20);
    $this.$startOpen = 0;
    $this.$dialog = null;
    $this.$root3 = cpcs_Ui_el($rt_s(21), $rt_s(22));
    $this.$bodyArea = cpcs_Ui_el($rt_s(21), $rt_s(23));
    $this.$windowEl = cpcs_Ui_el($rt_s(21), $rt_s(24));
    $this.$headerSlot = cpcs_Ui_el($rt_s(21), $rt_s(24));
    $this.$mainEl = cpcs_Ui_el($rt_s(25), $rt_s(26));
    $this.$overlayLayer = cpcs_Ui_el($rt_s(21), $rt_s(24));
    $titleBar = cpcs_Ui_el($rt_s(21), $rt_s(27));
    var$2 = $rt_createArray(jl_Object, 2);
    var$3 = var$2.data;
    var$3[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(29), $rt_s(30)));
    var$3[1] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(31), $rt_s(32)));
    cpcs_Ui_add($titleBar, var$2);
    $titleBtns = cpcs_Ui_el($rt_s(28), $rt_s(33));
    $aboutBtn = cpcs_Ui_btn($rt_s(34), $rt_s(35), cpcs_AppShell$_init_$lambda$_0_0__init_0($this));
    $aboutBtn.setAttribute("title", "About");
    $minBtn = cpcs_Ui_btn($rt_s(34), $rt_s(36), cpcs_AppShell$_init_$lambda$_0_1__init_0($this));
    $minBtn.setAttribute("title", "Minimize");
    $restoreBtn = cpcs_Ui_btn($rt_s(34), $rt_s(37), cpcs_AppShell$_init_$lambda$_0_2__init_0($this));
    $restoreBtn.setAttribute("title", "Restore");
    $closeBtn = cpcs_Ui_btn($rt_s(34), $rt_s(38), cpcs_AppShell$_init_$lambda$_0_3__init_0($this));
    $closeBtn.setAttribute("title", "Close");
    var$2 = $rt_createArray(jl_Object, 4);
    var$3 = var$2.data;
    var$3[0] = otji_JSWrapper_wrap($aboutBtn);
    var$3[1] = otji_JSWrapper_wrap($minBtn);
    var$3[2] = otji_JSWrapper_wrap($restoreBtn);
    var$3[3] = otji_JSWrapper_wrap($closeBtn);
    cpcs_Ui_add($titleBtns, var$2);
    var$2 = $rt_createArray(jl_Object, 1);
    var$2.data[0] = otji_JSWrapper_wrap($titleBtns);
    cpcs_Ui_add($titleBar, var$2);
    $marquee = cpcs_Ui_el($rt_s(21), $rt_s(39));
    $marquee.setAttribute("aria-hidden", "true");
    $track = cpcs_Ui_el($rt_s(21), $rt_s(40));
    $repeated = $rt_s(41).$repeat(4);
    var$2 = $rt_createArray(jl_Object, 2);
    var$3 = var$2.data;
    var$3[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(42), $repeated));
    var$3[1] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(42), $repeated));
    cpcs_Ui_add($track, var$2);
    var$2 = $rt_createArray(jl_Object, 1);
    var$2.data[0] = otji_JSWrapper_wrap($track);
    cpcs_Ui_add($marquee, var$2);
    var$12 = $this.$windowEl;
    var$2 = $rt_createArray(jl_Object, 4);
    var$3 = var$2.data;
    var$3[0] = otji_JSWrapper_wrap($titleBar);
    var$3[1] = otji_JSWrapper_wrap($marquee);
    var$3[2] = otji_JSWrapper_wrap($this.$headerSlot);
    var$3[3] = otji_JSWrapper_wrap($this.$mainEl);
    cpcs_Ui_add(var$12, var$2);
    $taskbar = cpcs_Ui_el($rt_s(43), $rt_s(44));
    $this.$startBtn = cpcs_Ui_btnHtml($rt_s(45), $rt_s(46), cpcs_AppShell$_init_$lambda$_0_4__init_0($this));
    $this.$startBtn.setAttribute("title", "the null pointers");
    $this.$taskbarWindowBtn = cpcs_Ui_btn($rt_s(47), $rt_s(24), cpcs_AppShell$_init_$lambda$_0_5__init_0($this));
    var$2 = $rt_createArray(jl_Object, 3);
    var$3 = var$2.data;
    var$3[0] = otji_JSWrapper_wrap($this.$startBtn);
    var$3[1] = otji_JSWrapper_wrap($this.$taskbarWindowBtn);
    var$3[2] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(48), $rt_s(49)));
    cpcs_Ui_add($taskbar, var$2);
    $this.$clockEl = cpcs_Ui_el0($rt_s(28), $rt_s(50), $rt_str(cpcj_Js_clockString$js_body$_12()));
    var$2 = $rt_createArray(jl_Object, 1);
    var$2.data[0] = otji_JSWrapper_wrap($this.$clockEl);
    cpcs_Ui_add($taskbar, var$2);
    var$12 = $this.$root3;
    var$2 = $rt_createArray(jl_Object, 3);
    var$3 = var$2.data;
    var$3[0] = otji_JSWrapper_wrap($this.$bodyArea);
    var$3[1] = otji_JSWrapper_wrap($taskbar);
    var$3[2] = otji_JSWrapper_wrap($this.$overlayLayer);
    cpcs_Ui_add(var$12, var$2);
    cpcs_AppShell_switchView($this);
    cpcs_AppShell_renderBody($this);
    cpcs_AppShell_renderHeader($this);
    cpcs_AppShell_renderTaskbar($this);
    setInterval(otji_JS_function(otji_JSWrapper_unwrap(cpcs_AppShell$_init_$lambda$_0_6__init_0($this)), "call"), 1000);
},
cpcs_AppShell__init_0 = () => {
    let var_0 = new cpcs_AppShell();
    cpcs_AppShell__init_(var_0);
    return var_0;
},
cpcs_AppShell_root = $this => {
    return $this.$root3;
},
cpcs_AppShell_createView = ($this, $tab) => {
    let var$2, var$3, var$4;
    a: {
        var$2 = (-1);
        switch ($tab.$hashCode()) {
            case -1298662846:
                if (!$tab.$equals($rt_s(51)))
                    break a;
                var$2 = 1;
                break a;
            case 107931:
                if (!$tab.$equals($rt_s(52)))
                    break a;
                var$2 = 2;
                break a;
            case 3254818:
                if (!$tab.$equals($rt_s(53)))
                    break a;
                var$2 = 3;
                break a;
            case 261182557:
                if (!$tab.$equals($rt_s(19)))
                    break a;
                var$2 = 0;
                break a;
            default:
        }
    }
    b: {
        switch (var$2) {
            case 0:
                if ($this.$whiteboardView === null)
                    $this.$whiteboardView = cpcw_WhiteboardStudio__init_0();
                var$3 = $this.$whiteboardView;
                break b;
            case 1:
                break;
            case 2:
                var$3 = cpcm_McqConsensusView__init_0();
                break b;
            case 3:
                var$3 = cpcj_JavaArchitectureViewer__init_0();
                break b;
            default:
                var$3 = new jl_IllegalArgumentException;
                var$4 = jl_StringBuilder__init_();
                jl_StringBuilder_append(jl_StringBuilder_append(var$4, $rt_s(54)), $tab);
                jl_IllegalArgumentException__init_0(var$3, jl_StringBuilder_toString(var$4));
                $rt_throw(var$3);
        }
        var$3 = cpce_MatchingEngineStudio__init_0();
    }
    return var$3;
},
cpcs_AppShell_switchView = $this => {
    if ($this.$currentView !== null && $this.$currentView !== $this.$whiteboardView)
        $this.$currentView.$dispose();
    $this.$currentView = cpcs_AppShell_createView($this, $this.$activeTab);
    $this.$mainEl.replaceChildren($this.$currentView.$root());
},
cpcs_AppShell_disposeView = $this => {
    if ($this.$currentView !== null && $this.$currentView !== $this.$whiteboardView)
        $this.$currentView.$dispose();
    $this.$currentView = null;
    cpcs_Ui_clear($this.$mainEl);
},
cpcs_AppShell_tabName = ($this, $tab) => {
    let var$2;
    a: {
        var$2 = (-1);
        switch ($tab.$hashCode()) {
            case -1298662846:
                if (!$tab.$equals($rt_s(51)))
                    break a;
                var$2 = 1;
                break a;
            case 107931:
                if (!$tab.$equals($rt_s(52)))
                    break a;
                var$2 = 2;
                break a;
            case 3254818:
                if (!$tab.$equals($rt_s(53)))
                    break a;
                var$2 = 3;
                break a;
            case 261182557:
                if (!$tab.$equals($rt_s(19)))
                    break a;
                var$2 = 0;
                break a;
            default:
        }
    }
    b: {
        switch (var$2) {
            case 0:
                $tab = $rt_s(55);
                break b;
            case 1:
                $tab = $rt_s(56);
                break b;
            case 2:
                $tab = $rt_s(57);
                break b;
            case 3:
                $tab = $rt_s(58);
                break b;
            default:
        }
    }
    return $tab;
},
cpcs_AppShell_primaryActionLabel = $this => {
    let var$1, var$2, var$3;
    a: {
        var$1 = $this.$activeTab;
        var$2 = (-1);
        switch (var$1.$hashCode()) {
            case -1298662846:
                if (!var$1.$equals($rt_s(51)))
                    break a;
                var$2 = 1;
                break a;
            case 107931:
                if (!var$1.$equals($rt_s(52)))
                    break a;
                var$2 = 2;
                break a;
            case 3254818:
                if (!var$1.$equals($rt_s(53)))
                    break a;
                var$2 = 3;
                break a;
            case 261182557:
                if (!var$1.$equals($rt_s(19)))
                    break a;
                var$2 = 0;
                break a;
            default:
        }
    }
    b: {
        switch (var$2) {
            case 0:
                break;
            case 1:
                var$3 = $rt_s(59);
                break b;
            case 2:
                var$3 = $rt_s(60);
                break b;
            case 3:
                var$3 = $rt_s(61);
                break b;
            default:
                var$3 = $rt_s(24);
                break b;
        }
        var$3 = $rt_s(62);
    }
    return var$3;
},
cpcs_AppShell_handlePrimaryAction = $this => {
    if ($this.$activeTab.$equals($rt_s(53)))
        cpcs_Clipboard_copy$js_body$_1("# Apex Java backend quickstart (needs JDK 21 + Maven)\ncd java\nmvn -q package -DskipTests          # builds apex-engine.jar (fat jar)\njava -jar target/apex-engine.jar    # runs the EngineDemoMain walkthrough\n\n# Whiteboard WebSocket server (rooms, snapshots, cursor relay)\njava -cp target/apex-engine.jar com.apex.whiteboard.WhiteboardServer 8090\n# -> ws://localhost:8090/ws/whiteboard  (protocol documented in README.md)\n\n# 10,000 virtual-thread order simulation\njava -cp target/apex-engine.jar com.apex.simulator.LoomSimulationMain\n\n# JMH throughput benchmark\njava -cp target/apex-engine.jar org.openjdk.jmh.Main JmhDisruptorBenchmark\n\n# Optional knobs\n# -Dapex.wal.dir=./wal            # write-ahead log directory (default ./wal)\n# -Dapex.replicate=host:port      # best-effort UDP replication target\n");
    else if ($this.$currentView !== null)
        $this.$currentView.$onPrimaryAction();
},
cpcs_AppShell_openTab = ($this, $tab) => {
    $this.$activeTab = $tab;
    $this.$windowState = $rt_s(20);
    $this.$startOpen = 0;
    cpcs_AppShell_switchView($this);
    cpcs_AppShell_renderBody($this);
    cpcs_AppShell_renderHeader($this);
    cpcs_AppShell_renderTaskbar($this);
    cpcs_AppShell_renderOverlays($this);
},
cpcs_AppShell_minimize = $this => {
    $this.$windowState = $rt_s(63);
    $this.$startOpen = 0;
    cpcs_AppShell_disposeView($this);
    cpcs_AppShell_renderBody($this);
    cpcs_AppShell_renderTaskbar($this);
    cpcs_AppShell_renderOverlays($this);
},
cpcs_AppShell_toggleWindowed = $this => {
    $this.$windowState = !$this.$windowState.$equals($rt_s(64)) ? $rt_s(64) : $rt_s(20);
    cpcs_AppShell_renderBody($this);
    cpcs_AppShell_renderHeader($this);
},
cpcs_AppShell_toggleTaskbarButton = $this => {
    if (!$this.$windowState.$equals($rt_s(63)))
        cpcs_AppShell_minimize($this);
    else {
        $this.$windowState = $rt_s(20);
        cpcs_AppShell_switchView($this);
        cpcs_AppShell_renderBody($this);
        cpcs_AppShell_renderHeader($this);
    }
    $this.$startOpen = 0;
    cpcs_AppShell_renderTaskbar($this);
    cpcs_AppShell_renderOverlays($this);
},
cpcs_AppShell_toggleStart = $this => {
    $this.$startOpen = $this.$startOpen ? 0 : 1;
    cpcs_AppShell_renderTaskbar($this);
    cpcs_AppShell_renderOverlays($this);
},
cpcs_AppShell_setDialog = ($this, $kind) => {
    $this.$dialog = $kind;
    cpcs_AppShell_renderOverlays($this);
},
cpcs_AppShell_renderBody = $this => {
    let var$1, var$2, $center;
    cpcs_Ui_clear($this.$bodyArea);
    if ($this.$windowState.$equals($rt_s(63))) {
        var$1 = $this.$bodyArea;
        var$2 = $rt_createArray(jl_Object, 1);
        var$2.data[0] = otji_JSWrapper_wrap(cpcs_AppShell_desktopIcons($this));
        cpcs_Ui_add(var$1, var$2);
        $center = cpcs_Ui_el($rt_s(21), $rt_s(65));
        var$2 = $rt_createArray(jl_Object, 1);
        var$2.data[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(66), $rt_s(67)));
        cpcs_Ui_add($center, var$2);
        var$1 = $this.$bodyArea;
        var$2 = $rt_createArray(jl_Object, 1);
        var$2.data[0] = otji_JSWrapper_wrap($center);
        cpcs_Ui_add(var$1, var$2);
    } else if (!$this.$windowState.$equals($rt_s(64))) {
        cpcs_Ui_cls($this.$bodyArea, $rt_s(23));
        cpcs_Ui_cls($this.$windowEl, $rt_s(68));
        var$1 = $this.$bodyArea;
        var$2 = $rt_createArray(jl_Object, 1);
        var$2.data[0] = otji_JSWrapper_wrap($this.$windowEl);
        cpcs_Ui_add(var$1, var$2);
    } else {
        cpcs_Ui_cls($this.$bodyArea, $rt_s(69));
        var$1 = $this.$bodyArea;
        var$2 = $rt_createArray(jl_Object, 1);
        var$2.data[0] = otji_JSWrapper_wrap(cpcs_AppShell_desktopIcons($this));
        cpcs_Ui_add(var$1, var$2);
        cpcs_Ui_cls($this.$windowEl, $rt_s(70));
        var$1 = $this.$bodyArea;
        var$2 = $rt_createArray(jl_Object, 1);
        var$2.data[0] = otji_JSWrapper_wrap($this.$windowEl);
        cpcs_Ui_add(var$1, var$2);
    }
},
cpcs_AppShell_desktopIcons = $this => {
    let $wrap, var$2, var$3, var$4, $icon, var$6, $b, $iconWrap, $label, var$10, var$11, $id;
    $wrap = cpcs_Ui_el($rt_s(21), $rt_s(71));
    cpcs_AppShell_$callClinit();
    var$2 = cpcs_AppShell_DESKTOP_ICONS.data;
    var$3 = var$2.length;
    var$4 = 0;
    while (var$4 < var$3) {
        $icon = var$2[var$4];
        var$6 = $icon.data;
        $b = cpcs_Ui_el($rt_s(72), $rt_s(73));
        $iconWrap = cpcs_Ui_el($rt_s(28), $rt_s(74));
        cpcs_Ui_setHtml($iconWrap, cpcs_Icons_svg(var$6[2], $rt_s(75)));
        $label = cpcs_Ui_el0($rt_s(28), $rt_s(76), var$6[1]);
        cpcs_Ui_setStyle$js_body$_22($label, "text-shadow", "1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000");
        var$10 = $rt_createArray(jl_Object, 2);
        var$11 = var$10.data;
        var$11[0] = otji_JSWrapper_wrap($iconWrap);
        var$11[1] = otji_JSWrapper_wrap($label);
        cpcs_Ui_add($b, var$10);
        $id = var$6[0];
        cpcs_Ui_on($b, $rt_s(77), cpcs_AppShell$desktopIcons$lambda$_15_0__init_0($this, $id));
        var$6 = $rt_createArray(jl_Object, 1);
        var$6.data[0] = otji_JSWrapper_wrap($b);
        cpcs_Ui_add($wrap, var$6);
        var$4 = var$4 + 1 | 0;
    }
    return $wrap;
},
cpcs_AppShell_renderHeader = $this => {
    cpcs_Header_build($this.$headerSlot, $this.$activeTab, cpcs_AppShell_primaryActionLabel($this), $this.$windowState.$equals($rt_s(64)), cpcs_AppShell$1__init_0($this));
},
cpcs_AppShell_renderTaskbar = $this => {
    let var$1, var$2, var$3;
    var$1 = $this.$startBtn;
    var$2 = !$this.$startOpen ? $rt_s(24) : $rt_s(78);
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(45)), var$2);
    cpcs_Ui_cls(var$1, jl_StringBuilder_toString(var$3));
    cpcs_Ui_setText($this.$taskbarWindowBtn, cpcs_AppShell_tabName($this, $this.$activeTab));
    var$1 = $this.$taskbarWindowBtn;
    var$3 = !$this.$windowState.$equals($rt_s(63)) ? $rt_s(79) : $rt_s(80);
    var$1.setAttribute("title", $rt_ustr(var$3));
},
cpcs_AppShell_renderOverlays = $this => {
    let $backdrop, $panel, $sidebar, $sideText, var$5, $items, var$7, var$8, $tab, var$10, var$11, var$12, var$13, $b, $about, var$16;
    cpcs_Ui_clear($this.$overlayLayer);
    if ($this.$startOpen) {
        $backdrop = cpcs_Ui_el($rt_s(21), $rt_s(81));
        $backdrop.setAttribute("aria-hidden", "true");
        cpcs_Ui_on($backdrop, $rt_s(77), cpcs_AppShell$renderOverlays$lambda$_18_0__init_0($this));
        $panel = cpcs_Ui_el($rt_s(21), $rt_s(82));
        $sidebar = cpcs_Ui_el($rt_s(21), $rt_s(83));
        $sideText = cpcs_Ui_el0($rt_s(28), $rt_s(84), $rt_s(85));
        cpcs_Ui_setStyle$js_body$_22($sideText, "writing-mode", "vertical-rl");
        var$5 = $rt_createArray(jl_Object, 1);
        var$5.data[0] = otji_JSWrapper_wrap($sideText);
        cpcs_Ui_add($sidebar, var$5);
        $items = cpcs_Ui_el($rt_s(21), $rt_s(86));
        cpcs_AppShell_$callClinit();
        var$5 = cpcs_AppShell_START_MENU_TABS.data;
        var$7 = var$5.length;
        var$8 = 0;
        while (var$8 < var$7) {
            $tab = var$5[var$8];
            var$10 = $tab.data;
            var$11 = var$10[2];
            var$11 = cpcs_Icons_svg(var$11, $rt_s(87));
            var$12 = var$10[1];
            var$13 = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append(var$13, var$11), var$12);
            var$11 = jl_StringBuilder_toString(var$13);
            var$12 = cpcs_AppShell$renderOverlays$lambda$_18_2__init_0($this, $tab);
            $b = cpcs_Ui_btnHtml($rt_s(88), var$11, var$12);
            var$10 = $rt_createArray(jl_Object, 1);
            var$10.data[0] = otji_JSWrapper_wrap($b);
            cpcs_Ui_add($items, var$10);
            var$8 = var$8 + 1 | 0;
        }
        var$5 = $rt_createArray(jl_Object, 1);
        var$5.data[0] = otji_JSWrapper_wrap(cpcs_Ui_el($rt_s(21), $rt_s(89)));
        cpcs_Ui_add($items, var$5);
        $about = cpcs_Ui_btnHtml($rt_s(88), $rt_s(90), cpcs_AppShell$renderOverlays$lambda$_18_1__init_0($this));
        var$5 = $rt_createArray(jl_Object, 1);
        var$5.data[0] = otji_JSWrapper_wrap($about);
        cpcs_Ui_add($items, var$5);
        cpcs_Ui_add($panel, $rt_wrapArray(jl_Object, [otji_JSWrapper_wrap($sidebar), otji_JSWrapper_wrap($items)]));
        cpcs_Ui_add($this.$overlayLayer, $rt_wrapArray(jl_Object, [otji_JSWrapper_wrap($backdrop), otji_JSWrapper_wrap($panel)]));
    }
    if ($this.$dialog !== null) {
        var$16 = $this.$overlayLayer;
        var$5 = $rt_createArray(jl_Object, 1);
        var$5.data[0] = otji_JSWrapper_wrap(cpcs_AppShell_buildDialog($this, $this.$dialog));
        cpcs_Ui_add(var$16, var$5);
    }
},
cpcs_AppShell_buildDialog = ($this, $kind) => {
    let var$2, $title, $overlay, $win, $bar, $close, $content, $footer, var$10, var$11, var$12;
    a: {
        var$2 = (-1);
        switch ($kind.$hashCode()) {
            case -1039519765:
                if (!$kind.$equals($rt_s(91)))
                    break a;
                var$2 = 2;
                break a;
            case 92611469:
                if (!$kind.$equals($rt_s(92)))
                    break a;
                var$2 = 0;
                break a;
            case 1082880659:
                if (!$kind.$equals($rt_s(93)))
                    break a;
                var$2 = 1;
                break a;
            default:
        }
    }
    b: {
        switch (var$2) {
            case 0:
                break;
            case 1:
                $title = $rt_s(94);
                break b;
            case 2:
                $title = $rt_s(95);
                break b;
            default:
                $title = $rt_s(24);
                break b;
        }
        $title = $rt_s(96);
    }
    $overlay = cpcs_Ui_el($rt_s(21), $rt_s(97));
    cpcs_Ui_on($overlay, $rt_s(77), cpcs_AppShell$buildDialog$lambda$_19_4__init_0($this));
    $win = cpcs_Ui_el($rt_s(21), $rt_s(98));
    cpcs_Ui_onStop($win, $rt_s(77), cpcs_AppShell$buildDialog$lambda$_19_5__init_0());
    $bar = cpcs_Ui_el($rt_s(21), $rt_s(99));
    $close = cpcs_Ui_btn($rt_s(100), $rt_s(38), cpcs_AppShell$buildDialog$lambda$_19_6__init_0($this));
    $close.setAttribute("title", "Close");
    cpcs_Ui_add($bar, $rt_wrapArray(jl_Object, [otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(101), $title)), otji_JSWrapper_wrap($close)]));
    $content = cpcs_Ui_el($rt_s(21), $rt_s(102));
    $footer = cpcs_Ui_el($rt_s(21), $rt_s(103));
    if ($kind.$equals($rt_s(92))) {
        cpcs_Ui_add($content, $rt_wrapArray(jl_Object, [otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(104), $rt_s(105), $rt_s(106))), otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(104), $rt_s(24), $rt_s(107))), otji_JSWrapper_wrap(cpcs_Ui_html($rt_s(104), $rt_s(24), $rt_s(108))), otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(104), $rt_s(24), $rt_s(109))), otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(104), $rt_s(110), $rt_s(111)))]));
        var$10 = $rt_createArray(jl_Object, 1);
        var$10.data[0] = otji_JSWrapper_wrap(cpcs_Ui_btn($rt_s(112), $rt_s(113), cpcs_AppShell$buildDialog$lambda$_19_0__init_0($this)));
        cpcs_Ui_add($footer, var$10);
    } else if ($kind.$equals($rt_s(93))) {
        var$10 = $rt_createArray(jl_Object, 1);
        var$10.data[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(104), $rt_s(24), $rt_s(114)));
        cpcs_Ui_add($content, var$10);
        var$10 = $rt_createArray(jl_Object, 1);
        var$10.data[0] = otji_JSWrapper_wrap(cpcs_Ui_btn($rt_s(112), $rt_s(113), cpcs_AppShell$buildDialog$lambda$_19_1__init_0($this)));
        cpcs_Ui_add($footer, var$10);
    } else if ($kind.$equals($rt_s(91))) {
        var$10 = $rt_createArray(jl_Object, 1);
        var$10.data[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(104), $rt_s(24), $rt_s(115)));
        cpcs_Ui_add($content, var$10);
        cpcs_Ui_cls($footer, $rt_s(116));
        var$10 = $rt_createArray(jl_Object, 2);
        var$11 = var$10.data;
        var$12 = cpcs_AppShell$buildDialog$lambda$_19_2__init_0($this);
        var$11[0] = otji_JSWrapper_wrap(cpcs_Ui_btn($rt_s(112), $rt_s(117), var$12));
        var$12 = cpcs_AppShell$buildDialog$lambda$_19_3__init_0($this);
        var$11[1] = otji_JSWrapper_wrap(cpcs_Ui_btn($rt_s(112), $rt_s(118), var$12));
        cpcs_Ui_add($footer, var$10);
    }
    var$10 = $rt_createArray(jl_Object, 1);
    var$10.data[0] = otji_JSWrapper_wrap($footer);
    cpcs_Ui_add($content, var$10);
    var$10 = $rt_createArray(jl_Object, 2);
    var$11 = var$10.data;
    var$11[0] = otji_JSWrapper_wrap($bar);
    var$11[1] = otji_JSWrapper_wrap($content);
    cpcs_Ui_add($win, var$10);
    var$10 = $rt_createArray(jl_Object, 1);
    var$10.data[0] = otji_JSWrapper_wrap($win);
    cpcs_Ui_add($overlay, var$10);
    return $overlay;
},
cpcs_AppShell_lambda$buildDialog$13 = $this => {
    cpcs_AppShell_setDialog($this, null);
},
cpcs_AppShell_lambda$buildDialog$12 = $this => {
    cpcs_AppShell_setDialog($this, null);
    cpcs_AppShell_minimize($this);
},
cpcs_AppShell_lambda$buildDialog$11 = $this => {
    cpcs_AppShell_setDialog($this, null);
},
cpcs_AppShell_lambda$buildDialog$10 = $this => {
    cpcs_AppShell_setDialog($this, null);
},
cpcs_AppShell_lambda$buildDialog$9 = $this => {
    cpcs_AppShell_setDialog($this, null);
},
cpcs_AppShell_lambda$buildDialog$8 = () => {
    cpcs_AppShell_$callClinit();
},
cpcs_AppShell_lambda$buildDialog$7 = $this => {
    cpcs_AppShell_setDialog($this, null);
},
cpcs_AppShell_lambda$renderOverlays$6 = $this => {
    $this.$startOpen = 0;
    cpcs_AppShell_renderTaskbar($this);
    cpcs_AppShell_setDialog($this, $rt_s(92));
},
cpcs_AppShell_lambda$renderOverlays$5 = ($this, $tab) => {
    cpcs_AppShell_openTab($this, $tab.data[0]);
},
cpcs_AppShell_lambda$renderOverlays$4 = $this => {
    $this.$startOpen = 0;
    cpcs_AppShell_renderTaskbar($this);
    cpcs_AppShell_renderOverlays($this);
},
cpcs_AppShell_lambda$desktopIcons$3 = ($this, $id) => {
    if (!$id.$equals($rt_s(93)))
        cpcs_AppShell_openTab($this, $id);
    else
        cpcs_AppShell_setDialog($this, $rt_s(93));
},
cpcs_AppShell_lambda$new$2 = $this => {
    cpcs_Ui_setText($this.$clockEl, $rt_str(cpcj_Js_clockString$js_body$_12()));
},
cpcs_AppShell_lambda$new$1 = $this => {
    cpcs_AppShell_setDialog($this, $rt_s(91));
},
cpcs_AppShell_lambda$new$0 = $this => {
    cpcs_AppShell_setDialog($this, $rt_s(92));
},
cpcs_AppShell__clinit_ = () => {
    let var$1, var$2;
    var$1 = $rt_createArray($rt_arraycls(jl_String), 5);
    var$2 = var$1.data;
    var$2[0] = $rt_wrapArray(jl_String, [$rt_s(19), $rt_s(119), $rt_s(120)]);
    var$2[1] = $rt_wrapArray(jl_String, [$rt_s(51), $rt_s(121), $rt_s(122)]);
    var$2[2] = $rt_wrapArray(jl_String, [$rt_s(52), $rt_s(123), $rt_s(124)]);
    var$2[3] = $rt_wrapArray(jl_String, [$rt_s(53), $rt_s(125), $rt_s(126)]);
    var$2[4] = $rt_wrapArray(jl_String, [$rt_s(93), $rt_s(94), $rt_s(127)]);
    cpcs_AppShell_DESKTOP_ICONS = var$1;
    var$1 = $rt_createArray($rt_arraycls(jl_String), 4);
    var$2 = var$1.data;
    var$2[0] = $rt_wrapArray(jl_String, [$rt_s(19), $rt_s(55), $rt_s(120)]);
    var$2[1] = $rt_wrapArray(jl_String, [$rt_s(51), $rt_s(56), $rt_s(122)]);
    var$2[2] = $rt_wrapArray(jl_String, [$rt_s(52), $rt_s(57), $rt_s(124)]);
    var$2[3] = $rt_wrapArray(jl_String, [$rt_s(53), $rt_s(58), $rt_s(126)]);
    cpcs_AppShell_START_MENU_TABS = var$1;
},
ju_ConcurrentModificationException = $rt_classWithoutFields(jl_RuntimeException),
ju_ConcurrentModificationException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
ju_ConcurrentModificationException__init_ = () => {
    let var_0 = new ju_ConcurrentModificationException();
    ju_ConcurrentModificationException__init_0(var_0);
    return var_0;
},
jur_RandomGenerator = $rt_classWithoutFields(0);
function cpcj_Ws() {
    jl_Object.call(this);
    this.$ws1 = null;
}
let cpcj_Ws__init_ = ($this, $url) => {
    jl_Object__init_($this);
    $this.$ws1 = new WebSocket($rt_ustr($url));
},
cpcj_Ws__init_0 = var_0 => {
    let var_1 = new cpcj_Ws();
    cpcj_Ws__init_(var_1, var_0);
    return var_1;
},
cpcj_Ws_onOpen = ($this, $r) => {
    let var$2;
    var$2 = $this.$ws1;
    ju_Objects_requireNonNull($r);
    cpcj_Ws_setOnOpen$js_body$_12(var$2, otji_JS_function(otji_JSWrapper_unwrap(cpcj_Ws$onOpen$lambda$_1_0__init_0($r)), "call"));
},
cpcj_Ws_onMessage = ($this, $h) => {
    let var$2;
    var$2 = $this.$ws1;
    ju_Objects_requireNonNull($h);
    cpcj_Ws_setOnMessage$js_body$_13(var$2, otji_JS_function(otji_JSWrapper_unwrap(cpcj_Ws$onMessage$lambda$_2_0__init_0($h)), "call"));
},
cpcj_Ws_onClose = ($this, $r) => {
    let var$2;
    var$2 = $this.$ws1;
    ju_Objects_requireNonNull($r);
    cpcj_Ws_setOnClose$js_body$_14(var$2, otji_JS_function(otji_JSWrapper_unwrap(cpcj_Ws$onClose$lambda$_3_0__init_0($r)), "call"));
},
cpcj_Ws_onError = ($this, $r) => {
    let var$2;
    var$2 = $this.$ws1;
    ju_Objects_requireNonNull($r);
    cpcj_Ws_setOnError$js_body$_15(var$2, otji_JS_function(otji_JSWrapper_unwrap(cpcj_Ws$onError$lambda$_4_0__init_0($r)), "call"));
},
cpcj_Ws_send = ($this, $msg) => {
    cpcj_Ws_send0$js_body$_9($this.$ws1, $rt_ustr($msg));
},
cpcj_Ws_isOpen = $this => {
    return $this.$ws1.readyState != 1 ? 0 : 1;
},
cpcj_Ws_close = $this => {
    $this.$ws1.close();
},
cpcj_Ws_send0$js_body$_9 = (var$1, var$2) => {
    if (var$1.readyState === 1) {
        var$1.send(var$2);
    }
},
cpcj_Ws_setOnOpen$js_body$_12 = (var$1, var$2) => {
    var$1.onopen = function() {
        var$2();
    };
},
cpcj_Ws_setOnMessage$js_body$_13 = (var$1, var$2) => {
    var$1.onmessage = function(e) {
        var$2(String(e.data));
    };
},
cpcj_Ws_setOnClose$js_body$_14 = (var$1, var$2) => {
    var$1.onclose = function() {
        var$2();
    };
},
cpcj_Ws_setOnError$js_body$_15 = (var$1, var$2) => {
    var$1.onerror = function() {
        var$2();
    };
},
otjde_EventListener = $rt_classWithoutFields(0);
function cpcs_Ui$btn$lambda$_5_0() {
    jl_Object.call(this);
    this.$_056 = null;
}
let cpcs_Ui$btn$lambda$_5_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_056 = var$1;
},
cpcs_Ui$btn$lambda$_5_0__init_0 = var_0 => {
    let var_1 = new cpcs_Ui$btn$lambda$_5_0();
    cpcs_Ui$btn$lambda$_5_0__init_(var_1, var_0);
    return var_1;
},
cpcs_Ui$btn$lambda$_5_0_handleEvent = (var$0, var$1) => {
    cpcs_Ui_lambda$btn$0(var$0.$_056, var$1);
},
cpcs_Ui$btn$lambda$_5_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
};
function cpce_MatchingEngine$MatchResult() {
    let a = this; jl_Record.call(a);
    a.$trades0 = null;
    a.$remainingOrder = null;
}
let cpce_MatchingEngine$MatchResult__init_0 = ($this, $trades, $remainingOrder) => {
    jl_Record__init_($this);
    $this.$trades0 = $trades;
    $this.$remainingOrder = $remainingOrder;
},
cpce_MatchingEngine$MatchResult__init_ = (var_0, var_1) => {
    let var_2 = new cpce_MatchingEngine$MatchResult();
    cpce_MatchingEngine$MatchResult__init_0(var_2, var_0, var_1);
    return var_2;
};
function cpcw_WhiteboardStudio$rebuildBotAvatars$lambda$_9_0() {
    let a = this; jl_Object.call(a);
    a.$_034 = null;
    a.$_14 = null;
}
let cpcw_WhiteboardStudio$rebuildBotAvatars$lambda$_9_0__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_034 = var$1;
    var$0.$_14 = var$2;
},
cpcw_WhiteboardStudio$rebuildBotAvatars$lambda$_9_0__init_0 = (var_0, var_1) => {
    let var_2 = new cpcw_WhiteboardStudio$rebuildBotAvatars$lambda$_9_0();
    cpcw_WhiteboardStudio$rebuildBotAvatars$lambda$_9_0__init_(var_2, var_0, var_1);
    return var_2;
},
cpcw_WhiteboardStudio$rebuildBotAvatars$lambda$_9_0_run = var$0 => {
    cpcw_WhiteboardStudio_lambda$rebuildBotAvatars$12(var$0.$_034, var$0.$_14);
};
function ju_LinkedHashMapIterator() {
    let a = this; jl_Object.call(a);
    a.$base0 = null;
    a.$reversed1 = 0;
    a.$expectedModCount = 0;
    a.$futureEntry = null;
    a.$currentEntry = null;
}
let ju_LinkedHashMapIterator__init_ = ($this, $base, $reversed) => {
    jl_Object__init_($this);
    $this.$base0 = $base;
    $this.$reversed1 = $reversed;
    $this.$expectedModCount = $base.$modCount0;
    $this.$futureEntry = !$reversed ? $base.$head0 : $base.$tail0;
},
ju_LinkedHashMapIterator__init_0 = (var_0, var_1) => {
    let var_2 = new ju_LinkedHashMapIterator();
    ju_LinkedHashMapIterator__init_(var_2, var_0, var_1);
    return var_2;
},
ju_LinkedHashMapIterator_hasNext = $this => {
    return $this.$futureEntry === null ? 0 : 1;
},
ju_LinkedHashMapIterator_checkConcurrentMod = $this => {
    if ($this.$expectedModCount == $this.$base0.$modCount0)
        return;
    $rt_throw(ju_ConcurrentModificationException__init_());
},
ju_LinkedHashMapIterator_makeNext = $this => {
    ju_LinkedHashMapIterator_checkConcurrentMod($this);
    if (!$this.$hasNext())
        $rt_throw(ju_NoSuchElementException__init_());
    $this.$currentEntry = $this.$futureEntry;
    $this.$futureEntry = !$this.$reversed1 ? $this.$futureEntry.$chainForward : $this.$futureEntry.$chainBackward;
},
ju_Iterator = $rt_classWithoutFields(0),
ju_LinkedHashMapIterator$ValueIterator = $rt_classWithoutFields(ju_LinkedHashMapIterator),
ju_LinkedHashMapIterator$ValueIterator__init_ = ($this, $map, $reversed) => {
    ju_LinkedHashMapIterator__init_($this, $map, $reversed);
},
ju_LinkedHashMapIterator$ValueIterator__init_0 = (var_0, var_1) => {
    let var_2 = new ju_LinkedHashMapIterator$ValueIterator();
    ju_LinkedHashMapIterator$ValueIterator__init_(var_2, var_0, var_1);
    return var_2;
},
ju_LinkedHashMapIterator$ValueIterator_next = $this => {
    ju_LinkedHashMapIterator_makeNext($this);
    return $this.$currentEntry.$value;
},
jl_ClassCastException = $rt_classWithoutFields(jl_RuntimeException),
cpcs_View = $rt_classWithoutFields(0);
function ju_AbstractMap() {
    let a = this; jl_Object.call(a);
    a.$cachedKeySet = null;
    a.$cachedValues = null;
}
let ju_AbstractMap__init_ = $this => {
    jl_Object__init_($this);
},
jl_Cloneable = $rt_classWithoutFields(0);
function ju_HashMap() {
    let a = this; ju_AbstractMap.call(a);
    a.$elementCount = 0;
    a.$elementData = null;
    a.$modCount0 = 0;
    a.$loadFactor = 0.0;
    a.$threshold = 0;
}
let ju_HashMap_newElementArray = ($this, $s) => {
    return $rt_createArray(ju_HashMap$HashEntry, $s);
},
ju_HashMap__init_0 = $this => {
    ju_HashMap__init_($this, 16);
},
ju_HashMap__init_2 = () => {
    let var_0 = new ju_HashMap();
    ju_HashMap__init_0(var_0);
    return var_0;
},
ju_HashMap__init_ = ($this, $capacity) => {
    ju_HashMap__init_1($this, $capacity, 0.75);
},
ju_HashMap__init_3 = var_0 => {
    let var_1 = new ju_HashMap();
    ju_HashMap__init_(var_1, var_0);
    return var_1;
},
ju_HashMap_calculateCapacity = $x => {
    let var$2, var$3;
    if ($x >= 1073741824)
        return 1073741824;
    if (!$x)
        return 16;
    var$2 = $x - 1 | 0;
    var$3 = var$2 | var$2 >> 1;
    var$3 = var$3 | var$3 >> 2;
    var$3 = var$3 | var$3 >> 4;
    var$3 = var$3 | var$3 >> 8;
    var$3 = var$3 | var$3 >> 16;
    return var$3 + 1 | 0;
},
ju_HashMap__init_1 = ($this, $capacity, $loadFactor) => {
    let var$3;
    ju_AbstractMap__init_($this);
    if ($capacity >= 0 && $loadFactor > 0.0) {
        var$3 = ju_HashMap_calculateCapacity($capacity);
        $this.$elementCount = 0;
        $this.$elementData = $this.$newElementArray(var$3);
        $this.$loadFactor = $loadFactor;
        ju_HashMap_computeThreshold($this);
        return;
    }
    $rt_throw(jl_IllegalArgumentException__init_());
},
ju_HashMap__init_4 = (var_0, var_1) => {
    let var_2 = new ju_HashMap();
    ju_HashMap__init_1(var_2, var_0, var_1);
    return var_2;
},
ju_HashMap_clear = $this => {
    if ($this.$elementCount > 0) {
        $this.$elementCount = 0;
        ju_Arrays_fill1($this.$elementData, null);
        $this.$modCount0 = $this.$modCount0 + 1 | 0;
    }
},
ju_HashMap_computeThreshold = $this => {
    $this.$threshold = $this.$elementData.data.length * $this.$loadFactor | 0;
},
ju_HashMap_get = ($this, $key) => {
    let $m;
    $m = ju_HashMap_entryByKey($this, $key);
    if ($m === null)
        return null;
    return $m.$value;
},
ju_HashMap_entryByKey = ($this, $key) => {
    let $m, $hash, $index;
    if ($key === null)
        $m = ju_HashMap_findNullKeyEntry($this);
    else {
        $hash = $key.$hashCode();
        $index = $hash & ($this.$elementData.data.length - 1 | 0);
        $m = ju_HashMap_findNonNullKeyEntry($this, $key, $index, $hash);
    }
    return $m;
},
ju_HashMap_findNonNullKeyEntry = ($this, $key, $index, $keyHash) => {
    let $m;
    $m = $this.$elementData.data[$index];
    while ($m !== null && !($m.$origKeyHash == $keyHash && ju_HashMap_areEqualKeys($key, $m.$key0))) {
        $m = $m.$next0;
    }
    return $m;
},
ju_HashMap_findNullKeyEntry = $this => {
    let $m;
    $m = $this.$elementData.data[0];
    while ($m !== null && $m.$key0 !== null) {
        $m = $m.$next0;
    }
    return $m;
},
ju_HashMap_put = ($this, $key, $value) => {
    return ju_HashMap_putImpl($this, $key, $value);
},
ju_HashMap_putImpl = ($this, $key, $value) => {
    let $entry, var$4, $hash, $index, $result;
    if ($key === null) {
        $entry = ju_HashMap_findNullKeyEntry($this);
        if ($entry === null) {
            $this.$modCount0 = $this.$modCount0 + 1 | 0;
            $entry = ju_HashMap_createHashedEntry($this, null, 0, 0);
            var$4 = $this.$elementCount + 1 | 0;
            $this.$elementCount = var$4;
            if (var$4 > $this.$threshold)
                $this.$rehash();
        }
    } else {
        $hash = $key.$hashCode();
        $index = $hash & ($this.$elementData.data.length - 1 | 0);
        $entry = ju_HashMap_findNonNullKeyEntry($this, $key, $index, $hash);
        if ($entry === null) {
            $this.$modCount0 = $this.$modCount0 + 1 | 0;
            $entry = ju_HashMap_createHashedEntry($this, $key, $index, $hash);
            var$4 = $this.$elementCount + 1 | 0;
            $this.$elementCount = var$4;
            if (var$4 > $this.$threshold)
                $this.$rehash();
        }
    }
    $result = $entry.$value;
    $entry.$value = $value;
    return $result;
},
ju_HashMap_createHashedEntry = ($this, $key, $index, $hash) => {
    let $entry;
    $entry = ju_HashMap$HashEntry__init_0($key, $hash);
    $entry.$next0 = $this.$elementData.data[$index];
    $this.$elementData.data[$index] = $entry;
    return $entry;
},
ju_HashMap_rehash0 = ($this, $capacity) => {
    let $length, $newData, $i, $entry, var$6, $index, $next;
    $length = ju_HashMap_calculateCapacity(!$capacity ? 1 : $capacity << 1);
    $newData = $this.$newElementArray($length);
    $i = 0;
    while ($i < $this.$elementData.data.length) {
        $entry = $this.$elementData.data[$i];
        $this.$elementData.data[$i] = null;
        while ($entry !== null) {
            var$6 = $newData.data;
            $index = $entry.$origKeyHash & ($length - 1 | 0);
            $next = $entry.$next0;
            $entry.$next0 = var$6[$index];
            var$6[$index] = $entry;
            $entry = $next;
        }
        $i = $i + 1 | 0;
    }
    $this.$elementData = $newData;
    ju_HashMap_computeThreshold($this);
},
ju_HashMap_rehash = $this => {
    $this.$rehash0($this.$elementData.data.length);
},
ju_HashMap_removeEntry = ($this, $entry) => {
    let $index, $m;
    $index = $entry.$origKeyHash & ($this.$elementData.data.length - 1 | 0);
    $m = $this.$elementData.data[$index];
    if ($m === $entry)
        $this.$elementData.data[$index] = $entry.$next0;
    else {
        while ($m.$next0 !== $entry) {
            $m = $m.$next0;
        }
        $m.$next0 = $entry.$next0;
    }
    $this.$modCount0 = $this.$modCount0 + 1 | 0;
    $this.$elementCount = $this.$elementCount - 1 | 0;
},
ju_HashMap_removeByKey = ($this, $key) => {
    let $index, $last, $entry, $entry_0, $hash;
    a: {
        $index = 0;
        $last = null;
        if ($key === null) {
            $entry = $this.$elementData.data[0];
            while ($entry !== null) {
                if ($entry.$key0 === null)
                    break a;
                $entry_0 = $entry.$next0;
                $last = $entry;
                $entry = $entry_0;
            }
        } else {
            $hash = $key.$hashCode();
            $index = $hash & ($this.$elementData.data.length - 1 | 0);
            $entry = $this.$elementData.data[$index];
            while ($entry !== null && !($entry.$origKeyHash == $hash && ju_HashMap_areEqualKeys($key, $entry.$key0))) {
                $entry_0 = $entry.$next0;
                $last = $entry;
                $entry = $entry_0;
            }
        }
    }
    if ($entry === null)
        return null;
    if ($last !== null)
        $last.$next0 = $entry.$next0;
    else
        $this.$elementData.data[$index] = $entry.$next0;
    $this.$modCount0 = $this.$modCount0 + 1 | 0;
    $this.$elementCount = $this.$elementCount - 1 | 0;
    return $entry;
},
ju_HashMap_size = $this => {
    return $this.$elementCount;
},
ju_HashMap_areEqualKeys = ($key1, $key2) => {
    return $key1 !== $key2 && !$key1.$equals($key2) ? 0 : 1;
};
function ju_LinkedHashMap() {
    let a = this; ju_HashMap.call(a);
    a.$accessOrder = 0;
    a.$head0 = null;
    a.$tail0 = null;
}
let ju_LinkedHashMap__init_0 = $this => {
    ju_HashMap__init_0($this);
    $this.$accessOrder = 0;
    $this.$head0 = null;
},
ju_LinkedHashMap__init_ = () => {
    let var_0 = new ju_LinkedHashMap();
    ju_LinkedHashMap__init_0(var_0);
    return var_0;
},
ju_LinkedHashMap_newElementArray = ($this, $s) => {
    return $rt_createArray(ju_LinkedHashMap$LinkedHashMapEntry, $s);
},
ju_LinkedHashMap_getOrDefault = ($this, $key, $defaultValue) => {
    let $entry, $hash, $index;
    if ($key === null)
        $entry = ju_HashMap_findNullKeyEntry($this);
    else {
        $hash = $key.$hashCode();
        $index = ($hash & 2147483647) % $this.$elementData.data.length | 0;
        $entry = ju_HashMap_findNonNullKeyEntry($this, $key, $index, $hash);
    }
    if ($entry === null)
        return $defaultValue;
    if ($this.$accessOrder)
        ju_LinkedHashMap_linkEntry($this, $entry, 0);
    return $entry.$value;
},
ju_LinkedHashMap_get = ($this, $key) => {
    return $this.$getOrDefault($key, null);
},
ju_LinkedHashMap_createHashedEntry = ($this, $key, $index, $hash, $first) => {
    let $entry;
    $entry = ju_LinkedHashMap$LinkedHashMapEntry__init_0($key, $hash);
    $entry.$next0 = $this.$elementData.data[$index];
    $this.$elementData.data[$index] = $entry;
    if (!$first) {
        if ($this.$tail0 === null)
            $this.$head0 = $entry;
        else
            $this.$tail0.$chainForward = $entry;
        $entry.$chainBackward = $this.$tail0;
        $this.$tail0 = $entry;
    } else {
        if ($this.$head0 === null)
            $this.$tail0 = $entry;
        else
            $this.$head0.$chainBackward = $entry;
        $entry.$chainForward = $this.$head0;
        $this.$head0 = $entry;
    }
    return $entry;
},
ju_LinkedHashMap_put = ($this, $key, $value) => {
    let $oldSize, $existing;
    $oldSize = $this.$size();
    $existing = $this.$putImpl0($key, $value, 0, $this.$accessOrder);
    if ($this.$size() != $oldSize && $this.$removeEldestEntry($this.$head0))
        $this.$removeLinkedEntry($this.$head0);
    return $existing;
},
ju_LinkedHashMap_putImpl = ($this, $key, $value, $first, $forceMotion) => {
    let $hash, var$6, $index, $entry, var$9, $existing;
    if (!$this.$elementCount) {
        $this.$head0 = null;
        $this.$tail0 = null;
    }
    $hash = ju_Objects_hashCode($key);
    var$6 = $hash & 2147483647;
    $index = var$6 % $this.$elementData.data.length | 0;
    $entry = $key === null ? ju_HashMap_findNullKeyEntry($this) : ju_HashMap_findNonNullKeyEntry($this, $key, $index, $hash);
    if ($entry === null) {
        $this.$modCount0 = $this.$modCount0 + 1 | 0;
        var$9 = $this.$elementCount + 1 | 0;
        $this.$elementCount = var$9;
        if (var$9 > $this.$threshold) {
            $this.$rehash();
            $index = var$6 % $this.$elementData.data.length | 0;
        }
        $entry = ju_LinkedHashMap_createHashedEntry($this, $key, $index, $hash, $first);
    } else if ($forceMotion)
        ju_LinkedHashMap_linkEntry($this, $entry, $first);
    $existing = $entry.$value;
    $entry.$value = $value;
    return $existing;
},
ju_LinkedHashMap_linkEntry = ($this, $entry, $first) => {
    let $n, $p;
    if (!$first) {
        $n = $entry.$chainForward;
        if ($n === null)
            return;
        $p = $entry.$chainBackward;
        if ($p === null)
            $this.$head0 = $n;
        else
            $p.$chainForward = $n;
        $n.$chainBackward = $p;
        if ($this.$tail0 !== null)
            $this.$tail0.$chainForward = $entry;
        $entry.$chainBackward = $this.$tail0;
        $entry.$chainForward = null;
        $this.$tail0 = $entry;
    } else {
        $p = $entry.$chainBackward;
        if ($p === null)
            return;
        $n = $entry.$chainForward;
        if ($n === null)
            $this.$tail0 = $p;
        else
            $n.$chainBackward = $p;
        $p.$chainForward = $n;
        if ($this.$head0 !== null)
            $this.$head0.$chainBackward = $entry;
        $entry.$chainForward = $this.$head0;
        $entry.$chainBackward = null;
        $this.$head0 = $entry;
    }
},
ju_LinkedHashMap_keySet = $this => {
    return $this.$sequencedKeySet();
},
ju_LinkedHashMap_sequencedKeySet = $this => {
    if ($this.$cachedKeySet === null)
        $this.$cachedKeySet = ju_LinkedHashMapKeySet__init_0($this, 0);
    return $this.$cachedKeySet;
},
ju_LinkedHashMap_values = $this => {
    return $this.$sequencedValues();
},
ju_LinkedHashMap_sequencedValues = $this => {
    if ($this.$cachedValues === null)
        $this.$cachedValues = ju_LinkedHashMapValues__init_0($this, 0);
    return $this.$cachedValues;
},
ju_LinkedHashMap_remove = ($this, $key) => {
    let $m;
    $m = ju_HashMap_removeByKey($this, $key);
    if ($m === null)
        return null;
    ju_LinkedHashMap_unlinkEntry($this, $m);
    return $m.$value;
},
ju_LinkedHashMap_removeLinkedEntry = ($this, $entry) => {
    ju_HashMap_removeEntry($this, $entry);
    ju_LinkedHashMap_unlinkEntry($this, $entry);
},
ju_LinkedHashMap_unlinkEntry = ($this, $entry) => {
    let $p, $n;
    $p = $entry.$chainBackward;
    $n = $entry.$chainForward;
    if ($p !== null) {
        $p.$chainForward = $n;
        if ($n === null)
            $this.$tail0 = $p;
        else
            $n.$chainBackward = $p;
    } else {
        $this.$head0 = $n;
        if ($n === null)
            $this.$tail0 = null;
        else
            $n.$chainBackward = null;
    }
},
ju_LinkedHashMap_removeEldestEntry = ($this, $eldest) => {
    return 0;
},
ju_LinkedHashMap_clear = $this => {
    ju_HashMap_clear($this);
    $this.$head0 = null;
    $this.$tail0 = null;
},
cpcm_OrderSide = $rt_classWithoutFields(jl_Enum),
cpcm_OrderSide_BUY = null,
cpcm_OrderSide_SELL = null,
cpcm_OrderSide_$VALUES = null,
cpcm_OrderSide_$callClinit = () => {
    cpcm_OrderSide_$callClinit = $rt_eraseClinit(cpcm_OrderSide);
    cpcm_OrderSide__clinit_();
},
cpcm_OrderSide__init_0 = ($this, var$1, var$2) => {
    cpcm_OrderSide_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
},
cpcm_OrderSide__init_ = (var_0, var_1) => {
    let var_2 = new cpcm_OrderSide();
    cpcm_OrderSide__init_0(var_2, var_0, var_1);
    return var_2;
},
cpcm_OrderSide_$values = () => {
    let var$1, var$2;
    cpcm_OrderSide_$callClinit();
    var$1 = $rt_createArray(cpcm_OrderSide, 2);
    var$2 = var$1.data;
    var$2[0] = cpcm_OrderSide_BUY;
    var$2[1] = cpcm_OrderSide_SELL;
    return var$1;
},
cpcm_OrderSide__clinit_ = () => {
    cpcm_OrderSide_BUY = cpcm_OrderSide__init_($rt_s(128), 0);
    cpcm_OrderSide_SELL = cpcm_OrderSide__init_($rt_s(129), 1);
    cpcm_OrderSide_$VALUES = cpcm_OrderSide_$values();
};
function cpcj_Ws$onClose$lambda$_3_0() {
    jl_Object.call(this);
    this.$_018 = null;
}
let cpcj_Ws$onClose$lambda$_3_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_018 = var$1;
},
cpcj_Ws$onClose$lambda$_3_0__init_0 = var_0 => {
    let var_1 = new cpcj_Ws$onClose$lambda$_3_0();
    cpcj_Ws$onClose$lambda$_3_0__init_(var_1, var_0);
    return var_1;
},
cpcj_Ws$onClose$lambda$_3_0_call = var$0 => {
    var$0.$_018.$run();
},
cpcj_Ws$onClose$lambda$_3_0_call$exported$0 = var$1 => {
    var$1.$call();
};
function cpcm_Order() {
    let a = this; jl_Object.call(a);
    a.$id3 = null;
    a.$traderId0 = null;
    a.$traderName1 = null;
    a.$side0 = null;
    a.$type2 = null;
    a.$price0 = 0.0;
    a.$size4 = 0.0;
    a.$filledSize = 0.0;
    a.$timestamp3 = Long_ZERO;
    a.$status1 = null;
    a.$optionKey0 = null;
}
let cpcm_Order__init_0 = ($this, $id, $traderId, $traderName, $side, $type, $price, $size, $filledSize, $timestamp, $status, $optionKey) => {
    jl_Object__init_($this);
    $this.$id3 = $id;
    $this.$traderId0 = $traderId;
    $this.$traderName1 = $traderName;
    $this.$side0 = $side;
    $this.$type2 = $type;
    $this.$price0 = $price;
    $this.$size4 = $size;
    $this.$filledSize = $filledSize;
    $this.$timestamp3 = $timestamp;
    $this.$status1 = $status;
    $this.$optionKey0 = $optionKey;
},
cpcm_Order__init_2 = (var_0, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9, var_10) => {
    let var_11 = new cpcm_Order();
    cpcm_Order__init_0(var_11, var_0, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9, var_10);
    return var_11;
},
cpcm_Order__init_ = ($this, $id, $traderId, $traderName, $side, $type, $price, $size, $filledSize, $timestamp, $status) => {
    cpcm_Order__init_0($this, $id, $traderId, $traderName, $side, $type, $price, $size, $filledSize, $timestamp, $status, null);
},
cpcm_Order__init_1 = (var_0, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9) => {
    let var_10 = new cpcm_Order();
    cpcm_Order__init_(var_10, var_0, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9);
    return var_10;
},
cpcm_Order_getId = $this => {
    return $this.$id3;
},
cpcm_Order_getTraderId = $this => {
    return $this.$traderId0;
},
cpcm_Order_getTraderName = $this => {
    return $this.$traderName1;
},
cpcm_Order_getSide = $this => {
    return $this.$side0;
},
cpcm_Order_getType = $this => {
    return $this.$type2;
},
cpcm_Order_getPrice = $this => {
    return $this.$price0;
},
cpcm_Order_getSize = $this => {
    return $this.$size4;
},
cpcm_Order_getFilledSize = $this => {
    return $this.$filledSize;
},
cpcm_Order_setFilledSize = ($this, $filledSize) => {
    $this.$filledSize = $filledSize;
},
cpcm_Order_getTimestamp = $this => {
    return $this.$timestamp3;
},
cpcm_Order_setStatus = ($this, $status) => {
    $this.$status1 = $status;
},
cpcm_Order_getOptionKey = $this => {
    return $this.$optionKey0;
},
cpcj_Js$StrCb = $rt_classWithoutFields(0),
jl_Iterable = $rt_classWithoutFields(0),
ju_Collection = $rt_classWithoutFields(0),
ju_AbstractCollection = $rt_classWithoutFields(),
ju_AbstractCollection__init_ = $this => {
    jl_Object__init_($this);
},
ju_AbstractCollection_isEmpty = $this => {
    return $this.$size() ? 0 : 1;
},
ju_AbstractCollection_toArray = ($this, $a) => {
    let var$2, $i, var$4, $iter;
    var$2 = $a.data;
    $i = $this.$size();
    var$4 = var$2.length;
    if (var$4 < $i)
        $a = jlr_Array_newInstance(jl_Class_getComponentType(jl_Object_getClass($a)), $i);
    else
        while ($i < var$4) {
            var$2[$i] = null;
            $i = $i + 1 | 0;
        }
    $i = 0;
    $iter = $this.$iterator();
    while ($iter.$hasNext()) {
        var$2 = $a.data;
        var$4 = $i + 1 | 0;
        var$2[$i] = $iter.$next();
        $i = var$4;
    }
    return $a;
},
ju_SequencedCollection = $rt_classWithoutFields(0);
function ju_LinkedHashMapValues() {
    let a = this; ju_AbstractCollection.call(a);
    a.$base1 = null;
    a.$reversed = 0;
}
let ju_LinkedHashMapValues__init_ = ($this, $base, $reversed) => {
    ju_AbstractCollection__init_($this);
    $this.$base1 = $base;
    $this.$reversed = $reversed;
},
ju_LinkedHashMapValues__init_0 = (var_0, var_1) => {
    let var_2 = new ju_LinkedHashMapValues();
    ju_LinkedHashMapValues__init_(var_2, var_0, var_1);
    return var_2;
},
ju_LinkedHashMapValues_iterator = $this => {
    return ju_LinkedHashMapIterator$ValueIterator__init_0($this.$base1, $this.$reversed);
};
function cpcj_JavaArchitectureViewer$CodeSnippet() {
    let a = this; jl_Record.call(a);
    a.$id0 = null;
    a.$title0 = null;
    a.$filename = null;
    a.$language = null;
    a.$description = null;
    a.$code = null;
}
let cpcj_JavaArchitectureViewer$CodeSnippet__init_0 = ($this, $id, $title, $filename, $language, $description, $code) => {
    jl_Record__init_($this);
    $this.$id0 = $id;
    $this.$title0 = $title;
    $this.$filename = $filename;
    $this.$language = $language;
    $this.$description = $description;
    $this.$code = $code;
},
cpcj_JavaArchitectureViewer$CodeSnippet__init_ = (var_0, var_1, var_2, var_3, var_4, var_5) => {
    let var_6 = new cpcj_JavaArchitectureViewer$CodeSnippet();
    cpcj_JavaArchitectureViewer$CodeSnippet__init_0(var_6, var_0, var_1, var_2, var_3, var_4, var_5);
    return var_6;
},
ju_Map$Entry = $rt_classWithoutFields(0);
function ju_MapEntry() {
    let a = this; jl_Object.call(a);
    a.$key0 = null;
    a.$value = null;
}
let ju_MapEntry__init_ = ($this, $theKey, $theValue) => {
    jl_Object__init_($this);
    $this.$key0 = $theKey;
    $this.$value = $theValue;
},
ju_MapEntry__init_0 = (var_0, var_1) => {
    let var_2 = new ju_MapEntry();
    ju_MapEntry__init_(var_2, var_0, var_1);
    return var_2;
};
function ju_HashMap$HashEntry() {
    let a = this; ju_MapEntry.call(a);
    a.$origKeyHash = 0;
    a.$next0 = null;
}
let ju_HashMap$HashEntry__init_ = ($this, $theKey, $hash) => {
    ju_MapEntry__init_($this, $theKey, null);
    $this.$origKeyHash = $hash;
},
ju_HashMap$HashEntry__init_0 = (var_0, var_1) => {
    let var_2 = new ju_HashMap$HashEntry();
    ju_HashMap$HashEntry__init_(var_2, var_0, var_1);
    return var_2;
};
function ju_LinkedHashMap$LinkedHashMapEntry() {
    let a = this; ju_HashMap$HashEntry.call(a);
    a.$chainForward = null;
    a.$chainBackward = null;
}
let ju_LinkedHashMap$LinkedHashMapEntry__init_ = ($this, $theKey, $hash) => {
    ju_HashMap$HashEntry__init_($this, $theKey, $hash);
    $this.$chainForward = null;
    $this.$chainBackward = null;
},
ju_LinkedHashMap$LinkedHashMapEntry__init_0 = (var_0, var_1) => {
    let var_2 = new ju_LinkedHashMap$LinkedHashMapEntry();
    ju_LinkedHashMap$LinkedHashMapEntry__init_(var_2, var_0, var_1);
    return var_2;
};
function cpcs_Ui$btnHtml$lambda$_6_0() {
    jl_Object.call(this);
    this.$_08 = null;
}
let cpcs_Ui$btnHtml$lambda$_6_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_08 = var$1;
},
cpcs_Ui$btnHtml$lambda$_6_0__init_0 = var_0 => {
    let var_1 = new cpcs_Ui$btnHtml$lambda$_6_0();
    cpcs_Ui$btnHtml$lambda$_6_0__init_(var_1, var_0);
    return var_1;
},
cpcs_Ui$btnHtml$lambda$_6_0_handleEvent = (var$0, var$1) => {
    cpcs_Ui_lambda$btnHtml$1(var$0.$_08, var$1);
},
cpcs_Ui$btnHtml$lambda$_6_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
};
function cpcs_Ui$onStop$lambda$_11_0() {
    jl_Object.call(this);
    this.$_079 = null;
}
let cpcs_Ui$onStop$lambda$_11_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_079 = var$1;
},
cpcs_Ui$onStop$lambda$_11_0__init_0 = var_0 => {
    let var_1 = new cpcs_Ui$onStop$lambda$_11_0();
    cpcs_Ui$onStop$lambda$_11_0__init_(var_1, var_0);
    return var_1;
},
cpcs_Ui$onStop$lambda$_11_0_handleEvent = (var$0, var$1) => {
    cpcs_Ui_lambda$onStop$3(var$0.$_079, var$1);
},
cpcs_Ui$onStop$lambda$_11_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
},
cpcw_Elements = $rt_classWithoutFields(),
cpcw_Elements_seed = () => {
    let $now, $seed, var$3, var$4, var$5, var$6, var$7;
    $now = jl_System_currentTimeMillis();
    $seed = ju_ArrayList__init_();
    var$3 = new cpcm_CanvasElement;
    cpcm_ElementType_$callClinit();
    cpcm_CanvasElement__init_(var$3, $rt_s(130), cpcm_ElementType_RECTANGLE, null, 180.0, 140.0, jl_Double_valueOf(200.0), jl_Double_valueOf(80.0), $rt_s(131), $rt_s(132), 2.0, $rt_s(133), $rt_s(134), $rt_s(135), $rt_s(131), $now);
    $seed.$add1(var$3);
    var$4 = new cpcm_CanvasElement;
    var$5 = cpcm_ElementType_ARROW;
    var$6 = $rt_createArray(cpcm_Point, 2);
    var$7 = var$6.data;
    var$7[0] = cpcm_Point__init_(380.0, 180.0);
    var$7[1] = cpcm_Point__init_(480.0, 180.0);
    cpcm_CanvasElement__init_(var$4, $rt_s(136), var$5, cpcw_Elements_pointsOf(var$6), 380.0, 180.0, null, null, $rt_s(137), null, 2.0, null, $rt_s(134), $rt_s(135), $rt_s(137), $now);
    $seed.$add1(var$4);
    $seed.$add1(cpcm_CanvasElement__init_0($rt_s(138), cpcm_ElementType_ELLIPSE, null, 480.0, 130.0, jl_Double_valueOf(220.0), jl_Double_valueOf(100.0), $rt_s(139), $rt_s(140), 2.0, $rt_s(141), $rt_s(134), $rt_s(135), $rt_s(139), $now));
    var$4 = new cpcm_CanvasElement;
    var$5 = cpcm_ElementType_ARROW;
    var$6 = $rt_createArray(cpcm_Point, 2);
    var$7 = var$6.data;
    var$7[0] = cpcm_Point__init_(700.0, 180.0);
    var$7[1] = cpcm_Point__init_(800.0, 180.0);
    cpcm_CanvasElement__init_(var$4, $rt_s(142), var$5, cpcw_Elements_pointsOf(var$6), 700.0, 180.0, null, null, $rt_s(137), null, 2.0, null, $rt_s(134), $rt_s(135), $rt_s(137), $now);
    $seed.$add1(var$4);
    $seed.$add1(cpcm_CanvasElement__init_0($rt_s(143), cpcm_ElementType_RECTANGLE, null, 800.0, 140.0, jl_Double_valueOf(210.0), jl_Double_valueOf(80.0), $rt_s(144), $rt_s(145), 2.0, $rt_s(146), $rt_s(134), $rt_s(135), $rt_s(144), $now));
    $seed.$add1(cpcm_CanvasElement__init_0($rt_s(147), cpcm_ElementType_STICKY, null, 520.0, 280.0, jl_Double_valueOf(170.0), jl_Double_valueOf(130.0), $rt_s(148), null, 1.0, $rt_s(149), $rt_s(150), $rt_s(151), $rt_s(152), $now));
    return $seed;
},
cpcw_Elements_pointsOf = $pts => {
    let var$2, $list, var$4, var$5, $p;
    var$2 = $pts.data;
    $list = ju_ArrayList__init_();
    var$4 = var$2.length;
    var$5 = 0;
    while (var$5 < var$4) {
        $p = var$2[var$5];
        $list.$add1($p);
        var$5 = var$5 + 1 | 0;
    }
    return $list;
},
cpcw_Elements_appended = ($list, $el) => {
    let $next;
    $next = ju_ArrayList__init_0($list);
    $next.$add1($el);
    return $next;
},
cpcw_Elements_withoutId = ($list, $id) => {
    let $next, var$4, $el;
    $next = ju_ArrayList__init_();
    var$4 = $list.$iterator();
    while (var$4.$hasNext()) {
        $el = var$4.$next();
        if (!(cpcm_CanvasElement_id($el)).$equals($id))
            $next.$add1($el);
    }
    return $next;
},
cpcw_Elements_indexOfId = ($list, $id) => {
    let $i;
    $i = 0;
    while (true) {
        if ($i >= $list.$size())
            return (-1);
        if ((cpcm_CanvasElement_id($list.$get0($i))).$equals($id))
            break;
        $i = $i + 1 | 0;
    }
    return $i;
},
cpcw_Elements_findById = ($list, $id) => {
    let $idx;
    $idx = cpcw_Elements_indexOfId($list, $id);
    return $idx < 0 ? null : $list.$get0($idx);
},
cpcw_Elements_withText = ($el, $text) => {
    let var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10;
    var$3 = new cpcm_CanvasElement;
    var$4 = cpcm_CanvasElement_id($el);
    var$5 = cpcm_CanvasElement_type($el);
    var$6 = cpcm_CanvasElement_points($el);
    var$7 = cpcm_CanvasElement_x($el);
    var$8 = cpcm_CanvasElement_y($el);
    var$9 = cpcm_CanvasElement_width($el);
    var$10 = cpcm_CanvasElement_height($el);
    cpcm_CanvasElement__init_(var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, cpcm_CanvasElement_color($el), cpcm_CanvasElement_fillColor($el), cpcm_CanvasElement_strokeWidth($el), $text, cpcm_CanvasElement_authorId($el), cpcm_CanvasElement_authorName($el), cpcm_CanvasElement_authorColor($el), cpcm_CanvasElement_updatedAt($el));
    return var$3;
},
cpcw_Elements_withPoints = ($el, $points) => {
    let var$3, var$4, var$5, var$6, var$7, var$8, var$9;
    var$3 = new cpcm_CanvasElement;
    var$4 = cpcm_CanvasElement_id($el);
    var$5 = cpcm_CanvasElement_type($el);
    var$6 = cpcm_CanvasElement_x($el);
    var$7 = cpcm_CanvasElement_y($el);
    var$8 = cpcm_CanvasElement_width($el);
    var$9 = cpcm_CanvasElement_height($el);
    cpcm_CanvasElement__init_(var$3, var$4, var$5, $points, var$6, var$7, var$8, var$9, cpcm_CanvasElement_color($el), cpcm_CanvasElement_fillColor($el), cpcm_CanvasElement_strokeWidth($el), cpcm_CanvasElement_text($el), cpcm_CanvasElement_authorId($el), cpcm_CanvasElement_authorName($el), cpcm_CanvasElement_authorColor($el), cpcm_CanvasElement_updatedAt($el));
    return var$3;
},
cpcw_Elements_withUpdatedAt = ($el, $updatedAt) => {
    let var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10;
    var$3 = new cpcm_CanvasElement;
    var$4 = cpcm_CanvasElement_id($el);
    var$5 = cpcm_CanvasElement_type($el);
    var$6 = cpcm_CanvasElement_points($el);
    var$7 = cpcm_CanvasElement_x($el);
    var$8 = cpcm_CanvasElement_y($el);
    var$9 = cpcm_CanvasElement_width($el);
    var$10 = cpcm_CanvasElement_height($el);
    cpcm_CanvasElement__init_(var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, cpcm_CanvasElement_color($el), cpcm_CanvasElement_fillColor($el), cpcm_CanvasElement_strokeWidth($el), cpcm_CanvasElement_text($el), cpcm_CanvasElement_authorId($el), cpcm_CanvasElement_authorName($el), cpcm_CanvasElement_authorColor($el), $updatedAt);
    return var$3;
};
function ju_AbstractList$1() {
    let a = this; jl_Object.call(a);
    a.$index0 = 0;
    a.$modCount1 = 0;
    a.$size6 = 0;
    a.$removeIndex = 0;
    a.$this$01 = null;
}
let ju_AbstractList$1__init_ = ($this, $this$0) => {
    $this.$this$01 = $this$0;
    jl_Object__init_($this);
    $this.$modCount1 = $this.$this$01.$modCount;
    $this.$size6 = $this.$this$01.$size();
    $this.$removeIndex = (-1);
},
ju_AbstractList$1__init_0 = var_0 => {
    let var_1 = new ju_AbstractList$1();
    ju_AbstractList$1__init_(var_1, var_0);
    return var_1;
},
ju_AbstractList$1_hasNext = $this => {
    return $this.$index0 >= $this.$size6 ? 0 : 1;
},
ju_AbstractList$1_next = $this => {
    let var$1, var$2;
    ju_AbstractList$1_checkConcurrentModification($this);
    $this.$removeIndex = $this.$index0;
    var$1 = $this.$this$01;
    var$2 = $this.$index0;
    $this.$index0 = var$2 + 1 | 0;
    return var$1.$get0(var$2);
},
ju_AbstractList$1_checkConcurrentModification = $this => {
    if ($this.$modCount1 >= $this.$this$01.$modCount)
        return;
    $rt_throw(ju_ConcurrentModificationException__init_());
};
function cpce_MatchingEngineStudio() {
    let a = this; jl_Object.call(a);
    a.$engine = null;
    a.$ring = null;
    a.$orderBook = null;
    a.$recentTrades = null;
    a.$isSimulating = 0;
    a.$simulatedTradersCount = 0;
    a.$targetOpsPerSec = 0;
    a.$orderSide = null;
    a.$orderType = null;
    a.$orderPrice = 0.0;
    a.$orderSize = 0.0;
    a.$metrics = null;
    a.$lastProcessedCount = Long_ZERO;
    a.$totalProcessed0 = Long_ZERO;
    a.$latencySamples = null;
    a.$simIntervalId = 0;
    a.$telemetryIntervalId = 0;
    a.$disposed0 = 0;
    a.$root5 = null;
    a.$throughputText = null;
    a.$p99Text = null;
    a.$tradersText = null;
    a.$midText = null;
    a.$spreadKpiSpan = null;
    a.$totalText = null;
    a.$asksWrap = null;
    a.$bidsWrap = null;
    a.$spreadStrong = null;
    a.$lastStrong = null;
    a.$usageSpan = null;
    a.$producerSpan = null;
    a.$slotDivs = null;
    a.$printedSpan = null;
    a.$tapeWrap = null;
    a.$tradersLabel = null;
    a.$opsLabel = null;
    a.$tradersSlider = null;
    a.$opsSlider = null;
    a.$pauseBtn0 = null;
    a.$buyBtn = null;
    a.$sellBtn = null;
    a.$limitBtn = null;
    a.$marketBtn = null;
    a.$priceGroup = null;
    a.$priceInput = null;
    a.$sizeInput = null;
    a.$submitBtn = null;
}
let cpce_MatchingEngineStudio__init_ = $this => {
    let $kpiGrid, $throughputValue, var$3, $p99Value, $tradersValue, $midValue, $totalValue, $mainGrid, $leftCard, $bookHeader, var$11, var$12, $bookTitle, var$14, $bookCols, $spreadBar, $spreadSpan, var$18, $lastSpan, $midCard, $ringHeader, var$22, $ringTitle, $legend, $producerItem, $slotsGrid, $i, $slot, $tape, $tapeHeader, $rightCol, $simCard, $simHeader, $tradersGroup, $tradersLabelRow, $opsGroup, $opsLabelRow, $simButtons, $burstBtn, $form, $formTitle, $sideToggle, $typeToggle, $sizeGroup;
    jl_Object__init_($this);
    $this.$engine = cpce_MatchingEngine__init_0(100.0);
    $this.$ring = cpce_RingBuffer__init_0(64);
    $this.$recentTrades = ju_List_of0();
    $this.$isSimulating = 1;
    $this.$simulatedTradersCount = 1000;
    $this.$targetOpsPerSec = 2500;
    cpcm_OrderSide_$callClinit();
    $this.$orderSide = cpcm_OrderSide_BUY;
    cpcm_OrderType_$callClinit();
    $this.$orderType = cpcm_OrderType_LIMIT;
    $this.$orderPrice = 100.0;
    $this.$orderSize = 5.0;
    $this.$metrics = cpcm_DisruptorMetrics__init_0(Long_ZERO, 0.0, 1.2, 3.4, 7.8, 64, Long_ZERO, Long_ZERO, 12.0);
    $this.$lastProcessedCount = Long_ZERO;
    $this.$totalProcessed0 = Long_ZERO;
    $this.$latencySamples = ju_ArrayDeque__init_1();
    $this.$simIntervalId = (-1);
    $this.$telemetryIntervalId = (-1);
    $this.$disposed0 = 0;
    $this.$slotDivs = ju_ArrayList__init_();
    cpce_MatchingEngineStudio_seedBook($this);
    $this.$orderBook = cpce_MatchingEngine_getOrderBookState($this.$engine);
    $this.$root5 = cpcs_Ui_el($rt_s(21), $rt_s(153));
    $kpiGrid = cpcs_Ui_el($rt_s(21), $rt_s(154));
    $throughputValue = cpce_MatchingEngineStudio_kpiCard($kpiGrid, $rt_s(155), $rt_s(156), $rt_s(157), $rt_s(158));
    $this.$throughputText = cpce_MatchingEngineStudio_textNode($throughputValue, $rt_s(159));
    var$3 = $rt_createArray(jl_Object, 1);
    var$3.data[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(160), $rt_s(161)));
    cpcs_Ui_add($throughputValue, var$3);
    $p99Value = cpce_MatchingEngineStudio_kpiCard($kpiGrid, $rt_s(162), $rt_s(163), $rt_s(164), $rt_s(165));
    $this.$p99Text = cpce_MatchingEngineStudio_textNode($p99Value, $rt_s(166));
    var$3 = $rt_createArray(jl_Object, 1);
    var$3.data[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(160), $rt_s(167)));
    cpcs_Ui_add($p99Value, var$3);
    $tradersValue = cpce_MatchingEngineStudio_kpiCard($kpiGrid, $rt_s(168), $rt_s(122), $rt_s(169), $rt_s(170));
    $this.$tradersText = cpce_MatchingEngineStudio_textNode($tradersValue, $rt_s(171));
    var$3 = $rt_createArray(jl_Object, 1);
    var$3.data[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(160), $rt_s(172)));
    cpcs_Ui_add($tradersValue, var$3);
    $midValue = cpce_MatchingEngineStudio_kpiCard($kpiGrid, $rt_s(173), $rt_s(174), $rt_s(175), $rt_s(176));
    $this.$midText = cpce_MatchingEngineStudio_textNode($midValue, $rt_s(177));
    $this.$spreadKpiSpan = cpcs_Ui_el($rt_s(28), $rt_s(178));
    var$3 = $rt_createArray(jl_Object, 1);
    var$3.data[0] = otji_JSWrapper_wrap($this.$spreadKpiSpan);
    cpcs_Ui_add($midValue, var$3);
    $totalValue = cpce_MatchingEngineStudio_kpiCard($kpiGrid, $rt_s(179), $rt_s(180), $rt_s(181), $rt_s(182));
    $this.$totalText = cpce_MatchingEngineStudio_textNode($totalValue, $rt_s(159));
    var$3 = $rt_createArray(jl_Object, 1);
    var$3.data[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(160), $rt_s(183)));
    cpcs_Ui_add($totalValue, var$3);
    $mainGrid = cpcs_Ui_el($rt_s(21), $rt_s(184));
    $leftCard = cpcs_Ui_el($rt_s(21), $rt_s(185));
    $bookHeader = cpcs_Ui_el($rt_s(21), $rt_s(186));
    var$11 = cpcs_Icons_svg($rt_s(187), $rt_s(188));
    var$12 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$12, var$11), $rt_s(189));
    var$11 = jl_StringBuilder_toString(var$12);
    $bookTitle = cpcs_Ui_html($rt_s(21), $rt_s(190), var$11);
    var$3 = $rt_createArray(jl_Object, 2);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap($bookTitle);
    var$14[1] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(191), $rt_s(192)));
    cpcs_Ui_add($bookHeader, var$3);
    $bookCols = cpcs_Ui_el($rt_s(21), $rt_s(193));
    var$3 = $rt_createArray(jl_Object, 3);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(24), $rt_s(194)));
    var$14[1] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(195), $rt_s(196)));
    var$14[2] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(195), $rt_s(197)));
    cpcs_Ui_add($bookCols, var$3);
    $this.$asksWrap = cpcs_Ui_el($rt_s(21), $rt_s(198));
    $spreadBar = cpcs_Ui_el($rt_s(21), $rt_s(199));
    $spreadSpan = cpcs_Ui_el($rt_s(28), $rt_s(200));
    var$18 = (cpcs_Ui_doc()).createTextNode("Spread: ");
    $spreadSpan.appendChild(var$18);
    $this.$spreadStrong = cpcs_Ui_el($rt_s(201), $rt_s(202));
    var$3 = $rt_createArray(jl_Object, 1);
    var$3.data[0] = otji_JSWrapper_wrap($this.$spreadStrong);
    cpcs_Ui_add($spreadSpan, var$3);
    $lastSpan = cpcs_Ui_el($rt_s(28), $rt_s(200));
    var$18 = (cpcs_Ui_doc()).createTextNode("Last Executed: ");
    $lastSpan.appendChild(var$18);
    $this.$lastStrong = cpcs_Ui_el($rt_s(201), $rt_s(203));
    var$3 = $rt_createArray(jl_Object, 1);
    var$3.data[0] = otji_JSWrapper_wrap($this.$lastStrong);
    cpcs_Ui_add($lastSpan, var$3);
    var$3 = $rt_createArray(jl_Object, 2);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap($spreadSpan);
    var$14[1] = otji_JSWrapper_wrap($lastSpan);
    cpcs_Ui_add($spreadBar, var$3);
    $this.$bidsWrap = cpcs_Ui_el($rt_s(21), $rt_s(204));
    var$3 = $rt_createArray(jl_Object, 5);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap($bookHeader);
    var$14[1] = otji_JSWrapper_wrap($bookCols);
    var$14[2] = otji_JSWrapper_wrap($this.$asksWrap);
    var$14[3] = otji_JSWrapper_wrap($spreadBar);
    var$14[4] = otji_JSWrapper_wrap($this.$bidsWrap);
    cpcs_Ui_add($leftCard, var$3);
    $midCard = cpcs_Ui_el($rt_s(21), $rt_s(205));
    $ringHeader = cpcs_Ui_el($rt_s(21), $rt_s(186));
    var$22 = cpcs_Icons_svg($rt_s(120), $rt_s(188));
    var$18 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$18, var$22), $rt_s(206));
    var$18 = jl_StringBuilder_toString(var$18);
    $ringTitle = cpcs_Ui_html($rt_s(21), $rt_s(190), var$18);
    $this.$usageSpan = cpcs_Ui_el($rt_s(28), $rt_s(207));
    var$3 = $rt_createArray(jl_Object, 2);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap($ringTitle);
    var$14[1] = otji_JSWrapper_wrap($this.$usageSpan);
    cpcs_Ui_add($ringHeader, var$3);
    $legend = cpcs_Ui_el($rt_s(21), $rt_s(208));
    $producerItem = cpcs_Ui_el($rt_s(21), $rt_s(209));
    $this.$producerSpan = cpcs_Ui_el($rt_s(28), $rt_s(24));
    var$3 = $rt_createArray(jl_Object, 2);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap(cpcs_Ui_el($rt_s(28), $rt_s(210)));
    var$14[1] = otji_JSWrapper_wrap($this.$producerSpan);
    cpcs_Ui_add($producerItem, var$3);
    var$3 = $rt_createArray(jl_Object, 4);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap($producerItem);
    var$14[1] = otji_JSWrapper_wrap(cpce_MatchingEngineStudio_legendItem($rt_s(211), $rt_s(212)));
    var$14[2] = otji_JSWrapper_wrap(cpce_MatchingEngineStudio_legendItem($rt_s(213), $rt_s(214)));
    var$14[3] = otji_JSWrapper_wrap(cpce_MatchingEngineStudio_legendItem($rt_s(215), $rt_s(216)));
    cpcs_Ui_add($legend, var$3);
    $slotsGrid = cpcs_Ui_el($rt_s(21), $rt_s(217));
    $i = 0;
    while ($i < cpce_RingBuffer_getCapacity($this.$ring)) {
        $slot = cpcs_Ui_el0($rt_s(21), $rt_s(24), jl_String_valueOf($i));
        $this.$slotDivs.$add1(otji_JSWrapper_wrap($slot));
        var$3 = $rt_createArray(jl_Object, 1);
        var$3.data[0] = otji_JSWrapper_wrap($slot);
        cpcs_Ui_add($slotsGrid, var$3);
        $i = $i + 1 | 0;
    }
    $tape = cpcs_Ui_el($rt_s(21), $rt_s(218));
    $tapeHeader = cpcs_Ui_el($rt_s(21), $rt_s(219));
    $this.$printedSpan = cpcs_Ui_el($rt_s(28), $rt_s(220));
    var$3 = $rt_createArray(jl_Object, 2);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(221), $rt_s(222)));
    var$14[1] = otji_JSWrapper_wrap($this.$printedSpan);
    cpcs_Ui_add($tapeHeader, var$3);
    $this.$tapeWrap = cpcs_Ui_el($rt_s(21), $rt_s(223));
    var$3 = $rt_createArray(jl_Object, 2);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap($tapeHeader);
    var$14[1] = otji_JSWrapper_wrap($this.$tapeWrap);
    cpcs_Ui_add($tape, var$3);
    var$3 = $rt_createArray(jl_Object, 4);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap($ringHeader);
    var$14[1] = otji_JSWrapper_wrap($legend);
    var$14[2] = otji_JSWrapper_wrap($slotsGrid);
    var$14[3] = otji_JSWrapper_wrap($tape);
    cpcs_Ui_add($midCard, var$3);
    $rightCol = cpcs_Ui_el($rt_s(21), $rt_s(224));
    $simCard = cpcs_Ui_el($rt_s(21), $rt_s(225));
    $simHeader = cpcs_Ui_el($rt_s(21), $rt_s(226));
    var$3 = $rt_createArray(jl_Object, 1);
    var$14 = var$3.data;
    var$22 = cpcs_Icons_svg($rt_s(122), $rt_s(227));
    var$18 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$18, var$22), $rt_s(228));
    var$18 = jl_StringBuilder_toString(var$18);
    var$14[0] = otji_JSWrapper_wrap(cpcs_Ui_html($rt_s(229), $rt_s(230), var$18));
    cpcs_Ui_add($simHeader, var$3);
    $tradersGroup = cpcs_Ui_el($rt_s(21), $rt_s(231));
    $tradersLabelRow = cpcs_Ui_el($rt_s(21), $rt_s(232));
    $this.$tradersLabel = cpcs_Ui_el($rt_s(28), $rt_s(233));
    var$3 = $rt_createArray(jl_Object, 2);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(24), $rt_s(234)));
    var$14[1] = otji_JSWrapper_wrap($this.$tradersLabel);
    cpcs_Ui_add($tradersLabelRow, var$3);
    $this.$tradersSlider = cpcs_Ui_input($rt_s(235), $rt_s(236), $rt_s(237), $rt_s(24));
    $this.$tradersSlider.setAttribute("min", "50");
    $this.$tradersSlider.setAttribute("max", "5000");
    $this.$tradersSlider.setAttribute("step", "50");
    cpcs_Ui_onInput($this.$tradersSlider, cpce_MatchingEngineStudio$_init_$lambda$_0_0__init_0($this));
    var$3 = $rt_createArray(jl_Object, 2);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap($tradersLabelRow);
    var$14[1] = otji_JSWrapper_wrap($this.$tradersSlider);
    cpcs_Ui_add($tradersGroup, var$3);
    $opsGroup = cpcs_Ui_el($rt_s(21), $rt_s(231));
    $opsLabelRow = cpcs_Ui_el($rt_s(21), $rt_s(232));
    $this.$opsLabel = cpcs_Ui_el($rt_s(28), $rt_s(238));
    var$3 = $rt_createArray(jl_Object, 2);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(24), $rt_s(239)));
    var$14[1] = otji_JSWrapper_wrap($this.$opsLabel);
    cpcs_Ui_add($opsLabelRow, var$3);
    $this.$opsSlider = cpcs_Ui_input($rt_s(240), $rt_s(236), $rt_s(241), $rt_s(24));
    $this.$opsSlider.setAttribute("min", "200");
    $this.$opsSlider.setAttribute("max", "10000");
    $this.$opsSlider.setAttribute("step", "200");
    cpcs_Ui_onInput($this.$opsSlider, cpce_MatchingEngineStudio$_init_$lambda$_0_1__init_0($this));
    var$3 = $rt_createArray(jl_Object, 2);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap($opsLabelRow);
    var$14[1] = otji_JSWrapper_wrap($this.$opsSlider);
    cpcs_Ui_add($opsGroup, var$3);
    $simButtons = cpcs_Ui_el($rt_s(21), $rt_s(242));
    $this.$pauseBtn0 = cpcs_Ui_btnHtml($rt_s(24), $rt_s(24), cpce_MatchingEngineStudio$_init_$lambda$_0_2__init_0($this));
    var$22 = cpcs_Icons_svg($rt_s(156), $rt_s(243));
    var$18 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$18, var$22), $rt_s(244));
    var$18 = jl_StringBuilder_toString(var$18);
    var$22 = cpce_MatchingEngineStudio$_init_$lambda$_0_3__init_0($this);
    $burstBtn = cpcs_Ui_btnHtml($rt_s(245), var$18, var$22);
    var$3 = $rt_createArray(jl_Object, 2);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap($this.$pauseBtn0);
    var$14[1] = otji_JSWrapper_wrap($burstBtn);
    cpcs_Ui_add($simButtons, var$3);
    var$3 = $rt_createArray(jl_Object, 4);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap($simHeader);
    var$14[1] = otji_JSWrapper_wrap($tradersGroup);
    var$14[2] = otji_JSWrapper_wrap($opsGroup);
    var$14[3] = otji_JSWrapper_wrap($simButtons);
    cpcs_Ui_add($simCard, var$3);
    $form = cpcs_Ui_el($rt_s(246), $rt_s(225));
    cpce_MatchingEngineStudio_onSubmit$js_body$_29($form, otji_JS_function(otji_JSWrapper_unwrap(cpce_MatchingEngineStudio$_init_$lambda$_0_4__init_0($this)), "call"));
    $formTitle = cpcs_Ui_el0($rt_s(229), $rt_s(247), $rt_s(248));
    $sideToggle = cpcs_Ui_el($rt_s(21), $rt_s(249));
    $this.$buyBtn = cpcs_Ui_btn($rt_s(24), $rt_s(250), cpce_MatchingEngineStudio$_init_$lambda$_0_5__init_0($this));
    $this.$sellBtn = cpcs_Ui_btn($rt_s(24), $rt_s(251), cpce_MatchingEngineStudio$_init_$lambda$_0_6__init_0($this));
    $this.$buyBtn.setAttribute("type", "button");
    $this.$sellBtn.setAttribute("type", "button");
    var$3 = $rt_createArray(jl_Object, 2);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap($this.$buyBtn);
    var$14[1] = otji_JSWrapper_wrap($this.$sellBtn);
    cpcs_Ui_add($sideToggle, var$3);
    $typeToggle = cpcs_Ui_el($rt_s(21), $rt_s(249));
    $this.$limitBtn = cpcs_Ui_btn($rt_s(24), $rt_s(252), cpce_MatchingEngineStudio$_init_$lambda$_0_7__init_0($this));
    $this.$marketBtn = cpcs_Ui_btn($rt_s(24), $rt_s(253), cpce_MatchingEngineStudio$_init_$lambda$_0_8__init_0($this));
    $this.$limitBtn.setAttribute("type", "button");
    $this.$marketBtn.setAttribute("type", "button");
    var$3 = $rt_createArray(jl_Object, 2);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap($this.$limitBtn);
    var$14[1] = otji_JSWrapper_wrap($this.$marketBtn);
    cpcs_Ui_add($typeToggle, var$3);
    $this.$priceGroup = cpcs_Ui_el($rt_s(21), $rt_s(254));
    $this.$priceInput = cpcs_Ui_input($rt_s(255), $rt_s(256), $rt_s(257), $rt_s(24));
    $this.$priceInput.setAttribute("step", "0.1");
    cpcs_Ui_onInput($this.$priceInput, cpce_MatchingEngineStudio$_init_$lambda$_0_9__init_0($this));
    var$18 = $this.$priceGroup;
    var$3 = $rt_createArray(jl_Object, 2);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(258), $rt_s(259), $rt_s(194)));
    var$14[1] = otji_JSWrapper_wrap($this.$priceInput);
    cpcs_Ui_add(var$18, var$3);
    $sizeGroup = cpcs_Ui_el($rt_s(21), $rt_s(254));
    $this.$sizeInput = cpcs_Ui_input($rt_s(255), $rt_s(256), $rt_s(260), $rt_s(24));
    $this.$sizeInput.setAttribute("min", "1");
    $this.$sizeInput.setAttribute("max", "1000");
    cpcs_Ui_onInput($this.$sizeInput, cpce_MatchingEngineStudio$_init_$lambda$_0_10__init_0($this));
    var$3 = $rt_createArray(jl_Object, 2);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(258), $rt_s(259), $rt_s(261)));
    var$14[1] = otji_JSWrapper_wrap($this.$sizeInput);
    cpcs_Ui_add($sizeGroup, var$3);
    $this.$submitBtn = cpcs_Ui_btn($rt_s(24), $rt_s(24), cpce_MatchingEngineStudio$_init_$lambda$_0_11__init_0());
    $this.$submitBtn.setAttribute("type", "submit");
    var$3 = $rt_createArray(jl_Object, 6);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap($formTitle);
    var$14[1] = otji_JSWrapper_wrap($sideToggle);
    var$14[2] = otji_JSWrapper_wrap($typeToggle);
    var$14[3] = otji_JSWrapper_wrap($this.$priceGroup);
    var$14[4] = otji_JSWrapper_wrap($sizeGroup);
    var$14[5] = otji_JSWrapper_wrap($this.$submitBtn);
    cpcs_Ui_add($form, var$3);
    var$3 = $rt_createArray(jl_Object, 2);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap($simCard);
    var$14[1] = otji_JSWrapper_wrap($form);
    cpcs_Ui_add($rightCol, var$3);
    var$3 = $rt_createArray(jl_Object, 3);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap($leftCard);
    var$14[1] = otji_JSWrapper_wrap($midCard);
    var$14[2] = otji_JSWrapper_wrap($rightCol);
    cpcs_Ui_add($mainGrid, var$3);
    var$18 = $this.$root5;
    var$3 = $rt_createArray(jl_Object, 2);
    var$14 = var$3.data;
    var$14[0] = otji_JSWrapper_wrap($kpiGrid);
    var$14[1] = otji_JSWrapper_wrap($mainGrid);
    cpcs_Ui_add(var$18, var$3);
    cpce_MatchingEngineStudio_update($this);
    $this.$telemetryIntervalId = setInterval(otji_JS_function(otji_JSWrapper_unwrap(cpce_MatchingEngineStudio$_init_$lambda$_0_12__init_0($this)), "call"), 500);
    cpce_MatchingEngineStudio_restartSim($this);
},
cpce_MatchingEngineStudio__init_0 = () => {
    let var_0 = new cpce_MatchingEngineStudio();
    cpce_MatchingEngineStudio__init_(var_0);
    return var_0;
},
cpce_MatchingEngineStudio_root = $this => {
    return $this.$root5;
},
cpce_MatchingEngineStudio_onPrimaryAction = $this => {
    let $i;
    $i = 0;
    while ($i < 20) {
        cpce_MatchingEngineStudio_injectBurst($this);
        $i = $i + 1 | 0;
    }
    cpce_MatchingEngineStudio_update($this);
},
cpce_MatchingEngineStudio_dispose = $this => {
    $this.$disposed0 = 1;
    if ($this.$simIntervalId >= 0) {
        clearInterval($this.$simIntervalId);
        $this.$simIntervalId = (-1);
    }
    if ($this.$telemetryIntervalId >= 0) {
        clearInterval($this.$telemetryIntervalId);
        $this.$telemetryIntervalId = (-1);
    }
},
cpce_MatchingEngineStudio_seedBook = $this => {
    let $i, var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9;
    $i = 1;
    while ($i <= 6) {
        var$2 = $this.$engine;
        var$3 = new cpcm_OrderInput;
        var$4 = jl_StringBuilder__init_();
        jl_StringBuilder_append1(jl_StringBuilder_append(var$4, $rt_s(262)), $i);
        var$5 = jl_StringBuilder_toString(var$4);
        var$4 = jl_StringBuilder__init_();
        jl_StringBuilder_append1(jl_StringBuilder_append(var$4, $rt_s(263)), $i);
        var$6 = jl_StringBuilder_toString(var$4);
        var$4 = jl_StringBuilder__init_();
        jl_StringBuilder_append1(jl_StringBuilder_append(var$4, $rt_s(264)), $i);
        var$7 = jl_StringBuilder_toString(var$4);
        cpcm_OrderSide_$callClinit();
        var$4 = cpcm_OrderSide_BUY;
        cpcm_OrderType_$callClinit();
        var$8 = cpcm_OrderType_LIMIT;
        var$9 = 100.0 - $i * 0.25;
        cpcm_OrderInput__init_0(var$3, var$5, var$6, var$7, var$4, var$8, cpce_MatchingEngineStudio_round2(var$9), 10.0 + jl_Math_random() * 40.0 | 0);
        cpce_MatchingEngine_processOrder(var$2, var$3);
        $i = $i + 1 | 0;
    }
    $i = 1;
    while ($i <= 6) {
        var$4 = $this.$engine;
        var$8 = new cpcm_OrderInput;
        var$2 = jl_StringBuilder__init_();
        jl_StringBuilder_append1(jl_StringBuilder_append(var$2, $rt_s(265)), $i);
        var$5 = jl_StringBuilder_toString(var$2);
        var$2 = jl_StringBuilder__init_();
        jl_StringBuilder_append1(jl_StringBuilder_append(var$2, $rt_s(266)), $i);
        var$6 = jl_StringBuilder_toString(var$2);
        var$2 = jl_StringBuilder__init_();
        jl_StringBuilder_append1(jl_StringBuilder_append(var$2, $rt_s(267)), $i);
        var$7 = jl_StringBuilder_toString(var$2);
        cpcm_OrderSide_$callClinit();
        var$2 = cpcm_OrderSide_SELL;
        cpcm_OrderType_$callClinit();
        var$3 = cpcm_OrderType_LIMIT;
        var$9 = 100.0 + $i * 0.25;
        cpcm_OrderInput__init_0(var$8, var$5, var$6, var$7, var$2, var$3, cpce_MatchingEngineStudio_round2(var$9), 10.0 + jl_Math_random() * 40.0 | 0);
        cpce_MatchingEngine_processOrder(var$4, var$8);
        $i = $i + 1 | 0;
    }
},
cpce_MatchingEngineStudio_restartSim = $this => {
    let $batchSize;
    if ($this.$simIntervalId >= 0) {
        clearInterval($this.$simIntervalId);
        $this.$simIntervalId = (-1);
    }
    if (!$this.$isSimulating)
        return;
    $batchSize = jl_Math_max(1, Long_lo((jl_Math_round(($this.$targetOpsPerSec * 50 | 0) / 1000.0))));
    $this.$simIntervalId = setInterval(otji_JS_function(otji_JSWrapper_unwrap(cpce_MatchingEngineStudio$restartSim$lambda$_5_0__init_0($this, $batchSize)), "call"), 50);
},
cpce_MatchingEngineStudio_simTick = ($this, $batchSize) => {
    let $basePrice, $i, $side, $isMarket, $delta, $price, $size, $traderIdx, $order, var$11, var$12, var$13, var$14, var$15, var$16, $t0, $latencyUs;
    if ($this.$disposed0)
        return;
    $basePrice = cpcm_OrderBookState_midPrice(cpce_MatchingEngine_getOrderBookState($this.$engine));
    if ($basePrice === 0.0)
        $basePrice = 100.0;
    $i = 0;
    while ($i < $batchSize) {
        if (jl_Math_random() <= 0.5) {
            cpcm_OrderSide_$callClinit();
            $side = cpcm_OrderSide_SELL;
        } else {
            cpcm_OrderSide_$callClinit();
            $side = cpcm_OrderSide_BUY;
        }
        $isMarket = jl_Math_random() >= 0.2 ? 0 : 1;
        $delta = (jl_Math_random() - 0.5) * 1.5;
        if ($isMarket)
            $price = 0.0;
        else {
            cpcm_OrderSide_$callClinit();
            $price = cpce_MatchingEngineStudio_round2(jl_Math_max0(10.0, $side !== cpcm_OrderSide_BUY ? $basePrice + jl_Math_abs1($delta) : $basePrice - jl_Math_abs1($delta)));
        }
        $size = 1.0 + jl_Math_random() * 15.0 | 0;
        $traderIdx = jl_Math_random() * $this.$simulatedTradersCount | 0;
        $order = new cpcm_Order;
        var$11 = jl_System_currentTimeMillis();
        var$12 = $rt_str(((Math.random()).toString(36)).slice(2, 5));
        var$13 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append1(jl_StringBuilder_append0(jl_StringBuilder_append2(jl_StringBuilder_append(var$13, $rt_s(268)), var$11), 45), $i), 45), var$12);
        var$14 = jl_StringBuilder_toString(var$13);
        var$12 = jl_StringBuilder__init_();
        jl_StringBuilder_append1(jl_StringBuilder_append(var$12, $rt_s(269)), $traderIdx);
        var$12 = jl_StringBuilder_toString(var$12);
        var$13 = jl_StringBuilder__init_();
        jl_StringBuilder_append1(jl_StringBuilder_append(var$13, $rt_s(270)), $traderIdx);
        var$13 = jl_StringBuilder_toString(var$13);
        if (!$isMarket) {
            cpcm_OrderType_$callClinit();
            var$15 = cpcm_OrderType_LIMIT;
        } else {
            cpcm_OrderType_$callClinit();
            var$15 = cpcm_OrderType_MARKET;
        }
        var$16 = $size;
        var$11 = jl_System_currentTimeMillis();
        cpcm_OrderStatus_$callClinit();
        cpcm_Order__init_($order, var$14, var$12, var$13, $side, var$15, $price, var$16, 0.0, var$11, cpcm_OrderStatus_NEW);
        $t0 = performance.now();
        cpce_RingBuffer_publish($this.$ring, $order);
        cpce_RingBuffer_stepJournaler($this.$ring, 1);
        cpce_RingBuffer_stepMatching($this.$ring, 1, cpce_MatchingEngineStudio$simTick$lambda$_6_0__init_0($this));
        cpce_RingBuffer_stepPublisher($this.$ring, 1);
        $latencyUs = (performance.now() - $t0) * 1000.0;
        $this.$latencySamples.$addLast(jl_Double_valueOf($latencyUs));
        if ($this.$latencySamples.$size() > 200)
            $this.$latencySamples.$removeFirst();
        $this.$totalProcessed0 = Long_add($this.$totalProcessed0, Long_fromInt(1));
        $i = $i + 1 | 0;
    }
    $this.$orderBook = cpce_MatchingEngine_getOrderBookState($this.$engine);
    $this.$recentTrades = cpce_MatchingEngineStudio_fetchTrades($this);
    cpce_MatchingEngineStudio_update($this);
},
cpce_MatchingEngineStudio_telemetryTick = $this => {
    let $currentCount, $delta, $throughput, $avg, $p99, $max, $sorted, $i, $sum, var$10, var$11, $v, var$13, var$14, var$15, $p99Raw, $maxRaw, $cursors, var$19;
    if ($this.$disposed0)
        return;
    $currentCount = $this.$totalProcessed0;
    $delta = Long_sub($currentCount, $this.$lastProcessedCount);
    $this.$lastProcessedCount = $currentCount;
    $throughput = Long_toNumber(Long_mul($delta, Long_fromInt(2)));
    $avg = 1.2;
    $p99 = 3.4;
    $max = 7.8;
    if (!$this.$latencySamples.$isEmpty()) {
        $sorted = $rt_createDoubleArray($this.$latencySamples.$size());
        $i = 0;
        $sum = 0.0;
        var$10 = $this.$latencySamples.$iterator();
        while (var$10.$hasNext()) {
            var$11 = $sorted.data;
            $v = (var$10.$next()).$doubleValue();
            var$13 = $i + 1 | 0;
            var$11[$i] = $v;
            $sum = $sum + $v;
            $i = var$13;
        }
        var$11 = $sorted.data;
        ju_Arrays_sort($sorted);
        var$14 = var$11.length;
        var$15 = var$14;
        $avg = cpce_MatchingEngineStudio_round1($sum / var$15);
        $p99Raw = var$11[jl_Math_floor(var$15 * 0.99) | 0];
        if ($p99Raw === 0.0)
            $p99Raw = $avg;
        $p99 = cpce_MatchingEngineStudio_round1($p99Raw);
        $maxRaw = var$11[var$14 - 1 | 0];
        if ($maxRaw === 0.0)
            $maxRaw = $avg;
        $max = cpce_MatchingEngineStudio_round1($maxRaw);
    }
    $cursors = cpce_RingBuffer_getCursors($this.$ring);
    var$19 = new cpcm_DisruptorMetrics;
    var$14 = cpce_RingBuffer_getCapacity($this.$ring);
    cpcm_DisruptorMetrics__init_(var$19, $currentCount, $throughput, $avg, $p99, $max, var$14, cpce_RingBuffer$Cursors_producer($cursors), cpce_RingBuffer$Cursors_matching($cursors), cpce_RingBuffer_getBufferUtilization($this.$ring));
    $this.$metrics = var$19;
    cpce_MatchingEngineStudio_update($this);
},
cpce_MatchingEngineStudio_handleManualOrderSubmit = $this => {
    let $order, var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9;
    $order = new cpcm_Order;
    var$2 = jl_System_currentTimeMillis();
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append2(jl_StringBuilder_append(var$3, $rt_s(271)), var$2);
    var$4 = jl_StringBuilder_toString(var$3);
    var$5 = $this.$orderSide;
    var$6 = $this.$orderType;
    var$7 = $this.$orderType;
    cpcm_OrderType_$callClinit();
    var$8 = var$7 !== cpcm_OrderType_MARKET ? $this.$orderPrice : 0.0;
    var$9 = $this.$orderSize;
    var$2 = jl_System_currentTimeMillis();
    cpcm_OrderStatus_$callClinit();
    cpcm_Order__init_($order, var$4, $rt_s(272), $rt_s(273), var$5, var$6, var$8, var$9, 0.0, var$2, cpcm_OrderStatus_NEW);
    cpce_RingBuffer_publish($this.$ring, $order);
    cpce_RingBuffer_stepJournaler($this.$ring, 1);
    cpce_RingBuffer_stepMatching($this.$ring, 1, cpce_MatchingEngineStudio$handleManualOrderSubmit$lambda$_8_0__init_0($this));
    cpce_RingBuffer_stepPublisher($this.$ring, 1);
    $this.$orderBook = cpce_MatchingEngine_getOrderBookState($this.$engine);
    $this.$recentTrades = cpce_MatchingEngineStudio_fetchTrades($this);
    $this.$totalProcessed0 = Long_add($this.$totalProcessed0, Long_fromInt(1));
    cpce_MatchingEngineStudio_update($this);
},
cpce_MatchingEngineStudio_injectBurst = $this => {
    let $basePrice, $i, $side, $isMarket, $delta, $price, $size, $order, var$9, var$10, var$11, var$12, var$13, var$14, var$15;
    $basePrice = cpcm_OrderBookState_midPrice(cpce_MatchingEngine_getOrderBookState($this.$engine));
    if ($basePrice === 0.0)
        $basePrice = 100.0;
    $i = 0;
    while ($i < 500) {
        if (jl_Math_random() <= 0.5) {
            cpcm_OrderSide_$callClinit();
            $side = cpcm_OrderSide_SELL;
        } else {
            cpcm_OrderSide_$callClinit();
            $side = cpcm_OrderSide_BUY;
        }
        $isMarket = jl_Math_random() >= 0.35 ? 0 : 1;
        $delta = (jl_Math_random() - 0.5) * 2.0;
        $price = $isMarket ? 0.0 : cpce_MatchingEngineStudio_round2($basePrice + $delta);
        $size = 1.0 + jl_Math_random() * 20.0 | 0;
        $order = new cpcm_Order;
        var$9 = jl_System_currentTimeMillis();
        var$10 = jl_StringBuilder__init_();
        jl_StringBuilder_append1(jl_StringBuilder_append0(jl_StringBuilder_append2(jl_StringBuilder_append(var$10, $rt_s(274)), var$9), 45), $i);
        var$11 = jl_StringBuilder_toString(var$10);
        var$10 = jl_StringBuilder__init_();
        jl_StringBuilder_append1(jl_StringBuilder_append(var$10, $rt_s(275)), $i);
        var$12 = jl_StringBuilder_toString(var$10);
        var$10 = jl_StringBuilder__init_();
        jl_StringBuilder_append1(jl_StringBuilder_append(var$10, $rt_s(276)), $i);
        var$13 = jl_StringBuilder_toString(var$10);
        if (!$isMarket) {
            cpcm_OrderType_$callClinit();
            var$14 = cpcm_OrderType_LIMIT;
        } else {
            cpcm_OrderType_$callClinit();
            var$14 = cpcm_OrderType_MARKET;
        }
        var$15 = $size;
        var$9 = jl_System_currentTimeMillis();
        cpcm_OrderStatus_$callClinit();
        cpcm_Order__init_($order, var$11, var$12, var$13, $side, var$14, $price, var$15, 0.0, var$9, cpcm_OrderStatus_NEW);
        cpce_RingBuffer_publish($this.$ring, $order);
        cpce_RingBuffer_stepJournaler($this.$ring, 1);
        cpce_RingBuffer_stepMatching($this.$ring, 1, cpce_MatchingEngineStudio$injectBurst$lambda$_9_0__init_0($this));
        cpce_RingBuffer_stepPublisher($this.$ring, 1);
        $this.$totalProcessed0 = Long_add($this.$totalProcessed0, Long_fromInt(1));
        $i = $i + 1 | 0;
    }
    $this.$orderBook = cpce_MatchingEngine_getOrderBookState($this.$engine);
    $this.$recentTrades = cpce_MatchingEngineStudio_fetchTrades($this);
},
cpce_MatchingEngineStudio_fetchTrades = $this => {
    let $all;
    $all = cpce_MatchingEngine_getRecentTrades($this.$engine);
    if ($all.$size() > 15)
        $all = ju_ArrayList__init_0($all.$subList(0, 15));
    return $all;
},
cpce_MatchingEngineStudio_toInput = $o => {
    let var$2, var$3, var$4, var$5, var$6, var$7;
    var$2 = new cpcm_OrderInput;
    var$3 = cpcm_Order_getId($o);
    var$4 = cpcm_Order_getTraderId($o);
    var$5 = cpcm_Order_getTraderName($o);
    var$6 = cpcm_Order_getSide($o);
    var$7 = cpcm_Order_getType($o);
    cpcm_OrderInput__init_(var$2, var$3, var$4, var$5, var$6, var$7, cpcm_Order_getPrice($o), cpcm_Order_getSize($o), jl_Long_valueOf(cpcm_Order_getTimestamp($o)), cpcm_Order_getOptionKey($o));
    return var$2;
},
cpce_MatchingEngineStudio_update = $this => {
    let var$1, var$2, var$3, $maxVolume, $level, $asks, $i, var$8, $bids, var$10, var$11, var$12, $slots, $slot, $div;
    var$1 = $this.$throughputText;
    var$2 = $rt_ustr($rt_str((cpcm_DisruptorMetrics_throughputOpsSec($this.$metrics)).toLocaleString()));
    var$1.textContent = var$2;
    var$1 = $this.$p99Text;
    var$2 = $rt_ustr($rt_str(String(cpcm_DisruptorMetrics_p99LatencyUs($this.$metrics))));
    var$1.textContent = var$2;
    var$1 = $this.$tradersText;
    var$2 = $rt_ustr($rt_str($this.$simulatedTradersCount.toLocaleString()));
    var$1.textContent = var$2;
    var$1 = $this.$midText;
    var$3 = $rt_str((cpcm_OrderBookState_midPrice($this.$orderBook)).toFixed(2));
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append0(var$2, 36), var$3);
    var$2 = $rt_ustr(jl_StringBuilder_toString(var$2));
    var$1.textContent = var$2;
    var$1 = $this.$spreadKpiSpan;
    var$3 = $rt_str((cpcm_OrderBookState_spread($this.$orderBook)).toFixed(2));
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(277)), var$3);
    cpcs_Ui_setText(var$1, jl_StringBuilder_toString(var$2));
    var$1 = $this.$totalText;
    var$2 = $rt_ustr($rt_str(Long_toNumber(cpcm_DisruptorMetrics_totalProcessed($this.$metrics)).toLocaleString()));
    var$1.textContent = var$2;
    $maxVolume = 1.0;
    var$1 = (cpcm_OrderBookState_bids($this.$orderBook)).$iterator();
    while (var$1.$hasNext()) {
        $level = var$1.$next();
        $maxVolume = jl_Math_max0($maxVolume, cpcm_OrderBookLevel_totalVolume($level));
    }
    var$1 = (cpcm_OrderBookState_asks($this.$orderBook)).$iterator();
    while (var$1.$hasNext()) {
        $level = var$1.$next();
        $maxVolume = jl_Math_max0($maxVolume, cpcm_OrderBookLevel_totalVolume($level));
    }
    cpcs_Ui_clear($this.$asksWrap);
    $asks = cpcm_OrderBookState_asks($this.$orderBook);
    $i = 0;
    while ($i < jl_Math_min(6, $asks.$size())) {
        var$1 = $this.$asksWrap;
        var$8 = $rt_createArray(jl_Object, 1);
        var$8.data[0] = otji_JSWrapper_wrap(cpce_MatchingEngineStudio_bookRow($asks.$get0($i), $maxVolume, 1));
        cpcs_Ui_add(var$1, var$8);
        $i = $i + 1 | 0;
    }
    cpcs_Ui_clear($this.$bidsWrap);
    $bids = cpcm_OrderBookState_bids($this.$orderBook);
    $i = 0;
    while ($i < jl_Math_min(6, $bids.$size())) {
        var$1 = $this.$bidsWrap;
        var$8 = $rt_createArray(jl_Object, 1);
        var$8.data[0] = otji_JSWrapper_wrap(cpce_MatchingEngineStudio_bookRow($bids.$get0($i), $maxVolume, 0));
        cpcs_Ui_add(var$1, var$8);
        $i = $i + 1 | 0;
    }
    var$1 = $this.$spreadStrong;
    var$3 = $rt_str((cpcm_OrderBookState_spread($this.$orderBook)).toFixed(2));
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append0(var$2, 36), var$3);
    cpcs_Ui_setText(var$1, jl_StringBuilder_toString(var$2));
    var$1 = $this.$lastStrong;
    var$10 = $rt_str((cpcm_OrderBookState_lastTradePrice($this.$orderBook)).toFixed(2));
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append0(var$2, 36), var$10);
    cpcs_Ui_setText(var$1, jl_StringBuilder_toString(var$2));
    var$1 = $this.$usageSpan;
    var$11 = cpcm_DisruptorMetrics_ringBufferUsage($this.$metrics) | 0;
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append1(jl_StringBuilder_append(var$2, $rt_s(278)), var$11), 37);
    cpcs_Ui_setText(var$1, jl_StringBuilder_toString(var$2));
    var$1 = $this.$producerSpan;
    var$12 = cpcm_DisruptorMetrics_producerCursor($this.$metrics);
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append2(jl_StringBuilder_append(var$2, $rt_s(279)), var$12);
    cpcs_Ui_setText(var$1, jl_StringBuilder_toString(var$2));
    $slots = cpce_RingBuffer_getSlots($this.$ring);
    $i = 0;
    while ($i < $this.$slotDivs.$size()) {
        $slot = $slots.$get0($i);
        $div = otji_JSWrapper_unwrap($this.$slotDivs.$get0($i));
        var$1 = cpce_MatchingEngineStudio_slotBg(cpcm_RingSlot_getState($slot));
        var$2 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(280)), var$1);
        cpcs_Ui_cls($div, jl_StringBuilder_toString(var$2));
        var$11 = cpcm_RingSlot_getIndex($slot);
        var$12 = cpcm_RingSlot_getSequence($slot);
        var$2 = jl_Enum_name(cpcm_RingSlot_getState($slot));
        var$10 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append2(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(var$10, $rt_s(281)), var$11), $rt_s(282)), var$12), $rt_s(283)), var$2);
        var$2 = jl_StringBuilder_toString(var$10);
        $div.setAttribute("title", $rt_ustr(var$2));
        $i = $i + 1 | 0;
    }
    var$1 = $this.$printedSpan;
    var$11 = $this.$recentTrades.$size();
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append1(var$2, var$11), $rt_s(284));
    cpcs_Ui_setText(var$1, jl_StringBuilder_toString(var$2));
    cpcs_Ui_clear($this.$tapeWrap);
    $i = 0;
    while ($i < jl_Math_min(5, $this.$recentTrades.$size())) {
        var$1 = $this.$tapeWrap;
        var$8 = $rt_createArray(jl_Object, 1);
        var$8.data[0] = otji_JSWrapper_wrap(cpce_MatchingEngineStudio_tapeRow($this.$recentTrades.$get0($i)));
        cpcs_Ui_add(var$1, var$8);
        $i = $i + 1 | 0;
    }
    var$1 = $this.$tradersLabel;
    var$11 = $this.$simulatedTradersCount;
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append1(var$2, var$11), $rt_s(285));
    cpcs_Ui_setText(var$1, jl_StringBuilder_toString(var$2));
    var$1 = $this.$opsLabel;
    var$11 = $this.$targetOpsPerSec;
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append1(var$2, var$11), $rt_s(286));
    cpcs_Ui_setText(var$1, jl_StringBuilder_toString(var$2));
    cpce_MatchingEngineStudio_syncSlider($this.$tradersSlider, $this.$simulatedTradersCount);
    cpce_MatchingEngineStudio_syncSlider($this.$opsSlider, $this.$targetOpsPerSec);
    var$1 = $this.$pauseBtn0;
    var$2 = !$this.$isSimulating ? $rt_s(287) : $rt_s(288);
    var$10 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$10, $rt_s(289)), var$2);
    var$2 = jl_StringBuilder_toString(var$10);
    cpcs_Ui_cls(var$1, var$2);
    var$1 = $this.$pauseBtn0;
    var$2 = cpcs_Icons_svg(!$this.$isSimulating ? $rt_s(290) : $rt_s(291), $rt_s(292));
    var$10 = !$this.$isSimulating ? $rt_s(293) : $rt_s(294);
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$3, var$2), var$10);
    cpcs_Ui_setHtml(var$1, jl_StringBuilder_toString(var$3));
    var$1 = $this.$buyBtn;
    var$2 = $this.$orderSide;
    cpcm_OrderSide_$callClinit();
    var$2 = var$2 !== cpcm_OrderSide_BUY ? $rt_s(295) : $rt_s(296);
    var$10 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$10, $rt_s(297)), var$2);
    var$2 = jl_StringBuilder_toString(var$10);
    cpcs_Ui_cls(var$1, var$2);
    var$1 = $this.$sellBtn;
    var$10 = $this.$orderSide !== cpcm_OrderSide_SELL ? $rt_s(295) : $rt_s(298);
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(297)), var$10);
    var$2 = jl_StringBuilder_toString(var$3);
    cpcs_Ui_cls(var$1, var$2);
    var$1 = $this.$limitBtn;
    var$2 = $this.$orderType;
    cpcm_OrderType_$callClinit();
    var$2 = var$2 !== cpcm_OrderType_LIMIT ? $rt_s(295) : $rt_s(299);
    var$10 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$10, $rt_s(300)), var$2);
    var$2 = jl_StringBuilder_toString(var$10);
    cpcs_Ui_cls(var$1, var$2);
    var$1 = $this.$marketBtn;
    var$2 = $this.$orderType !== cpcm_OrderType_MARKET ? $rt_s(295) : $rt_s(299);
    var$10 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$10, $rt_s(300)), var$2);
    var$2 = jl_StringBuilder_toString(var$10);
    cpcs_Ui_cls(var$1, var$2);
    cpcs_Ui_show($this.$priceGroup, $this.$orderType !== cpcm_OrderType_LIMIT ? 0 : 1);
    cpce_MatchingEngineStudio_syncNumberInput($this.$priceInput, $this.$orderPrice);
    cpce_MatchingEngineStudio_syncNumberInput($this.$sizeInput, $this.$orderSize);
    var$1 = $this.$submitBtn;
    var$2 = $this.$orderSide !== cpcm_OrderSide_BUY ? $rt_s(301) : $rt_s(302);
    var$10 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$10, $rt_s(303)), var$2);
    var$2 = jl_StringBuilder_toString(var$10);
    cpcs_Ui_cls(var$1, var$2);
    var$1 = $this.$submitBtn;
    var$2 = jl_Enum_name($this.$orderSide);
    var$10 = jl_Enum_name($this.$orderType);
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(304)), var$2), 32), var$10);
    cpcs_Ui_setText(var$1, jl_StringBuilder_toString(var$3));
},
cpce_MatchingEngineStudio_kpiCard = ($grid, $label, $icon, $iconCls, $valueCls) => {
    let $card, var$7, var$8, var$9, $header, $value, var$12, var$13;
    $card = cpcs_Ui_el($rt_s(21), $rt_s(305));
    var$7 = cpcs_Icons_svg($icon, $iconCls);
    var$8 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$8, $rt_s(306)), $label), $rt_s(307)), var$7);
    var$9 = jl_StringBuilder_toString(var$8);
    $header = cpcs_Ui_html($rt_s(21), $rt_s(308), var$9);
    $value = cpcs_Ui_el($rt_s(21), $valueCls);
    var$12 = $rt_createArray(jl_Object, 2);
    var$13 = var$12.data;
    var$13[0] = otji_JSWrapper_wrap($header);
    var$13[1] = otji_JSWrapper_wrap($value);
    cpcs_Ui_add($card, var$12);
    var$12 = $rt_createArray(jl_Object, 1);
    var$12.data[0] = otji_JSWrapper_wrap($card);
    cpcs_Ui_add($grid, var$12);
    return $value;
},
cpce_MatchingEngineStudio_textNode = ($parent, $text) => {
    let $t;
    $t = (cpcs_Ui_doc()).createTextNode($rt_ustr($text));
    $parent.appendChild($t);
    return $t;
},
cpce_MatchingEngineStudio_legendItem = ($dotCls, $text) => {
    let $item, var$4, var$5, var$6;
    $item = cpcs_Ui_el($rt_s(21), $rt_s(209));
    var$4 = $rt_createArray(jl_Object, 2);
    var$5 = var$4.data;
    var$6 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$6, $rt_s(309)), $dotCls);
    var$5[0] = otji_JSWrapper_wrap(cpcs_Ui_el($rt_s(28), jl_StringBuilder_toString(var$6)));
    var$5[1] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(24), $text));
    cpcs_Ui_add($item, var$4);
    return $item;
},
cpce_MatchingEngineStudio_bookRow = ($level, $maxVolume, $isAsk) => {
    let $depthPct, $row, var$6, var$7, $bar, var$9, $price, $size, $depth, var$13, var$14;
    $depthPct = Long_lo((jl_Math_min0(Long_fromInt(100), jl_Math_round(cpcm_OrderBookLevel_totalVolume($level) / $maxVolume * 100.0))));
    $row = cpcs_Ui_el($rt_s(21), $rt_s(310));
    var$6 = !$isAsk ? $rt_s(311) : $rt_s(312);
    var$7 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$7, $rt_s(313)), var$6), $rt_s(314));
    $bar = cpcs_Ui_el($rt_s(21), jl_StringBuilder_toString(var$7));
    var$6 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append1(var$6, $depthPct), 37);
    cpcs_Ui_setStyle$js_body$_22($bar, "width", $rt_ustr(jl_StringBuilder_toString(var$6)));
    var$9 = !$isAsk ? $rt_s(203) : $rt_s(315);
    var$6 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$6, var$9), $rt_s(316));
    var$6 = jl_StringBuilder_toString(var$6);
    var$7 = $rt_str((cpcm_OrderBookLevel_price($level)).toFixed(2));
    var$9 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append0(var$9, 36), var$7);
    var$9 = jl_StringBuilder_toString(var$9);
    $price = cpcs_Ui_el0($rt_s(28), var$6, var$9);
    $size = cpcs_Ui_el0($rt_s(28), $rt_s(317), $rt_str(String(cpcm_OrderBookLevel_totalVolume($level))));
    var$6 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append1(var$6, $depthPct), 37);
    $depth = cpcs_Ui_el0($rt_s(28), $rt_s(318), jl_StringBuilder_toString(var$6));
    var$13 = $rt_createArray(jl_Object, 4);
    var$14 = var$13.data;
    var$14[0] = otji_JSWrapper_wrap($bar);
    var$14[1] = otji_JSWrapper_wrap($price);
    var$14[2] = otji_JSWrapper_wrap($size);
    var$14[3] = otji_JSWrapper_wrap($depth);
    cpcs_Ui_add($row, var$13);
    return $row;
},
cpce_MatchingEngineStudio_tapeRow = $tr => {
    let var$2, $buy, $colorCls, $row, var$6, var$7, $left, var$9, $size, $time, var$12, var$13;
    var$2 = cpcm_Trade_aggressiveSide($tr);
    cpcm_OrderSide_$callClinit();
    $buy = var$2 !== cpcm_OrderSide_BUY ? 0 : 1;
    $colorCls = !$buy ? $rt_s(315) : $rt_s(203);
    $row = cpcs_Ui_el($rt_s(21), $rt_s(319));
    var$6 = !$buy ? $rt_s(320) : $rt_s(321);
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(322)), $colorCls);
    var$6 = cpcs_Icons_svg(var$6, jl_StringBuilder_toString(var$2));
    var$7 = $rt_str((cpcm_Trade_price($tr)).toFixed(2));
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$2, var$6), $rt_s(323)), $colorCls), $rt_s(324)), var$7), $rt_s(307));
    var$2 = jl_StringBuilder_toString(var$2);
    $left = cpcs_Ui_html($rt_s(21), $rt_s(209), var$2);
    var$9 = $rt_str(String(cpcm_Trade_size($tr)));
    var$6 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$6, var$9), $rt_s(325));
    $size = cpcs_Ui_el0($rt_s(28), $rt_s(326), jl_StringBuilder_toString(var$6));
    $time = cpcs_Ui_el0($rt_s(28), $rt_s(327), $rt_str((new Date(Long_toNumber(cpcm_Trade_timestamp($tr)))).toLocaleTimeString()));
    var$12 = $rt_createArray(jl_Object, 3);
    var$13 = var$12.data;
    var$13[0] = otji_JSWrapper_wrap($left);
    var$13[1] = otji_JSWrapper_wrap($size);
    var$13[2] = otji_JSWrapper_wrap($time);
    cpcs_Ui_add($row, var$12);
    return $row;
},
cpce_MatchingEngineStudio_slotBg = $state => {
    let var$2;
    a: {
        cpce_MatchingEngineStudio$1_$callClinit();
        switch (cpce_MatchingEngineStudio$1_$SwitchMap$com$parallely$client$model$SlotState.data[jl_Enum_ordinal($state)]) {
            case 1:
                break;
            case 2:
                var$2 = $rt_s(328);
                break a;
            case 3:
                var$2 = $rt_s(329);
                break a;
            case 4:
                var$2 = $rt_s(330);
                break a;
            default:
                var$2 = $rt_s(331);
                break a;
        }
        var$2 = $rt_s(332);
    }
    return var$2;
},
cpce_MatchingEngineStudio_syncSlider = ($slider, $value) => {
    let $text;
    $text = jl_String_valueOf($value);
    if (!$rt_str($slider.value).$equals($text))
        $slider.value = $rt_ustr($text);
},
cpce_MatchingEngineStudio_syncNumberInput = ($input, $value) => {
    let $current;
    $current = $rt_str($input.value);
    if ($value === 0.0 && $current.$isEmpty())
        return;
    if (cpce_MatchingEngineStudio_parseNum($current) !== $value)
        $input.value = $rt_ustr($rt_str(String($value)));
},
cpce_MatchingEngineStudio_parseNum = $s => {
    let var$2, $$je;
    a: {
        try {
            var$2 = jl_Double_parseDouble($s);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jl_NumberFormatException) {
                break a;
            } else {
                throw $$e;
            }
        }
        return var$2;
    }
    return 0.0;
},
cpce_MatchingEngineStudio_round1 = $value => {
    let var$2;
    var$2 = jm_BigDecimal__init_1($value);
    jm_RoundingMode_$callClinit();
    return (var$2.$setScale(1, jm_RoundingMode_HALF_UP)).$doubleValue();
},
cpce_MatchingEngineStudio_round2 = $value => {
    let var$2;
    var$2 = jm_BigDecimal__init_1($value);
    jm_RoundingMode_$callClinit();
    return (var$2.$setScale(2, jm_RoundingMode_HALF_UP)).$doubleValue();
},
cpce_MatchingEngineStudio_lambda$injectBurst$14 = ($this, $o) => {
    cpce_MatchingEngine_processOrder($this.$engine, cpce_MatchingEngineStudio_toInput($o));
},
cpce_MatchingEngineStudio_lambda$handleManualOrderSubmit$13 = ($this, $o) => {
    cpce_MatchingEngine_processOrder($this.$engine, cpce_MatchingEngineStudio_toInput($o));
},
cpce_MatchingEngineStudio_lambda$simTick$12 = ($this, $o) => {
    cpce_MatchingEngine_processOrder($this.$engine, cpce_MatchingEngineStudio_toInput($o));
},
cpce_MatchingEngineStudio_lambda$restartSim$11 = ($this, $batchSize) => {
    cpce_MatchingEngineStudio_simTick($this, $batchSize);
},
cpce_MatchingEngineStudio_lambda$new$10 = () => {
    return;
},
cpce_MatchingEngineStudio_lambda$new$9 = ($this, $value) => {
    $this.$orderSize = cpce_MatchingEngineStudio_parseNum($value);
    cpce_MatchingEngineStudio_update($this);
},
cpce_MatchingEngineStudio_lambda$new$8 = ($this, $value) => {
    $this.$orderPrice = cpce_MatchingEngineStudio_parseNum($value);
    cpce_MatchingEngineStudio_update($this);
},
cpce_MatchingEngineStudio_lambda$new$7 = $this => {
    cpcm_OrderType_$callClinit();
    $this.$orderType = cpcm_OrderType_MARKET;
    cpce_MatchingEngineStudio_update($this);
},
cpce_MatchingEngineStudio_lambda$new$6 = $this => {
    cpcm_OrderType_$callClinit();
    $this.$orderType = cpcm_OrderType_LIMIT;
    cpce_MatchingEngineStudio_update($this);
},
cpce_MatchingEngineStudio_lambda$new$5 = $this => {
    cpcm_OrderSide_$callClinit();
    $this.$orderSide = cpcm_OrderSide_SELL;
    cpce_MatchingEngineStudio_update($this);
},
cpce_MatchingEngineStudio_lambda$new$4 = $this => {
    cpcm_OrderSide_$callClinit();
    $this.$orderSide = cpcm_OrderSide_BUY;
    cpce_MatchingEngineStudio_update($this);
},
cpce_MatchingEngineStudio_lambda$new$3 = $this => {
    cpce_MatchingEngineStudio_injectBurst($this);
    cpce_MatchingEngineStudio_update($this);
},
cpce_MatchingEngineStudio_lambda$new$2 = $this => {
    $this.$isSimulating = $this.$isSimulating ? 0 : 1;
    cpce_MatchingEngineStudio_restartSim($this);
    cpce_MatchingEngineStudio_update($this);
},
cpce_MatchingEngineStudio_lambda$new$1 = ($this, $value) => {
    $this.$targetOpsPerSec = cpce_MatchingEngineStudio_parseNum($value) | 0;
    cpce_MatchingEngineStudio_restartSim($this);
    cpce_MatchingEngineStudio_update($this);
},
cpce_MatchingEngineStudio_lambda$new$0 = ($this, $value) => {
    $this.$simulatedTradersCount = cpce_MatchingEngineStudio_parseNum($value) | 0;
    cpce_MatchingEngineStudio_restartSim($this);
    cpce_MatchingEngineStudio_update($this);
},
cpce_MatchingEngineStudio_onSubmit$js_body$_29 = (var$1, var$2) => {
    var$1.addEventListener('submit', function(ev) {
        ev.preventDefault();
        var$2();
    });
},
cpcw_CanvasModel = $rt_classWithoutFields(),
cpcw_CanvasModel_BOT_NAMES = null,
cpcw_CanvasModel_BOT_COLORS = null,
cpcw_CanvasModel_BOT_STICKY_IDEAS = null,
cpcw_CanvasModel_BOT_ARCH_NODES = null,
cpcw_CanvasModel_RANDOM = null,
cpcw_CanvasModel_$callClinit = () => {
    cpcw_CanvasModel_$callClinit = $rt_eraseClinit(cpcw_CanvasModel);
    cpcw_CanvasModel__clinit_();
},
cpcw_CanvasModel_isPointInElement = (var$1, var$2) => {
    cpcw_CanvasModel_$callClinit();
    return cpcw_CanvasModel_isPointInElement0(var$1, var$2, 10.0);
},
cpcw_CanvasModel_isPointInElement0 = ($point, $elem, $hitTolerance) => {
    let $type, $rx, $ry, $cx, $cy, var$9, $normalized, var$11, $p, $dist, $p1, $p2, $w, $h;
    cpcw_CanvasModel_$callClinit();
    $type = cpcm_CanvasElement_type($elem);
    cpcm_ElementType_$callClinit();
    if ($type !== cpcm_ElementType_RECTANGLE && $type !== cpcm_ElementType_STICKY) {
        if ($type === cpcm_ElementType_ELLIPSE) {
            $rx = (cpcm_CanvasElement_width($elem) === null ? 160.0 : (cpcm_CanvasElement_width($elem)).$doubleValue()) / 2.0;
            $ry = (cpcm_CanvasElement_height($elem) === null ? 100.0 : (cpcm_CanvasElement_height($elem)).$doubleValue()) / 2.0;
            $cx = cpcm_CanvasElement_x($elem) + $rx;
            $cy = cpcm_CanvasElement_y($elem) + $ry;
            var$9 = jl_Math_pow((cpcm_Point_x($point) - $cx) / ($rx + $hitTolerance), 2.0);
            $normalized = var$9 + jl_Math_pow((cpcm_Point_y($point) - $cy) / ($ry + $hitTolerance), 2.0);
            return $normalized > 1.0 ? 0 : 1;
        }
        if ($type !== cpcm_ElementType_TEXT) {
            a: {
                if ($type === cpcm_ElementType_STROKE && cpcm_CanvasElement_points($elem) !== null && !(cpcm_CanvasElement_points($elem)).$isEmpty()) {
                    var$11 = (cpcm_CanvasElement_points($elem)).$iterator();
                    while (true) {
                        if (!var$11.$hasNext())
                            break a;
                        $p = var$11.$next();
                        $dist = jl_Math_hypot(cpcm_Point_x($p) - cpcm_Point_x($point), cpcm_Point_y($p) - cpcm_Point_y($point));
                        if ($dist <= cpcm_CanvasElement_strokeWidth($elem) + $hitTolerance)
                            break;
                    }
                    return 1;
                }
            }
            if ($type === cpcm_ElementType_ARROW && cpcm_CanvasElement_points($elem) !== null && (cpcm_CanvasElement_points($elem)).$size() >= 2) {
                $p1 = (cpcm_CanvasElement_points($elem)).$get0(0);
                $p2 = (cpcm_CanvasElement_points($elem)).$get0(1);
                return cpcw_CanvasModel_distanceToLineSegment($point, $p1, $p2) > cpcm_CanvasElement_strokeWidth($elem) + $hitTolerance ? 0 : 1;
            }
            return 0;
        }
        $w = cpcm_CanvasElement_width($elem) === null ? 180.0 : (cpcm_CanvasElement_width($elem)).$doubleValue();
        $h = cpcm_CanvasElement_height($elem) === null ? 40.0 : (cpcm_CanvasElement_height($elem)).$doubleValue();
        return cpcm_Point_x($point) >= cpcm_CanvasElement_x($elem) - $hitTolerance && cpcm_Point_x($point) <= cpcm_CanvasElement_x($elem) + $w + $hitTolerance && cpcm_Point_y($point) >= cpcm_CanvasElement_y($elem) - $hitTolerance && cpcm_Point_y($point) <= cpcm_CanvasElement_y($elem) + $h + $hitTolerance ? 1 : 0;
    }
    $w = cpcm_CanvasElement_width($elem) === null ? 160.0 : (cpcm_CanvasElement_width($elem)).$doubleValue();
    $h = cpcm_CanvasElement_height($elem) !== null ? (cpcm_CanvasElement_height($elem)).$doubleValue() : $type !== cpcm_ElementType_STICKY ? 100.0 : 140.0;
    return cpcm_Point_x($point) >= cpcm_CanvasElement_x($elem) - $hitTolerance && cpcm_Point_x($point) <= cpcm_CanvasElement_x($elem) + $w + $hitTolerance && cpcm_Point_y($point) >= cpcm_CanvasElement_y($elem) - $hitTolerance && cpcm_Point_y($point) <= cpcm_CanvasElement_y($elem) + $h + $hitTolerance ? 1 : 0;
};
let cpcw_CanvasModel_distanceToLineSegment = ($p, $a, $b) => {
    let $l2, $t, var$6;
    cpcw_CanvasModel_$callClinit();
    $l2 = jl_Math_pow(cpcm_Point_x($b) - cpcm_Point_x($a), 2.0) + jl_Math_pow(cpcm_Point_y($b) - cpcm_Point_y($a), 2.0);
    if ($l2 === 0.0)
        return jl_Math_hypot(cpcm_Point_x($p) - cpcm_Point_x($a), cpcm_Point_y($p) - cpcm_Point_y($a));
    $t = ((cpcm_Point_x($p) - cpcm_Point_x($a)) * (cpcm_Point_x($b) - cpcm_Point_x($a)) + (cpcm_Point_y($p) - cpcm_Point_y($a)) * (cpcm_Point_y($b) - cpcm_Point_y($a))) / $l2;
    var$6 = jl_Math_max0(0.0, jl_Math_min1(1.0, $t));
    return jl_Math_hypot(cpcm_Point_x($p) - (cpcm_Point_x($a) + var$6 * (cpcm_Point_x($b) - cpcm_Point_x($a))), cpcm_Point_y($p) - (cpcm_Point_y($a) + var$6 * (cpcm_Point_y($b) - cpcm_Point_y($a))));
},
cpcw_CanvasModel_createBotCollaborator = ($idIndex, $bounds) => {
    let var$3, var$4, var$5, $name, $color, $x, $y, var$10, var$11, var$12, var$13;
    cpcw_CanvasModel_$callClinit();
    var$3 = cpcw_CanvasModel_BOT_NAMES.$get0($idIndex % cpcw_CanvasModel_BOT_NAMES.$size() | 0);
    var$4 = $idIndex + 1 | 0;
    var$5 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append(var$5, var$3), $rt_s(333)), var$4), 41);
    $name = jl_StringBuilder_toString(var$5);
    $color = cpcw_CanvasModel_BOT_COLORS.$get0($idIndex % cpcw_CanvasModel_BOT_COLORS.$size() | 0);
    $x = 100.0 + cpcw_CanvasModel_RANDOM.$nextDouble() * (cpcw_CanvasModel$Bounds_width($bounds) - 200.0);
    $y = 100.0 + cpcw_CanvasModel_RANDOM.$nextDouble() * (cpcw_CanvasModel$Bounds_height($bounds) - 200.0);
    var$5 = new cpcm_Collaborator;
    var$10 = jl_System_currentTimeMillis();
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append2(jl_StringBuilder_append0(jl_StringBuilder_append1(jl_StringBuilder_append(var$3, $rt_s(334)), $idIndex), 45), var$10);
    var$11 = jl_StringBuilder_toString(var$3);
    var$3 = cpcm_Point__init_($x, $y);
    cpcm_ToolType_$callClinit();
    var$12 = cpcm_ToolType_PEN;
    var$13 = jl_String_valueOf($idIndex);
    cpcm_Collaborator__init_(var$5, var$11, $name, $color, var$3, var$12, 1, var$13, $rt_s(335), jl_System_currentTimeMillis());
    return var$5;
},
cpcw_CanvasModel__clinit_ = () => {
    let var$1;
    cpcw_CanvasModel_BOT_NAMES = ju_List_of3($rt_wrapArray(jl_String, [$rt_s(336), $rt_s(151), $rt_s(337), $rt_s(338), $rt_s(339), $rt_s(340), $rt_s(341), $rt_s(342), $rt_s(343), $rt_s(344), $rt_s(345), $rt_s(346)]));
    cpcw_CanvasModel_BOT_COLORS = ju_List_of1($rt_s(347), $rt_s(348), $rt_s(349), $rt_s(152), $rt_s(350), $rt_s(351), $rt_s(352), $rt_s(353));
    cpcw_CanvasModel_BOT_STICKY_IDEAS = ju_List_of2($rt_s(354), $rt_s(355), $rt_s(356), $rt_s(357), $rt_s(358), $rt_s(359), $rt_s(360), $rt_s(361), $rt_s(362), $rt_s(363));
    var$1 = new cpcw_CanvasModel$ArchNode;
    cpcm_ElementType_$callClinit();
    cpcw_CanvasModel$ArchNode__init_0(var$1, $rt_s(364), cpcm_ElementType_RECTANGLE, $rt_s(131));
    cpcw_CanvasModel_BOT_ARCH_NODES = ju_List_of4(var$1, cpcw_CanvasModel$ArchNode__init_($rt_s(365), cpcm_ElementType_ELLIPSE, $rt_s(139)), cpcw_CanvasModel$ArchNode__init_($rt_s(366), cpcm_ElementType_RECTANGLE, $rt_s(367)), cpcw_CanvasModel$ArchNode__init_($rt_s(368), cpcm_ElementType_RECTANGLE, $rt_s(144)), cpcw_CanvasModel$ArchNode__init_($rt_s(369), cpcm_ElementType_ELLIPSE, $rt_s(370)));
    cpcw_CanvasModel_RANDOM = ju_Random__init_0();
},
cpcm_OrderType = $rt_classWithoutFields(jl_Enum),
cpcm_OrderType_LIMIT = null,
cpcm_OrderType_MARKET = null,
cpcm_OrderType_$VALUES = null,
cpcm_OrderType_$callClinit = () => {
    cpcm_OrderType_$callClinit = $rt_eraseClinit(cpcm_OrderType);
    cpcm_OrderType__clinit_();
},
cpcm_OrderType__init_0 = ($this, var$1, var$2) => {
    cpcm_OrderType_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
},
cpcm_OrderType__init_ = (var_0, var_1) => {
    let var_2 = new cpcm_OrderType();
    cpcm_OrderType__init_0(var_2, var_0, var_1);
    return var_2;
},
cpcm_OrderType_$values = () => {
    let var$1, var$2;
    cpcm_OrderType_$callClinit();
    var$1 = $rt_createArray(cpcm_OrderType, 2);
    var$2 = var$1.data;
    var$2[0] = cpcm_OrderType_LIMIT;
    var$2[1] = cpcm_OrderType_MARKET;
    return var$1;
},
cpcm_OrderType__clinit_ = () => {
    cpcm_OrderType_LIMIT = cpcm_OrderType__init_($rt_s(371), 0);
    cpcm_OrderType_MARKET = cpcm_OrderType__init_($rt_s(372), 1);
    cpcm_OrderType_$VALUES = cpcm_OrderType_$values();
},
ju_TemplateCollections$AbstractImmutableMap = $rt_classWithoutFields(ju_AbstractMap),
ju_TemplateCollections$AbstractImmutableMap__init_ = $this => {
    ju_AbstractMap__init_($this);
};
function cpcs_Ui$on$lambda$_10_0() {
    jl_Object.call(this);
    this.$_083 = null;
}
let cpcs_Ui$on$lambda$_10_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_083 = var$1;
},
cpcs_Ui$on$lambda$_10_0__init_0 = var_0 => {
    let var_1 = new cpcs_Ui$on$lambda$_10_0();
    cpcs_Ui$on$lambda$_10_0__init_(var_1, var_0);
    return var_1;
},
cpcs_Ui$on$lambda$_10_0_handleEvent = (var$0, var$1) => {
    cpcs_Ui_lambda$on$2(var$0.$_083, var$1);
},
cpcs_Ui$on$lambda$_10_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
},
cpcj_Ws$MessageHandler = $rt_classWithoutFields(0);
function cpcm_McqConsensusView$OptionRow() {
    let a = this; jl_Object.call(a);
    a.$root0 = null;
    a.$bar = null;
    a.$badge = null;
    a.$label0 = null;
    a.$count0 = null;
    a.$pick = null;
    a.$pct = null;
    a.$correct = null;
}
let cpcm_McqConsensusView$OptionRow__init_0 = ($this, var$1) => {
    jl_Object__init_($this);
},
cpcm_McqConsensusView$OptionRow__init_ = var_0 => {
    let var_1 = new cpcm_McqConsensusView$OptionRow();
    cpcm_McqConsensusView$OptionRow__init_0(var_1, var_0);
    return var_1;
};
function cpcw_WhiteboardStudio() {
    let a = this; jl_Object.call(a);
    a.$swarm = null;
    a.$session = null;
    a.$root4 = null;
    a.$toolbar = null;
    a.$countSpan = null;
    a.$avatarsDiv = null;
    a.$behaviorBtns = null;
    a.$pauseBtn = null;
    a.$liveDiv = null;
    a.$radioIcon = null;
    a.$nameInput = null;
    a.$roomInput = null;
    a.$connectBtn = null;
    a.$errorSpan = null;
    a.$canvasContainer = null;
    a.$canvas = null;
    a.$renderer = null;
    a.$zoomSpan = null;
    a.$editorDiv = null;
    a.$editorInput = null;
    a.$activeTool = null;
    a.$selectedColor = null;
    a.$selectedStickyColor = null;
    a.$strokeWidth1 = 3.0;
    a.$zoom = 0.0;
    a.$panX = 0.0;
    a.$panY = 0.0;
    a.$elements = null;
    a.$undoStack = null;
    a.$redoStack = null;
    a.$isDrawing = 0;
    a.$currentElement = null;
    a.$selectedElementId = null;
    a.$disposed1 = 0;
    a.$canvasDirty = 0;
    a.$toolbarDirty = 0;
    a.$avatarsDirty = 0;
    a.$peersDirty = 0;
    a.$lastCountText = null;
    a.$lastPauseSig = null;
    a.$lastLiveSig = null;
    a.$lastZoomText = null;
    a.$avatarButtons = null;
    a.$peerAvatarEls = null;
    a.$resizeHandle = null;
}
let cpcw_WhiteboardStudio_COLOR_PALETTE = null,
cpcw_WhiteboardStudio_STICKY_COLORS = null,
cpcw_WhiteboardStudio_BEHAVIOR_IDS = null,
cpcw_WhiteboardStudio_BEHAVIOR_ICONS = null,
cpcw_WhiteboardStudio_BEHAVIOR_LABELS = null,
cpcw_WhiteboardStudio_$callClinit = () => {
    cpcw_WhiteboardStudio_$callClinit = $rt_eraseClinit(cpcw_WhiteboardStudio);
    cpcw_WhiteboardStudio__clinit_();
},
cpcw_WhiteboardStudio__init_ = $this => {
    let $presence, $countGroup, var$3, $botControls, $behaviorGroup, var$6, $i, $id, $addBotsBtn, var$10, var$11, var$12, $zoomBar, $zoomOutBtn, $zoomInBtn, $resetBtn;
    cpcw_WhiteboardStudio_$callClinit();
    jl_Object__init_($this);
    $this.$swarm = cpcw_BotSwarm__init_0($this);
    $this.$session = cpcw_LiveSession__init_0($this);
    $this.$behaviorBtns = $rt_createArray(jl_Object, 3);
    cpcm_ToolType_$callClinit();
    $this.$activeTool = cpcm_ToolType_PEN;
    $this.$selectedColor = $rt_s(131);
    $this.$selectedStickyColor = $rt_s(148);
    $this.$strokeWidth1 = 3.0;
    $this.$zoom = 1.0;
    $this.$panX = 0.0;
    $this.$panY = 0.0;
    $this.$elements = cpcw_Elements_seed();
    $this.$undoStack = ju_ArrayList__init_();
    $this.$redoStack = ju_ArrayList__init_();
    $this.$isDrawing = 0;
    $this.$currentElement = null;
    $this.$selectedElementId = null;
    $this.$disposed1 = 0;
    $this.$canvasDirty = 1;
    $this.$toolbarDirty = 1;
    $this.$avatarsDirty = 1;
    $this.$peersDirty = 1;
    $this.$lastCountText = $rt_s(24);
    $this.$lastPauseSig = $rt_s(24);
    $this.$lastLiveSig = $rt_s(24);
    $this.$lastZoomText = $rt_s(24);
    $this.$avatarButtons = ju_ArrayList__init_();
    $this.$peerAvatarEls = ju_ArrayList__init_();
    $this.$root4 = cpcs_Ui_el($rt_s(21), $rt_s(373));
    $this.$toolbar = cpcs_Ui_el($rt_s(21), $rt_s(374));
    $presence = cpcs_Ui_el($rt_s(21), $rt_s(375));
    $countGroup = cpcs_Ui_el($rt_s(21), $rt_s(190));
    $countGroup.insertAdjacentHTML('beforeend', $rt_ustr(cpcs_Icons_svg($rt_s(376), $rt_s(188))));
    $this.$countSpan = cpcs_Ui_el($rt_s(28), $rt_s(377));
    var$3 = $this.$countSpan;
    $countGroup.appendChild(var$3);
    $this.$avatarsDiv = cpcs_Ui_el($rt_s(21), $rt_s(378));
    $botControls = cpcs_Ui_el($rt_s(21), $rt_s(379));
    $behaviorGroup = cpcs_Ui_el($rt_s(21), $rt_s(380));
    var$6 = "Bot swarm behavior";
    $behaviorGroup.title = var$6;
    $i = 0;
    while ($i < 3) {
        $id = cpcw_WhiteboardStudio_BEHAVIOR_IDS.data[$i];
        $this.$behaviorBtns.data[$i] = otji_JSWrapper_wrap(cpcs_Ui_btnHtml($rt_s(24), cpcs_Icons_svg(cpcw_WhiteboardStudio_BEHAVIOR_ICONS.data[$i], $rt_s(292)), cpcw_WhiteboardStudio$_init_$lambda$_0_16__init_0($this, $id)));
        var$6 = otji_JSWrapper_unwrap($this.$behaviorBtns.data[$i]);
        var$3 = $rt_ustr(cpcw_WhiteboardStudio_BEHAVIOR_LABELS.data[$i]);
        var$6.title = var$3;
        var$6 = otji_JSWrapper_unwrap($this.$behaviorBtns.data[$i]);
        $behaviorGroup.appendChild(var$6);
        $i = $i + 1 | 0;
    }
    $this.$pauseBtn = cpcs_Ui_btnHtml($rt_s(24), $rt_s(24), cpcw_WhiteboardStudio$_init_$lambda$_0_0__init_0($this));
    var$3 = cpcs_Icons_svg($rt_s(381), $rt_s(382));
    var$6 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$6, var$3), $rt_s(383));
    var$6 = jl_StringBuilder_toString(var$6);
    var$3 = cpcw_WhiteboardStudio$_init_$lambda$_0_1__init_0($this);
    $addBotsBtn = cpcs_Ui_btnHtml($rt_s(384), var$6, var$3);
    var$6 = "Spawn +5 Collaborator Bots";
    $addBotsBtn.title = var$6;
    var$10 = $rt_createArray(jl_Object, 3);
    var$11 = var$10.data;
    var$11[0] = otji_JSWrapper_wrap($behaviorGroup);
    var$11[1] = otji_JSWrapper_wrap($this.$pauseBtn);
    var$11[2] = otji_JSWrapper_wrap($addBotsBtn);
    cpcs_Ui_add($botControls, var$10);
    $this.$liveDiv = cpcs_Ui_el($rt_s(21), $rt_s(379));
    var$12 = $this.$liveDiv;
    var$6 = "Join a live room hosted by the Java server";
    var$12.title = var$6;
    $this.$liveDiv.insertAdjacentHTML('beforeend', $rt_ustr(cpcs_Icons_svg($rt_s(385), $rt_s(386))));
    $this.$radioIcon = $this.$liveDiv.lastChild;
    var$12 = $this.$session;
    var$12 = cpcw_LiveSession_displayName(var$12);
    $this.$nameInput = cpcs_Ui_input($rt_s(387), $rt_s(388), var$12, $rt_s(389));
    var$12 = $this.$nameInput;
    var$6 = "Your display name";
    var$12.title = var$6;
    cpcs_Ui_onInput($this.$nameInput, cpcw_WhiteboardStudio$_init_$lambda$_0_2__init_0($this));
    var$12 = $this.$session;
    var$12 = cpcw_LiveSession_room(var$12);
    $this.$roomInput = cpcs_Ui_input($rt_s(387), $rt_s(388), var$12, $rt_s(390));
    var$12 = $this.$roomInput;
    var$6 = "Room name — everyone with the same room draws together";
    var$12.title = var$6;
    cpcs_Ui_onInput($this.$roomInput, cpcw_WhiteboardStudio$_init_$lambda$_0_3__init_0($this));
    $this.$connectBtn = cpcs_Ui_btnHtml($rt_s(24), $rt_s(24), cpcw_WhiteboardStudio$_init_$lambda$_0_4__init_0($this));
    $this.$errorSpan = cpcs_Ui_el0($rt_s(28), $rt_s(391), $rt_s(392));
    var$3 = $this.$liveDiv;
    var$10 = $rt_createArray(jl_Object, 4);
    var$11 = var$10.data;
    var$11[0] = otji_JSWrapper_wrap($this.$nameInput);
    var$11[1] = otji_JSWrapper_wrap($this.$roomInput);
    var$11[2] = otji_JSWrapper_wrap($this.$connectBtn);
    var$11[3] = otji_JSWrapper_wrap($this.$errorSpan);
    cpcs_Ui_add(var$3, var$10);
    var$10 = $rt_createArray(jl_Object, 4);
    var$11 = var$10.data;
    var$11[0] = otji_JSWrapper_wrap($countGroup);
    var$11[1] = otji_JSWrapper_wrap($this.$avatarsDiv);
    var$11[2] = otji_JSWrapper_wrap($botControls);
    var$11[3] = otji_JSWrapper_wrap($this.$liveDiv);
    cpcs_Ui_add($presence, var$10);
    $this.$canvasContainer = cpcs_Ui_el($rt_s(21), $rt_s(393));
    $this.$canvas = (cpcs_Ui_doc()).createElement("canvas");
    var$6 = $this.$canvas;
    var$3 = "absolute inset-0 w-full h-full touch-none";
    var$6.className = var$3;
    cpcs_Ui_onMouse($this.$canvas, $rt_s(394), cpcw_WhiteboardStudio$_init_$lambda$_0_5__init_0($this));
    cpcs_Ui_onMouse($this.$canvas, $rt_s(395), cpcw_WhiteboardStudio$_init_$lambda$_0_6__init_0($this));
    cpcs_Ui_onMouse($this.$canvas, $rt_s(396), cpcw_WhiteboardStudio$_init_$lambda$_0_7__init_0($this));
    var$6 = $this.$canvasContainer;
    var$3 = $this.$canvas;
    var$6.appendChild(var$3);
    $this.$renderer = cpcw_CanvasRenderer__init_0($this.$canvas);
    $zoomBar = cpcs_Ui_el($rt_s(21), $rt_s(397));
    $zoomOutBtn = cpcs_Ui_btnHtml($rt_s(398), cpcs_Icons_svg($rt_s(399), $rt_s(292)), cpcw_WhiteboardStudio$_init_$lambda$_0_8__init_0($this));
    var$6 = "Zoom Out";
    $zoomOutBtn.title = var$6;
    $this.$zoomSpan = cpcs_Ui_el($rt_s(28), $rt_s(400));
    $zoomInBtn = cpcs_Ui_btnHtml($rt_s(398), cpcs_Icons_svg($rt_s(401), $rt_s(292)), cpcw_WhiteboardStudio$_init_$lambda$_0_9__init_0($this));
    var$6 = "Zoom In";
    $zoomInBtn.title = var$6;
    $resetBtn = cpcs_Ui_btnHtml($rt_s(402), cpcs_Icons_svg($rt_s(403), $rt_s(292)), cpcw_WhiteboardStudio$_init_$lambda$_0_10__init_0($this));
    var$6 = "Reset View";
    $resetBtn.title = var$6;
    var$10 = $rt_createArray(jl_Object, 4);
    var$11 = var$10.data;
    var$11[0] = otji_JSWrapper_wrap($zoomOutBtn);
    var$11[1] = otji_JSWrapper_wrap($this.$zoomSpan);
    var$11[2] = otji_JSWrapper_wrap($zoomInBtn);
    var$11[3] = otji_JSWrapper_wrap($resetBtn);
    cpcs_Ui_add($zoomBar, var$10);
    $this.$editorDiv = cpcs_Ui_el($rt_s(21), $rt_s(404));
    var$6 = $this.$editorDiv;
    var$3 = cpcs_Ui_el0($rt_s(28), $rt_s(405), $rt_s(406));
    var$6.appendChild(var$3);
    $this.$editorInput = cpcs_Ui_input($rt_s(407), $rt_s(388), $rt_s(24), $rt_s(408));
    cpcs_Ui_onInput($this.$editorInput, cpcw_WhiteboardStudio$_init_$lambda$_0_11__init_0($this));
    cpcs_Ui_on($this.$editorInput, $rt_s(409), cpcw_WhiteboardStudio$_init_$lambda$_0_12__init_0($this));
    var$6 = $this.$editorDiv;
    var$3 = $this.$editorInput;
    var$6.appendChild(var$3);
    var$6 = $this.$editorDiv;
    var$3 = cpcs_Ui_btn($rt_s(410), $rt_s(411), cpcw_WhiteboardStudio$_init_$lambda$_0_13__init_0($this));
    var$6.appendChild(var$3);
    cpcs_Ui_show($this.$editorDiv, 0);
    var$6 = $this.$root4;
    var$10 = $rt_createArray(jl_Object, 5);
    var$11 = var$10.data;
    var$11[0] = otji_JSWrapper_wrap($this.$toolbar);
    var$11[1] = otji_JSWrapper_wrap($presence);
    var$11[2] = otji_JSWrapper_wrap($this.$canvasContainer);
    var$11[3] = otji_JSWrapper_wrap($zoomBar);
    var$11[4] = otji_JSWrapper_wrap($this.$editorDiv);
    cpcs_Ui_add(var$6, var$10);
    cpcw_BotSwarm_start($this.$swarm);
    $this.$resizeHandle = cpcw_WhiteboardStudio_addWindowResize$js_body$_30(otji_JS_function(otji_JSWrapper_unwrap(cpcw_WhiteboardStudio$_init_$lambda$_0_14__init_0($this)), "call"));
    cpcw_WhiteboardStudio_syncUi($this);
    requestAnimationFrame(otji_JS_function(otji_JSWrapper_unwrap(cpcw_WhiteboardStudio$_init_$lambda$_0_15__init_0($this)), "call"));
},
cpcw_WhiteboardStudio__init_0 = () => {
    let var_0 = new cpcw_WhiteboardStudio();
    cpcw_WhiteboardStudio__init_(var_0);
    return var_0;
},
cpcw_WhiteboardStudio_root = $this => {
    return $this.$root4;
},
cpcw_WhiteboardStudio_onPrimaryAction = $this => {
    cpcw_BotSwarm_spawn($this.$swarm, 15);
    cpcw_WhiteboardStudio_syncUi($this);
},
cpcw_WhiteboardStudio_dispose = $this => {
    $this.$disposed1 = 1;
    cpcw_BotSwarm_dispose($this.$swarm);
    window.removeEventListener('resize', $this.$resizeHandle);
    cpcw_LiveSession_dispose($this.$session);
},
cpcw_WhiteboardStudio_frame = ($this, $t) => {
    if ($this.$disposed1)
        return;
    cpcw_WhiteboardStudio_syncCanvasSize($this);
    if ($this.$canvasDirty) {
        $this.$canvasDirty = 0;
        cpcw_CanvasRenderer_render($this.$renderer, $this.$elements, $this.$currentElement, $this.$selectedElementId, cpcw_BotSwarm_bots($this.$swarm), cpcw_LiveSession_peers($this.$session), $this.$panX, $this.$panY, $this.$zoom);
    }
    requestAnimationFrame(otji_JS_function(otji_JSWrapper_unwrap(cpcw_WhiteboardStudio$frame$lambda$_4_0__init_0($this)), "call"));
},
cpcw_WhiteboardStudio_syncCanvasSize = $this => {
    let $w, $h;
    $w = $this.$canvasContainer.clientWidth;
    $h = $this.$canvasContainer.clientHeight;
    if ($w > 0 && $h > 0 && !($this.$canvas.width == $w && $this.$canvas.height == $h)) {
        $this.$canvas.width = $w;
        $this.$canvas.height = $h;
        $this.$canvasDirty = 1;
    }
},
cpcw_WhiteboardStudio_syncUi = $this => {
    let var$1, var$2, $count, $i, var$5, var$6, $pauseSig, var$8, $liveSig, $label, var$11, $zoomText;
    if ($this.$toolbarDirty) {
        $this.$toolbarDirty = 0;
        cpcw_WhiteboardStudio_rebuildToolbar($this);
    }
    var$1 = (1 + (cpcw_BotSwarm_bots($this.$swarm)).$size() | 0) + (cpcw_LiveSession_peers($this.$session)).$size() | 0;
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append1(var$2, var$1), $rt_s(412));
    $count = jl_StringBuilder_toString(var$2);
    if (!$count.$equals($this.$lastCountText)) {
        $this.$lastCountText = $count;
        cpcs_Ui_setText($this.$countSpan, $count);
    }
    if (!$this.$avatarsDirty)
        cpcw_WhiteboardStudio_updateBotAvatarTitles($this);
    else {
        $this.$avatarsDirty = 0;
        cpcw_WhiteboardStudio_rebuildBotAvatars($this);
    }
    $i = 0;
    while ($i < 3) {
        var$2 = otji_JSWrapper_unwrap($this.$behaviorBtns.data[$i]);
        var$5 = cpcw_BotSwarm_behavior($this.$swarm);
        cpcw_WhiteboardStudio_$callClinit();
        var$5 = !var$5.$equals(cpcw_WhiteboardStudio_BEHAVIOR_IDS.data[$i]) ? $rt_s(295) : $rt_s(299);
        var$6 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$6, $rt_s(413)), var$5);
        var$5 = jl_StringBuilder_toString(var$6);
        cpcs_Ui_cls(var$2, var$5);
        $i = $i + 1 | 0;
    }
    $pauseSig = !cpcw_BotSwarm_isActive($this.$swarm) ? $rt_s(159) : $rt_s(414);
    if (!$pauseSig.$equals($this.$lastPauseSig)) {
        $this.$lastPauseSig = $pauseSig;
        var$2 = $this.$pauseBtn;
        var$5 = !cpcw_BotSwarm_isActive($this.$swarm) ? $rt_s(415) : $rt_s(416);
        var$6 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$6, $rt_s(417)), var$5);
        var$5 = jl_StringBuilder_toString(var$6);
        cpcs_Ui_cls(var$2, var$5);
        $this.$pauseBtn.title = $rt_ustr(!cpcw_BotSwarm_isActive($this.$swarm) ? $rt_s(418) : $rt_s(419));
        var$2 = $this.$pauseBtn;
        var$5 = cpcs_Icons_svg(!cpcw_BotSwarm_isActive($this.$swarm) ? $rt_s(290) : $rt_s(291), $rt_s(292));
        var$6 = !cpcw_BotSwarm_isActive($this.$swarm) ? $rt_s(420) : $rt_s(421);
        var$8 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$8, var$5), var$6);
        cpcs_Ui_setHtml(var$2, jl_StringBuilder_toString(var$8));
    }
    var$1 = cpcw_LiveSession_isOn($this.$session);
    var$2 = cpcw_LiveSession_status($this.$session);
    var$5 = cpcw_LiveSession_room($this.$session);
    var$6 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append3(var$6, var$1), 124), var$2), 124), var$5);
    $liveSig = jl_StringBuilder_toString(var$6);
    if (!$liveSig.$equals($this.$lastLiveSig)) {
        $this.$lastLiveSig = $liveSig;
        var$2 = $this.$radioIcon;
        var$6 = !cpcw_LiveSession_isOn($this.$session) ? $rt_s(422) : $rt_s(203);
        var$8 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$8, $rt_s(423)), var$6);
        var$2.setAttribute("class", $rt_ustr(jl_StringBuilder_toString(var$8)));
        cpcs_Ui_show($this.$nameInput, cpcw_LiveSession_isOn($this.$session) ? 0 : 1);
        cpcs_Ui_show($this.$roomInput, cpcw_LiveSession_isOn($this.$session) ? 0 : 1);
        if (!cpcw_LiveSession_isOn($this.$session)) {
            if (!$rt_str($this.$nameInput.value).$equals(cpcw_LiveSession_displayName($this.$session)))
                $this.$nameInput.value = $rt_ustr(cpcw_LiveSession_displayName($this.$session));
            if (!$rt_str($this.$roomInput.value).$equals(cpcw_LiveSession_room($this.$session)))
                $this.$roomInput.value = $rt_ustr(cpcw_LiveSession_room($this.$session));
        }
        $this.$connectBtn.disabled = !!(cpcw_LiveSession_status($this.$session)).$equals($rt_s(424));
        var$2 = $this.$connectBtn;
        var$5 = !cpcw_LiveSession_isOn($this.$session) ? $rt_s(425) : $rt_s(288);
        var$6 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$6, $rt_s(426)), var$5);
        var$5 = jl_StringBuilder_toString(var$6);
        cpcs_Ui_cls(var$2, var$5);
        var$2 = $this.$connectBtn;
        if (!cpcw_LiveSession_isOn($this.$session))
            var$5 = $rt_s(427);
        else {
            var$5 = cpcw_LiveSession_room($this.$session);
            var$6 = jl_StringBuilder__init_();
            jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(var$6, $rt_s(428)), var$5), 34);
            var$5 = jl_StringBuilder_toString(var$6);
        }
        var$2.title = $rt_ustr(var$5);
        if ((cpcw_LiveSession_status($this.$session)).$equals($rt_s(424)))
            $label = $rt_s(429);
        else if (!cpcw_LiveSession_isOn($this.$session))
            $label = $rt_s(430);
        else {
            var$2 = cpcw_LiveSession_room($this.$session);
            var$5 = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append(var$5, $rt_s(431)), var$2);
            $label = jl_StringBuilder_toString(var$5);
        }
        var$2 = $this.$connectBtn;
        var$5 = cpcs_Icons_svg(!cpcw_LiveSession_isOn($this.$session) ? $rt_s(432) : $rt_s(433), $rt_s(292));
        var$6 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$6, var$5), $label);
        cpcs_Ui_setHtml(var$2, jl_StringBuilder_toString(var$6));
        cpcs_Ui_show($this.$errorSpan, (cpcw_LiveSession_status($this.$session)).$equals($rt_s(434)));
    }
    if ($this.$peersDirty) {
        $this.$peersDirty = 0;
        cpcw_WhiteboardStudio_rebuildPeerAvatars($this);
    }
    var$11 = jl_Math_round($this.$zoom * 100.0);
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append2(var$2, var$11), 37);
    $zoomText = jl_StringBuilder_toString(var$2);
    if (!$zoomText.$equals($this.$lastZoomText)) {
        $this.$lastZoomText = $zoomText;
        cpcs_Ui_setText($this.$zoomSpan, $zoomText);
    }
    cpcw_WhiteboardStudio_updateEditor($this);
},
cpcw_WhiteboardStudio_rebuildToolbar = $this => {
    let $tools, var$2, var$3, var$4, $palette, var$6, var$7, $c, var$9, var$10, $b, $history, $undoBtn, $redoBtn, $clearBtn, $pngBtn, $jsonBtn;
    a: {
        cpcs_Ui_clear($this.$toolbar);
        $tools = cpcs_Ui_el($rt_s(21), $rt_s(435));
        var$2 = $rt_createArray(jl_Object, 8);
        var$3 = var$2.data;
        cpcm_ToolType_$callClinit();
        var$4 = cpcm_ToolType_SELECT;
        var$3[0] = otji_JSWrapper_wrap(cpcw_WhiteboardStudio_toolButton($this, var$4, $rt_s(436), $rt_s(437), $rt_s(438)));
        var$4 = cpcm_ToolType_PEN;
        var$3[1] = otji_JSWrapper_wrap(cpcw_WhiteboardStudio_toolButton($this, var$4, $rt_s(439), $rt_s(440), $rt_s(438)));
        var$4 = cpcm_ToolType_RECTANGLE;
        var$3[2] = otji_JSWrapper_wrap(cpcw_WhiteboardStudio_toolButton($this, var$4, $rt_s(441), $rt_s(442), $rt_s(438)));
        var$4 = cpcm_ToolType_ELLIPSE;
        var$3[3] = otji_JSWrapper_wrap(cpcw_WhiteboardStudio_toolButton($this, var$4, $rt_s(443), $rt_s(444), $rt_s(438)));
        var$4 = cpcm_ToolType_ARROW;
        var$3[4] = otji_JSWrapper_wrap(cpcw_WhiteboardStudio_toolButton($this, var$4, $rt_s(445), $rt_s(446), $rt_s(438)));
        var$4 = cpcm_ToolType_STICKY;
        var$3[5] = otji_JSWrapper_wrap(cpcw_WhiteboardStudio_toolButton($this, var$4, $rt_s(447), $rt_s(448), $rt_s(449)));
        var$4 = cpcm_ToolType_TEXT;
        var$3[6] = otji_JSWrapper_wrap(cpcw_WhiteboardStudio_toolButton($this, var$4, $rt_s(450), $rt_s(451), $rt_s(438)));
        var$4 = cpcm_ToolType_ERASER;
        var$3[7] = otji_JSWrapper_wrap(cpcw_WhiteboardStudio_toolButton($this, var$4, $rt_s(452), $rt_s(452), $rt_s(453)));
        cpcs_Ui_add($tools, var$2);
        $palette = cpcs_Ui_el($rt_s(21), $rt_s(454));
        if ($this.$activeTool === cpcm_ToolType_STICKY) {
            var$2 = cpcw_WhiteboardStudio_STICKY_COLORS.data;
            var$6 = var$2.length;
            var$7 = 0;
            while (true) {
                if (var$7 >= var$6)
                    break a;
                $c = var$2[var$7];
                var$4 = !$this.$selectedStickyColor.$equals($c) ? $rt_s(455) : $rt_s(456);
                var$9 = jl_StringBuilder__init_();
                jl_StringBuilder_append(jl_StringBuilder_append(var$9, $rt_s(457)), var$4);
                var$9 = jl_StringBuilder_toString(var$9);
                var$10 = cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_6__init_0($this, $c);
                $b = cpcs_Ui_btn(var$9, $rt_s(24), var$10);
                cpcs_Ui_setStyle$js_body$_22($b, "background-color", $rt_ustr($c));
                $palette.appendChild($b);
                var$7 = var$7 + 1 | 0;
            }
        }
        var$2 = cpcw_WhiteboardStudio_COLOR_PALETTE.data;
        var$6 = var$2.length;
        var$7 = 0;
        while (var$7 < var$6) {
            $c = var$2[var$7];
            var$4 = !$this.$selectedColor.$equals($c) ? $rt_s(455) : $rt_s(458);
            var$9 = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append(var$9, $rt_s(459)), var$4);
            var$9 = jl_StringBuilder_toString(var$9);
            var$10 = cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_0__init_0($this, $c);
            $b = cpcs_Ui_btn(var$9, $rt_s(24), var$10);
            cpcs_Ui_setStyle$js_body$_22($b, "background-color", $rt_ustr($c));
            $palette.appendChild($b);
            var$7 = var$7 + 1 | 0;
        }
    }
    $history = cpcs_Ui_el($rt_s(21), $rt_s(460));
    var$9 = cpcs_Icons_svg($rt_s(461), $rt_s(462));
    var$10 = cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_1__init_0($this);
    $undoBtn = cpcs_Ui_btnHtml($rt_s(463), var$9, var$10);
    var$4 = !!$this.$undoStack.$isEmpty();
    $undoBtn.disabled = var$4;
    var$4 = "Undo";
    $undoBtn.title = var$4;
    var$9 = cpcs_Icons_svg($rt_s(464), $rt_s(462));
    var$10 = cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_2__init_0($this);
    $redoBtn = cpcs_Ui_btnHtml($rt_s(463), var$9, var$10);
    var$4 = !!$this.$redoStack.$isEmpty();
    $redoBtn.disabled = var$4;
    var$4 = "Redo";
    $redoBtn.title = var$4;
    $clearBtn = cpcs_Ui_btnHtml($rt_s(465), cpcs_Icons_svg($rt_s(127), $rt_s(462)), cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_3__init_0($this));
    var$4 = "Clear Canvas";
    $clearBtn.title = var$4;
    $pngBtn = cpcs_Ui_btnHtml($rt_s(465), cpcs_Icons_svg($rt_s(466), $rt_s(462)), cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_4__init_0($this));
    var$4 = "Export PNG Diagram";
    $pngBtn.title = var$4;
    $jsonBtn = cpcs_Ui_btnHtml($rt_s(465), cpcs_Icons_svg($rt_s(467), $rt_s(462)), cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_5__init_0($this));
    var$4 = "Export Elements JSON";
    $jsonBtn.title = var$4;
    var$2 = $rt_createArray(jl_Object, 5);
    var$3 = var$2.data;
    var$3[0] = otji_JSWrapper_wrap($undoBtn);
    var$3[1] = otji_JSWrapper_wrap($redoBtn);
    var$3[2] = otji_JSWrapper_wrap($clearBtn);
    var$3[3] = otji_JSWrapper_wrap($pngBtn);
    var$3[4] = otji_JSWrapper_wrap($jsonBtn);
    cpcs_Ui_add($history, var$2);
    var$4 = $this.$toolbar;
    var$2 = $rt_createArray(jl_Object, 3);
    var$3 = var$2.data;
    var$3[0] = otji_JSWrapper_wrap($tools);
    var$3[1] = otji_JSWrapper_wrap($palette);
    var$3[2] = otji_JSWrapper_wrap($history);
    cpcs_Ui_add(var$4, var$2);
},
cpcw_WhiteboardStudio_toolButton = ($this, $tool, $icon, $title, $activeCls) => {
    let var$5, var$6, var$7, $b;
    if ($this.$activeTool !== $tool)
        $activeCls = $rt_s(468);
    var$5 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$5, $rt_s(469)), $activeCls);
    var$6 = jl_StringBuilder_toString(var$5);
    var$7 = cpcs_Icons_svg($icon, $rt_s(462));
    var$5 = cpcw_WhiteboardStudio$toolButton$lambda$_8_0__init_0($this, $tool);
    $b = cpcs_Ui_btnHtml(var$6, var$7, var$5);
    var$6 = $rt_ustr($title);
    $b.title = var$6;
    return $b;
},
cpcw_WhiteboardStudio_rebuildBotAvatars = $this => {
    let $host, var$2, $bots, $n, $i, $bot, $following, var$8, var$9, $b, var$11, var$12;
    cpcs_Ui_clear($this.$avatarsDiv);
    $this.$avatarButtons.$clear0();
    $host = cpcs_Ui_el0($rt_s(21), $rt_s(470), $rt_s(471));
    var$2 = "You (Session Host)";
    $host.title = var$2;
    $this.$avatarsDiv.appendChild($host);
    $bots = cpcw_BotSwarm_bots($this.$swarm);
    $n = jl_Math_min(5, $bots.$size());
    $i = 0;
    while ($i < $n) {
        $bot = $bots.$get0($i);
        $following = (cpcm_Collaborator_getId($bot)).$equals(cpcw_BotSwarm_followId($this.$swarm));
        var$2 = !$following ? $rt_s(472) : $rt_s(473);
        var$8 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$8, $rt_s(474)), var$2);
        var$9 = jl_StringBuilder_toString(var$8);
        var$2 = !$following ? $rt_s(24) : cpcs_Icons_svg($rt_s(475), $rt_s(292));
        var$8 = cpcw_WhiteboardStudio$rebuildBotAvatars$lambda$_9_0__init_0($this, $bot);
        $b = cpcs_Ui_btnHtml(var$9, var$2, var$8);
        if (!$following)
            $b.textContent = $rt_ustr(jl_String_valueOf1((cpcm_Collaborator_getName($bot)).$charAt(0)));
        var$8 = cpcm_Collaborator_getColor($bot);
        cpcs_Ui_setStyle$js_body$_22($b, "background-color", $rt_ustr(var$8));
        var$2 = $rt_ustr(cpcw_WhiteboardStudio_avatarTitle($bot, $following));
        $b.title = var$2;
        $this.$avatarsDiv.appendChild($b);
        $this.$avatarButtons.$add1(otji_JSWrapper_wrap($b));
        $i = $i + 1 | 0;
    }
    if ($bots.$size() > 5) {
        var$2 = $this.$avatarsDiv;
        var$11 = $bots.$size() - 5 | 0;
        var$12 = jl_StringBuilder__init_();
        jl_StringBuilder_append1(jl_StringBuilder_append0(var$12, 43), var$11);
        var$12 = jl_StringBuilder_toString(var$12);
        var$2.appendChild(cpcs_Ui_el0($rt_s(21), $rt_s(476), var$12));
    }
},
cpcw_WhiteboardStudio_updateBotAvatarTitles = $this => {
    let $bots, $n, $i, $bot, var$5, var$6;
    $bots = cpcw_BotSwarm_bots($this.$swarm);
    $n = jl_Math_min($this.$avatarButtons.$size(), $bots.$size());
    $i = 0;
    while ($i < $n) {
        $bot = $bots.$get0($i);
        var$5 = otji_JSWrapper_unwrap($this.$avatarButtons.$get0($i));
        var$6 = $rt_ustr(cpcw_WhiteboardStudio_avatarTitle($bot, (cpcm_Collaborator_getId($bot)).$equals(cpcw_BotSwarm_followId($this.$swarm))));
        var$5.title = var$6;
        $i = $i + 1 | 0;
    }
},
cpcw_WhiteboardStudio_avatarTitle = ($bot, $following) => {
    let var$3, var$4, var$5, var$6;
    cpcw_WhiteboardStudio_$callClinit();
    var$3 = cpcm_Collaborator_getName($bot);
    var$4 = cpcm_Collaborator_getLastAction($bot);
    var$5 = !$following ? $rt_s(477) : $rt_s(478);
    var$6 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$6, var$3), $rt_s(479)), var$4), $rt_s(480)), var$5), 41);
    return jl_StringBuilder_toString(var$6);
},
cpcw_WhiteboardStudio_rebuildPeerAvatars = $this => {
    let var$1, $e, $peers, $n, $i, $p, var$7, $d, var$9, var$10;
    var$1 = $this.$peerAvatarEls.$iterator();
    while (var$1.$hasNext()) {
        $e = otji_JSWrapper_unwrap(var$1.$next());
        $e.remove();
    }
    $this.$peerAvatarEls.$clear0();
    $peers = cpcw_LiveSession_peers($this.$session);
    $n = jl_Math_min(4, $peers.$size());
    $i = 0;
    while ($i < $n) {
        $p = $peers.$get0($i);
        var$7 = jl_String_valueOf1(jl_Character_toUpperCase((cpcm_Collaborator_getName($p)).$charAt(0)));
        $d = cpcs_Ui_el0($rt_s(21), $rt_s(481), var$7);
        var$9 = cpcm_Collaborator_getColor($p);
        cpcs_Ui_setStyle$js_body$_22($d, "background-color", $rt_ustr(var$9));
        var$1 = cpcm_Collaborator_getName($p);
        var$9 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$9, var$1), $rt_s(482));
        var$1 = $rt_ustr(jl_StringBuilder_toString(var$9));
        $d.title = var$1;
        $this.$liveDiv.appendChild($d);
        $this.$peerAvatarEls.$add1(otji_JSWrapper_wrap($d));
        $i = $i + 1 | 0;
    }
    if ($peers.$size() > 4) {
        var$10 = $peers.$size() - 4 | 0;
        var$7 = jl_StringBuilder__init_();
        jl_StringBuilder_append1(jl_StringBuilder_append0(var$7, 43), var$10);
        var$7 = jl_StringBuilder_toString(var$7);
        $d = cpcs_Ui_el0($rt_s(21), $rt_s(476), var$7);
        $this.$liveDiv.appendChild($d);
        $this.$peerAvatarEls.$add1(otji_JSWrapper_wrap($d));
    }
},
cpcw_WhiteboardStudio_updateEditor = $this => {
    let $el, $value;
    if ($this.$selectedElementId === null) {
        cpcs_Ui_show($this.$editorDiv, 0);
        return;
    }
    cpcs_Ui_show($this.$editorDiv, 1);
    $el = cpcw_Elements_findById($this.$elements, $this.$selectedElementId);
    $value = $el !== null && cpcm_CanvasElement_text($el) !== null ? cpcm_CanvasElement_text($el) : $rt_s(24);
    if (!$rt_str($this.$editorInput.value).$equals($value))
        $this.$editorInput.value = $rt_ustr($value);
},
cpcw_WhiteboardStudio_handleEditorInput = ($this, $val) => {
    let $next, var$3, $el;
    if ($this.$selectedElementId === null)
        return;
    $next = ju_ArrayList__init_4($this.$elements.$size());
    var$3 = $this.$elements.$iterator();
    while (var$3.$hasNext()) {
        $el = var$3.$next();
        if ((cpcm_CanvasElement_id($el)).$equals($this.$selectedElementId))
            $el = cpcw_Elements_withText($el, $val);
        $next.$add1($el);
    }
    $this.$elements = $next;
    $this.$canvasDirty = 1;
},
cpcw_WhiteboardStudio_handleEditorBlur = $this => {
    let $el;
    $el = $this.$selectedElementId === null ? null : cpcw_Elements_findById($this.$elements, $this.$selectedElementId);
    if ($el !== null)
        cpcw_LiveSession_upsert($this.$session, $el);
},
cpcw_WhiteboardStudio_handleDeleteSelected = $this => {
    let $id;
    $id = $this.$selectedElementId;
    if ($id === null)
        return;
    $this.$elements = cpcw_Elements_withoutId($this.$elements, $id);
    cpcw_LiveSession_delete($this.$session, $id);
    $this.$selectedElementId = null;
    $this.$canvasDirty = 1;
    cpcw_WhiteboardStudio_syncUi($this);
},
cpcw_WhiteboardStudio_handlePointerDown = ($this, $e) => {
    let $rect, $x, $y, var$5, $hit, $now, var$8, var$9, var$10, var$11, var$12, $sticky, $text, $type, var$16, var$17, var$18, var$19, var$20;
    $rect = $this.$canvas.getBoundingClientRect();
    $x = ($e.clientX - $rect.left - $this.$panX) / $this.$zoom;
    $y = ($e.clientY - $rect.top - $this.$panY) / $this.$zoom;
    var$5 = $this.$activeTool;
    cpcm_ToolType_$callClinit();
    if (var$5 === cpcm_ToolType_SELECT) {
        $hit = cpcw_WhiteboardStudio_hitTest($this, $x, $y);
        $this.$selectedElementId = $hit === null ? null : cpcm_CanvasElement_id($hit);
        $this.$canvasDirty = 1;
        cpcw_WhiteboardStudio_syncUi($this);
        return;
    }
    if ($this.$activeTool === cpcm_ToolType_ERASER) {
        $hit = cpcw_WhiteboardStudio_hitTest($this, $x, $y);
        if ($hit !== null) {
            $this.$undoStack.$add1($this.$elements);
            $this.$elements = cpcw_Elements_withoutId($this.$elements, cpcm_CanvasElement_id($hit));
            cpcw_LiveSession_delete($this.$session, cpcm_CanvasElement_id($hit));
            $this.$toolbarDirty = 1;
            $this.$canvasDirty = 1;
            cpcw_WhiteboardStudio_syncUi($this);
        }
        return;
    }
    $this.$isDrawing = 1;
    $now = jl_System_currentTimeMillis();
    if ($this.$activeTool === cpcm_ToolType_PEN) {
        var$8 = new cpcm_CanvasElement;
        var$5 = jl_StringBuilder__init_();
        jl_StringBuilder_append2(jl_StringBuilder_append(var$5, $rt_s(483)), $now);
        var$9 = jl_StringBuilder_toString(var$5);
        cpcm_ElementType_$callClinit();
        var$5 = cpcm_ElementType_STROKE;
        var$10 = $rt_createArray(cpcm_Point, 1);
        var$10.data[0] = cpcm_Point__init_($x, $y);
        cpcm_CanvasElement__init_(var$8, var$9, var$5, cpcw_Elements_pointsOf(var$10), $x, $y, null, null, $this.$selectedColor, null, 3.0, null, $rt_s(484), $rt_s(471), $this.$selectedColor, $now);
        $this.$currentElement = var$8;
    } else if ($this.$activeTool !== cpcm_ToolType_RECTANGLE && $this.$activeTool !== cpcm_ToolType_ELLIPSE) {
        if ($this.$activeTool === cpcm_ToolType_ARROW) {
            var$11 = new cpcm_CanvasElement;
            var$8 = jl_StringBuilder__init_();
            jl_StringBuilder_append2(jl_StringBuilder_append(var$8, $rt_s(483)), $now);
            var$12 = jl_StringBuilder_toString(var$8);
            cpcm_ElementType_$callClinit();
            var$9 = cpcm_ElementType_ARROW;
            var$10 = $rt_wrapArray(cpcm_Point, [cpcm_Point__init_($x, $y), cpcm_Point__init_($x, $y)]);
            cpcm_CanvasElement__init_(var$11, var$12, var$9, cpcw_Elements_pointsOf(var$10), $x, $y, null, null, $this.$selectedColor, null, 3.0, null, $rt_s(484), $rt_s(471), $this.$selectedColor, $now);
            $this.$currentElement = var$11;
        } else if ($this.$activeTool === cpcm_ToolType_STICKY) {
            $sticky = new cpcm_CanvasElement;
            var$8 = jl_StringBuilder__init_();
            jl_StringBuilder_append2(jl_StringBuilder_append(var$8, $rt_s(483)), $now);
            var$8 = jl_StringBuilder_toString(var$8);
            cpcm_ElementType_$callClinit();
            cpcm_CanvasElement__init_($sticky, var$8, cpcm_ElementType_STICKY, null, $x, $y, jl_Double_valueOf(170.0), jl_Double_valueOf(130.0), $this.$selectedStickyColor, null, 1.0, $rt_s(485), $rt_s(484), $rt_s(471), $rt_s(131), $now);
            $this.$undoStack.$add1($this.$elements);
            $this.$elements = cpcw_Elements_appended($this.$elements, $sticky);
            cpcw_LiveSession_upsert($this.$session, $sticky);
            $this.$isDrawing = 0;
            $this.$selectedElementId = cpcm_CanvasElement_id($sticky);
            $this.$toolbarDirty = 1;
            cpcw_WhiteboardStudio_syncUi($this);
        } else if ($this.$activeTool === cpcm_ToolType_TEXT) {
            $text = new cpcm_CanvasElement;
            var$8 = jl_StringBuilder__init_();
            jl_StringBuilder_append2(jl_StringBuilder_append(var$8, $rt_s(483)), $now);
            var$11 = jl_StringBuilder_toString(var$8);
            cpcm_ElementType_$callClinit();
            cpcm_CanvasElement__init_($text, var$11, cpcm_ElementType_TEXT, null, $x, $y, jl_Double_valueOf(180.0), jl_Double_valueOf(30.0), $this.$selectedColor, null, 1.0, $rt_s(486), $rt_s(484), $rt_s(471), $this.$selectedColor, $now);
            $this.$undoStack.$add1($this.$elements);
            $this.$elements = cpcw_Elements_appended($this.$elements, $text);
            cpcw_LiveSession_upsert($this.$session, $text);
            $this.$isDrawing = 0;
            $this.$selectedElementId = cpcm_CanvasElement_id($text);
            $this.$toolbarDirty = 1;
            cpcw_WhiteboardStudio_syncUi($this);
        }
    } else {
        if ($this.$activeTool !== cpcm_ToolType_RECTANGLE) {
            cpcm_ElementType_$callClinit();
            $type = cpcm_ElementType_ELLIPSE;
        } else {
            cpcm_ElementType_$callClinit();
            $type = cpcm_ElementType_RECTANGLE;
        }
        var$16 = new cpcm_CanvasElement;
        var$8 = jl_StringBuilder__init_();
        jl_StringBuilder_append2(jl_StringBuilder_append(var$8, $rt_s(483)), $now);
        var$17 = jl_StringBuilder_toString(var$8);
        var$8 = null;
        var$18 = jl_Double_valueOf(1.0);
        var$19 = jl_Double_valueOf(1.0);
        var$12 = $this.$selectedColor;
        var$20 = $this.$selectedColor;
        var$5 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$5, var$20), $rt_s(487));
        cpcm_CanvasElement__init_(var$16, var$17, $type, var$8, $x, $y, var$18, var$19, var$12, jl_StringBuilder_toString(var$5), 3.0, null, $rt_s(484), $rt_s(471), $this.$selectedColor, $now);
        $this.$currentElement = var$16;
    }
    $this.$canvasDirty = 1;
},
cpcw_WhiteboardStudio_handlePointerMove = ($this, $e) => {
    let $rect, $x, $y, $prev, var$6, $pts, $w, $h, var$10, var$11, var$12, var$13, var$14, var$15, var$16, var$17, var$18, var$19;
    $rect = $this.$canvas.getBoundingClientRect();
    $x = ($e.clientX - $rect.left - $this.$panX) / $this.$zoom;
    $y = ($e.clientY - $rect.top - $this.$panY) / $this.$zoom;
    cpcw_LiveSession_sendCursor($this.$session, $x, $y);
    if ($this.$isDrawing && $this.$currentElement !== null) {
        $prev = $this.$currentElement;
        var$6 = cpcm_CanvasElement_type($prev);
        cpcm_ElementType_$callClinit();
        if (var$6 === cpcm_ElementType_STROKE) {
            $pts = ju_ArrayList__init_0(cpcm_CanvasElement_points($prev));
            $pts.$add1(cpcm_Point__init_($x, $y));
            $this.$currentElement = cpcw_Elements_withPoints($prev, $pts);
        } else if (!(cpcm_CanvasElement_type($prev) !== cpcm_ElementType_RECTANGLE && cpcm_CanvasElement_type($prev) !== cpcm_ElementType_ELLIPSE)) {
            $w = $x - cpcm_CanvasElement_x($prev);
            $h = $y - cpcm_CanvasElement_y($prev);
            var$6 = new cpcm_CanvasElement;
            var$10 = cpcm_CanvasElement_id($prev);
            var$11 = cpcm_CanvasElement_type($prev);
            var$12 = cpcm_CanvasElement_points($prev);
            if ($w >= 0.0)
                $x = cpcm_CanvasElement_x($prev);
            if ($h >= 0.0)
                $y = cpcm_CanvasElement_y($prev);
            var$13 = jl_Double_valueOf(jl_Math_abs1($w));
            var$14 = jl_Double_valueOf(jl_Math_abs1($h));
            var$15 = cpcm_CanvasElement_color($prev);
            var$16 = cpcm_CanvasElement_fillColor($prev);
            var$17 = cpcm_CanvasElement_strokeWidth($prev);
            var$18 = cpcm_CanvasElement_text($prev);
            cpcm_CanvasElement__init_(var$6, var$10, var$11, var$12, $x, $y, var$13, var$14, var$15, var$16, var$17, var$18, cpcm_CanvasElement_authorId($prev), cpcm_CanvasElement_authorName($prev), cpcm_CanvasElement_authorColor($prev), cpcm_CanvasElement_updatedAt($prev));
            $this.$currentElement = var$6;
        } else if (cpcm_CanvasElement_type($prev) === cpcm_ElementType_ARROW) {
            var$19 = $rt_wrapArray(cpcm_Point, [(cpcm_CanvasElement_points($prev)).$get0(0), cpcm_Point__init_($x, $y)]);
            $this.$currentElement = cpcw_Elements_withPoints($prev, cpcw_Elements_pointsOf(var$19));
        }
        $this.$canvasDirty = 1;
        return;
    }
},
cpcw_WhiteboardStudio_handlePointerUp = $this => {
    if ($this.$isDrawing && $this.$currentElement !== null) {
        $this.$undoStack.$add1($this.$elements);
        $this.$redoStack.$clear0();
        $this.$elements = cpcw_Elements_appended($this.$elements, $this.$currentElement);
        cpcw_LiveSession_upsert($this.$session, $this.$currentElement);
        $this.$currentElement = null;
        $this.$toolbarDirty = 1;
    }
    $this.$isDrawing = 0;
    $this.$canvasDirty = 1;
    cpcw_WhiteboardStudio_syncUi($this);
},
cpcw_WhiteboardStudio_hitTest = ($this, $x, $y) => {
    let $pt, $i;
    $pt = cpcm_Point__init_($x, $y);
    $i = $this.$elements.$size() - 1 | 0;
    while ($i >= 0) {
        if (cpcw_CanvasModel_isPointInElement($pt, $this.$elements.$get0($i)))
            return $this.$elements.$get0($i);
        $i = $i + (-1) | 0;
    }
    return null;
},
cpcw_WhiteboardStudio_handleUndo = $this => {
    let $prev;
    if ($this.$undoStack.$isEmpty())
        return;
    $prev = $this.$undoStack.$remove($this.$undoStack.$size() - 1 | 0);
    $this.$redoStack.$add1($this.$elements);
    cpcw_WhiteboardStudio_syncDiffLive($this, $this.$elements, $prev);
    $this.$elements = $prev;
    $this.$toolbarDirty = 1;
    $this.$canvasDirty = 1;
    cpcw_WhiteboardStudio_syncUi($this);
},
cpcw_WhiteboardStudio_handleRedo = $this => {
    let $next;
    if ($this.$redoStack.$isEmpty())
        return;
    $next = $this.$redoStack.$remove($this.$redoStack.$size() - 1 | 0);
    $this.$undoStack.$add1($this.$elements);
    cpcw_WhiteboardStudio_syncDiffLive($this, $this.$elements, $next);
    $this.$elements = $next;
    $this.$toolbarDirty = 1;
    $this.$canvasDirty = 1;
    cpcw_WhiteboardStudio_syncUi($this);
},
cpcw_WhiteboardStudio_syncDiffLive = ($this, $from, $to) => {
    let var$3, $e, var$5;
    if (!cpcw_LiveSession_hasSocket($this.$session))
        return;
    var$3 = $from.$iterator();
    while (var$3.$hasNext()) {
        $e = var$3.$next();
        if (cpcw_Elements_findById($to, cpcm_CanvasElement_id($e)) === null)
            cpcw_LiveSession_delete($this.$session, cpcm_CanvasElement_id($e));
    }
    var$5 = $to.$iterator();
    while (var$5.$hasNext()) {
        $e = var$5.$next();
        if (cpcw_Elements_findById($from, cpcm_CanvasElement_id($e)) !== $e)
            cpcw_LiveSession_upsert($this.$session, $e);
    }
},
cpcw_WhiteboardStudio_handleClear = $this => {
    $this.$undoStack.$add1($this.$elements);
    $this.$elements = ju_ArrayList__init_();
    $this.$selectedElementId = null;
    cpcw_LiveSession_clear($this.$session);
    $this.$toolbarDirty = 1;
    $this.$canvasDirty = 1;
    cpcw_WhiteboardStudio_syncUi($this);
},
cpcw_WhiteboardStudio_handleExportPng = $this => {
    let var$1, var$2, var$3;
    var$1 = jl_System_currentTimeMillis();
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append2(jl_StringBuilder_append(var$2, $rt_s(488)), var$1), $rt_s(489));
    var$2 = jl_StringBuilder_toString(var$2);
    var$3 = $rt_str($this.$canvas.toDataURL('image/png'));
    cpcj_Js_download$js_body$_13($rt_ustr(var$2), $rt_ustr(var$3));
},
cpcw_WhiteboardStudio_handleExportJson = $this => {
    let $url, var$2, var$3;
    $url = $rt_str(cpcj_Js_createBlobUrl$js_body$_14($rt_ustr($rt_str(JSON.stringify(cpcw_WhiteboardJson_toJsonList($this.$elements), null, 2))), "application/json"));
    var$2 = jl_System_currentTimeMillis();
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append2(jl_StringBuilder_append(var$3, $rt_s(490)), var$2), $rt_s(491));
    cpcj_Js_download$js_body$_13($rt_ustr(jl_StringBuilder_toString(var$3)), $rt_ustr($url));
    URL.revokeObjectURL($rt_ustr($url));
},
cpcw_WhiteboardStudio_setZoom = ($this, $z) => {
    let $old;
    $old = $this.$zoom;
    $this.$zoom = $z;
    if ($this.$zoom !== $old)
        cpcw_BotSwarm_followCam($this.$swarm);
    $this.$canvasDirty = 1;
    cpcw_WhiteboardStudio_syncUi($this);
},
cpcw_WhiteboardStudio_resetView = $this => {
    let $old;
    $old = $this.$zoom;
    $this.$zoom = 1.0;
    $this.$panX = 0.0;
    $this.$panY = 0.0;
    if ($this.$zoom !== $old)
        cpcw_BotSwarm_followCam($this.$swarm);
    $this.$canvasDirty = 1;
    cpcw_WhiteboardStudio_syncUi($this);
},
cpcw_WhiteboardStudio_round1 = $v => {
    cpcw_WhiteboardStudio_$callClinit();
    return Long_toNumber(jl_Math_round($v * 10.0)) / 10.0;
},
cpcw_WhiteboardStudio_lambda$rebuildBotAvatars$12 = ($this, $bot) => {
    cpcw_BotSwarm_toggleFollow($this.$swarm, cpcm_Collaborator_getId($bot));
    cpcw_WhiteboardStudio_syncUi($this);
},
cpcw_WhiteboardStudio_lambda$toolButton$11 = ($this, $tool) => {
    $this.$activeTool = $tool;
    $this.$toolbarDirty = 1;
    cpcw_WhiteboardStudio_syncUi($this);
},
cpcw_WhiteboardStudio_lambda$rebuildToolbar$10 = ($this, $c) => {
    $this.$selectedStickyColor = $c;
    $this.$toolbarDirty = 1;
    cpcw_WhiteboardStudio_syncUi($this);
},
cpcw_WhiteboardStudio_lambda$rebuildToolbar$9 = ($this, $c) => {
    $this.$selectedColor = $c;
    $this.$toolbarDirty = 1;
    cpcw_WhiteboardStudio_syncUi($this);
},
cpcw_WhiteboardStudio_lambda$new$8 = $this => {
    cpcw_WhiteboardStudio_setZoom($this, jl_Math_min1(2.5, cpcw_WhiteboardStudio_round1($this.$zoom + 0.1)));
},
cpcw_WhiteboardStudio_lambda$new$7 = $this => {
    cpcw_WhiteboardStudio_setZoom($this, jl_Math_max0(0.4, cpcw_WhiteboardStudio_round1($this.$zoom - 0.1)));
},
cpcw_WhiteboardStudio_lambda$new$6 = ($this, $e) => {
    cpcw_WhiteboardStudio_handlePointerUp($this);
},
cpcw_WhiteboardStudio_lambda$new$5 = $this => {
    if (!cpcw_LiveSession_isOn($this.$session))
        cpcw_LiveSession_connect($this.$session);
    else
        cpcw_LiveSession_disconnect($this.$session);
},
cpcw_WhiteboardStudio_lambda$new$4 = ($this, $v) => {
    let $effective;
    $effective = cpcw_LiveSession_setRoom($this.$session, $v);
    if (!$rt_str($this.$roomInput.value).$equals($effective))
        $this.$roomInput.value = $rt_ustr($effective);
},
cpcw_WhiteboardStudio_lambda$new$3 = ($this, $v) => {
    let $effective;
    $effective = cpcw_LiveSession_setName($this.$session, $v);
    if (!$rt_str($this.$nameInput.value).$equals($effective))
        $this.$nameInput.value = $rt_ustr($effective);
},
cpcw_WhiteboardStudio_lambda$new$2 = $this => {
    cpcw_BotSwarm_addBots($this.$swarm, 5);
    cpcw_WhiteboardStudio_syncUi($this);
},
cpcw_WhiteboardStudio_lambda$new$1 = $this => {
    cpcw_BotSwarm_toggleActive($this.$swarm);
    cpcw_WhiteboardStudio_syncUi($this);
},
cpcw_WhiteboardStudio_lambda$new$0 = ($this, $id) => {
    cpcw_BotSwarm_setBehavior($this.$swarm, $id);
    cpcw_WhiteboardStudio_syncUi($this);
};
let cpcw_WhiteboardStudio__clinit_ = () => {
    cpcw_WhiteboardStudio_COLOR_PALETTE = $rt_wrapArray(jl_String, [$rt_s(492), $rt_s(137), $rt_s(131), $rt_s(139), $rt_s(144), $rt_s(370), $rt_s(367), $rt_s(493)]);
    cpcw_WhiteboardStudio_STICKY_COLORS = $rt_wrapArray(jl_String, [$rt_s(148), $rt_s(494), $rt_s(495), $rt_s(496), $rt_s(497)]);
    cpcw_WhiteboardStudio_BEHAVIOR_IDS = $rt_wrapArray(jl_String, [$rt_s(498), $rt_s(499), $rt_s(500)]);
    cpcw_WhiteboardStudio_BEHAVIOR_ICONS = $rt_wrapArray(jl_String, [$rt_s(501), $rt_s(502), $rt_s(503)]);
    cpcw_WhiteboardStudio_BEHAVIOR_LABELS = $rt_wrapArray(jl_String, [$rt_s(504), $rt_s(505), $rt_s(506)]);
},
cpcw_WhiteboardStudio_addWindowResize$js_body$_30 = var$1 => {
    var f = function() {
        var$1();
    };
    window.addEventListener('resize', f);
    return f;
},
jlr_Array = $rt_classWithoutFields(),
jlr_Array_getLength = var$1 => {
    if (var$1 === null || var$1.constructor.$meta.item === 'undefined') {
        $rt_throw(jl_IllegalArgumentException__init_());
    }
    return var$1.data.length;
},
jlr_Array_newInstance = (var$1, $length) => {
    if (var$1 === null)
        $rt_throw(jl_NullPointerException__init_());
    if (var$1 === $rt_cls($rt_voidcls))
        $rt_throw(jl_IllegalArgumentException__init_());
    if ($length < 0)
        $rt_throw(jl_NegativeArraySizeException__init_0());
    return jlr_Array_newInstanceImpl(jl_Class_getPlatformClass(var$1), $length);
},
jlr_Array_newInstanceImpl = (var$1, var$2) => {
    if (var$1.$meta.primitive) {
        switch (var$1) {
        }
        ;
    }
    return $rt_createArray(var$1, var$2);
},
ju_ListIterator = $rt_classWithoutFields(0),
cpc_ClientMain = $rt_classWithoutFields(),
cpc_ClientMain_$callClinit = () => {
    cpc_ClientMain_$callClinit = $rt_eraseClinit(cpc_ClientMain);
    cpc_ClientMain__clinit_();
},
cpc_ClientMain_main = var$1 => {
    let var$2, $shell, var$4;
    cpc_ClientMain_$callClinit();
    var$2 = cpcs_Ui_byId($rt_s(507));
    $shell = cpcs_AppShell__init_0();
    var$4 = $rt_createArray(jl_Object, 1);
    var$4.data[0] = otji_JSWrapper_wrap(cpcs_AppShell_root($shell));
    cpcs_Ui_add(var$2, var$4);
},
cpc_ClientMain__clinit_ = () => {
    return;
},
otcit_DoubleAnalyzer$Result = $rt_classWithoutFields(),
otcit_DoubleAnalyzer$Result__init_ = $this => {
    jl_Object__init_($this);
},
otcit_DoubleAnalyzer$Result__init_0 = () => {
    let var_0 = new otcit_DoubleAnalyzer$Result();
    otcit_DoubleAnalyzer$Result__init_(var_0);
    return var_0;
},
ju_Random = $rt_classWithoutFields(),
ju_Random__init_ = $this => {
    jl_Object__init_($this);
},
ju_Random__init_0 = () => {
    let var_0 = new ju_Random();
    ju_Random__init_(var_0);
    return var_0;
},
ju_Random_nextDouble = $this => {
    return jl_Math_random();
},
otpp_ResourceAccessor = $rt_classWithoutFields(),
otci_IntegerUtil = $rt_classWithoutFields(),
otci_IntegerUtil_toUnsignedLogRadixString = ($value, $radixLog2) => {
    let $radix, $mask, $sz, $chars, $pos, $target, var$9, $target_0;
    if (!$value)
        return $rt_s(159);
    $radix = 1 << $radixLog2;
    $mask = $radix - 1 | 0;
    $sz = (((32 - jl_Integer_numberOfLeadingZeros($value) | 0) + $radixLog2 | 0) - 1 | 0) / $radixLog2 | 0;
    $chars = $rt_createCharArray($sz);
    $pos = $rt_imul($sz - 1 | 0, $radixLog2);
    $target = 0;
    while ($pos >= 0) {
        var$9 = $chars.data;
        $target_0 = $target + 1 | 0;
        var$9[$target] = jl_Character_forDigit(($value >>> $pos | 0) & $mask, $radix);
        $pos = $pos - $radixLog2 | 0;
        $target = $target_0;
    }
    return jl_String__init_5($chars);
};
function cpcw_CanvasModel$Bounds() {
    let a = this; jl_Record.call(a);
    a.$width1 = 0.0;
    a.$height2 = 0.0;
}
let cpcw_CanvasModel$Bounds__init_ = ($this, $width, $height) => {
    jl_Record__init_($this);
    $this.$width1 = $width;
    $this.$height2 = $height;
},
cpcw_CanvasModel$Bounds__init_0 = (var_0, var_1) => {
    let var_2 = new cpcw_CanvasModel$Bounds();
    cpcw_CanvasModel$Bounds__init_(var_2, var_0, var_1);
    return var_2;
},
cpcw_CanvasModel$Bounds_width = $this => {
    return $this.$width1;
},
cpcw_CanvasModel$Bounds_height = $this => {
    return $this.$height2;
},
otcir_FieldInfo = $rt_classWithoutFields(),
otjc_JSObjects = $rt_classWithoutFields(),
otji_JS = $rt_classWithoutFields(),
otji_JS_wrap = $array => {
    let var$2, var$3, $result, $i, var$6;
    if ($array === null)
        return null;
    var$2 = $array.data;
    var$3 = var$2.length;
    $result = new Float64Array(var$3);
    $i = 0;
    while ($i < var$3) {
        var$6 = var$2[$i];
        $result[$i] = var$6;
        $i = $i + 1 | 0;
    }
    return $result;
},
otji_JS_function = (var$1, var$2) => {
    let name = 'jso$functor$' + var$2;
    let result = var$1[name];
    if (typeof result !== 'function') {
        let fn = function() {
            return var$1[var$2].apply(var$1, arguments);
        };
        result = () => fn;
        var$1[name] = result;
    }
    return result();
};
function cpce_MatchingEngineStudio$restartSim$lambda$_5_0() {
    let a = this; jl_Object.call(a);
    a.$_038 = null;
    a.$_17 = 0;
}
let cpce_MatchingEngineStudio$restartSim$lambda$_5_0__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_038 = var$1;
    var$0.$_17 = var$2;
},
cpce_MatchingEngineStudio$restartSim$lambda$_5_0__init_0 = (var_0, var_1) => {
    let var_2 = new cpce_MatchingEngineStudio$restartSim$lambda$_5_0();
    cpce_MatchingEngineStudio$restartSim$lambda$_5_0__init_(var_2, var_0, var_1);
    return var_2;
},
cpce_MatchingEngineStudio$restartSim$lambda$_5_0_call = var$0 => {
    cpce_MatchingEngineStudio_lambda$restartSim$11(var$0.$_038, var$0.$_17);
},
cpce_MatchingEngineStudio$restartSim$lambda$_5_0_call$exported$0 = var$1 => {
    var$1.$call();
};
function cpcm_OrderBookLevel() {
    let a = this; jl_Record.call(a);
    a.$price1 = 0.0;
    a.$totalVolume0 = 0.0;
    a.$orderCount = 0;
    a.$orders = null;
}
let cpcm_OrderBookLevel__init_ = ($this, $price, $totalVolume, $orderCount, $orders) => {
    jl_Record__init_($this);
    $this.$price1 = $price;
    $this.$totalVolume0 = $totalVolume;
    $this.$orderCount = $orderCount;
    $this.$orders = $orders;
},
cpcm_OrderBookLevel__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new cpcm_OrderBookLevel();
    cpcm_OrderBookLevel__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
cpcm_OrderBookLevel_price = $this => {
    return $this.$price1;
},
cpcm_OrderBookLevel_totalVolume = $this => {
    return $this.$totalVolume0;
},
juf_Consumer = $rt_classWithoutFields(0);
function cpce_MatchingEngineStudio$simTick$lambda$_6_0() {
    jl_Object.call(this);
    this.$_025 = null;
}
let cpce_MatchingEngineStudio$simTick$lambda$_6_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_025 = var$1;
},
cpce_MatchingEngineStudio$simTick$lambda$_6_0__init_0 = var_0 => {
    let var_1 = new cpce_MatchingEngineStudio$simTick$lambda$_6_0();
    cpce_MatchingEngineStudio$simTick$lambda$_6_0__init_(var_1, var_0);
    return var_1;
},
cpce_MatchingEngineStudio$simTick$lambda$_6_0_accept0 = (var$0, var$1) => {
    cpce_MatchingEngineStudio$simTick$lambda$_6_0_accept(var$0, var$1);
},
cpce_MatchingEngineStudio$simTick$lambda$_6_0_accept = (var$0, var$1) => {
    cpce_MatchingEngineStudio_lambda$simTick$12(var$0.$_025, var$1);
},
otciu_UnicodeHelper = $rt_classWithoutFields(),
otciu_UnicodeHelper_decodeCaseMapping = $text => {
    let $flow, $sz, $data, $last, $i, var$7, var$8;
    $flow = otci_CharFlow__init_0($text.$toCharArray());
    $sz = otci_Base46_decodeUnsigned($flow);
    $data = $rt_createIntArray($sz * 2 | 0);
    $last = 0;
    $i = 0;
    while ($i < $sz) {
        var$7 = $data.data;
        $last = $last + otci_Base46_decodeUnsigned($flow) | 0;
        var$8 = $i * 2 | 0;
        var$7[var$8] = $last;
        var$7[var$8 + 1 | 0] = otci_Base46_decode($flow);
        $i = $i + 1 | 0;
    }
    return $data;
},
otciu_UnicodeHelper_createCharMapping = $data => {
    let $result, $last, $lastValue, $i, var$6, var$7, $key, $value, var$10;
    $result = $rt_createIntArray(65536);
    $last = 0;
    $lastValue = 0;
    $i = 0;
    a: {
        while (true) {
            var$6 = $data.data;
            if ($i >= var$6.length)
                break a;
            var$7 = $result.data;
            $key = var$6[$i];
            $value = var$6[$i + 1 | 0];
            var$10 = var$7.length;
            if ($key < var$10)
                var$10 = $key;
            else if ($key == $last)
                break;
            ju_Arrays_fill0($result, $last, var$10, $lastValue);
            $i = $i + 2 | 0;
            $last = var$10;
            $lastValue = $value;
        }
    }
    return otciu_CharMapping__init_0($data, $result);
},
ju_Objects = $rt_classWithoutFields(),
ju_Objects_equals = ($a, $b) => {
    if ($a === $b)
        return 1;
    return $a !== null ? $a.$equals($b) : $b !== null ? 0 : 1;
},
ju_Objects_hashCode = $o => {
    return $o !== null ? $o.$hashCode() : 0;
},
ju_Objects_requireNonNull = $obj => {
    return ju_Objects_requireNonNull0($obj, $rt_s(24));
},
ju_Objects_requireNonNull0 = ($obj, $message) => {
    if ($obj !== null)
        return $obj;
    $rt_throw(jl_NullPointerException__init_1($message));
},
ju_Objects_checkFromIndexSize = ($fromIndex, $size, $length) => {
    if ($fromIndex >= 0 && $size >= 0 && $size <= ($length - $fromIndex | 0))
        return $fromIndex;
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
otjc_JSUndefined = $rt_classWithoutFields(),
ju_Comparator = $rt_classWithoutFields(0),
ju_Comparator_naturalOrder = () => {
    return ju_Comparator$NaturalOrder_instance();
},
ju_Comparator_reverseOrder = () => {
    return ju_Collections_reverseOrder0();
},
ju_Comparator$NaturalOrder = $rt_classWithoutFields(),
ju_Comparator$NaturalOrder_INSTANCE = null,
ju_Comparator$NaturalOrder_$callClinit = () => {
    ju_Comparator$NaturalOrder_$callClinit = $rt_eraseClinit(ju_Comparator$NaturalOrder);
    ju_Comparator$NaturalOrder__clinit_();
},
ju_Comparator$NaturalOrder__init_ = $this => {
    ju_Comparator$NaturalOrder_$callClinit();
    jl_Object__init_($this);
},
ju_Comparator$NaturalOrder__init_0 = () => {
    let var_0 = new ju_Comparator$NaturalOrder();
    ju_Comparator$NaturalOrder__init_(var_0);
    return var_0;
},
ju_Comparator$NaturalOrder_compare = ($this, $o1, $o2) => {
    return $o1.$compareTo1($o2);
},
ju_Comparator$NaturalOrder_instance = () => {
    ju_Comparator$NaturalOrder_$callClinit();
    return ju_Comparator$NaturalOrder_INSTANCE;
},
ju_Comparator$NaturalOrder__clinit_ = () => {
    ju_Comparator$NaturalOrder_INSTANCE = ju_Comparator$NaturalOrder__init_0();
};
function cpcj_JavaArchitectureViewer() {
    let a = this; jl_Object.call(a);
    a.$root1 = null;
    a.$copyTimeouts = null;
    a.$copyButton = null;
    a.$selectorButtons = null;
    a.$headerFilename = null;
    a.$descriptionBanner = null;
    a.$codeEl = null;
    a.$selectedSnippetId = null;
    a.$copied = 0;
}
let cpcj_JavaArchitectureViewer_JAVA_FILES = null,
cpcj_JavaArchitectureViewer_$callClinit = () => {
    cpcj_JavaArchitectureViewer_$callClinit = $rt_eraseClinit(cpcj_JavaArchitectureViewer);
    cpcj_JavaArchitectureViewer__clinit_();
},
cpcj_JavaArchitectureViewer__init_ = $this => {
    let var$1, var$2, var$3;
    cpcj_JavaArchitectureViewer_$callClinit();
    jl_Object__init_($this);
    $this.$copyTimeouts = ju_ArrayList__init_();
    $this.$selectedSnippetId = $rt_s(508);
    $this.$root1 = cpcs_Ui_el($rt_s(21), $rt_s(153));
    var$1 = $this.$root1;
    var$2 = $rt_createArray(jl_Object, 2);
    var$3 = var$2.data;
    var$3[0] = otji_JSWrapper_wrap(cpcj_JavaArchitectureViewer_buildBanner($this));
    var$3[1] = otji_JSWrapper_wrap(cpcj_JavaArchitectureViewer_buildExplorer($this));
    cpcs_Ui_add(var$1, var$2);
},
cpcj_JavaArchitectureViewer__init_0 = () => {
    let var_0 = new cpcj_JavaArchitectureViewer();
    cpcj_JavaArchitectureViewer__init_(var_0);
    return var_0;
},
cpcj_JavaArchitectureViewer_root = $this => {
    return $this.$root1;
},
cpcj_JavaArchitectureViewer_onPrimaryAction = $this => {
    return;
},
cpcj_JavaArchitectureViewer_dispose = $this => {
    let var$1, $id;
    var$1 = $this.$copyTimeouts.$iterator();
    while (var$1.$hasNext()) {
        $id = (var$1.$next()).$intValue();
        clearTimeout($id);
    }
    $this.$copyTimeouts.$clear0();
},
cpcj_JavaArchitectureViewer_buildBanner = $this => {
    let $banner, $left, $iconBox, $titles, var$5, var$6;
    $banner = cpcs_Ui_el($rt_s(21), $rt_s(509));
    $left = cpcs_Ui_el($rt_s(21), $rt_s(510));
    $iconBox = cpcs_Ui_html($rt_s(21), $rt_s(511), cpcs_Icons_svg($rt_s(180), $rt_s(512)));
    $titles = cpcj_JavaArchitectureViewer_plain($rt_s(21));
    var$5 = $rt_createArray(jl_Object, 2);
    var$6 = var$5.data;
    var$6[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(513), $rt_s(514), $rt_s(515)));
    var$6[1] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(104), $rt_s(110), $rt_s(516)));
    cpcs_Ui_add($titles, var$5);
    var$5 = $rt_createArray(jl_Object, 2);
    var$6 = var$5.data;
    var$6[0] = otji_JSWrapper_wrap($iconBox);
    var$6[1] = otji_JSWrapper_wrap($titles);
    cpcs_Ui_add($left, var$5);
    $this.$copyButton = cpcs_Ui_btnHtml($rt_s(517), cpcj_JavaArchitectureViewer_copyButtonInner($this), cpcj_JavaArchitectureViewer$buildBanner$lambda$_4_0__init_0($this));
    var$5 = $rt_createArray(jl_Object, 2);
    var$6 = var$5.data;
    var$6[0] = otji_JSWrapper_wrap($left);
    var$6[1] = otji_JSWrapper_wrap($this.$copyButton);
    cpcs_Ui_add($banner, var$5);
    return $banner;
},
cpcj_JavaArchitectureViewer_buildExplorer = $this => {
    let $grid, var$2, var$3;
    $grid = cpcs_Ui_el($rt_s(21), $rt_s(184));
    var$2 = $rt_createArray(jl_Object, 2);
    var$3 = var$2.data;
    var$3[0] = otji_JSWrapper_wrap(cpcj_JavaArchitectureViewer_buildFileSelector($this));
    var$3[1] = otji_JSWrapper_wrap(cpcj_JavaArchitectureViewer_buildCodeViewer($this));
    cpcs_Ui_add($grid, var$2);
    return $grid;
},
cpcj_JavaArchitectureViewer_buildFileSelector = $this => {
    let $left, var$2, $i, $snippet, $button, $row, var$7, var$8;
    $left = cpcs_Ui_el($rt_s(21), $rt_s(518));
    var$2 = $rt_createArray(jl_Object, 1);
    var$2.data[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(519), $rt_s(520)));
    cpcs_Ui_add($left, var$2);
    cpcj_JavaArchitectureViewer_$callClinit();
    $this.$selectorButtons = $rt_createArray(jl_Object, cpcj_JavaArchitectureViewer_JAVA_FILES.data.length);
    $i = 0;
    while ($i < cpcj_JavaArchitectureViewer_JAVA_FILES.data.length) {
        $snippet = cpcj_JavaArchitectureViewer_JAVA_FILES.data[$i];
        $button = cpcs_Ui_btn(cpcj_JavaArchitectureViewer_selectorClass($this, $snippet.$id0), $rt_s(24), cpcj_JavaArchitectureViewer$buildFileSelector$lambda$_6_0__init_0($this, $snippet));
        $row = cpcs_Ui_el($rt_s(21), $rt_s(226));
        var$2 = $rt_createArray(jl_Object, 2);
        var$7 = var$2.data;
        var$8 = $snippet.$filename;
        var$7[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(521), var$8));
        var$8 = $snippet.$title0;
        var$7[1] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(522), var$8));
        cpcs_Ui_add($row, var$2);
        var$2 = $rt_createArray(jl_Object, 2);
        var$7 = var$2.data;
        var$7[0] = otji_JSWrapper_wrap($row);
        var$7[1] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(104), $rt_s(523), $snippet.$description));
        cpcs_Ui_add($button, var$2);
        $this.$selectorButtons.data[$i] = otji_JSWrapper_wrap($button);
        var$2 = $rt_createArray(jl_Object, 1);
        var$2.data[0] = otji_JSWrapper_wrap($button);
        cpcs_Ui_add($left, var$2);
        $i = $i + 1 | 0;
    }
    return $left;
},
cpcj_JavaArchitectureViewer_buildCodeViewer = $this => {
    let $active, $viewer, $header, $headerLeft, var$5, var$6, $body, $pre;
    $active = cpcj_JavaArchitectureViewer_activeSnippet($this);
    $viewer = cpcs_Ui_el($rt_s(21), $rt_s(524));
    $header = cpcs_Ui_el($rt_s(21), $rt_s(525));
    $headerLeft = cpcs_Ui_html($rt_s(21), $rt_s(526), cpcs_Icons_svg($rt_s(126), $rt_s(527)));
    $this.$headerFilename = cpcj_JavaArchitectureViewer_textEl($rt_s(28), $active.$filename);
    var$5 = $rt_createArray(jl_Object, 1);
    var$5.data[0] = otji_JSWrapper_wrap($this.$headerFilename);
    cpcs_Ui_add($headerLeft, var$5);
    var$5 = $rt_createArray(jl_Object, 2);
    var$6 = var$5.data;
    var$6[0] = otji_JSWrapper_wrap($headerLeft);
    var$6[1] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(528), $rt_s(529)));
    cpcs_Ui_add($header, var$5);
    $this.$descriptionBanner = cpcs_Ui_el0($rt_s(21), $rt_s(530), $active.$description);
    $body = cpcs_Ui_el($rt_s(21), $rt_s(531));
    $pre = cpcj_JavaArchitectureViewer_plain($rt_s(532));
    $this.$codeEl = cpcj_JavaArchitectureViewer_textEl($rt_s(533), $active.$code);
    var$5 = $rt_createArray(jl_Object, 1);
    var$5.data[0] = otji_JSWrapper_wrap($this.$codeEl);
    cpcs_Ui_add($pre, var$5);
    var$5 = $rt_createArray(jl_Object, 1);
    var$5.data[0] = otji_JSWrapper_wrap($pre);
    cpcs_Ui_add($body, var$5);
    var$5 = $rt_createArray(jl_Object, 3);
    var$6 = var$5.data;
    var$6[0] = otji_JSWrapper_wrap($header);
    var$6[1] = otji_JSWrapper_wrap($this.$descriptionBanner);
    var$6[2] = otji_JSWrapper_wrap($body);
    cpcs_Ui_add($viewer, var$5);
    return $viewer;
},
cpcj_JavaArchitectureViewer_selectSnippet = ($this, $id) => {
    let $i, $active;
    $this.$selectedSnippetId = $id;
    $i = 0;
    while (true) {
        cpcj_JavaArchitectureViewer_$callClinit();
        if ($i >= cpcj_JavaArchitectureViewer_JAVA_FILES.data.length)
            break;
        cpcs_Ui_cls(otji_JSWrapper_unwrap($this.$selectorButtons.data[$i]), cpcj_JavaArchitectureViewer_selectorClass($this, cpcj_JavaArchitectureViewer_JAVA_FILES.data[$i].$id0));
        $i = $i + 1 | 0;
    }
    $active = cpcj_JavaArchitectureViewer_activeSnippet($this);
    cpcj_JavaArchitectureViewer_renderCopyButton($this);
    cpcs_Ui_setText($this.$headerFilename, $active.$filename);
    cpcs_Ui_setText($this.$descriptionBanner, $active.$description);
    cpcs_Ui_setText($this.$codeEl, $active.$code);
},
cpcj_JavaArchitectureViewer_handleCopy = $this => {
    let $timeoutId, var$2;
    cpcs_Clipboard_copy$js_body$_1($rt_ustr((cpcj_JavaArchitectureViewer_activeSnippet($this)).$code));
    $this.$copied = 1;
    cpcj_JavaArchitectureViewer_renderCopyButton($this);
    $timeoutId = $rt_createIntArray(1);
    var$2 = $timeoutId.data;
    var$2[0] = setTimeout(otji_JS_function(otji_JSWrapper_unwrap(cpcj_JavaArchitectureViewer$handleCopy$lambda$_9_0__init_0($this, $timeoutId)), "call"), 2000);
    $this.$copyTimeouts.$add1(jl_Integer_valueOf(var$2[0]));
},
cpcj_JavaArchitectureViewer_renderCopyButton = $this => {
    cpcs_Ui_setHtml($this.$copyButton, cpcj_JavaArchitectureViewer_copyButtonInner($this));
},
cpcj_JavaArchitectureViewer_copyButtonInner = $this => {
    let $icon, $label, var$3, var$4;
    $icon = !$this.$copied ? cpcs_Icons_svg($rt_s(534), $rt_s(462)) : cpcs_Icons_svg($rt_s(535), $rt_s(536));
    if ($this.$copied)
        $label = $rt_s(537);
    else {
        var$3 = (cpcj_JavaArchitectureViewer_activeSnippet($this)).$filename;
        var$4 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$4, $rt_s(538)), var$3);
        $label = jl_StringBuilder_toString(var$4);
    }
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $icon), $rt_s(306)), $label), $rt_s(307));
    return jl_StringBuilder_toString(var$3);
},
cpcj_JavaArchitectureViewer_selectorClass = ($this, $id) => {
    let var$2, var$3;
    var$2 = !$id.$equals($this.$selectedSnippetId) ? $rt_s(539) : $rt_s(540);
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(541)), var$2);
    return jl_StringBuilder_toString(var$3);
},
cpcj_JavaArchitectureViewer_activeSnippet = $this => {
    let var$1, var$2, var$3, $snippet;
    cpcj_JavaArchitectureViewer_$callClinit();
    var$1 = cpcj_JavaArchitectureViewer_JAVA_FILES.data;
    var$2 = var$1.length;
    var$3 = 0;
    while (true) {
        if (var$3 >= var$2)
            return cpcj_JavaArchitectureViewer_JAVA_FILES.data[0];
        $snippet = var$1[var$3];
        if ($snippet.$id0.$equals($this.$selectedSnippetId))
            break;
        var$3 = var$3 + 1 | 0;
    }
    return $snippet;
},
cpcj_JavaArchitectureViewer_plain = $tag => {
    cpcj_JavaArchitectureViewer_$callClinit();
    return (cpcs_Ui_doc()).createElement($rt_ustr($tag));
},
cpcj_JavaArchitectureViewer_textEl = ($tag, $text) => {
    let $e, var$4;
    cpcj_JavaArchitectureViewer_$callClinit();
    $e = cpcj_JavaArchitectureViewer_plain($tag);
    var$4 = $rt_ustr($text);
    $e.textContent = var$4;
    return $e;
},
cpcj_JavaArchitectureViewer_lambda$handleCopy$1 = ($this, $timeoutId) => {
    let var$2;
    var$2 = $timeoutId.data;
    $this.$copyTimeouts.$remove0(jl_Integer_valueOf(var$2[0]));
    $this.$copied = 0;
    cpcj_JavaArchitectureViewer_renderCopyButton($this);
},
cpcj_JavaArchitectureViewer_lambda$buildFileSelector$0 = ($this, $snippet) => {
    cpcj_JavaArchitectureViewer_selectSnippet($this, $snippet.$id0);
},
cpcj_JavaArchitectureViewer__clinit_ = () => {
    let var$1, var$2;
    var$1 = $rt_createArray(cpcj_JavaArchitectureViewer$CodeSnippet, 5);
    var$2 = var$1.data;
    var$2[0] = cpcj_JavaArchitectureViewer$CodeSnippet__init_($rt_s(508), $rt_s(542), $rt_s(543), $rt_s(53), $rt_s(544), $rt_s(545));
    var$2[1] = cpcj_JavaArchitectureViewer$CodeSnippet__init_($rt_s(546), $rt_s(547), $rt_s(548), $rt_s(53), $rt_s(549), $rt_s(550));
    var$2[2] = cpcj_JavaArchitectureViewer$CodeSnippet__init_($rt_s(551), $rt_s(552), $rt_s(553), $rt_s(53), $rt_s(554), $rt_s(555));
    var$2[3] = cpcj_JavaArchitectureViewer$CodeSnippet__init_($rt_s(556), $rt_s(557), $rt_s(558), $rt_s(53), $rt_s(559), $rt_s(560));
    var$2[4] = cpcj_JavaArchitectureViewer$CodeSnippet__init_($rt_s(561), $rt_s(562), $rt_s(553), $rt_s(53), $rt_s(563), $rt_s(564));
    cpcj_JavaArchitectureViewer_JAVA_FILES = var$1;
},
ju_Queue = $rt_classWithoutFields(0);
function cpce_MatchingEngine$BookEntry() {
    let a = this; jl_Record.call(a);
    a.$order = null;
    a.$price4 = 0.0;
    a.$side2 = null;
}
let cpce_MatchingEngine$BookEntry__init_ = ($this, $order, $price, $side) => {
    jl_Record__init_($this);
    $this.$order = $order;
    $this.$price4 = $price;
    $this.$side2 = $side;
},
cpce_MatchingEngine$BookEntry__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new cpce_MatchingEngine$BookEntry();
    cpce_MatchingEngine$BookEntry__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jl_ArrayStoreException = $rt_classWithoutFields(jl_RuntimeException),
jl_ArrayStoreException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
jl_ArrayStoreException__init_ = () => {
    let var_0 = new jl_ArrayStoreException();
    jl_ArrayStoreException__init_0(var_0);
    return var_0;
},
otjc_JSFinalizationRegistryConsumer = $rt_classWithoutFields(0);
function cpcw_BotSwarm() {
    let a = this; jl_Object.call(a);
    a.$studio0 = null;
    a.$waypoints = null;
    a.$bots0 = null;
    a.$active = 0;
    a.$count = 0;
    a.$behavior0 = null;
    a.$followId0 = null;
    a.$intervalId = 0;
}
let cpcw_BotSwarm__init_ = ($this, $studio) => {
    jl_Object__init_($this);
    $this.$waypoints = ju_HashMap__init_2();
    $this.$bots0 = ju_ArrayList__init_();
    $this.$active = 1;
    $this.$count = 8;
    $this.$behavior0 = $rt_s(498);
    $this.$followId0 = null;
    $this.$intervalId = 0;
    $this.$studio0 = $studio;
},
cpcw_BotSwarm__init_0 = var_0 => {
    let var_1 = new cpcw_BotSwarm();
    cpcw_BotSwarm__init_(var_1, var_0);
    return var_1;
},
cpcw_BotSwarm_bots = $this => {
    return $this.$bots0;
},
cpcw_BotSwarm_isActive = $this => {
    return $this.$active;
},
cpcw_BotSwarm_behavior = $this => {
    return $this.$behavior0;
},
cpcw_BotSwarm_followId = $this => {
    return $this.$followId0;
},
cpcw_BotSwarm_start = $this => {
    cpcw_BotSwarm_initBots($this);
    cpcw_BotSwarm_restartLoop($this);
},
cpcw_BotSwarm_spawn = ($this, $n) => {
    $this.$count = jl_Math_min(100, $this.$count + $n | 0);
    $this.$active = 1;
    cpcw_BotSwarm_initBots($this);
    cpcw_BotSwarm_restartLoop($this);
},
cpcw_BotSwarm_addBots = ($this, $delta) => {
    $this.$count = jl_Math_max(0, jl_Math_min(100, $this.$count + $delta | 0));
    cpcw_BotSwarm_initBots($this);
    cpcw_BotSwarm_restartLoop($this);
},
cpcw_BotSwarm_toggleActive = $this => {
    $this.$active = $this.$active ? 0 : 1;
    cpcw_BotSwarm_restartLoop($this);
},
cpcw_BotSwarm_setBehavior = ($this, $b) => {
    $this.$behavior0 = $b;
},
cpcw_BotSwarm_toggleFollow = ($this, $botId) => {
    if ($botId.$equals($this.$followId0))
        $botId = null;
    $this.$followId0 = $botId;
    $this.$studio0.$avatarsDirty = 1;
    cpcw_BotSwarm_followCam($this);
},
cpcw_BotSwarm_pause = $this => {
    $this.$active = 0;
    cpcw_BotSwarm_restartLoop($this);
},
cpcw_BotSwarm_dispose = $this => {
    if ($this.$intervalId) {
        clearInterval($this.$intervalId);
        $this.$intervalId = 0;
    }
},
cpcw_BotSwarm_followCam = $this => {
    let $bot, var$2, $b;
    if ($this.$followId0 === null)
        return;
    $bot = null;
    var$2 = $this.$bots0.$iterator();
    a: {
        while (true) {
            if (!var$2.$hasNext()) {
                $b = $bot;
                break a;
            }
            $b = var$2.$next();
            if ((cpcm_Collaborator_getId($b)).$equals($this.$followId0))
                break;
        }
    }
    if ($b === null)
        return;
    $this.$studio0.$panX = $this.$studio0.$canvasContainer.clientWidth / 2.0 - cpcm_Point_x(cpcm_Collaborator_getCursor($b)) * $this.$studio0.$zoom;
    $this.$studio0.$panY = $this.$studio0.$canvasContainer.clientHeight / 2.0 - cpcm_Point_y(cpcm_Collaborator_getCursor($b)) * $this.$studio0.$zoom;
    $this.$studio0.$canvasDirty = 1;
},
cpcw_BotSwarm_initBots = $this => {
    let $next, $i;
    $next = ju_ArrayList__init_();
    $i = 0;
    while ($i < $this.$count) {
        $next.$add1(cpcw_CanvasModel_createBotCollaborator($i, cpcw_CanvasModel$Bounds__init_0(1200.0, 800.0)));
        $i = $i + 1 | 0;
    }
    $this.$bots0 = $next;
    $this.$studio0.$avatarsDirty = 1;
},
cpcw_BotSwarm_restartLoop = $this => {
    if ($this.$intervalId) {
        clearInterval($this.$intervalId);
        $this.$intervalId = 0;
    }
    if ($this.$active && !$this.$bots0.$isEmpty())
        $this.$intervalId = setInterval(otji_JS_function(otji_JSWrapper_unwrap(cpcw_BotSwarm$restartLoop$lambda$_15_0__init_0($this)), "call"), 60);
},
cpcw_BotSwarm_tick = $this => {
    let $pNode, $pSticky, $now, var$4, $bot, $target, $roll, $dx, $dy;
    if ($this.$behavior0.$equals($rt_s(498))) {
        $pNode = 0.22;
        $pSticky = 0.05;
    } else if (!$this.$behavior0.$equals($rt_s(499))) {
        $pNode = 0.0;
        $pSticky = 0.0;
    } else {
        $pNode = 0.05;
        $pSticky = 0.24;
    }
    $now = jl_System_currentTimeMillis();
    var$4 = $this.$bots0.$iterator();
    while (var$4.$hasNext()) {
        $bot = var$4.$next();
        $target = $this.$waypoints.$get(cpcm_Collaborator_getId($bot));
        if (!($target !== null && jl_Math_hypot(cpcm_Point_x($target) - cpcm_Point_x(cpcm_Collaborator_getCursor($bot)), cpcm_Point_y($target) - cpcm_Point_y(cpcm_Collaborator_getCursor($bot))) >= 15.0)) {
            $target = cpcm_Point__init_(100.0 + jl_Math_random() * 1000.0, 80.0 + jl_Math_random() * 650.0);
            $this.$waypoints.$put(cpcm_Collaborator_getId($bot), $target);
            $roll = jl_Math_random();
            if ($roll < $pSticky)
                cpcw_BotSwarm_addSticky($this, $bot, $target, $now);
            else if ($roll < $pSticky + $pNode)
                cpcw_BotSwarm_addNode($this, $bot, $target, $now);
            else
                cpcm_Collaborator_setLastAction($bot, !$this.$behavior0.$equals($rt_s(500)) ? $rt_s(565) : $rt_s(566));
        }
        $dx = cpcm_Point_x($target) - cpcm_Point_x(cpcm_Collaborator_getCursor($bot));
        $dy = cpcm_Point_y($target) - cpcm_Point_y(cpcm_Collaborator_getCursor($bot));
        cpcm_Collaborator_setCursor($bot, cpcm_Point__init_(cpcm_Point_x(cpcm_Collaborator_getCursor($bot)) + $dx * 0.08, cpcm_Point_y(cpcm_Collaborator_getCursor($bot)) + $dy * 0.08));
        cpcm_Collaborator_setLastActive($bot, $now);
    }
    cpcw_BotSwarm_followCam($this);
    $this.$studio0.$canvasDirty = 1;
    cpcw_WhiteboardStudio_syncUi($this.$studio0);
},
cpcw_BotSwarm_addSticky = ($this, $bot, $target, $now) => {
    let $idea, $color, $sticky, var$7, var$8, var$9, var$10, var$11, var$12, var$13, var$14, $next;
    cpcw_CanvasModel_$callClinit();
    $idea = cpcw_CanvasModel_BOT_STICKY_IDEAS.$get0(jl_Math_random() * cpcw_CanvasModel_BOT_STICKY_IDEAS.$size() | 0);
    cpcw_WhiteboardStudio_$callClinit();
    $color = cpcw_WhiteboardStudio_STICKY_COLORS.data[jl_Math_random() * cpcw_WhiteboardStudio_STICKY_COLORS.data.length | 0];
    $sticky = new cpcm_CanvasElement;
    var$7 = cpcw_BotSwarm_randomToken();
    var$8 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append2(jl_StringBuilder_append(var$8, $rt_s(567)), $now), 45), var$7);
    var$9 = jl_StringBuilder_toString(var$8);
    cpcm_ElementType_$callClinit();
    var$8 = cpcm_ElementType_STICKY;
    var$10 = null;
    var$11 = Long_toNumber(jl_Math_round(cpcm_Point_x($target)));
    var$12 = Long_toNumber(jl_Math_round(cpcm_Point_y($target)));
    var$13 = jl_Double_valueOf(170.0);
    var$14 = jl_Double_valueOf(130.0);
    var$7 = null;
    cpcm_CanvasElement__init_($sticky, var$9, var$8, var$10, var$11, var$12, var$13, var$14, $color, var$7, 1.0, $idea, cpcm_Collaborator_getId($bot), cpcm_Collaborator_getName($bot), cpcm_Collaborator_getColor($bot), $now);
    $next = $this.$studio0.$elements.$size() <= 40 ? ju_ArrayList__init_0($this.$studio0.$elements) : ju_ArrayList__init_0($this.$studio0.$elements.$subList($this.$studio0.$elements.$size() - 35 | 0, $this.$studio0.$elements.$size()));
    $next.$add1($sticky);
    $this.$studio0.$elements = $next;
    cpcm_Collaborator_setLastAction($bot, $rt_s(568));
},
cpcw_BotSwarm_addNode = ($this, $bot, $target, $now) => {
    let $node, $el, var$6, var$7, var$8, var$9, var$10, var$11, var$12, var$13, var$14, var$15;
    cpcw_CanvasModel_$callClinit();
    $node = cpcw_CanvasModel_BOT_ARCH_NODES.$get0(jl_Math_random() * cpcw_CanvasModel_BOT_ARCH_NODES.$size() | 0);
    $el = new cpcm_CanvasElement;
    var$6 = cpcw_BotSwarm_randomToken();
    var$7 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append2(jl_StringBuilder_append(var$7, $rt_s(569)), $now), 45), var$6);
    var$8 = jl_StringBuilder_toString(var$7);
    var$9 = cpcw_CanvasModel$ArchNode_type($node);
    var$7 = null;
    var$10 = Long_toNumber(jl_Math_round(cpcm_Point_x($target)));
    var$11 = Long_toNumber(jl_Math_round(cpcm_Point_y($target)));
    var$12 = jl_Double_valueOf(180.0);
    var$13 = jl_Double_valueOf(80.0);
    var$14 = cpcw_CanvasModel$ArchNode_color($node);
    var$6 = cpcw_CanvasModel$ArchNode_color($node);
    var$15 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$15, var$6), $rt_s(570));
    var$6 = jl_StringBuilder_toString(var$15);
    cpcm_CanvasElement__init_($el, var$8, var$9, var$7, var$10, var$11, var$12, var$13, var$14, var$6, 2.0, cpcw_CanvasModel$ArchNode_label($node), cpcm_Collaborator_getId($bot), cpcm_Collaborator_getName($bot), cpcm_Collaborator_getColor($bot), $now);
    $this.$studio0.$elements = cpcw_Elements_appended($this.$studio0.$elements, $el);
    var$7 = cpcw_CanvasModel$ArchNode_label($node);
    var$8 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$8, $rt_s(571)), var$7);
    cpcm_Collaborator_setLastAction($bot, jl_StringBuilder_toString(var$8));
},
cpcw_BotSwarm_randomToken = () => {
    let $digits, $sb, $i;
    $digits = $rt_s(572);
    $sb = jl_StringBuilder__init_0(4);
    $i = 0;
    while ($i < 4) {
        $sb.$append0($digits.$charAt(jl_Math_random() * 36.0 | 0));
        $i = $i + 1 | 0;
    }
    return $sb.$toString();
};
function otji_JSWrapper() {
    jl_Object.call(this);
    this.$js = null;
}
let otji_JSWrapper__init_0 = ($this, $js) => {
    jl_Object__init_($this);
    $this.$js = $js;
},
otji_JSWrapper__init_ = var_0 => {
    let var_1 = new otji_JSWrapper();
    otji_JSWrapper__init_0(var_1, var_0);
    return var_1;
},
otji_JSWrapper_wrap = $o => {
    let $type, $isObject, $wrappers, $existingRef, $existing, $wrapper, $jsString, $stringWrappers, $stringFinalizationRegistry, $wrapperAsJs, $jsNumber, $numberWrappers, $numberFinalizationRegistry;
    if ($o === null)
        return null;
    $type = $rt_str(typeof $o);
    $isObject = !$type.$equals($rt_s(573)) && !$type.$equals($rt_s(574)) ? 0 : 1;
    otji_JSWrapper$Helper_$callClinit();
    $wrappers = otji_JSWrapper$Helper_wrappers;
    if ($wrappers !== null) {
        if ($isObject) {
            $existingRef = $wrappers.get($o);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($o);
            $wrappers.set($o, new WeakRef($wrapper));
            return $wrapper;
        }
        if ($type.$equals($rt_s(575))) {
            $jsString = $o;
            $stringWrappers = otji_JSWrapper$Helper_stringWrappers;
            $stringFinalizationRegistry = otji_JSWrapper$Helper_stringFinalizationRegistry;
            $existingRef = $stringWrappers.get($jsString);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($o);
            $wrapperAsJs = $wrapper;
            $stringWrappers.set($jsString, new WeakRef($wrapperAsJs));
            otji_JSWrapper_register$js_body$_4($stringFinalizationRegistry, $wrapperAsJs, $jsString);
            return $wrapper;
        }
        if ($type.$equals($rt_s(256))) {
            $jsNumber = $o;
            $numberWrappers = otji_JSWrapper$Helper_numberWrappers;
            $numberFinalizationRegistry = otji_JSWrapper$Helper_numberFinalizationRegistry;
            $existingRef = $numberWrappers.get($jsNumber);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($o);
            $wrapperAsJs = $wrapper;
            $numberWrappers.set($jsNumber, new WeakRef($wrapperAsJs));
            otji_JSWrapper_register$js_body$_4($numberFinalizationRegistry, $wrapperAsJs, $jsNumber);
            return $wrapper;
        }
        if ($type.$equals($rt_s(576))) {
            $existingRef = otji_JSWrapper$Helper_undefinedWrapper;
            $existing = $existingRef === null ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($o);
            $wrapperAsJs = $wrapper;
            otji_JSWrapper$Helper_undefinedWrapper = new WeakRef($wrapperAsJs);
            return $wrapper;
        }
    }
    return otji_JSWrapper__init_($o);
},
otji_JSWrapper_unwrap = $o => {
    if ($o === null)
        return null;
    return !($o instanceof otji_JSWrapper) ? $o : $o.$js;
},
otji_JSWrapper_jsToJava = $o => {
    if ($o === null)
        return null;
    return $o instanceof $rt_objcls() ? $o : otji_JSWrapper_wrap($o);
},
otji_JSWrapper_register$js_body$_4 = (var$1, var$2, var$3) => {
    return var$1.register(var$2, var$3);
},
juf_Function = $rt_classWithoutFields(0),
otp_Platform = $rt_classWithoutFields(),
otp_Platform_clone = var$1 => {
    let copy = new var$1.constructor();
    for (let field in var$1) {
        if (var$1.hasOwnProperty(field)) {
            copy[field] = var$1[field];
        }
    }
    return copy;
},
otp_Platform_isInstance = (var$1, var$2) => {
    return var$1 !== null && !(typeof var$1.constructor.$meta === 'undefined' ? 1 : 0) && otp_Platform_isAssignable(var$1.constructor, var$2) ? 1 : 0;
},
otp_Platform_isAssignable = ($from, $to) => {
    let $supertypes, $i;
    if ($from === $to)
        return 1;
    $supertypes = $from.$meta.supertypes;
    $i = 0;
    while ($i < $supertypes.length) {
        if (otp_Platform_isAssignable($supertypes[$i], $to))
            return 1;
        $i = $i + 1 | 0;
    }
    return 0;
},
otp_Platform_isPrimitive = $cls => {
    return $cls.$meta.primitive ? 1 : 0;
},
otp_Platform_getArrayItem = $cls => {
    return $cls.$meta.item;
},
otp_Platform_getName = $cls => {
    return $rt_str($cls.$meta.name);
};
function cpcm_RingSlot() {
    let a = this; jl_Object.call(a);
    a.$index1 = 0;
    a.$sequence = Long_ZERO;
    a.$state = null;
    a.$payload = null;
    a.$timestamp1 = Long_ZERO;
}
let cpcm_RingSlot__init_ = ($this, $index, $sequence, $state, $payload, $timestamp) => {
    jl_Object__init_($this);
    $this.$index1 = $index;
    $this.$sequence = $sequence;
    $this.$state = $state;
    $this.$payload = $payload;
    $this.$timestamp1 = $timestamp;
},
cpcm_RingSlot__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new cpcm_RingSlot();
    cpcm_RingSlot__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
cpcm_RingSlot_getIndex = $this => {
    return $this.$index1;
},
cpcm_RingSlot_getSequence = $this => {
    return $this.$sequence;
},
cpcm_RingSlot_setSequence = ($this, $sequence) => {
    $this.$sequence = $sequence;
},
cpcm_RingSlot_getState = $this => {
    return $this.$state;
},
cpcm_RingSlot_setState = ($this, $state) => {
    $this.$state = $state;
},
cpcm_RingSlot_getPayload = $this => {
    return $this.$payload;
},
cpcm_RingSlot_setPayload = ($this, $payload) => {
    $this.$payload = $payload;
},
cpcm_RingSlot_setTimestamp = ($this, $timestamp) => {
    $this.$timestamp1 = $timestamp;
};
function cpcs_AppShell$desktopIcons$lambda$_15_0() {
    let a = this; jl_Object.call(a);
    a.$_047 = null;
    a.$_19 = null;
}
let cpcs_AppShell$desktopIcons$lambda$_15_0__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_047 = var$1;
    var$0.$_19 = var$2;
},
cpcs_AppShell$desktopIcons$lambda$_15_0__init_0 = (var_0, var_1) => {
    let var_2 = new cpcs_AppShell$desktopIcons$lambda$_15_0();
    cpcs_AppShell$desktopIcons$lambda$_15_0__init_(var_2, var_0, var_1);
    return var_2;
},
cpcs_AppShell$desktopIcons$lambda$_15_0_run = var$0 => {
    cpcs_AppShell_lambda$desktopIcons$3(var$0.$_047, var$0.$_19);
};
function cpcw_CanvasRenderer() {
    let a = this; jl_Object.call(a);
    a.$canvas0 = null;
    a.$ctx = null;
}
let cpcw_CanvasRenderer__init_ = ($this, $canvas) => {
    jl_Object__init_($this);
    $this.$canvas0 = $canvas;
    $this.$ctx = $canvas.getContext("2d");
},
cpcw_CanvasRenderer__init_0 = var_0 => {
    let var_1 = new cpcw_CanvasRenderer();
    cpcw_CanvasRenderer__init_(var_1, var_0);
    return var_1;
},
cpcw_CanvasRenderer_render = ($this, $elements, $current, $selectedId, $bots, $peers, $panX, $panY, $zoom) => {
    let $w, $h, var$11, var$12, var$13, var$14, $x, $y, $el, $bot, $peer;
    $w = $this.$canvas0.width;
    $h = $this.$canvas0.height;
    $this.$ctx.clearRect(0.0, 0.0, $w, $h);
    $this.$ctx.save();
    $this.$ctx.translate($panX, $panY);
    $this.$ctx.scale($zoom, $zoom);
    var$11 = $this.$ctx;
    var$12 = "#FFFFFF";
    var$11.fillStyle = var$12;
    var$11 = $this.$ctx;
    var$13 = $w / $zoom;
    var$14 = $h / $zoom;
    var$11.fillRect(0.0, 0.0, var$13, var$14);
    var$11 = $this.$ctx;
    var$12 = "#C9C9C9";
    var$11.fillStyle = var$12;
    $x = 0.0;
    while ($x < var$13) {
        $y = 0.0;
        while ($y < var$14) {
            $this.$ctx.fillRect($x, $y, 1.0, 1.0);
            $y = $y + 24.0;
        }
        $x = $x + 24.0;
    }
    var$11 = $elements.$iterator();
    while (var$11.$hasNext()) {
        $el = var$11.$next();
        cpcw_CanvasRenderer_drawElement($this, $el, $selectedId);
    }
    if ($current !== null)
        cpcw_CanvasRenderer_drawElement($this, $current, $selectedId);
    var$11 = $bots.$iterator();
    while (var$11.$hasNext()) {
        $bot = var$11.$next();
        cpcw_CanvasRenderer_drawCursor($this, $bot);
    }
    var$11 = $peers.$iterator();
    while (var$11.$hasNext()) {
        $peer = var$11.$next();
        cpcw_CanvasRenderer_drawCursor($this, $peer);
    }
    $this.$ctx.restore();
},
cpcw_CanvasRenderer_drawElement = ($this, $el, $selectedId) => {
    let $type, $w, $h, var$6, var$7, var$8, var$9, var$10, $i, $p1, $p2, $angle;
    $this.$ctx.save();
    $this.$ctx.strokeStyle = $rt_ustr(cpcm_CanvasElement_color($el));
    $this.$ctx.lineWidth = cpcm_CanvasElement_strokeWidth($el);
    $this.$ctx.fillStyle = $rt_ustr(!cpcw_CanvasRenderer_truthy(cpcm_CanvasElement_fillColor($el)) ? $rt_s(577) : cpcm_CanvasElement_fillColor($el));
    $type = cpcm_CanvasElement_type($el);
    cpcm_ElementType_$callClinit();
    if ($type === cpcm_ElementType_RECTANGLE) {
        $w = cpcm_CanvasElement_width($el) === null ? 160.0 : (cpcm_CanvasElement_width($el)).$doubleValue();
        $h = cpcm_CanvasElement_height($el) === null ? 90.0 : (cpcm_CanvasElement_height($el)).$doubleValue();
        $this.$ctx.beginPath();
        $this.$ctx.roundRect(cpcm_CanvasElement_x($el), cpcm_CanvasElement_y($el), $w, $h, 8.0);
        $this.$ctx.stroke();
        if (cpcw_CanvasRenderer_truthy(cpcm_CanvasElement_fillColor($el)))
            $this.$ctx.fill();
        cpcw_CanvasRenderer_drawShapeText($this, $el, $w, $h);
    } else if ($type === cpcm_ElementType_ELLIPSE) {
        $w = cpcm_CanvasElement_width($el) === null ? 160.0 : (cpcm_CanvasElement_width($el)).$doubleValue();
        $h = cpcm_CanvasElement_height($el) === null ? 90.0 : (cpcm_CanvasElement_height($el)).$doubleValue();
        $this.$ctx.beginPath();
        var$6 = $this.$ctx;
        var$7 = cpcm_CanvasElement_x($el);
        var$8 = $w / 2.0;
        var$7 = var$7 + var$8;
        var$9 = cpcm_CanvasElement_y($el);
        var$10 = $h / 2.0;
        var$6.ellipse(var$7, var$9 + var$10, var$8, var$10, 0.0, 0.0, 6.283185307179586);
        $this.$ctx.stroke();
        if (cpcw_CanvasRenderer_truthy(cpcm_CanvasElement_fillColor($el)))
            $this.$ctx.fill();
        cpcw_CanvasRenderer_drawShapeText($this, $el, $w, $h);
    } else if ($type === cpcm_ElementType_STICKY)
        cpcw_CanvasRenderer_drawSticky($this, $el);
    else if ($type === cpcm_ElementType_STROKE && cpcm_CanvasElement_points($el) !== null && (cpcm_CanvasElement_points($el)).$size() > 1) {
        $this.$ctx.lineCap = "round";
        $this.$ctx.lineJoin = "round";
        $this.$ctx.beginPath();
        $this.$ctx.moveTo(cpcm_Point_x((cpcm_CanvasElement_points($el)).$get0(0)), cpcm_Point_y((cpcm_CanvasElement_points($el)).$get0(0)));
        $i = 1;
        while ($i < (cpcm_CanvasElement_points($el)).$size()) {
            $this.$ctx.lineTo(cpcm_Point_x((cpcm_CanvasElement_points($el)).$get0($i)), cpcm_Point_y((cpcm_CanvasElement_points($el)).$get0($i)));
            $i = $i + 1 | 0;
        }
        $this.$ctx.stroke();
    } else if ($type === cpcm_ElementType_ARROW && cpcm_CanvasElement_points($el) !== null && (cpcm_CanvasElement_points($el)).$size() >= 2) {
        $p1 = (cpcm_CanvasElement_points($el)).$get0(0);
        $p2 = (cpcm_CanvasElement_points($el)).$get0(1);
        $this.$ctx.lineCap = "round";
        $this.$ctx.beginPath();
        $this.$ctx.moveTo(cpcm_Point_x($p1), cpcm_Point_y($p1));
        $this.$ctx.lineTo(cpcm_Point_x($p2), cpcm_Point_y($p2));
        $this.$ctx.stroke();
        $angle = jl_Math_atan2(cpcm_Point_y($p2) - cpcm_Point_y($p1), cpcm_Point_x($p2) - cpcm_Point_x($p1));
        $this.$ctx.beginPath();
        $this.$ctx.moveTo(cpcm_Point_x($p2), cpcm_Point_y($p2));
        var$6 = $this.$ctx;
        var$7 = cpcm_Point_x($p2);
        var$9 = $angle - 0.5235987755982988;
        var$7 = var$7 - 12.0 * jl_Math_cos(var$9);
        var$8 = cpcm_Point_y($p2) - 12.0 * jl_Math_sin(var$9);
        var$6.lineTo(var$7, var$8);
        $this.$ctx.moveTo(cpcm_Point_x($p2), cpcm_Point_y($p2));
        var$6 = $this.$ctx;
        var$7 = cpcm_Point_x($p2);
        var$9 = $angle + 0.5235987755982988;
        var$7 = var$7 - 12.0 * jl_Math_cos(var$9);
        var$8 = cpcm_Point_y($p2) - 12.0 * jl_Math_sin(var$9);
        var$6.lineTo(var$7, var$8);
        $this.$ctx.stroke();
    } else if ($type === cpcm_ElementType_TEXT) {
        $this.$ctx.fillStyle = $rt_ustr(cpcm_CanvasElement_color($el));
        $this.$ctx.font = "15px \"Plus Jakarta Sans\", sans-serif";
        $this.$ctx.fillText($rt_ustr(!cpcw_CanvasRenderer_truthy(cpcm_CanvasElement_text($el)) ? $rt_s(578) : cpcm_CanvasElement_text($el)), cpcm_CanvasElement_x($el), cpcm_CanvasElement_y($el) + 16.0);
    }
    if ($selectedId !== null && $selectedId.$equals(cpcm_CanvasElement_id($el))) {
        $this.$ctx.strokeStyle = "#6366F1";
        $this.$ctx.lineWidth = 1.5;
        $this.$ctx.setLineDash(otji_JS_wrap($rt_createDoubleArrayFromData([4.0, 4.0])));
        $w = cpcm_CanvasElement_width($el) === null ? 160.0 : (cpcm_CanvasElement_width($el)).$doubleValue();
        $h = cpcm_CanvasElement_height($el) === null ? 90.0 : (cpcm_CanvasElement_height($el)).$doubleValue();
        $this.$ctx.strokeRect(cpcm_CanvasElement_x($el) - 4.0, cpcm_CanvasElement_y($el) - 4.0, $w + 8.0, $h + 8.0);
        $this.$ctx.setLineDash(otji_JS_wrap($rt_createDoubleArray(0)));
    }
    $this.$ctx.restore();
},
cpcw_CanvasRenderer_drawShapeText = ($this, $el, $w, $h) => {
    let var$4, var$5, $lines, $i, var$8, var$9, var$10, var$11, var$12;
    if (!cpcw_CanvasRenderer_truthy(cpcm_CanvasElement_text($el)))
        return;
    var$4 = $this.$ctx;
    var$5 = $rt_ustr(cpcm_CanvasElement_color($el));
    var$4.fillStyle = var$5;
    var$4 = $this.$ctx;
    var$5 = "13px \"Plus Jakarta Sans\", sans-serif";
    var$4.font = var$5;
    var$4 = $this.$ctx;
    var$5 = "center";
    var$4.textAlign = var$5;
    var$4 = $this.$ctx;
    var$5 = "middle";
    var$4.textBaseline = var$5;
    $lines = cpcw_CanvasRenderer_splitOn(cpcm_CanvasElement_text($el), 10);
    $i = 0;
    while (true) {
        var$8 = $lines.data;
        var$9 = var$8.length;
        if ($i >= var$9)
            break;
        var$10 = $this.$ctx;
        var$5 = var$8[$i];
        var$11 = cpcm_CanvasElement_x($el) + $w / 2.0;
        var$12 = cpcm_CanvasElement_y($el) + $h / 2.0 - ((var$9 - 1 | 0) * 9 | 0) + ($i * 18 | 0);
        var$10.fillText($rt_ustr(var$5), var$11, var$12);
        $i = $i + 1 | 0;
    }
},
cpcw_CanvasRenderer_drawSticky = ($this, $el) => {
    let $w, $h, $words, var$5, $line, $lineY, var$8, var$9, $word, var$11, $testLine, var$13, var$14, var$15, var$16;
    $w = cpcm_CanvasElement_width($el) === null ? 170.0 : (cpcm_CanvasElement_width($el)).$doubleValue();
    $h = cpcm_CanvasElement_height($el) === null ? 130.0 : (cpcm_CanvasElement_height($el)).$doubleValue();
    $this.$ctx.fillStyle = "rgba(0,0,0,0.25)";
    $this.$ctx.beginPath();
    $this.$ctx.roundRect(cpcm_CanvasElement_x($el) + 3.0, cpcm_CanvasElement_y($el) + 4.0, $w, $h, 6.0);
    $this.$ctx.fill();
    $this.$ctx.fillStyle = $rt_ustr(cpcm_CanvasElement_color($el));
    $this.$ctx.beginPath();
    $this.$ctx.roundRect(cpcm_CanvasElement_x($el), cpcm_CanvasElement_y($el), $w, $h, 6.0);
    $this.$ctx.fill();
    $this.$ctx.fillStyle = "#1E293B";
    $this.$ctx.font = "12px \"Plus Jakarta Sans\", sans-serif";
    $this.$ctx.textAlign = "left";
    $this.$ctx.textBaseline = "top";
    $words = cpcw_CanvasRenderer_splitOn(!cpcw_CanvasRenderer_truthy(cpcm_CanvasElement_text($el)) ? $rt_s(579) : cpcm_CanvasElement_text($el), 32);
    var$5 = $words.data;
    $line = $rt_s(24);
    $lineY = cpcm_CanvasElement_y($el) + 12.0;
    var$8 = var$5.length;
    var$9 = 0;
    a: {
        while (var$9 < var$8) {
            $word = var$5[var$9];
            var$11 = jl_StringBuilder__init_();
            jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(var$11, $line), $word), 32);
            $testLine = jl_StringBuilder_toString(var$11);
            if ($this.$ctx.measureText($rt_ustr($testLine)).width > $w - 24.0) {
                $this.$ctx.fillText($rt_ustr($line), cpcm_CanvasElement_x($el) + 12.0, $lineY);
                var$11 = jl_StringBuilder__init_();
                jl_StringBuilder_append0(jl_StringBuilder_append(var$11, $word), 32);
                $line = jl_StringBuilder_toString(var$11);
                $lineY = $lineY + 16.0;
                if ($lineY > cpcm_CanvasElement_y($el) + $h - 20.0)
                    break a;
                $testLine = $line;
            }
            var$9 = var$9 + 1 | 0;
            $line = $testLine;
        }
    }
    var$11 = $this.$ctx;
    var$13 = cpcm_CanvasElement_x($el) + 12.0;
    var$11.fillText($rt_ustr($line), var$13, $lineY);
    var$11 = $this.$ctx;
    var$14 = "rgba(30, 41, 59, 0.6)";
    var$11.fillStyle = var$14;
    var$11 = $this.$ctx;
    var$14 = "10px monospace";
    var$11.font = var$14;
    var$11 = $this.$ctx;
    var$14 = cpcm_CanvasElement_authorName($el);
    var$15 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$15, $rt_s(580)), var$14);
    var$14 = jl_StringBuilder_toString(var$15);
    var$13 = cpcm_CanvasElement_x($el) + 12.0;
    var$16 = cpcm_CanvasElement_y($el) + $h - 18.0;
    var$11.fillText($rt_ustr(var$14), var$13, var$16);
},
cpcw_CanvasRenderer_drawCursor = ($this, $c) => {
    let $cx, $cy, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, var$12;
    $this.$ctx.save();
    $cx = cpcm_Point_x(cpcm_Collaborator_getCursor($c));
    $cy = cpcm_Point_y(cpcm_Collaborator_getCursor($c));
    var$4 = $this.$ctx;
    var$5 = $rt_ustr(cpcm_Collaborator_getColor($c));
    var$4.fillStyle = var$5;
    var$5 = $this.$ctx;
    var$4 = "#0F172A";
    var$5.strokeStyle = var$4;
    var$5 = $this.$ctx;
    var$4 = 1.5;
    var$5.lineWidth = var$4;
    $this.$ctx.beginPath();
    $this.$ctx.moveTo($cx, $cy);
    var$6 = $this.$ctx;
    var$7 = $cy + 18.0;
    var$6.lineTo($cx, var$7);
    var$8 = $this.$ctx;
    var$7 = $cx + 4.5;
    var$9 = $cy + 14.0;
    var$8.lineTo(var$7, var$9);
    var$8 = $this.$ctx;
    var$7 = $cx + 10.0;
    var$9 = $cy + 22.0;
    var$8.lineTo(var$7, var$9);
    var$8 = $this.$ctx;
    var$7 = $cx + 13.0;
    var$9 = $cy + 20.0;
    var$8.lineTo(var$7, var$9);
    var$8 = $this.$ctx;
    var$7 = $cx + 7.5;
    var$10 = $cy + 12.0;
    var$8.lineTo(var$7, var$10);
    var$8 = $this.$ctx;
    var$11 = $cx + 14.0;
    var$8.lineTo(var$11, var$10);
    $this.$ctx.closePath();
    $this.$ctx.fill();
    $this.$ctx.stroke();
    var$6 = $this.$ctx;
    var$5 = $rt_ustr(cpcm_Collaborator_getColor($c));
    var$6.fillStyle = var$5;
    $this.$ctx.beginPath();
    var$5 = $this.$ctx;
    var$12 = ((cpcm_Collaborator_getName($c)).$length() * 7 | 0) + 14 | 0;
    var$5.roundRect(var$11, var$10, var$12, 20.0, 4.0);
    $this.$ctx.fill();
    var$6 = $this.$ctx;
    var$5 = "#FFFFFF";
    var$6.fillStyle = var$5;
    var$6 = $this.$ctx;
    var$5 = "10px \"Plus Jakarta Sans\", sans-serif";
    var$6.font = var$5;
    var$5 = $this.$ctx;
    var$4 = cpcm_Collaborator_getName($c);
    var$7 = $cx + 21.0;
    var$9 = $cy + 26.0;
    var$5.fillText($rt_ustr(var$4), var$7, var$9);
    $this.$ctx.restore();
},
cpcw_CanvasRenderer_truthy = $s => {
    return $s !== null && !$s.$isEmpty() ? 1 : 0;
},
cpcw_CanvasRenderer_splitOn = ($s, $sep) => {
    let $out, $start, $i;
    $out = ju_ArrayList__init_();
    $start = 0;
    $i = 0;
    while ($i < $s.$length()) {
        if ($s.$charAt($i) == $sep) {
            $out.$add1($s.$substring($start, $i));
            $start = $i + 1 | 0;
        }
        $i = $i + 1 | 0;
    }
    $out.$add1($s.$substring0($start));
    return $out.$toArray($rt_createArray(jl_String, 0));
},
ju_NoSuchElementException = $rt_classWithoutFields(jl_RuntimeException),
ju_NoSuchElementException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
ju_NoSuchElementException__init_ = () => {
    let var_0 = new ju_NoSuchElementException();
    ju_NoSuchElementException__init_0(var_0);
    return var_0;
};
function cpcj_JavaArchitectureViewer$buildBanner$lambda$_4_0() {
    jl_Object.call(this);
    this.$_026 = null;
}
let cpcj_JavaArchitectureViewer$buildBanner$lambda$_4_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_026 = var$1;
},
cpcj_JavaArchitectureViewer$buildBanner$lambda$_4_0__init_0 = var_0 => {
    let var_1 = new cpcj_JavaArchitectureViewer$buildBanner$lambda$_4_0();
    cpcj_JavaArchitectureViewer$buildBanner$lambda$_4_0__init_(var_1, var_0);
    return var_1;
},
cpcj_JavaArchitectureViewer$buildBanner$lambda$_4_0_run = var$0 => {
    cpcj_JavaArchitectureViewer_handleCopy(var$0.$_026);
};
function ju_AbstractList$TListIteratorImpl() {
    let a = this; jl_Object.call(a);
    a.$i = 0;
    a.$j = 0;
    a.$lastModCount = 0;
    a.$sz = 0;
    a.$this$02 = null;
}
let ju_AbstractList$TListIteratorImpl__init_ = ($this, var$1, $i, $lastModCount, $sz) => {
    $this.$this$02 = var$1;
    jl_Object__init_($this);
    $this.$i = $i;
    $this.$j = $i;
    $this.$lastModCount = $lastModCount;
    $this.$sz = $sz;
},
ju_AbstractList$TListIteratorImpl__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new ju_AbstractList$TListIteratorImpl();
    ju_AbstractList$TListIteratorImpl__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
ju_AbstractList$TListIteratorImpl_next = $this => {
    let var$1, var$2;
    ju_AbstractList$TListIteratorImpl_checkConcurrentModification($this);
    if ($this.$i == $this.$sz)
        $rt_throw(ju_NoSuchElementException__init_());
    $this.$j = $this.$i;
    var$1 = $this.$this$02;
    var$2 = $this.$i;
    $this.$i = var$2 + 1 | 0;
    return var$1.$get0(var$2);
},
ju_AbstractList$TListIteratorImpl_nextIndex = $this => {
    return $this.$i;
},
ju_AbstractList$TListIteratorImpl_checkConcurrentModification = $this => {
    if ($this.$lastModCount >= $this.$this$02.$modCount)
        return;
    $rt_throw(ju_ConcurrentModificationException__init_());
};
function cpcw_CanvasModel$ArchNode() {
    let a = this; jl_Record.call(a);
    a.$label1 = null;
    a.$type4 = null;
    a.$color1 = null;
}
let cpcw_CanvasModel$ArchNode__init_0 = ($this, $label, $type, $color) => {
    jl_Record__init_($this);
    $this.$label1 = $label;
    $this.$type4 = $type;
    $this.$color1 = $color;
},
cpcw_CanvasModel$ArchNode__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cpcw_CanvasModel$ArchNode();
    cpcw_CanvasModel$ArchNode__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cpcw_CanvasModel$ArchNode_label = $this => {
    return $this.$label1;
},
cpcw_CanvasModel$ArchNode_type = $this => {
    return $this.$type4;
},
cpcw_CanvasModel$ArchNode_color = $this => {
    return $this.$color1;
};
function cpcm_Collaborator() {
    let a = this; jl_Object.call(a);
    a.$id5 = null;
    a.$name3 = null;
    a.$color0 = null;
    a.$cursor = null;
    a.$activeTool0 = null;
    a.$isBot = 0;
    a.$avatarSeed = null;
    a.$lastAction = null;
    a.$lastActive = Long_ZERO;
}
let cpcm_Collaborator__init_ = ($this, $id, $name, $color, $cursor, $activeTool, $isBot, $avatarSeed, $lastAction, $lastActive) => {
    jl_Object__init_($this);
    $this.$id5 = $id;
    $this.$name3 = $name;
    $this.$color0 = $color;
    $this.$cursor = $cursor;
    $this.$activeTool0 = $activeTool;
    $this.$isBot = $isBot;
    $this.$avatarSeed = $avatarSeed;
    $this.$lastAction = $lastAction;
    $this.$lastActive = $lastActive;
},
cpcm_Collaborator__init_0 = (var_0, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8) => {
    let var_9 = new cpcm_Collaborator();
    cpcm_Collaborator__init_(var_9, var_0, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8);
    return var_9;
},
cpcm_Collaborator_getId = $this => {
    return $this.$id5;
},
cpcm_Collaborator_getName = $this => {
    return $this.$name3;
},
cpcm_Collaborator_getColor = $this => {
    return $this.$color0;
},
cpcm_Collaborator_getCursor = $this => {
    return $this.$cursor;
},
cpcm_Collaborator_setCursor = ($this, $cursor) => {
    $this.$cursor = $cursor;
},
cpcm_Collaborator_getLastAction = $this => {
    return $this.$lastAction;
},
cpcm_Collaborator_setLastAction = ($this, $lastAction) => {
    $this.$lastAction = $lastAction;
},
cpcm_Collaborator_setLastActive = ($this, $lastActive) => {
    $this.$lastActive = $lastActive;
};
function cpcw_LiveSession() {
    let a = this; jl_Object.call(a);
    a.$studio = null;
    a.$ws = null;
    a.$on0 = 0;
    a.$room0 = null;
    a.$name0 = null;
    a.$myColor = null;
    a.$peers0 = null;
    a.$status0 = null;
    a.$lastCursorSent = Long_ZERO;
}
let cpcw_LiveSession_PEER_COLORS = null,
cpcw_LiveSession_$callClinit = () => {
    cpcw_LiveSession_$callClinit = $rt_eraseClinit(cpcw_LiveSession);
    cpcw_LiveSession__clinit_();
},
cpcw_LiveSession__init_ = ($this, $studio) => {
    let var$2, var$3;
    cpcw_LiveSession_$callClinit();
    jl_Object__init_($this);
    $this.$ws = null;
    $this.$on0 = 0;
    $this.$room0 = $rt_s(25);
    var$2 = cpcw_LiveSession_asciiUpper(cpcw_LiveSession_randomToken());
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(581)), var$2);
    $this.$name0 = jl_StringBuilder_toString(var$3);
    $this.$myColor = cpcw_LiveSession_peerColorFor($this.$name0);
    $this.$peers0 = ju_ArrayList__init_();
    $this.$status0 = $rt_s(582);
    $this.$lastCursorSent = Long_ZERO;
    $this.$studio = $studio;
},
cpcw_LiveSession__init_0 = var_0 => {
    let var_1 = new cpcw_LiveSession();
    cpcw_LiveSession__init_(var_1, var_0);
    return var_1;
},
cpcw_LiveSession_isOn = $this => {
    return $this.$on0;
},
cpcw_LiveSession_hasSocket = $this => {
    return $this.$ws === null ? 0 : 1;
},
cpcw_LiveSession_status = $this => {
    return $this.$status0;
},
cpcw_LiveSession_room = $this => {
    return $this.$room0;
},
cpcw_LiveSession_displayName = $this => {
    return $this.$name0;
},
cpcw_LiveSession_peers = $this => {
    return $this.$peers0;
},
cpcw_LiveSession_setName = ($this, $v) => {
    if ($v.$length() > 16)
        $v = $v.$substring(0, 16);
    $this.$name0 = $v;
    return $this.$name0;
},
cpcw_LiveSession_setRoom = ($this, $s) => {
    if ($s.$length() > 24)
        $s = $s.$substring(0, 24);
    if ($s.$isEmpty())
        $s = $rt_s(25);
    $this.$room0 = $s;
    return $this.$room0;
},
cpcw_LiveSession_sendCursor = ($this, $x, $y) => {
    let $now, $m;
    if (!$this.$on0)
        return;
    $now = jl_System_currentTimeMillis();
    if (Long_gt(Long_sub($now, $this.$lastCursorSent), Long_fromInt(120))) {
        $this.$lastCursorSent = $now;
        $m = cpcj_Json_obj$js_body$_1();
        $m.type = "cursor";
        $m.user = $rt_ustr($this.$name0);
        $m.x = Long_toNumber(jl_Math_round($x));
        $m.y = Long_toNumber(jl_Math_round($y));
        cpcw_LiveSession_send($this, $m);
    }
},
cpcw_LiveSession_upsert = ($this, $el) => {
    let $m, var$3;
    $m = cpcj_Json_obj$js_body$_1();
    $m.type = "element";
    $m.action = "upsert";
    var$3 = cpcw_WhiteboardJson_toJson($el);
    $m.element = var$3;
    cpcw_LiveSession_send($this, $m);
},
cpcw_LiveSession_delete = ($this, $id) => {
    let $el, $m;
    $el = cpcj_Json_obj$js_body$_1();
    $el.id = $rt_ustr($id);
    $m = cpcj_Json_obj$js_body$_1();
    $m.type = "element";
    $m.action = "delete";
    $m.element = $el;
    cpcw_LiveSession_send($this, $m);
},
cpcw_LiveSession_clear = $this => {
    let $m;
    $m = cpcj_Json_obj$js_body$_1();
    $m.type = "clear";
    cpcw_LiveSession_send($this, $m);
},
cpcw_LiveSession_send = ($this, $m) => {
    if ($this.$ws !== null && cpcj_Ws_isOpen($this.$ws)) {
        $m.room = $rt_ustr($this.$room0);
        cpcj_Ws_send($this.$ws, $rt_str(JSON.stringify($m)));
    }
},
cpcw_LiveSession_connect = $this => {
    let $host, $socket, var$3;
    if ($this.$ws !== null)
        return;
    $this.$status0 = $rt_s(424);
    cpcw_WhiteboardStudio_syncUi($this.$studio);
    $host = $rt_str(location.hostname);
    if (!($host !== null && !$host.$isEmpty()))
        $host = $rt_s(583);
    $socket = new cpcj_Ws;
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(584)), $host), $rt_s(585));
    cpcj_Ws__init_($socket, jl_StringBuilder_toString(var$3));
    $this.$ws = $socket;
    cpcj_Ws_onOpen($socket, cpcw_LiveSession$connect$lambda$_14_0__init_0($this, $socket));
    cpcj_Ws_onMessage($socket, cpcw_LiveSession$connect$lambda$_14_1__init_0($this));
    cpcj_Ws_onError($socket, cpcw_LiveSession$connect$lambda$_14_2__init_0($this));
    cpcj_Ws_onClose($socket, cpcw_LiveSession$connect$lambda$_14_3__init_0($this));
},
cpcw_LiveSession_disconnect = $this => {
    let $socket, $m;
    $socket = $this.$ws;
    if ($socket !== null) {
        $m = cpcj_Json_obj$js_body$_1();
        $m.type = "leave";
        $m.room = $rt_ustr($this.$room0);
        cpcj_Ws_send($socket, $rt_str(JSON.stringify($m)));
        cpcj_Ws_close($socket);
    }
    $this.$ws = null;
    $this.$on0 = 0;
    $this.$peers0 = ju_ArrayList__init_();
    $this.$studio.$peersDirty = 1;
    $this.$status0 = $rt_s(582);
    cpcw_WhiteboardStudio_syncUi($this.$studio);
},
cpcw_LiveSession_dispose = $this => {
    if ($this.$ws !== null)
        cpcj_Ws_close($this.$ws);
},
cpcw_LiveSession_handleMessage = ($this, $data) => {
    let $msg, $msgRoom, $type, $id, $$je;
    a: {
        try {
            $msg = JSON.parse($rt_ustr($data));
            break a;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jl_Exception) {
            } else {
                throw $$e;
            }
        }
        return;
    }
    $msgRoom = $rt_str(cpcj_Json_str$js_body$_6($msg, "room"));
    if (!$msgRoom.$isEmpty() && !$msgRoom.$equals($this.$room0))
        return;
    $type = $rt_str(cpcj_Json_str$js_body$_6($msg, "type"));
    if ($type.$equals($rt_s(586)))
        cpcw_LiveSession_handleSnapshot($this, $msg);
    else if ($type.$equals($rt_s(587)))
        cpcw_LiveSession_handleElement($this, $msg);
    else if ($type.$equals($rt_s(588)))
        cpcw_LiveSession_handlePresence($this, $msg);
    else if ($type.$equals($rt_s(589))) {
        $this.$studio.$elements = ju_ArrayList__init_();
        $this.$studio.$selectedElementId = null;
        $this.$studio.$canvasDirty = 1;
        cpcw_WhiteboardStudio_syncUi($this.$studio);
    } else if ($type.$equals($rt_s(590))) {
        $id = $rt_str(cpcj_Json_str$js_body$_6($msg, "id"));
        if (!$id.$isEmpty()) {
            $this.$studio.$elements = cpcw_Elements_withoutId($this.$studio.$elements, $id);
            $this.$studio.$canvasDirty = 1;
            cpcw_WhiteboardStudio_syncUi($this.$studio);
        }
    } else if ($type.$equals($rt_s(591)))
        cpcw_LiveSession_handleCursor($this, $msg);
},
cpcw_LiveSession_handleSnapshot = ($this, $msg) => {
    let $arr, $n, var$4, $el, $next, $i, $$je;
    $arr = cpcj_Json_getArr$js_body$_11($msg, "elements");
    $n = $arr === null ? 0 : $arr.length;
    if (!$n) {
        var$4 = $this.$studio.$elements.$iterator();
        while (var$4.$hasNext()) {
            $el = var$4.$next();
            cpcw_LiveSession_upsert($this, $el);
        }
    } else {
        $next = ju_ArrayList__init_();
        $i = 0;
        while ($i < $n) {
            a: {
                try {
                    $next.$add1(cpcw_WhiteboardJson_fromJson($arr[$i]));
                    break a;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_Exception) {
                    } else {
                        throw $$e;
                    }
                }
            }
            $i = $i + 1 | 0;
        }
        $this.$studio.$undoStack.$add1($this.$studio.$elements);
        $this.$studio.$elements = $next;
        $this.$studio.$toolbarDirty = 1;
    }
    $this.$status0 = $rt_s(592);
    $this.$on0 = 1;
    cpcw_BotSwarm_pause($this.$studio.$swarm);
    $this.$studio.$canvasDirty = 1;
    cpcw_WhiteboardStudio_syncUi($this.$studio);
},
cpcw_LiveSession_handleElement = ($this, $msg) => {
    let $elObj, $id, $el, $idx, $next, $$je;
    $elObj = cpcj_Json_getObj$js_body$_10($msg, "element");
    if ($elObj === null)
        return;
    $id = $rt_str(cpcj_Json_str$js_body$_6($elObj, "id"));
    if ($id.$isEmpty())
        return;
    if ($rt_str(cpcj_Json_str$js_body$_6($msg, "action")).$equals($rt_s(590)))
        $this.$studio.$elements = cpcw_Elements_withoutId($this.$studio.$elements, $id);
    else {
        a: {
            try {
                $el = cpcw_WhiteboardJson_fromJson($elObj);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_Exception) {
                } else {
                    throw $$e;
                }
            }
            return;
        }
        $idx = cpcw_Elements_indexOfId($this.$studio.$elements, $id);
        $next = ju_ArrayList__init_0($this.$studio.$elements);
        if ($idx < 0)
            $next.$add1($el);
        else
            $next.$set($idx, cpcw_Elements_withUpdatedAt($el, jl_System_currentTimeMillis()));
        $this.$studio.$elements = $next;
    }
    $this.$studio.$canvasDirty = 1;
    cpcw_WhiteboardStudio_syncUi($this.$studio);
},
cpcw_LiveSession_handlePresence = ($this, $msg) => {
    let $peerName, $next, var$4, $p, var$6, var$7, var$8, var$9, var$10;
    $peerName = $rt_str(cpcj_Json_str$js_body$_6($msg, "user"));
    if ($peerName.$isEmpty())
        $peerName = $rt_s(593);
    if ($peerName.$equals($this.$name0))
        return;
    if ($rt_str(cpcj_Json_str$js_body$_6($msg, "event")).$equals($rt_s(594))) {
        $next = ju_ArrayList__init_();
        var$4 = $this.$peers0.$iterator();
        while (var$4.$hasNext()) {
            $p = var$4.$next();
            if (!(cpcm_Collaborator_getName($p)).$equals($peerName))
                $next.$add1($p);
        }
        $this.$peers0 = $next;
        $this.$studio.$peersDirty = 1;
    } else if (cpcw_LiveSession_findPeer($this, $peerName) === null) {
        var$6 = $this.$peers0;
        var$4 = new cpcm_Collaborator;
        var$7 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$7, $rt_s(595)), $peerName);
        var$8 = jl_StringBuilder_toString(var$7);
        var$9 = cpcw_LiveSession_peerColorFor($peerName);
        var$7 = cpcm_Point__init_(600.0, 400.0);
        cpcm_ToolType_$callClinit();
        var$10 = cpcm_ToolType_SELECT;
        cpcm_Collaborator__init_(var$4, var$8, $peerName, var$9, var$7, var$10, 0, $peerName, $rt_s(596), jl_System_currentTimeMillis());
        $this.$peers0 = cpcw_LiveSession_appendedPeer(var$6, var$4);
        $this.$studio.$peersDirty = 1;
    }
    cpcw_WhiteboardStudio_syncUi($this.$studio);
},
cpcw_LiveSession_handleCursor = ($this, $msg) => {
    let $peerName, $pt, $existing, var$5, var$6, var$7, var$8, var$9;
    $peerName = $rt_str(cpcj_Json_str$js_body$_6($msg, "user"));
    if (!$peerName.$isEmpty() && !$peerName.$equals($this.$name0)) {
        $pt = cpcm_Point__init_(cpcj_Json_num$js_body$_7($msg, "x"), cpcj_Json_num$js_body$_7($msg, "y"));
        $existing = cpcw_LiveSession_findPeer($this, $peerName);
        if ($existing !== null) {
            cpcm_Collaborator_setCursor($existing, $pt);
            cpcm_Collaborator_setLastActive($existing, jl_System_currentTimeMillis());
        } else {
            var$5 = $this.$peers0;
            var$6 = new cpcm_Collaborator;
            var$7 = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append(var$7, $rt_s(595)), $peerName);
            var$8 = jl_StringBuilder_toString(var$7);
            var$9 = cpcw_LiveSession_peerColorFor($peerName);
            cpcm_ToolType_$callClinit();
            var$7 = cpcm_ToolType_SELECT;
            cpcm_Collaborator__init_(var$6, var$8, $peerName, var$9, $pt, var$7, 0, $peerName, $rt_s(597), jl_System_currentTimeMillis());
            $this.$peers0 = cpcw_LiveSession_appendedPeer(var$5, var$6);
            $this.$studio.$peersDirty = 1;
        }
        $this.$studio.$canvasDirty = 1;
        cpcw_WhiteboardStudio_syncUi($this.$studio);
        return;
    }
},
cpcw_LiveSession_findPeer = ($this, $peerName) => {
    let var$2, $p;
    var$2 = $this.$peers0.$iterator();
    while (true) {
        if (!var$2.$hasNext())
            return null;
        $p = var$2.$next();
        if ((cpcm_Collaborator_getName($p)).$equals($peerName))
            break;
    }
    return $p;
},
cpcw_LiveSession_appendedPeer = ($list, $p) => {
    let $next;
    cpcw_LiveSession_$callClinit();
    $next = ju_ArrayList__init_0($list);
    $next.$add1($p);
    return $next;
},
cpcw_LiveSession_peerColorFor = $peerName => {
    let $h, $i;
    cpcw_LiveSession_$callClinit();
    $h = 0;
    $i = 0;
    while ($i < $peerName.$length()) {
        $h = ($h * 31 | 0) + $peerName.$charAt($i) | 0;
        $i = $i + 1 | 0;
    }
    return cpcw_LiveSession_PEER_COLORS.data[Long_lo(Long_rem(Long_and(Long_fromInt($h), Long_create(4294967295, 0)), Long_fromInt(cpcw_LiveSession_PEER_COLORS.data.length)))];
},
cpcw_LiveSession_randomToken = () => {
    let $digits, $sb, $i;
    cpcw_LiveSession_$callClinit();
    $digits = $rt_s(572);
    $sb = jl_StringBuilder__init_0(4);
    $i = 0;
    while ($i < 4) {
        $sb.$append0($digits.$charAt(jl_Math_random() * 36.0 | 0));
        $i = $i + 1 | 0;
    }
    return $sb.$toString();
},
cpcw_LiveSession_asciiUpper = $s => {
    let $sb, $i, $c;
    cpcw_LiveSession_$callClinit();
    $sb = jl_StringBuilder__init_0($s.$length());
    $i = 0;
    while ($i < $s.$length()) {
        $c = $s.$charAt($i);
        if ($c >= 97 && $c <= 122)
            $c = ($c - 32 | 0) & 65535;
        $sb.$append0($c);
        $i = $i + 1 | 0;
    }
    return $sb.$toString();
},
cpcw_LiveSession_lambda$connect$2 = $this => {
    $this.$ws = null;
    $this.$on0 = 0;
    $this.$peers0 = ju_ArrayList__init_();
    $this.$studio.$peersDirty = 1;
    if ($this.$status0.$equals($rt_s(592)))
        $this.$status0 = $rt_s(582);
    cpcw_WhiteboardStudio_syncUi($this.$studio);
},
cpcw_LiveSession_lambda$connect$1 = $this => {
    $this.$status0 = $rt_s(434);
    cpcw_WhiteboardStudio_syncUi($this.$studio);
},
cpcw_LiveSession_lambda$connect$0 = ($this, $socket) => {
    let $m, var$3;
    $m = cpcj_Json_obj$js_body$_1();
    $m.type = "join";
    var$3 = $this.$room0;
    $m.room = $rt_ustr(var$3);
    var$3 = $this.$name0;
    $m.user = $rt_ustr(var$3);
    var$3 = $this.$myColor;
    $m.color = $rt_ustr(var$3);
    cpcj_Ws_send($socket, $rt_str(JSON.stringify($m)));
},
cpcw_LiveSession__clinit_ = () => {
    cpcw_LiveSession_PEER_COLORS = $rt_wrapArray(jl_String, [$rt_s(131), $rt_s(144), $rt_s(370), $rt_s(367), $rt_s(493), $rt_s(139), $rt_s(352), $rt_s(598)]);
},
otcir_MethodInfo = $rt_classWithoutFields(),
jlr_AnnotatedElement = $rt_classWithoutFields(0),
jlr_Type = $rt_classWithoutFields(0);
function jl_Class() {
    let a = this; jl_Object.call(a);
    a.$name1 = null;
    a.$platformClass = null;
}
let jl_Class__init_0 = ($this, $platformClass) => {
    let var$2;
    jl_Object__init_($this);
    $this.$platformClass = $platformClass;
    var$2 = $this;
    $platformClass.classObject = var$2;
},
jl_Class__init_ = var_0 => {
    let var_1 = new jl_Class();
    jl_Class__init_0(var_1, var_0);
    return var_1;
},
jl_Class_getClass = $cls => {
    let $result;
    if ($cls === null)
        return null;
    $result = $cls.classObject;
    if ($result === null)
        $result = jl_Class__init_($cls);
    return $result;
},
jl_Class_toString = $this => {
    let var$1, var$2, var$3;
    var$1 = jl_Class_isInterface($this) ? $rt_s(599) : !jl_Class_isPrimitive($this) ? $rt_s(600) : $rt_s(24);
    var$2 = jl_Class_getName($this);
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$3, var$1), var$2);
    return jl_StringBuilder_toString(var$3);
},
jl_Class_getPlatformClass = $this => {
    return $this.$platformClass;
},
jl_Class_isInstance = ($this, $obj) => {
    return otp_Platform_isInstance($obj, $this.$platformClass);
},
jl_Class_getName = $this => {
    if ($this.$name1 === null)
        $this.$name1 = otp_Platform_getName($this.$platformClass);
    return $this.$name1;
},
jl_Class_isPrimitive = $this => {
    return otp_Platform_isPrimitive($this.$platformClass);
},
jl_Class_isInterface = $this => {
    return !($this.$platformClass.$meta.flags & 2) ? 0 : 1;
},
jl_Class_getComponentType = $this => {
    return jl_Class_getClass(otp_Platform_getArrayItem($this.$platformClass));
},
jl_Class_getSuperclass = $this => {
    return jl_Class_getClass($this.$platformClass.$meta.superclass);
},
cpce_MatchingEngine$insertIntoBook$lambda$_6_0 = $rt_classWithoutFields(),
cpce_MatchingEngine$insertIntoBook$lambda$_6_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cpce_MatchingEngine$insertIntoBook$lambda$_6_0__init_0 = () => {
    let var_0 = new cpce_MatchingEngine$insertIntoBook$lambda$_6_0();
    cpce_MatchingEngine$insertIntoBook$lambda$_6_0__init_(var_0);
    return var_0;
},
cpce_MatchingEngine$insertIntoBook$lambda$_6_0_apply0 = (var$0, var$1) => {
    return cpce_MatchingEngine$insertIntoBook$lambda$_6_0_apply(var$0, var$1);
},
cpce_MatchingEngine$insertIntoBook$lambda$_6_0_apply = (var$0, var$1) => {
    return cpce_MatchingEngine_lambda$insertIntoBook$0(var$1);
};
function cpce_RingBuffer() {
    let a = this; jl_Object.call(a);
    a.$capacity = 0;
    a.$mask = 0;
    a.$slots = null;
    a.$producerCursor0 = Long_ZERO;
    a.$journalerCursor = Long_ZERO;
    a.$matchingCursor = Long_ZERO;
    a.$publisherCursor = Long_ZERO;
}
let cpce_RingBuffer__init_ = ($this, $capacity) => {
    let $minimum, $powerOfTwo, $i, var$5, var$6;
    jl_Object__init_($this);
    $this.$producerCursor0 = Long_fromInt(-1);
    $this.$journalerCursor = Long_fromInt(-1);
    $this.$matchingCursor = Long_fromInt(-1);
    $this.$publisherCursor = Long_fromInt(-1);
    $minimum = jl_Math_max(16, $capacity);
    $powerOfTwo = jl_Integer_highestOneBit($minimum);
    if ($powerOfTwo != $minimum)
        $powerOfTwo = $powerOfTwo << 1;
    $this.$capacity = $powerOfTwo;
    $this.$mask = $this.$capacity - 1 | 0;
    $this.$slots = ju_ArrayList__init_4($this.$capacity);
    $i = 0;
    while ($i < $this.$capacity) {
        var$5 = $this.$slots;
        var$6 = new cpcm_RingSlot;
        cpcm_SlotState_$callClinit();
        cpcm_RingSlot__init_(var$6, $i, Long_fromInt(-1), cpcm_SlotState_FREE, null, Long_ZERO);
        var$5.$add1(var$6);
        $i = $i + 1 | 0;
    }
},
cpce_RingBuffer__init_0 = var_0 => {
    let var_1 = new cpce_RingBuffer();
    cpce_RingBuffer__init_(var_1, var_0);
    return var_1;
},
cpce_RingBuffer_getCapacity = $this => {
    return $this.$capacity;
},
cpce_RingBuffer_publish = ($this, $order) => {
    let var$2, $slot;
    var$2 = Long_add($this.$producerCursor0, Long_fromInt(1));
    $this.$producerCursor0 = var$2;
    $slot = $this.$slots.$get0(Long_lo(Long_and(var$2, Long_fromInt($this.$mask))));
    cpcm_RingSlot_setSequence($slot, var$2);
    cpcm_SlotState_$callClinit();
    cpcm_RingSlot_setState($slot, cpcm_SlotState_PUBLISHED);
    cpcm_RingSlot_setPayload($slot, $order);
    cpcm_RingSlot_setTimestamp($slot, jl_System_currentTimeMillis());
    return var$2;
},
cpce_RingBuffer_stepJournaler = ($this, $batchSize) => {
    let $processed, $slot, var$4;
    $processed = 0;
    while (Long_lt($this.$journalerCursor, $this.$producerCursor0) && $processed < $batchSize) {
        $this.$journalerCursor = Long_add($this.$journalerCursor, Long_fromInt(1));
        $slot = $this.$slots.$get0(Long_lo(Long_and($this.$journalerCursor, Long_fromInt($this.$mask))));
        var$4 = cpcm_RingSlot_getState($slot);
        cpcm_SlotState_$callClinit();
        if (var$4 === cpcm_SlotState_PUBLISHED)
            cpcm_RingSlot_setState($slot, cpcm_SlotState_JOURNALED);
        $processed = $processed + 1 | 0;
    }
    return $processed;
},
cpce_RingBuffer_stepMatching = ($this, $batchSize, $onMatch) => {
    let $processed, $slot, var$5;
    $processed = 0;
    while (Long_lt($this.$matchingCursor, $this.$journalerCursor) && $processed < $batchSize) {
        $this.$matchingCursor = Long_add($this.$matchingCursor, Long_fromInt(1));
        $slot = $this.$slots.$get0(Long_lo(Long_and($this.$matchingCursor, Long_fromInt($this.$mask))));
        var$5 = cpcm_RingSlot_getState($slot);
        cpcm_SlotState_$callClinit();
        if (var$5 === cpcm_SlotState_JOURNALED && cpcm_RingSlot_getPayload($slot) !== null) {
            cpcm_RingSlot_setState($slot, cpcm_SlotState_MATCHED);
            if ($onMatch !== null)
                $onMatch.$accept0(cpcm_RingSlot_getPayload($slot));
        }
        $processed = $processed + 1 | 0;
    }
    return $processed;
},
cpce_RingBuffer_stepPublisher = ($this, $batchSize) => {
    let $processed, $slot, var$4;
    $processed = 0;
    while (Long_lt($this.$publisherCursor, $this.$matchingCursor) && $processed < $batchSize) {
        $this.$publisherCursor = Long_add($this.$publisherCursor, Long_fromInt(1));
        $slot = $this.$slots.$get0(Long_lo(Long_and($this.$publisherCursor, Long_fromInt($this.$mask))));
        var$4 = cpcm_RingSlot_getState($slot);
        cpcm_SlotState_$callClinit();
        if (var$4 === cpcm_SlotState_MATCHED)
            cpcm_RingSlot_setState($slot, cpcm_SlotState_DISPATCHED);
        $processed = $processed + 1 | 0;
    }
    return $processed;
},
cpce_RingBuffer_getSlots = $this => {
    return $this.$slots;
},
cpce_RingBuffer_getCursors = $this => {
    return cpce_RingBuffer$Cursors__init_0($this.$producerCursor0, $this.$journalerCursor, $this.$matchingCursor, $this.$publisherCursor);
},
cpce_RingBuffer_getBufferUtilization = $this => {
    let $slowestConsumer, $inFlight;
    if (Long_lt($this.$producerCursor0, Long_ZERO))
        return 0;
    $slowestConsumer = jl_Math_min0($this.$journalerCursor, jl_Math_min0($this.$matchingCursor, $this.$publisherCursor));
    $inFlight = jl_Math_max1(Long_ZERO, Long_sub($this.$producerCursor0, $slowestConsumer));
    return Long_lo((jl_Math_min0(Long_fromInt(100), jl_Math_round(Long_toNumber($inFlight) * 100.0 / $this.$capacity))));
};
function cpcm_McqConsensusView$QuizOption() {
    let a = this; jl_Record.call(a);
    a.$key1 = null;
    a.$label2 = null;
    a.$isCorrect0 = 0;
}
let cpcm_McqConsensusView$QuizOption__init_0 = ($this, $key, $label, $isCorrect) => {
    jl_Record__init_($this);
    $this.$key1 = $key;
    $this.$label2 = $label;
    $this.$isCorrect0 = $isCorrect;
},
cpcm_McqConsensusView$QuizOption__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cpcm_McqConsensusView$QuizOption();
    cpcm_McqConsensusView$QuizOption__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cpcm_McqConsensusView$QuizOption_key = $this => {
    return $this.$key1;
},
cpcm_McqConsensusView$QuizOption_label = $this => {
    return $this.$label2;
},
cpcm_McqConsensusView$QuizOption_isCorrect = $this => {
    return $this.$isCorrect0;
},
ju_Arrays = $rt_classWithoutFields(),
ju_Arrays_copyOf = ($array, $length) => {
    let var$3, $result, $sz, $i;
    var$3 = $array.data;
    $result = $rt_createCharArray($length);
    $sz = jl_Math_min($length, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_copyOf0 = ($original, $newLength) => {
    let var$3, $result, $sz, $i;
    var$3 = $original.data;
    $result = jlr_Array_newInstance(jl_Class_getComponentType(jl_Object_getClass($original)), $newLength);
    $sz = jl_Math_min($newLength, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_fill0 = ($a, $fromIndex, $toIndex, $val) => {
    let var$5, var$6;
    if ($fromIndex > $toIndex)
        $rt_throw(jl_IllegalArgumentException__init_());
    while ($fromIndex < $toIndex) {
        var$5 = $a.data;
        var$6 = $fromIndex + 1 | 0;
        var$5[$fromIndex] = $val;
        $fromIndex = var$6;
    }
},
ju_Arrays_fill = ($a, $fromIndex, $toIndex, $val) => {
    let var$5, var$6;
    if ($fromIndex > $toIndex)
        $rt_throw(jl_IllegalArgumentException__init_());
    while ($fromIndex < $toIndex) {
        var$5 = $a.data;
        var$6 = $fromIndex + 1 | 0;
        var$5[$fromIndex] = $val;
        $fromIndex = var$6;
    }
},
ju_Arrays_fill1 = ($a, $val) => {
    ju_Arrays_fill($a, 0, $a.data.length, $val);
},
ju_Arrays_sort = $a => {
    let var$2, $second, $chunkSize, var$5, $i, var$7, var$8, $i_0, var$10, var$11;
    var$2 = $a.data.length;
    if (!var$2)
        return;
    $second = $rt_createDoubleArray(var$2);
    $chunkSize = 1;
    var$5 = $a;
    while ($chunkSize < var$2) {
        $i = 0;
        while (true) {
            var$7 = var$5.data.length;
            if ($i >= var$7)
                break;
            var$8 = jl_Math_min(var$7, $i + $chunkSize | 0);
            $i_0 = $i + (2 * $chunkSize | 0) | 0;
            var$10 = jl_Math_min(var$7, $i_0);
            ju_Arrays_merge0(var$5, $second, $i, var$8, var$10);
            $i = $i_0;
        }
        $chunkSize = $chunkSize * 2 | 0;
        var$11 = var$5;
        var$5 = $second;
        $second = var$11;
    }
    a: {
        if (var$5 !== $a) {
            $i_0 = 0;
            while (true) {
                var$11 = var$5.data;
                if ($i_0 >= var$11.length)
                    break a;
                $second.data[$i_0] = var$11[$i_0];
                $i_0 = $i_0 + 1 | 0;
            }
        }
    }
},
ju_Arrays_merge0 = ($a, $b, $from, $split, $to) => {
    let var$6, $from2, var$8, $p, $q, var$11, var$12, var$13;
    var$6 = $from;
    $from2 = $split;
    a: {
        b: {
            while ($from != $split) {
                if ($from2 == $to)
                    break b;
                var$8 = $a.data;
                $p = var$8[$from];
                $q = var$8[$from2];
                if (jl_Double_compare($p, $q) > 0) {
                    var$8 = $b.data;
                    var$11 = var$6 + 1 | 0;
                    var$8[var$6] = $q;
                    $from2 = $from2 + 1 | 0;
                } else {
                    var$8 = $b.data;
                    var$11 = var$6 + 1 | 0;
                    var$8[var$6] = $p;
                    $from = $from + 1 | 0;
                }
                var$6 = var$11;
            }
            while (true) {
                if ($from2 >= $to)
                    break a;
                var$12 = $b.data;
                var$8 = $a.data;
                var$13 = var$6 + 1 | 0;
                var$11 = $from2 + 1 | 0;
                var$12[var$6] = var$8[$from2];
                var$6 = var$13;
                $from2 = var$11;
            }
        }
        while (true) {
            if ($from >= $split)
                break a;
            var$12 = $b.data;
            var$8 = $a.data;
            var$13 = var$6 + 1 | 0;
            var$11 = $from + 1 | 0;
            var$12[var$6] = var$8[$from];
            var$6 = var$13;
            $from = var$11;
        }
    }
},
ju_Arrays_sort0 = ($a, $fromIndex, $toIndex, $c) => {
    let $subarray, $i, var$7, var$8;
    if ($fromIndex > $toIndex)
        $rt_throw(jl_IllegalArgumentException__init_());
    if ($c === null)
        $c = ju_Comparator$NaturalOrder_instance();
    $subarray = $rt_createArray(jl_Object, $toIndex - $fromIndex | 0);
    $i = $fromIndex;
    while ($i < $toIndex) {
        var$7 = $subarray.data;
        var$8 = $a.data;
        var$7[$i - $fromIndex | 0] = var$8[$i];
        $i = $i + 1 | 0;
    }
    ju_Arrays_sort1($subarray, $c);
    $i = $fromIndex;
    while ($i < $toIndex) {
        $a.data[$i] = $subarray.data[$i - $fromIndex | 0];
        $i = $i + 1 | 0;
    }
},
ju_Arrays_sort1 = ($a, $c) => {
    let var$3, $second, $chunkSize, var$6, $i, var$8, var$9, $i_0, var$11, var$12;
    var$3 = $a.data.length;
    if (!var$3)
        return;
    if ($c === null)
        $c = ju_Comparator$NaturalOrder_instance();
    $second = $rt_createArray(jl_Object, var$3);
    $chunkSize = 1;
    var$6 = $a;
    while ($chunkSize < var$3) {
        $i = 0;
        while (true) {
            var$8 = var$6.data.length;
            if ($i >= var$8)
                break;
            var$9 = jl_Math_min(var$8, $i + $chunkSize | 0);
            $i_0 = $i + (2 * $chunkSize | 0) | 0;
            var$11 = jl_Math_min(var$8, $i_0);
            ju_Arrays_merge(var$6, $second, $i, var$9, var$11, $c);
            $i = $i_0;
        }
        $chunkSize = $chunkSize * 2 | 0;
        var$12 = var$6;
        var$6 = $second;
        $second = var$12;
    }
    a: {
        if (var$6 !== $a) {
            $i = 0;
            while (true) {
                var$12 = var$6.data;
                if ($i >= var$12.length)
                    break a;
                $second.data[$i] = var$12[$i];
                $i = $i + 1 | 0;
            }
        }
    }
},
ju_Arrays_merge = ($a, $b, $from, $split, $to, $comp) => {
    let var$7, $from2, var$9, $p, $q, var$12, var$13, var$14;
    var$7 = $from;
    $from2 = $split;
    a: {
        b: {
            while ($from != $split) {
                if ($from2 == $to)
                    break b;
                var$9 = $a.data;
                $p = var$9[$from];
                $q = var$9[$from2];
                if ($comp.$compare1($p, $q) > 0) {
                    var$9 = $b.data;
                    var$12 = var$7 + 1 | 0;
                    var$9[var$7] = $q;
                    $from2 = $from2 + 1 | 0;
                } else {
                    var$9 = $b.data;
                    var$12 = var$7 + 1 | 0;
                    var$9[var$7] = $p;
                    $from = $from + 1 | 0;
                }
                var$7 = var$12;
            }
            while (true) {
                if ($from2 >= $to)
                    break a;
                var$13 = $b.data;
                var$9 = $a.data;
                var$12 = var$7 + 1 | 0;
                var$14 = $from2 + 1 | 0;
                var$13[var$7] = var$9[$from2];
                var$7 = var$12;
                $from2 = var$14;
            }
        }
        while (true) {
            if ($from >= $split)
                break a;
            var$13 = $b.data;
            var$9 = $a.data;
            var$14 = var$7 + 1 | 0;
            var$12 = $from + 1 | 0;
            var$13[var$7] = var$9[$from];
            var$7 = var$14;
            $from = var$12;
        }
    }
},
jl_System = $rt_classWithoutFields(),
jl_System_arraycopy = ($src, $srcPos, $dest, $destPos, $length) => {
    let var$6, $srcType, $targetType, $srcArray, $i, var$11, var$12, $elem;
    if ($src !== null && $dest !== null) {
        if ($srcPos >= 0 && $destPos >= 0 && $length >= 0 && ($srcPos + $length | 0) <= jlr_Array_getLength($src)) {
            var$6 = $destPos + $length | 0;
            if (var$6 <= jlr_Array_getLength($dest)) {
                a: {
                    b: {
                        if ($src !== $dest) {
                            $srcType = jl_Class_getComponentType(jl_Object_getClass($src));
                            $targetType = jl_Class_getComponentType(jl_Object_getClass($dest));
                            if ($srcType !== null && $targetType !== null) {
                                if ($srcType === $targetType)
                                    break b;
                                if (!jl_Class_isPrimitive($srcType) && !jl_Class_isPrimitive($targetType)) {
                                    $srcArray = $src;
                                    $i = 0;
                                    var$6 = $srcPos;
                                    while ($i < $length) {
                                        var$11 = $srcArray.data;
                                        var$12 = var$6 + 1 | 0;
                                        $elem = var$11[var$6];
                                        if (!jl_Class_isInstance($targetType, $elem)) {
                                            jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $i);
                                            $rt_throw(jl_ArrayStoreException__init_());
                                        }
                                        $i = $i + 1 | 0;
                                        var$6 = var$12;
                                    }
                                    jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
                                    return;
                                }
                                if (!jl_Class_isPrimitive($srcType))
                                    break a;
                                if (jl_Class_isPrimitive($targetType))
                                    break b;
                                else
                                    break a;
                            }
                            $rt_throw(jl_ArrayStoreException__init_());
                        }
                    }
                    jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
                    return;
                }
                $rt_throw(jl_ArrayStoreException__init_());
            }
        }
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    }
    $rt_throw(jl_NullPointerException__init_1($rt_s(601)));
},
jl_System_fastArraycopy = ($src, $srcPos, $dest, $destPos, $length) => {
    let var$6;
    if ($srcPos >= 0 && $destPos >= 0 && $length >= 0 && ($srcPos + $length | 0) <= jlr_Array_getLength($src)) {
        var$6 = $destPos + $length | 0;
        if (var$6 <= jlr_Array_getLength($dest)) {
            jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
            return;
        }
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
jl_System_doArrayCopy = (var$1, var$2, var$3, var$4, var$5) => {
    if (var$5 !== 0) {
        if (typeof var$1.data.buffer !== 'undefined') {
            var$3.data.set(var$1.data.subarray(var$2, var$2 + var$5), var$4);
        } else if (var$1 !== var$3 || var$4 < var$2) {
            for (let i = 0;i < var$5;i = i + 1 | 0) {
                var$3.data[var$4++] = var$1.data[var$2++];
            }
        } else {
            var$2 = var$2 + var$5 | 0;
            var$4 = var$4 + var$5 | 0;
            for (let i = 0;i < var$5;i = i + 1 | 0) {
                var$3.data[ --var$4] = var$1.data[ --var$2];
            }
        }
    }
},
jl_System_currentTimeMillis = () => {
    return Long_fromNumber((new Date()).getTime());
},
cpcj_Json = $rt_classWithoutFields(),
cpcj_Json_obj$js_body$_1 = () => {
    return {  };
},
cpcj_Json_arr$js_body$_2 = () => {
    return [];
},
cpcj_Json_str$js_body$_6 = (var$1, var$2) => {
    return typeof var$1[var$2] === 'string' ? var$1[var$2] : '';
},
cpcj_Json_num$js_body$_7 = (var$1, var$2) => {
    return typeof var$1[var$2] === 'number' ? var$1[var$2] : 0;
},
cpcj_Json_has$js_body$_9 = (var$1, var$2) => {
    return var$1[var$2] !== undefined && var$1[var$2] !== null;
},
cpcj_Json_getObj$js_body$_10 = (var$1, var$2) => {
    return var$1[var$2] !== null && typeof var$1[var$2] === 'object' && !Array.isArray(var$1[var$2]) ? var$1[var$2] : null;
},
cpcj_Json_getArr$js_body$_11 = (var$1, var$2) => {
    return Array.isArray(var$1[var$2]) ? var$1[var$2] : null;
},
cpcj_Json_arrStr$js_body$_15 = (var$1, var$2) => {
    return typeof var$1[var$2] === 'string' ? var$1[var$2] : '';
};
function cpcm_OrderInput() {
    let a = this; jl_Record.call(a);
    a.$id1 = null;
    a.$traderId1 = null;
    a.$traderName0 = null;
    a.$side1 = null;
    a.$type3 = null;
    a.$price3 = 0.0;
    a.$size5 = 0.0;
    a.$timestamp4 = null;
    a.$optionKey1 = null;
}
let cpcm_OrderInput__init_0 = ($this, var$1, var$2, var$3, var$4, var$5, $price, $size) => {
    cpcm_OrderInput__init_($this, var$1, var$2, var$3, var$4, var$5, $price, $size, null, null);
},
cpcm_OrderInput__init_1 = (var_0, var_1, var_2, var_3, var_4, var_5, var_6) => {
    let var_7 = new cpcm_OrderInput();
    cpcm_OrderInput__init_0(var_7, var_0, var_1, var_2, var_3, var_4, var_5, var_6);
    return var_7;
},
cpcm_OrderInput__init_ = ($this, $id, $traderId, $traderName, $side, $type, $price, $size, $timestamp, $optionKey) => {
    jl_Record__init_($this);
    $this.$id1 = $id;
    $this.$traderId1 = $traderId;
    $this.$traderName0 = $traderName;
    $this.$side1 = $side;
    $this.$type3 = $type;
    $this.$price3 = $price;
    $this.$size5 = $size;
    $this.$timestamp4 = $timestamp;
    $this.$optionKey1 = $optionKey;
},
cpcm_OrderInput__init_2 = (var_0, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8) => {
    let var_9 = new cpcm_OrderInput();
    cpcm_OrderInput__init_(var_9, var_0, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8);
    return var_9;
},
cpcm_OrderInput_id = $this => {
    return $this.$id1;
},
cpcm_OrderInput_traderId = $this => {
    return $this.$traderId1;
},
cpcm_OrderInput_traderName = $this => {
    return $this.$traderName0;
},
cpcm_OrderInput_side = $this => {
    return $this.$side1;
},
cpcm_OrderInput_type = $this => {
    return $this.$type3;
},
cpcm_OrderInput_price = $this => {
    return $this.$price3;
},
cpcm_OrderInput_size = $this => {
    return $this.$size5;
},
cpcm_OrderInput_timestamp = $this => {
    return $this.$timestamp4;
},
cpcm_OrderInput_optionKey = $this => {
    return $this.$optionKey1;
},
ju_Collections$5 = $rt_classWithoutFields(),
ju_Collections$5__init_ = $this => {
    jl_Object__init_($this);
},
ju_Collections$5__init_0 = () => {
    let var_0 = new ju_Collections$5();
    ju_Collections$5__init_(var_0);
    return var_0;
},
cpcs_AppShell$buildDialog$lambda$_19_5 = $rt_classWithoutFields(),
cpcs_AppShell$buildDialog$lambda$_19_5__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cpcs_AppShell$buildDialog$lambda$_19_5__init_0 = () => {
    let var_0 = new cpcs_AppShell$buildDialog$lambda$_19_5();
    cpcs_AppShell$buildDialog$lambda$_19_5__init_(var_0);
    return var_0;
},
cpcs_AppShell$buildDialog$lambda$_19_5_run = var$0 => {
    cpcs_AppShell_lambda$buildDialog$8();
};
function jm_BigDecimal() {
    let a = this; jl_Number.call(a);
    a.$intVal = null;
    a.$bitLength3 = 0;
    a.$smallValue = Long_ZERO;
    a.$scale = 0;
    a.$precision = 0;
}
let jm_BigDecimal_ZERO = null,
jm_BigDecimal_ONE = null,
jm_BigDecimal_TEN = null,
jm_BigDecimal_FIVE_POW = null,
jm_BigDecimal_TEN_POW = null,
jm_BigDecimal_LONG_TEN_POW = null,
jm_BigDecimal_LONG_FIVE_POW = null,
jm_BigDecimal_LONG_FIVE_POW_BIT_LENGTH = null,
jm_BigDecimal_LONG_TEN_POW_BIT_LENGTH = null,
jm_BigDecimal_BI_SCALED_BY_ZERO = null,
jm_BigDecimal_ZERO_SCALED_BY = null,
jm_BigDecimal_CH_ZEROS = null,
jm_BigDecimal_$callClinit = () => {
    jm_BigDecimal_$callClinit = $rt_eraseClinit(jm_BigDecimal);
    jm_BigDecimal__clinit_();
},
jm_BigDecimal__init_6 = ($this, $smallValue, $scale) => {
    jm_BigDecimal_$callClinit();
    jl_Number__init_($this);
    $this.$smallValue = $smallValue;
    $this.$scale = $scale;
    $this.$bitLength3 = jm_BigDecimal_bitLength($smallValue);
},
jm_BigDecimal__init_4 = (var_0, var_1) => {
    let var_2 = new jm_BigDecimal();
    jm_BigDecimal__init_6(var_2, var_0, var_1);
    return var_2;
},
jm_BigDecimal__init_5 = ($this, $smallValue, $scale) => {
    jm_BigDecimal_$callClinit();
    jl_Number__init_($this);
    $this.$smallValue = Long_fromInt($smallValue);
    $this.$scale = $scale;
    $this.$bitLength3 = jm_BigDecimal_bitLength0($smallValue);
},
jm_BigDecimal__init_ = (var_0, var_1) => {
    let var_2 = new jm_BigDecimal();
    jm_BigDecimal__init_5(var_2, var_0, var_1);
    return var_2;
},
jm_BigDecimal__init_3 = ($this, $val) => {
    let $bits, $mantisa, $trailingZeros, $mantisaBits;
    jm_BigDecimal_$callClinit();
    jl_Number__init_($this);
    if (!(!isFinite($val) ? 1 : 0) && !(isNaN($val) ? 1 : 0)) {
        $bits = jl_Double_doubleToLongBits($val);
        $this.$scale = 1075 - Long_lo(Long_and(Long_shr($bits, 52), Long_fromInt(2047))) | 0;
        $mantisa = $this.$scale != 1075 ? Long_or(Long_and($bits, Long_create(4294967295, 1048575)), Long_create(0, 1048576)) : Long_shl(Long_and($bits, Long_create(4294967295, 1048575)), 1);
        if (Long_eq($mantisa, Long_ZERO)) {
            $this.$scale = 0;
            $this.$precision = 1;
        }
        if ($this.$scale > 0) {
            $trailingZeros = jl_Math_min($this.$scale, jl_Long_numberOfTrailingZeros($mantisa));
            $mantisa = Long_shru($mantisa, $trailingZeros);
            $this.$scale = $this.$scale - $trailingZeros | 0;
        }
        if (Long_ne(Long_shr($bits, 63), Long_ZERO))
            $mantisa = Long_neg($mantisa);
        $mantisaBits = jm_BigDecimal_bitLength($mantisa);
        if ($this.$scale >= 0) {
            if ($this.$scale <= 0) {
                $this.$smallValue = $mantisa;
                $this.$bitLength3 = $mantisaBits;
            } else if ($this.$scale < jm_BigDecimal_LONG_FIVE_POW.data.length && ($mantisaBits + jm_BigDecimal_LONG_FIVE_POW_BIT_LENGTH.data[$this.$scale] | 0) < 64) {
                $this.$smallValue = Long_mul($mantisa, jm_BigDecimal_LONG_FIVE_POW.data[$this.$scale]);
                $this.$bitLength3 = jm_BigDecimal_bitLength($this.$smallValue);
            } else
                jm_BigDecimal_setUnscaledValue($this, jm_Multiplication_multiplyByFivePow(jm_BigInteger_valueOf($mantisa), $this.$scale));
        } else {
            $this.$bitLength3 = !$mantisaBits ? 0 : $mantisaBits - $this.$scale | 0;
            if ($this.$bitLength3 < 64)
                $this.$smallValue = Long_shl($mantisa,  -$this.$scale | 0);
            else
                $this.$intVal = (jm_BigInteger_valueOf($mantisa)).$shiftLeft0( -$this.$scale | 0);
            $this.$scale = 0;
        }
        return;
    }
    $rt_throw(jl_NumberFormatException__init_2($rt_s(602)));
},
jm_BigDecimal__init_1 = var_0 => {
    let var_1 = new jm_BigDecimal();
    jm_BigDecimal__init_3(var_1, var_0);
    return var_1;
},
jm_BigDecimal__init_2 = ($this, $unscaledVal, $scale) => {
    jm_BigDecimal_$callClinit();
    jl_Number__init_($this);
    if ($unscaledVal !== null) {
        $this.$scale = $scale;
        jm_BigDecimal_setUnscaledValue($this, $unscaledVal);
        return;
    }
    $rt_throw(jl_NullPointerException__init_());
},
jm_BigDecimal__init_0 = (var_0, var_1) => {
    let var_2 = new jm_BigDecimal();
    jm_BigDecimal__init_2(var_2, var_0, var_1);
    return var_2;
},
jm_BigDecimal_valueOf = ($unscaledVal, $scale) => {
    jm_BigDecimal_$callClinit();
    if (!$scale)
        return jm_BigDecimal_valueOf0($unscaledVal);
    if (Long_eq($unscaledVal, Long_ZERO) && $scale >= 0 && $scale < jm_BigDecimal_ZERO_SCALED_BY.data.length)
        return jm_BigDecimal_ZERO_SCALED_BY.data[$scale];
    return jm_BigDecimal__init_4($unscaledVal, $scale);
},
jm_BigDecimal_valueOf0 = $unscaledVal => {
    jm_BigDecimal_$callClinit();
    if (Long_ge($unscaledVal, Long_ZERO) && Long_lt($unscaledVal, Long_fromInt(11)))
        return jm_BigDecimal_BI_SCALED_BY_ZERO.data[Long_lo($unscaledVal)];
    return jm_BigDecimal__init_4($unscaledVal, 0);
},
jm_BigDecimal_divideBigIntegers = ($scaledDividend, $scaledDivisor, $scale, $roundingMode) => {
    let $quotAndRem, var$6, $quotient, $remainder, $sign, $compRem, var$11, $rem, $divisor, var$14;
    jm_BigDecimal_$callClinit();
    $quotAndRem = $scaledDividend.$divideAndRemainder($scaledDivisor);
    var$6 = $quotAndRem.data;
    $quotient = var$6[0];
    $remainder = var$6[1];
    if (!$remainder.$signum())
        return jm_BigDecimal__init_0($quotient, $scale);
    $sign = $rt_imul($scaledDividend.$signum(), $scaledDivisor.$signum());
    if ($scaledDivisor.$bitLength2() >= 63) {
        $compRem = (($remainder.$abs0()).$shiftLeftOneBit0()).$compareTo2($scaledDivisor.$abs0());
        var$11 = jm_BigDecimal_roundingBehavior(!$quotient.$testBit(0) ? 0 : 1, $rt_imul($sign, 5 + $compRem | 0), $roundingMode);
    } else {
        $rem = $remainder.$longValue();
        $divisor = $scaledDivisor.$longValue();
        $compRem = jm_BigDecimal_longCompareTo(Long_shl(jl_Math_abs0($rem), 1), jl_Math_abs0($divisor));
        var$11 = jm_BigDecimal_roundingBehavior(!$quotient.$testBit(0) ? 0 : 1, $rt_imul($sign, 5 + $compRem | 0), $roundingMode);
    }
    if (!var$11)
        return jm_BigDecimal__init_0($quotient, $scale);
    if ($quotient.$bitLength2() < 63)
        return jm_BigDecimal_valueOf(Long_add($quotient.$longValue(), Long_fromInt(var$11)), $scale);
    var$14 = $quotient.$add2(jm_BigInteger_valueOf(Long_fromInt(var$11)));
    return jm_BigDecimal__init_0(var$14, $scale);
},
jm_BigDecimal_dividePrimitiveLongs = ($scaledDividend, $scaledDivisor, $scale, $roundingMode) => {
    let $quotient, $remainder, $sign, $compRem;
    jm_BigDecimal_$callClinit();
    $quotient = Long_div($scaledDividend, $scaledDivisor);
    $remainder = Long_rem($scaledDividend, $scaledDivisor);
    $sign = $rt_imul(jl_Long_signum($scaledDividend), jl_Long_signum($scaledDivisor));
    if (Long_ne($remainder, Long_ZERO)) {
        $compRem = jm_BigDecimal_longCompareTo(Long_shl(jl_Math_abs0($remainder), 1), jl_Math_abs0($scaledDivisor));
        $quotient = Long_add($quotient, Long_fromInt(jm_BigDecimal_roundingBehavior(Long_lo($quotient) & 1, $rt_imul($sign, 5 + $compRem | 0), $roundingMode)));
    }
    return jm_BigDecimal_valueOf($quotient, $scale);
},
jm_BigDecimal_signum = $this => {
    if ($this.$bitLength3 >= 64)
        return (jm_BigDecimal_getUnscaledValue($this)).$signum();
    return jl_Long_signum($this.$smallValue);
},
jm_BigDecimal_setScale = ($this, $newScale, $roundingMode) => {
    let $diffScale, var$4, var$5, var$6, var$7;
    if ($roundingMode === null)
        $rt_throw(jl_NullPointerException__init_());
    $diffScale = Long_sub(Long_fromInt($newScale), Long_fromInt($this.$scale));
    var$4 = Long_compare($diffScale, Long_ZERO);
    if (!var$4)
        return $this;
    if (var$4 <= 0) {
        if ($this.$bitLength3 < 64) {
            var$5 = Long_neg($diffScale);
            jm_BigDecimal_$callClinit();
            if (Long_lt(var$5, Long_fromInt(jm_BigDecimal_LONG_TEN_POW.data.length)))
                return jm_BigDecimal_dividePrimitiveLongs($this.$smallValue, jm_BigDecimal_LONG_TEN_POW.data[Long_lo(var$5)], $newScale, $roundingMode);
        }
        return jm_BigDecimal_divideBigIntegers(jm_BigDecimal_getUnscaledValue($this), jm_Multiplication_powerOf10(Long_neg($diffScale)), $newScale, $roundingMode);
    }
    jm_BigDecimal_$callClinit();
    if (Long_lt($diffScale, Long_fromInt(jm_BigDecimal_LONG_TEN_POW.data.length))) {
        var$4 = $this.$bitLength3;
        var$6 = jm_BigDecimal_LONG_TEN_POW_BIT_LENGTH.data;
        var$7 = Long_lo($diffScale);
        if ((var$4 + var$6[var$7] | 0) < 64)
            return jm_BigDecimal_valueOf(Long_mul($this.$smallValue, jm_BigDecimal_LONG_TEN_POW.data[var$7]), $newScale);
    }
    return jm_BigDecimal__init_0(jm_Multiplication_multiplyByTenPow(jm_BigDecimal_getUnscaledValue($this), Long_fromInt(Long_lo($diffScale))), $newScale);
},
jm_BigDecimal_doubleValue = $this => {
    let $sign, $exponent, $powerOfTwo, $mantisa, var$5, $powerOfTen, $k, $quotAndRem, var$9, $compRem, $lowestSetBit, $discardedSize, $bits, var$14, var$15, var$16, var$17;
    $sign = $this.$signum();
    $exponent = 1076;
    $powerOfTwo = Long_sub(Long_fromInt($this.$bitLength3), Long_fromNumber($this.$scale / 0.3010299956639812));
    if (Long_ge($powerOfTwo, Long_fromInt(-1074)) && $sign) {
        if (Long_gt($powerOfTwo, Long_fromInt(1025)))
            return $sign * Infinity;
        $mantisa = (jm_BigDecimal_getUnscaledValue($this)).$abs0();
        if ($this.$scale <= 0)
            var$5 = $mantisa.$multiply0(jm_Multiplication_powerOf10(Long_fromInt( -$this.$scale | 0)));
        else {
            $powerOfTen = jm_Multiplication_powerOf10(Long_fromInt($this.$scale));
            $k = 100 - Long_lo($powerOfTwo) | 0;
            if ($k > 0) {
                $mantisa = $mantisa.$shiftLeft0($k);
                $exponent = $exponent - $k | 0;
            }
            $quotAndRem = $mantisa.$divideAndRemainder($powerOfTen);
            var$9 = $quotAndRem.data;
            $compRem = (var$9[1].$shiftLeftOneBit0()).$compareTo2($powerOfTen);
            var$5 = (var$9[0].$shiftLeft0(2)).$add2(jm_BigInteger_valueOf(Long_fromInt(($rt_imul($compRem, $compRem + 3 | 0) / 2 | 0) + 1 | 0)));
            $exponent = $exponent + (-2) | 0;
        }
        $lowestSetBit = var$5.$getLowestSetBit();
        $discardedSize = var$5.$bitLength2() - 54 | 0;
        if ($discardedSize <= 0) {
            $bits = Long_shl(var$5.$longValue(),  -$discardedSize | 0);
            var$14 = Long_ne(Long_and($bits, Long_fromInt(3)), Long_fromInt(3)) ? $bits : Long_add($bits, Long_fromInt(2));
        } else {
            $bits = (var$5.$shiftRight0($discardedSize)).$longValue();
            var$14 = !(Long_eq(Long_and($bits, Long_fromInt(1)), Long_fromInt(1)) && $lowestSetBit < $discardedSize) && Long_ne(Long_and($bits, Long_fromInt(3)), Long_fromInt(3)) ? $bits : Long_add($bits, Long_fromInt(2));
        }
        if (Long_eq(Long_and(var$14, Long_create(0, 4194304)), Long_ZERO)) {
            var$15 = Long_shr(var$14, 1);
            var$16 = $exponent + $discardedSize | 0;
        } else {
            var$15 = Long_shr(var$14, 2);
            var$16 = $exponent + ($discardedSize + 1 | 0) | 0;
        }
        if (var$16 > 2046)
            return $sign * Infinity;
        if (var$16 <= 0) {
            if (var$16 < (-53))
                return $sign * 0.0;
            a: {
                var$15 = Long_shr($bits, 1);
                var$17 = Long_and(var$15, Long_shru(Long_fromInt(-1), 63 + var$16 | 0));
                var$15 = Long_shr(var$15,  -var$16 | 0);
                if (Long_ne(Long_and(var$15, Long_fromInt(3)), Long_fromInt(3))) {
                    if (Long_ne(Long_and(var$15, Long_fromInt(1)), Long_fromInt(1)))
                        break a;
                    if (Long_eq(var$17, Long_ZERO))
                        break a;
                    if ($lowestSetBit >= $discardedSize)
                        break a;
                }
                var$15 = Long_add(var$15, Long_fromInt(1));
            }
            var$16 = 0;
            var$15 = Long_shr(var$15, 1);
        }
        var$15 = Long_or(Long_or(Long_and(Long_fromInt($sign), Long_create(0, 2147483648)), Long_shl(Long_fromInt(var$16), 52)), Long_and(var$15, Long_create(4294967295, 1048575)));
        return $rt_longBitsToDouble(var$15);
    }
    return $sign * 0.0;
},
jm_BigDecimal_longCompareTo = ($value1, $value2) => {
    let var$3;
    jm_BigDecimal_$callClinit();
    var$3 = Long_compare($value1, $value2);
    return var$3 > 0 ? 1 : var$3 >= 0 ? 0 : (-1);
},
jm_BigDecimal_roundingBehavior = ($parityBit, $fraction, $roundingMode) => {
    let $increment;
    jm_BigDecimal_$callClinit();
    a: {
        $increment = 0;
        jm_BigDecimal$1_$callClinit();
        switch (jm_BigDecimal$1_$SwitchMap$org$teavm$classlib$java$math$TRoundingMode.data[jl_Enum_ordinal($roundingMode)]) {
            case 1:
                if (!$fraction)
                    break a;
                $rt_throw(jl_ArithmeticException__init_($rt_s(603)));
            case 2:
                $increment = jl_Integer_signum($fraction);
                break a;
            case 3:
                break;
            case 4:
                $increment = jl_Math_max(jl_Integer_signum($fraction), 0);
                break a;
            case 5:
                $increment = jl_Math_min(jl_Integer_signum($fraction), 0);
                break a;
            case 6:
                if (jl_Math_abs($fraction) < 5)
                    break a;
                $increment = jl_Integer_signum($fraction);
                break a;
            case 7:
                if (jl_Math_abs($fraction) <= 5)
                    break a;
                $increment = jl_Integer_signum($fraction);
                break a;
            case 8:
                if ((jl_Math_abs($fraction) + $parityBit | 0) <= 5)
                    break a;
                $increment = jl_Integer_signum($fraction);
                break a;
            default:
                break a;
        }
    }
    return $increment;
},
jm_BigDecimal_getUnscaledValue = $this => {
    if ($this.$intVal === null)
        $this.$intVal = jm_BigInteger_valueOf($this.$smallValue);
    return $this.$intVal;
},
jm_BigDecimal_setUnscaledValue = ($this, $unscaledValue) => {
    $this.$intVal = $unscaledValue;
    $this.$bitLength3 = $unscaledValue.$bitLength2();
    if ($this.$bitLength3 < 64)
        $this.$smallValue = $unscaledValue.$longValue();
},
jm_BigDecimal_bitLength = $smallValue => {
    jm_BigDecimal_$callClinit();
    if (Long_lt($smallValue, Long_ZERO))
        $smallValue = Long_xor($smallValue, Long_fromInt(-1));
    return 64 - jl_Long_numberOfLeadingZeros($smallValue) | 0;
},
jm_BigDecimal_bitLength0 = $smallValue => {
    jm_BigDecimal_$callClinit();
    if ($smallValue < 0)
        $smallValue = $smallValue ^ (-1);
    return 32 - jl_Integer_numberOfLeadingZeros($smallValue) | 0;
},
jm_BigDecimal__clinit_ = () => {
    let $i, $j;
    jm_BigDecimal_ZERO = jm_BigDecimal__init_(0, 0);
    jm_BigDecimal_ONE = jm_BigDecimal__init_(1, 0);
    jm_BigDecimal_TEN = jm_BigDecimal__init_(10, 0);
    jm_BigDecimal_LONG_TEN_POW = $rt_createLongArrayFromData([Long_fromInt(1), Long_fromInt(10), Long_fromInt(100), Long_fromInt(1000), Long_fromInt(10000), Long_fromInt(100000), Long_fromInt(1000000), Long_fromInt(10000000), Long_fromInt(100000000), Long_fromInt(1000000000), Long_create(1410065408, 2), Long_create(1215752192, 23), Long_create(3567587328, 232), Long_create(1316134912, 2328), Long_create(276447232, 23283), Long_create(2764472320, 232830), Long_create(1874919424, 2328306), Long_create(1569325056, 23283064),
    Long_create(2808348672, 232830643)]);
    jm_BigDecimal_LONG_FIVE_POW = $rt_createLongArrayFromData([Long_fromInt(1), Long_fromInt(5), Long_fromInt(25), Long_fromInt(125), Long_fromInt(625), Long_fromInt(3125), Long_fromInt(15625), Long_fromInt(78125), Long_fromInt(390625), Long_fromInt(1953125), Long_fromInt(9765625), Long_fromInt(48828125), Long_fromInt(244140625), Long_fromInt(1220703125), Long_create(1808548329, 1), Long_create(452807053, 7), Long_create(2264035265, 35), Long_create(2730241733, 177), Long_create(766306777, 888), Long_create(3831533885, 4440),
    Long_create(1977800241, 22204), Long_create(1299066613, 111022), Long_create(2200365769, 555111), Long_create(2411894253, 2775557), Long_create(3469536673, 13877787), Long_create(167814181, 69388939), Long_create(839070905, 346944695), Long_create(4195354525, 1734723475)]);
    jm_BigDecimal_LONG_FIVE_POW_BIT_LENGTH = $rt_createIntArray(jm_BigDecimal_LONG_FIVE_POW.data.length);
    jm_BigDecimal_LONG_TEN_POW_BIT_LENGTH = $rt_createIntArray(jm_BigDecimal_LONG_TEN_POW.data.length);
    jm_BigDecimal_BI_SCALED_BY_ZERO = $rt_createArray(jm_BigDecimal, 11);
    jm_BigDecimal_ZERO_SCALED_BY = $rt_createArray(jm_BigDecimal, 11);
    jm_BigDecimal_CH_ZEROS = $rt_createCharArray(100);
    $i = 0;
    while ($i < jm_BigDecimal_ZERO_SCALED_BY.data.length) {
        jm_BigDecimal_BI_SCALED_BY_ZERO.data[$i] = jm_BigDecimal__init_($i, 0);
        jm_BigDecimal_ZERO_SCALED_BY.data[$i] = jm_BigDecimal__init_(0, $i);
        jm_BigDecimal_CH_ZEROS.data[$i] = 48;
        $i = $i + 1 | 0;
    }
    while ($i < jm_BigDecimal_CH_ZEROS.data.length) {
        jm_BigDecimal_CH_ZEROS.data[$i] = 48;
        $i = $i + 1 | 0;
    }
    $j = 0;
    while ($j < jm_BigDecimal_LONG_FIVE_POW_BIT_LENGTH.data.length) {
        jm_BigDecimal_LONG_FIVE_POW_BIT_LENGTH.data[$j] = jm_BigDecimal_bitLength(jm_BigDecimal_LONG_FIVE_POW.data[$j]);
        $j = $j + 1 | 0;
    }
    $j = 0;
    while ($j < jm_BigDecimal_LONG_TEN_POW_BIT_LENGTH.data.length) {
        jm_BigDecimal_LONG_TEN_POW_BIT_LENGTH.data[$j] = jm_BigDecimal_bitLength(jm_BigDecimal_LONG_TEN_POW.data[$j]);
        $j = $j + 1 | 0;
    }
    jm_Multiplication_$callClinit();
    jm_BigDecimal_TEN_POW = jm_Multiplication_bigTenPows;
    jm_BigDecimal_FIVE_POW = jm_Multiplication_bigFivePows;
};
function cpcs_AppShell$buildDialog$lambda$_19_4() {
    jl_Object.call(this);
    this.$_070 = null;
}
let cpcs_AppShell$buildDialog$lambda$_19_4__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_070 = var$1;
},
cpcs_AppShell$buildDialog$lambda$_19_4__init_0 = var_0 => {
    let var_1 = new cpcs_AppShell$buildDialog$lambda$_19_4();
    cpcs_AppShell$buildDialog$lambda$_19_4__init_(var_1, var_0);
    return var_1;
},
cpcs_AppShell$buildDialog$lambda$_19_4_run = var$0 => {
    cpcs_AppShell_lambda$buildDialog$7(var$0.$_070);
},
ju_List = $rt_classWithoutFields(0),
ju_List_of0 = () => {
    return ju_Collections_emptyList();
},
ju_List_of = ($e1, $e2, $e3, $e4) => {
    ju_Objects_requireNonNull($e1);
    ju_Objects_requireNonNull($e2);
    ju_Objects_requireNonNull($e3);
    ju_Objects_requireNonNull($e4);
    return ju_TemplateCollections$ImmutableArrayList__init_($rt_wrapArray(jl_Object, [$e1, $e2, $e3, $e4]));
},
ju_List_of4 = ($e1, $e2, $e3, $e4, $e5) => {
    ju_Objects_requireNonNull($e1);
    ju_Objects_requireNonNull($e2);
    ju_Objects_requireNonNull($e3);
    ju_Objects_requireNonNull($e4);
    ju_Objects_requireNonNull($e5);
    return ju_TemplateCollections$ImmutableArrayList__init_($rt_wrapArray(jl_Object, [$e1, $e2, $e3, $e4, $e5]));
},
ju_List_of1 = ($e1, $e2, $e3, $e4, $e5, $e6, $e7, $e8) => {
    ju_Objects_requireNonNull($e1);
    ju_Objects_requireNonNull($e2);
    ju_Objects_requireNonNull($e3);
    ju_Objects_requireNonNull($e4);
    ju_Objects_requireNonNull($e5);
    ju_Objects_requireNonNull($e6);
    ju_Objects_requireNonNull($e7);
    ju_Objects_requireNonNull($e8);
    return ju_TemplateCollections$ImmutableArrayList__init_($rt_wrapArray(jl_Object, [$e1, $e2, $e3, $e4, $e5, $e6, $e7, $e8]));
},
ju_List_of2 = ($e1, $e2, $e3, $e4, $e5, $e6, $e7, $e8, $e9, $e10) => {
    ju_Objects_requireNonNull($e1);
    ju_Objects_requireNonNull($e2);
    ju_Objects_requireNonNull($e3);
    ju_Objects_requireNonNull($e4);
    ju_Objects_requireNonNull($e5);
    ju_Objects_requireNonNull($e6);
    ju_Objects_requireNonNull($e7);
    ju_Objects_requireNonNull($e8);
    ju_Objects_requireNonNull($e9);
    ju_Objects_requireNonNull($e10);
    return ju_TemplateCollections$ImmutableArrayList__init_($rt_wrapArray(jl_Object, [$e1, $e2, $e3, $e4, $e5, $e6, $e7, $e8, $e9, $e10]));
},
ju_List_of3 = $elements => {
    let var$2, var$3, var$4, $element;
    var$2 = $elements.data;
    var$3 = var$2.length;
    var$4 = 0;
    while (var$4 < var$3) {
        $element = var$2[var$4];
        ju_Objects_requireNonNull($element);
        var$4 = var$4 + 1 | 0;
    }
    return ju_TemplateCollections$ImmutableArrayList__init_($elements.$clone0());
};
function ju_AbstractList() {
    ju_AbstractCollection.call(this);
    this.$modCount = 0;
}
let ju_AbstractList__init_ = $this => {
    ju_AbstractCollection__init_($this);
},
ju_AbstractList_add = ($this, $e) => {
    $this.$add3($this.$size(), $e);
    return 1;
},
ju_AbstractList_iterator = $this => {
    return ju_AbstractList$1__init_0($this);
},
ju_AbstractList_add0 = ($this, $index, $element) => {
    $rt_throw(jl_UnsupportedOperationException__init_0());
},
ju_AbstractList_indexOf = ($this, $o) => {
    let $sz, $i;
    $sz = $this.$size();
    $i = 0;
    while (true) {
        if ($i >= $sz)
            return (-1);
        if (ju_Objects_equals($o, $this.$get0($i)))
            break;
        $i = $i + 1 | 0;
    }
    return $i;
},
ju_AbstractList_listIterator = ($this, $index) => {
    return ju_AbstractList$TListIteratorImpl__init_0($this, $index, $this.$modCount, $this.$size());
},
ju_AbstractList_subList = ($this, $fromIndex, $toIndex) => {
    if ($fromIndex > $toIndex)
        $rt_throw(jl_IllegalArgumentException__init_());
    if ($fromIndex >= 0 && $toIndex <= $this.$size()) {
        if (!$rt_isInstance($this, ju_RandomAccess))
            return ju_AbstractList$SubAbstractList__init_0($this, $fromIndex, $toIndex);
        return ju_AbstractList$SubAbstractListRandomAccess__init_0($this, $fromIndex, $toIndex);
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_RandomAccess = $rt_classWithoutFields(0),
ju_TemplateCollections$AbstractImmutableList = $rt_classWithoutFields(ju_AbstractList),
ju_TemplateCollections$AbstractImmutableList__init_ = $this => {
    ju_AbstractList__init_($this);
},
ju_TemplateCollections$AbstractImmutableList_remove = ($this, $index) => {
    $rt_throw(jl_UnsupportedOperationException__init_0());
},
ju_Collections$3 = $rt_classWithoutFields(ju_TemplateCollections$AbstractImmutableList),
ju_Collections$3__init_ = $this => {
    ju_TemplateCollections$AbstractImmutableList__init_($this);
},
ju_Collections$3__init_0 = () => {
    let var_0 = new ju_Collections$3();
    ju_Collections$3__init_(var_0);
    return var_0;
},
ju_Collections$3_get = ($this, $index) => {
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_Collections$3_size = $this => {
    return 0;
},
ju_Collections$3_iterator = $this => {
    return ju_Collections_emptyIterator();
},
ju_Collections$3_isEmpty = $this => {
    return 1;
};
function cpcs_AppShell$buildDialog$lambda$_19_3() {
    jl_Object.call(this);
    this.$_022 = null;
}
let cpcs_AppShell$buildDialog$lambda$_19_3__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_022 = var$1;
},
cpcs_AppShell$buildDialog$lambda$_19_3__init_0 = var_0 => {
    let var_1 = new cpcs_AppShell$buildDialog$lambda$_19_3();
    cpcs_AppShell$buildDialog$lambda$_19_3__init_(var_1, var_0);
    return var_1;
},
cpcs_AppShell$buildDialog$lambda$_19_3_run = var$0 => {
    cpcs_AppShell_lambda$buildDialog$13(var$0.$_022);
},
ju_Collections$4 = $rt_classWithoutFields(),
ju_Collections$4__init_ = $this => {
    jl_Object__init_($this);
},
ju_Collections$4__init_0 = () => {
    let var_0 = new ju_Collections$4();
    ju_Collections$4__init_(var_0);
    return var_0;
},
ju_Collections$4_hasNext = $this => {
    return 0;
},
ju_Collections$4_next = $this => {
    $rt_throw(ju_NoSuchElementException__init_());
};
function cpcs_AppShell$buildDialog$lambda$_19_2() {
    jl_Object.call(this);
    this.$_041 = null;
}
let cpcs_AppShell$buildDialog$lambda$_19_2__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_041 = var$1;
},
cpcs_AppShell$buildDialog$lambda$_19_2__init_0 = var_0 => {
    let var_1 = new cpcs_AppShell$buildDialog$lambda$_19_2();
    cpcs_AppShell$buildDialog$lambda$_19_2__init_(var_1, var_0);
    return var_1;
},
cpcs_AppShell$buildDialog$lambda$_19_2_run = var$0 => {
    cpcs_AppShell_lambda$buildDialog$12(var$0.$_041);
},
jl_Character = $rt_classWithoutFields(),
jl_Character_TYPE = null,
jl_Character_upperCaseMapping = null,
jl_Character_characterCache = null,
jl_Character_$$metadata$$1 = null,
jl_Character_$callClinit = () => {
    jl_Character_$callClinit = $rt_eraseClinit(jl_Character);
    jl_Character__clinit_();
},
jl_Character_toUpperCase = $ch => {
    jl_Character_$callClinit();
    return jl_Character_toUpperCase0($ch) & 65535;
},
jl_Character_toUpperCase0 = $codePoint => {
    jl_Character_$callClinit();
    return jl_Character_mapChar(jl_Character_getUpperCaseMapping(), $codePoint);
},
jl_Character_getUpperCaseMapping = () => {
    let var$1;
    jl_Character_$callClinit();
    if (jl_Character_upperCaseMapping === null) {
        var$1 = otciu_UnicodeHelper_decodeCaseMapping(((jl_Character_acquireUpperCaseMapping()).value !== null ? $rt_str((jl_Character_acquireUpperCaseMapping()).value) : null));
        jl_Character_upperCaseMapping = otciu_UnicodeHelper_createCharMapping(var$1);
    }
    return jl_Character_upperCaseMapping;
},
jl_Character_acquireUpperCaseMapping = () => {
    jl_Character_$callClinit();
    if (jl_Character_$$metadata$$1 === null)
        jl_Character_$$metadata$$1 = jl_Character_acquireUpperCaseMapping$$create();
    return jl_Character_$$metadata$$1;
},
jl_Character_mapChar = ($table, $codePoint) => {
    let $binSearchTable, $index, var$5, var$6;
    jl_Character_$callClinit();
    if ($codePoint < $table.$fastTable.data.length)
        return $codePoint + $table.$fastTable.data[$codePoint] | 0;
    $binSearchTable = $table.$binarySearchTable0;
    $index = jl_Character_binarySearchTable($binSearchTable, $codePoint);
    if ($index >= 0) {
        var$5 = $binSearchTable.data;
        var$6 = $index * 2 | 0;
        if (var$6 < var$5.length)
            return $codePoint + var$5[var$6 + 1 | 0] | 0;
    }
    return 0;
},
jl_Character_binarySearchTable = ($data, $key) => {
    let var$3, $l, $u, $i, $e, var$8;
    jl_Character_$callClinit();
    var$3 = $data.data;
    $l = 0;
    $u = (var$3.length / 2 | 0) - 1 | 0;
    while (true) {
        $i = ($l + $u | 0) / 2 | 0;
        $e = var$3[$i * 2 | 0];
        var$8 = $rt_compare($e, $key);
        if (!var$8)
            break;
        if (var$8 <= 0) {
            $l = $i + 1 | 0;
            if ($l > $u)
                return $i;
        } else {
            $u = $i - 1 | 0;
            if ($u < $l)
                return $u;
        }
    }
    return $i;
},
jl_Character_forDigit = ($digit, $radix) => {
    jl_Character_$callClinit();
    if ($radix >= 2 && $radix <= 36 && $digit >= 0 && $digit < $radix)
        return $digit < 10 ? (48 + $digit | 0) & 65535 : ((97 + $digit | 0) - 10 | 0) & 65535;
    return 0;
},
jl_Character__clinit_ = () => {
    jl_Character_TYPE = $rt_cls($rt_charcls);
    jl_Character_characterCache = $rt_createArray(jl_Character, 128);
},
jl_Character_acquireUpperCaseMapping$$create = () => {
    return {"value" : "NY  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/#N6r# %_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
    + " #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3#!$r#:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'"
    + "# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d# #\'- (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
    + " #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'#"
    + " #\'# #\'# -\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
    + "\'# #\'# #\'# #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'# %\'\' #\'% )\'# #\'# #\'# U\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#t {nm%:# V%H#^ >B#H#b o@5H#b No=P#f "};
},
ju_Set = $rt_classWithoutFields(0),
ju_AbstractSet = $rt_classWithoutFields(ju_AbstractCollection),
ju_AbstractSet__init_ = $this => {
    ju_AbstractCollection__init_($this);
},
ju_TemplateCollections$AbstractImmutableSet = $rt_classWithoutFields(ju_AbstractSet),
ju_TemplateCollections$AbstractImmutableSet__init_ = $this => {
    ju_AbstractSet__init_($this);
},
ju_Collections$1 = $rt_classWithoutFields(ju_TemplateCollections$AbstractImmutableSet),
ju_Collections$1__init_ = $this => {
    ju_TemplateCollections$AbstractImmutableSet__init_($this);
},
ju_Collections$1__init_0 = () => {
    let var_0 = new ju_Collections$1();
    ju_Collections$1__init_(var_0);
    return var_0;
},
ju_Collections$2 = $rt_classWithoutFields(ju_TemplateCollections$AbstractImmutableMap),
ju_Collections$2__init_ = $this => {
    ju_TemplateCollections$AbstractImmutableMap__init_($this);
},
ju_Collections$2__init_0 = () => {
    let var_0 = new ju_Collections$2();
    ju_Collections$2__init_(var_0);
    return var_0;
};
function cpcs_AppShell$buildDialog$lambda$_19_6() {
    jl_Object.call(this);
    this.$_032 = null;
}
let cpcs_AppShell$buildDialog$lambda$_19_6__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_032 = var$1;
},
cpcs_AppShell$buildDialog$lambda$_19_6__init_0 = var_0 => {
    let var_1 = new cpcs_AppShell$buildDialog$lambda$_19_6();
    cpcs_AppShell$buildDialog$lambda$_19_6__init_(var_1, var_0);
    return var_1;
},
cpcs_AppShell$buildDialog$lambda$_19_6_run = var$0 => {
    cpcs_AppShell_lambda$buildDialog$9(var$0.$_032);
};
function cpcs_AppShell$buildDialog$lambda$_19_1() {
    jl_Object.call(this);
    this.$_059 = null;
}
let cpcs_AppShell$buildDialog$lambda$_19_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_059 = var$1;
},
cpcs_AppShell$buildDialog$lambda$_19_1__init_0 = var_0 => {
    let var_1 = new cpcs_AppShell$buildDialog$lambda$_19_1();
    cpcs_AppShell$buildDialog$lambda$_19_1__init_(var_1, var_0);
    return var_1;
},
cpcs_AppShell$buildDialog$lambda$_19_1_run = var$0 => {
    cpcs_AppShell_lambda$buildDialog$11(var$0.$_059);
};
function cpcs_AppShell$buildDialog$lambda$_19_0() {
    jl_Object.call(this);
    this.$_084 = null;
}
let cpcs_AppShell$buildDialog$lambda$_19_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_084 = var$1;
},
cpcs_AppShell$buildDialog$lambda$_19_0__init_0 = var_0 => {
    let var_1 = new cpcs_AppShell$buildDialog$lambda$_19_0();
    cpcs_AppShell$buildDialog$lambda$_19_0__init_(var_1, var_0);
    return var_1;
},
cpcs_AppShell$buildDialog$lambda$_19_0_run = var$0 => {
    cpcs_AppShell_lambda$buildDialog$10(var$0.$_084);
};
function cpcw_WhiteboardStudio$_init_$lambda$_0_12() {
    jl_Object.call(this);
    this.$_021 = null;
}
let cpcw_WhiteboardStudio$_init_$lambda$_0_12__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_021 = var$1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_12__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$_init_$lambda$_0_12();
    cpcw_WhiteboardStudio$_init_$lambda$_0_12__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_12_run = var$0 => {
    cpcw_WhiteboardStudio_handleEditorBlur(var$0.$_021);
},
ju_SequencedSet = $rt_classWithoutFields(0);
function cpcw_WhiteboardStudio$_init_$lambda$_0_13() {
    jl_Object.call(this);
    this.$_046 = null;
}
let cpcw_WhiteboardStudio$_init_$lambda$_0_13__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_046 = var$1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_13__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$_init_$lambda$_0_13();
    cpcw_WhiteboardStudio$_init_$lambda$_0_13__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_13_run = var$0 => {
    cpcw_WhiteboardStudio_handleDeleteSelected(var$0.$_046);
};
function cpcw_WhiteboardStudio$_init_$lambda$_0_10() {
    jl_Object.call(this);
    this.$_058 = null;
}
let cpcw_WhiteboardStudio$_init_$lambda$_0_10__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_058 = var$1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_10__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$_init_$lambda$_0_10();
    cpcw_WhiteboardStudio$_init_$lambda$_0_10__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_10_run = var$0 => {
    cpcw_WhiteboardStudio_resetView(var$0.$_058);
};
function cpcw_WhiteboardStudio$_init_$lambda$_0_11() {
    jl_Object.call(this);
    this.$_090 = null;
}
let cpcw_WhiteboardStudio$_init_$lambda$_0_11__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_090 = var$1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_11__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$_init_$lambda$_0_11();
    cpcw_WhiteboardStudio$_init_$lambda$_0_11__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_11_handle = (var$0, var$1) => {
    cpcw_WhiteboardStudio_handleEditorInput(var$0.$_090, var$1);
};
function cpcw_WhiteboardStudio$_init_$lambda$_0_16() {
    let a = this; jl_Object.call(a);
    a.$_028 = null;
    a.$_13 = null;
}
let cpcw_WhiteboardStudio$_init_$lambda$_0_16__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_028 = var$1;
    var$0.$_13 = var$2;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_16__init_0 = (var_0, var_1) => {
    let var_2 = new cpcw_WhiteboardStudio$_init_$lambda$_0_16();
    cpcw_WhiteboardStudio$_init_$lambda$_0_16__init_(var_2, var_0, var_1);
    return var_2;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_16_run = var$0 => {
    cpcw_WhiteboardStudio_lambda$new$0(var$0.$_028, var$0.$_13);
};
function cpcw_WhiteboardStudio$_init_$lambda$_0_14() {
    jl_Object.call(this);
    this.$_072 = null;
}
let cpcw_WhiteboardStudio$_init_$lambda$_0_14__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_072 = var$1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_14__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$_init_$lambda$_0_14();
    cpcw_WhiteboardStudio$_init_$lambda$_0_14__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_14_call = var$0 => {
    cpcw_WhiteboardStudio_syncCanvasSize(var$0.$_072);
},
cpcw_WhiteboardStudio$_init_$lambda$_0_14_call$exported$0 = var$1 => {
    var$1.$call();
},
cpcj_Js$FrameCb = $rt_classWithoutFields(0);
function cpcw_WhiteboardStudio$_init_$lambda$_0_15() {
    jl_Object.call(this);
    this.$_0 = null;
}
let cpcw_WhiteboardStudio$_init_$lambda$_0_15__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_0 = var$1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_15__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$_init_$lambda$_0_15();
    cpcw_WhiteboardStudio$_init_$lambda$_0_15__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_15_call = (var$0, var$1) => {
    cpcw_WhiteboardStudio_frame(var$0.$_0, var$1);
},
cpcw_WhiteboardStudio$_init_$lambda$_0_15_call$exported$0 = (var$1, var$2) => {
    let var$3;
    var$3 = var$2;
    var$1.$call0(var$3);
};
function ju_ArrayDeque$1() {
    let a = this; jl_Object.call(a);
    a.$refVersion = 0;
    a.$index = 0;
    a.$lastIndex = 0;
    a.$left = 0;
    a.$this$0 = null;
}
let ju_ArrayDeque$1__init_ = ($this, $this$0) => {
    $this.$this$0 = $this$0;
    jl_Object__init_($this);
    $this.$refVersion = $this.$this$0.$version;
    $this.$index = $this.$this$0.$head;
    $this.$lastIndex = (-1);
    $this.$left = $this.$this$0.$size();
},
ju_ArrayDeque$1__init_0 = var_0 => {
    let var_1 = new ju_ArrayDeque$1();
    ju_ArrayDeque$1__init_(var_1, var_0);
    return var_1;
},
ju_ArrayDeque$1_hasNext = $this => {
    return $this.$left <= 0 ? 0 : 1;
},
ju_ArrayDeque$1_next = $this => {
    let var$1, $result;
    var$1 = $this.$left - 1 | 0;
    $this.$left = var$1;
    if (var$1 < 0)
        $rt_throw(ju_NoSuchElementException__init_());
    if ($this.$this$0.$version > $this.$refVersion)
        $rt_throw(ju_ConcurrentModificationException__init_());
    $this.$lastIndex = $this.$index;
    $result = $this.$this$0.$array0.data[$this.$index];
    $this.$index = ju_ArrayDeque_modInc($this.$index, $this.$this$0.$array0.data.length);
    return $result;
},
otcir_ClassList = $rt_classWithoutFields(),
ju_Collections$_clinit_$lambda$_59_0 = $rt_classWithoutFields(),
ju_Collections$_clinit_$lambda$_59_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
ju_Collections$_clinit_$lambda$_59_0__init_0 = () => {
    let var_0 = new ju_Collections$_clinit_$lambda$_59_0();
    ju_Collections$_clinit_$lambda$_59_0__init_(var_0);
    return var_0;
},
ju_Collections$_clinit_$lambda$_59_0_compare = (var$0, var$1, var$2) => {
    return ju_Collections_lambda$static$0(var$1, var$2);
};
function cpcs_AppShell$renderOverlays$lambda$_18_2() {
    let a = this; jl_Object.call(a);
    a.$_037 = null;
    a.$_16 = null;
}
let cpcs_AppShell$renderOverlays$lambda$_18_2__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_037 = var$1;
    var$0.$_16 = var$2;
},
cpcs_AppShell$renderOverlays$lambda$_18_2__init_0 = (var_0, var_1) => {
    let var_2 = new cpcs_AppShell$renderOverlays$lambda$_18_2();
    cpcs_AppShell$renderOverlays$lambda$_18_2__init_(var_2, var_0, var_1);
    return var_2;
},
cpcs_AppShell$renderOverlays$lambda$_18_2_run = var$0 => {
    cpcs_AppShell_lambda$renderOverlays$5(var$0.$_037, var$0.$_16);
};
function cpcs_AppShell$renderOverlays$lambda$_18_0() {
    jl_Object.call(this);
    this.$_077 = null;
}
let cpcs_AppShell$renderOverlays$lambda$_18_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_077 = var$1;
},
cpcs_AppShell$renderOverlays$lambda$_18_0__init_0 = var_0 => {
    let var_1 = new cpcs_AppShell$renderOverlays$lambda$_18_0();
    cpcs_AppShell$renderOverlays$lambda$_18_0__init_(var_1, var_0);
    return var_1;
},
cpcs_AppShell$renderOverlays$lambda$_18_0_run = var$0 => {
    cpcs_AppShell_lambda$renderOverlays$4(var$0.$_077);
};
function cpcs_AppShell$renderOverlays$lambda$_18_1() {
    jl_Object.call(this);
    this.$_055 = null;
}
let cpcs_AppShell$renderOverlays$lambda$_18_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_055 = var$1;
},
cpcs_AppShell$renderOverlays$lambda$_18_1__init_0 = var_0 => {
    let var_1 = new cpcs_AppShell$renderOverlays$lambda$_18_1();
    cpcs_AppShell$renderOverlays$lambda$_18_1__init_(var_1, var_0);
    return var_1;
},
cpcs_AppShell$renderOverlays$lambda$_18_1_run = var$0 => {
    cpcs_AppShell_lambda$renderOverlays$6(var$0.$_055);
},
cpce_MatchingEngineStudio$1 = $rt_classWithoutFields(),
cpce_MatchingEngineStudio$1_$SwitchMap$com$parallely$client$model$SlotState = null,
cpce_MatchingEngineStudio$1_$callClinit = () => {
    cpce_MatchingEngineStudio$1_$callClinit = $rt_eraseClinit(cpce_MatchingEngineStudio$1);
    cpce_MatchingEngineStudio$1__clinit_();
},
cpce_MatchingEngineStudio$1__clinit_ = () => {
    cpce_MatchingEngineStudio$1_$SwitchMap$com$parallely$client$model$SlotState = $rt_createIntArray((cpcm_SlotState_values()).data.length);
    cpce_MatchingEngineStudio$1_$SwitchMap$com$parallely$client$model$SlotState.data[jl_Enum_ordinal(cpcm_SlotState_PUBLISHED)] = 1;
    cpce_MatchingEngineStudio$1_$SwitchMap$com$parallely$client$model$SlotState.data[jl_Enum_ordinal(cpcm_SlotState_JOURNALED)] = 2;
    cpce_MatchingEngineStudio$1_$SwitchMap$com$parallely$client$model$SlotState.data[jl_Enum_ordinal(cpcm_SlotState_MATCHED)] = 3;
    cpce_MatchingEngineStudio$1_$SwitchMap$com$parallely$client$model$SlotState.data[jl_Enum_ordinal(cpcm_SlotState_DISPATCHED)] = 4;
},
jm_Multiplication = $rt_classWithoutFields(),
jm_Multiplication_tenPows = null,
jm_Multiplication_fivePows = null,
jm_Multiplication_bigTenPows = null,
jm_Multiplication_bigFivePows = null,
jm_Multiplication_$callClinit = () => {
    jm_Multiplication_$callClinit = $rt_eraseClinit(jm_Multiplication);
    jm_Multiplication__clinit_();
},
jm_Multiplication_multiply = ($x, $y) => {
    jm_Multiplication_$callClinit();
    return jm_Multiplication_karatsuba($x, $y);
},
jm_Multiplication_karatsuba = ($op1, $op2) => {
    let var$3, $ndiv2, $upperOp1, $upperOp2, $lowerOp1, $lowerOp2, $upper, $lower, $middle, var$12;
    jm_Multiplication_$callClinit();
    if ($op2.$numberLength <= $op1.$numberLength) {
        var$3 = $op2;
        $op2 = $op1;
        $op1 = var$3;
    }
    if ($op1.$numberLength < 63)
        return jm_Multiplication_multiplyPAP($op2, $op1);
    $ndiv2 = ($op2.$numberLength & (-2)) << 4;
    $upperOp1 = $op2.$shiftRight0($ndiv2);
    $upperOp2 = $op1.$shiftRight0($ndiv2);
    $lowerOp1 = $op2.$subtract0($upperOp1.$shiftLeft0($ndiv2));
    $lowerOp2 = $op1.$subtract0($upperOp2.$shiftLeft0($ndiv2));
    $upper = jm_Multiplication_karatsuba($upperOp1, $upperOp2);
    $lower = jm_Multiplication_karatsuba($lowerOp1, $lowerOp2);
    $middle = jm_Multiplication_karatsuba($upperOp1.$subtract0($lowerOp1), $lowerOp2.$subtract0($upperOp2));
    var$3 = ($middle.$add2($upper)).$add2($lower);
    var$3 = var$3.$shiftLeft0($ndiv2);
    var$12 = $upper.$shiftLeft0($ndiv2 << 1);
    return (var$12.$add2(var$3)).$add2($lower);
},
jm_Multiplication_multiplyPAP = ($a, $b) => {
    let $aLen, $bLen, $resLength, $resSign, $aDigits, $bDigits, $resDigits, $result, $val, $valueLo, $valueHi;
    jm_Multiplication_$callClinit();
    $aLen = $a.$numberLength;
    $bLen = $b.$numberLength;
    $resLength = $aLen + $bLen | 0;
    $resSign = $a.$sign0 == $b.$sign0 ? 1 : (-1);
    if ($resLength != 2) {
        $aDigits = $a.$digits;
        $bDigits = $b.$digits;
        $resDigits = $rt_createIntArray($resLength);
        jm_Multiplication_multArraysPAP($aDigits, $aLen, $bDigits, $bLen, $resDigits);
        $result = jm_BigInteger__init_($resSign, $resLength, $resDigits);
        jm_BigInteger_cutOffLeadingZeroes($result);
        return $result;
    }
    $val = jm_Multiplication_unsignedMultAddAdd($a.$digits.data[0], $b.$digits.data[0], 0, 0);
    $valueLo = Long_lo($val);
    $valueHi = Long_hi($val);
    return !$valueHi ? jm_BigInteger__init_0($resSign, $valueLo) : jm_BigInteger__init_($resSign, 2, $rt_createIntArrayFromData([$valueLo, $valueHi]));
},
jm_Multiplication_multArraysPAP = ($aDigits, $aLen, $bDigits, $bLen, $resDigits) => {
    jm_Multiplication_$callClinit();
    if ($aLen && $bLen) {
        if ($aLen == 1)
            $resDigits.data[$bLen] = jm_Multiplication_multiplyByInt($resDigits, $bDigits, $bLen, $aDigits.data[0]);
        else if ($bLen != 1)
            jm_Multiplication_multPAP($aDigits, $bDigits, $resDigits, $aLen, $bLen);
        else
            $resDigits.data[$aLen] = jm_Multiplication_multiplyByInt($resDigits, $aDigits, $aLen, $bDigits.data[0]);
        return;
    }
},
jm_Multiplication_multPAP = ($a, $b, $t, $aLen, $bLen) => {
    let $i, var$7, $carry, $aI, $j, var$11, var$12, var$13, var$14;
    jm_Multiplication_$callClinit();
    if ($a === $b && $aLen == $bLen) {
        jm_Multiplication_square($a, $aLen, $t);
        return;
    }
    $i = 0;
    while ($i < $aLen) {
        var$7 = $a.data;
        $carry = Long_ZERO;
        $aI = var$7[$i];
        $j = 0;
        while ($j < $bLen) {
            var$11 = $t.data;
            var$12 = $b.data[$j];
            var$13 = $i + $j | 0;
            var$14 = jm_Multiplication_unsignedMultAddAdd($aI, var$12, var$11[var$13], Long_lo($carry));
            var$11[var$13] = Long_lo(var$14);
            $carry = Long_shru(var$14, 32);
            $j = $j + 1 | 0;
        }
        $t.data[$i + $bLen | 0] = Long_lo($carry);
        $i = $i + 1 | 0;
    }
},
jm_Multiplication_multiplyByInt = ($res, $a, $aSize, $factor) => {
    let $carry, $i, var$7, var$8;
    jm_Multiplication_$callClinit();
    $carry = Long_ZERO;
    $i = 0;
    while ($i < $aSize) {
        var$7 = $res.data;
        var$8 = jm_Multiplication_unsignedMultAddAdd($a.data[$i], $factor, Long_lo($carry), 0);
        var$7[$i] = Long_lo(var$8);
        $carry = Long_shru(var$8, 32);
        $i = $i + 1 | 0;
    }
    return Long_lo($carry);
},
jm_Multiplication_multiplyByPositiveInt = ($val, $factor) => {
    let $resSign, $aNumberLength, $aDigits, $resLength, $resDigits, var$8, $result, $res, $resLo, $resHi;
    jm_Multiplication_$callClinit();
    $resSign = $val.$sign0;
    if (!$resSign) {
        jm_BigInteger_$callClinit();
        return jm_BigInteger_ZERO;
    }
    $aNumberLength = $val.$numberLength;
    $aDigits = $val.$digits;
    if ($aNumberLength != 1) {
        $resLength = $aNumberLength + 1 | 0;
        $resDigits = $rt_createIntArray($resLength);
        var$8 = $resDigits.data;
        var$8[$aNumberLength] = jm_Multiplication_multiplyByInt($resDigits, $aDigits, $aNumberLength, $factor);
        $result = jm_BigInteger__init_($resSign, $resLength, $resDigits);
        jm_BigInteger_cutOffLeadingZeroes($result);
        return $result;
    }
    $res = jm_Multiplication_unsignedMultAddAdd($aDigits.data[0], $factor, 0, 0);
    $resLo = Long_lo($res);
    $resHi = Long_hi($res);
    return !$resHi ? jm_BigInteger__init_0($resSign, $resLo) : jm_BigInteger__init_($resSign, 2, $rt_createIntArrayFromData([$resLo, $resHi]));
},
jm_Multiplication_pow = ($acc, $exponent) => {
    let $res, $acc_0, var$5;
    jm_Multiplication_$callClinit();
    jm_BigInteger_$callClinit();
    $res = jm_BigInteger_ONE;
    while ($exponent > 1) {
        if ($exponent & 1)
            $res = $res.$multiply0($acc);
        $acc_0 = $acc.$numberLength == 1 ? $acc.$multiply0($acc) : jm_BigInteger__init_6(1, jm_Multiplication_square($acc.$digits, $acc.$numberLength, $rt_createIntArray($acc.$numberLength << 1)));
        $exponent = $exponent >> 1;
        $acc = $acc_0;
    }
    var$5 = $res.$multiply0($acc);
    return var$5;
},
jm_Multiplication_square = ($a, $aLen, $res) => {
    let $i, $carry, $i_0, $j, var$8, var$9, var$10, var$11, var$12, var$13, $index;
    jm_Multiplication_$callClinit();
    $i = 0;
    while ($i < $aLen) {
        $carry = Long_ZERO;
        $i_0 = $i + 1 | 0;
        $j = $i_0;
        while ($j < $aLen) {
            var$8 = $res.data;
            var$9 = $a.data;
            var$10 = var$9[$i];
            var$11 = var$9[$j];
            var$12 = $i + $j | 0;
            var$13 = jm_Multiplication_unsignedMultAddAdd(var$10, var$11, var$8[var$12], Long_lo($carry));
            var$8[var$12] = Long_lo(var$13);
            $carry = Long_shru(var$13, 32);
            $j = $j + 1 | 0;
        }
        $res.data[$i + $aLen | 0] = Long_lo($carry);
        $i = $i_0;
    }
    jm_BitLevel_shiftLeftOneBit($res, $res, $aLen << 1);
    $carry = Long_ZERO;
    $i = 0;
    $index = 0;
    while ($i < $aLen) {
        var$8 = $res.data;
        var$9 = $a.data;
        var$13 = jm_Multiplication_unsignedMultAddAdd(var$9[$i], var$9[$i], var$8[$index], Long_lo($carry));
        var$8[$index] = Long_lo(var$13);
        var$13 = Long_shru(var$13, 32);
        var$11 = $index + 1 | 0;
        var$13 = Long_add(var$13, Long_and(Long_fromInt(var$8[var$11]), Long_create(4294967295, 0)));
        var$8[var$11] = Long_lo(var$13);
        $carry = Long_shru(var$13, 32);
        $i = $i + 1 | 0;
        $index = var$11 + 1 | 0;
    }
    return $res;
},
jm_Multiplication_multiplyByTenPow = ($val, $exp) => {
    jm_Multiplication_$callClinit();
    return Long_ge($exp, Long_fromInt(jm_Multiplication_tenPows.data.length)) ? $val.$multiply0(jm_Multiplication_powerOf10($exp)) : jm_Multiplication_multiplyByPositiveInt($val, jm_Multiplication_tenPows.data[Long_lo($exp)]);
},
jm_Multiplication_powerOf10 = $exp => {
    let $intExp, $byteArraySize, $powerOfFive, $longExp, var$6, var$7, var$8;
    jm_Multiplication_$callClinit();
    $intExp = Long_lo($exp);
    if (Long_lt($exp, Long_fromInt(jm_Multiplication_bigTenPows.data.length)))
        return jm_Multiplication_bigTenPows.data[$intExp];
    if (Long_le($exp, Long_fromInt(50))) {
        jm_BigInteger_$callClinit();
        return jm_BigInteger_TEN.$pow0($intExp);
    }
    if (Long_le($exp, Long_fromInt(1000)))
        return (jm_Multiplication_bigFivePows.data[1].$pow0($intExp)).$shiftLeft0($intExp);
    $byteArraySize = Long_add(Long_fromInt(1), Long_fromNumber(Long_toNumber($exp) / 2.4082399653118496));
    if (Long_gt($byteArraySize, Long_fromInt(1000000)))
        $rt_throw(jl_ArithmeticException__init_($rt_s(604)));
    if (Long_le($exp, Long_fromInt(2147483647)))
        return (jm_Multiplication_bigFivePows.data[1].$pow0($intExp)).$shiftLeft0($intExp);
    $powerOfFive = jm_Multiplication_bigFivePows.data[1].$pow0(2147483647);
    $longExp = Long_sub($exp, Long_fromInt(2147483647));
    var$6 = Long_lo(Long_rem($exp, Long_fromInt(2147483647)));
    var$7 = $powerOfFive;
    var$8 = $longExp;
    while (Long_gt(var$8, Long_fromInt(2147483647))) {
        var$7 = var$7.$multiply0($powerOfFive);
        var$8 = Long_sub(var$8, Long_fromInt(2147483647));
    }
    var$7 = var$7.$multiply0(jm_Multiplication_bigFivePows.data[1].$pow0(var$6));
    var$7 = var$7.$shiftLeft0(2147483647);
    while (Long_gt($longExp, Long_fromInt(2147483647))) {
        var$7 = var$7.$shiftLeft0(2147483647);
        $longExp = Long_sub($longExp, Long_fromInt(2147483647));
    }
    var$7 = var$7.$shiftLeft0(var$6);
    return var$7;
},
jm_Multiplication_multiplyByFivePow = ($val, $exp) => {
    jm_Multiplication_$callClinit();
    if ($exp < jm_Multiplication_fivePows.data.length)
        return jm_Multiplication_multiplyByPositiveInt($val, jm_Multiplication_fivePows.data[$exp]);
    if ($exp < jm_Multiplication_bigFivePows.data.length)
        return $val.$multiply0(jm_Multiplication_bigFivePows.data[$exp]);
    return $val.$multiply0(jm_Multiplication_bigFivePows.data[1].$pow0($exp));
},
jm_Multiplication_unsignedMultAddAdd = ($a, $b, $c, $d) => {
    jm_Multiplication_$callClinit();
    return Long_add(Long_add(Long_mul(Long_and(Long_fromInt($a), Long_create(4294967295, 0)), Long_and(Long_fromInt($b), Long_create(4294967295, 0))), Long_and(Long_fromInt($c), Long_create(4294967295, 0))), Long_and(Long_fromInt($d), Long_create(4294967295, 0)));
},
jm_Multiplication__clinit_ = () => {
    let $fivePow, $i, var$3, var$4, var$5;
    jm_Multiplication_tenPows = $rt_createIntArrayFromData([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]);
    jm_Multiplication_fivePows = $rt_createIntArrayFromData([1, 5, 25, 125, 625, 3125, 15625, 78125, 390625, 1953125, 9765625, 48828125, 244140625, 1220703125]);
    jm_Multiplication_bigTenPows = $rt_createArray(jm_BigInteger, 32);
    jm_Multiplication_bigFivePows = $rt_createArray(jm_BigInteger, 32);
    $fivePow = Long_fromInt(1);
    $i = 0;
    while ($i <= 18) {
        jm_Multiplication_bigFivePows.data[$i] = jm_BigInteger_valueOf($fivePow);
        jm_Multiplication_bigTenPows.data[$i] = jm_BigInteger_valueOf(Long_shl($fivePow, $i));
        $fivePow = Long_mul($fivePow, Long_fromInt(5));
        $i = $i + 1 | 0;
    }
    while ($i < jm_Multiplication_bigTenPows.data.length) {
        var$3 = jm_Multiplication_bigFivePows.data;
        var$4 = jm_Multiplication_bigFivePows.data;
        var$5 = $i - 1 | 0;
        var$3[$i] = var$4[var$5].$multiply0(jm_Multiplication_bigFivePows.data[1]);
        jm_Multiplication_bigTenPows.data[$i] = jm_Multiplication_bigTenPows.data[var$5].$multiply0(jm_BigInteger_TEN);
        $i = $i + 1 | 0;
    }
};
function ju_AbstractList$SubAbstractList$SubAbstractListIterator() {
    let a = this; jl_Object.call(a);
    a.$subList0 = null;
    a.$iterator0 = null;
    a.$start0 = 0;
    a.$end = 0;
}
let ju_AbstractList$SubAbstractList$SubAbstractListIterator__init_ = ($this, $it, $list, $offset, $length) => {
    jl_Object__init_($this);
    $this.$iterator0 = $it;
    $this.$subList0 = $list;
    $this.$start0 = $offset;
    $this.$end = $this.$start0 + $length | 0;
},
ju_AbstractList$SubAbstractList$SubAbstractListIterator__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new ju_AbstractList$SubAbstractList$SubAbstractListIterator();
    ju_AbstractList$SubAbstractList$SubAbstractListIterator__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
ju_AbstractList$SubAbstractList$SubAbstractListIterator_hasNext = $this => {
    return $this.$iterator0.$nextIndex() >= $this.$end ? 0 : 1;
},
ju_AbstractList$SubAbstractList$SubAbstractListIterator_next = $this => {
    if ($this.$iterator0.$nextIndex() >= $this.$end)
        $rt_throw(ju_NoSuchElementException__init_());
    return $this.$iterator0.$next();
};
function ju_LinkedHashMapKeySet() {
    let a = this; ju_AbstractSet.call(a);
    a.$base = null;
    a.$reversed0 = 0;
}
let ju_LinkedHashMapKeySet__init_ = ($this, $base, $reversed) => {
    ju_AbstractSet__init_($this);
    $this.$base = $base;
    $this.$reversed0 = $reversed;
},
ju_LinkedHashMapKeySet__init_0 = (var_0, var_1) => {
    let var_2 = new ju_LinkedHashMapKeySet();
    ju_LinkedHashMapKeySet__init_(var_2, var_0, var_1);
    return var_2;
},
ju_LinkedHashMapKeySet_size = $this => {
    return $this.$base.$elementCount;
},
ju_LinkedHashMapKeySet_iterator = $this => {
    return ju_LinkedHashMapIterator$KeyIterator__init_0($this.$base, $this.$reversed0);
};
function jl_Double() {
    jl_Number.call(this);
    this.$value0 = 0.0;
}
let jl_Double_TYPE = null,
jl_Double_$callClinit = () => {
    jl_Double_$callClinit = $rt_eraseClinit(jl_Double);
    jl_Double__clinit_();
},
jl_Double__init_ = ($this, $value) => {
    jl_Double_$callClinit();
    jl_Number__init_($this);
    $this.$value0 = $value;
},
jl_Double__init_0 = var_0 => {
    let var_1 = new jl_Double();
    jl_Double__init_(var_1, var_0);
    return var_1;
},
jl_Double_doubleValue = $this => {
    return $this.$value0;
},
jl_Double_valueOf = $d => {
    jl_Double_$callClinit();
    return jl_Double__init_0($d);
},
jl_Double_parseDouble = $string => {
    let $start, $end, $negative, $c, $mantissa, $exp, $hasOneDigit, $mantissaPos, var$10, var$11, var$12, $negativeExp, $numExp, var$15;
    jl_Double_$callClinit();
    if ($string.$isEmpty())
        $rt_throw(jl_NumberFormatException__init_());
    $start = 0;
    $end = $string.$length();
    while (true) {
        if ($string.$charAt($start) > 32) {
            while ($string.$charAt($end - 1 | 0) <= 32) {
                $end = $end + (-1) | 0;
            }
            $negative = 0;
            if ($string.$charAt($start) == 45) {
                $start = $start + 1 | 0;
                $negative = 1;
            } else if ($string.$charAt($start) == 43)
                $start = $start + 1 | 0;
            if ($start == $end)
                $rt_throw(jl_NumberFormatException__init_());
            a: {
                $c = $string.$charAt($start);
                $mantissa = Long_ZERO;
                $exp = (-1);
                $hasOneDigit = 0;
                $mantissaPos = Long_create(2808348672, 232830643);
                if ($c != 46) {
                    $hasOneDigit = 1;
                    if ($c >= 48 && $c <= 57) {
                        b: {
                            while ($start < $end) {
                                if ($string.$charAt($start) != 48)
                                    break b;
                                $start = $start + 1 | 0;
                            }
                        }
                        while ($start < $end) {
                            var$10 = $string.$charAt($start);
                            if (var$10 < 48)
                                break a;
                            if (var$10 > 57)
                                break a;
                            if (Long_gt($mantissaPos, Long_ZERO)) {
                                $mantissa = Long_add($mantissa, Long_mul($mantissaPos, Long_fromInt(var$10 - 48 | 0)));
                                $mantissaPos = jl_Long_divideUnsigned($mantissaPos, Long_fromInt(10));
                            }
                            $exp = $exp + 1 | 0;
                            $start = $start + 1 | 0;
                        }
                    } else
                        $rt_throw(jl_NumberFormatException__init_());
                }
            }
            if ($start < $end && $string.$charAt($start) == 46) {
                $start = $start + 1 | 0;
                c: {
                    while (true) {
                        if ($start >= $end)
                            break c;
                        var$11 = $string.$charAt($start);
                        var$10 = $rt_compare(var$11, 48);
                        if (var$10 < 0)
                            break c;
                        if (var$11 > 57)
                            break;
                        if (Long_eq($mantissa, Long_ZERO) && !var$10)
                            $exp = $exp + (-1) | 0;
                        else if (Long_gt($mantissaPos, Long_ZERO)) {
                            $mantissa = Long_add($mantissa, Long_mul($mantissaPos, Long_fromInt(var$11 - 48 | 0)));
                            $mantissaPos = jl_Long_divideUnsigned($mantissaPos, Long_fromInt(10));
                        }
                        $start = $start + 1 | 0;
                        $hasOneDigit = 1;
                    }
                }
                if (!$hasOneDigit)
                    $rt_throw(jl_NumberFormatException__init_());
            }
            if ($start < $end) {
                var$11 = $string.$charAt($start);
                if (var$11 != 101 && var$11 != 69)
                    $rt_throw(jl_NumberFormatException__init_());
                var$12 = $start + 1 | 0;
                $negativeExp = 0;
                if (var$12 == $end)
                    $rt_throw(jl_NumberFormatException__init_());
                if ($string.$charAt(var$12) == 45) {
                    var$12 = var$12 + 1 | 0;
                    $negativeExp = 1;
                } else if ($string.$charAt(var$12) == 43)
                    var$12 = var$12 + 1 | 0;
                $numExp = 0;
                var$11 = 0;
                d: {
                    while (true) {
                        if (var$12 >= $end)
                            break d;
                        var$15 = $string.$charAt(var$12);
                        if (var$15 < 48)
                            break d;
                        if (var$15 > 57)
                            break;
                        $numExp = (10 * $numExp | 0) + (var$15 - 48 | 0) | 0;
                        var$11 = 1;
                        var$12 = var$12 + 1 | 0;
                    }
                }
                if (!var$11)
                    $rt_throw(jl_NumberFormatException__init_());
                if ($negativeExp)
                    $numExp =  -$numExp | 0;
                $exp = $exp + $numExp | 0;
            }
            return otcit_DoubleSynthesizer_synthesizeDouble($mantissa, $exp, $negative);
        }
        $start = $start + 1 | 0;
        if ($start == $end)
            break;
    }
    $rt_throw(jl_NumberFormatException__init_());
},
jl_Double_equals0 = ($this, $other) => {
    if ($this === $other)
        return 1;
    return $other instanceof jl_Double && jl_Double_equals($this.$value0, $other.$value0) ? 1 : 0;
},
jl_Double_equals = ($a, $b) => {
    jl_Double_$callClinit();
    return $rt_equalDoubles($a, $b);
},
jl_Double_hashCode = $this => {
    return jl_Double_hashCode0($this.$value0);
},
jl_Double_hashCode0 = $d => {
    let $h;
    jl_Double_$callClinit();
    $h = jl_Double_doubleToLongBits($d);
    return Long_hi($h) ^ Long_lo($h);
},
jl_Double_compare = ($a, $b) => {
    let $diff, var$4, var$5, var$6;
    jl_Double_$callClinit();
    $diff = ($a <= $b ? 0 : 1) - ($b <= $a ? 0 : 1) | 0;
    if (!$diff) {
        var$4 = 1.0 / $a;
        var$5 = 1.0 / $b;
        var$6 = (var$4 <= var$5 ? 0 : 1) - (var$5 <= var$4 ? 0 : 1) | 0;
        $diff = (var$6 + ($b !== $b ? 0 : 1) | 0) - ($a !== $a ? 0 : 1) | 0;
    }
    return $diff;
},
jl_Double_compareTo0 = ($this, $other) => {
    return jl_Double_compare($this.$value0, $other.$value0);
},
jl_Double_doubleToLongBits = $value => {
    jl_Double_$callClinit();
    if (!(isNaN($value) ? 1 : 0))
        return $rt_doubleToRawLongBits($value);
    return Long_create(0, 2146959360);
},
jl_Double_compareTo = ($this, var$1) => {
    return $this.$compareTo3(var$1);
},
jl_Double__clinit_ = () => {
    jl_Double_TYPE = $rt_cls($rt_doublecls);
},
jm_Elementary = $rt_classWithoutFields(),
jm_Elementary_compareArrays = ($a, $b, $size) => {
    let $i, var$5, var$6, var$7;
    $i = $size - 1 | 0;
    while ($i >= 0) {
        var$5 = $b.data;
        if ($a.data[$i] != var$5[$i])
            break;
        $i = $i + (-1) | 0;
    }
    if ($i < 0)
        var$6 = 0;
    else {
        var$7 = $b.data;
        var$6 = Long_ge(Long_and(Long_fromInt($a.data[$i]), Long_create(4294967295, 0)), Long_and(Long_fromInt(var$7[$i]), Long_create(4294967295, 0))) ? 1 : (-1);
    }
    return var$6;
},
jm_Elementary_add1 = ($op1, $op2) => {
    let $op1Sign, $op2Sign, $op1Len, $op2Len, $a, $b, $res, $valueLo, $valueHi, $resDigits, var$13, $cmp, var$15, $res_0;
    $op1Sign = $op1.$sign0;
    $op2Sign = $op2.$sign0;
    if (!$op1Sign)
        return $op2;
    if (!$op2Sign)
        return $op1;
    $op1Len = $op1.$numberLength;
    $op2Len = $op2.$numberLength;
    if (($op1Len + $op2Len | 0) == 2) {
        $a = Long_and(Long_fromInt($op1.$digits.data[0]), Long_create(4294967295, 0));
        $b = Long_and(Long_fromInt($op2.$digits.data[0]), Long_create(4294967295, 0));
        if ($op1Sign != $op2Sign)
            return jm_BigInteger_valueOf($op1Sign >= 0 ? Long_sub($a, $b) : Long_sub($b, $a));
        $res = Long_add($a, $b);
        $valueLo = Long_lo($res);
        $valueHi = Long_hi($res);
        return !$valueHi ? jm_BigInteger__init_0($op1Sign, $valueLo) : jm_BigInteger__init_($op1Sign, 2, $rt_createIntArrayFromData([$valueLo, $valueHi]));
    }
    if ($op1Sign == $op2Sign)
        $resDigits = $op1Len < $op2Len ? jm_Elementary_add($op2.$digits, $op2Len, $op1.$digits, $op1Len) : jm_Elementary_add($op1.$digits, $op1Len, $op2.$digits, $op2Len);
    else {
        var$13 = $rt_compare($op1Len, $op2Len);
        $cmp = !var$13 ? jm_Elementary_compareArrays($op1.$digits, $op2.$digits, $op1Len) : var$13 <= 0 ? (-1) : 1;
        if (!$cmp) {
            jm_BigInteger_$callClinit();
            return jm_BigInteger_ZERO;
        }
        if ($cmp != 1) {
            $resDigits = jm_Elementary_subtract($op2.$digits, $op2Len, $op1.$digits, $op1Len);
            $op1Sign = $op2Sign;
        } else
            $resDigits = jm_Elementary_subtract($op1.$digits, $op1Len, $op2.$digits, $op2Len);
    }
    var$15 = $resDigits.data;
    $res_0 = jm_BigInteger__init_($op1Sign, var$15.length, $resDigits);
    jm_BigInteger_cutOffLeadingZeroes($res_0);
    return $res_0;
},
jm_Elementary_add0 = ($res, $a, $aSize, $b, $bSize) => {
    let var$6, var$7, var$8, $carry, var$10, $i, var$12;
    var$6 = $res.data;
    var$7 = $b.data;
    var$8 = $a.data;
    $carry = Long_add(Long_and(Long_fromInt(var$8[0]), Long_create(4294967295, 0)), Long_and(Long_fromInt(var$7[0]), Long_create(4294967295, 0)));
    var$6[0] = Long_lo($carry);
    var$10 = Long_shr($carry, 32);
    if ($aSize < $bSize) {
        $i = 1;
        while ($i < $aSize) {
            var$12 = Long_add(var$10, Long_add(Long_and(Long_fromInt(var$8[$i]), Long_create(4294967295, 0)), Long_and(Long_fromInt(var$7[$i]), Long_create(4294967295, 0))));
            var$6[$i] = Long_lo(var$12);
            var$10 = Long_shr(var$12, 32);
            $i = $i + 1 | 0;
        }
        while ($i < $bSize) {
            var$12 = Long_add(var$10, Long_and(Long_fromInt(var$7[$i]), Long_create(4294967295, 0)));
            var$6[$i] = Long_lo(var$12);
            var$10 = Long_shr(var$12, 32);
            $i = $i + 1 | 0;
        }
    } else {
        $i = 1;
        while ($i < $bSize) {
            var$12 = Long_add(var$10, Long_add(Long_and(Long_fromInt(var$8[$i]), Long_create(4294967295, 0)), Long_and(Long_fromInt(var$7[$i]), Long_create(4294967295, 0))));
            var$6[$i] = Long_lo(var$12);
            var$10 = Long_shr(var$12, 32);
            $i = $i + 1 | 0;
        }
        while ($i < $aSize) {
            var$12 = Long_add(var$10, Long_and(Long_fromInt(var$8[$i]), Long_create(4294967295, 0)));
            var$6[$i] = Long_lo(var$12);
            var$10 = Long_shr(var$12, 32);
            $i = $i + 1 | 0;
        }
    }
    if (Long_ne(var$10, Long_ZERO))
        var$6[$i] = Long_lo(var$10);
},
jm_Elementary_subtract0 = ($op1, $op2) => {
    let $op1Sign, $op2Sign, $op1Len, $op2Len, $a, $b, var$9, $cmp, $resSign, $resDigits, var$13, $res;
    $op1Sign = $op1.$sign0;
    $op2Sign = $op2.$sign0;
    if (!$op2Sign)
        return $op1;
    if (!$op1Sign)
        return $op2.$negate();
    $op1Len = $op1.$numberLength;
    $op2Len = $op2.$numberLength;
    if (($op1Len + $op2Len | 0) == 2) {
        $a = Long_and(Long_fromInt($op1.$digits.data[0]), Long_create(4294967295, 0));
        $b = Long_and(Long_fromInt($op2.$digits.data[0]), Long_create(4294967295, 0));
        if ($op1Sign < 0)
            $a = Long_neg($a);
        if ($op2Sign < 0)
            $b = Long_neg($b);
        return jm_BigInteger_valueOf(Long_sub($a, $b));
    }
    var$9 = $rt_compare($op1Len, $op2Len);
    $cmp = !var$9 ? jm_Elementary_compareArrays($op1.$digits, $op2.$digits, $op1Len) : var$9 <= 0 ? (-1) : 1;
    if ($cmp == (-1)) {
        $resSign =  -$op2Sign | 0;
        $resDigits = $op1Sign != $op2Sign ? jm_Elementary_add($op2.$digits, $op2Len, $op1.$digits, $op1Len) : jm_Elementary_subtract($op2.$digits, $op2Len, $op1.$digits, $op1Len);
    } else if ($op1Sign != $op2Sign) {
        $resDigits = jm_Elementary_add($op1.$digits, $op1Len, $op2.$digits, $op2Len);
        $resSign = $op1Sign;
    } else {
        if (!$cmp) {
            jm_BigInteger_$callClinit();
            return jm_BigInteger_ZERO;
        }
        $resDigits = jm_Elementary_subtract($op1.$digits, $op1Len, $op2.$digits, $op2Len);
        $resSign = $op1Sign;
    }
    var$13 = $resDigits.data;
    $res = jm_BigInteger__init_($resSign, var$13.length, $resDigits);
    jm_BigInteger_cutOffLeadingZeroes($res);
    return $res;
},
jm_Elementary_subtract1 = ($res, $a, $aSize, $b, $bSize) => {
    let $borrow, $i, var$8, var$9, var$10;
    $borrow = Long_ZERO;
    $i = 0;
    while ($i < $bSize) {
        var$8 = $res.data;
        var$9 = $b.data;
        var$10 = Long_add($borrow, Long_sub(Long_and(Long_fromInt($a.data[$i]), Long_create(4294967295, 0)), Long_and(Long_fromInt(var$9[$i]), Long_create(4294967295, 0))));
        var$8[$i] = Long_lo(var$10);
        $borrow = Long_shr(var$10, 32);
        $i = $i + 1 | 0;
    }
    while ($i < $aSize) {
        var$9 = $res.data;
        var$10 = Long_add($borrow, Long_and(Long_fromInt($a.data[$i]), Long_create(4294967295, 0)));
        var$9[$i] = Long_lo(var$10);
        $borrow = Long_shr(var$10, 32);
        $i = $i + 1 | 0;
    }
},
jm_Elementary_add = ($a, $aSize, $b, $bSize) => {
    let $res;
    $res = $rt_createIntArray($aSize + 1 | 0);
    jm_Elementary_add0($res, $a, $aSize, $b, $bSize);
    return $res;
},
jm_Elementary_subtract = ($a, $aSize, $b, $bSize) => {
    let $res;
    $res = $rt_createIntArray($aSize);
    jm_Elementary_subtract1($res, $a, $aSize, $b, $bSize);
    return $res;
};
function cpcm_McqConsensusView$QuizQuestion() {
    let a = this; jl_Record.call(a);
    a.$id4 = null;
    a.$title1 = null;
    a.$context0 = null;
    a.$options0 = null;
    a.$explanation0 = null;
    a.$trap0 = null;
}
let cpcm_McqConsensusView$QuizQuestion__init_ = ($this, $id, $title, $context, $options, $explanation, $trap) => {
    jl_Record__init_($this);
    $this.$id4 = $id;
    $this.$title1 = $title;
    $this.$context0 = $context;
    $this.$options0 = $options;
    $this.$explanation0 = $explanation;
    $this.$trap0 = $trap;
},
cpcm_McqConsensusView$QuizQuestion__init_0 = (var_0, var_1, var_2, var_3, var_4, var_5) => {
    let var_6 = new cpcm_McqConsensusView$QuizQuestion();
    cpcm_McqConsensusView$QuizQuestion__init_(var_6, var_0, var_1, var_2, var_3, var_4, var_5);
    return var_6;
},
cpcm_McqConsensusView$QuizQuestion_id = $this => {
    return $this.$id4;
},
cpcm_McqConsensusView$QuizQuestion_title = $this => {
    return $this.$title1;
},
cpcm_McqConsensusView$QuizQuestion_context = $this => {
    return $this.$context0;
},
cpcm_McqConsensusView$QuizQuestion_options = $this => {
    return $this.$options0;
},
cpcm_McqConsensusView$QuizQuestion_explanation = $this => {
    return $this.$explanation0;
},
cpcm_McqConsensusView$QuizQuestion_trap = $this => {
    return $this.$trap0;
};
function cpcm_McqConsensusView$buildOptionRow$lambda$_6_0() {
    let a = this; jl_Object.call(a);
    a.$_023 = null;
    a.$_12 = null;
}
let cpcm_McqConsensusView$buildOptionRow$lambda$_6_0__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_023 = var$1;
    var$0.$_12 = var$2;
},
cpcm_McqConsensusView$buildOptionRow$lambda$_6_0__init_0 = (var_0, var_1) => {
    let var_2 = new cpcm_McqConsensusView$buildOptionRow$lambda$_6_0();
    cpcm_McqConsensusView$buildOptionRow$lambda$_6_0__init_(var_2, var_0, var_1);
    return var_2;
},
cpcm_McqConsensusView$buildOptionRow$lambda$_6_0_run = var$0 => {
    cpcm_McqConsensusView_lambda$buildOptionRow$2(var$0.$_023, var$0.$_12);
};
function cpcm_ToolType() {
    jl_Enum.call(this);
    this.$value4 = null;
}
let cpcm_ToolType_SELECT = null,
cpcm_ToolType_PEN = null,
cpcm_ToolType_RECTANGLE = null,
cpcm_ToolType_ELLIPSE = null,
cpcm_ToolType_ARROW = null,
cpcm_ToolType_STICKY = null,
cpcm_ToolType_TEXT = null,
cpcm_ToolType_ERASER = null,
cpcm_ToolType_$VALUES = null,
cpcm_ToolType_$callClinit = () => {
    cpcm_ToolType_$callClinit = $rt_eraseClinit(cpcm_ToolType);
    cpcm_ToolType__clinit_();
},
cpcm_ToolType__init_0 = ($this, var$1, var$2, $value) => {
    cpcm_ToolType_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$value4 = $value;
},
cpcm_ToolType__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cpcm_ToolType();
    cpcm_ToolType__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cpcm_ToolType_$values = () => {
    let var$1, var$2;
    cpcm_ToolType_$callClinit();
    var$1 = $rt_createArray(cpcm_ToolType, 8);
    var$2 = var$1.data;
    var$2[0] = cpcm_ToolType_SELECT;
    var$2[1] = cpcm_ToolType_PEN;
    var$2[2] = cpcm_ToolType_RECTANGLE;
    var$2[3] = cpcm_ToolType_ELLIPSE;
    var$2[4] = cpcm_ToolType_ARROW;
    var$2[5] = cpcm_ToolType_STICKY;
    var$2[6] = cpcm_ToolType_TEXT;
    var$2[7] = cpcm_ToolType_ERASER;
    return var$1;
},
cpcm_ToolType__clinit_ = () => {
    cpcm_ToolType_SELECT = cpcm_ToolType__init_($rt_s(605), 0, $rt_s(606));
    cpcm_ToolType_PEN = cpcm_ToolType__init_($rt_s(607), 1, $rt_s(608));
    cpcm_ToolType_RECTANGLE = cpcm_ToolType__init_($rt_s(609), 2, $rt_s(610));
    cpcm_ToolType_ELLIPSE = cpcm_ToolType__init_($rt_s(611), 3, $rt_s(612));
    cpcm_ToolType_ARROW = cpcm_ToolType__init_($rt_s(613), 4, $rt_s(614));
    cpcm_ToolType_STICKY = cpcm_ToolType__init_($rt_s(615), 5, $rt_s(616));
    cpcm_ToolType_TEXT = cpcm_ToolType__init_($rt_s(617), 6, $rt_s(388));
    cpcm_ToolType_ERASER = cpcm_ToolType__init_($rt_s(618), 7, $rt_s(619));
    cpcm_ToolType_$VALUES = cpcm_ToolType_$values();
};
function ju_ArrayList() {
    let a = this; ju_AbstractList.call(a);
    a.$array = null;
    a.$size1 = 0;
}
let ju_ArrayList__init_3 = $this => {
    ju_ArrayList__init_1($this, 10);
},
ju_ArrayList__init_ = () => {
    let var_0 = new ju_ArrayList();
    ju_ArrayList__init_3(var_0);
    return var_0;
},
ju_ArrayList__init_1 = ($this, $initialCapacity) => {
    ju_AbstractList__init_($this);
    if ($initialCapacity >= 0) {
        $this.$array = $rt_createArray(jl_Object, $initialCapacity);
        return;
    }
    $rt_throw(jl_IllegalArgumentException__init_());
},
ju_ArrayList__init_4 = var_0 => {
    let var_1 = new ju_ArrayList();
    ju_ArrayList__init_1(var_1, var_0);
    return var_1;
},
ju_ArrayList__init_2 = ($this, $c) => {
    let $iter, $i;
    ju_ArrayList__init_1($this, $c.$size());
    $iter = $c.$iterator();
    $i = 0;
    while ($i < $this.$array.data.length) {
        $this.$array.data[$i] = $iter.$next();
        $i = $i + 1 | 0;
    }
    $this.$size1 = $this.$array.data.length;
},
ju_ArrayList__init_0 = var_0 => {
    let var_1 = new ju_ArrayList();
    ju_ArrayList__init_2(var_1, var_0);
    return var_1;
},
ju_ArrayList_ensureCapacity = ($this, $minCapacity) => {
    let $newLength;
    if ($this.$array.data.length < $minCapacity) {
        $newLength = $this.$array.data.length >= 1073741823 ? 2147483647 : jl_Math_max($minCapacity, jl_Math_max($this.$array.data.length * 2 | 0, 5));
        $this.$array = ju_Arrays_copyOf0($this.$array, $newLength);
    }
},
ju_ArrayList_get = ($this, $index) => {
    ju_ArrayList_checkIndex($this, $index);
    return $this.$array.data[$index];
},
ju_ArrayList_size = $this => {
    return $this.$size1;
},
ju_ArrayList_set = ($this, $index, $element) => {
    let $old;
    ju_ArrayList_checkIndex($this, $index);
    $old = $this.$array.data[$index];
    $this.$array.data[$index] = $element;
    return $old;
},
ju_ArrayList_add = ($this, $element) => {
    let var$2, var$3;
    $this.$ensureCapacity($this.$size1 + 1 | 0);
    var$2 = $this.$array.data;
    var$3 = $this.$size1;
    $this.$size1 = var$3 + 1 | 0;
    var$2[var$3] = $element;
    $this.$modCount = $this.$modCount + 1 | 0;
    return 1;
},
ju_ArrayList_add0 = ($this, $index, $element) => {
    let $i;
    ju_ArrayList_checkIndexForAdd($this, $index);
    $this.$ensureCapacity($this.$size1 + 1 | 0);
    $i = $this.$size1;
    while ($i > $index) {
        $this.$array.data[$i] = $this.$array.data[$i - 1 | 0];
        $i = $i + (-1) | 0;
    }
    $this.$array.data[$index] = $element;
    $this.$size1 = $this.$size1 + 1 | 0;
    $this.$modCount = $this.$modCount + 1 | 0;
},
ju_ArrayList_remove = ($this, $i) => {
    let $old, var$3, var$4, $i_0;
    ju_ArrayList_checkIndex($this, $i);
    $old = $this.$array.data[$i];
    $this.$size1 = $this.$size1 - 1 | 0;
    while ($i < $this.$size1) {
        var$3 = $this.$array.data;
        var$4 = $this.$array.data;
        $i_0 = $i + 1 | 0;
        var$3[$i] = var$4[$i_0];
        $i = $i_0;
    }
    $this.$array.data[$this.$size1] = null;
    $this.$modCount = $this.$modCount + 1 | 0;
    return $old;
},
ju_ArrayList_remove0 = ($this, $o) => {
    let $index;
    $index = $this.$indexOf($o);
    if ($index < 0)
        return 0;
    $this.$remove($index);
    return 1;
},
ju_ArrayList_clear = $this => {
    ju_Arrays_fill($this.$array, 0, $this.$size1, null);
    $this.$size1 = 0;
    $this.$modCount = $this.$modCount + 1 | 0;
},
ju_ArrayList_checkIndex = ($this, $index) => {
    if ($index >= 0 && $index < $this.$size1)
        return;
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_ArrayList_checkIndexForAdd = ($this, $index) => {
    if ($index >= 0 && $index <= $this.$size1)
        return;
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_ArrayList_sort = ($this, $comp) => {
    ju_Arrays_sort0($this.$array, 0, $this.$size1, $comp);
    $this.$modCount = $this.$modCount + 1 | 0;
},
jm_Division = $rt_classWithoutFields(),
jm_Division_divide = ($quot, $quotLength, $a, $j, $b, $bLength) => {
    let var$7, $normA, $normB, var$10, $divisorShift, var$12, $firstDivisorDigit, $i, var$15, $product, $res, $rem, $rOverflowed, var$20, var$21, var$22, $longR, var$24, $borrow, $carry, $k;
    var$7 = $b.data;
    $normA = $rt_createIntArray($j + 1 | 0);
    $normB = $rt_createIntArray($bLength + 1 | 0);
    var$10 = $bLength - 1 | 0;
    $divisorShift = jl_Integer_numberOfLeadingZeros(var$7[var$10]);
    if ($divisorShift) {
        jm_BitLevel_shiftLeft($normB, $b, 0, $divisorShift);
        jm_BitLevel_shiftLeft($normA, $a, 0, $divisorShift);
    } else {
        jl_System_fastArraycopy($a, 0, $normA, 0, $j);
        jl_System_fastArraycopy($b, 0, $normB, 0, $bLength);
    }
    var$12 = $normB.data;
    $firstDivisorDigit = var$12[var$10];
    $i = $quotLength - 1 | 0;
    while ($i >= 0) {
        a: {
            var$7 = $normA.data;
            if (var$7[$j] == $firstDivisorDigit)
                var$15 = (-1);
            else {
                $product = Long_add(Long_shl(Long_and(Long_fromInt(var$7[$j]), Long_create(4294967295, 0)), 32), Long_and(Long_fromInt(var$7[$j - 1 | 0]), Long_create(4294967295, 0)));
                $res = jm_Division_divideLongByInt($product, $firstDivisorDigit);
                var$15 = Long_lo($res);
                $rem = Long_hi($res);
                if (var$15) {
                    $rOverflowed = 0;
                    var$15 = var$15 + 1 | 0;
                    while (true) {
                        var$15 = var$15 + (-1) | 0;
                        if ($rOverflowed)
                            break;
                        var$20 = Long_mul(Long_and(Long_fromInt(var$15), Long_create(4294967295, 0)), Long_and(Long_fromInt(var$12[$bLength - 2 | 0]), Long_create(4294967295, 0)));
                        var$21 = Long_fromInt($rem);
                        var$22 = Long_add(Long_shl(var$21, 32), Long_and(Long_fromInt(var$7[$j - 2 | 0]), Long_create(4294967295, 0)));
                        $longR = Long_add(Long_and(var$21, Long_create(4294967295, 0)), Long_and(Long_fromInt($firstDivisorDigit), Long_create(4294967295, 0)));
                        if (jl_Integer_numberOfLeadingZeros(Long_hi($longR)) >= 32)
                            $rem = Long_lo($longR);
                        else
                            $rOverflowed = 1;
                        if (Long_le(Long_xor(var$20, Long_create(0, 2147483648)), Long_xor(var$22, Long_create(0, 2147483648))))
                            break a;
                    }
                }
            }
        }
        if (var$15) {
            var$24 = $j - $bLength | 0;
            $borrow = jm_Division_multiplyAndSubtract($normA, var$24, $normB, $bLength, var$15);
            if ($borrow) {
                var$15 = var$15 + (-1) | 0;
                $carry = Long_ZERO;
                $k = 0;
                while ($k < $bLength) {
                    var$10 = var$24 + $k | 0;
                    var$21 = Long_add($carry, Long_add(Long_and(Long_fromInt(var$7[var$10]), Long_create(4294967295, 0)), Long_and(Long_fromInt(var$12[$k]), Long_create(4294967295, 0))));
                    var$7[var$10] = Long_lo(var$21);
                    $carry = Long_shru(var$21, 32);
                    $k = $k + 1 | 0;
                }
            }
        }
        if ($quot !== null)
            $quot.data[$i] = var$15;
        $j = $j + (-1) | 0;
        $i = $i + (-1) | 0;
    }
    if ($divisorShift) {
        jm_BitLevel_shiftRight0($normB, $bLength, $normA, 0, $divisorShift);
        return $normB;
    }
    jl_System_fastArraycopy($normA, 0, $normB, 0, $bLength);
    return $normA;
},
jm_Division_divideArrayByInt = ($dest, $src, $srcLength, $divisor) => {
    let $rem, $bLong, $i, var$8, $temp, $quot, $aPos, $bPos, var$13;
    $rem = Long_ZERO;
    $bLong = Long_and(Long_fromInt($divisor), Long_create(4294967295, 0));
    $i = $srcLength - 1 | 0;
    while ($i >= 0) {
        var$8 = $src.data;
        $temp = Long_or(Long_shl($rem, 32), Long_and(Long_fromInt(var$8[$i]), Long_create(4294967295, 0)));
        if (Long_ge($temp, Long_ZERO)) {
            $quot = Long_div($temp, $bLong);
            $rem = Long_rem($temp, $bLong);
        } else {
            $aPos = Long_shru($temp, 1);
            $bPos = Long_fromInt($divisor >>> 1 | 0);
            $quot = Long_div($aPos, $bPos);
            var$13 = Long_rem($aPos, $bPos);
            $rem = Long_add(Long_shl(var$13, 1), Long_and($temp, Long_fromInt(1)));
            if ($divisor & 1) {
                if (Long_le($quot, $rem))
                    $rem = Long_sub($rem, $quot);
                else if (Long_le(Long_sub($quot, $rem), $bLong)) {
                    $rem = Long_add($rem, Long_sub($bLong, $quot));
                    $quot = Long_sub($quot, Long_fromInt(1));
                } else {
                    $rem = Long_add($rem, Long_sub(Long_shl($bLong, 1), $quot));
                    $quot = Long_sub($quot, Long_fromInt(2));
                }
            }
        }
        $dest.data[$i] = Long_lo(Long_and($quot, Long_create(4294967295, 0)));
        $i = $i + (-1) | 0;
    }
    return Long_lo($rem);
},
jm_Division_divideLongByInt = ($a, $b) => {
    let $bLong, $quot, $rem, $aPos, $bPos;
    $bLong = Long_and(Long_fromInt($b), Long_create(4294967295, 0));
    if (Long_ge($a, Long_ZERO)) {
        $quot = Long_div($a, $bLong);
        $rem = Long_rem($a, $bLong);
    } else {
        $aPos = Long_shru($a, 1);
        $bPos = Long_fromInt($b >>> 1 | 0);
        $quot = Long_div($aPos, $bPos);
        $rem = Long_rem($aPos, $bPos);
        $rem = Long_add(Long_shl($rem, 1), Long_and($a, Long_fromInt(1)));
        if ($b & 1) {
            if (Long_le($quot, $rem))
                $rem = Long_sub($rem, $quot);
            else if (Long_le(Long_sub($quot, $rem), $bLong)) {
                $rem = Long_add($rem, Long_sub($bLong, $quot));
                $quot = Long_sub($quot, Long_fromInt(1));
            } else {
                $rem = Long_add($rem, Long_sub(Long_shl($bLong, 1), $quot));
                $quot = Long_sub($quot, Long_fromInt(2));
            }
        }
    }
    return Long_or(Long_shl($rem, 32), Long_and($quot, Long_create(4294967295, 0)));
},
jm_Division_divideAndRemainderByInteger = ($val, $divisor, $divisorSign) => {
    let $valDigits, $valLen, $valSign, $quotientSign, $quotientDigits, $remainderDigits, $result0, $result1, $a, $b, $quo, $rem, var$16, var$17;
    $valDigits = $val.$digits;
    $valLen = $val.$numberLength;
    $valSign = $val.$sign0;
    if ($valLen != 1) {
        $quotientSign = $valSign != $divisorSign ? (-1) : 1;
        $quotientDigits = $rt_createIntArray($valLen);
        $remainderDigits = $rt_createIntArray(1);
        $remainderDigits.data[0] = jm_Division_divideArrayByInt($quotientDigits, $valDigits, $valLen, $divisor);
        $result0 = jm_BigInteger__init_($quotientSign, $valLen, $quotientDigits);
        $result1 = jm_BigInteger__init_($valSign, 1, $remainderDigits);
        jm_BigInteger_cutOffLeadingZeroes($result0);
        jm_BigInteger_cutOffLeadingZeroes($result1);
        return $rt_wrapArray(jm_BigInteger, [$result0, $result1]);
    }
    $a = Long_and(Long_fromInt($valDigits.data[0]), Long_create(4294967295, 0));
    $b = Long_and(Long_fromInt($divisor), Long_create(4294967295, 0));
    $quo = Long_div($a, $b);
    $rem = Long_rem($a, $b);
    if ($valSign != $divisorSign)
        $quo = Long_neg($quo);
    if ($valSign < 0)
        $rem = Long_neg($rem);
    var$16 = $rt_createArray(jm_BigInteger, 2);
    var$17 = var$16.data;
    var$17[0] = jm_BigInteger_valueOf($quo);
    var$17[1] = jm_BigInteger_valueOf($rem);
    return var$16;
},
jm_Division_multiplyAndSubtract = ($a, $start, $b, $bLen, $c) => {
    let $carry0, $carry1, $i, var$9, var$10, var$11, var$12, var$13, var$14;
    $carry0 = Long_ZERO;
    $carry1 = Long_ZERO;
    $i = 0;
    while ($i < $bLen) {
        var$9 = $a.data;
        var$10 = jm_Multiplication_unsignedMultAddAdd($b.data[$i], $c, Long_lo($carry0), 0);
        var$11 = $start + $i | 0;
        var$12 = Long_add(Long_sub(Long_and(Long_fromInt(var$9[var$11]), Long_create(4294967295, 0)), Long_and(var$10, Long_create(4294967295, 0))), $carry1);
        var$9[var$11] = Long_lo(var$12);
        $carry1 = Long_shr(var$12, 32);
        $carry0 = Long_shru(var$10, 32);
        $i = $i + 1 | 0;
    }
    var$13 = $a.data;
    var$14 = $start + $bLen | 0;
    var$12 = Long_add(Long_sub(Long_and(Long_fromInt(var$13[var$14]), Long_create(4294967295, 0)), $carry0), $carry1);
    var$13[var$14] = Long_lo(var$12);
    return Long_hi(var$12);
},
jm_BitLevel = $rt_classWithoutFields(),
jm_BitLevel_bitLength = $val => {
    let $bLength, $highDigit, $i, var$5;
    if (!$val.$sign0)
        return 0;
    $bLength = $val.$numberLength << 5;
    $highDigit = $val.$digits.data[$val.$numberLength - 1 | 0];
    if ($val.$sign0 < 0) {
        $i = $val.$getFirstNonzeroDigit();
        if ($i == ($val.$numberLength - 1 | 0))
            $highDigit = $highDigit + (-1) | 0;
    }
    var$5 = $bLength - jl_Integer_numberOfLeadingZeros($highDigit) | 0;
    return var$5;
},
jm_BitLevel_shiftLeft0 = ($source, $count) => {
    let $intCount, var$4, $resLength, $resDigits, $result;
    $intCount = $count >> 5;
    var$4 = $count & 31;
    $resLength = ($source.$numberLength + $intCount | 0) + (var$4 ? 1 : 0) | 0;
    $resDigits = $rt_createIntArray($resLength);
    jm_BitLevel_shiftLeft($resDigits, $source.$digits, $intCount, var$4);
    $result = jm_BigInteger__init_($source.$sign0, $resLength, $resDigits);
    jm_BigInteger_cutOffLeadingZeroes($result);
    return $result;
},
jm_BitLevel_shiftLeft = ($result, $source, $intCount, $count) => {
    let var$5, $rightShiftCount, $i, var$8, var$9, var$10;
    a: {
        if (!$count)
            jl_System_fastArraycopy($source, 0, $result, $intCount, $result.data.length - $intCount | 0);
        else {
            var$5 = $result.data;
            $rightShiftCount = 32 - $count | 0;
            $i = var$5.length - 1 | 0;
            var$5[$i] = 0;
            while (true) {
                if ($i <= $intCount)
                    break a;
                var$8 = $source.data;
                var$9 = var$5[$i];
                var$10 = ($i - $intCount | 0) - 1 | 0;
                var$5[$i] = var$9 | (var$8[var$10] >>> $rightShiftCount | 0);
                var$5[$i - 1 | 0] = var$8[var$10] << $count;
                $i = $i + (-1) | 0;
            }
        }
    }
    $i = 0;
    while ($i < $intCount) {
        $result.data[$i] = 0;
        $i = $i + 1 | 0;
    }
},
jm_BitLevel_shiftLeftOneBit = ($result, $source, $srcLen) => {
    let $carry, $i, var$6, $val;
    $carry = 0;
    $i = 0;
    while ($i < $srcLen) {
        var$6 = $result.data;
        $val = $source.data[$i];
        var$6[$i] = $val << 1 | $carry;
        $carry = $val >>> 31 | 0;
        $i = $i + 1 | 0;
    }
    if ($carry)
        $result.data[$srcLen] = $carry;
},
jm_BitLevel_shiftLeftOneBit0 = $source => {
    let $srcLen, $resLen, $resDigits, $result;
    $srcLen = $source.$numberLength;
    $resLen = $srcLen + 1 | 0;
    $resDigits = $rt_createIntArray($resLen);
    jm_BitLevel_shiftLeftOneBit($resDigits, $source.$digits, $srcLen);
    $result = jm_BigInteger__init_($source.$sign0, $resLen, $resDigits);
    jm_BigInteger_cutOffLeadingZeroes($result);
    return $result;
},
jm_BitLevel_shiftRight = ($source, $count) => {
    let $intCount, var$4, var$5, $resLength, var$7, $resDigits, $i, var$10, var$11, var$12, $result;
    $intCount = $count >> 5;
    var$4 = $count & 31;
    if ($intCount >= $source.$numberLength) {
        if ($source.$sign0 >= 0) {
            jm_BigInteger_$callClinit();
            var$5 = jm_BigInteger_ZERO;
        } else {
            jm_BigInteger_$callClinit();
            var$5 = jm_BigInteger_MINUS_ONE;
        }
        return var$5;
    }
    a: {
        $resLength = $source.$numberLength - $intCount | 0;
        var$7 = $resLength + 1 | 0;
        $resDigits = $rt_createIntArray(var$7);
        jm_BitLevel_shiftRight0($resDigits, $resLength, $source.$digits, $intCount, var$4);
        if ($source.$sign0 >= 0)
            var$7 = $resLength;
        else {
            $i = 0;
            while (true) {
                var$10 = $rt_compare($i, $intCount);
                if (var$10 >= 0)
                    break;
                if ($source.$digits.data[$i])
                    break;
                $i = $i + 1 | 0;
            }
            if (var$10 >= 0) {
                if (var$4 <= 0) {
                    var$7 = $resLength;
                    break a;
                }
                if (!($source.$digits.data[$i] << (32 - var$4 | 0))) {
                    var$7 = $resLength;
                    break a;
                }
            }
            var$4 = 0;
            while (true) {
                var$11 = $rt_compare(var$4, $resLength);
                if (var$11 >= 0)
                    break;
                var$12 = $resDigits.data;
                if (var$12[var$4] != (-1))
                    break;
                var$12[var$4] = 0;
                var$4 = var$4 + 1 | 0;
            }
            if (var$11)
                var$7 = $resLength;
            var$12 = $resDigits.data;
            var$12[var$4] = var$12[var$4] + 1 | 0;
        }
    }
    $result = jm_BigInteger__init_($source.$sign0, var$7, $resDigits);
    jm_BigInteger_cutOffLeadingZeroes($result);
    return $result;
},
jm_BitLevel_shiftRight0 = ($result, $resultLen, $source, $intCount, $count) => {
    let $allZero, $i, var$8, $leftShiftCount, var$10, var$11, var$12;
    $allZero = 1;
    $i = 0;
    while ($i < $intCount) {
        $allZero = $allZero & ($source.data[$i] ? 0 : 1);
        $i = $i + 1 | 0;
    }
    if (!$count)
        jl_System_fastArraycopy($source, $intCount, $result, 0, $resultLen);
    else {
        var$8 = $source.data;
        $leftShiftCount = 32 - $count | 0;
        $allZero = $allZero & (var$8[$i] << $leftShiftCount ? 0 : 1);
        var$10 = 0;
        while (var$10 < ($resultLen - 1 | 0)) {
            var$11 = $result.data;
            var$12 = var$10 + $intCount | 0;
            var$11[var$10] = (var$8[var$12] >>> $count | 0) | var$8[var$12 + 1 | 0] << $leftShiftCount;
            var$10 = var$10 + 1 | 0;
        }
        $result.data[var$10] = var$8[var$10 + $intCount | 0] >>> $count | 0;
    }
    return $allZero;
};
function cpcm_OrderBookState() {
    let a = this; jl_Record.call(a);
    a.$bids1 = null;
    a.$asks1 = null;
    a.$lastTradePrice1 = 0.0;
    a.$lastTradeTimestamp0 = Long_ZERO;
    a.$midPrice0 = 0.0;
    a.$spread0 = 0.0;
}
let cpcm_OrderBookState__init_ = ($this, $bids, $asks, $lastTradePrice, $lastTradeTimestamp, $midPrice, $spread) => {
    jl_Record__init_($this);
    $this.$bids1 = $bids;
    $this.$asks1 = $asks;
    $this.$lastTradePrice1 = $lastTradePrice;
    $this.$lastTradeTimestamp0 = $lastTradeTimestamp;
    $this.$midPrice0 = $midPrice;
    $this.$spread0 = $spread;
},
cpcm_OrderBookState__init_0 = (var_0, var_1, var_2, var_3, var_4, var_5) => {
    let var_6 = new cpcm_OrderBookState();
    cpcm_OrderBookState__init_(var_6, var_0, var_1, var_2, var_3, var_4, var_5);
    return var_6;
},
cpcm_OrderBookState_bids = $this => {
    return $this.$bids1;
},
cpcm_OrderBookState_asks = $this => {
    return $this.$asks1;
},
cpcm_OrderBookState_lastTradePrice = $this => {
    return $this.$lastTradePrice1;
},
cpcm_OrderBookState_midPrice = $this => {
    return $this.$midPrice0;
},
cpcm_OrderBookState_spread = $this => {
    return $this.$spread0;
};
function cpcw_WhiteboardStudio$toolButton$lambda$_8_0() {
    let a = this; jl_Object.call(a);
    a.$_036 = null;
    a.$_15 = null;
}
let cpcw_WhiteboardStudio$toolButton$lambda$_8_0__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_036 = var$1;
    var$0.$_15 = var$2;
},
cpcw_WhiteboardStudio$toolButton$lambda$_8_0__init_0 = (var_0, var_1) => {
    let var_2 = new cpcw_WhiteboardStudio$toolButton$lambda$_8_0();
    cpcw_WhiteboardStudio$toolButton$lambda$_8_0__init_(var_2, var_0, var_1);
    return var_2;
},
cpcw_WhiteboardStudio$toolButton$lambda$_8_0_run = var$0 => {
    cpcw_WhiteboardStudio_lambda$toolButton$11(var$0.$_036, var$0.$_15);
},
cpcs_Ui$MouseHandler = $rt_classWithoutFields(0);
function ju_AbstractList$SubAbstractList() {
    let a = this; ju_AbstractList.call(a);
    a.$fullList = null;
    a.$offset = 0;
    a.$size2 = 0;
}
let ju_AbstractList$SubAbstractList__init_ = ($this, $list, $start, $end) => {
    ju_AbstractList__init_($this);
    $this.$fullList = $list;
    $this.$modCount = $this.$fullList.$modCount;
    $this.$offset = $start;
    $this.$size2 = $end - $start | 0;
},
ju_AbstractList$SubAbstractList__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new ju_AbstractList$SubAbstractList();
    ju_AbstractList$SubAbstractList__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
ju_AbstractList$SubAbstractList_get = ($this, $location) => {
    if ($this.$modCount != $this.$fullList.$modCount)
        $rt_throw(ju_ConcurrentModificationException__init_());
    if (0 <= $location && $location < $this.$size2)
        return $this.$fullList.$get0($location + $this.$offset | 0);
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_AbstractList$SubAbstractList_iterator = $this => {
    return $this.$listIterator(0);
},
ju_AbstractList$SubAbstractList_listIterator = ($this, $location) => {
    if ($this.$modCount != $this.$fullList.$modCount)
        $rt_throw(ju_ConcurrentModificationException__init_());
    if (0 <= $location && $location <= $this.$size2)
        return ju_AbstractList$SubAbstractList$SubAbstractListIterator__init_0($this.$fullList.$listIterator($location + $this.$offset | 0), $this, $this.$offset, $this.$size2);
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_AbstractList$SubAbstractList_size = $this => {
    if ($this.$modCount == $this.$fullList.$modCount)
        return $this.$size2;
    $rt_throw(ju_ConcurrentModificationException__init_());
},
ju_AbstractList$SubAbstractListRandomAccess = $rt_classWithoutFields(ju_AbstractList$SubAbstractList),
ju_AbstractList$SubAbstractListRandomAccess__init_ = ($this, $list, $start, $end) => {
    ju_AbstractList$SubAbstractList__init_($this, $list, $start, $end);
},
ju_AbstractList$SubAbstractListRandomAccess__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new ju_AbstractList$SubAbstractListRandomAccess();
    ju_AbstractList$SubAbstractListRandomAccess__init_(var_3, var_0, var_1, var_2);
    return var_3;
};
function jl_String() {
    jl_Object.call(this);
    this.$hashCode2 = 0;
}
let jl_String_EMPTY_CHARS = null,
jl_String_EMPTY = null,
jl_String_CASE_INSENSITIVE_ORDER = null,
jl_String_$callClinit = () => {
    jl_String_$callClinit = $rt_eraseClinit(jl_String);
    jl_String__clinit_();
},
jl_String__init_0 = $this => {
    jl_String_$callClinit();
    jl_Object__init_($this);
    $this.$nativeString = "";
},
jl_String__init_3 = () => {
    let var_0 = new jl_String();
    jl_String__init_0(var_0);
    return var_0;
},
jl_String__init_ = ($this, $characters) => {
    let var$2;
    jl_String_$callClinit();
    var$2 = $characters.data;
    jl_Object__init_($this);
    $this.$nativeString = $rt_charArrayToString($characters.data, 0, var$2.length);
},
jl_String__init_5 = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_(var_1, var_0);
    return var_1;
},
jl_String__init_2 = (var$0, var$1) => {
    var$0.$nativeString = var$1;
},
jl_String__init_1 = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_2(var_1, var_0);
    return var_1;
},
jl_String__init_4 = (var$0, var$1, $offset, $count) => {
    let var$4;
    jl_String_$callClinit();
    var$4 = var$1.data;
    jl_Object__init_(var$0);
    ju_Objects_checkFromIndexSize($offset, $count, var$4.length);
    var$0.$nativeString = $rt_charArrayToString(var$1.data, $offset, $count);
},
jl_String__init_6 = (var_0, var_1, var_2) => {
    let var_3 = new jl_String();
    jl_String__init_4(var_3, var_0, var_1, var_2);
    return var_3;
},
jl_String_fromArray = $characters => {
    let $s;
    jl_String_$callClinit();
    $s = jl_String__init_3();
    $s.$nativeString = $rt_fullArrayToString($characters.data);
    return $s;
},
jl_String_charAt = ($this, $index) => {
    if ($index >= 0 && $index < $this.$nativeString.length)
        return $this.$nativeString.charCodeAt($index);
    $rt_throw(jl_StringIndexOutOfBoundsException__init_());
},
jl_String_length = $this => {
    return $this.$nativeString.length;
},
jl_String_isEmpty = $this => {
    return $this.$nativeString.length ? 0 : 1;
},
jl_String_getChars = ($this, $srcBegin, $srcEnd, $dst, $dstBegin) => {
    let var$5, var$6;
    if ($srcBegin >= 0 && $srcBegin <= $srcEnd && $srcEnd <= $this.$length() && $dstBegin >= 0) {
        var$5 = $dst.data;
        var$6 = $srcEnd - $srcBegin | 0;
        if (($dstBegin + var$6 | 0) <= var$5.length) {
            $rt_stringToCharArray($this.$nativeString, $srcBegin, $dst.data, $dstBegin, var$6);
            return;
        }
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
jl_String_compareTo0 = ($this, $anotherString) => {
    let $l, $i, $a, $b, var$6;
    if ($this === $anotherString)
        return 0;
    $l = jl_Math_min($this.$length(), $anotherString.$length());
    $i = 0;
    while (true) {
        if ($i >= $l)
            return $this.$length() - $anotherString.$length() | 0;
        $a = $this.$charAt($i);
        $b = $anotherString.$charAt($i);
        var$6 = $a - $b | 0;
        if (var$6)
            break;
        $i = $i + 1 | 0;
    }
    return var$6;
},
jl_String_substring = ($this, $beginIndex, $endIndex) => {
    let $length, var$4;
    $length = $this.$nativeString.length;
    var$4 = $rt_compare($beginIndex, $endIndex);
    if (!var$4)
        return jl_String_EMPTY;
    if (!$beginIndex && $endIndex == $length)
        return $this;
    if ($beginIndex >= 0 && var$4 <= 0 && $endIndex <= $length)
        return jl_String__init_1($this.$nativeString.substring($beginIndex, $endIndex));
    $rt_throw(jl_StringIndexOutOfBoundsException__init_());
},
jl_String_substring0 = ($this, $beginIndex) => {
    return $this.$substring($beginIndex, $this.$length());
},
jl_String_toString = $this => {
    return $this;
},
jl_String_toCharArray = $this => {
    let $array, $i, var$3;
    $array = $rt_createCharArray($this.$nativeString.length);
    $i = 0;
    while (true) {
        var$3 = $array.data;
        if ($i >= var$3.length)
            break;
        var$3[$i] = $this.$charAt($i);
        $i = $i + 1 | 0;
    }
    return $array;
},
jl_String_valueOf0 = $obj => {
    jl_String_$callClinit();
    return $obj === null ? $rt_s(16) : $obj.$toString();
},
jl_String_valueOf1 = $c => {
    let var$2, var$3;
    jl_String_$callClinit();
    var$2 = new jl_String;
    var$3 = $rt_createCharArray(1);
    var$3.data[0] = $c;
    jl_String__init_(var$2, var$3);
    return var$2;
},
jl_String_valueOf = $i => {
    jl_String_$callClinit();
    return ((jl_StringBuilder__init_()).$append7($i)).$toString();
},
jl_String_equals = ($this, $other) => {
    let $str;
    if ($this === $other)
        return 1;
    if (!($other instanceof jl_String))
        return 0;
    $str = $other;
    return $this.$nativeString !== $str.$nativeString ? 0 : 1;
},
jl_String_hashCode = $this => {
    let $i;
    a: {
        if (!$this.$hashCode2) {
            $i = 0;
            while (true) {
                if ($i >= $this.$nativeString.length)
                    break a;
                $this.$hashCode2 = (31 * $this.$hashCode2 | 0) + $this.$nativeString.charCodeAt($i) | 0;
                $i = $i + 1 | 0;
            }
        }
    }
    return $this.$hashCode2;
},
jl_String_repeat = ($this, $count) => {
    let $chars, $j, $i;
    if ($count < 0)
        $rt_throw(jl_IllegalArgumentException__init_());
    if ($count == 1)
        return $this;
    if ($this.$nativeString.length && $count) {
        $chars = $rt_createCharArray($rt_imul($this.$nativeString.length, $count));
        $j = 0;
        $i = 0;
        while ($i < $count) {
            $this.$getChars(0, $this.$length(), $chars, $j);
            $j = $j + $this.$length() | 0;
            $i = $i + 1 | 0;
        }
        return jl_String_fromArray($chars);
    }
    return jl_String_EMPTY;
},
jl_String_compareTo = ($this, var$1) => {
    return $this.$compareTo4(var$1);
},
jl_String__clinit_ = () => {
    jl_String_EMPTY_CHARS = $rt_createCharArray(0);
    jl_String_EMPTY = jl_String__init_3();
    jl_String_CASE_INSENSITIVE_ORDER = jl_String$_clinit_$lambda$_115_0__init_0();
},
jl_NegativeArraySizeException = $rt_classWithoutFields(jl_RuntimeException),
jl_NegativeArraySizeException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
jl_NegativeArraySizeException__init_0 = () => {
    let var_0 = new jl_NegativeArraySizeException();
    jl_NegativeArraySizeException__init_(var_0);
    return var_0;
};
function cpcm_CanvasElement() {
    let a = this; jl_Record.call(a);
    a.$id2 = null;
    a.$type1 = null;
    a.$points0 = null;
    a.$x0 = 0.0;
    a.$y0 = 0.0;
    a.$width2 = null;
    a.$height1 = null;
    a.$color2 = null;
    a.$fillColor0 = null;
    a.$strokeWidth0 = 0.0;
    a.$text0 = null;
    a.$authorId0 = null;
    a.$authorName0 = null;
    a.$authorColor0 = null;
    a.$updatedAt0 = Long_ZERO;
}
let cpcm_CanvasElement__init_ = ($this, $id, $type, $points, $x, $y, $width, $height, $color, $fillColor, $strokeWidth, $text, $authorId, $authorName, $authorColor, $updatedAt) => {
    jl_Record__init_($this);
    $this.$id2 = $id;
    $this.$type1 = $type;
    $this.$points0 = $points;
    $this.$x0 = $x;
    $this.$y0 = $y;
    $this.$width2 = $width;
    $this.$height1 = $height;
    $this.$color2 = $color;
    $this.$fillColor0 = $fillColor;
    $this.$strokeWidth0 = $strokeWidth;
    $this.$text0 = $text;
    $this.$authorId0 = $authorId;
    $this.$authorName0 = $authorName;
    $this.$authorColor0 = $authorColor;
    $this.$updatedAt0 = $updatedAt;
},
cpcm_CanvasElement__init_0 = (var_0, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9, var_10, var_11, var_12, var_13, var_14) => {
    let var_15 = new cpcm_CanvasElement();
    cpcm_CanvasElement__init_(var_15, var_0, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9, var_10, var_11, var_12, var_13, var_14);
    return var_15;
},
cpcm_CanvasElement_id = $this => {
    return $this.$id2;
},
cpcm_CanvasElement_type = $this => {
    return $this.$type1;
},
cpcm_CanvasElement_points = $this => {
    return $this.$points0;
},
cpcm_CanvasElement_x = $this => {
    return $this.$x0;
},
cpcm_CanvasElement_y = $this => {
    return $this.$y0;
},
cpcm_CanvasElement_width = $this => {
    return $this.$width2;
},
cpcm_CanvasElement_height = $this => {
    return $this.$height1;
},
cpcm_CanvasElement_color = $this => {
    return $this.$color2;
},
cpcm_CanvasElement_fillColor = $this => {
    return $this.$fillColor0;
},
cpcm_CanvasElement_strokeWidth = $this => {
    return $this.$strokeWidth0;
},
cpcm_CanvasElement_text = $this => {
    return $this.$text0;
},
cpcm_CanvasElement_authorId = $this => {
    return $this.$authorId0;
},
cpcm_CanvasElement_authorName = $this => {
    return $this.$authorName0;
},
cpcm_CanvasElement_authorColor = $this => {
    return $this.$authorColor0;
},
cpcm_CanvasElement_updatedAt = $this => {
    return $this.$updatedAt0;
};
function cpcs_Ui$onMouse$lambda$_12_0() {
    jl_Object.call(this);
    this.$_060 = null;
}
let cpcs_Ui$onMouse$lambda$_12_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_060 = var$1;
},
cpcs_Ui$onMouse$lambda$_12_0__init_0 = var_0 => {
    let var_1 = new cpcs_Ui$onMouse$lambda$_12_0();
    cpcs_Ui$onMouse$lambda$_12_0__init_(var_1, var_0);
    return var_1;
},
cpcs_Ui$onMouse$lambda$_12_0_handleEvent = (var$0, var$1) => {
    cpcs_Ui_lambda$onMouse$4(var$0.$_060, var$1);
},
cpcs_Ui$onMouse$lambda$_12_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
},
jl_UnsupportedOperationException = $rt_classWithoutFields(jl_RuntimeException),
jl_UnsupportedOperationException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
jl_UnsupportedOperationException__init_0 = () => {
    let var_0 = new jl_UnsupportedOperationException();
    jl_UnsupportedOperationException__init_(var_0);
    return var_0;
};
function cpcj_JavaArchitectureViewer$handleCopy$lambda$_9_0() {
    let a = this; jl_Object.call(a);
    a.$_050 = null;
    a.$_110 = null;
}
let cpcj_JavaArchitectureViewer$handleCopy$lambda$_9_0__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_050 = var$1;
    var$0.$_110 = var$2;
},
cpcj_JavaArchitectureViewer$handleCopy$lambda$_9_0__init_0 = (var_0, var_1) => {
    let var_2 = new cpcj_JavaArchitectureViewer$handleCopy$lambda$_9_0();
    cpcj_JavaArchitectureViewer$handleCopy$lambda$_9_0__init_(var_2, var_0, var_1);
    return var_2;
},
cpcj_JavaArchitectureViewer$handleCopy$lambda$_9_0_call = var$0 => {
    cpcj_JavaArchitectureViewer_lambda$handleCopy$1(var$0.$_050, var$0.$_110);
},
cpcj_JavaArchitectureViewer$handleCopy$lambda$_9_0_call$exported$0 = var$1 => {
    var$1.$call();
};
function cpcm_McqConsensusView$syncCountdown$lambda$_19_0() {
    jl_Object.call(this);
    this.$_080 = null;
}
let cpcm_McqConsensusView$syncCountdown$lambda$_19_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_080 = var$1;
},
cpcm_McqConsensusView$syncCountdown$lambda$_19_0__init_0 = var_0 => {
    let var_1 = new cpcm_McqConsensusView$syncCountdown$lambda$_19_0();
    cpcm_McqConsensusView$syncCountdown$lambda$_19_0__init_(var_1, var_0);
    return var_1;
},
cpcm_McqConsensusView$syncCountdown$lambda$_19_0_call = var$0 => {
    cpcm_McqConsensusView_lambda$syncCountdown$6(var$0.$_080);
},
cpcm_McqConsensusView$syncCountdown$lambda$_19_0_call$exported$0 = var$1 => {
    var$1.$call();
},
jl_IllegalArgumentException = $rt_classWithoutFields(jl_RuntimeException),
jl_IllegalArgumentException__init_1 = $this => {
    jl_RuntimeException__init_($this);
},
jl_IllegalArgumentException__init_ = () => {
    let var_0 = new jl_IllegalArgumentException();
    jl_IllegalArgumentException__init_1(var_0);
    return var_0;
},
jl_IllegalArgumentException__init_0 = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_IllegalArgumentException__init_2 = var_0 => {
    let var_1 = new jl_IllegalArgumentException();
    jl_IllegalArgumentException__init_0(var_1, var_0);
    return var_1;
},
jl_NumberFormatException = $rt_classWithoutFields(jl_IllegalArgumentException),
jl_NumberFormatException__init_0 = $this => {
    jl_IllegalArgumentException__init_1($this);
},
jl_NumberFormatException__init_ = () => {
    let var_0 = new jl_NumberFormatException();
    jl_NumberFormatException__init_0(var_0);
    return var_0;
},
jl_NumberFormatException__init_1 = ($this, $message) => {
    jl_IllegalArgumentException__init_0($this, $message);
},
jl_NumberFormatException__init_2 = var_0 => {
    let var_1 = new jl_NumberFormatException();
    jl_NumberFormatException__init_1(var_1, var_0);
    return var_1;
};
function cpcw_WhiteboardStudio$frame$lambda$_4_0() {
    jl_Object.call(this);
    this.$_078 = null;
}
let cpcw_WhiteboardStudio$frame$lambda$_4_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_078 = var$1;
},
cpcw_WhiteboardStudio$frame$lambda$_4_0__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$frame$lambda$_4_0();
    cpcw_WhiteboardStudio$frame$lambda$_4_0__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$frame$lambda$_4_0_call = (var$0, var$1) => {
    cpcw_WhiteboardStudio_frame(var$0.$_078, var$1);
},
cpcw_WhiteboardStudio$frame$lambda$_4_0_call$exported$0 = (var$1, var$2) => {
    let var$3;
    var$3 = var$2;
    var$1.$call0(var$3);
};
function cpce_MatchingEngine() {
    let a = this; jl_Object.call(a);
    a.$bids0 = null;
    a.$asks0 = null;
    a.$orderMap = null;
    a.$trades = null;
    a.$lastTradePrice0 = 0.0;
    a.$lastTradeTimestamp = Long_ZERO;
    a.$tradeCounter = Long_ZERO;
}
let cpce_MatchingEngine__init_ = ($this, $initialMidPrice) => {
    jl_Object__init_($this);
    $this.$bids0 = ju_LinkedHashMap__init_();
    $this.$asks0 = ju_LinkedHashMap__init_();
    $this.$orderMap = ju_LinkedHashMap__init_();
    $this.$trades = ju_ArrayDeque__init_1();
    $this.$lastTradePrice0 = 100.0;
    $this.$lastTradeTimestamp = jl_System_currentTimeMillis();
    $this.$tradeCounter = Long_ZERO;
    $this.$lastTradePrice0 = $initialMidPrice;
},
cpce_MatchingEngine__init_0 = var_0 => {
    let var_1 = new cpce_MatchingEngine();
    cpce_MatchingEngine__init_(var_1, var_0);
    return var_1;
},
cpce_MatchingEngine_processOrder = ($this, $orderInput) => {
    let $timestamp, $order, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, $executedTrades;
    $timestamp = cpcm_OrderInput_timestamp($orderInput) === null ? jl_System_currentTimeMillis() : (cpcm_OrderInput_timestamp($orderInput)).$longValue();
    $order = new cpcm_Order;
    var$4 = cpcm_OrderInput_id($orderInput);
    var$5 = cpcm_OrderInput_traderId($orderInput);
    var$6 = cpcm_OrderInput_traderName($orderInput);
    var$7 = cpcm_OrderInput_side($orderInput);
    var$8 = cpcm_OrderInput_type($orderInput);
    var$9 = cpcm_OrderInput_price($orderInput);
    var$10 = cpcm_OrderInput_size($orderInput);
    cpcm_OrderStatus_$callClinit();
    var$11 = cpcm_OrderStatus_NEW;
    cpcm_Order__init_0($order, var$4, var$5, var$6, var$7, var$8, var$9, var$10, 0.0, $timestamp, var$11, cpcm_OrderInput_optionKey($orderInput));
    $executedTrades = ju_ArrayList__init_();
    var$11 = cpcm_Order_getSide($order);
    cpcm_OrderSide_$callClinit();
    if (var$11 !== cpcm_OrderSide_BUY)
        cpce_MatchingEngine_matchSellOrder($this, $order, $executedTrades);
    else
        cpce_MatchingEngine_matchBuyOrder($this, $order, $executedTrades);
    if (cpcm_Order_getFilledSize($order) === cpcm_Order_getSize($order)) {
        cpcm_Order_setStatus($order, cpcm_OrderStatus_FILLED);
        return cpce_MatchingEngine$MatchResult__init_($executedTrades, null);
    }
    var$11 = cpcm_Order_getType($order);
    cpcm_OrderType_$callClinit();
    if (var$11 !== cpcm_OrderType_MARKET) {
        cpcm_Order_setStatus($order, cpcm_Order_getFilledSize($order) <= 0.0 ? cpcm_OrderStatus_NEW : cpcm_OrderStatus_PARTIALLY_FILLED);
        cpce_MatchingEngine_insertIntoBook($this, $order);
        return cpce_MatchingEngine$MatchResult__init_($executedTrades, $order);
    }
    cpcm_Order_setStatus($order, cpcm_Order_getFilledSize($order) <= 0.0 ? cpcm_OrderStatus_REJECTED : cpcm_OrderStatus_PARTIALLY_FILLED);
    return cpce_MatchingEngine$MatchResult__init_($executedTrades, null);
},
cpce_MatchingEngine_matchBuyOrder = ($this, $incomingBuy, $executedTrades) => {
    let $sortedAskPrices, var$4, $askPrice, var$6, $ordersAtPrice, $i, $restingAsk, var$10, var$11, $matchQty, $trade, var$14, var$15, var$16, var$17, var$18, var$19;
    $sortedAskPrices = ju_ArrayList__init_0($this.$asks0.$keySet());
    $sortedAskPrices.$sort2(ju_Comparator_naturalOrder());
    var$4 = $sortedAskPrices.$iterator();
    a: {
        while (true) {
            if (!var$4.$hasNext())
                break a;
            $askPrice = (var$4.$next()).$doubleValue();
            var$6 = cpcm_Order_getType($incomingBuy);
            cpcm_OrderType_$callClinit();
            if (var$6 === cpcm_OrderType_LIMIT && $askPrice > cpcm_Order_getPrice($incomingBuy))
                break a;
            $ordersAtPrice = $this.$asks0.$get(jl_Double_valueOf($askPrice));
            if ($ordersAtPrice === null)
                continue;
            if ($ordersAtPrice.$isEmpty())
                continue;
            $i = 0;
            while ($i < $ordersAtPrice.$size() && cpcm_Order_getFilledSize($incomingBuy) < cpcm_Order_getSize($incomingBuy)) {
                $restingAsk = $ordersAtPrice.$get0($i);
                var$10 = cpcm_Order_getSize($incomingBuy) - cpcm_Order_getFilledSize($incomingBuy);
                var$11 = cpcm_Order_getSize($restingAsk) - cpcm_Order_getFilledSize($restingAsk);
                $matchQty = jl_Math_min1(var$10, var$11);
                cpcm_Order_setFilledSize($incomingBuy, cpcm_Order_getFilledSize($incomingBuy) + $matchQty);
                cpcm_Order_setFilledSize($restingAsk, cpcm_Order_getFilledSize($restingAsk) + $matchQty);
                $trade = new cpcm_Trade;
                var$14 = Long_add($this.$tradeCounter, Long_fromInt(1));
                $this.$tradeCounter = var$14;
                var$6 = jl_StringBuilder__init_();
                jl_StringBuilder_append2(jl_StringBuilder_append(var$6, $rt_s(620)), var$14);
                var$15 = jl_StringBuilder_toString(var$6);
                var$6 = cpcm_Order_getId($incomingBuy);
                var$16 = cpcm_Order_getId($restingAsk);
                var$17 = cpcm_Order_getTraderName($incomingBuy);
                var$18 = cpcm_Order_getTraderName($restingAsk);
                var$14 = jl_System_currentTimeMillis();
                cpcm_OrderSide_$callClinit();
                var$19 = cpcm_OrderSide_BUY;
                cpcm_Trade__init_($trade, var$15, var$6, var$16, var$17, var$18, $askPrice, $matchQty, var$14, var$19, cpcm_Order_getOptionKey($incomingBuy) === null ? cpcm_Order_getOptionKey($restingAsk) : cpcm_Order_getOptionKey($incomingBuy));
                cpce_MatchingEngine_recordTrade($this, $trade, $executedTrades, $askPrice);
                if (cpcm_Order_getFilledSize($restingAsk) !== cpcm_Order_getSize($restingAsk)) {
                    cpcm_OrderStatus_$callClinit();
                    cpcm_Order_setStatus($restingAsk, cpcm_OrderStatus_PARTIALLY_FILLED);
                    $i = $i + 1 | 0;
                } else {
                    cpcm_OrderStatus_$callClinit();
                    cpcm_Order_setStatus($restingAsk, cpcm_OrderStatus_FILLED);
                    $this.$orderMap.$remove1(cpcm_Order_getId($restingAsk));
                    $ordersAtPrice.$remove($i);
                }
            }
            if ($ordersAtPrice.$isEmpty())
                $this.$asks0.$remove1(jl_Double_valueOf($askPrice));
            if (cpcm_Order_getFilledSize($incomingBuy) >= cpcm_Order_getSize($incomingBuy))
                break;
        }
    }
},
cpce_MatchingEngine_matchSellOrder = ($this, $incomingSell, $executedTrades) => {
    let $sortedBidPrices, var$4, $bidPrice, var$6, $ordersAtPrice, $i, $restingBid, var$10, var$11, $matchQty, $trade, var$14, var$15, var$16, var$17, var$18, var$19;
    $sortedBidPrices = ju_ArrayList__init_0($this.$bids0.$keySet());
    $sortedBidPrices.$sort2(ju_Comparator_reverseOrder());
    var$4 = $sortedBidPrices.$iterator();
    a: {
        while (true) {
            if (!var$4.$hasNext())
                break a;
            $bidPrice = (var$4.$next()).$doubleValue();
            var$6 = cpcm_Order_getType($incomingSell);
            cpcm_OrderType_$callClinit();
            if (var$6 === cpcm_OrderType_LIMIT && $bidPrice < cpcm_Order_getPrice($incomingSell))
                break a;
            $ordersAtPrice = $this.$bids0.$get(jl_Double_valueOf($bidPrice));
            if ($ordersAtPrice === null)
                continue;
            if ($ordersAtPrice.$isEmpty())
                continue;
            $i = 0;
            while ($i < $ordersAtPrice.$size() && cpcm_Order_getFilledSize($incomingSell) < cpcm_Order_getSize($incomingSell)) {
                $restingBid = $ordersAtPrice.$get0($i);
                var$10 = cpcm_Order_getSize($incomingSell) - cpcm_Order_getFilledSize($incomingSell);
                var$11 = cpcm_Order_getSize($restingBid) - cpcm_Order_getFilledSize($restingBid);
                $matchQty = jl_Math_min1(var$10, var$11);
                cpcm_Order_setFilledSize($incomingSell, cpcm_Order_getFilledSize($incomingSell) + $matchQty);
                cpcm_Order_setFilledSize($restingBid, cpcm_Order_getFilledSize($restingBid) + $matchQty);
                $trade = new cpcm_Trade;
                var$14 = Long_add($this.$tradeCounter, Long_fromInt(1));
                $this.$tradeCounter = var$14;
                var$6 = jl_StringBuilder__init_();
                jl_StringBuilder_append2(jl_StringBuilder_append(var$6, $rt_s(620)), var$14);
                var$15 = jl_StringBuilder_toString(var$6);
                var$6 = cpcm_Order_getId($restingBid);
                var$16 = cpcm_Order_getId($incomingSell);
                var$17 = cpcm_Order_getTraderName($restingBid);
                var$18 = cpcm_Order_getTraderName($incomingSell);
                var$14 = jl_System_currentTimeMillis();
                cpcm_OrderSide_$callClinit();
                var$19 = cpcm_OrderSide_SELL;
                cpcm_Trade__init_($trade, var$15, var$6, var$16, var$17, var$18, $bidPrice, $matchQty, var$14, var$19, cpcm_Order_getOptionKey($incomingSell) === null ? cpcm_Order_getOptionKey($restingBid) : cpcm_Order_getOptionKey($incomingSell));
                cpce_MatchingEngine_recordTrade($this, $trade, $executedTrades, $bidPrice);
                if (cpcm_Order_getFilledSize($restingBid) !== cpcm_Order_getSize($restingBid)) {
                    cpcm_OrderStatus_$callClinit();
                    cpcm_Order_setStatus($restingBid, cpcm_OrderStatus_PARTIALLY_FILLED);
                    $i = $i + 1 | 0;
                } else {
                    cpcm_OrderStatus_$callClinit();
                    cpcm_Order_setStatus($restingBid, cpcm_OrderStatus_FILLED);
                    $this.$orderMap.$remove1(cpcm_Order_getId($restingBid));
                    $ordersAtPrice.$remove($i);
                }
            }
            if ($ordersAtPrice.$isEmpty())
                $this.$bids0.$remove1(jl_Double_valueOf($bidPrice));
            if (cpcm_Order_getFilledSize($incomingSell) >= cpcm_Order_getSize($incomingSell))
                break;
        }
    }
},
cpce_MatchingEngine_recordTrade = ($this, $trade, $executedTrades, $executionPrice) => {
    $executedTrades.$add1($trade);
    $this.$trades.$addFirst($trade);
    if ($this.$trades.$size() > 200)
        $this.$trades.$removeLast();
    $this.$lastTradePrice0 = $executionPrice;
    $this.$lastTradeTimestamp = cpcm_Trade_timestamp($trade);
},
cpce_MatchingEngine_insertIntoBook = ($this, $order) => {
    let var$2, $book;
    var$2 = cpcm_Order_getSide($order);
    cpcm_OrderSide_$callClinit();
    $book = var$2 !== cpcm_OrderSide_BUY ? $this.$asks0 : $this.$bids0;
    ($book.$computeIfAbsent(jl_Double_valueOf(cpcm_Order_getPrice($order)), cpce_MatchingEngine$insertIntoBook$lambda$_6_0__init_0())).$add1($order);
    $this.$orderMap.$put(cpcm_Order_getId($order), cpce_MatchingEngine$BookEntry__init_0($order, cpcm_Order_getPrice($order), cpcm_Order_getSide($order)));
},
cpce_MatchingEngine_getOrderBookState = $this => {
    return cpce_MatchingEngine_getOrderBookState0($this, 8);
},
cpce_MatchingEngine_getOrderBookState0 = ($this, $maxDepth) => {
    let $bidsLevels, $asksLevels, $bestBid, $bestAsk, $spread, $midPrice;
    $bidsLevels = cpce_MatchingEngine_buildLevels($this.$bids0, $maxDepth, ju_Comparator_reverseOrder());
    $asksLevels = cpce_MatchingEngine_buildLevels($this.$asks0, $maxDepth, ju_Comparator_naturalOrder());
    $bestBid = $bidsLevels.$isEmpty() ? $this.$lastTradePrice0 : cpcm_OrderBookLevel_price($bidsLevels.$get0(0));
    $bestAsk = $asksLevels.$isEmpty() ? $this.$lastTradePrice0 : cpcm_OrderBookLevel_price($asksLevels.$get0(0));
    $spread = jl_Math_max0(0.0, cpce_MatchingEngine_roundToCents($bestAsk - $bestBid));
    $midPrice = cpce_MatchingEngine_roundToCents(($bestBid + $bestAsk) / 2.0);
    return cpcm_OrderBookState__init_0($bidsLevels, $asksLevels, $this.$lastTradePrice0, $this.$lastTradeTimestamp, $midPrice, $spread);
},
cpce_MatchingEngine_buildLevels = ($book, $maxDepth, $priceOrder) => {
    let $prices, $depth, $levels, var$7, $price, $orders, $volume, var$11, $order;
    $prices = ju_ArrayList__init_0($book.$keySet());
    $prices.$sort2($priceOrder);
    $depth = jl_Math_max(0, jl_Math_min($maxDepth, $prices.$size()));
    $levels = ju_ArrayList__init_();
    var$7 = ($prices.$subList(0, $depth)).$iterator();
    while (var$7.$hasNext()) {
        $price = (var$7.$next()).$doubleValue();
        $orders = $book.$getOrDefault(jl_Double_valueOf($price), ju_List_of0());
        $volume = 0.0;
        var$11 = $orders.$iterator();
        while (var$11.$hasNext()) {
            $order = var$11.$next();
            $volume = $volume + cpcm_Order_getSize($order) - cpcm_Order_getFilledSize($order);
        }
        $levels.$add1(cpcm_OrderBookLevel__init_0($price, $volume, $orders.$size(), ju_ArrayList__init_0($orders)));
    }
    return $levels;
},
cpce_MatchingEngine_getRecentTrades = $this => {
    return ju_ArrayList__init_0($this.$trades);
},
cpce_MatchingEngine_roundToCents = $value => {
    let var$2;
    var$2 = jm_BigDecimal__init_1($value);
    jm_RoundingMode_$callClinit();
    return (var$2.$setScale(2, jm_RoundingMode_HALF_UP)).$doubleValue();
},
cpce_MatchingEngine_lambda$insertIntoBook$0 = $price => {
    return ju_ArrayList__init_();
},
ju_Deque = $rt_classWithoutFields(0);
function ju_ArrayDeque() {
    let a = this; ju_AbstractCollection.call(a);
    a.$version = 0;
    a.$array0 = null;
    a.$head = 0;
    a.$tail = 0;
}
let ju_ArrayDeque__init_0 = $this => {
    ju_ArrayDeque__init_($this, 8);
},
ju_ArrayDeque__init_1 = () => {
    let var_0 = new ju_ArrayDeque();
    ju_ArrayDeque__init_0(var_0);
    return var_0;
},
ju_ArrayDeque__init_ = ($this, $numElements) => {
    ju_AbstractCollection__init_($this);
    $this.$array0 = $rt_createArray(jl_Object, $numElements + 1 | 0);
},
ju_ArrayDeque__init_2 = var_0 => {
    let var_1 = new ju_ArrayDeque();
    ju_ArrayDeque__init_(var_1, var_0);
    return var_1;
},
ju_ArrayDeque_addFirst = ($this, $e) => {
    ju_Objects_requireNonNull($e);
    ju_ArrayDeque_ensureCapacity($this, $this.$size() + 1 | 0);
    $this.$head = ju_ArrayDeque_modDec($this.$head, $this.$array0.data.length);
    $this.$array0.data[$this.$head] = $e;
    $this.$version = $this.$version + 1 | 0;
},
ju_ArrayDeque_addLast = ($this, $e) => {
    ju_Objects_requireNonNull($e);
    ju_ArrayDeque_ensureCapacity($this, $this.$size() + 1 | 0);
    $this.$array0.data[$this.$tail] = $e;
    $this.$tail = ju_ArrayDeque_modInc($this.$tail, $this.$array0.data.length);
    $this.$version = $this.$version + 1 | 0;
},
ju_ArrayDeque_removeFirst = $this => {
    let $value;
    $value = $this.$pollFirst();
    if ($value !== null)
        return $value;
    $rt_throw(ju_NoSuchElementException__init_());
},
ju_ArrayDeque_removeLast = $this => {
    let $value;
    $value = $this.$pollLast();
    if ($value !== null)
        return $value;
    $rt_throw(ju_NoSuchElementException__init_());
},
ju_ArrayDeque_pollFirst = $this => {
    let $result;
    if ($this.$head == $this.$tail)
        return null;
    $result = $this.$array0.data[$this.$head];
    $this.$array0.data[$this.$head] = null;
    $this.$head = ju_ArrayDeque_modInc($this.$head, $this.$array0.data.length);
    $this.$version = $this.$version + 1 | 0;
    return $result;
},
ju_ArrayDeque_pollLast = $this => {
    let $result;
    if ($this.$head == $this.$tail)
        return null;
    $this.$tail = ju_ArrayDeque_modDec($this.$tail, $this.$array0.data.length);
    $result = $this.$array0.data[$this.$tail];
    $this.$array0.data[$this.$tail] = null;
    $this.$version = $this.$version + 1 | 0;
    return $result;
},
ju_ArrayDeque_size = $this => {
    return $this.$tail >= $this.$head ? $this.$tail - $this.$head | 0 : ($this.$array0.data.length - $this.$head | 0) + $this.$tail | 0;
},
ju_ArrayDeque_isEmpty = $this => {
    return $this.$head != $this.$tail ? 0 : 1;
},
ju_ArrayDeque_modInc = ($i, $mod) => {
    let var$3;
    var$3 = $i + 1 | 0;
    if (var$3 == $mod)
        var$3 = 0;
    return var$3;
},
ju_ArrayDeque_modDec = ($i, $mod) => {
    let var$3;
    var$3 = $i + (-1) | 0;
    if (var$3 == (-1))
        var$3 = $mod - 1 | 0;
    return var$3;
},
ju_ArrayDeque_iterator = $this => {
    return ju_ArrayDeque$1__init_0($this);
},
ju_ArrayDeque_ensureCapacity = ($this, $capacity) => {
    let $newArraySize, $newArray, $j, $i, var$6, var$7, var$8;
    if ($capacity < $this.$array0.data.length)
        return;
    $newArraySize = jl_Math_max($this.$array0.data.length * 2 | 0, (($capacity * 3 | 0) / 2 | 0) + 1 | 0);
    if ($newArraySize < 1)
        $newArraySize = 2147483647;
    $newArray = $rt_createArray(jl_Object, $newArraySize);
    $j = 0;
    if ($this.$head <= $this.$tail) {
        $i = $this.$head;
        while ($i < $this.$tail) {
            var$6 = $newArray.data;
            var$7 = $j + 1 | 0;
            var$6[$j] = $this.$array0.data[$i];
            $i = $i + 1 | 0;
            $j = var$7;
        }
    } else {
        $i = $this.$head;
        while ($i < $this.$array0.data.length) {
            var$8 = $newArray.data;
            var$7 = $j + 1 | 0;
            var$8[$j] = $this.$array0.data[$i];
            $i = $i + 1 | 0;
            $j = var$7;
        }
        $i = 0;
        while ($i < $this.$tail) {
            var$6 = $newArray.data;
            var$7 = $j + 1 | 0;
            var$6[$j] = $this.$array0.data[$i];
            $i = $i + 1 | 0;
            $j = var$7;
        }
    }
    $this.$head = 0;
    $this.$tail = $j;
    $this.$array0 = $newArray;
};
function cpcm_McqConsensusView() {
    let a = this; jl_Object.call(a);
    a.$qIndex = 0;
    a.$phase = null;
    a.$voters = null;
    a.$myName = null;
    a.$timeLeft = null;
    a.$connected = null;
    a.$notice = null;
    a.$ws0 = null;
    a.$countdownId = 0;
    a.$countdownPhase = null;
    a.$countdownTime = null;
    a.$disposed = 0;
    a.$root2 = null;
    a.$votesText = null;
    a.$leadingText = null;
    a.$leadingPctSpan = null;
    a.$correctText = null;
    a.$correctPctSpan = null;
    a.$timeText = null;
    a.$questionGroup = null;
    a.$nameInput0 = null;
    a.$titleEl = null;
    a.$contextEl = null;
    a.$optionRows = null;
    a.$statusBar = null;
    a.$statusText = null;
    a.$statusTimer = null;
    a.$noticeEl = null;
    a.$qButtons = null;
    a.$startBtn0 = null;
    a.$revealBtn = null;
    a.$nextBtn = null;
    a.$connRow = null;
    a.$aiCard = null;
    a.$aiBody = null;
}
let cpcm_McqConsensusView_KEYS = null,
cpcm_McqConsensusView_QUESTIONS = null,
cpcm_McqConsensusView_$callClinit = () => {
    cpcm_McqConsensusView_$callClinit = $rt_eraseClinit(cpcm_McqConsensusView);
    cpcm_McqConsensusView__clinit_();
},
cpcm_McqConsensusView__init_ = $this => {
    let var$1, var$2, $kpiGrid, $votesValue, var$5, $leadingValue, $correctValue, $timeValue, $mainGrid, $leftCard, $leftHeader, $nameLabel, var$13, $questionBody, $optionsWrap, $opt, $row, $rightCol, $teacherCard, var$20, $teacherTitle, $qRow, $i, $i_0, $b, $controlGrid, $aiHeader;
    cpcm_McqConsensusView_$callClinit();
    jl_Object__init_($this);
    $this.$qIndex = 0;
    $this.$phase = $rt_s(621);
    $this.$voters = ju_LinkedHashMap__init_();
    var$1 = jl_Math_floor(1000.0 + jl_Math_random() * 9000.0) | 0;
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append1(jl_StringBuilder_append(var$2, $rt_s(581)), var$1);
    $this.$myName = jl_StringBuilder_toString(var$2);
    $this.$timeLeft = null;
    $this.$connected = $rt_s(424);
    $this.$notice = null;
    $this.$countdownId = (-1);
    $this.$countdownPhase = null;
    $this.$countdownTime = null;
    $this.$disposed = 0;
    $this.$optionRows = ju_ArrayList__init_();
    $this.$qButtons = ju_ArrayList__init_();
    $this.$aiBody = ju_ArrayList__init_();
    $this.$root2 = cpcs_Ui_el($rt_s(21), $rt_s(153));
    $kpiGrid = cpcs_Ui_el($rt_s(21), $rt_s(622));
    $votesValue = cpcm_McqConsensusView_kpiCard($kpiGrid, $rt_s(623), $rt_s(376), $rt_s(164), $rt_s(158));
    $this.$votesText = cpcm_McqConsensusView_textNode($votesValue, $rt_s(159));
    var$5 = $rt_createArray(jl_Object, 1);
    var$5.data[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(160), $rt_s(624)));
    cpcs_Ui_add($votesValue, var$5);
    $leadingValue = cpcm_McqConsensusView_kpiCard($kpiGrid, $rt_s(625), $rt_s(626), $rt_s(627), $rt_s(176));
    $this.$leadingText = cpcm_McqConsensusView_textNode($leadingValue, $rt_s(628));
    $this.$leadingPctSpan = cpcs_Ui_el($rt_s(28), $rt_s(178));
    var$5 = $rt_createArray(jl_Object, 1);
    var$5.data[0] = otji_JSWrapper_wrap($this.$leadingPctSpan);
    cpcs_Ui_add($leadingValue, var$5);
    $correctValue = cpcm_McqConsensusView_kpiCard($kpiGrid, $rt_s(629), $rt_s(630), $rt_s(169), $rt_s(176));
    $this.$correctText = cpcm_McqConsensusView_textNode($correctValue, $rt_s(628));
    $this.$correctPctSpan = cpcs_Ui_el($rt_s(28), $rt_s(178));
    var$5 = $rt_createArray(jl_Object, 1);
    var$5.data[0] = otji_JSWrapper_wrap($this.$correctPctSpan);
    cpcs_Ui_add($correctValue, var$5);
    $timeValue = cpcm_McqConsensusView_kpiCard($kpiGrid, $rt_s(631), $rt_s(632), $rt_s(157), $rt_s(158));
    $this.$timeText = cpcm_McqConsensusView_textNode($timeValue, $rt_s(633));
    $mainGrid = cpcs_Ui_el($rt_s(21), $rt_s(184));
    $leftCard = cpcs_Ui_el($rt_s(21), $rt_s(634));
    $leftHeader = cpcs_Ui_el($rt_s(21), $rt_s(635));
    $this.$questionGroup = cpcs_Ui_el($rt_s(21), $rt_s(190));
    $nameLabel = cpcs_Ui_el($rt_s(258), $rt_s(636));
    var$2 = (cpcs_Ui_doc()).createTextNode("Answering as");
    $nameLabel.appendChild(var$2);
    $this.$nameInput0 = cpcs_Ui_input($rt_s(637), $rt_s(388), $this.$myName, $rt_s(24));
    $this.$nameInput0.setAttribute("aria-label", "Your name");
    cpcs_Ui_onInput($this.$nameInput0, cpcm_McqConsensusView$_init_$lambda$_0_0__init_0($this));
    var$5 = $rt_createArray(jl_Object, 1);
    var$5.data[0] = otji_JSWrapper_wrap($this.$nameInput0);
    cpcs_Ui_add($nameLabel, var$5);
    var$5 = $rt_createArray(jl_Object, 2);
    var$13 = var$5.data;
    var$13[0] = otji_JSWrapper_wrap($this.$questionGroup);
    var$13[1] = otji_JSWrapper_wrap($nameLabel);
    cpcs_Ui_add($leftHeader, var$5);
    $questionBody = cpcs_Ui_el($rt_s(21), $rt_s(638));
    $this.$titleEl = cpcs_Ui_el($rt_s(639), $rt_s(640));
    $this.$contextEl = cpcs_Ui_el($rt_s(104), $rt_s(641));
    var$5 = $rt_createArray(jl_Object, 2);
    var$13 = var$5.data;
    var$13[0] = otji_JSWrapper_wrap($this.$titleEl);
    var$13[1] = otji_JSWrapper_wrap($this.$contextEl);
    cpcs_Ui_add($questionBody, var$5);
    $optionsWrap = cpcs_Ui_el($rt_s(21), $rt_s(642));
    var$2 = (cpcm_McqConsensusView$QuizQuestion_options(cpcm_McqConsensusView_QUESTIONS.$get0(0))).$iterator();
    while (var$2.$hasNext()) {
        $opt = var$2.$next();
        $row = cpcm_McqConsensusView_buildOptionRow($this, $opt);
        $this.$optionRows.$add1($row);
        var$5 = $rt_createArray(jl_Object, 1);
        var$5.data[0] = otji_JSWrapper_wrap($row.$root0);
        cpcs_Ui_add($optionsWrap, var$5);
    }
    $this.$statusBar = cpcs_Ui_el($rt_s(21), $rt_s(24));
    $this.$statusText = cpcs_Ui_el($rt_s(28), $rt_s(24));
    $this.$statusTimer = cpcs_Ui_el($rt_s(28), $rt_s(643));
    var$2 = $this.$statusBar;
    var$5 = $rt_createArray(jl_Object, 2);
    var$13 = var$5.data;
    var$13[0] = otji_JSWrapper_wrap($this.$statusText);
    var$13[1] = otji_JSWrapper_wrap($this.$statusTimer);
    cpcs_Ui_add(var$2, var$5);
    $this.$noticeEl = cpcs_Ui_el($rt_s(21), $rt_s(644));
    var$5 = $rt_createArray(jl_Object, 5);
    var$13 = var$5.data;
    var$13[0] = otji_JSWrapper_wrap($leftHeader);
    var$13[1] = otji_JSWrapper_wrap($questionBody);
    var$13[2] = otji_JSWrapper_wrap($optionsWrap);
    var$13[3] = otji_JSWrapper_wrap($this.$statusBar);
    var$13[4] = otji_JSWrapper_wrap($this.$noticeEl);
    cpcs_Ui_add($leftCard, var$5);
    $rightCol = cpcs_Ui_el($rt_s(21), $rt_s(645));
    $teacherCard = cpcs_Ui_el($rt_s(21), $rt_s(646));
    var$20 = cpcs_Icons_svg($rt_s(376), $rt_s(188));
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, var$20), $rt_s(647));
    var$2 = jl_StringBuilder_toString(var$2);
    $teacherTitle = cpcs_Ui_html($rt_s(229), $rt_s(230), var$2);
    $qRow = cpcs_Ui_el($rt_s(21), $rt_s(190));
    $i = 0;
    while ($i < cpcm_McqConsensusView_QUESTIONS.$size()) {
        $i_0 = $i + 1 | 0;
        var$2 = jl_StringBuilder__init_();
        jl_StringBuilder_append1(jl_StringBuilder_append0(var$2, 81), $i_0);
        $b = cpcs_Ui_btn($rt_s(648), jl_StringBuilder_toString(var$2), cpcm_McqConsensusView$_init_$lambda$_0_4__init_0($this, $i));
        $this.$qButtons.$add1(otji_JSWrapper_wrap($b));
        var$5 = $rt_createArray(jl_Object, 1);
        var$5.data[0] = otji_JSWrapper_wrap($b);
        cpcs_Ui_add($qRow, var$5);
        $i = $i_0;
    }
    $controlGrid = cpcs_Ui_el($rt_s(21), $rt_s(649));
    var$20 = cpcs_Icons_svg($rt_s(290), $rt_s(292));
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, var$20), $rt_s(650));
    var$2 = jl_StringBuilder_toString(var$2);
    var$20 = cpcm_McqConsensusView$_init_$lambda$_0_1__init_0($this);
    $this.$startBtn0 = cpcs_Ui_btnHtml($rt_s(651), var$2, var$20);
    var$20 = cpcs_Icons_svg($rt_s(630), $rt_s(292));
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, var$20), $rt_s(652));
    var$2 = jl_StringBuilder_toString(var$2);
    var$20 = cpcm_McqConsensusView$_init_$lambda$_0_2__init_0($this);
    $this.$revealBtn = cpcs_Ui_btnHtml($rt_s(653), var$2, var$20);
    $this.$nextBtn = cpcs_Ui_btnHtml($rt_s(653), $rt_s(654), cpcm_McqConsensusView$_init_$lambda$_0_3__init_0($this));
    var$5 = $rt_createArray(jl_Object, 3);
    var$13 = var$5.data;
    var$13[0] = otji_JSWrapper_wrap($this.$startBtn0);
    var$13[1] = otji_JSWrapper_wrap($this.$revealBtn);
    var$13[2] = otji_JSWrapper_wrap($this.$nextBtn);
    cpcs_Ui_add($controlGrid, var$5);
    $this.$connRow = cpcs_Ui_el($rt_s(21), $rt_s(655));
    var$5 = $rt_createArray(jl_Object, 4);
    var$13 = var$5.data;
    var$13[0] = otji_JSWrapper_wrap($teacherTitle);
    var$13[1] = otji_JSWrapper_wrap($qRow);
    var$13[2] = otji_JSWrapper_wrap($controlGrid);
    var$13[3] = otji_JSWrapper_wrap($this.$connRow);
    cpcs_Ui_add($teacherCard, var$5);
    $this.$aiCard = cpcs_Ui_el($rt_s(21), $rt_s(656));
    var$20 = cpcs_Icons_svg($rt_s(657), $rt_s(188));
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, var$20), $rt_s(658));
    var$2 = jl_StringBuilder_toString(var$2);
    $aiHeader = cpcs_Ui_html($rt_s(28), $rt_s(659), var$2);
    var$20 = $this.$aiCard;
    var$5 = $rt_createArray(jl_Object, 1);
    var$5.data[0] = otji_JSWrapper_wrap($aiHeader);
    cpcs_Ui_add(var$20, var$5);
    var$5 = $rt_createArray(jl_Object, 2);
    var$13 = var$5.data;
    var$13[0] = otji_JSWrapper_wrap($teacherCard);
    var$13[1] = otji_JSWrapper_wrap($this.$aiCard);
    cpcs_Ui_add($rightCol, var$5);
    var$5 = $rt_createArray(jl_Object, 2);
    var$13 = var$5.data;
    var$13[0] = otji_JSWrapper_wrap($leftCard);
    var$13[1] = otji_JSWrapper_wrap($rightCol);
    cpcs_Ui_add($mainGrid, var$5);
    var$2 = $this.$root2;
    var$5 = $rt_createArray(jl_Object, 2);
    var$13 = var$5.data;
    var$13[0] = otji_JSWrapper_wrap($kpiGrid);
    var$13[1] = otji_JSWrapper_wrap($mainGrid);
    cpcs_Ui_add(var$2, var$5);
    cpcm_McqConsensusView_update($this);
    cpcm_McqConsensusView_connect($this);
},
cpcm_McqConsensusView__init_0 = () => {
    let var_0 = new cpcm_McqConsensusView();
    cpcm_McqConsensusView__init_(var_0);
    return var_0;
},
cpcm_McqConsensusView_root = $this => {
    return $this.$root2;
},
cpcm_McqConsensusView_onPrimaryAction = $this => {
    if ($this.$phase.$equals($rt_s(660)))
        cpcm_McqConsensusView_reveal($this);
    else if (!$this.$phase.$equals($rt_s(661)))
        cpcm_McqConsensusView_startPoll($this);
    else
        cpcm_McqConsensusView_nextQuestion($this);
},
cpcm_McqConsensusView_dispose = $this => {
    let $$je;
    $this.$disposed = 1;
    if ($this.$countdownId >= 0) {
        clearTimeout($this.$countdownId);
        $this.$countdownId = (-1);
    }
    if ($this.$ws0 !== null) {
        a: {
            try {
                cpcj_Ws_close($this.$ws0);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_RuntimeException) {
                } else {
                    throw $$e;
                }
            }
        }
        $this.$ws0 = null;
    }
},
cpcm_McqConsensusView_kpiCard = ($grid, $label, $icon, $iconCls, $valueCls) => {
    let $card, var$7, var$8, var$9, $header, $value, var$12, var$13;
    cpcm_McqConsensusView_$callClinit();
    $card = cpcs_Ui_el($rt_s(21), $rt_s(305));
    var$7 = cpcs_Icons_svg($icon, $iconCls);
    var$8 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$8, $rt_s(306)), $label), $rt_s(307)), var$7);
    var$9 = jl_StringBuilder_toString(var$8);
    $header = cpcs_Ui_html($rt_s(21), $rt_s(308), var$9);
    $value = cpcs_Ui_el($rt_s(21), $valueCls);
    var$12 = $rt_createArray(jl_Object, 2);
    var$13 = var$12.data;
    var$13[0] = otji_JSWrapper_wrap($header);
    var$13[1] = otji_JSWrapper_wrap($value);
    cpcs_Ui_add($card, var$12);
    var$12 = $rt_createArray(jl_Object, 1);
    var$12.data[0] = otji_JSWrapper_wrap($card);
    cpcs_Ui_add($grid, var$12);
    return $value;
},
cpcm_McqConsensusView_textNode = ($parent, $text) => {
    let $t;
    cpcm_McqConsensusView_$callClinit();
    $t = (cpcs_Ui_doc()).createTextNode($rt_ustr($text));
    $parent.appendChild($t);
    return $t;
},
cpcm_McqConsensusView_buildOptionRow = ($this, $opt) => {
    let $row, $content, $left, $labelCol, $meta, var$7, var$8, $right, $pctCol, $ofVotes, var$12, var$13, var$14;
    $row = cpcm_McqConsensusView$OptionRow__init_($this);
    $row.$root0 = cpcs_Ui_el($rt_s(21), $rt_s(24));
    cpcs_Ui_on($row.$root0, $rt_s(77), cpcm_McqConsensusView$buildOptionRow$lambda$_6_0__init_0($this, $opt));
    $row.$bar = cpcs_Ui_el($rt_s(21), $rt_s(24));
    $content = cpcs_Ui_el($rt_s(21), $rt_s(662));
    $left = cpcs_Ui_el($rt_s(21), $rt_s(510));
    $row.$badge = cpcs_Ui_el0($rt_s(21), $rt_s(24), cpcm_McqConsensusView$QuizOption_key($opt));
    $labelCol = cpcs_Ui_el($rt_s(21), $rt_s(663));
    $row.$label0 = cpcs_Ui_el0($rt_s(28), $rt_s(247), cpcm_McqConsensusView$QuizOption_label($opt));
    $meta = cpcs_Ui_el($rt_s(21), $rt_s(664));
    $row.$count0 = cpcs_Ui_el($rt_s(28), $rt_s(24));
    $row.$pick = cpcs_Ui_el0($rt_s(28), $rt_s(665), $rt_s(666));
    var$7 = $rt_createArray(jl_Object, 2);
    var$8 = var$7.data;
    var$8[0] = otji_JSWrapper_wrap($row.$count0);
    var$8[1] = otji_JSWrapper_wrap($row.$pick);
    cpcs_Ui_add($meta, var$7);
    var$7 = $rt_createArray(jl_Object, 2);
    var$8 = var$7.data;
    var$8[0] = otji_JSWrapper_wrap($row.$label0);
    var$8[1] = otji_JSWrapper_wrap($meta);
    cpcs_Ui_add($labelCol, var$7);
    var$7 = $rt_createArray(jl_Object, 2);
    var$8 = var$7.data;
    var$8[0] = otji_JSWrapper_wrap($row.$badge);
    var$8[1] = otji_JSWrapper_wrap($labelCol);
    cpcs_Ui_add($left, var$7);
    $right = cpcs_Ui_el($rt_s(21), $rt_s(667));
    $pctCol = cpcs_Ui_el($rt_s(21), $rt_s(663));
    $row.$pct = cpcs_Ui_el($rt_s(28), $rt_s(668));
    $ofVotes = cpcs_Ui_el0($rt_s(28), $rt_s(669), $rt_s(670));
    var$7 = $rt_createArray(jl_Object, 2);
    var$8 = var$7.data;
    var$8[0] = otji_JSWrapper_wrap($row.$pct);
    var$8[1] = otji_JSWrapper_wrap($ofVotes);
    cpcs_Ui_add($pctCol, var$7);
    var$12 = cpcs_Icons_svg($rt_s(630), $rt_s(462));
    var$13 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$13, var$12), $rt_s(671));
    var$12 = jl_StringBuilder_toString(var$13);
    $row.$correct = cpcs_Ui_html($rt_s(21), $rt_s(672), var$12);
    var$7 = $rt_createArray(jl_Object, 2);
    var$8 = var$7.data;
    var$8[0] = otji_JSWrapper_wrap($pctCol);
    var$8[1] = otji_JSWrapper_wrap($row.$correct);
    cpcs_Ui_add($right, var$7);
    var$7 = $rt_createArray(jl_Object, 2);
    var$8 = var$7.data;
    var$8[0] = otji_JSWrapper_wrap($left);
    var$8[1] = otji_JSWrapper_wrap($right);
    cpcs_Ui_add($content, var$7);
    var$14 = $row.$root0;
    var$7 = $rt_createArray(jl_Object, 2);
    var$8 = var$7.data;
    var$8[0] = otji_JSWrapper_wrap($row.$bar);
    var$8[1] = otji_JSWrapper_wrap($content);
    cpcs_Ui_add(var$14, var$7);
    return $row;
},
cpcm_McqConsensusView_startPoll = $this => {
    let $msg, var$2;
    $this.$phase = $rt_s(660);
    $this.$timeLeft = jl_Integer_valueOf(30);
    $this.$notice = null;
    $msg = cpcj_Json_obj$js_body$_1();
    $msg.type = "poll";
    $msg.room = "main";
    var$2 = cpcm_McqConsensusView_currentQuestionId($this);
    $msg.question = $rt_ustr(var$2);
    $msg.action = "open";
    cpcm_McqConsensusView_send($this, $msg);
    cpcm_McqConsensusView_update($this);
},
cpcm_McqConsensusView_reveal = $this => {
    let $msg, var$2;
    $this.$phase = $rt_s(661);
    $this.$timeLeft = null;
    $msg = cpcj_Json_obj$js_body$_1();
    $msg.type = "poll";
    $msg.room = "main";
    var$2 = cpcm_McqConsensusView_currentQuestionId($this);
    $msg.question = $rt_ustr(var$2);
    $msg.action = "reveal";
    cpcm_McqConsensusView_send($this, $msg);
    cpcm_McqConsensusView_update($this);
},
cpcm_McqConsensusView_switchQuestion = ($this, $idx) => {
    let $msg;
    if ($idx >= 0) {
        cpcm_McqConsensusView_$callClinit();
        if ($idx < cpcm_McqConsensusView_QUESTIONS.$size()) {
            $this.$qIndex = $idx;
            $this.$phase = $rt_s(621);
            $this.$timeLeft = null;
            $this.$voters.$clear0();
            $this.$notice = null;
            $msg = cpcj_Json_obj$js_body$_1();
            $msg.type = "question";
            $msg.room = "main";
            $msg.question = $rt_ustr(cpcm_McqConsensusView$QuizQuestion_id(cpcm_McqConsensusView_QUESTIONS.$get0($idx)));
            cpcm_McqConsensusView_send($this, $msg);
            cpcm_McqConsensusView_requestTally($this, cpcm_McqConsensusView$QuizQuestion_id(cpcm_McqConsensusView_QUESTIONS.$get0($idx)));
            cpcm_McqConsensusView_update($this);
            return;
        }
    }
},
cpcm_McqConsensusView_nextQuestion = $this => {
    let var$1;
    var$1 = $this.$qIndex + 1 | 0;
    cpcm_McqConsensusView_$callClinit();
    cpcm_McqConsensusView_switchQuestion($this, var$1 % cpcm_McqConsensusView_QUESTIONS.$size() | 0);
},
cpcm_McqConsensusView_castVote = ($this, $key) => {
    let var$2, $msg, var$4;
    if (!$this.$phase.$equals($rt_s(660))) {
        var$2 = !$this.$phase.$equals($rt_s(621)) ? $rt_s(673) : $rt_s(674);
        $this.$notice = var$2;
        cpcm_McqConsensusView_update($this);
        return;
    }
    $this.$voters.$put($this.$myName, $key);
    $this.$notice = null;
    $msg = cpcj_Json_obj$js_body$_1();
    $msg.type = "vote";
    $msg.room = "main";
    var$4 = cpcm_McqConsensusView_currentQuestionId($this);
    $msg.question = $rt_ustr(var$4);
    $msg.option = $rt_ustr($key);
    var$4 = $this.$myName;
    $msg.user = $rt_ustr(var$4);
    cpcm_McqConsensusView_send($this, $msg);
    cpcm_McqConsensusView_update($this);
},
cpcm_McqConsensusView_currentQuestionId = $this => {
    cpcm_McqConsensusView_$callClinit();
    return cpcm_McqConsensusView$QuizQuestion_id(cpcm_McqConsensusView_QUESTIONS.$get0($this.$qIndex));
},
cpcm_McqConsensusView_send = ($this, $msg) => {
    if ($this.$ws0 !== null && cpcj_Ws_isOpen($this.$ws0))
        cpcj_Ws_send($this.$ws0, $rt_str(JSON.stringify($msg)));
},
cpcm_McqConsensusView_requestTally = ($this, $questionId) => {
    let $msg;
    $msg = cpcj_Json_obj$js_body$_1();
    $msg.type = "tally";
    $msg.room = "main";
    $msg.question = $rt_ustr($questionId);
    cpcm_McqConsensusView_send($this, $msg);
},
cpcm_McqConsensusView_connect = $this => {
    let $host, var$2, var$3, $$je;
    a: {
        try {
            $host = $rt_str(location.hostname);
            if (!($host !== null && !$host.$isEmpty()))
                $host = $rt_s(583);
            var$2 = new cpcj_Ws;
            var$3 = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(584)), $host), $rt_s(585));
            cpcj_Ws__init_(var$2, jl_StringBuilder_toString(var$3));
            $this.$ws0 = var$2;
            cpcj_Ws_onOpen($this.$ws0, cpcm_McqConsensusView$connect$lambda$_15_0__init_0($this));
            cpcj_Ws_onMessage($this.$ws0, cpcm_McqConsensusView$connect$lambda$_15_1__init_0($this));
            cpcj_Ws_onError($this.$ws0, cpcm_McqConsensusView$connect$lambda$_15_2__init_0($this));
            cpcj_Ws_onClose($this.$ws0, cpcm_McqConsensusView$connect$lambda$_15_3__init_0($this));
            break a;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jl_RuntimeException) {
            } else {
                throw $$e;
            }
        }
        $this.$connected = $rt_s(675);
    }
},
cpcm_McqConsensusView_handleMessage = ($this, $data) => {
    let $msg, $room, $type, $qid, var$6, $user, $option, $tallyVoters, $action, $votes, $mine, $nextId, $i;
    if ($this.$disposed)
        return;
    $msg = cpcm_McqConsensusView_parseSafe$js_body$_22($rt_ustr($data));
    if ($msg === null)
        return;
    $room = $rt_str(cpcj_Json_str$js_body$_6($msg, "room"));
    if (!$room.$isEmpty() && !$room.$equals($rt_s(25)))
        return;
    a: {
        $type = $rt_str(cpcj_Json_str$js_body$_6($msg, "type"));
        $qid = cpcm_McqConsensusView_currentQuestionId($this);
        var$6 = (-1);
        switch ($type.$hashCode()) {
            case -1165870106:
                if (!$type.$equals($rt_s(676)))
                    break a;
                var$6 = 3;
                break a;
            case 3446719:
                if (!$type.$equals($rt_s(677)))
                    break a;
                var$6 = 4;
                break a;
            case 3625706:
                if (!$type.$equals($rt_s(678)))
                    break a;
                var$6 = 1;
                break a;
            case 110125420:
                if (!$type.$equals($rt_s(679)))
                    break a;
                var$6 = 2;
                break a;
            case 284874180:
                if (!$type.$equals($rt_s(586)))
                    break a;
                var$6 = 0;
                break a;
            default:
        }
    }
    b: {
        c: {
            switch (var$6) {
                case 0:
                    break;
                case 1:
                    $user = $rt_str(cpcj_Json_str$js_body$_6($msg, "user"));
                    $option = $rt_str(cpcj_Json_str$js_body$_6($msg, "option"));
                    if ($rt_str(cpcj_Json_str$js_body$_6($msg, "question")).$equals($qid) && !$user.$isEmpty() && !$option.$isEmpty()) {
                        $this.$voters.$put($user, $option);
                        cpcm_McqConsensusView_update($this);
                    }
                    break b;
                case 2:
                    $tallyVoters = cpcj_Json_getObj$js_body$_10($msg, "voters");
                    if ($rt_str(cpcj_Json_str$js_body$_6($msg, "question")).$equals($qid) && $tallyVoters !== null) {
                        cpcm_McqConsensusView_replaceVoters($this, $tallyVoters);
                        cpcm_McqConsensusView_update($this);
                    }
                    break b;
                case 3:
                    break c;
                case 4:
                    if (!$rt_str(cpcj_Json_str$js_body$_6($msg, "question")).$equals($qid))
                        break b;
                    $action = $rt_str(cpcj_Json_str$js_body$_6($msg, "action"));
                    if ($action.$equals($rt_s(660))) {
                        $this.$phase = $rt_s(660);
                        $this.$timeLeft = jl_Integer_valueOf(30);
                        $this.$notice = null;
                        cpcm_McqConsensusView_update($this);
                    } else if ($action.$equals($rt_s(680))) {
                        $this.$phase = $rt_s(661);
                        $this.$timeLeft = null;
                        cpcm_McqConsensusView_update($this);
                    }
                    break b;
                default:
                    break b;
            }
            $votes = cpcj_Json_getObj$js_body$_10($msg, "votes");
            if ($votes !== null) {
                $mine = cpcj_Json_getObj$js_body$_10($votes, $rt_ustr($qid));
                if ($mine !== null) {
                    cpcm_McqConsensusView_replaceVoters($this, $mine);
                    cpcm_McqConsensusView_update($this);
                }
            }
            break b;
        }
        d: {
            $nextId = $rt_str(cpcj_Json_str$js_body$_6($msg, "question"));
            if (!$nextId.$isEmpty()) {
                $i = 0;
                while (true) {
                    if ($i >= cpcm_McqConsensusView_QUESTIONS.$size())
                        break d;
                    if ((cpcm_McqConsensusView$QuizQuestion_id(cpcm_McqConsensusView_QUESTIONS.$get0($i))).$equals($nextId))
                        break;
                    $i = $i + 1 | 0;
                }
                $this.$qIndex = $i;
                $this.$phase = $rt_s(621);
                $this.$timeLeft = null;
                $this.$voters.$clear0();
                $this.$notice = null;
                cpcm_McqConsensusView_update($this);
            }
        }
    }
},
cpcm_McqConsensusView_replaceVoters = ($this, $obj) => {
    let $keys, $i, $user;
    $this.$voters.$clear0();
    $keys = Object.keys($obj);
    $i = 0;
    while ($i < $keys.length) {
        $user = $rt_str(cpcj_Json_arrStr$js_body$_15($keys, $i));
        $this.$voters.$put($user, $rt_str(cpcj_Json_str$js_body$_6($obj, $rt_ustr($user))));
        $i = $i + 1 | 0;
    }
},
cpcm_McqConsensusView_update = $this => {
    let $question, $tally, $totalVotes, $myVote, $correctIdx, $open, $revealed, $leadingKey, $leadingCount, $i, var$11, $leadingPct, $correctCount, $correctPct, var$15, var$16, var$17, $badgeCls, $badgeText, var$20, var$21, $opt, $row, $count, $pct, $isMine, $isCorrectRow, var$28, var$29, $correctKey, $status, $showTimer, $node, $idle, $explanation, $trap, $summary, $summaryEl;
    cpcm_McqConsensusView_$callClinit();
    $question = cpcm_McqConsensusView_QUESTIONS.$get0($this.$qIndex);
    $tally = cpcm_McqConsensusView_tallyOf($this.$voters);
    $totalVotes = $this.$voters.$size();
    $myVote = $this.$voters.$get($this.$myName);
    $correctIdx = cpcm_McqConsensusView_correctIndex($question);
    $open = $this.$phase.$equals($rt_s(660));
    $revealed = $this.$phase.$equals($rt_s(661));
    $leadingKey = null;
    $leadingCount = (-1);
    if ($totalVotes > 0) {
        $i = 0;
        while ($i < 4) {
            var$11 = $tally.data;
            if (var$11[$i] > $leadingCount) {
                $leadingCount = var$11[$i];
                $leadingKey = cpcm_McqConsensusView_KEYS.data[$i];
            }
            $i = $i + 1 | 0;
        }
    }
    $leadingPct = $leadingKey === null ? 0 : Long_lo((jl_Math_round($leadingCount * 100.0 / $totalVotes)));
    $correctCount = !$revealed ? 0 : $tally.data[$correctIdx];
    $correctPct = $revealed && $totalVotes > 0 ? Long_lo((jl_Math_round($correctCount * 100.0 / $totalVotes))) : 0;
    $this.$votesText.textContent = $rt_ustr(jl_String_valueOf($totalVotes));
    var$15 = $this.$leadingText;
    if ($leadingKey === null)
        var$16 = $rt_s(628);
    else {
        var$16 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$16, $rt_s(681)), $leadingKey);
        var$16 = jl_StringBuilder_toString(var$16);
    }
    var$15.textContent = $rt_ustr(var$16);
    cpcs_Ui_show($this.$leadingPctSpan, $leadingKey === null ? 0 : 1);
    if ($leadingKey !== null) {
        var$15 = $this.$leadingPctSpan;
        var$16 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append0(var$16, 40), $leadingPct), $rt_s(682));
        cpcs_Ui_setText(var$15, jl_StringBuilder_toString(var$16));
    }
    $this.$correctText.textContent = $rt_ustr(!$revealed ? $rt_s(628) : jl_String_valueOf($correctCount));
    cpcs_Ui_show($this.$correctPctSpan, $revealed);
    if ($revealed) {
        var$15 = $this.$correctPctSpan;
        var$16 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append0(var$16, 40), $correctPct), $rt_s(683));
        cpcs_Ui_setText(var$15, jl_StringBuilder_toString(var$16));
    }
    var$15 = $this.$timeText;
    if ($open && $this.$timeLeft !== null) {
        var$16 = $this.$timeLeft;
        var$17 = jl_StringBuilder__init_();
        jl_StringBuilder_append0(jl_StringBuilder_append(var$17, var$16), 115);
        var$16 = jl_StringBuilder_toString(var$17);
    } else
        var$16 = !$revealed ? $rt_s(633) : $rt_s(684);
    var$15.textContent = $rt_ustr(var$16);
    $badgeCls = $open ? $rt_s(685) : !$revealed ? $rt_s(686) : $rt_s(299);
    $badgeText = $open ? $rt_s(687) : !$revealed ? $rt_s(688) : $rt_s(689);
    var$15 = $this.$questionGroup;
    var$16 = cpcs_Icons_svg($rt_s(124), $rt_s(690));
    var$20 = $this.$qIndex + 1 | 0;
    var$17 = cpcm_McqConsensusView_QUESTIONS;
    var$21 = var$17.$size();
    var$17 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append(var$17, var$16), $rt_s(691)), var$20), $rt_s(692)), var$21), $rt_s(693)), $badgeCls), $rt_s(694)), $badgeText), $rt_s(307));
    var$16 = jl_StringBuilder_toString(var$17);
    cpcs_Ui_setHtml(var$15, var$16);
    cpcs_Ui_setText($this.$titleEl, cpcm_McqConsensusView$QuizQuestion_title($question));
    cpcs_Ui_setText($this.$contextEl, cpcm_McqConsensusView$QuizQuestion_context($question));
    $i = 0;
    while ($i < $this.$optionRows.$size()) {
        var$11 = $tally.data;
        $opt = (cpcm_McqConsensusView$QuizQuestion_options($question)).$get0($i);
        $row = $this.$optionRows.$get0($i);
        $count = var$11[$i];
        $pct = $totalVotes <= 0 ? 0 : Long_lo((jl_Math_round($count * 100.0 / $totalVotes)));
        $isMine = (cpcm_McqConsensusView$QuizOption_key($opt)).$equals($myVote);
        $isCorrectRow = $revealed && cpcm_McqConsensusView$QuizOption_isCorrect($opt) ? 1 : 0;
        var$15 = $row.$root0;
        var$16 = $isCorrectRow ? $rt_s(695) : !$isMine ? $rt_s(696) : $rt_s(697);
        var$17 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$17, $rt_s(698)), var$16);
        var$16 = jl_StringBuilder_toString(var$17);
        cpcs_Ui_cls(var$15, var$16);
        var$15 = $row.$bar;
        var$16 = !$isCorrectRow ? $rt_s(699) : $rt_s(700);
        var$17 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$17, $rt_s(701)), var$16);
        var$16 = jl_StringBuilder_toString(var$17);
        cpcs_Ui_cls(var$15, var$16);
        var$17 = $row.$bar;
        var$15 = jl_StringBuilder__init_();
        jl_StringBuilder_append0(jl_StringBuilder_append1(var$15, $pct), 37);
        cpcs_Ui_setStyle$js_body$_22(var$17, "width", $rt_ustr(jl_StringBuilder_toString(var$15)));
        var$17 = $row.$badge;
        var$28 = $isCorrectRow ? $rt_s(685) : !$isMine ? $rt_s(702) : $rt_s(299);
        var$15 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$15, $rt_s(703)), var$28);
        var$15 = jl_StringBuilder_toString(var$15);
        cpcs_Ui_cls(var$17, var$15);
        cpcs_Ui_setText($row.$label0, cpcm_McqConsensusView$QuizOption_label($opt));
        var$28 = $row.$count0;
        var$29 = $count != 1 ? $rt_s(704) : $rt_s(24);
        var$15 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append1(var$15, $count), $rt_s(705)), var$29);
        cpcs_Ui_setText(var$28, jl_StringBuilder_toString(var$15));
        cpcs_Ui_show($row.$pick, $isMine);
        var$16 = $row.$pct;
        var$15 = jl_StringBuilder__init_();
        jl_StringBuilder_append0(jl_StringBuilder_append1(var$15, $pct), 37);
        cpcs_Ui_setText(var$16, jl_StringBuilder_toString(var$15));
        cpcs_Ui_show($row.$correct, $isCorrectRow);
        $i = $i + 1 | 0;
    }
    var$15 = $this.$statusBar;
    var$16 = !$open ? $rt_s(706) : $rt_s(707);
    var$17 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$17, $rt_s(708)), var$16);
    var$16 = jl_StringBuilder_toString(var$17);
    cpcs_Ui_cls(var$15, var$16);
    $correctKey = cpcm_McqConsensusView_KEYS.data[$correctIdx];
    if ($open) {
        if ($myVote === null)
            $status = $rt_s(709);
        else {
            var$15 = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$15, $rt_s(710)), $myVote), $rt_s(711));
            $status = jl_StringBuilder_toString(var$15);
        }
    } else if (!$revealed)
        $status = $rt_s(712);
    else if ($myVote === null)
        $status = $rt_s(713);
    else {
        if ($myVote.$equals($correctKey))
            var$15 = $rt_s(714);
        else {
            var$15 = jl_StringBuilder__init_();
            jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(var$15, $rt_s(715)), $correctKey), 46);
            var$15 = jl_StringBuilder_toString(var$15);
        }
        var$16 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$16, $rt_s(716)), $myVote), var$15);
        $status = jl_StringBuilder_toString(var$16);
    }
    cpcs_Ui_setText($this.$statusText, $status);
    $showTimer = $open && $this.$timeLeft !== null ? 1 : 0;
    cpcs_Ui_show($this.$statusTimer, $showTimer);
    if ($showTimer) {
        var$15 = $this.$statusTimer;
        var$16 = $this.$timeLeft;
        var$17 = jl_StringBuilder__init_();
        jl_StringBuilder_append0(jl_StringBuilder_append(var$17, var$16), 115);
        cpcs_Ui_setText(var$15, jl_StringBuilder_toString(var$17));
    }
    cpcs_Ui_show($this.$noticeEl, $this.$notice === null ? 0 : 1);
    if ($this.$notice !== null)
        cpcs_Ui_setText($this.$noticeEl, $this.$notice);
    $i = 0;
    while ($i < $this.$qButtons.$size()) {
        var$28 = otji_JSWrapper_unwrap($this.$qButtons.$get0($i));
        var$15 = $this.$qIndex != $i ? $rt_s(468) : $rt_s(438);
        var$16 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$16, $rt_s(717)), var$15);
        var$15 = jl_StringBuilder_toString(var$16);
        cpcs_Ui_cls(var$28, var$15);
        $i = $i + 1 | 0;
    }
    $this.$startBtn0.disabled = !!($this.$phase.$equals($rt_s(621)) ? 0 : 1);
    $this.$revealBtn.disabled = !!($open ? 0 : 1);
    $this.$nextBtn.disabled = !!$open;
    if ($this.$connected.$equals($rt_s(592))) {
        var$15 = $this.$connRow;
        var$16 = cpcs_Icons_svg($rt_s(718), $rt_s(169));
        var$17 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$17, var$16), $rt_s(719));
        cpcs_Ui_setHtml(var$15, jl_StringBuilder_toString(var$17));
    } else if (!$this.$connected.$equals($rt_s(424))) {
        var$15 = $this.$connRow;
        var$16 = cpcs_Icons_svg($rt_s(433), $rt_s(157));
        var$17 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$17, var$16), $rt_s(720));
        cpcs_Ui_setHtml(var$15, jl_StringBuilder_toString(var$17));
    } else {
        var$15 = $this.$connRow;
        var$16 = cpcs_Icons_svg($rt_s(718), $rt_s(157));
        var$17 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$17, var$16), $rt_s(721));
        cpcs_Ui_setHtml(var$15, jl_StringBuilder_toString(var$17));
    }
    var$15 = $this.$aiBody.$iterator();
    while (var$15.$hasNext()) {
        $node = otji_JSWrapper_unwrap(var$15.$next());
        $node.remove();
    }
    $this.$aiBody.$clear0();
    if (!$revealed) {
        $idle = cpcs_Ui_el0($rt_s(104), $rt_s(722), $rt_s(723));
        $this.$aiBody.$add1(otji_JSWrapper_wrap($idle));
        var$15 = $this.$aiCard;
        var$11 = $rt_createArray(jl_Object, 1);
        var$11.data[0] = otji_JSWrapper_wrap($idle);
        cpcs_Ui_add(var$15, var$11);
    } else {
        $explanation = cpcs_Ui_el0($rt_s(104), $rt_s(724), cpcm_McqConsensusView$QuizQuestion_explanation($question));
        $trap = cpcs_Ui_el($rt_s(104), $rt_s(724));
        var$11 = $rt_createArray(jl_Object, 1);
        var$11.data[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(201), $rt_s(24), $rt_s(725)));
        cpcs_Ui_add($trap, var$11);
        $trap.appendChild((cpcs_Ui_doc()).createTextNode($rt_ustr(cpcm_McqConsensusView$QuizQuestion_trap($question))));
        if ($totalVotes <= 0)
            $summary = $rt_s(726);
        else {
            if ($correctKey.$equals($leadingKey))
                var$15 = $rt_s(727);
            else {
                var$15 = jl_StringBuilder__init_();
                jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(var$15, $rt_s(728)), $leadingKey), 46);
                var$15 = jl_StringBuilder_toString(var$15);
            }
            var$16 = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append1(var$16, $correctPct), $rt_s(729)), var$15);
            $summary = jl_StringBuilder_toString(var$16);
        }
        $summaryEl = cpcs_Ui_el0($rt_s(104), $rt_s(730), $summary);
        $this.$aiBody.$add1(otji_JSWrapper_wrap($explanation));
        $this.$aiBody.$add1(otji_JSWrapper_wrap($trap));
        $this.$aiBody.$add1(otji_JSWrapper_wrap($summaryEl));
        cpcs_Ui_add($this.$aiCard, $rt_wrapArray(jl_Object, [otji_JSWrapper_wrap($explanation), otji_JSWrapper_wrap($trap), otji_JSWrapper_wrap($summaryEl)]));
    }
    cpcm_McqConsensusView_syncCountdown($this);
},
cpcm_McqConsensusView_syncCountdown = $this => {
    let var$1, var$2, $sameState;
    a: {
        b: {
            c: {
                if ($this.$phase.$equals($this.$countdownPhase)) {
                    if ($this.$timeLeft === null) {
                        if ($this.$countdownTime !== null)
                            break c;
                        break b;
                    }
                    var$1 = $this.$timeLeft;
                    var$2 = $this.$countdownTime;
                    if (var$1.$equals(var$2))
                        break b;
                }
            }
            $sameState = 0;
            break a;
        }
        $sameState = 1;
    }
    if ($this.$countdownId >= 0 && $sameState)
        return;
    if ($this.$countdownId >= 0) {
        clearTimeout($this.$countdownId);
        $this.$countdownId = (-1);
    }
    $this.$countdownPhase = $this.$phase;
    $this.$countdownTime = $this.$timeLeft;
    if ($this.$phase.$equals($rt_s(660)) && $this.$timeLeft !== null) {
        if ($this.$timeLeft.$intValue() <= 0) {
            cpcm_McqConsensusView_reveal($this);
            return;
        }
        $this.$countdownId = setTimeout(otji_JS_function(otji_JSWrapper_unwrap(cpcm_McqConsensusView$syncCountdown$lambda$_19_0__init_0($this)), "call"), 1000);
        return;
    }
},
cpcm_McqConsensusView_tallyOf = $voters => {
    let $tally, var$3, $v, var$5, var$6;
    cpcm_McqConsensusView_$callClinit();
    $tally = $rt_createIntArray(4);
    var$3 = ($voters.$values1()).$iterator();
    while (var$3.$hasNext()) {
        $v = var$3.$next();
        if ($v.$length() == 1 && $v.$charAt(0) >= 65 && $v.$charAt(0) <= 68) {
            var$5 = $tally.data;
            var$6 = $v.$charAt(0) - 65 | 0;
            var$5[var$6] = var$5[var$6] + 1 | 0;
        }
    }
    return $tally;
},
cpcm_McqConsensusView_correctIndex = $question => {
    let $i;
    cpcm_McqConsensusView_$callClinit();
    $i = 0;
    while (true) {
        if ($i >= (cpcm_McqConsensusView$QuizQuestion_options($question)).$size())
            return 0;
        if (cpcm_McqConsensusView$QuizOption_isCorrect((cpcm_McqConsensusView$QuizQuestion_options($question)).$get0($i)))
            break;
        $i = $i + 1 | 0;
    }
    return $i;
},
cpcm_McqConsensusView_lambda$syncCountdown$6 = $this => {
    if ($this.$timeLeft !== null) {
        $this.$timeLeft = jl_Integer_valueOf($this.$timeLeft.$intValue() - 1 | 0);
        cpcm_McqConsensusView_update($this);
    }
},
cpcm_McqConsensusView_lambda$connect$5 = $this => {
    if ($this.$disposed)
        return;
    if ($this.$connected.$equals($rt_s(592)))
        $this.$connected = $rt_s(675);
    cpcm_McqConsensusView_update($this);
},
cpcm_McqConsensusView_lambda$connect$4 = $this => {
    if ($this.$disposed)
        return;
    $this.$connected = $rt_s(675);
    cpcm_McqConsensusView_update($this);
},
cpcm_McqConsensusView_lambda$connect$3 = $this => {
    let $join, var$2;
    if ($this.$disposed)
        return;
    $this.$connected = $rt_s(592);
    $join = cpcj_Json_obj$js_body$_1();
    $join.type = "join";
    $join.room = "main";
    var$2 = $this.$myName;
    $join.user = $rt_ustr(var$2);
    $join.color = "#0000CD";
    cpcm_McqConsensusView_send($this, $join);
    cpcm_McqConsensusView_requestTally($this, cpcm_McqConsensusView_currentQuestionId($this));
    cpcm_McqConsensusView_update($this);
},
cpcm_McqConsensusView_lambda$buildOptionRow$2 = ($this, $opt) => {
    cpcm_McqConsensusView_castVote($this, cpcm_McqConsensusView$QuizOption_key($opt));
},
cpcm_McqConsensusView_lambda$new$1 = ($this, $idx) => {
    cpcm_McqConsensusView_switchQuestion($this, $idx);
},
cpcm_McqConsensusView_lambda$new$0 = ($this, $next) => {
    if ($next.$length() > 20)
        $next = $next.$substring(0, 20);
    if ($next.$isEmpty())
        $next = $rt_s(731);
    $this.$myName = $next;
    if (!$rt_str($this.$nameInput0.value).$equals($next))
        $this.$nameInput0.value = $rt_ustr($next);
    cpcm_McqConsensusView_update($this);
},
cpcm_McqConsensusView__clinit_ = () => {
    let var$1, var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11;
    cpcm_McqConsensusView_KEYS = $rt_wrapArray(jl_String, [$rt_s(732), $rt_s(733), $rt_s(734), $rt_s(735)]);
    var$1 = new cpcm_McqConsensusView$QuizQuestion;
    var$2 = cpcm_McqConsensusView$QuizOption__init_($rt_s(732), $rt_s(736), 1);
    var$3 = cpcm_McqConsensusView$QuizOption__init_($rt_s(733), $rt_s(737), 0);
    var$4 = cpcm_McqConsensusView$QuizOption__init_($rt_s(734), $rt_s(738), 0);
    var$5 = cpcm_McqConsensusView$QuizOption__init_($rt_s(735), $rt_s(739), 0);
    cpcm_McqConsensusView$QuizQuestion__init_(var$1, $rt_s(740), $rt_s(741), $rt_s(742), ju_List_of(var$2, var$3, var$4, var$5), $rt_s(743), $rt_s(744));
    var$6 = new cpcm_McqConsensusView$QuizQuestion;
    var$3 = cpcm_McqConsensusView$QuizOption__init_($rt_s(732), $rt_s(745), 1);
    var$4 = cpcm_McqConsensusView$QuizOption__init_($rt_s(733), $rt_s(746), 0);
    var$7 = cpcm_McqConsensusView$QuizOption__init_($rt_s(734), $rt_s(747), 0);
    var$8 = cpcm_McqConsensusView$QuizOption__init_($rt_s(735), $rt_s(748), 0);
    cpcm_McqConsensusView$QuizQuestion__init_(var$6, $rt_s(749), $rt_s(750), $rt_s(751), ju_List_of(var$3, var$4, var$7, var$8), $rt_s(752), $rt_s(753));
    var$2 = new cpcm_McqConsensusView$QuizQuestion;
    var$8 = cpcm_McqConsensusView$QuizOption__init_($rt_s(732), $rt_s(754), 1);
    var$5 = cpcm_McqConsensusView$QuizOption__init_($rt_s(733), $rt_s(755), 0);
    var$9 = cpcm_McqConsensusView$QuizOption__init_($rt_s(734), $rt_s(756), 0);
    var$10 = cpcm_McqConsensusView$QuizOption__init_($rt_s(735), $rt_s(757), 0);
    cpcm_McqConsensusView$QuizQuestion__init_(var$2, $rt_s(758), $rt_s(759), $rt_s(760), ju_List_of(var$8, var$5, var$9, var$10), $rt_s(761), $rt_s(762));
    var$3 = new cpcm_McqConsensusView$QuizQuestion;
    var$5 = cpcm_McqConsensusView$QuizOption__init_($rt_s(732), $rt_s(763), 1);
    var$9 = cpcm_McqConsensusView$QuizOption__init_($rt_s(733), $rt_s(764), 0);
    var$10 = cpcm_McqConsensusView$QuizOption__init_($rt_s(734), $rt_s(765), 0);
    var$11 = cpcm_McqConsensusView$QuizOption__init_($rt_s(735), $rt_s(766), 0);
    cpcm_McqConsensusView$QuizQuestion__init_(var$3, $rt_s(767), $rt_s(768), $rt_s(769), ju_List_of(var$5, var$9, var$10, var$11), $rt_s(770), $rt_s(771));
    cpcm_McqConsensusView_QUESTIONS = ju_List_of(var$1, var$6, var$2, var$3);
},
cpcm_McqConsensusView_parseSafe$js_body$_22 = var$1 => {
    try {
        return JSON.parse(var$1);
    } catch (e){
        return null;
    }
};
function cpcj_Ws$onMessage$lambda$_2_0() {
    jl_Object.call(this);
    this.$_01 = null;
}
let cpcj_Ws$onMessage$lambda$_2_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_01 = var$1;
},
cpcj_Ws$onMessage$lambda$_2_0__init_0 = var_0 => {
    let var_1 = new cpcj_Ws$onMessage$lambda$_2_0();
    cpcj_Ws$onMessage$lambda$_2_0__init_(var_1, var_0);
    return var_1;
},
cpcj_Ws$onMessage$lambda$_2_0_call = (var$0, var$1) => {
    var$0.$_01.$onMessage0(var$1);
},
cpcj_Ws$onMessage$lambda$_2_0_call$exported$0 = (var$1, var$2) => {
    var$2 = $rt_str(var$2);
    var$1.$call1(var$2);
};
function cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_6() {
    let a = this; jl_Object.call(a);
    a.$_062 = null;
    a.$_112 = null;
}
let cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_6__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_062 = var$1;
    var$0.$_112 = var$2;
},
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_6__init_0 = (var_0, var_1) => {
    let var_2 = new cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_6();
    cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_6__init_(var_2, var_0, var_1);
    return var_2;
},
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_6_run = var$0 => {
    cpcw_WhiteboardStudio_lambda$rebuildToolbar$10(var$0.$_062, var$0.$_112);
};
function cpce_MatchingEngineStudio$_init_$lambda$_0_0() {
    jl_Object.call(this);
    this.$_043 = null;
}
let cpce_MatchingEngineStudio$_init_$lambda$_0_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_043 = var$1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_0__init_0 = var_0 => {
    let var_1 = new cpce_MatchingEngineStudio$_init_$lambda$_0_0();
    cpce_MatchingEngineStudio$_init_$lambda$_0_0__init_(var_1, var_0);
    return var_1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_0_handle = (var$0, var$1) => {
    cpce_MatchingEngineStudio_lambda$new$0(var$0.$_043, var$1);
};
function cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_5() {
    jl_Object.call(this);
    this.$_087 = null;
}
let cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_5__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_087 = var$1;
},
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_5__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_5();
    cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_5__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_5_run = var$0 => {
    cpcw_WhiteboardStudio_handleExportJson(var$0.$_087);
};
function cpce_MatchingEngineStudio$_init_$lambda$_0_1() {
    jl_Object.call(this);
    this.$_015 = null;
}
let cpce_MatchingEngineStudio$_init_$lambda$_0_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_015 = var$1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_1__init_0 = var_0 => {
    let var_1 = new cpce_MatchingEngineStudio$_init_$lambda$_0_1();
    cpce_MatchingEngineStudio$_init_$lambda$_0_1__init_(var_1, var_0);
    return var_1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_1_handle = (var$0, var$1) => {
    cpce_MatchingEngineStudio_lambda$new$1(var$0.$_015, var$1);
};
function cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_4() {
    jl_Object.call(this);
    this.$_020 = null;
}
let cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_4__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_020 = var$1;
},
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_4__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_4();
    cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_4__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_4_run = var$0 => {
    cpcw_WhiteboardStudio_handleExportPng(var$0.$_020);
};
function cpce_MatchingEngineStudio$_init_$lambda$_0_2() {
    jl_Object.call(this);
    this.$_085 = null;
}
let cpce_MatchingEngineStudio$_init_$lambda$_0_2__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_085 = var$1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_2__init_0 = var_0 => {
    let var_1 = new cpce_MatchingEngineStudio$_init_$lambda$_0_2();
    cpce_MatchingEngineStudio$_init_$lambda$_0_2__init_(var_1, var_0);
    return var_1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_2_run = var$0 => {
    cpce_MatchingEngineStudio_lambda$new$2(var$0.$_085);
};
function cpce_MatchingEngineStudio$_init_$lambda$_0_3() {
    jl_Object.call(this);
    this.$_057 = null;
}
let cpce_MatchingEngineStudio$_init_$lambda$_0_3__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_057 = var$1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_3__init_0 = var_0 => {
    let var_1 = new cpce_MatchingEngineStudio$_init_$lambda$_0_3();
    cpce_MatchingEngineStudio$_init_$lambda$_0_3__init_(var_1, var_0);
    return var_1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_3_run = var$0 => {
    cpce_MatchingEngineStudio_lambda$new$3(var$0.$_057);
};
function cpce_MatchingEngineStudio$_init_$lambda$_0_4() {
    jl_Object.call(this);
    this.$_09 = null;
}
let cpce_MatchingEngineStudio$_init_$lambda$_0_4__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_09 = var$1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_4__init_0 = var_0 => {
    let var_1 = new cpce_MatchingEngineStudio$_init_$lambda$_0_4();
    cpce_MatchingEngineStudio$_init_$lambda$_0_4__init_(var_1, var_0);
    return var_1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_4_call = var$0 => {
    cpce_MatchingEngineStudio_handleManualOrderSubmit(var$0.$_09);
},
cpce_MatchingEngineStudio$_init_$lambda$_0_4_call$exported$0 = var$1 => {
    var$1.$call();
};
function cpce_MatchingEngineStudio$_init_$lambda$_0_5() {
    jl_Object.call(this);
    this.$_076 = null;
}
let cpce_MatchingEngineStudio$_init_$lambda$_0_5__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_076 = var$1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_5__init_0 = var_0 => {
    let var_1 = new cpce_MatchingEngineStudio$_init_$lambda$_0_5();
    cpce_MatchingEngineStudio$_init_$lambda$_0_5__init_(var_1, var_0);
    return var_1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_5_run = var$0 => {
    cpce_MatchingEngineStudio_lambda$new$4(var$0.$_076);
},
cpcw_WhiteboardJson = $rt_classWithoutFields(),
cpcw_WhiteboardJson_toJson = $el => {
    let $o, $pts, var$4, $p, $po, var$7, var$8;
    $o = cpcj_Json_obj$js_body$_1();
    $o.id = $rt_ustr(cpcm_CanvasElement_id($el));
    $o.type = $rt_ustr(cpcm_ElementType_getValue(cpcm_CanvasElement_type($el)));
    if (cpcm_CanvasElement_points($el) !== null) {
        $pts = cpcj_Json_arr$js_body$_2();
        var$4 = (cpcm_CanvasElement_points($el)).$iterator();
        while (var$4.$hasNext()) {
            $p = var$4.$next();
            $po = cpcj_Json_obj$js_body$_1();
            $po.x = cpcm_Point_x($p);
            $po.y = cpcm_Point_y($p);
            $pts.push($po);
        }
        $o.points = $pts;
    }
    $o.x = cpcm_CanvasElement_x($el);
    $o.y = cpcm_CanvasElement_y($el);
    if (cpcm_CanvasElement_width($el) !== null)
        $o.width = (cpcm_CanvasElement_width($el)).$doubleValue();
    if (cpcm_CanvasElement_height($el) !== null)
        $o.height = (cpcm_CanvasElement_height($el)).$doubleValue();
    $o.color = $rt_ustr(cpcm_CanvasElement_color($el));
    if (cpcm_CanvasElement_fillColor($el) !== null)
        $o.fillColor = $rt_ustr(cpcm_CanvasElement_fillColor($el));
    $o.strokeWidth = cpcm_CanvasElement_strokeWidth($el);
    if (cpcm_CanvasElement_text($el) !== null)
        $o.text = $rt_ustr(cpcm_CanvasElement_text($el));
    var$7 = cpcm_CanvasElement_authorId($el);
    $o.authorId = $rt_ustr(var$7);
    var$7 = cpcm_CanvasElement_authorName($el);
    $o.authorName = $rt_ustr(var$7);
    var$7 = cpcm_CanvasElement_authorColor($el);
    $o.authorColor = $rt_ustr(var$7);
    var$8 = Long_toNumber(cpcm_CanvasElement_updatedAt($el));
    $o.updatedAt = var$8;
    return $o;
},
cpcw_WhiteboardJson_toJsonList = $elements => {
    let $arr, var$3, $el;
    $arr = cpcj_Json_arr$js_body$_2();
    var$3 = $elements.$iterator();
    while (var$3.$hasNext()) {
        $el = var$3.$next();
        $arr.push(cpcw_WhiteboardJson_toJson($el));
    }
    return $arr;
},
cpcw_WhiteboardJson_fromJson = $o => {
    let $points, $pts, $i, $po, $width, $height, $fillColor, $text, var$10, var$11, var$12, var$13, var$14, var$15, var$16, var$17, var$18, var$19;
    $points = null;
    $pts = cpcj_Json_getArr$js_body$_11($o, "points");
    if ($pts !== null) {
        $points = ju_ArrayList__init_();
        $i = 0;
        while ($i < $pts.length) {
            $po = $pts[$i];
            $points.$add1(cpcm_Point__init_(cpcj_Json_num$js_body$_7($po, "x"), cpcj_Json_num$js_body$_7($po, "y")));
            $i = $i + 1 | 0;
        }
    }
    $width = !(cpcj_Json_has$js_body$_9($o, "width") ? 1 : 0) ? null : jl_Double_valueOf(cpcj_Json_num$js_body$_7($o, "width"));
    $height = !(cpcj_Json_has$js_body$_9($o, "height") ? 1 : 0) ? null : jl_Double_valueOf(cpcj_Json_num$js_body$_7($o, "height"));
    $fillColor = !(cpcj_Json_has$js_body$_9($o, "fillColor") ? 1 : 0) ? null : $rt_str(cpcj_Json_str$js_body$_6($o, "fillColor"));
    $text = !(cpcj_Json_has$js_body$_9($o, "text") ? 1 : 0) ? null : $rt_str(cpcj_Json_str$js_body$_6($o, "text"));
    var$10 = new cpcm_CanvasElement;
    var$11 = $rt_str(cpcj_Json_str$js_body$_6($o, "id"));
    var$12 = cpcm_ElementType_fromValue($rt_str(cpcj_Json_str$js_body$_6($o, "type")));
    var$13 = cpcj_Json_num$js_body$_7($o, "x");
    var$14 = cpcj_Json_num$js_body$_7($o, "y");
    var$15 = $rt_str(cpcj_Json_str$js_body$_6($o, "color"));
    var$16 = cpcj_Json_num$js_body$_7($o, "strokeWidth");
    var$17 = $rt_str(cpcj_Json_str$js_body$_6($o, "authorId"));
    var$18 = $rt_str(cpcj_Json_str$js_body$_6($o, "authorName"));
    var$19 = $rt_str(cpcj_Json_str$js_body$_6($o, "authorColor"));
    cpcm_CanvasElement__init_(var$10, var$11, var$12, $points, var$13, var$14, $width, $height, var$15, $fillColor, var$16, $text, var$17, var$18, var$19, Long_fromNumber(cpcj_Json_num$js_body$_7($o, "updatedAt")));
    return var$10;
};
function cpcm_DisruptorMetrics() {
    let a = this; jl_Record.call(a);
    a.$totalProcessed1 = Long_ZERO;
    a.$throughputOpsSec0 = 0.0;
    a.$avgLatencyUs = 0.0;
    a.$p99LatencyUs0 = 0.0;
    a.$maxLatencyUs = 0.0;
    a.$ringCapacity = 0;
    a.$producerCursor1 = Long_ZERO;
    a.$consumerCursor = Long_ZERO;
    a.$ringBufferUsage0 = 0.0;
}
let cpcm_DisruptorMetrics__init_ = ($this, $totalProcessed, $throughputOpsSec, $avgLatencyUs, $p99LatencyUs, $maxLatencyUs, $ringCapacity, $producerCursor, $consumerCursor, $ringBufferUsage) => {
    jl_Record__init_($this);
    $this.$totalProcessed1 = $totalProcessed;
    $this.$throughputOpsSec0 = $throughputOpsSec;
    $this.$avgLatencyUs = $avgLatencyUs;
    $this.$p99LatencyUs0 = $p99LatencyUs;
    $this.$maxLatencyUs = $maxLatencyUs;
    $this.$ringCapacity = $ringCapacity;
    $this.$producerCursor1 = $producerCursor;
    $this.$consumerCursor = $consumerCursor;
    $this.$ringBufferUsage0 = $ringBufferUsage;
},
cpcm_DisruptorMetrics__init_0 = (var_0, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8) => {
    let var_9 = new cpcm_DisruptorMetrics();
    cpcm_DisruptorMetrics__init_(var_9, var_0, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8);
    return var_9;
},
cpcm_DisruptorMetrics_totalProcessed = $this => {
    return $this.$totalProcessed1;
},
cpcm_DisruptorMetrics_throughputOpsSec = $this => {
    return $this.$throughputOpsSec0;
},
cpcm_DisruptorMetrics_p99LatencyUs = $this => {
    return $this.$p99LatencyUs0;
},
cpcm_DisruptorMetrics_producerCursor = $this => {
    return $this.$producerCursor1;
},
cpcm_DisruptorMetrics_ringBufferUsage = $this => {
    return $this.$ringBufferUsage0;
},
jl_NullPointerException = $rt_classWithoutFields(jl_RuntimeException),
jl_NullPointerException__init_2 = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_NullPointerException__init_1 = var_0 => {
    let var_1 = new jl_NullPointerException();
    jl_NullPointerException__init_2(var_1, var_0);
    return var_1;
},
jl_NullPointerException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
jl_NullPointerException__init_ = () => {
    let var_0 = new jl_NullPointerException();
    jl_NullPointerException__init_0(var_0);
    return var_0;
};
function cpcs_Ui$onInput$lambda$_14_0() {
    jl_Object.call(this);
    this.$_027 = null;
}
let cpcs_Ui$onInput$lambda$_14_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_027 = var$1;
},
cpcs_Ui$onInput$lambda$_14_0__init_0 = var_0 => {
    let var_1 = new cpcs_Ui$onInput$lambda$_14_0();
    cpcs_Ui$onInput$lambda$_14_0__init_(var_1, var_0);
    return var_1;
},
cpcs_Ui$onInput$lambda$_14_0_handleEvent = (var$0, var$1) => {
    cpcs_Ui_lambda$onInput$6(var$0.$_027, var$1);
},
cpcs_Ui$onInput$lambda$_14_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
};
function cpce_MatchingEngineStudio$_init_$lambda$_0_6() {
    jl_Object.call(this);
    this.$_053 = null;
}
let cpce_MatchingEngineStudio$_init_$lambda$_0_6__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_053 = var$1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_6__init_0 = var_0 => {
    let var_1 = new cpce_MatchingEngineStudio$_init_$lambda$_0_6();
    cpce_MatchingEngineStudio$_init_$lambda$_0_6__init_(var_1, var_0);
    return var_1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_6_run = var$0 => {
    cpce_MatchingEngineStudio_lambda$new$5(var$0.$_053);
};
function cpcw_LiveSession$connect$lambda$_14_3() {
    jl_Object.call(this);
    this.$_035 = null;
}
let cpcw_LiveSession$connect$lambda$_14_3__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_035 = var$1;
},
cpcw_LiveSession$connect$lambda$_14_3__init_0 = var_0 => {
    let var_1 = new cpcw_LiveSession$connect$lambda$_14_3();
    cpcw_LiveSession$connect$lambda$_14_3__init_(var_1, var_0);
    return var_1;
},
cpcw_LiveSession$connect$lambda$_14_3_run = var$0 => {
    cpcw_LiveSession_lambda$connect$2(var$0.$_035);
};
function cpce_MatchingEngineStudio$_init_$lambda$_0_7() {
    jl_Object.call(this);
    this.$_031 = null;
}
let cpce_MatchingEngineStudio$_init_$lambda$_0_7__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_031 = var$1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_7__init_0 = var_0 => {
    let var_1 = new cpce_MatchingEngineStudio$_init_$lambda$_0_7();
    cpce_MatchingEngineStudio$_init_$lambda$_0_7__init_(var_1, var_0);
    return var_1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_7_run = var$0 => {
    cpce_MatchingEngineStudio_lambda$new$6(var$0.$_031);
},
jl_Math = $rt_classWithoutFields(),
jl_Math_sin = var$1 => {
    return Math.sin(var$1);
},
jl_Math_cos = var$1 => {
    return Math.cos(var$1);
},
jl_Math_sqrt = var$1 => {
    return Math.sqrt(var$1);
},
jl_Math_floor = var$1 => {
    return Math.floor(var$1);
},
jl_Math_pow = (var$1, $y) => {
    return jl_Math_powImpl(var$1, $y);
},
jl_Math_powImpl = (var$1, var$2) => {
    return Math.pow(var$1, var$2);
},
jl_Math_atan2 = (var$1, var$2) => {
    return Math.atan2(var$1, var$2);
},
jl_Math_round = var$1 => {
    return Long_fromNumber(var$1 + jl_Math_signum(var$1) * 0.5);
},
jl_Math_random = () => {
    return jl_Math_randomImpl();
},
jl_Math_randomImpl = () => {
    return Math.random();
},
jl_Math_min = ($a, $b) => {
    if ($a < $b)
        $b = $a;
    return $b;
},
jl_Math_max = ($a, $b) => {
    if ($a > $b)
        $b = $a;
    return $b;
},
jl_Math_min0 = ($a, $b) => {
    if (Long_lt($a, $b))
        $b = $a;
    return $b;
},
jl_Math_max1 = ($a, $b) => {
    if (Long_gt($a, $b))
        $b = $a;
    return $b;
},
jl_Math_minImpl = (var$1, var$2) => {
    return Math.min(var$1, var$2);
},
jl_Math_min1 = (var$1, var$2) => {
    return jl_Math_minImpl(var$1, var$2);
},
jl_Math_maxImpl = (var$1, var$2) => {
    return Math.max(var$1, var$2);
},
jl_Math_max0 = (var$1, var$2) => {
    return jl_Math_maxImpl(var$1, var$2);
},
jl_Math_abs = $n => {
    if ($n < 0)
        $n =  -$n | 0;
    return $n;
},
jl_Math_abs0 = $n => {
    if (Long_lt($n, Long_ZERO))
        $n = Long_neg($n);
    return $n;
},
jl_Math_absImpl = var$1 => {
    return Math.abs(var$1);
},
jl_Math_abs1 = var$1 => {
    return jl_Math_absImpl(var$1);
},
jl_Math_sign = var$1 => {
    return Math.sign(var$1);
},
jl_Math_signum = var$1 => {
    return jl_Math_sign(var$1);
},
jl_Math_hypot = ($x, $y) => {
    return jl_Math_sqrt($x * $x + $y * $y);
};
function cpce_MatchingEngineStudio$_init_$lambda$_0_8() {
    jl_Object.call(this);
    this.$_00 = null;
}
let cpce_MatchingEngineStudio$_init_$lambda$_0_8__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_00 = var$1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_8__init_0 = var_0 => {
    let var_1 = new cpce_MatchingEngineStudio$_init_$lambda$_0_8();
    cpce_MatchingEngineStudio$_init_$lambda$_0_8__init_(var_1, var_0);
    return var_1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_8_run = var$0 => {
    cpce_MatchingEngineStudio_lambda$new$7(var$0.$_00);
};
function cpce_MatchingEngineStudio$_init_$lambda$_0_9() {
    jl_Object.call(this);
    this.$_088 = null;
}
let cpce_MatchingEngineStudio$_init_$lambda$_0_9__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_088 = var$1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_9__init_0 = var_0 => {
    let var_1 = new cpce_MatchingEngineStudio$_init_$lambda$_0_9();
    cpce_MatchingEngineStudio$_init_$lambda$_0_9__init_(var_1, var_0);
    return var_1;
},
cpce_MatchingEngineStudio$_init_$lambda$_0_9_handle = (var$0, var$1) => {
    cpce_MatchingEngineStudio_lambda$new$8(var$0.$_088, var$1);
};
function cpcw_LiveSession$connect$lambda$_14_0() {
    let a = this; jl_Object.call(a);
    a.$_039 = null;
    a.$_18 = null;
}
let cpcw_LiveSession$connect$lambda$_14_0__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_039 = var$1;
    var$0.$_18 = var$2;
},
cpcw_LiveSession$connect$lambda$_14_0__init_0 = (var_0, var_1) => {
    let var_2 = new cpcw_LiveSession$connect$lambda$_14_0();
    cpcw_LiveSession$connect$lambda$_14_0__init_(var_2, var_0, var_1);
    return var_2;
},
cpcw_LiveSession$connect$lambda$_14_0_run = var$0 => {
    cpcw_LiveSession_lambda$connect$0(var$0.$_039, var$0.$_18);
};
function cpcw_LiveSession$connect$lambda$_14_1() {
    jl_Object.call(this);
    this.$_081 = null;
}
let cpcw_LiveSession$connect$lambda$_14_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_081 = var$1;
},
cpcw_LiveSession$connect$lambda$_14_1__init_0 = var_0 => {
    let var_1 = new cpcw_LiveSession$connect$lambda$_14_1();
    cpcw_LiveSession$connect$lambda$_14_1__init_(var_1, var_0);
    return var_1;
},
cpcw_LiveSession$connect$lambda$_14_1_onMessage = (var$0, var$1) => {
    cpcw_LiveSession_handleMessage(var$0.$_081, var$1);
};
function jm_RoundingMode() {
    jl_Enum.call(this);
    this.$bigDecimalRM = 0;
}
let jm_RoundingMode_UP = null,
jm_RoundingMode_DOWN = null,
jm_RoundingMode_CEILING = null,
jm_RoundingMode_FLOOR = null,
jm_RoundingMode_HALF_UP = null,
jm_RoundingMode_HALF_DOWN = null,
jm_RoundingMode_HALF_EVEN = null,
jm_RoundingMode_UNNECESSARY = null,
jm_RoundingMode_$VALUES = null,
jm_RoundingMode_$callClinit = () => {
    jm_RoundingMode_$callClinit = $rt_eraseClinit(jm_RoundingMode);
    jm_RoundingMode__clinit_();
},
jm_RoundingMode_values = () => {
    jm_RoundingMode_$callClinit();
    return jm_RoundingMode_$VALUES.$clone0();
},
jm_RoundingMode__init_0 = ($this, var$1, var$2, $rm) => {
    jm_RoundingMode_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$bigDecimalRM = $rm;
},
jm_RoundingMode__init_ = (var_0, var_1, var_2) => {
    let var_3 = new jm_RoundingMode();
    jm_RoundingMode__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
jm_RoundingMode_$values = () => {
    let var$1, var$2;
    jm_RoundingMode_$callClinit();
    var$1 = $rt_createArray(jm_RoundingMode, 8);
    var$2 = var$1.data;
    var$2[0] = jm_RoundingMode_UP;
    var$2[1] = jm_RoundingMode_DOWN;
    var$2[2] = jm_RoundingMode_CEILING;
    var$2[3] = jm_RoundingMode_FLOOR;
    var$2[4] = jm_RoundingMode_HALF_UP;
    var$2[5] = jm_RoundingMode_HALF_DOWN;
    var$2[6] = jm_RoundingMode_HALF_EVEN;
    var$2[7] = jm_RoundingMode_UNNECESSARY;
    return var$1;
},
jm_RoundingMode__clinit_ = () => {
    jm_RoundingMode_UP = jm_RoundingMode__init_($rt_s(772), 0, 0);
    jm_RoundingMode_DOWN = jm_RoundingMode__init_($rt_s(773), 1, 1);
    jm_RoundingMode_CEILING = jm_RoundingMode__init_($rt_s(774), 2, 2);
    jm_RoundingMode_FLOOR = jm_RoundingMode__init_($rt_s(775), 3, 3);
    jm_RoundingMode_HALF_UP = jm_RoundingMode__init_($rt_s(776), 4, 4);
    jm_RoundingMode_HALF_DOWN = jm_RoundingMode__init_($rt_s(777), 5, 5);
    jm_RoundingMode_HALF_EVEN = jm_RoundingMode__init_($rt_s(778), 6, 6);
    jm_RoundingMode_UNNECESSARY = jm_RoundingMode__init_($rt_s(779), 7, 7);
    jm_RoundingMode_$VALUES = jm_RoundingMode_$values();
};
function cpcw_LiveSession$connect$lambda$_14_2() {
    jl_Object.call(this);
    this.$_010 = null;
}
let cpcw_LiveSession$connect$lambda$_14_2__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_010 = var$1;
},
cpcw_LiveSession$connect$lambda$_14_2__init_0 = var_0 => {
    let var_1 = new cpcw_LiveSession$connect$lambda$_14_2();
    cpcw_LiveSession$connect$lambda$_14_2__init_(var_1, var_0);
    return var_1;
},
cpcw_LiveSession$connect$lambda$_14_2_run = var$0 => {
    cpcw_LiveSession_lambda$connect$1(var$0.$_010);
},
cpcs_Icons = $rt_classWithoutFields(),
cpcs_Icons_ICONS = null,
cpcs_Icons_$callClinit = () => {
    cpcs_Icons_$callClinit = $rt_eraseClinit(cpcs_Icons);
    cpcs_Icons__clinit_();
},
cpcs_Icons_svg = ($name, $cls) => {
    let $inner, var$4, var$5;
    cpcs_Icons_$callClinit();
    $inner = cpcs_Icons_ICONS.$get($name);
    if ($inner === null) {
        var$4 = new jl_IllegalArgumentException;
        var$5 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$5, $rt_s(780)), $name);
        jl_IllegalArgumentException__init_0(var$4, jl_StringBuilder_toString(var$5));
        $rt_throw(var$4);
    }
    var$4 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$4, $rt_s(781)), $cls), $rt_s(694)), $inner), $rt_s(782));
    return jl_StringBuilder_toString(var$4);
},
cpcs_Icons__clinit_ = () => {
    cpcs_Icons_ICONS = ju_HashMap__init_2();
    cpcs_Icons_ICONS.$put($rt_s(122), $rt_s(783));
    cpcs_Icons_ICONS.$put($rt_s(320), $rt_s(784));
    cpcs_Icons_ICONS.$put($rt_s(445), $rt_s(785));
    cpcs_Icons_ICONS.$put($rt_s(321), $rt_s(786));
    cpcs_Icons_ICONS.$put($rt_s(187), $rt_s(787));
    cpcs_Icons_ICONS.$put($rt_s(788), $rt_s(789));
    cpcs_Icons_ICONS.$put($rt_s(502), $rt_s(790));
    cpcs_Icons_ICONS.$put($rt_s(535), $rt_s(791));
    cpcs_Icons_ICONS.$put($rt_s(630), $rt_s(792));
    cpcs_Icons_ICONS.$put($rt_s(443), $rt_s(793));
    cpcs_Icons_ICONS.$put($rt_s(794), $rt_s(795));
    cpcs_Icons_ICONS.$put($rt_s(534), $rt_s(796));
    cpcs_Icons_ICONS.$put($rt_s(180), $rt_s(797));
    cpcs_Icons_ICONS.$put($rt_s(475), $rt_s(798));
    cpcs_Icons_ICONS.$put($rt_s(466), $rt_s(799));
    cpcs_Icons_ICONS.$put($rt_s(501), $rt_s(800));
    cpcs_Icons_ICONS.$put($rt_s(452), $rt_s(801));
    cpcs_Icons_ICONS.$put($rt_s(126), $rt_s(802));
    cpcs_Icons_ICONS.$put($rt_s(467), $rt_s(803));
    cpcs_Icons_ICONS.$put($rt_s(156), $rt_s(804));
    cpcs_Icons_ICONS.$put($rt_s(503), $rt_s(805));
    cpcs_Icons_ICONS.$put($rt_s(657), $rt_s(806));
    cpcs_Icons_ICONS.$put($rt_s(124), $rt_s(807));
    cpcs_Icons_ICONS.$put($rt_s(120), $rt_s(808));
    cpcs_Icons_ICONS.$put($rt_s(403), $rt_s(809));
    cpcs_Icons_ICONS.$put($rt_s(436), $rt_s(810));
    cpcs_Icons_ICONS.$put($rt_s(291), $rt_s(811));
    cpcs_Icons_ICONS.$put($rt_s(439), $rt_s(812));
    cpcs_Icons_ICONS.$put($rt_s(290), $rt_s(813));
    cpcs_Icons_ICONS.$put($rt_s(381), $rt_s(814));
    cpcs_Icons_ICONS.$put($rt_s(718), $rt_s(815));
    cpcs_Icons_ICONS.$put($rt_s(385), $rt_s(816));
    cpcs_Icons_ICONS.$put($rt_s(461), $rt_s(817));
    cpcs_Icons_ICONS.$put($rt_s(464), $rt_s(818));
    cpcs_Icons_ICONS.$put($rt_s(819), $rt_s(820));
    cpcs_Icons_ICONS.$put($rt_s(821), $rt_s(822));
    cpcs_Icons_ICONS.$put($rt_s(441), $rt_s(823));
    cpcs_Icons_ICONS.$put($rt_s(447), $rt_s(824));
    cpcs_Icons_ICONS.$put($rt_s(825), $rt_s(826));
    cpcs_Icons_ICONS.$put($rt_s(632), $rt_s(827));
    cpcs_Icons_ICONS.$put($rt_s(127), $rt_s(828));
    cpcs_Icons_ICONS.$put($rt_s(174), $rt_s(829));
    cpcs_Icons_ICONS.$put($rt_s(626), $rt_s(830));
    cpcs_Icons_ICONS.$put($rt_s(450), $rt_s(831));
    cpcs_Icons_ICONS.$put($rt_s(376), $rt_s(832));
    cpcs_Icons_ICONS.$put($rt_s(432), $rt_s(833));
    cpcs_Icons_ICONS.$put($rt_s(433), $rt_s(834));
    cpcs_Icons_ICONS.$put($rt_s(163), $rt_s(835));
    cpcs_Icons_ICONS.$put($rt_s(401), $rt_s(836));
    cpcs_Icons_ICONS.$put($rt_s(399), $rt_s(837));
},
cpcs_Header$Callbacks = $rt_classWithoutFields(0);
function cpcw_WhiteboardStudio$_init_$lambda$_0_9() {
    jl_Object.call(this);
    this.$_06 = null;
}
let cpcw_WhiteboardStudio$_init_$lambda$_0_9__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_06 = var$1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_9__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$_init_$lambda$_0_9();
    cpcw_WhiteboardStudio$_init_$lambda$_0_9__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_9_run = var$0 => {
    cpcw_WhiteboardStudio_lambda$new$8(var$0.$_06);
};
function cpcw_WhiteboardStudio$_init_$lambda$_0_0() {
    jl_Object.call(this);
    this.$_054 = null;
}
let cpcw_WhiteboardStudio$_init_$lambda$_0_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_054 = var$1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_0__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$_init_$lambda$_0_0();
    cpcw_WhiteboardStudio$_init_$lambda$_0_0__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_0_run = var$0 => {
    cpcw_WhiteboardStudio_lambda$new$1(var$0.$_054);
};
function cpce_MatchingEngineStudio$handleManualOrderSubmit$lambda$_8_0() {
    jl_Object.call(this);
    this.$_071 = null;
}
let cpce_MatchingEngineStudio$handleManualOrderSubmit$lambda$_8_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_071 = var$1;
},
cpce_MatchingEngineStudio$handleManualOrderSubmit$lambda$_8_0__init_0 = var_0 => {
    let var_1 = new cpce_MatchingEngineStudio$handleManualOrderSubmit$lambda$_8_0();
    cpce_MatchingEngineStudio$handleManualOrderSubmit$lambda$_8_0__init_(var_1, var_0);
    return var_1;
},
cpce_MatchingEngineStudio$handleManualOrderSubmit$lambda$_8_0_accept0 = (var$0, var$1) => {
    cpce_MatchingEngineStudio$handleManualOrderSubmit$lambda$_8_0_accept(var$0, var$1);
},
cpce_MatchingEngineStudio$handleManualOrderSubmit$lambda$_8_0_accept = (var$0, var$1) => {
    cpce_MatchingEngineStudio_lambda$handleManualOrderSubmit$13(var$0.$_071, var$1);
};
function cpcw_WhiteboardStudio$_init_$lambda$_0_7() {
    jl_Object.call(this);
    this.$_040 = null;
}
let cpcw_WhiteboardStudio$_init_$lambda$_0_7__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_040 = var$1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_7__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$_init_$lambda$_0_7();
    cpcw_WhiteboardStudio$_init_$lambda$_0_7__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_7_handle = (var$0, var$1) => {
    cpcw_WhiteboardStudio_lambda$new$6(var$0.$_040, var$1);
};
function cpcw_WhiteboardStudio$_init_$lambda$_0_8() {
    jl_Object.call(this);
    this.$_061 = null;
}
let cpcw_WhiteboardStudio$_init_$lambda$_0_8__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_061 = var$1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_8__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$_init_$lambda$_0_8();
    cpcw_WhiteboardStudio$_init_$lambda$_0_8__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_8_run = var$0 => {
    cpcw_WhiteboardStudio_lambda$new$7(var$0.$_061);
};
function cpcw_WhiteboardStudio$_init_$lambda$_0_5() {
    jl_Object.call(this);
    this.$_089 = null;
}
let cpcw_WhiteboardStudio$_init_$lambda$_0_5__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_089 = var$1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_5__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$_init_$lambda$_0_5();
    cpcw_WhiteboardStudio$_init_$lambda$_0_5__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_5_handle = (var$0, var$1) => {
    cpcw_WhiteboardStudio_handlePointerDown(var$0.$_089, var$1);
};
function cpcw_WhiteboardStudio$_init_$lambda$_0_6() {
    jl_Object.call(this);
    this.$_013 = null;
}
let cpcw_WhiteboardStudio$_init_$lambda$_0_6__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_013 = var$1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_6__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$_init_$lambda$_0_6();
    cpcw_WhiteboardStudio$_init_$lambda$_0_6__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_6_handle = (var$0, var$1) => {
    cpcw_WhiteboardStudio_handlePointerMove(var$0.$_013, var$1);
};
function cpcw_WhiteboardStudio$_init_$lambda$_0_3() {
    jl_Object.call(this);
    this.$_044 = null;
}
let cpcw_WhiteboardStudio$_init_$lambda$_0_3__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_044 = var$1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_3__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$_init_$lambda$_0_3();
    cpcw_WhiteboardStudio$_init_$lambda$_0_3__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_3_handle = (var$0, var$1) => {
    cpcw_WhiteboardStudio_lambda$new$4(var$0.$_044, var$1);
};
function cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_3() {
    jl_Object.call(this);
    this.$_048 = null;
}
let cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_3__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_048 = var$1;
},
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_3__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_3();
    cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_3__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_3_run = var$0 => {
    cpcw_WhiteboardStudio_handleClear(var$0.$_048);
};
function cpcw_WhiteboardStudio$_init_$lambda$_0_4() {
    jl_Object.call(this);
    this.$_063 = null;
}
let cpcw_WhiteboardStudio$_init_$lambda$_0_4__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_063 = var$1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_4__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$_init_$lambda$_0_4();
    cpcw_WhiteboardStudio$_init_$lambda$_0_4__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_4_run = var$0 => {
    cpcw_WhiteboardStudio_lambda$new$5(var$0.$_063);
};
function cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_2() {
    jl_Object.call(this);
    this.$_051 = null;
}
let cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_2__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_051 = var$1;
},
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_2__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_2();
    cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_2__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_2_run = var$0 => {
    cpcw_WhiteboardStudio_handleRedo(var$0.$_051);
};
function cpcw_WhiteboardStudio$_init_$lambda$_0_1() {
    jl_Object.call(this);
    this.$_068 = null;
}
let cpcw_WhiteboardStudio$_init_$lambda$_0_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_068 = var$1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_1__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$_init_$lambda$_0_1();
    cpcw_WhiteboardStudio$_init_$lambda$_0_1__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_1_run = var$0 => {
    cpcw_WhiteboardStudio_lambda$new$2(var$0.$_068);
};
function cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_1() {
    jl_Object.call(this);
    this.$_074 = null;
}
let cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_074 = var$1;
},
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_1__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_1();
    cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_1__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_1_run = var$0 => {
    cpcw_WhiteboardStudio_handleUndo(var$0.$_074);
};
function cpcw_WhiteboardStudio$_init_$lambda$_0_2() {
    jl_Object.call(this);
    this.$_05 = null;
}
let cpcw_WhiteboardStudio$_init_$lambda$_0_2__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_05 = var$1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_2__init_0 = var_0 => {
    let var_1 = new cpcw_WhiteboardStudio$_init_$lambda$_0_2();
    cpcw_WhiteboardStudio$_init_$lambda$_0_2__init_(var_1, var_0);
    return var_1;
},
cpcw_WhiteboardStudio$_init_$lambda$_0_2_handle = (var$0, var$1) => {
    cpcw_WhiteboardStudio_lambda$new$3(var$0.$_05, var$1);
};
function cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_0() {
    let a = this; jl_Object.call(a);
    a.$_03 = null;
    a.$_1 = null;
}
let cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_0__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_03 = var$1;
    var$0.$_1 = var$2;
},
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_0__init_0 = (var_0, var_1) => {
    let var_2 = new cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_0();
    cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_0__init_(var_2, var_0, var_1);
    return var_2;
},
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_0_run = var$0 => {
    cpcw_WhiteboardStudio_lambda$rebuildToolbar$9(var$0.$_03, var$0.$_1);
};
function cpcs_AppShell$_init_$lambda$_0_1() {
    jl_Object.call(this);
    this.$_017 = null;
}
let cpcs_AppShell$_init_$lambda$_0_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_017 = var$1;
},
cpcs_AppShell$_init_$lambda$_0_1__init_0 = var_0 => {
    let var_1 = new cpcs_AppShell$_init_$lambda$_0_1();
    cpcs_AppShell$_init_$lambda$_0_1__init_(var_1, var_0);
    return var_1;
},
cpcs_AppShell$_init_$lambda$_0_1_run = var$0 => {
    cpcs_AppShell_minimize(var$0.$_017);
};
function cpcs_AppShell$_init_$lambda$_0_0() {
    jl_Object.call(this);
    this.$_086 = null;
}
let cpcs_AppShell$_init_$lambda$_0_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_086 = var$1;
},
cpcs_AppShell$_init_$lambda$_0_0__init_0 = var_0 => {
    let var_1 = new cpcs_AppShell$_init_$lambda$_0_0();
    cpcs_AppShell$_init_$lambda$_0_0__init_(var_1, var_0);
    return var_1;
},
cpcs_AppShell$_init_$lambda$_0_0_run = var$0 => {
    cpcs_AppShell_lambda$new$0(var$0.$_086);
},
cpcs_Ui = $rt_classWithoutFields(),
cpcs_Ui_doc = () => {
    return otjdh_HTMLDocument_current();
},
cpcs_Ui_el = ($tag, $cls) => {
    let $e, var$4;
    $e = (cpcs_Ui_doc()).createElement($rt_ustr($tag));
    var$4 = $rt_ustr($cls);
    $e.className = var$4;
    return $e;
},
cpcs_Ui_el0 = ($tag, $cls, $text) => {
    let $e, var$5;
    $e = cpcs_Ui_el($tag, $cls);
    var$5 = $rt_ustr($text);
    $e.textContent = var$5;
    return $e;
},
cpcs_Ui_html = ($tag, $cls, $innerHtml) => {
    let $e, var$5;
    $e = cpcs_Ui_el($tag, $cls);
    var$5 = $rt_ustr($innerHtml);
    $e.innerHTML = var$5;
    return $e;
},
cpcs_Ui_btn = ($cls, $text, $onClick) => {
    let var$4, var$5, var$6;
    var$4 = (cpcs_Ui_doc()).createElement("button");
    var$5 = $rt_ustr($cls);
    var$4.className = var$5;
    var$5 = $rt_ustr($text);
    var$4.textContent = var$5;
    var$6 = cpcs_Ui$btn$lambda$_5_0__init_0($onClick);
    var$4.addEventListener("click", otji_JS_function(otji_JSWrapper_unwrap(var$6), "handleEvent"));
    return var$4;
},
cpcs_Ui_btnHtml = ($cls, $innerHtml, $onClick) => {
    let var$4, var$5, var$6;
    var$4 = (cpcs_Ui_doc()).createElement("button");
    var$5 = $rt_ustr($cls);
    var$4.className = var$5;
    var$5 = $rt_ustr($innerHtml);
    var$4.innerHTML = var$5;
    var$6 = cpcs_Ui$btnHtml$lambda$_6_0__init_0($onClick);
    var$4.addEventListener("click", otji_JS_function(otji_JSWrapper_unwrap(var$6), "handleEvent"));
    return var$4;
},
cpcs_Ui_input = ($cls, $type, $value, $placeholder) => {
    let var$5, var$6, var$7;
    var$5 = (cpcs_Ui_doc()).createElement("input");
    var$6 = $rt_ustr($cls);
    var$5.className = var$6;
    var$6 = $rt_ustr($type);
    var$5.type = var$6;
    var$7 = $rt_ustr($value);
    var$5.value = var$7;
    var$6 = $rt_ustr($placeholder);
    var$5.placeholder = var$6;
    return var$5;
},
cpcs_Ui_add = ($parent, $kids) => {
    let var$3, var$4, var$5, $k;
    var$3 = $kids.data;
    var$4 = var$3.length;
    var$5 = 0;
    while (var$5 < var$4) {
        $k = otji_JSWrapper_unwrap(var$3[var$5]);
        $parent.appendChild($k);
        var$5 = var$5 + 1 | 0;
    }
    return $parent;
},
cpcs_Ui_clear = $e => {
    let var$2;
    var$2 = "";
    $e.innerHTML = var$2;
},
cpcs_Ui_on = ($e, $event, $r) => {
    let var$4;
    var$4 = cpcs_Ui$on$lambda$_10_0__init_0($r);
    $e.addEventListener($rt_ustr($event), otji_JS_function(otji_JSWrapper_unwrap(var$4), "handleEvent"));
},
cpcs_Ui_onStop = ($e, $event, $r) => {
    let var$4;
    var$4 = cpcs_Ui$onStop$lambda$_11_0__init_0($r);
    $e.addEventListener($rt_ustr($event), otji_JS_function(otji_JSWrapper_unwrap(var$4), "handleEvent"));
},
cpcs_Ui_onMouse = ($e, $event, $h) => {
    let var$4;
    var$4 = cpcs_Ui$onMouse$lambda$_12_0__init_0($h);
    $e.addEventListener($rt_ustr($event), otji_JS_function(otji_JSWrapper_unwrap(var$4), "handleEvent"));
},
cpcs_Ui_onInput = ($e, $h) => {
    let var$3;
    var$3 = cpcs_Ui$onInput$lambda$_14_0__init_0($h);
    $e.addEventListener("input", otji_JS_function(otji_JSWrapper_unwrap(var$3), "handleEvent"));
},
cpcs_Ui_show = ($e, $visible) => {
    let var$3;
    var$3 = !$visible ? $rt_s(838) : $rt_s(24);
    cpcs_Ui_setStyle$js_body$_22($e, "display", $rt_ustr(var$3));
},
cpcs_Ui_setText = ($e, $text) => {
    let var$3;
    var$3 = $rt_ustr($text);
    $e.textContent = var$3;
},
cpcs_Ui_setHtml = ($e, $innerHtml) => {
    let var$3;
    var$3 = $rt_ustr($innerHtml);
    $e.innerHTML = var$3;
},
cpcs_Ui_cls = ($e, $cls) => {
    let var$3;
    var$3 = $rt_ustr($cls);
    $e.className = var$3;
},
cpcs_Ui_byId = $id => {
    return (cpcs_Ui_doc()).getElementById($rt_ustr($id));
},
cpcs_Ui_lambda$onInput$6 = ($h, $evt) => {
    $h.$handle($rt_str($evt.target.value));
},
cpcs_Ui_lambda$onMouse$4 = ($h, $evt) => {
    $h.$handle0($evt);
},
cpcs_Ui_lambda$onStop$3 = ($r, $evt) => {
    $evt.stopPropagation();
    $r.$run();
},
cpcs_Ui_lambda$on$2 = ($r, $evt) => {
    $r.$run();
},
cpcs_Ui_lambda$btnHtml$1 = ($onClick, $evt) => {
    $onClick.$run();
},
cpcs_Ui_lambda$btn$0 = ($onClick, $evt) => {
    $onClick.$run();
},
cpcs_Ui_setStyle$js_body$_22 = (var$1, var$2, var$3) => {
    if (var$3 === '') {
        var$1.style.removeProperty(var$2);
    } else {
        var$1.style.setProperty(var$2, var$3);
    }
};
function cpcs_AppShell$_init_$lambda$_0_5() {
    jl_Object.call(this);
    this.$_04 = null;
}
let cpcs_AppShell$_init_$lambda$_0_5__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_04 = var$1;
},
cpcs_AppShell$_init_$lambda$_0_5__init_0 = var_0 => {
    let var_1 = new cpcs_AppShell$_init_$lambda$_0_5();
    cpcs_AppShell$_init_$lambda$_0_5__init_(var_1, var_0);
    return var_1;
},
cpcs_AppShell$_init_$lambda$_0_5_run = var$0 => {
    cpcs_AppShell_toggleTaskbarButton(var$0.$_04);
};
function cpcs_AppShell$_init_$lambda$_0_4() {
    jl_Object.call(this);
    this.$_069 = null;
}
let cpcs_AppShell$_init_$lambda$_0_4__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_069 = var$1;
},
cpcs_AppShell$_init_$lambda$_0_4__init_0 = var_0 => {
    let var_1 = new cpcs_AppShell$_init_$lambda$_0_4();
    cpcs_AppShell$_init_$lambda$_0_4__init_(var_1, var_0);
    return var_1;
},
cpcs_AppShell$_init_$lambda$_0_4_run = var$0 => {
    cpcs_AppShell_toggleStart(var$0.$_069);
};
function cpcs_AppShell$_init_$lambda$_0_3() {
    jl_Object.call(this);
    this.$_067 = null;
}
let cpcs_AppShell$_init_$lambda$_0_3__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_067 = var$1;
},
cpcs_AppShell$_init_$lambda$_0_3__init_0 = var_0 => {
    let var_1 = new cpcs_AppShell$_init_$lambda$_0_3();
    cpcs_AppShell$_init_$lambda$_0_3__init_(var_1, var_0);
    return var_1;
},
cpcs_AppShell$_init_$lambda$_0_3_run = var$0 => {
    cpcs_AppShell_lambda$new$1(var$0.$_067);
};
function cpcs_AppShell$_init_$lambda$_0_2() {
    jl_Object.call(this);
    this.$_045 = null;
}
let cpcs_AppShell$_init_$lambda$_0_2__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_045 = var$1;
},
cpcs_AppShell$_init_$lambda$_0_2__init_0 = var_0 => {
    let var_1 = new cpcs_AppShell$_init_$lambda$_0_2();
    cpcs_AppShell$_init_$lambda$_0_2__init_(var_1, var_0);
    return var_1;
},
cpcs_AppShell$_init_$lambda$_0_2_run = var$0 => {
    cpcs_AppShell_toggleWindowed(var$0.$_045);
};
function cpcs_AppShell$1() {
    jl_Object.call(this);
    this.$this$00 = null;
}
let cpcs_AppShell$1__init_ = ($this, $this$0) => {
    $this.$this$00 = $this$0;
    jl_Object__init_($this);
},
cpcs_AppShell$1__init_0 = var_0 => {
    let var_1 = new cpcs_AppShell$1();
    cpcs_AppShell$1__init_(var_1, var_0);
    return var_1;
},
cpcs_AppShell$1_onTabChange = ($this, $tab) => {
    $this.$this$00.$activeTab = $tab;
    cpcs_AppShell_switchView($this.$this$00);
    cpcs_AppShell_renderHeader($this.$this$00);
    cpcs_AppShell_renderTaskbar($this.$this$00);
},
cpcs_AppShell$1_onPrimaryAction = $this => {
    cpcs_AppShell_handlePrimaryAction($this.$this$00);
};
function ju_TemplateCollections$ImmutableArrayList() {
    ju_TemplateCollections$AbstractImmutableList.call(this);
    this.$list = null;
}
let ju_TemplateCollections$ImmutableArrayList__init_0 = ($this, $list) => {
    ju_TemplateCollections$AbstractImmutableList__init_($this);
    $this.$list = $list;
},
ju_TemplateCollections$ImmutableArrayList__init_ = var_0 => {
    let var_1 = new ju_TemplateCollections$ImmutableArrayList();
    ju_TemplateCollections$ImmutableArrayList__init_0(var_1, var_0);
    return var_1;
},
ju_TemplateCollections$ImmutableArrayList_get = ($this, $index) => {
    return $this.$list.data[$index];
},
ju_TemplateCollections$ImmutableArrayList_size = $this => {
    return $this.$list.data.length;
},
ju_LinkedHashMapIterator$KeyIterator = $rt_classWithoutFields(ju_LinkedHashMapIterator),
ju_LinkedHashMapIterator$KeyIterator__init_ = ($this, $map, $reversed) => {
    ju_LinkedHashMapIterator__init_($this, $map, $reversed);
},
ju_LinkedHashMapIterator$KeyIterator__init_0 = (var_0, var_1) => {
    let var_2 = new ju_LinkedHashMapIterator$KeyIterator();
    ju_LinkedHashMapIterator$KeyIterator__init_(var_2, var_0, var_1);
    return var_2;
},
ju_LinkedHashMapIterator$KeyIterator_next = $this => {
    ju_LinkedHashMapIterator_makeNext($this);
    return $this.$currentEntry.$key0;
};
function cpcs_Header$build$lambda$_1_0() {
    jl_Object.call(this);
    this.$_082 = null;
}
let cpcs_Header$build$lambda$_1_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_082 = var$1;
},
cpcs_Header$build$lambda$_1_0__init_0 = var_0 => {
    let var_1 = new cpcs_Header$build$lambda$_1_0();
    cpcs_Header$build$lambda$_1_0__init_(var_1, var_0);
    return var_1;
},
cpcs_Header$build$lambda$_1_0_run = var$0 => {
    var$0.$_082.$onPrimaryAction();
},
otcit_DoubleAnalyzer = $rt_classWithoutFields(),
otcit_DoubleAnalyzer_MAX_MANTISSA = Long_ZERO,
otcit_DoubleAnalyzer_resultForLog10 = null,
otcit_DoubleAnalyzer_mantissa10Table = null,
otcit_DoubleAnalyzer_exp10Table = null,
otcit_DoubleAnalyzer_$callClinit = () => {
    otcit_DoubleAnalyzer_$callClinit = $rt_eraseClinit(otcit_DoubleAnalyzer);
    otcit_DoubleAnalyzer__clinit_();
},
otcit_DoubleAnalyzer_findLowerDistance = ($mantissa, $lower) => {
    let $pos, $pos_0, var$5, var$6;
    otcit_DoubleAnalyzer_$callClinit();
    $pos = Long_fromInt(1);
    while (true) {
        $pos_0 = Long_mul($pos, Long_fromInt(10));
        var$5 = jl_Long_divideUnsigned($mantissa, $pos_0);
        var$6 = jl_Long_divideUnsigned($lower, $pos_0);
        if (jl_Long_compareUnsigned(var$5, var$6) <= 0)
            break;
        $pos = $pos_0;
    }
    return $pos;
},
otcit_DoubleAnalyzer_findUpperDistance = ($mantissa, $upper) => {
    let $pos, $pos_0, var$5, var$6;
    otcit_DoubleAnalyzer_$callClinit();
    $pos = Long_fromInt(1);
    while (true) {
        $pos_0 = Long_mul($pos, Long_fromInt(10));
        var$5 = jl_Long_divideUnsigned($mantissa, $pos_0);
        var$6 = jl_Long_divideUnsigned($upper, $pos_0);
        if (jl_Long_compareUnsigned(var$5, var$6) >= 0)
            break;
        $pos = $pos_0;
    }
    return $pos;
},
otcit_DoubleAnalyzer_mulAndShiftRight = ($a, $b, $shift) => {
    let $a1, $a2, $a3, $a4, $b1, $b2, $b3, $b4, $cm, $c0, $c1, $c2, $c3, $c, var$18;
    otcit_DoubleAnalyzer_$callClinit();
    $a1 = Long_and($a, Long_fromInt(65535));
    $a2 = Long_and(Long_shru($a, 16), Long_fromInt(65535));
    $a3 = Long_and(Long_shru($a, 32), Long_fromInt(65535));
    $a4 = Long_and(Long_shru($a, 48), Long_fromInt(65535));
    $b1 = Long_and($b, Long_fromInt(65535));
    $b2 = Long_and(Long_shru($b, 16), Long_fromInt(65535));
    $b3 = Long_and(Long_shru($b, 32), Long_fromInt(65535));
    $b4 = Long_and(Long_shru($b, 48), Long_fromInt(65535));
    $cm = Long_add(Long_add(Long_mul($b3, $a1), Long_mul($b2, $a2)), Long_mul($b1, $a3));
    $c0 = Long_add(Long_add(Long_add(Long_mul($b4, $a1), Long_mul($b3, $a2)), Long_mul($b2, $a3)), Long_mul($b1, $a4));
    $c1 = Long_add(Long_add(Long_mul($b4, $a2), Long_mul($b3, $a3)), Long_mul($b2, $a4));
    $c2 = Long_add(Long_mul($b4, $a3), Long_mul($b3, $a4));
    $c3 = Long_mul($b4, $a4);
    $c = Long_add(Long_add(Long_shl($c3, 32 + $shift | 0), Long_shl($c2, 16 + $shift | 0)), Long_shl($c1, $shift));
    var$18 = Long_add($cm, Long_shl($c0, 16));
    var$18 = Long_add($c, Long_shru(var$18, 32 - $shift | 0));
    return var$18;
},
otcit_DoubleAnalyzer__clinit_ = () => {
    otcit_DoubleAnalyzer_MAX_MANTISSA = jl_Long_divideUnsigned(Long_fromInt(-1), Long_fromInt(10));
    otcit_DoubleAnalyzer_resultForLog10 = otcit_DoubleAnalyzer$Result__init_0();
    otcit_DoubleAnalyzer_mantissa10Table = $rt_createLongArrayFromData([Long_create(3251292512, 2194092222), Long_create(1766094183, 3510547556), Long_create(553881887, 2808438045), Long_create(443105509, 2246750436), Long_create(3285949193, 3594800697), Long_create(910772436, 2875840558), Long_create(2446604867, 2300672446), Long_create(2196580869, 3681075914), Long_create(2616258154, 2944860731), Long_create(1234013064, 2355888585), Long_create(1974420903, 3769421736), Long_create(720543263, 3015537389), Long_create(1435428070, 2412429911),
    Long_create(578697993, 3859887858), Long_create(2180945313, 3087910286), Long_create(885762791, 2470328229), Long_create(3135207384, 3952525166), Long_create(1649172448, 3162020133), Long_create(3037324877, 2529616106), Long_create(3141732885, 4047385770), Long_create(2513386308, 3237908616), Long_create(1151715587, 2590326893), Long_create(983751480, 4144523029), Long_create(1645994643, 3315618423), Long_create(3034782633, 2652494738), Long_create(3996658754, 4243991581), Long_create(2338333544, 3395193265),
    Long_create(1870666835, 2716154612), Long_create(4073513845, 2172923689), Long_create(3940641775, 3476677903), Long_create(575533043, 2781342323), Long_create(2178413352, 2225073858), Long_create(2626467905, 3560118173), Long_create(3819161242, 2848094538), Long_create(478348616, 2278475631), Long_create(3342338164, 3645561009), Long_create(3532863990, 2916448807), Long_create(1108304273, 2333159046), Long_create(55299919, 3733054474), Long_create(903233395, 2986443579), Long_create(1581580175, 2389154863),
    Long_create(1671534821, 3822647781), Long_create(478234397, 3058118225), Long_create(382587518, 2446494580), Long_create(612140029, 3914391328), Long_create(2207698941, 3131513062), Long_create(48172235, 2505210450), Long_create(77075576, 4008336720), Long_create(61660460, 3206669376), Long_create(3485302205, 2565335500), Long_create(1281516232, 4104536801), Long_create(166219527, 3283629441), Long_create(3568949458, 2626903552), Long_create(2274345296, 4203045684), Long_create(2678469696, 3362436547), Long_create(424788838, 2689949238),
    Long_create(2057817989, 2151959390), Long_create(3292508783, 3443135024), Long_create(3493000485, 2754508019), Long_create(3653393847, 2203606415), Long_create(1550462860, 3525770265), Long_create(1240370288, 2820616212), Long_create(3569276608, 2256492969), Long_create(3133862195, 3610388751), Long_create(1648096297, 2888311001), Long_create(459483578, 2310648801), Long_create(3312154103, 3697038081), Long_create(1790729823, 2957630465), Long_create(1432583858, 2366104372), Long_create(3151127633, 3785766995),
    Long_create(2520902106, 3028613596), Long_create(1157728226, 2422890877), Long_create(2711358621, 3876625403), Long_create(3887073815, 3101300322), Long_create(1391672133, 2481040258), Long_create(1367681954, 3969664413), Long_create(2812132482, 3175731530), Long_create(2249705985, 2540585224), Long_create(1022549199, 4064936359), Long_create(1677032818, 3251949087), Long_create(3918606632, 2601559269), Long_create(3692790234, 4162494831), Long_create(2095238728, 3329995865), Long_create(1676190982, 2663996692),
    Long_create(3540899031, 4262394707), Long_create(1114732307, 3409915766), Long_create(32792386, 2727932613), Long_create(1744220827, 2182346090), Long_create(2790753324, 3491753744), Long_create(3091596118, 2793402995), Long_create(2473276894, 2234722396), Long_create(2239256113, 3575555834), Long_create(2650398349, 2860444667), Long_create(402331761, 2288355734), Long_create(2361717736, 3661369174), Long_create(2748367648, 2929095339), Long_create(3057687578, 2343276271), Long_create(3174313206, 3749242034),
    Long_create(3398444024, 2999393627), Long_create(1000768301, 2399514902), Long_create(2460222741, 3839223843), Long_create(3686165111, 3071379074), Long_create(3807925548, 2457103259), Long_create(3515700499, 3931365215), Long_create(2812560399, 3145092172), Long_create(532061401, 2516073738), Long_create(4287272078, 4025717980), Long_create(3429817663, 3220574384), Long_create(3602847589, 2576459507), Long_create(2328582306, 4122335212), Long_create(144878926, 3297868170), Long_create(115903141, 2638294536),
    Long_create(2762425404, 4221271257), Long_create(491953404, 3377017006), Long_create(3829536560, 2701613604), Long_create(3922622707, 2161290883), Long_create(1122235577, 3458065414), Long_create(1756781920, 2766452331), Long_create(546432077, 2213161865), Long_create(874291324, 3541058984), Long_create(1558426518, 2832847187), Long_create(3823721592, 2266277749), Long_create(3540974170, 3626044399), Long_create(3691772795, 2900835519), Long_create(3812411695, 2320668415), Long_create(1804891416, 3713069465),
    Long_create(1443913133, 2970455572), Long_create(3732110884, 2376364457), Long_create(2535403578, 3802183132), Long_create(310335944, 3041746506), Long_create(3684242592, 2433397204), Long_create(3317807769, 3893435527), Long_create(936259297, 3114748422), Long_create(3325987815, 2491798737), Long_create(1885606668, 3986877980), Long_create(1508485334, 3189502384), Long_create(2065781726, 2551601907), Long_create(4164244222, 4082563051), Long_create(2472401918, 3266050441), Long_create(1118928075, 2612840353),
    Long_create(931291461, 4180544565), Long_create(745033169, 3344435652), Long_create(3173006913, 2675548521), Long_create(3358824142, 4280877634), Long_create(3546052773, 3424702107), Long_create(1118855300, 2739761686), Long_create(36090780, 2191809349), Long_create(1775732167, 3506894958), Long_create(3138572652, 2805515966), Long_create(1651864662, 2244412773), Long_create(1783990001, 3591060437), Long_create(4004172378, 2872848349), Long_create(4062331362, 2298278679), Long_create(3922749802, 3677245887),
    Long_create(1420212923, 2941796710), Long_create(1136170338, 2353437368), Long_create(958879082, 3765499789), Long_create(1626096725, 3012399831), Long_create(441883920, 2409919865), Long_create(707014273, 3855871784), Long_create(1424604878, 3084697427), Long_create(3716664280, 2467757941), Long_create(4228675929, 3948412706), Long_create(2523947284, 3158730165), Long_create(2019157827, 2526984132), Long_create(4089645983, 4043174611), Long_create(2412723327, 3234539689), Long_create(2789172121, 2587631751),
    Long_create(2744688475, 4140210802), Long_create(477763862, 3312168642), Long_create(2959191467, 2649734913), Long_create(3875712888, 4239575861), Long_create(2241576851, 3391660689), Long_create(2652254940, 2713328551), Long_create(1262810493, 2170662841), Long_create(302509870, 3473060546), Long_create(3677981733, 2778448436), Long_create(2083391927, 2222758749), Long_create(756446706, 3556413999), Long_create(1464150824, 2845131199), Long_create(2030314118, 2276104959), Long_create(671522212, 3641767935),
    Long_create(537217769, 2913414348), Long_create(2147761134, 2330731478), Long_create(2577424355, 3729170365), Long_create(2061939484, 2983336292), Long_create(4226531965, 2386669033), Long_create(1608490388, 3818670454), Long_create(2145785770, 3054936363), Long_create(3434615534, 2443949090), Long_create(1200417559, 3910318545), Long_create(960334047, 3128254836), Long_create(4204241074, 2502603868), Long_create(1572824964, 4004166190), Long_create(1258259971, 3203332952), Long_create(3583588354, 2562666361),
    Long_create(4015754449, 4100266178), Long_create(635623181, 3280212943), Long_create(2226485463, 2624170354), Long_create(985396364, 4198672567), Long_create(3365297469, 3358938053), Long_create(115257597, 2687150443), Long_create(1810192996, 2149720354), Long_create(319328417, 3439552567), Long_create(2832443111, 2751642053), Long_create(3983941407, 2201313642), Long_create(2938332415, 3522101828), Long_create(4068652850, 2817681462), Long_create(1536935362, 2254145170), Long_create(2459096579, 3606632272),
    Long_create(249290345, 2885305818), Long_create(1917419194, 2308244654), Long_create(490890333, 3693191447), Long_create(2969692644, 2954553157), Long_create(657767197, 2363642526), Long_create(3629407892, 3781828041), Long_create(2044532855, 3025462433), Long_create(3353613202, 2420369946), Long_create(3647794205, 3872591914), Long_create(3777228823, 3098073531), Long_create(2162789599, 2478458825), Long_create(3460463359, 3965534120), Long_create(2768370687, 3172427296), Long_create(1355703090, 2537941837),
    Long_create(3028118404, 4060706939), Long_create(3281488183, 3248565551), Long_create(1766197087, 2598852441), Long_create(1107928421, 4158163906), Long_create(27349277, 3326531125), Long_create(21879422, 2661224900), Long_create(35007075, 4257959840), Long_create(28005660, 3406367872), Long_create(2599384905, 2725094297), Long_create(361521006, 2180075438), Long_create(4014407446, 3488120700), Long_create(3211525957, 2790496560), Long_create(2569220766, 2232397248), Long_create(3251759766, 3571835597),
    Long_create(883420894, 2857468478), Long_create(2424723634, 2285974782), Long_create(443583977, 3657559652), Long_create(2931847559, 2926047721), Long_create(1486484588, 2340838177), Long_create(3237368801, 3745341083), Long_create(12914663, 2996272867), Long_create(2587312108, 2397018293), Long_create(3280705914, 3835229269), Long_create(3483558190, 3068183415), Long_create(2786846552, 2454546732), Long_create(1022980646, 3927274772), Long_create(3395364895, 3141819817), Long_create(998304997, 2513455854),
    Long_create(3315274914, 4021529366), Long_create(1793226472, 3217223493), Long_create(3152568096, 2573778794), Long_create(2467128576, 4118046071), Long_create(1114709402, 3294436857), Long_create(3468747899, 2635549485), Long_create(1255029343, 4216879177), Long_create(3581003852, 3373503341), Long_create(2005809622, 2698802673), Long_create(3322634616, 2159042138), Long_create(162254630, 3454467422), Long_create(2706784082, 2763573937), Long_create(447440347, 2210859150), Long_create(715904555, 3537374640),
    Long_create(572723644, 2829899712), Long_create(3035159293, 2263919769), Long_create(2279274491, 3622271631), Long_create(964426134, 2897817305), Long_create(771540907, 2318253844), Long_create(2952452370, 3709206150), Long_create(2361961896, 2967364920), Long_create(1889569516, 2373891936), Long_create(1305324308, 3798227098), Long_create(2762246365, 3038581678), Long_create(3927784010, 2430865342), Long_create(2848480580, 3889384548), Long_create(3996771382, 3111507638), Long_create(620436728, 2489206111),
    Long_create(3569679143, 3982729777), Long_create(1137756396, 3186183822), Long_create(3487185494, 2548947057), Long_create(2143522954, 4078315292), Long_create(4291798741, 3262652233), Long_create(856458615, 2610121787), Long_create(2229327243, 4176194859), Long_create(2642455254, 3340955887), Long_create(395977285, 2672764710), Long_create(633563656, 4276423536), Long_create(3942824761, 3421138828), Long_create(577279431, 2736911063), Long_create(2179810463, 2189528850), Long_create(3487696741, 3503246160),
    Long_create(2790157393, 2802596928), Long_create(3950112833, 2242077542), Long_create(2884206696, 3587324068), Long_create(4025352275, 2869859254), Long_create(4079275279, 2295887403), Long_create(1372879692, 3673419846), Long_create(239310294, 2938735877), Long_create(2768428613, 2350988701), Long_create(2711498862, 3761581922), Long_create(451212171, 3009265538), Long_create(2078956655, 2407412430), Long_create(3326330649, 3851859888), Long_create(84084141, 3081487911), Long_create(3503241150, 2465190328),
    Long_create(451225085, 3944304526), Long_create(3796953905, 3155443620), Long_create(3037563124, 2524354896), Long_create(3142114080, 4038967834), Long_create(3372684723, 3231174267), Long_create(980160860, 2584939414), Long_create(3286244294, 4135903062), Long_create(911008517, 3308722450), Long_create(728806813, 2646977960), Long_create(1166090902, 4235164736), Long_create(73879262, 3388131789), Long_create(918096869, 2710505431), Long_create(4170451332, 2168404344), Long_create(4095741754, 3469446951),
    Long_create(2417599944, 2775557561), Long_create(1075086496, 2220446049), Long_create(3438125312, 3552713678), Long_create(173519872, 2842170943), Long_create(1856802816, 2273736754), Long_create(393904128, 3637978807), Long_create(2892103680, 2910383045), Long_create(2313682944, 2328306436), Long_create(1983905792, 3725290298), Long_create(3305111552, 2980232238), Long_create(67108864, 2384185791), Long_create(2684354560, 3814697265), Long_create(2147483648, 3051757812), Long_create(0, 2441406250), Long_create(0, 3906250000),
    Long_create(0, 3125000000), Long_create(0, 2500000000), Long_create(0, 4000000000), Long_create(0, 3200000000), Long_create(0, 2560000000), Long_create(0, 4096000000), Long_create(0, 3276800000), Long_create(0, 2621440000), Long_create(0, 4194304000), Long_create(0, 3355443200), Long_create(0, 2684354560), Long_create(0, 2147483648), Long_create(3435973836, 3435973836), Long_create(1889785610, 2748779069), Long_create(2370821947, 2199023255), Long_create(3793315115, 3518437208), Long_create(457671715, 2814749767),
    Long_create(2943117749, 2251799813), Long_create(3849994940, 3602879701), Long_create(2221002492, 2882303761), Long_create(917808535, 2305843009), Long_create(3186480574, 3689348814), Long_create(3408177918, 2951479051), Long_create(1867548875, 2361183241), Long_create(1270091283, 3777893186), Long_create(157079567, 3022314549), Long_create(984657113, 2417851639), Long_create(3293438299, 3868562622), Long_create(916763721, 3094850098), Long_create(2451397895, 2475880078), Long_create(3063243173, 3961408125),
    Long_create(2450594538, 3169126500), Long_create(1960475630, 2535301200), Long_create(3136761009, 4056481920), Long_create(2509408807, 3245185536), Long_create(1148533586, 2596148429), Long_create(3555640657, 4153837486), Long_create(1985519066, 3323069989), Long_create(2447408712, 2658455991), Long_create(2197867021, 4253529586), Long_create(899300158, 3402823669), Long_create(1578433585, 2722258935), Long_create(1262746868, 2177807148), Long_create(1161401530, 3484491437), Long_create(3506101601, 2787593149),
    Long_create(3663874740, 2230074519), Long_create(3285219207, 3568119231), Long_create(1769181906, 2854495385), Long_create(1415345525, 2283596308), Long_create(1405559381, 3653754093), Long_create(2842434423, 2923003274), Long_create(3132940998, 2338402619), Long_create(2435725219, 3741444191), Long_create(1089586716, 2993155353), Long_create(2589656291, 2394524282), Long_create(707476229, 3831238852), Long_create(3142961361, 3064991081), Long_create(1655375629, 2451992865), Long_create(2648601007, 3923188584),
    Long_create(2977874265, 3138550867), Long_create(664312493, 2510840694), Long_create(2780886908, 4017345110), Long_create(2224709526, 3213876088), Long_create(3497754539, 2571100870), Long_create(1301439967, 4113761393), Long_create(2759138892, 3291009114), Long_create(3066304573, 2632807291), Long_create(3188100398, 4212491666), Long_create(1691486859, 3369993333), Long_create(3071176406, 2695994666), Long_create(1597947665, 2156795733), Long_create(1697722806, 3450873173), Long_create(3076165163, 2760698538),
    Long_create(4178919049, 2208558830), Long_create(2391303182, 3533694129), Long_create(2772036005, 2826955303), Long_create(3935615722, 2261564242), Long_create(2861011319, 3618502788), Long_create(4006795973, 2894802230), Long_create(3205436779, 2315841784), Long_create(2551718468, 3705346855), Long_create(2041374775, 2964277484), Long_create(2492093279, 2371421987), Long_create(551375410, 3794275180), Long_create(441100328, 3035420144), Long_create(1211873721, 2428336115), Long_create(1938997954, 3885337784),
    Long_create(2410191822, 3108270227), Long_create(210166539, 2486616182), Long_create(1195259923, 3978585891), Long_create(97214479, 3182868713), Long_create(1795758501, 2546294970), Long_create(2873213602, 4074071952), Long_create(580583963, 3259257562), Long_create(3041447548, 2607406049), Long_create(2289335700, 4171849679), Long_create(2690462019, 3337479743), Long_create(3870356534, 2669983794), Long_create(3615590076, 4271974071), Long_create(2033478602, 3417579257), Long_create(4203763259, 2734063405),
    Long_create(3363010607, 2187250724), Long_create(2803836594, 3499601159), Long_create(3102062734, 2799680927), Long_create(763663269, 2239744742), Long_create(2080854690, 3583591587), Long_create(4241664129, 2866873269), Long_create(4252324763, 2293498615), Long_create(2508752324, 3669597785), Long_create(2007001859, 2935678228), Long_create(3323588406, 2348542582), Long_create(1881767613, 3757668132), Long_create(4082394468, 3006134505), Long_create(3265915574, 2404907604), Long_create(2648484541, 3847852167),
    Long_create(400800715, 3078281734), Long_create(1179634031, 2462625387), Long_create(2746407909, 3940200619), Long_create(3056119786, 3152160495), Long_create(2444895829, 2521728396), Long_create(2193846408, 4034765434), Long_create(2614070585, 3227812347), Long_create(373269550, 2582249878), Long_create(4033205117, 4131599804), Long_create(4085557553, 3305279843), Long_create(691465664, 2644223875), Long_create(1106345063, 4230758200), Long_create(885076050, 3384606560), Long_create(708060840, 2707685248),
    Long_create(2284435591, 2166148198), Long_create(2796103486, 3465837117), Long_create(518895870, 2772669694), Long_create(1274110155, 2218135755), Long_create(2038576249, 3549017208), Long_create(3348847917, 2839213766), Long_create(1820084875, 2271371013), Long_create(2053142340, 3634193621), Long_create(783520413, 2907354897), Long_create(3203796708, 2325883917), Long_create(1690100896, 3721414268), Long_create(3070067635, 2977131414), Long_create(3315047567, 2381705131), Long_create(3586089190, 3810728210),
    Long_create(2868871352, 3048582568), Long_create(4013084000, 2438866054), Long_create(3843954022, 3902185687), Long_create(1357176299, 3121748550), Long_create(1085741039, 2497398840), Long_create(1737185663, 3995838144), Long_create(2248741989, 3196670515), Long_create(1798993591, 2557336412), Long_create(3737383206, 4091738259), Long_create(3848900024, 3273390607), Long_create(1361133101, 2618712486), Long_create(459826043, 4189939978), Long_create(2085847752, 3351951982), Long_create(4245658579, 2681561585),
    Long_create(2498086431, 4290498537), Long_create(280482227, 3432398830), Long_create(224385781, 2745919064), Long_create(1038502084, 2196735251), Long_create(4238583712, 3514776401), Long_create(2531873511, 2811821121), Long_create(1166505349, 2249456897), Long_create(2725402018, 3599131035), Long_create(2180321615, 2879304828), Long_create(3462244210, 2303443862), Long_create(2103616899, 3685510180), Long_create(1682893519, 2948408144), Long_create(2205308275, 2358726515), Long_create(3528493240, 3773962424),
    Long_create(3681788051, 3019169939), Long_create(3804423900, 2415335951), Long_create(74124026, 3864537523), Long_create(1777286139, 3091630018), Long_create(3139815829, 2473304014), Long_create(2446724950, 3957286423), Long_create(3675366878, 3165829138), Long_create(363313125, 2532663311), Long_create(3158281377, 4052261297), Long_create(808638183, 3241809038), Long_create(2364897465, 2593447230), Long_create(3783835944, 4149515568), Long_create(450088378, 3319612455), Long_create(360070702, 2655689964),
    Long_create(2294100042, 4249103942), Long_create(117293115, 3399283154), Long_create(952827951, 2719426523), Long_create(2480249279, 2175541218), Long_create(3109405388, 3480865949), Long_create(3346517769, 2784692759), Long_create(3536207675, 2227754207), Long_create(2221958443, 3564406732), Long_create(59579836, 2851525386), Long_create(3483637705, 2281220308), Long_create(419859574, 3649952494), Long_create(1194881118, 2919961995), Long_create(955904894, 2335969596), Long_create(4106428209, 3737551353),
    Long_create(708162189, 2990041083), Long_create(2284516670, 2392032866), Long_create(1937239754, 3827252586), Long_create(690798344, 3061802069), Long_create(1411632134, 2449441655), Long_create(2258611415, 3919106648), Long_create(3524876050, 3135285318), Long_create(242920462, 2508228255), Long_create(388672740, 4013165208), Long_create(2028925110, 3210532166), Long_create(764146629, 2568425733), Long_create(363641147, 4109481173), Long_create(2008899836, 3287584938), Long_create(3325106787, 2630067950),
    Long_create(1025203564, 4208108721), Long_create(4256136688, 3366486976), Long_create(2545915891, 2693189581), Long_create(1177739254, 2154551665), Long_create(1884382806, 3447282664), Long_create(2366499704, 2757826131), Long_create(1034206304, 2206260905), Long_create(1654730086, 3530017448), Long_create(3041770987, 2824013958), Long_create(4151403708, 2259211166), Long_create(629291719, 3614737867), Long_create(3080413753, 2891790293), Long_create(4182317920, 2313432234), Long_create(4114728295, 3701491575),
    Long_create(3291782636, 2961193260), Long_create(2633426109, 2368954608), Long_create(3354488315, 3790327373), Long_create(106610275, 3032261899), Long_create(944281679, 2425809519), Long_create(3228837605, 3881295230), Long_create(2583070084, 3105036184), Long_create(2925449526, 2484028947), Long_create(1244745405, 3974446316), Long_create(136802865, 3179557053), Long_create(1827429210, 2543645642), Long_create(3782880196, 4069833027), Long_create(1308317238, 3255866422), Long_create(3623634168, 2604693137),
    Long_create(2361840832, 4167509020), Long_create(1889472666, 3334007216), Long_create(652584673, 2667205773), Long_create(185142018, 4267529237), Long_create(2725093992, 3414023389), Long_create(3039068653, 2731218711), Long_create(1572261463, 2184974969), Long_create(4233605259, 3495959950), Long_create(3386884207, 2796767960), Long_create(2709507366, 2237414368), Long_create(3476218326, 3579862989), Long_create(3639968120, 2863890391), Long_create(2052981037, 2291112313), Long_create(2425776200, 3665779701),
    Long_create(1081627501, 2932623761), Long_create(6308541, 2346099009), Long_create(1728080585, 3753758414), Long_create(2241457927, 3003006731), Long_create(934172882, 2402405385), Long_create(1494676612, 3843848616), Long_create(336747830, 3075078893), Long_create(1987385183, 2460063114), Long_create(602835915, 3936100983), Long_create(2200255650, 3148880786), Long_create(901211061, 2519104629), Long_create(3159924616, 4030567406), Long_create(1668946233, 3224453925), Long_create(1335156987, 2579563140),
    Long_create(2136251179, 4127301024), Long_create(2567994402, 3301840819), Long_create(2913388981, 2641472655), Long_create(366455074, 4226356249), Long_create(1152157518, 3381084999), Long_create(1780719474, 2704867999), Long_create(2283569038, 2163894399), Long_create(1076730083, 3462231039), Long_create(1720377526, 2769784831), Long_create(517308561, 2215827865), Long_create(827693699, 3545324584), Long_create(1521148418, 2836259667), Long_create(3793899112, 2269007733), Long_create(916277824, 3630412374),
    Long_create(1592015718, 2904329899), Long_create(2132606034, 2323463919), Long_create(835189277, 3717542271), Long_create(4104125258, 2974033816), Long_create(2424306747, 2379227053), Long_create(3019897337, 3806763285), Long_create(2415917869, 3045410628), Long_create(3650721214, 2436328502), Long_create(2405180105, 3898125604), Long_create(2783137543, 3118500483), Long_create(3944496953, 2494800386), Long_create(298240911, 3991680619), Long_create(1097586188, 3193344495), Long_create(878068950, 2554675596),
    Long_create(3981890698, 4087480953), Long_create(608532181, 3269984763), Long_create(2204812663, 2615987810), Long_create(3527700261, 4185580496), Long_create(1963166749, 3348464397), Long_create(4147513777, 2678771517), Long_create(3200048207, 4286034428), Long_create(4278025484, 3428827542), Long_create(1704433468, 2743062034), Long_create(2222540234, 2194449627), Long_create(120090538, 3511119404), Long_create(955065889, 2808895523), Long_create(2482039630, 2247116418), Long_create(3112269949, 3595386269),
    Long_create(3348809418, 2876309015), Long_create(2679047534, 2301047212), Long_create(850502218, 3681675540), Long_create(680401775, 2945340432), Long_create(3121301797, 2356272345), Long_create(699115580, 3770035753), Long_create(2277279382, 3016028602), Long_create(103836587, 2412822882), Long_create(1025131999, 3860516611), Long_create(4256079436, 3088413288), Long_create(827883168, 2470730631), Long_create(3901593088, 3953169009)]);
    otcit_DoubleAnalyzer_exp10Table = $rt_createShortArrayFromData([(-70), (-66), (-63), (-60), (-56), (-53), (-50), (-46), (-43), (-40), (-36), (-33), (-30), (-26), (-23), (-20), (-16), (-13), (-10), (-6), (-3), 0, 4, 7, 10, 14, 17, 20, 23, 27, 30, 33, 37, 40, 43, 47, 50, 53, 57, 60, 63, 67, 70, 73, 77, 80, 83, 87, 90, 93, 97, 100, 103, 107, 110, 113, 116, 120, 123, 126, 130, 133, 136, 140, 143, 146, 150, 153, 156, 160, 163, 166, 170, 173, 176, 180, 183, 186, 190, 193, 196, 200, 203, 206, 210, 213, 216, 219,
    223, 226, 229, 233, 236, 239, 243, 246, 249, 253, 256, 259, 263, 266, 269, 273, 276, 279, 283, 286, 289, 293, 296, 299, 303, 306, 309, 312, 316, 319, 322, 326, 329, 332, 336, 339, 342, 346, 349, 352, 356, 359, 362, 366, 369, 372, 376, 379, 382, 386, 389, 392, 396, 399, 402, 406, 409, 412, 415, 419, 422, 425, 429, 432, 435, 439, 442, 445, 449, 452, 455, 459, 462, 465, 469, 472, 475, 479, 482, 485, 489, 492, 495, 499, 502, 505, 508, 512, 515, 518, 522, 525, 528, 532, 535, 538, 542, 545, 548, 552, 555, 558,
    562, 565, 568, 572, 575, 578, 582, 585, 588, 592, 595, 598, 601, 605, 608, 611, 615, 618, 621, 625, 628, 631, 635, 638, 641, 645, 648, 651, 655, 658, 661, 665, 668, 671, 675, 678, 681, 685, 688, 691, 695, 698, 701, 704, 708, 711, 714, 718, 721, 724, 728, 731, 734, 738, 741, 744, 748, 751, 754, 758, 761, 764, 768, 771, 774, 778, 781, 784, 788, 791, 794, 797, 801, 804, 807, 811, 814, 817, 821, 824, 827, 831, 834, 837, 841, 844, 847, 851, 854, 857, 861, 864, 867, 871, 874, 877, 881, 884, 887, 891, 894, 897,
    900, 904, 907, 910, 914, 917, 920, 924, 927, 930, 934, 937, 940, 944, 947, 950, 954, 957, 960, 964, 967, 970, 974, 977, 980, 984, 987, 990, 993, 997, 1000, 1003, 1007, 1010, 1013, 1017, 1020, 1023, 1027, 1030, 1033, 1037, 1040, 1043, 1047, 1050, 1053, 1057, 1060, 1063, 1067, 1070, 1073, 1077, 1080, 1083, 1086, 1090, 1093, 1096, 1100, 1103, 1106, 1110, 1113, 1116, 1120, 1123, 1126, 1130, 1133, 1136, 1140, 1143, 1146, 1150, 1153, 1156, 1160, 1163, 1166, 1170, 1173, 1176, 1180, 1183, 1186, 1189, 1193, 1196,
    1199, 1203, 1206, 1209, 1213, 1216, 1219, 1223, 1226, 1229, 1233, 1236, 1239, 1243, 1246, 1249, 1253, 1256, 1259, 1263, 1266, 1269, 1273, 1276, 1279, 1282, 1286, 1289, 1292, 1296, 1299, 1302, 1306, 1309, 1312, 1316, 1319, 1322, 1326, 1329, 1332, 1336, 1339, 1342, 1346, 1349, 1352, 1356, 1359, 1362, 1366, 1369, 1372, 1376, 1379, 1382, 1385, 1389, 1392, 1395, 1399, 1402, 1405, 1409, 1412, 1415, 1419, 1422, 1425, 1429, 1432, 1435, 1439, 1442, 1445, 1449, 1452, 1455, 1459, 1462, 1465, 1469, 1472, 1475, 1478,
    1482, 1485, 1488, 1492, 1495, 1498, 1502, 1505, 1508, 1512, 1515, 1518, 1522, 1525, 1528, 1532, 1535, 1538, 1542, 1545, 1548, 1552, 1555, 1558, 1562, 1565, 1568, 1572, 1575, 1578, 1581, 1585, 1588, 1591, 1595, 1598, 1601, 1605, 1608, 1611, 1615, 1618, 1621, 1625, 1628, 1631, 1635, 1638, 1641, 1645, 1648, 1651, 1655, 1658, 1661, 1665, 1668, 1671, 1674, 1678, 1681, 1684, 1688, 1691, 1694, 1698, 1701, 1704, 1708, 1711, 1714, 1718, 1721, 1724, 1728, 1731, 1734, 1738, 1741, 1744, 1748, 1751, 1754, 1758, 1761,
    1764, 1767, 1771, 1774, 1777, 1781, 1784, 1787, 1791, 1794, 1797, 1801, 1804, 1807, 1811, 1814, 1817, 1821, 1824, 1827, 1831, 1834, 1837, 1841, 1844, 1847, 1851, 1854, 1857, 1861, 1864, 1867, 1870, 1874, 1877, 1880, 1884, 1887, 1890, 1894, 1897, 1900, 1904, 1907, 1910, 1914, 1917, 1920, 1924, 1927, 1930, 1934, 1937, 1940, 1944, 1947, 1950, 1954, 1957, 1960, 1963, 1967, 1970, 1973, 1977, 1980, 1983, 1987, 1990, 1993, 1997, 2000, 2003, 2007, 2010, 2013, 2017, 2020, 2023, 2027, 2030, 2033, 2037, 2040, 2043,
    2047, 2050, 2053, 2057, 2060, 2063, 2066, 2070, 2073, 2076, 2080, 2083, 2086, 2090, 2093, 2096, 2100, 2103, 2106, 2110, 2113, 2116, 2120]);
};
function cpcs_Header$build$lambda$_1_1() {
    let a = this; jl_Object.call(a);
    a.$_052 = null;
    a.$_111 = null;
}
let cpcs_Header$build$lambda$_1_1__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_052 = var$1;
    var$0.$_111 = var$2;
},
cpcs_Header$build$lambda$_1_1__init_0 = (var_0, var_1) => {
    let var_2 = new cpcs_Header$build$lambda$_1_1();
    cpcs_Header$build$lambda$_1_1__init_(var_2, var_0, var_1);
    return var_2;
},
cpcs_Header$build$lambda$_1_1_run = var$0 => {
    cpcs_Header_lambda$build$0(var$0.$_052, var$0.$_111);
};
function cpcs_Header$build$lambda$_1_2() {
    let a = this; jl_Object.call(a);
    a.$_016 = null;
    a.$_10 = null;
}
let cpcs_Header$build$lambda$_1_2__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_016 = var$1;
    var$0.$_10 = var$2;
},
cpcs_Header$build$lambda$_1_2__init_0 = (var_0, var_1) => {
    let var_2 = new cpcs_Header$build$lambda$_1_2();
    cpcs_Header$build$lambda$_1_2__init_(var_2, var_0, var_1);
    return var_2;
},
cpcs_Header$build$lambda$_1_2_run = var$0 => {
    cpcs_Header_lambda$build$1(var$0.$_016, var$0.$_10);
};
function cpce_MatchingEngineStudio$injectBurst$lambda$_9_0() {
    jl_Object.call(this);
    this.$_030 = null;
}
let cpce_MatchingEngineStudio$injectBurst$lambda$_9_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_030 = var$1;
},
cpce_MatchingEngineStudio$injectBurst$lambda$_9_0__init_0 = var_0 => {
    let var_1 = new cpce_MatchingEngineStudio$injectBurst$lambda$_9_0();
    cpce_MatchingEngineStudio$injectBurst$lambda$_9_0__init_(var_1, var_0);
    return var_1;
},
cpce_MatchingEngineStudio$injectBurst$lambda$_9_0_accept0 = (var$0, var$1) => {
    cpce_MatchingEngineStudio$injectBurst$lambda$_9_0_accept(var$0, var$1);
},
cpce_MatchingEngineStudio$injectBurst$lambda$_9_0_accept = (var$0, var$1) => {
    cpce_MatchingEngineStudio_lambda$injectBurst$14(var$0.$_030, var$1);
},
cpcs_Header = $rt_classWithoutFields(),
cpcs_Header_TABS = null,
cpcs_Header_$callClinit = () => {
    cpcs_Header_$callClinit = $rt_eraseClinit(cpcs_Header);
    cpcs_Header__clinit_();
},
cpcs_Header_build = ($slot, $activeTab, $primaryActionLabel, $compact, $cb) => {
    let $header, $brand, var$8, $brandText, var$10, $nav, var$12, var$13, var$14, $tab, var$16, var$17, $cls, var$19, var$20, $b, $zone3, $primary, $mobile, var$25;
    cpcs_Header_$callClinit();
    cpcs_Ui_clear($slot);
    $header = cpcs_Ui_el($rt_s(839), $rt_s(840));
    $brand = cpcs_Ui_el($rt_s(21), $rt_s(841));
    var$8 = $rt_createArray(jl_Object, 1);
    var$8.data[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(21), $rt_s(842), $rt_s(30)));
    cpcs_Ui_add($brand, var$8);
    $brandText = cpcs_Ui_el($rt_s(21), $rt_s(843));
    var$8 = $rt_createArray(jl_Object, 2);
    var$10 = var$8.data;
    var$10[0] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(844), $rt_s(106)));
    var$10[1] = otji_JSWrapper_wrap(cpcs_Ui_el0($rt_s(28), $rt_s(845), $rt_s(846)));
    cpcs_Ui_add($brandText, var$8);
    var$8 = $rt_createArray(jl_Object, 1);
    var$8.data[0] = otji_JSWrapper_wrap($brandText);
    cpcs_Ui_add($brand, var$8);
    $nav = cpcs_Ui_el($rt_s(847), $rt_s(848));
    var$12 = cpcs_Header_TABS.data;
    var$13 = var$12.length;
    var$14 = 0;
    while (var$14 < var$13) {
        $tab = var$12[var$14];
        var$8 = $tab.data;
        var$16 = !$activeTab.$equals(var$8[0]) ? $rt_s(468) : $rt_s(438);
        var$17 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$17, $rt_s(849)), var$16);
        $cls = jl_StringBuilder_toString(var$17);
        var$16 = var$8[3];
        var$16 = cpcs_Icons_svg(var$16, $rt_s(462));
        var$17 = !$compact ? $rt_s(850) : $rt_s(851);
        var$19 = var$8[1];
        var$20 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$20, var$16), $rt_s(323)), var$17), $rt_s(694)), var$19), $rt_s(307));
        var$16 = jl_StringBuilder_toString(var$20);
        var$17 = cpcs_Header$build$lambda$_1_1__init_0($cb, $tab);
        $b = cpcs_Ui_btnHtml($cls, var$16, var$17);
        var$8 = $rt_createArray(jl_Object, 1);
        var$8.data[0] = otji_JSWrapper_wrap($b);
        cpcs_Ui_add($nav, var$8);
        var$14 = var$14 + 1 | 0;
    }
    $zone3 = cpcs_Ui_el($rt_s(21), $rt_s(852));
    var$17 = cpcs_Icons_svg($rt_s(821), $rt_s(292));
    var$16 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$16, var$17), $rt_s(853)), $primaryActionLabel), $rt_s(307));
    var$16 = jl_StringBuilder_toString(var$16);
    ju_Objects_requireNonNull($cb);
    var$17 = cpcs_Header$build$lambda$_1_0__init_0($cb);
    $primary = cpcs_Ui_btnHtml($rt_s(854), var$16, var$17);
    var$8 = $rt_createArray(jl_Object, 1);
    var$8.data[0] = otji_JSWrapper_wrap($primary);
    cpcs_Ui_add($zone3, var$8);
    var$8 = $rt_createArray(jl_Object, 3);
    var$10 = var$8.data;
    var$10[0] = otji_JSWrapper_wrap($brand);
    var$10[1] = otji_JSWrapper_wrap($nav);
    var$10[2] = otji_JSWrapper_wrap($zone3);
    cpcs_Ui_add($header, var$8);
    $mobile = cpcs_Ui_el($rt_s(847), $rt_s(855));
    var$8 = cpcs_Header_TABS.data;
    var$25 = var$8.length;
    var$13 = 0;
    while (var$13 < var$25) {
        $tab = var$8[var$13];
        var$10 = $tab.data;
        var$16 = !$activeTab.$equals(var$10[0]) ? $rt_s(468) : $rt_s(438);
        var$17 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$17, $rt_s(856)), var$16);
        $cls = jl_StringBuilder_toString(var$17);
        var$16 = cpcs_Icons_svg(var$10[3], $rt_s(462));
        var$17 = var$10[2];
        var$19 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$19, var$16), var$17);
        $b = cpcs_Ui_btnHtml($cls, jl_StringBuilder_toString(var$19), cpcs_Header$build$lambda$_1_2__init_0($cb, $tab));
        var$10 = $rt_createArray(jl_Object, 1);
        var$10.data[0] = otji_JSWrapper_wrap($b);
        cpcs_Ui_add($mobile, var$10);
        var$13 = var$13 + 1 | 0;
    }
    var$8 = $rt_createArray(jl_Object, 2);
    var$10 = var$8.data;
    var$10[0] = otji_JSWrapper_wrap($header);
    var$10[1] = otji_JSWrapper_wrap($mobile);
    cpcs_Ui_add($slot, var$8);
},
cpcs_Header_lambda$build$1 = ($cb, $tab) => {
    cpcs_Header_$callClinit();
    $cb.$onTabChange($tab.data[0]);
},
cpcs_Header_lambda$build$0 = ($cb, $tab) => {
    cpcs_Header_$callClinit();
    $cb.$onTabChange($tab.data[0]);
},
cpcs_Header__clinit_ = () => {
    let var$1, var$2;
    var$1 = $rt_createArray($rt_arraycls(jl_String), 3);
    var$2 = var$1.data;
    var$2[0] = $rt_wrapArray(jl_String, [$rt_s(19), $rt_s(55), $rt_s(119), $rt_s(120)]);
    var$2[1] = $rt_wrapArray(jl_String, [$rt_s(52), $rt_s(57), $rt_s(857), $rt_s(124)]);
    var$2[2] = $rt_wrapArray(jl_String, [$rt_s(53), $rt_s(58), $rt_s(125), $rt_s(126)]);
    cpcs_Header_TABS = var$1;
};
function otciu_CharMapping() {
    let a = this; jl_Object.call(a);
    a.$binarySearchTable0 = null;
    a.$fastTable = null;
}
let otciu_CharMapping__init_ = ($this, $binarySearchTable, $fastTable) => {
    jl_Object__init_($this);
    $this.$binarySearchTable0 = $binarySearchTable;
    $this.$fastTable = $fastTable;
},
otciu_CharMapping__init_0 = (var_0, var_1) => {
    let var_2 = new otciu_CharMapping();
    otciu_CharMapping__init_(var_2, var_0, var_1);
    return var_2;
};
function cpcs_AppShell$_init_$lambda$_0_6() {
    jl_Object.call(this);
    this.$_033 = null;
}
let cpcs_AppShell$_init_$lambda$_0_6__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_033 = var$1;
},
cpcs_AppShell$_init_$lambda$_0_6__init_0 = var_0 => {
    let var_1 = new cpcs_AppShell$_init_$lambda$_0_6();
    cpcs_AppShell$_init_$lambda$_0_6__init_(var_1, var_0);
    return var_1;
},
cpcs_AppShell$_init_$lambda$_0_6_call = var$0 => {
    cpcs_AppShell_lambda$new$2(var$0.$_033);
},
cpcs_AppShell$_init_$lambda$_0_6_call$exported$0 = var$1 => {
    var$1.$call();
},
otjc_JSWeakRef = $rt_classWithoutFields();
function cpcj_Ws$onOpen$lambda$_1_0() {
    jl_Object.call(this);
    this.$_024 = null;
}
let cpcj_Ws$onOpen$lambda$_1_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_024 = var$1;
},
cpcj_Ws$onOpen$lambda$_1_0__init_0 = var_0 => {
    let var_1 = new cpcj_Ws$onOpen$lambda$_1_0();
    cpcj_Ws$onOpen$lambda$_1_0__init_(var_1, var_0);
    return var_1;
},
cpcj_Ws$onOpen$lambda$_1_0_call = var$0 => {
    var$0.$_024.$run();
},
cpcj_Ws$onOpen$lambda$_1_0_call$exported$0 = var$1 => {
    var$1.$call();
};
function otci_CharFlow() {
    let a = this; jl_Object.call(a);
    a.$characters = null;
    a.$pointer = 0;
}
let otci_CharFlow__init_ = ($this, $characters) => {
    jl_Object__init_($this);
    $this.$characters = $characters;
},
otci_CharFlow__init_0 = var_0 => {
    let var_1 = new otci_CharFlow();
    otci_CharFlow__init_(var_1, var_0);
    return var_1;
};
function cpcj_Ws$onError$lambda$_4_0() {
    jl_Object.call(this);
    this.$_07 = null;
}
let cpcj_Ws$onError$lambda$_4_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_07 = var$1;
},
cpcj_Ws$onError$lambda$_4_0__init_0 = var_0 => {
    let var_1 = new cpcj_Ws$onError$lambda$_4_0();
    cpcj_Ws$onError$lambda$_4_0__init_(var_1, var_0);
    return var_1;
},
cpcj_Ws$onError$lambda$_4_0_call = var$0 => {
    var$0.$_07.$run();
},
cpcj_Ws$onError$lambda$_4_0_call$exported$0 = var$1 => {
    var$1.$call();
},
cpcs_Clipboard = $rt_classWithoutFields(),
cpcs_Clipboard_copy$js_body$_1 = var$1 => {
    function fallback(t) {
        var ta = document.createElement('textarea');
        ta.value = t;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand('copy');
        } finally {
            document.body.removeChild(ta);
        }
    }
    try {
        if (navigator.clipboard && window.isSecureContext) {
            (navigator.clipboard.writeText(var$1)).catch(function() {
                fallback(var$1);
            });
            return;
        }
    } catch (e){
    }
    fallback(var$1);
},
otcit_DoubleSynthesizer = $rt_classWithoutFields(),
otcit_DoubleSynthesizer_mantissa10Table = null,
otcit_DoubleSynthesizer_exp10Table = null,
otcit_DoubleSynthesizer_$callClinit = () => {
    otcit_DoubleSynthesizer_$callClinit = $rt_eraseClinit(otcit_DoubleSynthesizer);
    otcit_DoubleSynthesizer__clinit_();
},
otcit_DoubleSynthesizer_synthesizeDouble = (var$1, $exp, $negative) => {
    let $indexInTable, $binMantissa, $binExp, $binMantissaShift, var$8, var$9, $mantissaLowerBits, $mantissaLowerPos, $error, $correction, $binMantissaWithoutError, $low, $hi, var$17, var$18, $cmp, $iee754;
    otcit_DoubleSynthesizer_$callClinit();
    $indexInTable = 330 + $exp | 0;
    if (Long_ne(var$1, Long_ZERO) && $indexInTable >= 0) {
        if ($indexInTable >= otcit_DoubleSynthesizer_mantissa10Table.data.length)
            return !$negative ? Infinity : (-Infinity);
        $binMantissa = otcit_DoubleAnalyzer_mulAndShiftRight(var$1, otcit_DoubleSynthesizer_mantissa10Table.data[$indexInTable], 0);
        $binExp = otcit_DoubleSynthesizer_exp10Table.data[$indexInTable];
        $binMantissaShift = (64 - jl_Long_numberOfLeadingZeros($binMantissa) | 0) - 58 | 0;
        var$8 = $binMantissaShift >= 0 ? Long_shru($binMantissa, $binMantissaShift) : Long_shl($binMantissa,  -$binMantissaShift | 0);
        var$9 = $binExp + $binMantissaShift | 0;
        if (var$9 >= 2047)
            return !$negative ? Infinity : (-Infinity);
        $mantissaLowerBits = 5;
        $mantissaLowerPos = 32;
        $error = Long_lo(Long_and(var$8, Long_fromInt(31)));
        $correction = 16;
        if (jl_Math_abs($error - 16 | 0) <= 1) {
            $binMantissaWithoutError = Long_and(var$8, Long_fromInt(-32));
            $low = otcit_DoubleSynthesizer_calcDecMantissa($binMantissaWithoutError, $mantissaLowerPos, $indexInTable, var$9);
            $hi = otcit_DoubleSynthesizer_calcDecMantissa(Long_add($binMantissaWithoutError, Long_fromInt(32)), $mantissaLowerPos, $indexInTable, var$9);
            var$17 = Long_sub(var$1, $low);
            var$18 = Long_sub($hi, var$1);
            $cmp = jl_Long_compareUnsigned(var$17, var$18);
            if ($cmp < 0)
                $correction =  -$error | 0;
            else if ($cmp > 0)
                $correction = $mantissaLowerPos - $error | 0;
        }
        var$8 = Long_add(var$8, Long_fromInt($correction));
        if (Long_ne(Long_and(var$8, Long_create(0, 4227858432)), Long_ZERO)) {
            var$8 = Long_shru(var$8, 1);
            var$9 = var$9 + 1 | 0;
        }
        if (var$9 <= 0) {
            var$8 = Long_shr(var$8, jl_Math_min(( -var$9 | 0) + 1 | 0, 64));
            var$9 = 0;
        }
        var$8 = Long_and(Long_shru(var$8, $mantissaLowerBits), Long_create(4294967295, 1048575));
        $iee754 = Long_or(var$8, Long_shl(Long_fromInt(var$9), 52));
        if ($negative)
            $iee754 = Long_xor($iee754, Long_create(0, 2147483648));
        return $rt_longBitsToDouble($iee754);
    }
    return $rt_longBitsToDouble((!$negative ? Long_ZERO : Long_create(0, 2147483648)));
},
otcit_DoubleSynthesizer_calcDecMantissa = ($mantissa, $lowerBit, $indexInTable, $binExp) => {
    let $half, $shift, $decMantissa, var$8, $decMantissaHi, $decMantissaLow, $lowerPos, $upperPos, $posCmp;
    otcit_DoubleSynthesizer_$callClinit();
    $half = $lowerBit >>> 1 | 0;
    otcit_DoubleAnalyzer_$callClinit();
    $shift = 7 - (otcit_DoubleAnalyzer_exp10Table.data[$indexInTable] - $binExp | 0) | 0;
    $decMantissa = otcit_DoubleAnalyzer_mulAndShiftRight($mantissa, otcit_DoubleAnalyzer_mantissa10Table.data[$indexInTable], $shift);
    var$8 = Long_fromInt($half);
    $decMantissaHi = otcit_DoubleAnalyzer_mulAndShiftRight(Long_add($mantissa, var$8), otcit_DoubleAnalyzer_mantissa10Table.data[$indexInTable], $shift);
    $decMantissaLow = otcit_DoubleAnalyzer_mulAndShiftRight(Long_sub($mantissa, var$8), otcit_DoubleAnalyzer_mantissa10Table.data[$indexInTable], $shift);
    $lowerPos = otcit_DoubleAnalyzer_findLowerDistance($decMantissa, $decMantissaLow);
    $upperPos = otcit_DoubleAnalyzer_findUpperDistance($decMantissa, $decMantissaHi);
    $posCmp = jl_Long_compareUnsigned($lowerPos, $upperPos);
    var$8 = $posCmp > 0 ? Long_mul(jl_Long_divideUnsigned($decMantissa, $lowerPos), $lowerPos) : $posCmp < 0 ? Long_add(Long_mul(jl_Long_divideUnsigned($decMantissa, $upperPos), $upperPos), $upperPos) : Long_mul(jl_Long_divideUnsigned(Long_add($decMantissa, Long_div($upperPos, Long_fromInt(2))), $upperPos), $upperPos);
    return var$8;
},
otcit_DoubleSynthesizer__clinit_ = () => {
    otcit_DoubleSynthesizer_mantissa10Table = $rt_createLongArrayFromData([Long_create(136053384, 4203730336), Long_create(85033365, 2627331460), Long_create(106291706, 3284164325), Long_create(1206606457, 4105205406), Long_create(3975354508, 2565753378), Long_create(2821709486, 3207191723), Long_create(2453395034, 4008989654), Long_create(459630072, 2505618534), Long_create(2722021238, 3132023167), Long_create(2328784724, 3915028959), Long_create(3066103188, 2446893099), Long_create(2758887162, 3058616374),
    Long_create(1301125304, 3823270468), Long_create(2960686963, 2389544042), Long_create(1553375056, 2986930053), Long_create(3015460644, 3733662566), Long_create(810921078, 2333539104), Long_create(1013651348, 2916923880), Long_create(1267064185, 3646154850), Long_create(1865656940, 2278846781), Long_create(3405812998, 2848558476), Long_create(4257266248, 3560698095), Long_create(4271404141, 2225436309), Long_create(2118029704, 2781795387), Long_create(1573795306, 3477244234), Long_create(2057363890, 2173277646),
    Long_create(424221215, 2716597058), Long_create(2677760167, 3395746322), Long_create(1199716561, 4244682903), Long_create(2360435586, 2652926814), Long_create(803060835, 3316158518), Long_create(3151309692, 4145198147), Long_create(1432697645, 2590748842), Long_create(3938355705, 3238436052), Long_create(627977335, 4048045066), Long_create(1466227658, 2530028166), Long_create(3980268221, 3162535207), Long_create(3901593452, 3953169009), Long_create(827883171, 2470730631), Long_create(4256079436, 3088413288),
    Long_create(1025131999, 3860516611), Long_create(103836588, 2412822882), Long_create(2277279383, 3016028602), Long_create(699115580, 3770035753), Long_create(3121301798, 2356272345), Long_create(680401775, 2945340432), Long_create(850502219, 3681675540), Long_create(2679047535, 2301047212), Long_create(3348809418, 2876309015), Long_create(3112269949, 3595386269), Long_create(2482039630, 2247116418), Long_create(955065890, 2808895523), Long_create(120090538, 3511119404), Long_create(2222540234, 2194449627),
    Long_create(1704433469, 2743062034), Long_create(4278025484, 3428827542), Long_create(3200048207, 4286034428), Long_create(4147513777, 2678771517), Long_create(1963166750, 3348464397), Long_create(3527700261, 4185580496), Long_create(2204812663, 2615987810), Long_create(608532181, 3269984763), Long_create(3981890698, 4087480953), Long_create(878068951, 2554675596), Long_create(1097586188, 3193344495), Long_create(298240911, 3991680619), Long_create(3944496953, 2494800386), Long_create(2783137544, 3118500483),
    Long_create(2405180106, 3898125604), Long_create(3650721214, 2436328502), Long_create(2415917870, 3045410628), Long_create(3019897337, 3806763285), Long_create(2424306748, 2379227053), Long_create(4104125259, 2974033816), Long_create(835189277, 3717542271), Long_create(2132606034, 2323463919), Long_create(1592015719, 2904329899), Long_create(916277825, 3630412374), Long_create(3793899112, 2269007733), Long_create(1521148418, 2836259667), Long_create(827693699, 3545324584), Long_create(517308562, 2215827865),
    Long_create(1720377526, 2769784831), Long_create(1076730084, 3462231039), Long_create(2283569038, 2163894399), Long_create(1780719474, 2704867999), Long_create(1152157519, 3381084999), Long_create(366455074, 4226356249), Long_create(2913388981, 2641472655), Long_create(2567994403, 3301840819), Long_create(2136251179, 4127301024), Long_create(1335156987, 2579563140), Long_create(1668946234, 3224453925), Long_create(3159924616, 4030567406), Long_create(901211061, 2519104629), Long_create(2200255651, 3148880786),
    Long_create(602835915, 3936100983), Long_create(1987385183, 2460063114), Long_create(336747831, 3075078893), Long_create(1494676613, 3843848616), Long_create(934172883, 2402405385), Long_create(2241457928, 3003006731), Long_create(1728080585, 3753758414), Long_create(6308542, 2346099009), Long_create(1081627501, 2932623761), Long_create(2425776201, 3665779701), Long_create(2052981037, 2291112313), Long_create(3639968121, 2863890391), Long_create(3476218327, 3579862989), Long_create(2709507366, 2237414368),
    Long_create(3386884208, 2796767960), Long_create(4233605260, 3495959950), Long_create(1572261463, 2184974969), Long_create(3039068653, 2731218711), Long_create(2725093993, 3414023389), Long_create(185142019, 4267529237), Long_create(652584674, 2667205773), Long_create(1889472666, 3334007216), Long_create(2361840833, 4167509020), Long_create(3623634168, 2604693137), Long_create(1308317239, 3255866422), Long_create(3782880196, 4069833027), Long_create(1827429211, 2543645642), Long_create(136802865, 3179557053),
    Long_create(1244745406, 3974446316), Long_create(2925449527, 2484028947), Long_create(2583070084, 3105036184), Long_create(3228837605, 3881295230), Long_create(944281679, 2425809519), Long_create(106610275, 3032261899), Long_create(3354488316, 3790327373), Long_create(2633426109, 2368954608), Long_create(3291782637, 2961193260), Long_create(4114728296, 3701491575), Long_create(4182317921, 2313432234), Long_create(3080413753, 2891790293), Long_create(629291719, 3614737867), Long_create(4151403709, 2259211166),
    Long_create(3041770988, 2824013958), Long_create(1654730087, 3530017448), Long_create(1034206304, 2206260905), Long_create(2366499704, 2757826131), Long_create(1884382806, 3447282664), Long_create(1177739254, 2154551665), Long_create(2545915892, 2693189581), Long_create(4256136688, 3366486976), Long_create(1025203564, 4208108721), Long_create(3325106788, 2630067950), Long_create(2008899837, 3287584938), Long_create(363641148, 4109481173), Long_create(764146629, 2568425733), Long_create(2028925111, 3210532166),
    Long_create(388672741, 4013165208), Long_create(242920463, 2508228255), Long_create(3524876051, 3135285318), Long_create(2258611415, 3919106648), Long_create(1411632134, 2449441655), Long_create(690798344, 3061802069), Long_create(1937239754, 3827252586), Long_create(2284516670, 2392032866), Long_create(708162190, 2990041083), Long_create(4106428209, 3737551353), Long_create(955904895, 2335969596), Long_create(1194881119, 2919961995), Long_create(419859574, 3649952494), Long_create(3483637706, 2281220308),
    Long_create(59579836, 2851525386), Long_create(2221958443, 3564406732), Long_create(3536207675, 2227754207), Long_create(3346517770, 2784692759), Long_create(3109405388, 3480865949), Long_create(2480249280, 2175541218), Long_create(952827952, 2719426523), Long_create(117293116, 3399283154), Long_create(2294100043, 4249103942), Long_create(360070703, 2655689964), Long_create(450088378, 3319612455), Long_create(3783835945, 4149515568), Long_create(2364897466, 2593447230), Long_create(808638184, 3241809038),
    Long_create(3158281378, 4052261297), Long_create(363313125, 2532663311), Long_create(3675366878, 3165829138), Long_create(2446724950, 3957286423), Long_create(3139815830, 2473304014), Long_create(1777286139, 3091630018), Long_create(74124026, 3864537523), Long_create(3804423900, 2415335951), Long_create(3681788051, 3019169939), Long_create(3528493240, 3773962424), Long_create(2205308275, 2358726515), Long_create(1682893520, 2948408144), Long_create(2103616900, 3685510180), Long_create(3462244210, 2303443862),
    Long_create(2180321615, 2879304828), Long_create(2725402019, 3599131035), Long_create(1166505350, 2249456897), Long_create(2531873511, 2811821121), Long_create(4238583713, 3514776401), Long_create(1038502085, 2196735251), Long_create(224385782, 2745919064), Long_create(280482227, 3432398830), Long_create(2498086432, 4290498537), Long_create(4245658580, 2681561585), Long_create(2085847753, 3351951982), Long_create(459826043, 4189939978), Long_create(1361133101, 2618712486), Long_create(3848900024, 3273390607),
    Long_create(3737383206, 4091738259), Long_create(1798993592, 2557336412), Long_create(2248741990, 3196670515), Long_create(1737185663, 3995838144), Long_create(1085741040, 2497398840), Long_create(1357176300, 3121748550), Long_create(3843954022, 3902185687), Long_create(4013084000, 2438866054), Long_create(2868871352, 3048582568), Long_create(3586089190, 3810728210), Long_create(3315047568, 2381705131), Long_create(3070067636, 2977131414), Long_create(1690100897, 3721414268), Long_create(3203796708, 2325883917),
    Long_create(783520414, 2907354897), Long_create(2053142341, 3634193621), Long_create(1820084875, 2271371013), Long_create(3348847918, 2839213766), Long_create(2038576249, 3549017208), Long_create(1274110156, 2218135755), Long_create(518895871, 2772669694), Long_create(2796103486, 3465837117), Long_create(2284435591, 2166148198), Long_create(708060841, 2707685248), Long_create(885076051, 3384606560), Long_create(1106345064, 4230758200), Long_create(691465665, 2644223875), Long_create(4085557553, 3305279843),
    Long_create(4033205117, 4131599804), Long_create(373269550, 2582249878), Long_create(2614070586, 3227812347), Long_create(2193846408, 4034765434), Long_create(2444895829, 2521728396), Long_create(3056119787, 3152160495), Long_create(2746407909, 3940200619), Long_create(1179634031, 2462625387), Long_create(400800715, 3078281734), Long_create(2648484542, 3847852167), Long_create(3265915575, 2404907604), Long_create(4082394468, 3006134505), Long_create(1881767613, 3757668132), Long_create(3323588406, 2348542582),
    Long_create(2007001860, 2935678228), Long_create(2508752325, 3669597785), Long_create(4252324763, 2293498615), Long_create(4241664130, 2866873269), Long_create(2080854690, 3583591587), Long_create(763663269, 2239744742), Long_create(3102062735, 2799680927), Long_create(2803836594, 3499601159), Long_create(3363010608, 2187250724), Long_create(4203763259, 2734063405), Long_create(2033478602, 3417579257), Long_create(3615590077, 4271974071), Long_create(3870356534, 2669983794), Long_create(2690462020, 3337479743),
    Long_create(2289335700, 4171849679), Long_create(3041447549, 2607406049), Long_create(580583964, 3259257562), Long_create(2873213603, 4074071952), Long_create(1795758502, 2546294970), Long_create(97214479, 3182868713), Long_create(1195259923, 3978585891), Long_create(210166540, 2486616182), Long_create(2410191823, 3108270227), Long_create(1938997955, 3885337784), Long_create(1211873722, 2428336115), Long_create(441100328, 3035420144), Long_create(551375410, 3794275180), Long_create(2492093279, 2371421987),
    Long_create(2041374775, 2964277484), Long_create(2551718469, 3705346855), Long_create(3205436779, 2315841784), Long_create(4006795974, 2894802230), Long_create(2861011319, 3618502788), Long_create(3935615723, 2261564242), Long_create(2772036005, 2826955303), Long_create(2391303183, 3533694129), Long_create(4178919049, 2208558830), Long_create(3076165163, 2760698538), Long_create(1697722806, 3450873173), Long_create(1597947666, 2156795733), Long_create(3071176406, 2695994666), Long_create(1691486860, 3369993333),
    Long_create(3188100399, 4212491666), Long_create(3066304573, 2632807291), Long_create(2759138893, 3291009114), Long_create(1301439968, 4113761393), Long_create(3497754540, 2571100870), Long_create(2224709527, 3213876088), Long_create(2780886909, 4017345110), Long_create(664312494, 2510840694), Long_create(2977874265, 3138550867), Long_create(2648601008, 3923188584), Long_create(1655375630, 2451992865), Long_create(3142961361, 3064991081), Long_create(707476230, 3831238852), Long_create(2589656291, 2394524282),
    Long_create(1089586716, 2993155353), Long_create(2435725219, 3741444191), Long_create(3132940998, 2338402619), Long_create(2842434424, 2923003274), Long_create(1405559382, 3653754093), Long_create(1415345525, 2283596308), Long_create(1769181907, 2854495385), Long_create(3285219208, 3568119231), Long_create(3663874741, 2230074519), Long_create(3506101602, 2787593149), Long_create(1161401530, 3484491437), Long_create(1262746869, 2177807148), Long_create(1578433586, 2722258935), Long_create(899300158, 3402823669),
    Long_create(2197867022, 4253529586), Long_create(2447408712, 2658455991), Long_create(1985519067, 3323069989), Long_create(3555640657, 4153837486), Long_create(1148533587, 2596148429), Long_create(2509408807, 3245185536), Long_create(3136761009, 4056481920), Long_create(1960475631, 2535301200), Long_create(2450594539, 3169126500), Long_create(3063243173, 3961408125), Long_create(2451397895, 2475880078), Long_create(916763721, 3094850098), Long_create(3293438299, 3868562622), Long_create(984657113, 2417851639),
    Long_create(157079567, 3022314549), Long_create(1270091283, 3777893186), Long_create(1867548876, 2361183241), Long_create(3408177919, 2951479051), Long_create(3186480575, 3689348814), Long_create(917808535, 2305843009), Long_create(2221002493, 2882303761), Long_create(3849994940, 3602879701), Long_create(2943117750, 2251799813), Long_create(457671715, 2814749767), Long_create(3793315116, 3518437208), Long_create(2370821947, 2199023255), Long_create(1889785610, 2748779069), Long_create(3435973837, 3435973836),
    Long_create(0, 2147483648), Long_create(0, 2684354560), Long_create(0, 3355443200), Long_create(0, 4194304000), Long_create(0, 2621440000), Long_create(0, 3276800000), Long_create(0, 4096000000), Long_create(0, 2560000000), Long_create(0, 3200000000), Long_create(0, 4000000000), Long_create(0, 2500000000), Long_create(0, 3125000000), Long_create(0, 3906250000), Long_create(0, 2441406250), Long_create(2147483648, 3051757812), Long_create(2684354560, 3814697265), Long_create(67108864, 2384185791), Long_create(3305111552, 2980232238),
    Long_create(1983905792, 3725290298), Long_create(2313682944, 2328306436), Long_create(2892103680, 2910383045), Long_create(393904128, 3637978807), Long_create(1856802816, 2273736754), Long_create(173519872, 2842170943), Long_create(3438125312, 3552713678), Long_create(1075086496, 2220446049), Long_create(2417599944, 2775557561), Long_create(4095741754, 3469446951), Long_create(4170451332, 2168404344), Long_create(918096869, 2710505431), Long_create(73879263, 3388131789), Long_create(1166090902, 4235164736),
    Long_create(728806814, 2646977960), Long_create(911008517, 3308722450), Long_create(3286244295, 4135903062), Long_create(980160860, 2584939414), Long_create(3372684723, 3231174267), Long_create(3142114080, 4038967834), Long_create(3037563124, 2524354896), Long_create(3796953905, 3155443620), Long_create(451225085, 3944304526), Long_create(3503241150, 2465190328), Long_create(84084142, 3081487911), Long_create(3326330649, 3851859888), Long_create(2078956656, 2407412430), Long_create(451212172, 3009265538),
    Long_create(2711498863, 3761581922), Long_create(2768428613, 2350988701), Long_create(239310295, 2938735877), Long_create(1372879692, 3673419846), Long_create(4079275280, 2295887403), Long_create(4025352276, 2869859254), Long_create(2884206696, 3587324068), Long_create(3950112833, 2242077542), Long_create(2790157394, 2802596928), Long_create(3487696742, 3503246160), Long_create(2179810464, 2189528850), Long_create(577279432, 2736911063), Long_create(3942824762, 3421138828), Long_create(633563656, 4276423536),
    Long_create(395977285, 2672764710), Long_create(2642455254, 3340955887), Long_create(2229327244, 4176194859), Long_create(856458615, 2610121787), Long_create(4291798741, 3262652233), Long_create(2143522955, 4078315292), Long_create(3487185495, 2548947057), Long_create(1137756396, 3186183822), Long_create(3569679143, 3982729777), Long_create(620436729, 2489206111), Long_create(3996771383, 3111507638), Long_create(2848480580, 3889384548), Long_create(3927784011, 2430865342), Long_create(2762246365, 3038581678),
    Long_create(1305324309, 3798227098), Long_create(1889569517, 2373891936), Long_create(2361961896, 2967364920), Long_create(2952452370, 3709206150), Long_create(771540907, 2318253844), Long_create(964426134, 2897817305), Long_create(2279274492, 3622271631), Long_create(3035159293, 2263919769), Long_create(572723645, 2829899712), Long_create(715904556, 3537374640), Long_create(447440347, 2210859150), Long_create(2706784082, 2763573937), Long_create(162254631, 3454467422), Long_create(3322634616, 2159042138),
    Long_create(2005809622, 2698802673), Long_create(3581003852, 3373503341), Long_create(1255029343, 4216879177), Long_create(3468747899, 2635549485), Long_create(1114709402, 3294436857), Long_create(2467128577, 4118046071), Long_create(3152568096, 2573778794), Long_create(1793226473, 3217223493), Long_create(3315274915, 4021529366), Long_create(998304998, 2513455854), Long_create(3395364895, 3141819817), Long_create(1022980647, 3927274772), Long_create(2786846552, 2454546732), Long_create(3483558190, 3068183415),
    Long_create(3280705914, 3835229269), Long_create(2587312108, 2397018293), Long_create(12914663, 2996272867), Long_create(3237368801, 3745341083), Long_create(1486484589, 2340838177), Long_create(2931847560, 2926047721), Long_create(443583978, 3657559652), Long_create(2424723634, 2285974782), Long_create(883420895, 2857468478), Long_create(3251759766, 3571835597), Long_create(2569220766, 2232397248), Long_create(3211525958, 2790496560), Long_create(4014407447, 3488120700), Long_create(361521006, 2180075438),
    Long_create(2599384906, 2725094297), Long_create(28005660, 3406367872), Long_create(35007075, 4257959840), Long_create(21879422, 2661224900), Long_create(27349278, 3326531125), Long_create(1107928421, 4158163906), Long_create(1766197087, 2598852441), Long_create(3281488183, 3248565551), Long_create(3028118405, 4060706939), Long_create(1355703091, 2537941837), Long_create(2768370688, 3172427296), Long_create(3460463360, 3965534120), Long_create(2162789600, 2478458825), Long_create(3777228824, 3098073531),
    Long_create(3647794206, 3872591914), Long_create(3353613203, 2420369946), Long_create(2044532855, 3025462433), Long_create(3629407893, 3781828041), Long_create(657767197, 2363642526), Long_create(2969692644, 2954553157), Long_create(490890333, 3693191447), Long_create(1917419194, 2308244654), Long_create(249290345, 2885305818), Long_create(2459096579, 3606632272), Long_create(1536935362, 2254145170), Long_create(4068652851, 2817681462), Long_create(2938332415, 3522101828), Long_create(3983941407, 2201313642),
    Long_create(2832443111, 2751642053), Long_create(319328417, 3439552567), Long_create(1810192997, 2149720354), Long_create(115257598, 2687150443), Long_create(3365297469, 3358938053), Long_create(985396365, 4198672567), Long_create(2226485464, 2624170354), Long_create(635623182, 3280212943), Long_create(4015754449, 4100266178), Long_create(3583588355, 2562666361), Long_create(1258259972, 3203332952), Long_create(1572824965, 4004166190), Long_create(4204241075, 2502603868), Long_create(960334048, 3128254836),
    Long_create(1200417559, 3910318545), Long_create(3434615535, 2443949090), Long_create(2145785770, 3054936363), Long_create(1608490389, 3818670454), Long_create(4226531965, 2386669033), Long_create(2061939484, 2983336292), Long_create(2577424355, 3729170365), Long_create(2147761134, 2330731478), Long_create(537217770, 2913414348), Long_create(671522212, 3641767935), Long_create(2030314119, 2276104959), Long_create(1464150824, 2845131199), Long_create(756446706, 3556413999), Long_create(2083391927, 2222758749),
    Long_create(3677981733, 2778448436), Long_create(302509871, 3473060546), Long_create(1262810493, 2170662841), Long_create(2652254940, 2713328551), Long_create(2241576851, 3391660689), Long_create(3875712888, 4239575861), Long_create(2959191467, 2649734913), Long_create(477763862, 3312168642), Long_create(2744688476, 4140210802), Long_create(2789172121, 2587631751), Long_create(2412723328, 3234539689), Long_create(4089645983, 4043174611), Long_create(2019157828, 2526984132), Long_create(2523947285, 3158730165),
    Long_create(4228675930, 3948412706), Long_create(3716664280, 2467757941), Long_create(1424604878, 3084697427), Long_create(707014274, 3855871784), Long_create(441883921, 2409919865), Long_create(1626096725, 3012399831), Long_create(958879083, 3765499789), Long_create(1136170339, 2353437368), Long_create(1420212923, 2941796710), Long_create(3922749802, 3677245887), Long_create(4062331362, 2298278679), Long_create(4004172379, 2872848349), Long_create(1783990002, 3591060437), Long_create(1651864663, 2244412773),
    Long_create(3138572653, 2805515966), Long_create(1775732168, 3506894958), Long_create(36090781, 2191809349), Long_create(1118855300, 2739761686), Long_create(3546052773, 3424702107), Long_create(3358824142, 4280877634), Long_create(3173006913, 2675548521), Long_create(745033169, 3344435652), Long_create(931291462, 4180544565), Long_create(1118928076, 2612840353), Long_create(2472401918, 3266050441), Long_create(4164244222, 4082563051), Long_create(2065781727, 2551601907), Long_create(1508485334, 3189502384),
    Long_create(1885606668, 3986877980), Long_create(3325987816, 2491798737), Long_create(936259297, 3114748422), Long_create(3317807770, 3893435527), Long_create(3684242592, 2433397204), Long_create(310335944, 3041746506), Long_create(2535403578, 3802183132), Long_create(3732110884, 2376364457), Long_create(1443913133, 2970455572), Long_create(1804891417, 3713069465), Long_create(3812411696, 2320668415), Long_create(3691772795, 2900835519), Long_create(3540974170, 3626044399), Long_create(3823721592, 2266277749),
    Long_create(1558426518, 2832847187), Long_create(874291324, 3541058984), Long_create(546432078, 2213161865), Long_create(1756781921, 2766452331), Long_create(1122235577, 3458065414), Long_create(3922622708, 2161290883), Long_create(3829536561, 2701613604), Long_create(491953405, 3377017006), Long_create(2762425404, 4221271257), Long_create(115903142, 2638294536), Long_create(144878927, 3297868170), Long_create(2328582307, 4122335212), Long_create(3602847590, 2576459507), Long_create(3429817663, 3220574384),
    Long_create(4287272079, 4025717980), Long_create(532061401, 2516073738), Long_create(2812560400, 3145092172), Long_create(3515700500, 3931365215), Long_create(3807925548, 2457103259), Long_create(3686165111, 3071379074), Long_create(2460222741, 3839223843), Long_create(1000768301, 2399514902), Long_create(3398444024, 2999393627), Long_create(3174313207, 3749242034), Long_create(3057687578, 2343276271), Long_create(2748367649, 2929095339), Long_create(2361717737, 3661369174), Long_create(402331761, 2288355734),
    Long_create(2650398350, 2860444667), Long_create(2239256113, 3575555834), Long_create(2473276895, 2234722396), Long_create(3091596119, 2793402995), Long_create(2790753324, 3491753744), Long_create(1744220828, 2182346090), Long_create(32792387, 2727932613), Long_create(1114732307, 3409915766), Long_create(3540899032, 4262394707), Long_create(1676190983, 2663996692), Long_create(2095238729, 3329995865), Long_create(3692790235, 4162494831), Long_create(3918606633, 2601559269), Long_create(1677032819, 3251949087),
    Long_create(1022549200, 4064936359), Long_create(2249705986, 2540585224), Long_create(2812132482, 3175731530), Long_create(1367681955, 3969664413), Long_create(1391672134, 2481040258), Long_create(3887073815, 3101300322), Long_create(2711358621, 3876625403), Long_create(1157728226, 2422890877), Long_create(2520902107, 3028613596), Long_create(3151127633, 3785766995), Long_create(1432583859, 2366104372), Long_create(1790729824, 2957630465), Long_create(3312154103, 3697038081), Long_create(459483579, 2310648801),
    Long_create(1648096297, 2888311001), Long_create(3133862196, 3610388751), Long_create(3569276608, 2256492969), Long_create(1240370288, 2820616212), Long_create(1550462860, 3525770265), Long_create(3653393848, 2203606415), Long_create(3493000486, 2754508019), Long_create(3292508783, 3443135024), Long_create(2057817989, 2151959390), Long_create(424788839, 2689949238), Long_create(2678469697, 3362436547), Long_create(2274345297, 4203045684), Long_create(3568949458, 2626903552), Long_create(166219527, 3283629441),
    Long_create(1281516233, 4104536801), Long_create(3485302206, 2565335500), Long_create(61660461, 3206669376), Long_create(77075576, 4008336720), Long_create(48172235, 2505210450), Long_create(2207698942, 3131513062), Long_create(612140029, 3914391328), Long_create(382587518, 2446494580), Long_create(478234398, 3058118225), Long_create(1671534821, 3822647781), Long_create(1581580175, 2389154863), Long_create(903233395, 2986443579), Long_create(55299920, 3733054474), Long_create(1108304274, 2333159046)]);
    otcit_DoubleSynthesizer_exp10Table = $rt_createShortArrayFromData([(-76), (-72), (-69), (-66), (-62), (-59), (-56), (-52), (-49), (-46), (-42), (-39), (-36), (-32), (-29), (-26), (-22), (-19), (-16), (-12), (-9), (-6), (-2), 1, 4, 8, 11, 14, 17, 21, 24, 27, 31, 34, 37, 41, 44, 47, 51, 54, 57, 61, 64, 67, 71, 74, 77, 81, 84, 87, 91, 94, 97, 101, 104, 107, 110, 114, 117, 120, 124, 127, 130, 134, 137, 140, 144, 147, 150, 154, 157, 160, 164, 167, 170, 174, 177, 180, 184, 187, 190, 194, 197, 200, 204, 207, 210,
    213, 217, 220, 223, 227, 230, 233, 237, 240, 243, 247, 250, 253, 257, 260, 263, 267, 270, 273, 277, 280, 283, 287, 290, 293, 297, 300, 303, 306, 310, 313, 316, 320, 323, 326, 330, 333, 336, 340, 343, 346, 350, 353, 356, 360, 363, 366, 370, 373, 376, 380, 383, 386, 390, 393, 396, 400, 403, 406, 409, 413, 416, 419, 423, 426, 429, 433, 436, 439, 443, 446, 449, 453, 456, 459, 463, 466, 469, 473, 476, 479, 483, 486, 489, 493, 496, 499, 502, 506, 509, 512, 516, 519, 522, 526, 529, 532, 536, 539, 542, 546, 549,
    552, 556, 559, 562, 566, 569, 572, 576, 579, 582, 586, 589, 592, 595, 599, 602, 605, 609, 612, 615, 619, 622, 625, 629, 632, 635, 639, 642, 645, 649, 652, 655, 659, 662, 665, 669, 672, 675, 679, 682, 685, 689, 692, 695, 698, 702, 705, 708, 712, 715, 718, 722, 725, 728, 732, 735, 738, 742, 745, 748, 752, 755, 758, 762, 765, 768, 772, 775, 778, 782, 785, 788, 791, 795, 798, 801, 805, 808, 811, 815, 818, 821, 825, 828, 831, 835, 838, 841, 845, 848, 851, 855, 858, 861, 865, 868, 871, 875, 878, 881, 885, 888,
    891, 894, 898, 901, 904, 908, 911, 914, 918, 921, 924, 928, 931, 934, 938, 941, 944, 948, 951, 954, 958, 961, 964, 968, 971, 974, 978, 981, 984, 987, 991, 994, 997, 1001, 1004, 1007, 1011, 1014, 1017, 1021, 1024, 1027, 1031, 1034, 1037, 1041, 1044, 1047, 1051, 1054, 1057, 1061, 1064, 1067, 1071, 1074, 1077, 1081, 1084, 1087, 1090, 1094, 1097, 1100, 1104, 1107, 1110, 1114, 1117, 1120, 1124, 1127, 1130, 1134, 1137, 1140, 1144, 1147, 1150, 1154, 1157, 1160, 1164, 1167, 1170, 1174, 1177, 1180, 1183, 1187, 1190,
    1193, 1197, 1200, 1203, 1207, 1210, 1213, 1217, 1220, 1223, 1227, 1230, 1233, 1237, 1240, 1243, 1247, 1250, 1253, 1257, 1260, 1263, 1267, 1270, 1273, 1276, 1280, 1283, 1286, 1290, 1293, 1296, 1300, 1303, 1306, 1310, 1313, 1316, 1320, 1323, 1326, 1330, 1333, 1336, 1340, 1343, 1346, 1350, 1353, 1356, 1360, 1363, 1366, 1370, 1373, 1376, 1379, 1383, 1386, 1389, 1393, 1396, 1399, 1403, 1406, 1409, 1413, 1416, 1419, 1423, 1426, 1429, 1433, 1436, 1439, 1443, 1446, 1449, 1453, 1456, 1459, 1463, 1466, 1469, 1472,
    1476, 1479, 1482, 1486, 1489, 1492, 1496, 1499, 1502, 1506, 1509, 1512, 1516, 1519, 1522, 1526, 1529, 1532, 1536, 1539, 1542, 1546, 1549, 1552, 1556, 1559, 1562, 1566, 1569, 1572, 1575, 1579, 1582, 1585, 1589, 1592, 1595, 1599, 1602, 1605, 1609, 1612, 1615, 1619, 1622, 1625, 1629, 1632, 1635, 1639, 1642, 1645, 1649, 1652, 1655, 1659, 1662, 1665, 1668, 1672, 1675, 1678, 1682, 1685, 1688, 1692, 1695, 1698, 1702, 1705, 1708, 1712, 1715, 1718, 1722, 1725, 1728, 1732, 1735, 1738, 1742, 1745, 1748, 1752, 1755,
    1758, 1761, 1765, 1768, 1771, 1775, 1778, 1781, 1785, 1788, 1791, 1795, 1798, 1801, 1805, 1808, 1811, 1815, 1818, 1821, 1825, 1828, 1831, 1835, 1838, 1841, 1845, 1848, 1851, 1855, 1858, 1861, 1864, 1868, 1871, 1874, 1878, 1881, 1884, 1888, 1891, 1894, 1898, 1901, 1904, 1908, 1911, 1914, 1918, 1921, 1924, 1928, 1931, 1934, 1938, 1941, 1944, 1948, 1951, 1954, 1957, 1961, 1964, 1967, 1971, 1974, 1977, 1981, 1984, 1987, 1991, 1994, 1997, 2001, 2004, 2007, 2011, 2014, 2017, 2021, 2024, 2027, 2031, 2034, 2037,
    2041, 2044, 2047, 2051, 2054, 2057, 2060, 2064, 2067, 2070, 2074, 2077, 2080, 2084, 2087, 2090, 2094, 2097, 2100, 2104, 2107, 2110, 2114]);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1 = $rt_classWithoutFields(),
otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_ = var$0 => {
    jl_Object__init_(var$0);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_0 = () => {
    let var_0 = new otji_JSWrapper$Helper$_clinit_$lambda$_3_1();
    otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_(var_0);
    return var_0;
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept = (var$0, var$1) => {
    otji_JSWrapper$Helper_lambda$static$1(var$1);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept$exported$0 = (var$1, var$2) => {
    var$2 = otji_JSWrapper_jsToJava(var$2);
    var$1.$accept0(var$2);
};
function cpcm_ElementType() {
    jl_Enum.call(this);
    this.$value2 = null;
}
let cpcm_ElementType_STROKE = null,
cpcm_ElementType_RECTANGLE = null,
cpcm_ElementType_ELLIPSE = null,
cpcm_ElementType_ARROW = null,
cpcm_ElementType_STICKY = null,
cpcm_ElementType_TEXT = null,
cpcm_ElementType_$VALUES = null,
cpcm_ElementType_$callClinit = () => {
    cpcm_ElementType_$callClinit = $rt_eraseClinit(cpcm_ElementType);
    cpcm_ElementType__clinit_();
},
cpcm_ElementType_values = () => {
    cpcm_ElementType_$callClinit();
    return cpcm_ElementType_$VALUES.$clone0();
},
cpcm_ElementType__init_0 = ($this, var$1, var$2, $value) => {
    cpcm_ElementType_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$value2 = $value;
},
cpcm_ElementType__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cpcm_ElementType();
    cpcm_ElementType__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cpcm_ElementType_getValue = $this => {
    return $this.$value2;
},
cpcm_ElementType_fromValue = $value => {
    let var$2, var$3, var$4, var$5, var$6, $type;
    cpcm_ElementType_$callClinit();
    var$2 = (cpcm_ElementType_values()).data;
    var$3 = var$2.length;
    var$4 = 0;
    while (true) {
        if (var$4 >= var$3) {
            var$5 = new jl_IllegalArgumentException;
            var$6 = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append(var$6, $rt_s(858)), $value);
            jl_IllegalArgumentException__init_0(var$5, jl_StringBuilder_toString(var$6));
            $rt_throw(var$5);
        }
        $type = var$2[var$4];
        if ($type.$value2.$equals($value))
            break;
        var$4 = var$4 + 1 | 0;
    }
    return $type;
},
cpcm_ElementType_$values = () => {
    let var$1, var$2;
    cpcm_ElementType_$callClinit();
    var$1 = $rt_createArray(cpcm_ElementType, 6);
    var$2 = var$1.data;
    var$2[0] = cpcm_ElementType_STROKE;
    var$2[1] = cpcm_ElementType_RECTANGLE;
    var$2[2] = cpcm_ElementType_ELLIPSE;
    var$2[3] = cpcm_ElementType_ARROW;
    var$2[4] = cpcm_ElementType_STICKY;
    var$2[5] = cpcm_ElementType_TEXT;
    return var$1;
},
cpcm_ElementType__clinit_ = () => {
    cpcm_ElementType_STROKE = cpcm_ElementType__init_($rt_s(859), 0, $rt_s(860));
    cpcm_ElementType_RECTANGLE = cpcm_ElementType__init_($rt_s(609), 1, $rt_s(610));
    cpcm_ElementType_ELLIPSE = cpcm_ElementType__init_($rt_s(611), 2, $rt_s(612));
    cpcm_ElementType_ARROW = cpcm_ElementType__init_($rt_s(613), 3, $rt_s(614));
    cpcm_ElementType_STICKY = cpcm_ElementType__init_($rt_s(615), 4, $rt_s(616));
    cpcm_ElementType_TEXT = cpcm_ElementType__init_($rt_s(617), 5, $rt_s(388));
    cpcm_ElementType_$VALUES = cpcm_ElementType_$values();
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_0 = $rt_classWithoutFields(),
otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_0 = () => {
    let var_0 = new otji_JSWrapper$Helper$_clinit_$lambda$_3_0();
    otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_(var_0);
    return var_0;
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept = (var$0, var$1) => {
    otji_JSWrapper$Helper_lambda$static$0(var$1);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept$exported$0 = (var$1, var$2) => {
    var$2 = otji_JSWrapper_jsToJava(var$2);
    var$1.$accept0(var$2);
};
function cpcm_McqConsensusView$connect$lambda$_15_3() {
    jl_Object.call(this);
    this.$_02 = null;
}
let cpcm_McqConsensusView$connect$lambda$_15_3__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_02 = var$1;
},
cpcm_McqConsensusView$connect$lambda$_15_3__init_0 = var_0 => {
    let var_1 = new cpcm_McqConsensusView$connect$lambda$_15_3();
    cpcm_McqConsensusView$connect$lambda$_15_3__init_(var_1, var_0);
    return var_1;
},
cpcm_McqConsensusView$connect$lambda$_15_3_run = var$0 => {
    cpcm_McqConsensusView_lambda$connect$5(var$0.$_02);
};
function cpcm_McqConsensusView$connect$lambda$_15_2() {
    jl_Object.call(this);
    this.$_064 = null;
}
let cpcm_McqConsensusView$connect$lambda$_15_2__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_064 = var$1;
},
cpcm_McqConsensusView$connect$lambda$_15_2__init_0 = var_0 => {
    let var_1 = new cpcm_McqConsensusView$connect$lambda$_15_2();
    cpcm_McqConsensusView$connect$lambda$_15_2__init_(var_1, var_0);
    return var_1;
},
cpcm_McqConsensusView$connect$lambda$_15_2_run = var$0 => {
    cpcm_McqConsensusView_lambda$connect$4(var$0.$_064);
};
function cpcm_Point() {
    let a = this; jl_Record.call(a);
    a.$x1 = 0.0;
    a.$y1 = 0.0;
}
let cpcm_Point__init_0 = ($this, $x, $y) => {
    jl_Record__init_($this);
    $this.$x1 = $x;
    $this.$y1 = $y;
},
cpcm_Point__init_ = (var_0, var_1) => {
    let var_2 = new cpcm_Point();
    cpcm_Point__init_0(var_2, var_0, var_1);
    return var_2;
},
cpcm_Point_x = $this => {
    return $this.$x1;
},
cpcm_Point_y = $this => {
    return $this.$y1;
};
function cpcm_McqConsensusView$connect$lambda$_15_1() {
    jl_Object.call(this);
    this.$_042 = null;
}
let cpcm_McqConsensusView$connect$lambda$_15_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_042 = var$1;
},
cpcm_McqConsensusView$connect$lambda$_15_1__init_0 = var_0 => {
    let var_1 = new cpcm_McqConsensusView$connect$lambda$_15_1();
    cpcm_McqConsensusView$connect$lambda$_15_1__init_(var_1, var_0);
    return var_1;
},
cpcm_McqConsensusView$connect$lambda$_15_1_onMessage = (var$0, var$1) => {
    cpcm_McqConsensusView_handleMessage(var$0.$_042, var$1);
};
function cpcm_McqConsensusView$connect$lambda$_15_0() {
    jl_Object.call(this);
    this.$_014 = null;
}
let cpcm_McqConsensusView$connect$lambda$_15_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_014 = var$1;
},
cpcm_McqConsensusView$connect$lambda$_15_0__init_0 = var_0 => {
    let var_1 = new cpcm_McqConsensusView$connect$lambda$_15_0();
    cpcm_McqConsensusView$connect$lambda$_15_0__init_(var_1, var_0);
    return var_1;
},
cpcm_McqConsensusView$connect$lambda$_15_0_run = var$0 => {
    cpcm_McqConsensusView_lambda$connect$3(var$0.$_014);
},
jl_String$_clinit_$lambda$_115_0 = $rt_classWithoutFields(),
jl_String$_clinit_$lambda$_115_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
jl_String$_clinit_$lambda$_115_0__init_0 = () => {
    let var_0 = new jl_String$_clinit_$lambda$_115_0();
    jl_String$_clinit_$lambda$_115_0__init_(var_0);
    return var_0;
},
ju_Collections = $rt_classWithoutFields(),
ju_Collections_EMPTY_SET = null,
ju_Collections_EMPTY_MAP = null,
ju_Collections_EMPTY_LIST = null,
ju_Collections_EMPTY_ITERATOR = null,
ju_Collections_EMPTY_LIST_ITERATOR = null,
ju_Collections_reverseOrder = null,
ju_Collections_$callClinit = () => {
    ju_Collections_$callClinit = $rt_eraseClinit(ju_Collections);
    ju_Collections__clinit_();
},
ju_Collections_emptyIterator = () => {
    ju_Collections_$callClinit();
    return ju_Collections_EMPTY_ITERATOR;
},
ju_Collections_emptyList = () => {
    ju_Collections_$callClinit();
    return ju_Collections_EMPTY_LIST;
},
ju_Collections_reverseOrder0 = () => {
    ju_Collections_$callClinit();
    return ju_Collections_reverseOrder;
},
ju_Collections_lambda$static$0 = ($o1, $o2) => {
    ju_Collections_$callClinit();
    return $o2.$compareTo1($o1);
},
ju_Collections__clinit_ = () => {
    ju_Collections_EMPTY_SET = ju_Collections$1__init_0();
    ju_Collections_EMPTY_MAP = ju_Collections$2__init_0();
    ju_Collections_EMPTY_LIST = ju_Collections$3__init_0();
    ju_Collections_EMPTY_ITERATOR = ju_Collections$4__init_0();
    ju_Collections_EMPTY_LIST_ITERATOR = ju_Collections$5__init_0();
    ju_Collections_reverseOrder = ju_Collections$_clinit_$lambda$_59_0__init_0();
};
$rt_packages([-1, "com", 0, "parallely", 1, "client", 2, "model", -1, "java", 4, "math", 4, "lang"
]);
$rt_metadata([jl_Object, "Object", 6, 0, [], 0, 3, 0, 0, ["$getClass0", $rt_wrapFunction0(jl_Object_getClass), "$equals", $rt_wrapFunction1(jl_Object_equals), "$toString", $rt_wrapFunction0(jl_Object_toString), "$identity", $rt_wrapFunction0(jl_Object_identity), "$clone0", $rt_wrapFunction0(jl_Object_clone)],
jl_Comparable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ji_Serializable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Enum, "Enum", 6, jl_Object, [jl_Comparable, ji_Serializable], 1, 3, 0, 0, ["$_init_1", $rt_wrapFunction2(jl_Enum__init_), "$name", $rt_wrapFunction0(jl_Enum_name), "$ordinal", $rt_wrapFunction0(jl_Enum_ordinal), "$getDeclaringClass", $rt_wrapFunction0(jl_Enum_getDeclaringClass), "$compareTo", $rt_wrapFunction1(jl_Enum_compareTo), "$compareTo1", $rt_wrapFunction1(jl_Enum_compareTo0)],
cpcm_SlotState, "SlotState", 3, jl_Enum, [], 12, 3, 0, cpcm_SlotState_$callClinit, 0,
jl_Throwable, 0, jl_Object, [], 0, 3, 0, 0, ["$fillInStackTrace", $rt_wrapFunction0(jl_Throwable_fillInStackTrace), "$getMessage", $rt_wrapFunction0(jl_Throwable_getMessage), "$getCause", $rt_wrapFunction0(jl_Throwable_getCause)],
jl_Exception, 0, jl_Throwable, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_Exception__init_), "$_init_0", $rt_wrapFunction1(jl_Exception__init_0)],
jl_RuntimeException, 0, jl_Exception, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_RuntimeException__init_), "$_init_0", $rt_wrapFunction1(jl_RuntimeException__init_0)],
jl_IndexOutOfBoundsException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_IndexOutOfBoundsException__init_0)],
cpcm_OrderStatus, 0, jl_Enum, [], 12, 3, 0, cpcm_OrderStatus_$callClinit, 0,
jl_Record, 0, jl_Object, [], 1, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_Record__init_)],
cpcm_Trade, 0, jl_Record, [], 32772, 3, 0, 0, ["$_init_59", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9, var_10) { cpcm_Trade__init_(this, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9, var_10); }, "$price", $rt_wrapFunction0(cpcm_Trade_price), "$size0", $rt_wrapFunction0(cpcm_Trade_size), "$timestamp", $rt_wrapFunction0(cpcm_Trade_timestamp), "$aggressiveSide", $rt_wrapFunction0(cpcm_Trade_aggressiveSide)],
cpce_RingBuffer$Cursors, 0, jl_Record, [], 32772, 3, 0, 0, ["$_init_47", $rt_wrapFunction4(cpce_RingBuffer$Cursors__init_), "$producer", $rt_wrapFunction0(cpce_RingBuffer$Cursors_producer), "$matching", $rt_wrapFunction0(cpce_RingBuffer$Cursors_matching)],
jl_Number, 0, jl_Object, [ji_Serializable], 1, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_Number__init_)],
jl_Integer, 0, jl_Number, [jl_Comparable], 0, 3, 0, jl_Integer_$callClinit, ["$_init_2", $rt_wrapFunction1(jl_Integer__init_), "$intValue", $rt_wrapFunction0(jl_Integer_intValue), "$toString", $rt_wrapFunction0(jl_Integer_toString1), "$equals", $rt_wrapFunction1(jl_Integer_equals), "$compareTo0", $rt_wrapFunction1(jl_Integer_compareTo), "$compareTo1", $rt_wrapFunction1(jl_Integer_compareTo0)],
cpcs_Ui$InputHandler, 0, jl_Object, [], 3, 3, 0, 0, 0,
cpce_MatchingEngineStudio$_init_$lambda$_0_10, 0, jl_Object, [cpcs_Ui$InputHandler], 0, 3, 0, 0, ["$_init_23", $rt_wrapFunction1(cpce_MatchingEngineStudio$_init_$lambda$_0_10__init_), "$handle", $rt_wrapFunction1(cpce_MatchingEngineStudio$_init_$lambda$_0_10_handle)],
jl_Runnable, 0, jl_Object, [], 3, 3, 0, 0, 0,
cpce_MatchingEngineStudio$_init_$lambda$_0_11, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cpce_MatchingEngineStudio$_init_$lambda$_0_11__init_), "$run", $rt_wrapFunction0(cpce_MatchingEngineStudio$_init_$lambda$_0_11_run)],
jl_CloneNotSupportedException, 0, jl_Exception, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_CloneNotSupportedException__init_)],
otj_JSObject, 0, jl_Object, [], 3, 3, 0, 0, 0,
cpcj_Js$VoidCb, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cpce_MatchingEngineStudio$_init_$lambda$_0_12, 0, jl_Object, [cpcj_Js$VoidCb], 0, 3, 0, 0, ["$_init_23", $rt_wrapFunction1(cpce_MatchingEngineStudio$_init_$lambda$_0_12__init_), "$call", $rt_wrapFunction0(cpce_MatchingEngineStudio$_init_$lambda$_0_12_call)],
jm_BigDecimal$1, 0, jl_Object, [], 32, 0, 0, jm_BigDecimal$1_$callClinit, 0,
otjdx_Node, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
otjdx_Document, 0, jl_Object, [otjdx_Node], 3, 3, 0, 0, 0,
otjde_EventTarget, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
otjdh_HTMLDocument, 0, jl_Object, [otjdx_Document, otjde_EventTarget], 1, 3, 0, 0, 0,
jl_Long, 0, jl_Number, [jl_Comparable], 0, 3, 0, jl_Long_$callClinit, ["$_init_3", $rt_wrapFunction1(jl_Long__init_), "$longValue", $rt_wrapFunction0(jl_Long_longValue)],
ju_Map, 0, jl_Object, [], 3, 3, 0, 0, ["$computeIfAbsent", $rt_wrapFunction2(ju_Map_computeIfAbsent)],
jm_BigInteger, 0, jl_Number, [jl_Comparable, ji_Serializable], 0, 3, 0, jm_BigInteger_$callClinit, ["$_init_6", $rt_wrapFunction2(jm_BigInteger__init_2), "$_init_5", $rt_wrapFunction3(jm_BigInteger__init_3), "$_init_4", $rt_wrapFunction2(jm_BigInteger__init_1), "$_init_54", $rt_wrapFunction2(jm_BigInteger__init_5), "$abs0", $rt_wrapFunction0(jm_BigInteger_abs), "$negate", $rt_wrapFunction0(jm_BigInteger_negate), "$add2", $rt_wrapFunction1(jm_BigInteger_add), "$subtract0", $rt_wrapFunction1(jm_BigInteger_subtract),
"$signum", $rt_wrapFunction0(jm_BigInteger_signum), "$shiftRight0", $rt_wrapFunction1(jm_BigInteger_shiftRight), "$shiftLeft0", $rt_wrapFunction1(jm_BigInteger_shiftLeft), "$shiftLeftOneBit0", $rt_wrapFunction0(jm_BigInteger_shiftLeftOneBit), "$bitLength2", $rt_wrapFunction0(jm_BigInteger_bitLength), "$testBit", $rt_wrapFunction1(jm_BigInteger_testBit), "$getLowestSetBit", $rt_wrapFunction0(jm_BigInteger_getLowestSetBit), "$longValue", $rt_wrapFunction0(jm_BigInteger_longValue), "$compareTo2", $rt_wrapFunction1(jm_BigInteger_compareTo),
"$equals", $rt_wrapFunction1(jm_BigInteger_equals), "$equalsArrays", $rt_wrapFunction1(jm_BigInteger_equalsArrays), "$multiply0", $rt_wrapFunction1(jm_BigInteger_multiply), "$pow0", $rt_wrapFunction1(jm_BigInteger_pow), "$divideAndRemainder", $rt_wrapFunction1(jm_BigInteger_divideAndRemainder), "$cutOffLeadingZeroes", $rt_wrapFunction0(jm_BigInteger_cutOffLeadingZeroes), "$getFirstNonzeroDigit", $rt_wrapFunction0(jm_BigInteger_getFirstNonzeroDigit)],
jl_ArithmeticException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction1(jl_ArithmeticException__init_0)],
cpcm_McqConsensusView$_init_$lambda$_0_0, 0, jl_Object, [cpcs_Ui$InputHandler], 0, 3, 0, 0, ["$_init_64", $rt_wrapFunction1(cpcm_McqConsensusView$_init_$lambda$_0_0__init_), "$handle", $rt_wrapFunction1(cpcm_McqConsensusView$_init_$lambda$_0_0_handle)],
jl_CharSequence, 0, jl_Object, [], 3, 3, 0, 0, 0,
cpcm_McqConsensusView$_init_$lambda$_0_2, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_64", $rt_wrapFunction1(cpcm_McqConsensusView$_init_$lambda$_0_2__init_), "$run", $rt_wrapFunction0(cpcm_McqConsensusView$_init_$lambda$_0_2_run)],
cpcm_McqConsensusView$_init_$lambda$_0_1, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_64", $rt_wrapFunction1(cpcm_McqConsensusView$_init_$lambda$_0_1__init_), "$run", $rt_wrapFunction0(cpcm_McqConsensusView$_init_$lambda$_0_1_run)],
cpcw_BotSwarm$restartLoop$lambda$_15_0, 0, jl_Object, [cpcj_Js$VoidCb], 0, 3, 0, 0, ["$_init_41", $rt_wrapFunction1(cpcw_BotSwarm$restartLoop$lambda$_15_0__init_), "$call", $rt_wrapFunction0(cpcw_BotSwarm$restartLoop$lambda$_15_0_call)],
ju_SequencedMap, 0, jl_Object, [ju_Map], 3, 3, 0, 0, ["$computeIfAbsent", $rt_wrapFunction2(ju_Map_computeIfAbsent)],
cpcm_McqConsensusView$_init_$lambda$_0_4, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_65", $rt_wrapFunction2(cpcm_McqConsensusView$_init_$lambda$_0_4__init_), "$run", $rt_wrapFunction0(cpcm_McqConsensusView$_init_$lambda$_0_4_run)],
cpcm_McqConsensusView$_init_$lambda$_0_3, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_64", $rt_wrapFunction1(cpcm_McqConsensusView$_init_$lambda$_0_3__init_), "$run", $rt_wrapFunction0(cpcm_McqConsensusView$_init_$lambda$_0_3_run)],
jl_StringIndexOutOfBoundsException, 0, jl_IndexOutOfBoundsException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_StringIndexOutOfBoundsException__init_0)],
cpcj_Js, 0, jl_Object, [], 4, 3, 0, 0, 0,
otci_Base46, 0, jl_Object, [], 4, 3, 0, 0, 0,
cpcj_JavaArchitectureViewer$buildFileSelector$lambda$_6_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction2(cpcj_JavaArchitectureViewer$buildFileSelector$lambda$_6_0__init_), "$run", $rt_wrapFunction0(cpcj_JavaArchitectureViewer$buildFileSelector$lambda$_6_0_run)],
otji_JSWrapper$Helper, 0, jl_Object, [], 0, 0, 0, otji_JSWrapper$Helper_$callClinit, 0,
jl_AbstractStringBuilder, 0, jl_Object, [ji_Serializable, jl_CharSequence], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jl_AbstractStringBuilder__init_0), "$_init_2", $rt_wrapFunction1(jl_AbstractStringBuilder__init_), "$append2", $rt_wrapFunction1(jl_AbstractStringBuilder_append2), "$insert4", $rt_wrapFunction2(jl_AbstractStringBuilder_insert0), "$append3", $rt_wrapFunction1(jl_AbstractStringBuilder_append), "$append1", $rt_wrapFunction2(jl_AbstractStringBuilder_append4), "$insert0", $rt_wrapFunction3(jl_AbstractStringBuilder_insert5),
"$append4", $rt_wrapFunction1(jl_AbstractStringBuilder_append1), "$insert1", $rt_wrapFunction2(jl_AbstractStringBuilder_insert3), "$insert2", $rt_wrapFunction3(jl_AbstractStringBuilder_insert4), "$append5", $rt_wrapFunction1(jl_AbstractStringBuilder_append3), "$insert3", $rt_wrapFunction2(jl_AbstractStringBuilder_insert2), "$insert", $rt_wrapFunction2(jl_AbstractStringBuilder_insert1), "$append6", $rt_wrapFunction1(jl_AbstractStringBuilder_append0), "$insert5", $rt_wrapFunction2(jl_AbstractStringBuilder_insert),
"$ensureCapacity", $rt_wrapFunction1(jl_AbstractStringBuilder_ensureCapacity), "$toString", $rt_wrapFunction0(jl_AbstractStringBuilder_toString)],
jl_Appendable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_StringBuilder, 0, jl_AbstractStringBuilder, [jl_Appendable], 0, 3, 0, 0, ["$_init_2", $rt_wrapFunction1(jl_StringBuilder__init_2), "$_init_", $rt_wrapFunction0(jl_StringBuilder__init_1), "$append", $rt_wrapFunction1(jl_StringBuilder_append), "$append7", $rt_wrapFunction1(jl_StringBuilder_append1), "$append8", $rt_wrapFunction1(jl_StringBuilder_append2), "$append0", $rt_wrapFunction1(jl_StringBuilder_append0), "$append9", $rt_wrapFunction1(jl_StringBuilder_append3), "$insert9", $rt_wrapFunction2(jl_StringBuilder_insert4),
"$insert7", $rt_wrapFunction2(jl_StringBuilder_insert5), "$insert6", $rt_wrapFunction2(jl_StringBuilder_insert1), "$insert8", $rt_wrapFunction2(jl_StringBuilder_insert2), "$insert10", $rt_wrapFunction2(jl_StringBuilder_insert6), "$toString", $rt_wrapFunction0(jl_StringBuilder_toString), "$ensureCapacity", $rt_wrapFunction1(jl_StringBuilder_ensureCapacity), "$insert5", $rt_wrapFunction2(jl_StringBuilder_insert7), "$insert", $rt_wrapFunction2(jl_StringBuilder_insert0), "$insert3", $rt_wrapFunction2(jl_StringBuilder_insert),
"$insert1", $rt_wrapFunction2(jl_StringBuilder_insert3), "$insert4", $rt_wrapFunction2(jl_StringBuilder_insert8)],
cpcs_AppShell, 0, jl_Object, [], 4, 3, 0, cpcs_AppShell_$callClinit, ["$_init_", $rt_wrapFunction0(cpcs_AppShell__init_), "$root", $rt_wrapFunction0(cpcs_AppShell_root)],
ju_ConcurrentModificationException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_ConcurrentModificationException__init_0)]]);
$rt_metadata([jur_RandomGenerator, 0, jl_Object, [], 3, 3, 0, 0, 0,
cpcj_Ws, 0, jl_Object, [], 4, 3, 0, 0, ["$_init_0", $rt_wrapFunction1(cpcj_Ws__init_), "$onOpen", $rt_wrapFunction1(cpcj_Ws_onOpen), "$onMessage", $rt_wrapFunction1(cpcj_Ws_onMessage), "$onClose", $rt_wrapFunction1(cpcj_Ws_onClose), "$onError", $rt_wrapFunction1(cpcj_Ws_onError), "$send0", $rt_wrapFunction1(cpcj_Ws_send), "$isOpen", $rt_wrapFunction0(cpcj_Ws_isOpen), "$close", $rt_wrapFunction0(cpcj_Ws_close)],
otjde_EventListener, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cpcs_Ui$btn$lambda$_5_0, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$_init_11", $rt_wrapFunction1(cpcs_Ui$btn$lambda$_5_0__init_), "$handleEvent", $rt_wrapFunction1(cpcs_Ui$btn$lambda$_5_0_handleEvent)],
cpce_MatchingEngine$MatchResult, 0, jl_Record, [], 32772, 3, 0, 0, ["$_init_58", $rt_wrapFunction2(cpce_MatchingEngine$MatchResult__init_0)],
cpcw_WhiteboardStudio$rebuildBotAvatars$lambda$_9_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_34", $rt_wrapFunction2(cpcw_WhiteboardStudio$rebuildBotAvatars$lambda$_9_0__init_), "$run", $rt_wrapFunction0(cpcw_WhiteboardStudio$rebuildBotAvatars$lambda$_9_0_run)],
ju_LinkedHashMapIterator, 0, jl_Object, [], 0, 0, 0, 0, ["$_init_13", $rt_wrapFunction2(ju_LinkedHashMapIterator__init_), "$hasNext", $rt_wrapFunction0(ju_LinkedHashMapIterator_hasNext), "$checkConcurrentMod", $rt_wrapFunction0(ju_LinkedHashMapIterator_checkConcurrentMod), "$makeNext", $rt_wrapFunction0(ju_LinkedHashMapIterator_makeNext)],
ju_Iterator, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_LinkedHashMapIterator$ValueIterator, 0, ju_LinkedHashMapIterator, [ju_Iterator], 0, 0, 0, 0, ["$_init_13", $rt_wrapFunction2(ju_LinkedHashMapIterator$ValueIterator__init_), "$next", $rt_wrapFunction0(ju_LinkedHashMapIterator$ValueIterator_next)],
jl_ClassCastException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
cpcs_View, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_AbstractMap, 0, jl_Object, [ju_Map], 1, 3, 0, 0, ["$computeIfAbsent", $rt_wrapFunction2(ju_Map_computeIfAbsent), "$_init_", $rt_wrapFunction0(ju_AbstractMap__init_)],
jl_Cloneable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_HashMap, 0, ju_AbstractMap, [jl_Cloneable, ji_Serializable], 0, 3, 0, 0, ["$computeIfAbsent", $rt_wrapFunction2(ju_Map_computeIfAbsent), "$newElementArray", $rt_wrapFunction1(ju_HashMap_newElementArray), "$_init_", $rt_wrapFunction0(ju_HashMap__init_0), "$_init_2", $rt_wrapFunction1(ju_HashMap__init_), "$_init_14", $rt_wrapFunction2(ju_HashMap__init_1), "$clear0", $rt_wrapFunction0(ju_HashMap_clear), "$get", $rt_wrapFunction1(ju_HashMap_get), "$entryByKey", $rt_wrapFunction1(ju_HashMap_entryByKey), "$findNonNullKeyEntry",
$rt_wrapFunction3(ju_HashMap_findNonNullKeyEntry), "$findNullKeyEntry", $rt_wrapFunction0(ju_HashMap_findNullKeyEntry), "$put", $rt_wrapFunction2(ju_HashMap_put), "$rehash0", $rt_wrapFunction1(ju_HashMap_rehash0), "$rehash", $rt_wrapFunction0(ju_HashMap_rehash), "$removeEntry", $rt_wrapFunction1(ju_HashMap_removeEntry), "$removeByKey", $rt_wrapFunction1(ju_HashMap_removeByKey), "$size", $rt_wrapFunction0(ju_HashMap_size)],
ju_LinkedHashMap, 0, ju_HashMap, [ju_SequencedMap], 0, 3, 0, 0, ["$computeIfAbsent", $rt_wrapFunction2(ju_Map_computeIfAbsent), "$_init_", $rt_wrapFunction0(ju_LinkedHashMap__init_0), "$newElementArray", $rt_wrapFunction1(ju_LinkedHashMap_newElementArray), "$getOrDefault", $rt_wrapFunction2(ju_LinkedHashMap_getOrDefault), "$get", $rt_wrapFunction1(ju_LinkedHashMap_get), "$put", $rt_wrapFunction2(ju_LinkedHashMap_put), "$putImpl0", $rt_wrapFunction4(ju_LinkedHashMap_putImpl), "$keySet", $rt_wrapFunction0(ju_LinkedHashMap_keySet),
"$sequencedKeySet", $rt_wrapFunction0(ju_LinkedHashMap_sequencedKeySet), "$values1", $rt_wrapFunction0(ju_LinkedHashMap_values), "$sequencedValues", $rt_wrapFunction0(ju_LinkedHashMap_sequencedValues), "$remove1", $rt_wrapFunction1(ju_LinkedHashMap_remove), "$removeLinkedEntry", $rt_wrapFunction1(ju_LinkedHashMap_removeLinkedEntry), "$removeEldestEntry", $rt_wrapFunction1(ju_LinkedHashMap_removeEldestEntry), "$clear0", $rt_wrapFunction0(ju_LinkedHashMap_clear)],
cpcm_OrderSide, 0, jl_Enum, [], 12, 3, 0, cpcm_OrderSide_$callClinit, 0,
cpcj_Ws$onClose$lambda$_3_0, 0, jl_Object, [cpcj_Js$VoidCb], 0, 3, 0, 0, ["$_init_11", $rt_wrapFunction1(cpcj_Ws$onClose$lambda$_3_0__init_), "$call", $rt_wrapFunction0(cpcj_Ws$onClose$lambda$_3_0_call)],
cpcm_Order, 0, jl_Object, [], 4, 3, 0, 0, ["$_init_16", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9, var_10, var_11) { cpcm_Order__init_0(this, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9, var_10, var_11); }, "$_init_26", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9, var_10) { cpcm_Order__init_(this, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9, var_10); }, "$getId", $rt_wrapFunction0(cpcm_Order_getId), "$getTraderId", $rt_wrapFunction0(cpcm_Order_getTraderId),
"$getTraderName", $rt_wrapFunction0(cpcm_Order_getTraderName), "$getSide", $rt_wrapFunction0(cpcm_Order_getSide), "$getType", $rt_wrapFunction0(cpcm_Order_getType), "$getPrice", $rt_wrapFunction0(cpcm_Order_getPrice), "$getSize", $rt_wrapFunction0(cpcm_Order_getSize), "$getFilledSize", $rt_wrapFunction0(cpcm_Order_getFilledSize), "$setFilledSize", $rt_wrapFunction1(cpcm_Order_setFilledSize), "$getTimestamp", $rt_wrapFunction0(cpcm_Order_getTimestamp), "$setStatus", $rt_wrapFunction1(cpcm_Order_setStatus), "$getOptionKey",
$rt_wrapFunction0(cpcm_Order_getOptionKey)],
cpcj_Js$StrCb, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
jl_Iterable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Collection, 0, jl_Object, [jl_Iterable], 3, 3, 0, 0, 0,
ju_AbstractCollection, 0, jl_Object, [ju_Collection], 1, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_AbstractCollection__init_), "$isEmpty", $rt_wrapFunction0(ju_AbstractCollection_isEmpty), "$toArray", $rt_wrapFunction1(ju_AbstractCollection_toArray)],
ju_SequencedCollection, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
ju_LinkedHashMapValues, 0, ju_AbstractCollection, [ju_SequencedCollection], 0, 0, 0, 0, ["$_init_13", $rt_wrapFunction2(ju_LinkedHashMapValues__init_), "$iterator", $rt_wrapFunction0(ju_LinkedHashMapValues_iterator)],
cpcj_JavaArchitectureViewer$CodeSnippet, 0, jl_Record, [], 32772, 0, 0, 0, 0,
ju_Map$Entry, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_MapEntry, 0, jl_Object, [ju_Map$Entry, jl_Cloneable], 0, 0, 0, 0, ["$_init_17", $rt_wrapFunction2(ju_MapEntry__init_)],
ju_HashMap$HashEntry, 0, ju_MapEntry, [], 0, 0, 0, 0, ["$_init_15", $rt_wrapFunction2(ju_HashMap$HashEntry__init_)],
ju_LinkedHashMap$LinkedHashMapEntry, 0, ju_HashMap$HashEntry, [], 4, 0, 0, 0, ["$_init_15", $rt_wrapFunction2(ju_LinkedHashMap$LinkedHashMapEntry__init_)],
cpcs_Ui$btnHtml$lambda$_6_0, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$_init_11", $rt_wrapFunction1(cpcs_Ui$btnHtml$lambda$_6_0__init_), "$handleEvent", $rt_wrapFunction1(cpcs_Ui$btnHtml$lambda$_6_0_handleEvent)],
cpcs_Ui$onStop$lambda$_11_0, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$_init_11", $rt_wrapFunction1(cpcs_Ui$onStop$lambda$_11_0__init_), "$handleEvent", $rt_wrapFunction1(cpcs_Ui$onStop$lambda$_11_0_handleEvent)],
cpcw_Elements, 0, jl_Object, [], 4, 0, 0, 0, 0,
ju_AbstractList$1, 0, jl_Object, [ju_Iterator], 0, 0, 0, 0, ["$_init_51", $rt_wrapFunction1(ju_AbstractList$1__init_), "$hasNext", $rt_wrapFunction0(ju_AbstractList$1_hasNext), "$next", $rt_wrapFunction0(ju_AbstractList$1_next)],
cpce_MatchingEngineStudio, 0, jl_Object, [cpcs_View], 4, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cpce_MatchingEngineStudio__init_), "$root", $rt_wrapFunction0(cpce_MatchingEngineStudio_root), "$onPrimaryAction", $rt_wrapFunction0(cpce_MatchingEngineStudio_onPrimaryAction), "$dispose", $rt_wrapFunction0(cpce_MatchingEngineStudio_dispose)],
cpcw_CanvasModel, 0, jl_Object, [], 4, 3, 0, cpcw_CanvasModel_$callClinit, 0,
cpcm_OrderType, 0, jl_Enum, [], 12, 3, 0, cpcm_OrderType_$callClinit, 0,
ju_TemplateCollections$AbstractImmutableMap, 0, ju_AbstractMap, [], 1, 0, 0, 0, ["$computeIfAbsent", $rt_wrapFunction2(ju_Map_computeIfAbsent), "$_init_", $rt_wrapFunction0(ju_TemplateCollections$AbstractImmutableMap__init_)],
cpcs_Ui$on$lambda$_10_0, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$_init_11", $rt_wrapFunction1(cpcs_Ui$on$lambda$_10_0__init_), "$handleEvent", $rt_wrapFunction1(cpcs_Ui$on$lambda$_10_0_handleEvent)],
cpcj_Ws$MessageHandler, 0, jl_Object, [], 3, 3, 0, 0, 0,
cpcm_McqConsensusView$OptionRow, 0, jl_Object, [], 4, 0, 0, 0, 0,
cpcw_WhiteboardStudio, 0, jl_Object, [cpcs_View], 4, 3, 0, cpcw_WhiteboardStudio_$callClinit, ["$_init_", $rt_wrapFunction0(cpcw_WhiteboardStudio__init_), "$root", $rt_wrapFunction0(cpcw_WhiteboardStudio_root), "$onPrimaryAction", $rt_wrapFunction0(cpcw_WhiteboardStudio_onPrimaryAction), "$dispose", $rt_wrapFunction0(cpcw_WhiteboardStudio_dispose), "$syncUi", $rt_wrapFunction0(cpcw_WhiteboardStudio_syncUi)],
jlr_Array, 0, jl_Object, [], 4, 3, 0, 0, 0,
ju_ListIterator, 0, jl_Object, [ju_Iterator], 3, 3, 0, 0, 0,
cpc_ClientMain, 0, jl_Object, [], 4, 3, 0, cpc_ClientMain_$callClinit, 0,
otcit_DoubleAnalyzer$Result, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(otcit_DoubleAnalyzer$Result__init_)],
ju_Random, 0, jl_Object, [jur_RandomGenerator, ji_Serializable], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_Random__init_), "$nextDouble", $rt_wrapFunction0(ju_Random_nextDouble)],
otpp_ResourceAccessor, 0, jl_Object, [], 4, 0, 0, 0, 0,
otci_IntegerUtil, 0, jl_Object, [], 4, 3, 0, 0, 0,
cpcw_CanvasModel$Bounds, 0, jl_Record, [], 32772, 3, 0, 0, ["$_init_19", $rt_wrapFunction2(cpcw_CanvasModel$Bounds__init_), "$width0", $rt_wrapFunction0(cpcw_CanvasModel$Bounds_width), "$height0", $rt_wrapFunction0(cpcw_CanvasModel$Bounds_height)],
otcir_FieldInfo, 0, jl_Object, [], 0, 3, 0, 0, 0]);
$rt_metadata([otjc_JSObjects, 0, jl_Object, [], 4, 3, 0, 0, 0,
otji_JS, 0, jl_Object, [], 4, 3, 0, 0, 0,
cpce_MatchingEngineStudio$restartSim$lambda$_5_0, 0, jl_Object, [cpcj_Js$VoidCb], 0, 3, 0, 0, ["$_init_25", $rt_wrapFunction2(cpce_MatchingEngineStudio$restartSim$lambda$_5_0__init_), "$call", $rt_wrapFunction0(cpce_MatchingEngineStudio$restartSim$lambda$_5_0_call)],
cpcm_OrderBookLevel, 0, jl_Record, [], 32772, 3, 0, 0, ["$_init_62", $rt_wrapFunction4(cpcm_OrderBookLevel__init_), "$price", $rt_wrapFunction0(cpcm_OrderBookLevel_price), "$totalVolume", $rt_wrapFunction0(cpcm_OrderBookLevel_totalVolume)],
juf_Consumer, 0, jl_Object, [], 3, 3, 0, 0, 0,
cpce_MatchingEngineStudio$simTick$lambda$_6_0, 0, jl_Object, [juf_Consumer], 0, 3, 0, 0, ["$_init_23", $rt_wrapFunction1(cpce_MatchingEngineStudio$simTick$lambda$_6_0__init_), "$accept0", $rt_wrapFunction1(cpce_MatchingEngineStudio$simTick$lambda$_6_0_accept0), "$accept", $rt_wrapFunction1(cpce_MatchingEngineStudio$simTick$lambda$_6_0_accept)],
otciu_UnicodeHelper, 0, jl_Object, [], 4, 3, 0, 0, 0,
ju_Objects, 0, jl_Object, [], 4, 3, 0, 0, 0,
otjc_JSUndefined, 0, jl_Object, [otj_JSObject], 0, 3, 0, 0, 0,
ju_Comparator, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Comparator$NaturalOrder, 0, jl_Object, [ju_Comparator], 0, 3, 0, ju_Comparator$NaturalOrder_$callClinit, ["$_init_", $rt_wrapFunction0(ju_Comparator$NaturalOrder__init_), "$compare1", $rt_wrapFunction2(ju_Comparator$NaturalOrder_compare)],
cpcj_JavaArchitectureViewer, 0, jl_Object, [cpcs_View], 4, 3, 0, cpcj_JavaArchitectureViewer_$callClinit, ["$_init_", $rt_wrapFunction0(cpcj_JavaArchitectureViewer__init_), "$root", $rt_wrapFunction0(cpcj_JavaArchitectureViewer_root), "$onPrimaryAction", $rt_wrapFunction0(cpcj_JavaArchitectureViewer_onPrimaryAction), "$dispose", $rt_wrapFunction0(cpcj_JavaArchitectureViewer_dispose)],
ju_Queue, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
cpce_MatchingEngine$BookEntry, 0, jl_Record, [], 32772, 0, 0, 0, 0,
jl_ArrayStoreException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_ArrayStoreException__init_0)],
otjc_JSFinalizationRegistryConsumer, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cpcw_BotSwarm, 0, jl_Object, [], 4, 0, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_BotSwarm__init_), "$bots", $rt_wrapFunction0(cpcw_BotSwarm_bots), "$isActive", $rt_wrapFunction0(cpcw_BotSwarm_isActive), "$behavior", $rt_wrapFunction0(cpcw_BotSwarm_behavior), "$followId", $rt_wrapFunction0(cpcw_BotSwarm_followId), "$start", $rt_wrapFunction0(cpcw_BotSwarm_start), "$spawn", $rt_wrapFunction1(cpcw_BotSwarm_spawn), "$addBots", $rt_wrapFunction1(cpcw_BotSwarm_addBots), "$toggleActive", $rt_wrapFunction0(cpcw_BotSwarm_toggleActive),
"$setBehavior", $rt_wrapFunction1(cpcw_BotSwarm_setBehavior), "$toggleFollow", $rt_wrapFunction1(cpcw_BotSwarm_toggleFollow), "$pause", $rt_wrapFunction0(cpcw_BotSwarm_pause), "$dispose", $rt_wrapFunction0(cpcw_BotSwarm_dispose), "$followCam", $rt_wrapFunction0(cpcw_BotSwarm_followCam)],
otji_JSWrapper, 0, jl_Object, [], 4, 3, 0, 0, 0,
juf_Function, 0, jl_Object, [], 3, 3, 0, 0, 0,
otp_Platform, 0, jl_Object, [], 4, 3, 0, 0, 0,
cpcm_RingSlot, 0, jl_Object, [], 4, 3, 0, 0, ["$_init_46", function(var_1, var_2, var_3, var_4, var_5) { cpcm_RingSlot__init_(this, var_1, var_2, var_3, var_4, var_5); }, "$getIndex", $rt_wrapFunction0(cpcm_RingSlot_getIndex), "$getSequence", $rt_wrapFunction0(cpcm_RingSlot_getSequence), "$setSequence", $rt_wrapFunction1(cpcm_RingSlot_setSequence), "$getState", $rt_wrapFunction0(cpcm_RingSlot_getState), "$setState", $rt_wrapFunction1(cpcm_RingSlot_setState), "$getPayload", $rt_wrapFunction0(cpcm_RingSlot_getPayload),
"$setPayload", $rt_wrapFunction1(cpcm_RingSlot_setPayload), "$setTimestamp", $rt_wrapFunction1(cpcm_RingSlot_setTimestamp)],
cpcs_AppShell$desktopIcons$lambda$_15_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_9", $rt_wrapFunction2(cpcs_AppShell$desktopIcons$lambda$_15_0__init_), "$run", $rt_wrapFunction0(cpcs_AppShell$desktopIcons$lambda$_15_0_run)],
cpcw_CanvasRenderer, 0, jl_Object, [], 4, 0, 0, 0, ["$_init_32", $rt_wrapFunction1(cpcw_CanvasRenderer__init_), "$render", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8) { cpcw_CanvasRenderer_render(this, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8); }],
ju_NoSuchElementException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_NoSuchElementException__init_0)],
cpcj_JavaArchitectureViewer$buildBanner$lambda$_4_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_37", $rt_wrapFunction1(cpcj_JavaArchitectureViewer$buildBanner$lambda$_4_0__init_), "$run", $rt_wrapFunction0(cpcj_JavaArchitectureViewer$buildBanner$lambda$_4_0_run)],
ju_AbstractList$TListIteratorImpl, 0, jl_Object, [ju_ListIterator], 0, 0, 0, 0, ["$_init_52", $rt_wrapFunction4(ju_AbstractList$TListIteratorImpl__init_), "$next", $rt_wrapFunction0(ju_AbstractList$TListIteratorImpl_next), "$nextIndex", $rt_wrapFunction0(ju_AbstractList$TListIteratorImpl_nextIndex)],
cpcw_CanvasModel$ArchNode, 0, jl_Record, [], 32772, 3, 0, 0, ["$_init_29", $rt_wrapFunction3(cpcw_CanvasModel$ArchNode__init_0), "$label", $rt_wrapFunction0(cpcw_CanvasModel$ArchNode_label), "$type", $rt_wrapFunction0(cpcw_CanvasModel$ArchNode_type), "$color", $rt_wrapFunction0(cpcw_CanvasModel$ArchNode_color)],
cpcm_Collaborator, 0, jl_Object, [], 4, 3, 0, 0, ["$_init_28", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9) { cpcm_Collaborator__init_(this, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9); }, "$getId", $rt_wrapFunction0(cpcm_Collaborator_getId), "$getName", $rt_wrapFunction0(cpcm_Collaborator_getName), "$getColor", $rt_wrapFunction0(cpcm_Collaborator_getColor), "$getCursor", $rt_wrapFunction0(cpcm_Collaborator_getCursor), "$setCursor", $rt_wrapFunction1(cpcm_Collaborator_setCursor),
"$getLastAction", $rt_wrapFunction0(cpcm_Collaborator_getLastAction), "$setLastAction", $rt_wrapFunction1(cpcm_Collaborator_setLastAction), "$setLastActive", $rt_wrapFunction1(cpcm_Collaborator_setLastActive)],
cpcw_LiveSession, 0, jl_Object, [], 4, 0, 0, cpcw_LiveSession_$callClinit, ["$_init_30", $rt_wrapFunction1(cpcw_LiveSession__init_), "$isOn", $rt_wrapFunction0(cpcw_LiveSession_isOn), "$hasSocket", $rt_wrapFunction0(cpcw_LiveSession_hasSocket), "$status", $rt_wrapFunction0(cpcw_LiveSession_status), "$room", $rt_wrapFunction0(cpcw_LiveSession_room), "$displayName", $rt_wrapFunction0(cpcw_LiveSession_displayName), "$peers", $rt_wrapFunction0(cpcw_LiveSession_peers), "$setName", $rt_wrapFunction1(cpcw_LiveSession_setName),
"$setRoom", $rt_wrapFunction1(cpcw_LiveSession_setRoom), "$sendCursor", $rt_wrapFunction2(cpcw_LiveSession_sendCursor), "$upsert", $rt_wrapFunction1(cpcw_LiveSession_upsert), "$delete", $rt_wrapFunction1(cpcw_LiveSession_delete), "$clear0", $rt_wrapFunction0(cpcw_LiveSession_clear), "$connect", $rt_wrapFunction0(cpcw_LiveSession_connect), "$disconnect", $rt_wrapFunction0(cpcw_LiveSession_disconnect), "$dispose", $rt_wrapFunction0(cpcw_LiveSession_dispose)],
otcir_MethodInfo, 0, jl_Object, [], 0, 3, 0, 0, 0,
jlr_AnnotatedElement, 0, jl_Object, [], 3, 3, 0, 0, 0,
jlr_Type, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Class, 0, jl_Object, [jlr_AnnotatedElement, jlr_Type], 4, 3, 0, 0, ["$toString", $rt_wrapFunction0(jl_Class_toString), "$getPlatformClass", $rt_wrapFunction0(jl_Class_getPlatformClass), "$isInstance0", $rt_wrapFunction1(jl_Class_isInstance), "$getName", $rt_wrapFunction0(jl_Class_getName), "$isPrimitive", $rt_wrapFunction0(jl_Class_isPrimitive), "$isInterface", $rt_wrapFunction0(jl_Class_isInterface), "$getComponentType", $rt_wrapFunction0(jl_Class_getComponentType), "$getSuperclass", $rt_wrapFunction0(jl_Class_getSuperclass)],
cpce_MatchingEngine$insertIntoBook$lambda$_6_0, 0, jl_Object, [juf_Function], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cpce_MatchingEngine$insertIntoBook$lambda$_6_0__init_), "$apply", $rt_wrapFunction1(cpce_MatchingEngine$insertIntoBook$lambda$_6_0_apply0), "$apply0", $rt_wrapFunction1(cpce_MatchingEngine$insertIntoBook$lambda$_6_0_apply)],
cpce_RingBuffer, 0, jl_Object, [], 4, 3, 0, 0, ["$_init_2", $rt_wrapFunction1(cpce_RingBuffer__init_), "$getCapacity", $rt_wrapFunction0(cpce_RingBuffer_getCapacity), "$publish", $rt_wrapFunction1(cpce_RingBuffer_publish), "$stepJournaler", $rt_wrapFunction1(cpce_RingBuffer_stepJournaler), "$stepMatching", $rt_wrapFunction2(cpce_RingBuffer_stepMatching), "$stepPublisher", $rt_wrapFunction1(cpce_RingBuffer_stepPublisher), "$getSlots", $rt_wrapFunction0(cpce_RingBuffer_getSlots), "$getCursors", $rt_wrapFunction0(cpce_RingBuffer_getCursors),
"$getBufferUtilization", $rt_wrapFunction0(cpce_RingBuffer_getBufferUtilization)],
cpcm_McqConsensusView$QuizOption, 0, jl_Record, [], 32772, 0, 0, 0, ["$key", $rt_wrapFunction0(cpcm_McqConsensusView$QuizOption_key), "$label", $rt_wrapFunction0(cpcm_McqConsensusView$QuizOption_label), "$isCorrect", $rt_wrapFunction0(cpcm_McqConsensusView$QuizOption_isCorrect)],
ju_Arrays, 0, jl_Object, [], 0, 3, 0, 0, 0,
jl_System, 0, jl_Object, [], 4, 3, 0, 0, 0,
cpcj_Json, 0, jl_Object, [], 4, 3, 0, 0, 0,
cpcm_OrderInput, 0, jl_Record, [], 32772, 3, 0, 0, ["$_init_24", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7) { cpcm_OrderInput__init_0(this, var_1, var_2, var_3, var_4, var_5, var_6, var_7); }, "$_init_27", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9) { cpcm_OrderInput__init_(this, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9); }, "$id", $rt_wrapFunction0(cpcm_OrderInput_id), "$traderId", $rt_wrapFunction0(cpcm_OrderInput_traderId), "$traderName", $rt_wrapFunction0(cpcm_OrderInput_traderName),
"$side", $rt_wrapFunction0(cpcm_OrderInput_side), "$type0", $rt_wrapFunction0(cpcm_OrderInput_type), "$price", $rt_wrapFunction0(cpcm_OrderInput_price), "$size0", $rt_wrapFunction0(cpcm_OrderInput_size), "$timestamp0", $rt_wrapFunction0(cpcm_OrderInput_timestamp), "$optionKey", $rt_wrapFunction0(cpcm_OrderInput_optionKey)],
ju_Collections$5, 0, jl_Object, [ju_ListIterator], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(ju_Collections$5__init_)],
cpcs_AppShell$buildDialog$lambda$_19_5, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cpcs_AppShell$buildDialog$lambda$_19_5__init_), "$run", $rt_wrapFunction0(cpcs_AppShell$buildDialog$lambda$_19_5_run)],
jm_BigDecimal, 0, jl_Number, [jl_Comparable, ji_Serializable], 0, 3, 0, jm_BigDecimal_$callClinit, ["$_init_21", $rt_wrapFunction1(jm_BigDecimal__init_3), "$_init_49", $rt_wrapFunction2(jm_BigDecimal__init_2), "$signum", $rt_wrapFunction0(jm_BigDecimal_signum), "$setScale", $rt_wrapFunction2(jm_BigDecimal_setScale), "$doubleValue", $rt_wrapFunction0(jm_BigDecimal_doubleValue)],
cpcs_AppShell$buildDialog$lambda$_19_4, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_8", $rt_wrapFunction1(cpcs_AppShell$buildDialog$lambda$_19_4__init_), "$run", $rt_wrapFunction0(cpcs_AppShell$buildDialog$lambda$_19_4_run)],
ju_List, 0, jl_Object, [ju_SequencedCollection], 3, 3, 0, 0, 0,
ju_AbstractList, 0, ju_AbstractCollection, [ju_List], 1, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_AbstractList__init_), "$add1", $rt_wrapFunction1(ju_AbstractList_add), "$iterator", $rt_wrapFunction0(ju_AbstractList_iterator), "$add3", $rt_wrapFunction2(ju_AbstractList_add0), "$indexOf", $rt_wrapFunction1(ju_AbstractList_indexOf), "$listIterator", $rt_wrapFunction1(ju_AbstractList_listIterator), "$subList", $rt_wrapFunction2(ju_AbstractList_subList)],
ju_RandomAccess, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_TemplateCollections$AbstractImmutableList, 0, ju_AbstractList, [ju_RandomAccess], 1, 0, 0, 0, ["$_init_", $rt_wrapFunction0(ju_TemplateCollections$AbstractImmutableList__init_), "$remove", $rt_wrapFunction1(ju_TemplateCollections$AbstractImmutableList_remove)],
ju_Collections$3, 0, ju_TemplateCollections$AbstractImmutableList, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(ju_Collections$3__init_), "$get0", $rt_wrapFunction1(ju_Collections$3_get), "$size", $rt_wrapFunction0(ju_Collections$3_size), "$iterator", $rt_wrapFunction0(ju_Collections$3_iterator), "$isEmpty", $rt_wrapFunction0(ju_Collections$3_isEmpty)],
cpcs_AppShell$buildDialog$lambda$_19_3, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_8", $rt_wrapFunction1(cpcs_AppShell$buildDialog$lambda$_19_3__init_), "$run", $rt_wrapFunction0(cpcs_AppShell$buildDialog$lambda$_19_3_run)]]);
$rt_metadata([ju_Collections$4, 0, jl_Object, [ju_Iterator], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(ju_Collections$4__init_), "$hasNext", $rt_wrapFunction0(ju_Collections$4_hasNext), "$next", $rt_wrapFunction0(ju_Collections$4_next)],
cpcs_AppShell$buildDialog$lambda$_19_2, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_8", $rt_wrapFunction1(cpcs_AppShell$buildDialog$lambda$_19_2__init_), "$run", $rt_wrapFunction0(cpcs_AppShell$buildDialog$lambda$_19_2_run)],
jl_Character, 0, jl_Object, [jl_Comparable], 0, 3, 0, jl_Character_$callClinit, 0,
ju_Set, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
ju_AbstractSet, 0, ju_AbstractCollection, [ju_Set], 1, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_AbstractSet__init_)],
ju_TemplateCollections$AbstractImmutableSet, 0, ju_AbstractSet, [], 1, 0, 0, 0, ["$_init_", $rt_wrapFunction0(ju_TemplateCollections$AbstractImmutableSet__init_)],
ju_Collections$1, 0, ju_TemplateCollections$AbstractImmutableSet, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(ju_Collections$1__init_)],
ju_Collections$2, 0, ju_TemplateCollections$AbstractImmutableMap, [], 0, 0, 0, 0, ["$computeIfAbsent", $rt_wrapFunction2(ju_Map_computeIfAbsent), "$_init_", $rt_wrapFunction0(ju_Collections$2__init_)],
cpcs_AppShell$buildDialog$lambda$_19_6, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_8", $rt_wrapFunction1(cpcs_AppShell$buildDialog$lambda$_19_6__init_), "$run", $rt_wrapFunction0(cpcs_AppShell$buildDialog$lambda$_19_6_run)],
cpcs_AppShell$buildDialog$lambda$_19_1, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_8", $rt_wrapFunction1(cpcs_AppShell$buildDialog$lambda$_19_1__init_), "$run", $rt_wrapFunction0(cpcs_AppShell$buildDialog$lambda$_19_1_run)],
cpcs_AppShell$buildDialog$lambda$_19_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_8", $rt_wrapFunction1(cpcs_AppShell$buildDialog$lambda$_19_0__init_), "$run", $rt_wrapFunction0(cpcs_AppShell$buildDialog$lambda$_19_0_run)],
cpcw_WhiteboardStudio$_init_$lambda$_0_12, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_12__init_), "$run", $rt_wrapFunction0(cpcw_WhiteboardStudio$_init_$lambda$_0_12_run)],
ju_SequencedSet, 0, jl_Object, [ju_SequencedCollection, ju_Set], 3, 3, 0, 0, 0,
cpcw_WhiteboardStudio$_init_$lambda$_0_13, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_13__init_), "$run", $rt_wrapFunction0(cpcw_WhiteboardStudio$_init_$lambda$_0_13_run)],
cpcw_WhiteboardStudio$_init_$lambda$_0_10, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_10__init_), "$run", $rt_wrapFunction0(cpcw_WhiteboardStudio$_init_$lambda$_0_10_run)],
cpcw_WhiteboardStudio$_init_$lambda$_0_11, 0, jl_Object, [cpcs_Ui$InputHandler], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_11__init_), "$handle", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_11_handle)],
cpcw_WhiteboardStudio$_init_$lambda$_0_16, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_31", $rt_wrapFunction2(cpcw_WhiteboardStudio$_init_$lambda$_0_16__init_), "$run", $rt_wrapFunction0(cpcw_WhiteboardStudio$_init_$lambda$_0_16_run)],
cpcw_WhiteboardStudio$_init_$lambda$_0_14, 0, jl_Object, [cpcj_Js$VoidCb], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_14__init_), "$call", $rt_wrapFunction0(cpcw_WhiteboardStudio$_init_$lambda$_0_14_call)],
cpcj_Js$FrameCb, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cpcw_WhiteboardStudio$_init_$lambda$_0_15, 0, jl_Object, [cpcj_Js$FrameCb], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_15__init_), "$call0", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_15_call)],
ju_ArrayDeque$1, 0, jl_Object, [ju_Iterator], 0, 0, 0, 0, ["$_init_63", $rt_wrapFunction1(ju_ArrayDeque$1__init_), "$hasNext", $rt_wrapFunction0(ju_ArrayDeque$1_hasNext), "$next", $rt_wrapFunction0(ju_ArrayDeque$1_next)],
otcir_ClassList, 0, jl_Object, [], 0, 3, 0, 0, 0,
ju_Collections$_clinit_$lambda$_59_0, 0, jl_Object, [ju_Comparator], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_Collections$_clinit_$lambda$_59_0__init_), "$compare1", $rt_wrapFunction2(ju_Collections$_clinit_$lambda$_59_0_compare)],
cpcs_AppShell$renderOverlays$lambda$_18_2, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_10", $rt_wrapFunction2(cpcs_AppShell$renderOverlays$lambda$_18_2__init_), "$run", $rt_wrapFunction0(cpcs_AppShell$renderOverlays$lambda$_18_2_run)],
cpcs_AppShell$renderOverlays$lambda$_18_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_8", $rt_wrapFunction1(cpcs_AppShell$renderOverlays$lambda$_18_0__init_), "$run", $rt_wrapFunction0(cpcs_AppShell$renderOverlays$lambda$_18_0_run)],
cpcs_AppShell$renderOverlays$lambda$_18_1, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_8", $rt_wrapFunction1(cpcs_AppShell$renderOverlays$lambda$_18_1__init_), "$run", $rt_wrapFunction0(cpcs_AppShell$renderOverlays$lambda$_18_1_run)],
cpce_MatchingEngineStudio$1, 0, jl_Object, [], 32, 0, 0, cpce_MatchingEngineStudio$1_$callClinit, 0,
jm_Multiplication, 0, jl_Object, [], 0, 0, 0, jm_Multiplication_$callClinit, 0,
ju_AbstractList$SubAbstractList$SubAbstractListIterator, 0, jl_Object, [ju_ListIterator], 4, 0, 0, 0, ["$_init_56", $rt_wrapFunction4(ju_AbstractList$SubAbstractList$SubAbstractListIterator__init_), "$hasNext", $rt_wrapFunction0(ju_AbstractList$SubAbstractList$SubAbstractListIterator_hasNext), "$next", $rt_wrapFunction0(ju_AbstractList$SubAbstractList$SubAbstractListIterator_next)],
ju_LinkedHashMapKeySet, 0, ju_AbstractSet, [ju_SequencedSet], 0, 0, 0, 0, ["$_init_13", $rt_wrapFunction2(ju_LinkedHashMapKeySet__init_), "$size", $rt_wrapFunction0(ju_LinkedHashMapKeySet_size), "$iterator", $rt_wrapFunction0(ju_LinkedHashMapKeySet_iterator)],
jl_Double, 0, jl_Number, [jl_Comparable], 0, 3, 0, jl_Double_$callClinit, ["$_init_21", $rt_wrapFunction1(jl_Double__init_), "$doubleValue", $rt_wrapFunction0(jl_Double_doubleValue), "$equals", $rt_wrapFunction1(jl_Double_equals0), "$hashCode", $rt_wrapFunction0(jl_Double_hashCode), "$compareTo3", $rt_wrapFunction1(jl_Double_compareTo0), "$compareTo1", $rt_wrapFunction1(jl_Double_compareTo)],
jm_Elementary, 0, jl_Object, [], 0, 0, 0, 0, 0,
cpcm_McqConsensusView$QuizQuestion, 0, jl_Record, [], 32772, 0, 0, 0, ["$id", $rt_wrapFunction0(cpcm_McqConsensusView$QuizQuestion_id), "$title", $rt_wrapFunction0(cpcm_McqConsensusView$QuizQuestion_title), "$context", $rt_wrapFunction0(cpcm_McqConsensusView$QuizQuestion_context), "$options", $rt_wrapFunction0(cpcm_McqConsensusView$QuizQuestion_options), "$explanation", $rt_wrapFunction0(cpcm_McqConsensusView$QuizQuestion_explanation), "$trap", $rt_wrapFunction0(cpcm_McqConsensusView$QuizQuestion_trap)],
cpcm_McqConsensusView$buildOptionRow$lambda$_6_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_66", $rt_wrapFunction2(cpcm_McqConsensusView$buildOptionRow$lambda$_6_0__init_), "$run", $rt_wrapFunction0(cpcm_McqConsensusView$buildOptionRow$lambda$_6_0_run)],
cpcm_ToolType, 0, jl_Enum, [], 12, 3, 0, cpcm_ToolType_$callClinit, 0,
ju_ArrayList, 0, ju_AbstractList, [jl_Cloneable, ji_Serializable, ju_RandomAccess], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_ArrayList__init_3), "$_init_2", $rt_wrapFunction1(ju_ArrayList__init_1), "$_init_20", $rt_wrapFunction1(ju_ArrayList__init_2), "$ensureCapacity", $rt_wrapFunction1(ju_ArrayList_ensureCapacity), "$get0", $rt_wrapFunction1(ju_ArrayList_get), "$size", $rt_wrapFunction0(ju_ArrayList_size), "$set", $rt_wrapFunction2(ju_ArrayList_set), "$add1", $rt_wrapFunction1(ju_ArrayList_add), "$add3",
$rt_wrapFunction2(ju_ArrayList_add0), "$remove", $rt_wrapFunction1(ju_ArrayList_remove), "$remove0", $rt_wrapFunction1(ju_ArrayList_remove0), "$clear0", $rt_wrapFunction0(ju_ArrayList_clear), "$sort2", $rt_wrapFunction1(ju_ArrayList_sort)],
jm_Division, 0, jl_Object, [], 0, 0, 0, 0, 0,
jm_BitLevel, 0, jl_Object, [], 0, 0, 0, 0, 0,
cpcm_OrderBookState, 0, jl_Record, [], 32772, 3, 0, 0, ["$_init_61", function(var_1, var_2, var_3, var_4, var_5, var_6) { cpcm_OrderBookState__init_(this, var_1, var_2, var_3, var_4, var_5, var_6); }, "$bids", $rt_wrapFunction0(cpcm_OrderBookState_bids), "$asks", $rt_wrapFunction0(cpcm_OrderBookState_asks), "$lastTradePrice", $rt_wrapFunction0(cpcm_OrderBookState_lastTradePrice), "$midPrice", $rt_wrapFunction0(cpcm_OrderBookState_midPrice), "$spread", $rt_wrapFunction0(cpcm_OrderBookState_spread)],
cpcw_WhiteboardStudio$toolButton$lambda$_8_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_33", $rt_wrapFunction2(cpcw_WhiteboardStudio$toolButton$lambda$_8_0__init_), "$run", $rt_wrapFunction0(cpcw_WhiteboardStudio$toolButton$lambda$_8_0_run)],
cpcs_Ui$MouseHandler, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_AbstractList$SubAbstractList, 0, ju_AbstractList, [], 0, 0, 0, 0, ["$_init_53", $rt_wrapFunction3(ju_AbstractList$SubAbstractList__init_), "$get0", $rt_wrapFunction1(ju_AbstractList$SubAbstractList_get), "$iterator", $rt_wrapFunction0(ju_AbstractList$SubAbstractList_iterator), "$listIterator", $rt_wrapFunction1(ju_AbstractList$SubAbstractList_listIterator), "$size", $rt_wrapFunction0(ju_AbstractList$SubAbstractList_size)],
ju_AbstractList$SubAbstractListRandomAccess, 0, ju_AbstractList$SubAbstractList, [ju_RandomAccess], 4, 0, 0, 0, ["$_init_53", $rt_wrapFunction3(ju_AbstractList$SubAbstractListRandomAccess__init_)],
jl_String, 0, jl_Object, [ji_Serializable, jl_Comparable, jl_CharSequence], 0, 3, 0, jl_String_$callClinit, ["$_init_", $rt_wrapFunction0(jl_String__init_0), "$_init_35", $rt_wrapFunction1(jl_String__init_), "$_init_57", $rt_wrapFunction1(jl_String__init_2), "$_init_7", $rt_wrapFunction3(jl_String__init_4), "$charAt", $rt_wrapFunction1(jl_String_charAt), "$length", $rt_wrapFunction0(jl_String_length), "$isEmpty", $rt_wrapFunction0(jl_String_isEmpty), "$getChars", $rt_wrapFunction4(jl_String_getChars), "$compareTo4",
$rt_wrapFunction1(jl_String_compareTo0), "$substring", $rt_wrapFunction2(jl_String_substring), "$substring0", $rt_wrapFunction1(jl_String_substring0), "$toString", $rt_wrapFunction0(jl_String_toString), "$toCharArray", $rt_wrapFunction0(jl_String_toCharArray), "$equals", $rt_wrapFunction1(jl_String_equals), "$hashCode", $rt_wrapFunction0(jl_String_hashCode), "$repeat", $rt_wrapFunction1(jl_String_repeat), "$compareTo1", $rt_wrapFunction1(jl_String_compareTo)],
jl_NegativeArraySizeException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_NegativeArraySizeException__init_)],
cpcm_CanvasElement, 0, jl_Record, [], 32772, 3, 0, 0, ["$_init_18", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9, var_10, var_11, var_12, var_13, var_14, var_15) { cpcm_CanvasElement__init_(this, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9, var_10, var_11, var_12, var_13, var_14, var_15); }, "$id", $rt_wrapFunction0(cpcm_CanvasElement_id), "$type", $rt_wrapFunction0(cpcm_CanvasElement_type), "$points", $rt_wrapFunction0(cpcm_CanvasElement_points), "$x", $rt_wrapFunction0(cpcm_CanvasElement_x),
"$y", $rt_wrapFunction0(cpcm_CanvasElement_y), "$width", $rt_wrapFunction0(cpcm_CanvasElement_width), "$height", $rt_wrapFunction0(cpcm_CanvasElement_height), "$color", $rt_wrapFunction0(cpcm_CanvasElement_color), "$fillColor", $rt_wrapFunction0(cpcm_CanvasElement_fillColor), "$strokeWidth", $rt_wrapFunction0(cpcm_CanvasElement_strokeWidth), "$text", $rt_wrapFunction0(cpcm_CanvasElement_text), "$authorId", $rt_wrapFunction0(cpcm_CanvasElement_authorId), "$authorName", $rt_wrapFunction0(cpcm_CanvasElement_authorName),
"$authorColor", $rt_wrapFunction0(cpcm_CanvasElement_authorColor), "$updatedAt", $rt_wrapFunction0(cpcm_CanvasElement_updatedAt)],
cpcs_Ui$onMouse$lambda$_12_0, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$_init_70", $rt_wrapFunction1(cpcs_Ui$onMouse$lambda$_12_0__init_), "$handleEvent", $rt_wrapFunction1(cpcs_Ui$onMouse$lambda$_12_0_handleEvent)],
jl_UnsupportedOperationException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_UnsupportedOperationException__init_)],
cpcj_JavaArchitectureViewer$handleCopy$lambda$_9_0, 0, jl_Object, [cpcj_Js$VoidCb], 0, 3, 0, 0, ["$_init_39", $rt_wrapFunction2(cpcj_JavaArchitectureViewer$handleCopy$lambda$_9_0__init_), "$call", $rt_wrapFunction0(cpcj_JavaArchitectureViewer$handleCopy$lambda$_9_0_call)],
cpcm_McqConsensusView$syncCountdown$lambda$_19_0, 0, jl_Object, [cpcj_Js$VoidCb], 0, 3, 0, 0, ["$_init_64", $rt_wrapFunction1(cpcm_McqConsensusView$syncCountdown$lambda$_19_0__init_), "$call", $rt_wrapFunction0(cpcm_McqConsensusView$syncCountdown$lambda$_19_0_call)]]);
$rt_metadata([jl_IllegalArgumentException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_IllegalArgumentException__init_1), "$_init_0", $rt_wrapFunction1(jl_IllegalArgumentException__init_0)],
jl_NumberFormatException, 0, jl_IllegalArgumentException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_NumberFormatException__init_0), "$_init_0", $rt_wrapFunction1(jl_NumberFormatException__init_1)],
cpcw_WhiteboardStudio$frame$lambda$_4_0, 0, jl_Object, [cpcj_Js$FrameCb], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$frame$lambda$_4_0__init_), "$call0", $rt_wrapFunction1(cpcw_WhiteboardStudio$frame$lambda$_4_0_call)],
cpce_MatchingEngine, 0, jl_Object, [], 4, 3, 0, 0, ["$_init_21", $rt_wrapFunction1(cpce_MatchingEngine__init_), "$processOrder", $rt_wrapFunction1(cpce_MatchingEngine_processOrder), "$getOrderBookState", $rt_wrapFunction0(cpce_MatchingEngine_getOrderBookState), "$getOrderBookState0", $rt_wrapFunction1(cpce_MatchingEngine_getOrderBookState0), "$getRecentTrades", $rt_wrapFunction0(cpce_MatchingEngine_getRecentTrades)],
ju_Deque, 0, jl_Object, [ju_Queue, ju_SequencedCollection], 3, 3, 0, 0, 0,
ju_ArrayDeque, 0, ju_AbstractCollection, [ju_Deque, jl_Cloneable, ji_Serializable], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_ArrayDeque__init_0), "$_init_2", $rt_wrapFunction1(ju_ArrayDeque__init_), "$addFirst", $rt_wrapFunction1(ju_ArrayDeque_addFirst), "$addLast", $rt_wrapFunction1(ju_ArrayDeque_addLast), "$removeFirst", $rt_wrapFunction0(ju_ArrayDeque_removeFirst), "$removeLast", $rt_wrapFunction0(ju_ArrayDeque_removeLast), "$pollFirst", $rt_wrapFunction0(ju_ArrayDeque_pollFirst), "$pollLast", $rt_wrapFunction0(ju_ArrayDeque_pollLast),
"$size", $rt_wrapFunction0(ju_ArrayDeque_size), "$isEmpty", $rt_wrapFunction0(ju_ArrayDeque_isEmpty), "$iterator", $rt_wrapFunction0(ju_ArrayDeque_iterator)],
cpcm_McqConsensusView, 0, jl_Object, [cpcs_View], 4, 3, 0, cpcm_McqConsensusView_$callClinit, ["$_init_", $rt_wrapFunction0(cpcm_McqConsensusView__init_), "$root", $rt_wrapFunction0(cpcm_McqConsensusView_root), "$onPrimaryAction", $rt_wrapFunction0(cpcm_McqConsensusView_onPrimaryAction), "$dispose", $rt_wrapFunction0(cpcm_McqConsensusView_dispose)],
cpcj_Ws$onMessage$lambda$_2_0, 0, jl_Object, [cpcj_Js$StrCb], 0, 3, 0, 0, ["$_init_12", $rt_wrapFunction1(cpcj_Ws$onMessage$lambda$_2_0__init_), "$call1", $rt_wrapFunction1(cpcj_Ws$onMessage$lambda$_2_0_call)],
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_6, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_31", $rt_wrapFunction2(cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_6__init_), "$run", $rt_wrapFunction0(cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_6_run)],
cpce_MatchingEngineStudio$_init_$lambda$_0_0, 0, jl_Object, [cpcs_Ui$InputHandler], 0, 3, 0, 0, ["$_init_23", $rt_wrapFunction1(cpce_MatchingEngineStudio$_init_$lambda$_0_0__init_), "$handle", $rt_wrapFunction1(cpce_MatchingEngineStudio$_init_$lambda$_0_0_handle)],
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_5, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_5__init_), "$run", $rt_wrapFunction0(cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_5_run)],
cpce_MatchingEngineStudio$_init_$lambda$_0_1, 0, jl_Object, [cpcs_Ui$InputHandler], 0, 3, 0, 0, ["$_init_23", $rt_wrapFunction1(cpce_MatchingEngineStudio$_init_$lambda$_0_1__init_), "$handle", $rt_wrapFunction1(cpce_MatchingEngineStudio$_init_$lambda$_0_1_handle)],
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_4, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_4__init_), "$run", $rt_wrapFunction0(cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_4_run)],
cpce_MatchingEngineStudio$_init_$lambda$_0_2, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_23", $rt_wrapFunction1(cpce_MatchingEngineStudio$_init_$lambda$_0_2__init_), "$run", $rt_wrapFunction0(cpce_MatchingEngineStudio$_init_$lambda$_0_2_run)],
cpce_MatchingEngineStudio$_init_$lambda$_0_3, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_23", $rt_wrapFunction1(cpce_MatchingEngineStudio$_init_$lambda$_0_3__init_), "$run", $rt_wrapFunction0(cpce_MatchingEngineStudio$_init_$lambda$_0_3_run)],
cpce_MatchingEngineStudio$_init_$lambda$_0_4, 0, jl_Object, [cpcj_Js$VoidCb], 0, 3, 0, 0, ["$_init_23", $rt_wrapFunction1(cpce_MatchingEngineStudio$_init_$lambda$_0_4__init_), "$call", $rt_wrapFunction0(cpce_MatchingEngineStudio$_init_$lambda$_0_4_call)],
cpce_MatchingEngineStudio$_init_$lambda$_0_5, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_23", $rt_wrapFunction1(cpce_MatchingEngineStudio$_init_$lambda$_0_5__init_), "$run", $rt_wrapFunction0(cpce_MatchingEngineStudio$_init_$lambda$_0_5_run)],
cpcw_WhiteboardJson, 0, jl_Object, [], 4, 0, 0, 0, 0,
cpcm_DisruptorMetrics, 0, jl_Record, [], 32772, 3, 0, 0, ["$_init_22", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9) { cpcm_DisruptorMetrics__init_(this, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9); }, "$totalProcessed", $rt_wrapFunction0(cpcm_DisruptorMetrics_totalProcessed), "$throughputOpsSec", $rt_wrapFunction0(cpcm_DisruptorMetrics_throughputOpsSec), "$p99LatencyUs", $rt_wrapFunction0(cpcm_DisruptorMetrics_p99LatencyUs), "$producerCursor", $rt_wrapFunction0(cpcm_DisruptorMetrics_producerCursor),
"$ringBufferUsage", $rt_wrapFunction0(cpcm_DisruptorMetrics_ringBufferUsage)],
jl_NullPointerException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction1(jl_NullPointerException__init_2), "$_init_", $rt_wrapFunction0(jl_NullPointerException__init_0)],
cpcs_Ui$onInput$lambda$_14_0, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$_init_71", $rt_wrapFunction1(cpcs_Ui$onInput$lambda$_14_0__init_), "$handleEvent", $rt_wrapFunction1(cpcs_Ui$onInput$lambda$_14_0_handleEvent)],
cpce_MatchingEngineStudio$_init_$lambda$_0_6, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_23", $rt_wrapFunction1(cpce_MatchingEngineStudio$_init_$lambda$_0_6__init_), "$run", $rt_wrapFunction0(cpce_MatchingEngineStudio$_init_$lambda$_0_6_run)],
cpcw_LiveSession$connect$lambda$_14_3, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_44", $rt_wrapFunction1(cpcw_LiveSession$connect$lambda$_14_3__init_), "$run", $rt_wrapFunction0(cpcw_LiveSession$connect$lambda$_14_3_run)],
cpce_MatchingEngineStudio$_init_$lambda$_0_7, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_23", $rt_wrapFunction1(cpce_MatchingEngineStudio$_init_$lambda$_0_7__init_), "$run", $rt_wrapFunction0(cpce_MatchingEngineStudio$_init_$lambda$_0_7_run)],
jl_Math, 0, jl_Object, [], 4, 3, 0, 0, 0,
cpce_MatchingEngineStudio$_init_$lambda$_0_8, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_23", $rt_wrapFunction1(cpce_MatchingEngineStudio$_init_$lambda$_0_8__init_), "$run", $rt_wrapFunction0(cpce_MatchingEngineStudio$_init_$lambda$_0_8_run)],
cpce_MatchingEngineStudio$_init_$lambda$_0_9, 0, jl_Object, [cpcs_Ui$InputHandler], 0, 3, 0, 0, ["$_init_23", $rt_wrapFunction1(cpce_MatchingEngineStudio$_init_$lambda$_0_9__init_), "$handle", $rt_wrapFunction1(cpce_MatchingEngineStudio$_init_$lambda$_0_9_handle)],
cpcw_LiveSession$connect$lambda$_14_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_43", $rt_wrapFunction2(cpcw_LiveSession$connect$lambda$_14_0__init_), "$run", $rt_wrapFunction0(cpcw_LiveSession$connect$lambda$_14_0_run)],
cpcw_LiveSession$connect$lambda$_14_1, 0, jl_Object, [cpcj_Ws$MessageHandler], 0, 3, 0, 0, ["$_init_44", $rt_wrapFunction1(cpcw_LiveSession$connect$lambda$_14_1__init_), "$onMessage0", $rt_wrapFunction1(cpcw_LiveSession$connect$lambda$_14_1_onMessage)],
jm_RoundingMode, "RoundingMode", 5, jl_Enum, [], 12, 3, 0, jm_RoundingMode_$callClinit, 0,
cpcw_LiveSession$connect$lambda$_14_2, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_44", $rt_wrapFunction1(cpcw_LiveSession$connect$lambda$_14_2__init_), "$run", $rt_wrapFunction0(cpcw_LiveSession$connect$lambda$_14_2_run)],
cpcs_Icons, 0, jl_Object, [], 4, 3, 0, cpcs_Icons_$callClinit, 0,
cpcs_Header$Callbacks, 0, jl_Object, [], 3, 3, 0, 0, 0,
cpcw_WhiteboardStudio$_init_$lambda$_0_9, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_9__init_), "$run", $rt_wrapFunction0(cpcw_WhiteboardStudio$_init_$lambda$_0_9_run)],
cpcw_WhiteboardStudio$_init_$lambda$_0_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_0__init_), "$run", $rt_wrapFunction0(cpcw_WhiteboardStudio$_init_$lambda$_0_0_run)],
cpce_MatchingEngineStudio$handleManualOrderSubmit$lambda$_8_0, 0, jl_Object, [juf_Consumer], 0, 3, 0, 0, ["$_init_23", $rt_wrapFunction1(cpce_MatchingEngineStudio$handleManualOrderSubmit$lambda$_8_0__init_), "$accept0", $rt_wrapFunction1(cpce_MatchingEngineStudio$handleManualOrderSubmit$lambda$_8_0_accept0), "$accept", $rt_wrapFunction1(cpce_MatchingEngineStudio$handleManualOrderSubmit$lambda$_8_0_accept)],
cpcw_WhiteboardStudio$_init_$lambda$_0_7, 0, jl_Object, [cpcs_Ui$MouseHandler], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_7__init_), "$handle0", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_7_handle)],
cpcw_WhiteboardStudio$_init_$lambda$_0_8, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_8__init_), "$run", $rt_wrapFunction0(cpcw_WhiteboardStudio$_init_$lambda$_0_8_run)],
cpcw_WhiteboardStudio$_init_$lambda$_0_5, 0, jl_Object, [cpcs_Ui$MouseHandler], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_5__init_), "$handle0", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_5_handle)],
cpcw_WhiteboardStudio$_init_$lambda$_0_6, 0, jl_Object, [cpcs_Ui$MouseHandler], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_6__init_), "$handle0", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_6_handle)],
cpcw_WhiteboardStudio$_init_$lambda$_0_3, 0, jl_Object, [cpcs_Ui$InputHandler], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_3__init_), "$handle", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_3_handle)],
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_3, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_3__init_), "$run", $rt_wrapFunction0(cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_3_run)],
cpcw_WhiteboardStudio$_init_$lambda$_0_4, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_4__init_), "$run", $rt_wrapFunction0(cpcw_WhiteboardStudio$_init_$lambda$_0_4_run)],
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_2, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_2__init_), "$run", $rt_wrapFunction0(cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_2_run)],
cpcw_WhiteboardStudio$_init_$lambda$_0_1, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_1__init_), "$run", $rt_wrapFunction0(cpcw_WhiteboardStudio$_init_$lambda$_0_1_run)],
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_1, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_1__init_), "$run", $rt_wrapFunction0(cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_1_run)],
cpcw_WhiteboardStudio$_init_$lambda$_0_2, 0, jl_Object, [cpcs_Ui$InputHandler], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_2__init_), "$handle", $rt_wrapFunction1(cpcw_WhiteboardStudio$_init_$lambda$_0_2_handle)],
cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_31", $rt_wrapFunction2(cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_0__init_), "$run", $rt_wrapFunction0(cpcw_WhiteboardStudio$rebuildToolbar$lambda$_7_0_run)],
cpcs_AppShell$_init_$lambda$_0_1, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_8", $rt_wrapFunction1(cpcs_AppShell$_init_$lambda$_0_1__init_), "$run", $rt_wrapFunction0(cpcs_AppShell$_init_$lambda$_0_1_run)],
cpcs_AppShell$_init_$lambda$_0_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_8", $rt_wrapFunction1(cpcs_AppShell$_init_$lambda$_0_0__init_), "$run", $rt_wrapFunction0(cpcs_AppShell$_init_$lambda$_0_0_run)]]);
$rt_metadata([cpcs_Ui, 0, jl_Object, [], 4, 3, 0, 0, 0,
cpcs_AppShell$_init_$lambda$_0_5, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_8", $rt_wrapFunction1(cpcs_AppShell$_init_$lambda$_0_5__init_), "$run", $rt_wrapFunction0(cpcs_AppShell$_init_$lambda$_0_5_run)],
cpcs_AppShell$_init_$lambda$_0_4, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_8", $rt_wrapFunction1(cpcs_AppShell$_init_$lambda$_0_4__init_), "$run", $rt_wrapFunction0(cpcs_AppShell$_init_$lambda$_0_4_run)],
cpcs_AppShell$_init_$lambda$_0_3, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_8", $rt_wrapFunction1(cpcs_AppShell$_init_$lambda$_0_3__init_), "$run", $rt_wrapFunction0(cpcs_AppShell$_init_$lambda$_0_3_run)],
cpcs_AppShell$_init_$lambda$_0_2, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_8", $rt_wrapFunction1(cpcs_AppShell$_init_$lambda$_0_2__init_), "$run", $rt_wrapFunction0(cpcs_AppShell$_init_$lambda$_0_2_run)],
cpcs_AppShell$1, 0, jl_Object, [cpcs_Header$Callbacks], 0, 0, 0, 0, ["$_init_8", $rt_wrapFunction1(cpcs_AppShell$1__init_), "$onTabChange", $rt_wrapFunction1(cpcs_AppShell$1_onTabChange), "$onPrimaryAction", $rt_wrapFunction0(cpcs_AppShell$1_onPrimaryAction)],
ju_TemplateCollections$ImmutableArrayList, 0, ju_TemplateCollections$AbstractImmutableList, [ju_RandomAccess], 0, 3, 0, 0, ["$_init_50", $rt_wrapFunction1(ju_TemplateCollections$ImmutableArrayList__init_0), "$get0", $rt_wrapFunction1(ju_TemplateCollections$ImmutableArrayList_get), "$size", $rt_wrapFunction0(ju_TemplateCollections$ImmutableArrayList_size)],
ju_LinkedHashMapIterator$KeyIterator, 0, ju_LinkedHashMapIterator, [ju_Iterator], 0, 0, 0, 0, ["$_init_13", $rt_wrapFunction2(ju_LinkedHashMapIterator$KeyIterator__init_), "$next", $rt_wrapFunction0(ju_LinkedHashMapIterator$KeyIterator_next)],
cpcs_Header$build$lambda$_1_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_73", $rt_wrapFunction1(cpcs_Header$build$lambda$_1_0__init_), "$run", $rt_wrapFunction0(cpcs_Header$build$lambda$_1_0_run)],
otcit_DoubleAnalyzer, 0, jl_Object, [], 4, 3, 0, otcit_DoubleAnalyzer_$callClinit, 0,
cpcs_Header$build$lambda$_1_1, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_72", $rt_wrapFunction2(cpcs_Header$build$lambda$_1_1__init_), "$run", $rt_wrapFunction0(cpcs_Header$build$lambda$_1_1_run)],
cpcs_Header$build$lambda$_1_2, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_72", $rt_wrapFunction2(cpcs_Header$build$lambda$_1_2__init_), "$run", $rt_wrapFunction0(cpcs_Header$build$lambda$_1_2_run)],
cpce_MatchingEngineStudio$injectBurst$lambda$_9_0, 0, jl_Object, [juf_Consumer], 0, 3, 0, 0, ["$_init_23", $rt_wrapFunction1(cpce_MatchingEngineStudio$injectBurst$lambda$_9_0__init_), "$accept0", $rt_wrapFunction1(cpce_MatchingEngineStudio$injectBurst$lambda$_9_0_accept0), "$accept", $rt_wrapFunction1(cpce_MatchingEngineStudio$injectBurst$lambda$_9_0_accept)],
cpcs_Header, 0, jl_Object, [], 4, 3, 0, cpcs_Header_$callClinit, 0,
otciu_CharMapping, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_36", $rt_wrapFunction2(otciu_CharMapping__init_)],
cpcs_AppShell$_init_$lambda$_0_6, 0, jl_Object, [cpcj_Js$VoidCb], 0, 3, 0, 0, ["$_init_8", $rt_wrapFunction1(cpcs_AppShell$_init_$lambda$_0_6__init_), "$call", $rt_wrapFunction0(cpcs_AppShell$_init_$lambda$_0_6_call)],
otjc_JSWeakRef, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
cpcj_Ws$onOpen$lambda$_1_0, 0, jl_Object, [cpcj_Js$VoidCb], 0, 3, 0, 0, ["$_init_11", $rt_wrapFunction1(cpcj_Ws$onOpen$lambda$_1_0__init_), "$call", $rt_wrapFunction0(cpcj_Ws$onOpen$lambda$_1_0_call)],
otci_CharFlow, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_35", $rt_wrapFunction1(otci_CharFlow__init_)],
cpcj_Ws$onError$lambda$_4_0, 0, jl_Object, [cpcj_Js$VoidCb], 0, 3, 0, 0, ["$_init_11", $rt_wrapFunction1(cpcj_Ws$onError$lambda$_4_0__init_), "$call", $rt_wrapFunction0(cpcj_Ws$onError$lambda$_4_0_call)],
cpcs_Clipboard, 0, jl_Object, [], 4, 3, 0, 0, 0,
otcit_DoubleSynthesizer, 0, jl_Object, [], 4, 3, 0, otcit_DoubleSynthesizer_$callClinit, 0,
otji_JSWrapper$Helper$_clinit_$lambda$_3_1, 0, jl_Object, [otjc_JSFinalizationRegistryConsumer], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_), "$accept0", $rt_wrapFunction1(otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept)],
cpcm_ElementType, "ElementType", 3, jl_Enum, [], 12, 3, 0, cpcm_ElementType_$callClinit, ["$getValue", $rt_wrapFunction0(cpcm_ElementType_getValue)],
otji_JSWrapper$Helper$_clinit_$lambda$_3_0, 0, jl_Object, [otjc_JSFinalizationRegistryConsumer], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_), "$accept0", $rt_wrapFunction1(otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept)],
cpcm_McqConsensusView$connect$lambda$_15_3, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_64", $rt_wrapFunction1(cpcm_McqConsensusView$connect$lambda$_15_3__init_), "$run", $rt_wrapFunction0(cpcm_McqConsensusView$connect$lambda$_15_3_run)],
cpcm_McqConsensusView$connect$lambda$_15_2, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_64", $rt_wrapFunction1(cpcm_McqConsensusView$connect$lambda$_15_2__init_), "$run", $rt_wrapFunction0(cpcm_McqConsensusView$connect$lambda$_15_2_run)],
cpcm_Point, 0, jl_Record, [], 32772, 3, 0, 0, ["$_init_19", $rt_wrapFunction2(cpcm_Point__init_0), "$x", $rt_wrapFunction0(cpcm_Point_x), "$y", $rt_wrapFunction0(cpcm_Point_y)],
cpcm_McqConsensusView$connect$lambda$_15_1, 0, jl_Object, [cpcj_Ws$MessageHandler], 0, 3, 0, 0, ["$_init_64", $rt_wrapFunction1(cpcm_McqConsensusView$connect$lambda$_15_1__init_), "$onMessage0", $rt_wrapFunction1(cpcm_McqConsensusView$connect$lambda$_15_1_onMessage)],
cpcm_McqConsensusView$connect$lambda$_15_0, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, ["$_init_64", $rt_wrapFunction1(cpcm_McqConsensusView$connect$lambda$_15_0__init_), "$run", $rt_wrapFunction0(cpcm_McqConsensusView$connect$lambda$_15_0_run)],
jl_String$_clinit_$lambda$_115_0, 0, jl_Object, [ju_Comparator], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_String$_clinit_$lambda$_115_0__init_)],
ju_Collections, 0, jl_Object, [], 0, 3, 0, ju_Collections_$callClinit, 0]);
let $rt_charArrayCls = $rt_arraycls($rt_charcls),
$rt_shortArrayCls = $rt_arraycls($rt_shortcls),
$rt_intArrayCls = $rt_arraycls($rt_intcls),
$rt_longArrayCls = $rt_arraycls($rt_longcls),
$rt_doubleArrayCls = $rt_arraycls($rt_doublecls);
$rt_stringPool(["Can\'t compare ", " to ", "FREE", "WRITING", "PUBLISHED", "JOURNALED", "MATCHED", "DISPATCHED", "NEW", "PARTIALLY_FILLED", "FILLED", "CANCELLED", "REJECTED", "Negative bit address", "Negative exponent", "BigInteger divide by zero", "null", "false", "true", "whiteboard", "maximized", "div", "relative h-screen win-desktop flex flex-col font-win text-black antialiased overflow-hidden", "flex-1 min-h-0 relative", "", "main", "flex-1 w-full overflow-hidden min-h-0", "win-titlebar-gradient flex items-center gap-2 px-2 h-9 shrink-0 select-none",
"span", "w-6 h-6 bg-[#0000CD] border border-white/60 flex items-center justify-center text-white text-sm leading-none shrink-0", "☰", "font-pixel text-2xl leading-none text-white tracking-wide truncate", "Collaborative Whiteboard - the null pointers", "ml-auto flex items-center gap-1", "win-title-btn", "?", "_", "□", "×", "bg-[#008080] border-b-2 border-black overflow-hidden shrink-0 select-none", "win-marquee-track flex whitespace-nowrap font-pixel text-[22px] leading-none text-white py-1 w-max", "COLLABORATIVE WHITEBOARD • THE NULL POINTERS • SRM UNIVERSITY AP • CSE 213 • ",
"pr-2", "footer", "win-taskbar h-10 shrink-0 flex items-center gap-2 px-2 text-black select-none relative z-30", "win-btn px-3 py-1 text-sm font-bold flex items-center gap-1.5", "<span aria-hidden=\"true\">■</span> Start", "win-sunken px-2 py-1 text-xs truncate max-w-[160px] sm:max-w-xs text-left", "ml-auto font-pixel text-xl leading-none tracking-wide hidden md:block", "SRM UNIVERSITY, AP | 2026 - 27", "win-sunken px-2 py-1 text-xs tabular-nums", "engine", "mcq", "java", "unknown tab: ", "Whiteboard Studio",
"LMAX Disruptor Engine", "Virtual MCQ Consensus", "Java 21 Architecture", "Inject 10k Load Burst", "Poll Control", "Copy Java Quickstart", "Spawn Bot Swarm", "minimized", "windowed", "absolute inset-0 flex items-center justify-center pointer-events-none px-6", "font-pixel text-3xl text-white/80 text-center", "Collaborative Whiteboard is minimized", "flex flex-col h-full overflow-hidden", "flex-1 min-h-0 relative flex items-center justify-center p-4 sm:p-8", "win-window w-full max-w-6xl h-full flex flex-col overflow-hidden",
"absolute left-3 top-3 z-10 flex flex-col gap-4 select-none", "button", "flex flex-col items-center gap-1 w-20 group", "w-10 h-10 flex items-center justify-center text-white group-hover:bg-white/20 border border-transparent group-hover:border-white/60", "w-7 h-7", "font-pixel text-lg leading-none text-white text-center px-1", "click", " win-btn-pressed", "Minimize Collaborative Whiteboard", "Restore Collaborative Whiteboard", "fixed inset-0 z-40", "absolute left-2 bottom-11 z-50 w-64 win-panel p-1 flex", "w-7 shrink-0 bg-[#0000CD] text-white font-pixel text-xl flex items-center justify-center py-2",
"rotate-180 tracking-wide", "the null pointers", "flex-1 py-1", "w-4 h-4 shrink-0", "w-full flex items-center gap-2 px-2 py-1.5 text-sm font-bold text-left hover:bg-[#0000CD] hover:text-white", "border-t-2 border-black/20 my-1", "<span class=\"w-4 h-4 flex items-center justify-center font-bold\">?</span> About Collaborative Whiteboard...", "close-confirm", "about", "recycle", "Recycle Bin", "Close Collaborative Whiteboard", "About Collaborative Whiteboard", "fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4",
"win-window w-full max-w-md", "win-titlebar-blue flex items-center gap-2 px-2 py-1 select-none", "win-title-btn ml-auto", "font-pixel text-xl leading-none truncate", "p-4 text-sm flex flex-col gap-3", "flex justify-end", "p", "font-pixel text-3xl leading-none", "COLLABORATIVE WHITEBOARD", "Version 1.0 · Advanced Java Programming Project, CSE 213", "Built by <strong>the null pointers</strong>: Naga Nikitha Sanaka, Vanshika Chand, Agastya Pandey, Sai Aswitha, Khalid Raza.", "Department of Computer Science and Engineering, SRM University, AP | 2026 - 27",
"text-xs text-[#404040]", "Real-time whiteboard over a Java 21 WebSocket server, LMAX Disruptor matching engine, and Project Loom virtual threads.", "win-btn px-4 py-1 text-sm font-bold", "OK", "Recycle Bin is empty.", "Close Collaborative Whiteboard? Your board is saved on the server.", "flex justify-end gap-2", "Yes", "No", "Whiteboard", "Layers", "Matching Engine", "Activity", "MCQ Consensus", "HelpCircle", "Java 21", "FileCode", "Trash2", "BUY", "SELL", "seed-node-1", "#38BDF8", "rgba(56, 189, 248, 0.12)",
"Netty TCP Gateway\n(10k Clients)", "system", "Architect", "seed-arrow-1", "#94A3B8", "seed-node-2", "#818CF8", "rgba(129, 140, 248, 0.12)", "LMAX RingBuffer\n(Power-of-2 LockFree)", "seed-arrow-2", "seed-node-3", "#34D399", "rgba(52, 211, 153, 0.12)", "Single-Thread Core\nFIFO Price-Time Matcher", "seed-sticky-1", "#FEF08A", "Rule #1:\nZero memory allocation on matching fast-path! Pre-allocate orders.", "bot-1", "Martin Fowler", "#F59E0B", "w-full h-full bg-[#008080] text-black p-6 flex flex-col gap-5 select-none overflow-y-auto",
"grid grid-cols-2 md:grid-cols-5 gap-3.5", "Throughput", "Flame", "w-3.5 h-3.5 text-[#92400E]", "text-xl font-bold font-mono tabular-nums text-black flex items-baseline gap-1.5", "0", "text-xs font-normal text-[#404040]", "ops/sec", "p99 Latency", "Zap", "w-3.5 h-3.5 text-[#0000CD]", "text-xl font-bold font-mono tabular-nums text-[#0000CD] flex items-baseline gap-1.5", "3.4", "μs", "Simulated Traders", "w-3.5 h-3.5 text-[#047857]", "text-xl font-bold font-mono tabular-nums text-emerald-300 flex items-baseline gap-1.5",
"1,000", "agents", "Mid Price &amp; Spread", "TrendingUp", "w-3.5 h-3.5 text-[#0369A1]", "text-xl font-bold font-mono tabular-nums text-black flex items-baseline gap-2", "$100.00", "text-xs font-medium text-[#404040]", "Total Matched", "Cpu", "w-3.5 h-3.5 text-purple-400", "text-xl font-bold font-mono tabular-nums text-purple-300 flex items-baseline gap-1.5", "events", "grid grid-cols-1 lg:grid-cols-12 gap-5", "lg:col-span-5 bg-white border border-black rounded-none p-4 flex flex-col gap-3 shadow-[4px_4px_0_rgba(0,0,0,0.45)]",
"flex items-center justify-between border-b border-black pb-2.5", "BarChart3", "w-4 h-4 text-[#0000CD]", "<h2 class=\"text-sm font-semibold text-black\">L2 Depth Order Book (FIFO Priority)</h2>", "flex items-center gap-2", "text-xs font-mono text-[#404040]", "BTC/USD", "grid grid-cols-3 text-xs font-medium text-black px-2 py-1 bg-[#C0C0C0] rounded-none border border-black", "Price (USD)", "text-right", "Size", "Depth", "flex flex-col-reverse gap-0.5", "flex items-center justify-between px-3 py-2 bg-slate-950/70 border-y border-black rounded-none text-xs font-mono",
"text-[#D4D4D4]", "strong", "text-white", "text-[#047857]", "flex flex-col gap-0.5", "lg:col-span-4 bg-white border border-black rounded-none p-4 flex flex-col gap-3.5 shadow-[4px_4px_0_rgba(0,0,0,0.45)]", "<h2 class=\"text-sm font-semibold text-black\">LMAX Disruptor RingBuffer (64 Slots)</h2>", "text-xs font-mono text-[#0000CD]", "grid grid-cols-2 gap-2 text-[11px] font-medium text-black bg-[#E8E8E8] p-2.5 rounded-none border border-black", "flex items-center gap-1.5", "w-2.5 h-2.5 rounded-full bg-[#0000CD]",
"bg-pink-500", "2. WAL Journaler", "bg-emerald-500", "3. Single-Thread Match Core", "bg-sky-400", "4. Gateway Publisher", "grid grid-cols-8 gap-1.5 p-2 bg-slate-950/80 rounded-none border border-black/80", "flex flex-col gap-2 mt-auto", "flex items-center justify-between text-xs text-[#404040] border-b border-black pb-1", "font-mono", "font-semibold text-[#1F1F1F]", "Live Trade Tape", "flex flex-col gap-1 max-h-36 overflow-y-auto font-mono text-xs", "lg:col-span-3 flex flex-col gap-4", "bg-white border border-black rounded-none p-4 flex flex-col gap-3 shadow-[4px_4px_0_rgba(0,0,0,0.45)]",
"flex items-center justify-between", "w-4 h-4 text-[#047857]", "Concurrent Multi-User Bot Swarm", "h3", "text-sm font-semibold text-black flex items-center gap-2", "flex flex-col gap-1.5", "flex justify-between text-xs text-[#404040]", "font-mono text-[#047857]", "Active Virtual Traders", "w-full accent-emerald-500 cursor-pointer", "range", "1000", "font-mono text-[#92400E]", "Load Target (Ops/sec)", "w-full accent-amber-500 cursor-pointer", "2500", "grid grid-cols-2 gap-2 mt-1", "w-3.5 h-3.5 text-amber-300",
"+500 Burst", "py-2 px-3 bg-[#0000CD] hover:bg-[#0000CD] text-white rounded-none text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer", "form", "text-sm font-semibold text-black", "Submit Manual Order", "grid grid-cols-2 gap-1.5 p-1 bg-slate-950 rounded-none", "Buy (Bid)", "Sell (Ask)", "Limit", "Market", "flex flex-col gap-1", "bg-slate-950 border border-black rounded-none px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-[#0000CD]",
"number", "100", "label", "text-[11px] text-[#404040]", "5", "Quantity (Units)", "seed-bid-", "mm-bid-", "MarketMaker_B", "seed-ask-", "mm-ask-", "MarketMaker_A", "sim-", "agent-", "Trader_", "manual-", "user-trader", "You (Host)", "burst-", "burst-agent-", "BurstBot_", "spread $", "Usage: ", "1. Producer Seq: ", "h-7 rounded flex items-center justify-center text-[10px] font-mono border transition-all ", "Slot #", " | Seq: ", " | State: ", " printed", " bots", " ops/s", "bg-emerald-600 text-white hover:bg-emerald-500",
"bg-rose-950/60 text-rose-300 border border-rose-800/60 hover:bg-rose-900/60", "py-2 px-3 rounded-none text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ", "Play", "Pause", "w-3.5 h-3.5", "Start Swarm", "Pause Load", "text-[#404040] hover:text-black", "bg-emerald-600 text-white", "py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ", "bg-rose-600 text-white", "bg-[#0000CD] text-white", "py-1 text-xs font-medium rounded-md transition-all cursor-pointer ",
"bg-rose-600 hover:bg-rose-500 text-white", "bg-emerald-600 hover:bg-emerald-500 text-white", "w-full py-2 rounded-none text-xs font-semibold shadow-md transition-all cursor-pointer ", "Execute ", "bg-white border border-black rounded-none p-3.5 flex flex-col", "<span>", "</span>", "flex items-center justify-between text-xs text-[#404040] mb-1", "w-2.5 h-2.5 rounded-full ", "relative grid grid-cols-3 text-xs font-mono tabular-nums px-2 py-1.5 rounded hover:bg-[#D4D4D4]/50 transition-colors", "bg-emerald-500/15",
"bg-rose-500/15", "absolute inset-y-0 right-0 ", " rounded pointer-events-none", "text-[#DC2626]", " font-semibold relative z-10", "text-right text-[#1F1F1F] relative z-10", "text-right text-[#404040] relative z-10", "flex items-center justify-between px-2 py-1 bg-slate-950/40 rounded", "ArrowDownRight", "ArrowUpRight", "w-3.5 h-3.5 ", "<span class=\"", "\">$", " units", "text-[#1F1F1F]", "text-[#404040] text-[10px]", "bg-pink-500/80 border-pink-400 text-white", "bg-emerald-500/80 border-emerald-400 text-white",
"bg-sky-500/50 border-sky-400 text-sky-100", "bg-[#D4D4D4] border-black text-slate-600", "bg-[#0000CD]/80 border-indigo-400 text-white", " (Bot ", "bot-", "Joined whiteboard", "Ada Lovelace", "Leslie Lamport", "Barbara Liskov", "Donald Knuth", "Grace Hopper", "Ken Thompson", "Linus Torvalds", "Margaret Hamilton", "Edsger Dijkstra", "James Gosling", "Alan Kay", "#3B82F6", "#10B981", "#8B5CF6", "#EC4899", "#06B6D4", "#F97316", "#14B8A6", "Zero-GC RingBuffer: pre-allocated event objects prevent JVM stop-the-world pauses",
"Cache line padding: 128 bytes around Sequencer head/tail stops false sharing", "Mechanical Sympathy: align data access with L1/L2 hardware prefetchers", "Single-writer principle: 1 thread per OrderBook removes all lock contention", "Disruptor DSL: Journaler & Replicator run in parallel before Matching logic", "Project Loom virtual threads handle thousands of concurrent client TCP sockets", "Price-Time Priority: O(1) level lookup + FIFO queue for fair executions", "Aeron IPC transport: zero-copy shared memory queues for < 100ns latency",
"Multiple-Choice auction: dynamic token pricing reaches Nash consensus", "JMH Benchmark: measuring p99.9 latency under 50,000 orders/sec load", "Client Gateway (Netty)", "LMAX RingBuffer (1M Slots)", "WAL Journaler (RAID 10)", "#F472B6", "Matching Engine (Core 0)", "Market Data Feed (UDP)", "#FBBF24", "LIMIT", "MARKET", "relative w-full h-full bg-[#008080] overflow-hidden flex flex-col select-none", "absolute top-3 left-2 right-2 md:right-auto md:left-6 z-20 flex items-center gap-2 bg-[#C0C0C0] border-2 border-black rounded-none px-2.5 py-1.5 md:px-3 md:py-2 shadow-[4px_4px_0_rgba(0,0,0,0.45)] overflow-x-auto max-w-[calc(100vw-16px)]",
"absolute top-16 left-2 md:top-[76px] md:left-auto md:right-6 z-20 flex items-center gap-2.5 md:gap-3 bg-[#C0C0C0] border-2 border-black rounded-none px-3 py-1.5 md:px-4 md:py-2 shadow-[4px_4px_0_rgba(0,0,0,0.45)] max-w-[calc(100vw-16px)] overflow-x-auto", "Users", "text-xs font-semibold text-black", "flex items-center -space-x-1.5 overflow-hidden", "flex items-center gap-1.5 pl-2 border-l border-black", "flex items-center gap-0.5 bg-white rounded-none p-0.5", "Plus", "w-3 h-3 text-[#0000CD]", "+5 Bots", "px-2 py-1 bg-[#C0C0C0] hover:bg-slate-700 text-black text-xs rounded-none flex items-center gap-1 font-medium transition-colors",
"RadioTower", "w-4 h-4 text-[#404040]", "bg-white text-xs text-black px-2 py-1 rounded-none border border-black focus:outline-none focus:border-[#0000CD] w-20", "text", "Name", "Room", "text-[10px] text-[#DC2626]", "server unreachable", "flex-1 w-full h-full relative cursor-crosshair", "pointerdown", "pointermove", "pointerup", "absolute bottom-4 left-6 z-20 flex items-center gap-2 bg-[#C0C0C0] border-2 border-black rounded-none px-3 py-1.5 text-xs text-[#1F1F1F] shadow-[4px_4px_0_rgba(0,0,0,0.45)]", "p-1 hover:text-black",
"ZoomOut", "font-mono tabular-nums px-1", "ZoomIn", "ml-1 p-1 hover:text-black text-[#404040]", "Maximize2", "absolute bottom-4 right-6 z-20 bg-white  border border-[#0000CD] rounded-none p-3 shadow-[4px_4px_0_rgba(0,0,0,0.45)] flex items-center gap-3", "text-xs font-medium text-[#0000CD]", "Selected Node", "bg-[#C0C0C0] text-xs text-black px-3 py-1.5 rounded-none border border-black focus:outline-none focus:border-[#0000CD] w-48", "Edit text...", "blur", "px-2.5 py-1.5 text-xs text-[#DC2626] hover:bg-rose-950/40 rounded-none transition-colors",
"Delete", " Collaborators", "p-1.5 rounded-md transition-colors cursor-pointer ", "1", "bg-[#C0C0C0] text-[#404040]", "bg-emerald-950/60 text-[#047857] border border-emerald-800/60", "p-1.5 rounded-none text-xs font-medium flex items-center gap-1 transition-colors ", "Resume Bot Swarm", "Pause Bot Swarm", "Paused", "Active", "text-[#404040]", "w-4 h-4 ", "connecting", "bg-emerald-950/60 text-emerald-300 border border-emerald-800/60 hover:bg-emerald-900/60", "px-2.5 py-1 text-xs font-semibold rounded-none flex items-center gap-1.5 transition-colors disabled:opacity-50 ",
"Connect to the live whiteboard server on this machine (port 8090)", "Leave live room \"", "Connecting…", "Go Live", "Live: ", "Wifi", "WifiOff", "error", "flex items-center gap-1 border-r border-black pr-2", "MousePointer", "Select & Move", "win-btn-selected", "Pencil", "Freehand Vector Pen", "Square", "Architecture Box", "Circle", "RingBuffer Ellipse", "ArrowRight", "Connector Arrow", "StickyNote", "Architecture Sticky Note", "win-btn-sticky", "Type", "Text Component", "Eraser", "win-btn-danger", "flex items-center gap-1.5 border-r border-black pr-2",
"hover:scale-110", "scale-125 ring-2 ring-white", "w-5 h-5 rounded-sm transition-transform ", "scale-125 ring-2 ring-indigo-400", "w-5 h-5 rounded-full transition-transform ", "flex items-center gap-1", "RotateCcw", "w-4 h-4", "p-2 win-btn disabled:opacity-30 disabled:cursor-not-allowed", "RotateCw", "p-2 win-btn", "Download", "FileJson", "win-btn", "p-2 ", "w-7 h-7 rounded-full bg-[#0000CD] border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white shadow", "You", "border-slate-900",
"border-indigo-400 scale-110", "w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white shadow transition-transform hover:scale-110 cursor-pointer ", "Crosshair", "w-7 h-7 rounded-full bg-[#C0C0C0] border-2 border-slate-900 flex items-center justify-center text-[10px] font-medium text-[#1F1F1F]", "follow", "stop following", " — ", " (click to ", "w-7 h-7 rounded-full border-2 border-[#047857] flex items-center justify-center text-[10px] font-bold text-white shadow", " (live)",
"el-", "user", "New architecture note...", "System Component", "18", "whiteboard-architecture-", ".png", "whiteboard-elements-", ".json", "#FFFFFF", "#A78BFA", "#BFDBFE", "#BBF7D0", "#FBCFE8", "#FED7AA", "architect", "ideator", "explorer", "DraftingCompass", "Brain", "Footprints", "Architects draw nodes", "Ideators drop stickies", "Explorers roam only", "root", "canvas-model", "bg-white border border-black rounded-none p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-[4px_4px_0_rgba(0,0,0,0.45)]",
"flex items-center gap-3.5", "w-10 h-10 rounded-none bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-[#0369A1]", "w-5 h-5", "h1", "text-base font-bold text-[#1F1F1F] tracking-tight", "Production Java 21+ Architecture & Engineering Blueprint", "Java 21 Records · TeaVM 0.12.0 · Project Loom Virtual Threads · Netty WebSocket", "flex items-center gap-2 px-4 py-2 bg-[#0000CD] hover:bg-[#0000CD] text-white rounded-none text-xs font-semibold shadow-sm transition-colors cursor-pointer self-start md:self-auto",
"lg:col-span-4 flex flex-col gap-2", "font-pixel text-2xl text-white uppercase tracking-wider px-1", "Java 21 Source Blueprint", "text-xs font-bold text-white font-mono", "text-[10px] text-[#0000CD] font-semibold", "text-[11px] text-[#404040] line-clamp-2 leading-relaxed", "lg:col-span-8 bg-slate-950 border border-black rounded-none overflow-hidden flex flex-col shadow-[4px_4px_0_rgba(0,0,0,0.45)]", "flex items-center justify-between px-4 py-3 bg-[#C0C0C0] border-b border-black", "flex items-center gap-2 font-mono text-xs text-[#1F1F1F]",
"w-4 h-4 text-[#0369A1]", "text-xs text-[#404040] font-mono", "Java 21 LTS", "px-4 py-2.5 bg-indigo-950/20 border-b border-black/80 text-xs text-indigo-200", "p-4 overflow-x-auto font-mono text-xs text-[#E5E5E5] leading-relaxed max-h-[540px]", "pre", "code", "Copy", "Check", "w-4 h-4 text-emerald-300", "Copied to Clipboard", "Copy ", "bg-white border-black hover:bg-[#D4D4D4]/40", "bg-[#C0C0C0]/90 border-[#0000CD]/60 shadow-lg", "text-left p-3.5 rounded-none border transition-all cursor-pointer flex flex-col gap-1 ",
"Canvas Model & Hit Testing", "CanvasModel.java", "Enum-driven canvas geometry: point-in-shape hit testing for rectangles, stickies, ellipses, strokes and arrows with a shared hit tolerance. (Mirrors client/src/main/java/com/parallely/client/whiteboard/CanvasModel.java)", "package com.parallely.client.whiteboard;\n\n// Canvas hit-testing: decide which element (if any) sits under the pointer.\n// Rectangle, Sticky and Text use a box test with a shared hit tolerance;\n// Ellipse uses the normalised circle equation; Stroke and Arrow walk points.\n// (TEXT uses the same box test as RECTANGLE - omitted here for brevity.)\n\npublic final class CanvasModel {\n\n    private static final double DEFAULT_HIT_TOLERANCE = 10;\n    private static final double DEFAULT_SHAPE_WIDTH = 160;\n    private s"
+ "tatic final double DEFAULT_RECT_HEIGHT = 100;\n\n    public static boolean isPointInElement(Point point, CanvasElement elem, double hitTolerance) {\n        ElementType type = elem.type();\n\n        if (type == ElementType.RECTANGLE || type == ElementType.STICKY) {\n            double w = elem.width() != null ? elem.width() : DEFAULT_SHAPE_WIDTH;\n            double h = elem.height() != null ? elem.height() : DEFAULT_RECT_HEIGHT;\n            return point.x() >= elem.x() - hitTolerance\n                    && point"
+ ".x() <= elem.x() + w + hitTolerance\n                    && point.y() >= elem.y() - hitTolerance\n                    && point.y() <= elem.y() + h + hitTolerance;\n        }\n\n        if (type == ElementType.ELLIPSE) {\n            double rx = (elem.width() != null ? elem.width() : DEFAULT_SHAPE_WIDTH) / 2;\n            double ry = (elem.height() != null ? elem.height() : DEFAULT_RECT_HEIGHT) / 2;\n            double cx = elem.x() + rx;\n            double cy = elem.y() + ry;\n            double normalized = Math.po"
+ "w((point.x() - cx) / (rx + hitTolerance), 2)\n                    + Math.pow((point.y() - cy) / (ry + hitTolerance), 2);\n            return normalized <= 1;\n        }\n\n        if (type == ElementType.STROKE && elem.points() != null && !elem.points().isEmpty()) {\n            for (Point p : elem.points()) {\n                double dist = Math.hypot(p.x() - point.x(), p.y() - point.y());\n                if (dist <= elem.strokeWidth() + hitTolerance) {\n                    return true;\n                }\n          "
+ "  }\n        }\n\n        if (type == ElementType.ARROW && elem.points() != null && elem.points().size() >= 2) {\n            return distanceToLineSegment(point, elem.points().get(0), elem.points().get(1))\n                    <= elem.strokeWidth() + hitTolerance;\n        }\n\n        return false;\n    }\n\n    /** Shortest distance from the pointer to the arrow\'s line segment. */\n    private static double distanceToLineSegment(Point p, Point a, Point b) {\n        double l2 = Math.pow(b.x() - a.x(), 2) + Math.pow(b."
+ "y() - a.y(), 2);\n        if (l2 == 0) {\n            return Math.hypot(p.x() - a.x(), p.y() - a.y());\n        }\n        double t = ((p.x() - a.x()) * (b.x() - a.x()) + (p.y() - a.y()) * (b.y() - a.y())) / l2;\n        t = Math.max(0, Math.min(1, t));\n        return Math.hypot(p.x() - (a.x() + t * (b.x() - a.x())),\n                p.y() - (a.y() + t * (b.y() - a.y())));\n    }\n}", "live-session", "Live Canvas Session", "LiveSession.java", "WebSocket client that keeps the canvas in sync: element upsert/delete frames, snapshot-on-join for late joiners, and peer cursor relay throttled to ~8 fps. (Mirrors client/src/main/java/com/parallely/client/whiteboard/LiveSession.java)",
"package com.parallely.client.whiteboard;\n\n// One WebSocket session per studio. Every canvas mutation becomes a JSON\n// text frame; the server stores it, then relays it to the other peers.\n\npublic final class LiveSession {\n\n    private static final int CURSOR_THROTTLE_MS = 120;\n\n    private final WhiteboardStudio studio;\n    private Ws ws = null;\n    private boolean on = false;\n    private String room = \"main\";\n    private String name = \"Guest-\" + randomToken();\n    private long lastCursorSent = 0;\n\n    /** "
+ "Canvas element upsert: the server stores it, then relays it to peers. */\n    void upsert(CanvasElement el) {\n        Json.Obj m = Json.obj();\n        m.setStr(\"type\", \"element\");\n        m.setStr(\"action\", \"upsert\");\n        m.set(\"element\", WhiteboardJson.toJson(el));\n        send(m);\n    }\n\n    void delete(String id) {\n        Json.Obj el = Json.obj();\n        el.setStr(\"id\", id);\n        Json.Obj m = Json.obj();\n        m.setStr(\"type\", \"element\");\n        m.setStr(\"action\", \"delete\");\n        m.set(\"ele"
+ "ment\", el);\n        send(m);\n    }\n\n    /** Peer cursors are throttled to ~8 frames/sec to keep the socket quiet. */\n    void sendCursor(double x, double y) {\n        if (!on) {\n            return;\n        }\n        long now = System.currentTimeMillis();\n        if (now - lastCursorSent > CURSOR_THROTTLE_MS) {\n            lastCursorSent = now;\n            Json.Obj m = Json.obj();\n            m.setStr(\"type\", \"cursor\");\n            m.setStr(\"user\", name);\n            m.setNum(\"x\", Math.round(x));\n           "
+ " m.setNum(\"y\", Math.round(y));\n            send(m);\n        }\n    }\n\n    /** Late joiners ask for nothing: the server\'s snapshot reply fills the canvas. */\n    private void handleSnapshot(Json.Obj msg) {\n        Json.Arr arr = Json.getArr(msg, \"elements\");\n        int n = arr != null ? Json.len(arr) : 0;\n        if (n == 0) {\n            for (CanvasElement el : studio.elements) {\n                upsert(el);          // empty room: seed it with our board\n            }\n        } else {\n            List<Canvas"
+ "Element> next = new ArrayList<>();\n            for (int i = 0; i < n; i++) {\n                next.add(WhiteboardJson.fromJson(Json.arrObj(arr, i)));\n            }\n            studio.undoStack.add(studio.elements);\n            studio.elements = next;\n        }\n        status = \"live\";\n        on = true;\n    }\n\n    private void send(Json.Obj m) {\n        if (ws != null && ws.isOpen()) {\n            m.setStr(\"room\", room);\n            ws.send(Json.stringify(m));\n        }\n    }\n}", "whiteboard-server",
"Whiteboard WebSocket Server", "WhiteboardServer.java", "Netty WebSocket server with Project Loom virtual-thread workers: room-based channels, last-write-wins element state, snapshot-on-join, cursor relay. (Mirrors server/src/main/java/com/apex/whiteboard/WhiteboardServer.java)", "package com.apex.whiteboard;\n\n// Protocol (JSON text frames over ws://host:port/ws/whiteboard):\n//   {\"type\":\"join\",   \"room\":\"main\",\"user\":\"Asha\",\"color\":\"#38BDF8\"}\n//   {\"type\":\"element\",\"room\":\"main\",\"action\":\"upsert\",\"element\":{...}}\n//   {\"type\":\"delete\", \"room\":\"main\",\"id\":\"el-123\"}\n//   {\"type\":\"clear\",  \"room\":\"main\"}\n//   {\"type\":\"cursor\", \"room\":\"main\",\"user\":\"Asha\",\"x\":120.5,\"y\":300.0}\n//   {\"type\":\"leave\",  \"room\":\"main\"}\n// Server replies to join with {\"type\":\"snapshot\",\"room\":\"main\",\"elements\""
+ ":[...]}\n// and broadcasts {\"type\":\"presence\",\"room\":\"main\",\"event\":\"join|leave\",\"user\":\"...\"}.\n\npublic final class WhiteboardServer {\n\n    private final ConcurrentHashMap<String, Room> rooms = new ConcurrentHashMap<>();\n\n    /** Per-room state: member channels + last-write-wins element store. */\n    private static final class Room {\n        final ChannelGroup members = new DefaultChannelGroup(GlobalEventExecutor.INSTANCE);\n        final ConcurrentHashMap<String, JsonNode> elements = new ConcurrentHashMap<>("
+ ");\n    }\n\n    public void start() throws Exception {\n        EventLoopGroup bossGroup = new NioEventLoopGroup(1);\n        // Project Loom virtual threads handle messages\n        EventLoopGroup workerGroup = new NioEventLoopGroup(\n                Runtime.getRuntime().availableProcessors(),\n                Thread.ofVirtual().name(\"whiteboard-worker-\", 0).factory());\n        try {\n            new ServerBootstrap()\n                .group(bossGroup, workerGroup)\n                .channel(NioServerSocketChannel.cl"
+ "ass)\n                .childHandler(new ChannelInitializer<SocketChannel>() {\n                    @Override\n                    protected void initChannel(SocketChannel ch) {\n                        ch.pipeline().addLast(new HttpServerCodec());\n                        ch.pipeline().addLast(new HttpObjectAggregator(65536));\n                        ch.pipeline().addLast(new WebSocketServerProtocolHandler(\"/ws/whiteboard\"));\n                        ch.pipeline().addLast(new WhiteboardFrameHandler(rooms));\n     "
+ "               }\n                })\n                .bind(port).sync().channel().closeFuture().sync();\n        } finally {\n            bossGroup.shutdownGracefully();\n            workerGroup.shutdownGracefully();\n        }\n    }\n\n    public static void main(String[] args) throws Exception {\n        int port = args.length > 0 ? Integer.parseInt(args[0]) : 8090;\n        new WhiteboardServer(port).start();\n    }\n}", "mcq-client", "Live MCQ Poll Client", "McqConsensusView.java", "Java records for questions and options, a 30-second poll phase machine, one vote per student, and live tally updates over the same WebSocket. (Mirrors client/src/main/java/com/parallely/client/mcq/McqConsensusView.java)",
"package com.parallely.client.mcq;\n\n// Live classroom poll: the teacher opens a 30-second poll, every student\'s\n// pick is one WebSocket frame, and tallies stream back to everyone live.\n\npublic final class McqConsensusView implements View {\n\n    private record QuizOption(String key, String label, boolean isCorrect) {\n    }\n\n    private record QuizQuestion(String id, String title, String context, List<QuizOption> options,\n                                String explanation, String trap) {\n    }\n\n    private st"
+ "atic final int POLL_SECONDS = 30;\n    private static final String ROOM = \"main\";\n\n    private int qIndex = 0;\n    private String phase = \"idle\";            // idle -> open -> revealed\n    private final Map<String, String> voters = new LinkedHashMap<>(); // voter -> A/B/C/D\n\n    /** One vote per student: changeable until the reveal, stored server-side. */\n    private void castVote(String key) {\n        if (!phase.equals(\"open\")) {\n            notice = phase.equals(\"idle\")\n                    ? \"The teacher h"
+ "as not started the poll yet. Wait for the poll to open.\"\n                    : \"Poll closed. Votes are locked in, the AI Teacher is explaining the answer.\";\n            update();\n            return;\n        }\n        voters.put(myName, key);\n        Json.Obj msg = Json.obj();\n        msg.setStr(\"type\", \"vote\");\n        msg.setStr(\"room\", ROOM);\n        msg.setStr(\"question\", currentQuestionId());\n        msg.setStr(\"option\", key);\n        msg.setStr(\"user\", myName);\n        send(msg);\n        update();\n    "
+ "}\n\n    /** Teacher control: open a 30-second poll for the current question. */\n    private void startPoll() {\n        phase = \"open\";\n        timeLeft = POLL_SECONDS;\n        Json.Obj msg = Json.obj();\n        msg.setStr(\"type\", \"poll\");\n        msg.setStr(\"room\", ROOM);\n        msg.setStr(\"question\", currentQuestionId());\n        msg.setStr(\"action\", \"open\");\n        send(msg);\n        update();\n    }\n\n    private void handleMessage(String data) {\n        Json.Obj msg = parseSafe(data);\n        if (msg == "
+ "null) {\n            return;\n        }\n        String type = Json.str(msg, \"type\");\n        String qid = currentQuestionId();\n        switch (type) {\n            case \"vote\" -> {\n                String user = Json.str(msg, \"user\");\n                String option = Json.str(msg, \"option\");\n                if (Json.str(msg, \"question\").equals(qid) && !user.isEmpty() && !option.isEmpty()) {\n                    voters.put(user, option);\n                    update();\n                }\n            }\n            cas"
+ "e \"tally\" -> {\n                Json.Obj tallyVoters = Json.getObj(msg, \"voters\");\n                if (Json.str(msg, \"question\").equals(qid) && tallyVoters != null) {\n                    replaceVoters(tallyVoters);\n                    update();\n                }\n            }\n            case \"poll\" -> {\n                if (Json.str(msg, \"question\").equals(qid)\n                        && Json.str(msg, \"action\").equals(\"open\")) {\n                    phase = \"open\";\n                    timeLeft = POLL_SECONDS;"
+ "\n                    update();\n                }\n            }\n            default -> {\n            }\n        }\n    }\n}", "vote-tally", "Vote & Tally Relay (Server)", "ConcurrentHashMap of votes per question, one vote per voter, and a running per-option tally broadcast on every vote. (Mirrors server/src/main/java/com/apex/whiteboard/WhiteboardServer.java)", "package com.apex.whiteboard;\n\n// Live-quiz protocol (JSON text frames over the same whiteboard socket):\n//   {\"type\":\"vote\",\"room\":\"main\",\"question\":\"q1\",\"option\":\"B\",\"user\":\"Asha\"}\n//   {\"type\":\"tally\",\"room\":\"main\",\"question\":\"q1\"}\n// Votes are stored per question; every vote re-broadcasts the running tally.\n\npublic final class WhiteboardServer {\n\n    private final ConcurrentHashMap<String, Room> rooms = new ConcurrentHashMap<>();\n\n    /** Mutable per-room state: members plus last-write-wins element store"
+ ". */\n    private static final class Room {\n        final ChannelGroup members = new DefaultChannelGroup(GlobalEventExecutor.INSTANCE);\n        final ConcurrentHashMap<String, JsonNode> elements = new ConcurrentHashMap<>();\n        /** Live-quiz votes: question id -> (voter name -> option A/B/C/D). One vote per voter. */\n        final ConcurrentHashMap<String, ConcurrentHashMap<String, String>> votes = new ConcurrentHashMap<>();\n    }\n\n    /** Live-quiz vote: one vote per voter per question, changeable until"
+ " the reveal. */\n    private void handleVote(ChannelHandlerContext ctx, String roomName, JsonNode msg) {\n        Room room = rooms.get(roomName);\n        if (room == null) {\n            sendError(ctx, \"not in room \" + roomName);\n            return;\n        }\n        String question = msg.path(\"question\").asText(\"\");\n        String option = msg.path(\"option\").asText(\"\");\n        if (question.isEmpty() || !(option.equals(\"A\") || option.equals(\"B\")\n                || option.equals(\"C\") || option.equals(\"D\"))) {"
+ "\n            sendError(ctx, \"vote message needs a question and an option A/B/C/D\");\n            return;\n        }\n        String user = msg.path(\"user\").asText(\"\");\n        if (user.isEmpty()) {\n            String known = ctx.channel().attr(USER).get();\n            user = known == null ? \"anonymous\" : known;\n        }\n        room.votes.computeIfAbsent(question, k -> new ConcurrentHashMap<>()).put(user, option);\n\n        ObjectNode tallyMsg = JSON.createObjectNode();\n        tallyMsg.put(\"type\", \"vote\");\n  "
+ "      tallyMsg.put(\"room\", roomName);\n        tallyMsg.put(\"question\", question);\n        tallyMsg.put(\"user\", user);\n        tallyMsg.put(\"option\", option);\n        tallyMsg.set(\"tally\", tallyNode(room, question));\n        broadcastExcept(room, ctx.channel(), tallyMsg.toString());\n    }\n\n    /** A client asks for the stored votes of one question; reply to the requester only. */\n    private void handleTally(ChannelHandlerContext ctx, String roomName, JsonNode msg) {\n        String question = msg.path(\"quest"
+ "ion\").asText(\"\");\n        Room room = rooms.get(roomName);\n        ObjectNode reply = JSON.createObjectNode();\n        reply.put(\"type\", \"tally\");\n        reply.put(\"room\", roomName);\n        reply.put(\"question\", question);\n        ObjectNode votersNode = reply.putObject(\"voters\");\n        if (room != null && !question.isEmpty()) {\n            for (var voter : room.votes.getOrDefault(question, new ConcurrentHashMap<>()).entrySet()) {\n                votersNode.put(voter.getKey(), voter.getValue());\n       "
+ "     }\n            reply.set(\"tally\", tallyNode(room, question));\n        } else {\n            reply.set(\"tally\", tallyNode(null, question));\n        }\n        ctx.writeAndFlush(new TextWebSocketFrame(reply.toString()));\n    }\n\n    /** Per-option counts for one question. */\n    private ObjectNode tallyNode(Room room, String question) {\n        ObjectNode tally = JSON.createObjectNode();\n        int a = 0, b = 0, c = 0, d = 0;\n        if (room != null) {\n            for (String option : room.votes.getOrDefau"
+ "lt(question, new ConcurrentHashMap<>()).values()) {\n                switch (option) {\n                    case \"A\" -> a++;\n                    case \"B\" -> b++;\n                    case \"C\" -> c++;\n                    case \"D\" -> d++;\n                    default -> {\n                    }\n                }\n            }\n        }\n        tally.put(\"A\", a);\n        tally.put(\"B\", b);\n        tally.put(\"C\", c);\n        tally.put(\"D\", d);\n        return tally;\n    }\n}", "Reviewing architecture",
"Exploring canvas", "bot-sticky-", "Added sticky note", "bot-node-", "15", "Created ", "0123456789abcdefghijklmnopqrstuvwxyz", "object", "function", "string", "undefined", "transparent", "Text", "Insight", "— ", "Guest-", "off", "localhost", "ws://", ":8090/ws/whiteboard", "snapshot", "element", "presence", "clear", "delete", "cursor", "live", "anon", "leave", "peer-", "joined", "drawing", "#2DD4B6", "interface ", "class ", "Either src or dest is null", "Infinite or NaN", "Rounding necessary", "power of ten too big",
"SELECT", "select", "PEN", "pen", "RECTANGLE", "rectangle", "ELLIPSE", "ellipse", "ARROW", "arrow", "STICKY", "sticky", "TEXT", "ERASER", "eraser", "T-", "idle", "grid grid-cols-2 md:grid-cols-4 gap-3.5", "Students answered", "votes", "Leading option", "Trophy", "w-3.5 h-3.5 text-yellow-400", "—", "Correct picks", "CheckCircle2", "Time left", "Timer", "Not started", "lg:col-span-8 bg-white border border-black rounded-none p-6 flex flex-col gap-5 shadow-[4px_4px_0_rgba(0,0,0,0.45)]", "flex items-center justify-between border-b border-black pb-3 gap-3 flex-wrap",
"flex items-center gap-1.5 text-xs text-[#404040]", "win-sunken px-2 py-1 text-xs font-bold text-black w-28 outline-none", "flex flex-col gap-2", "h2", "text-lg font-bold text-black tracking-tight", "text-xs text-[#404040] leading-relaxed", "flex flex-col gap-3", "font-pixel text-2xl leading-none tabular-nums shrink-0", "text-xs text-[#92400E] font-semibold", "lg:col-span-4 flex flex-col gap-4", "bg-white border border-black rounded-none p-5 flex flex-col gap-4 shadow-[4px_4px_0_rgba(0,0,0,0.45)]", "Teacher Controls",
"px-3 py-1 text-xs font-semibold cursor-pointer win-btn", "grid grid-cols-1 gap-2", "Start Poll (30s)", "win-btn-selected py-2 px-3 text-xs font-bold flex items-center justify-center gap-1.5 disabled:opacity-40", "Reveal Answer", "win-btn py-2 px-3 text-xs font-bold flex items-center justify-center gap-1.5 disabled:opacity-40", "Next Question", "flex items-center gap-2 text-xs text-[#404040] border-t border-black/20 pt-3", "border-2 border-black rounded-none p-5 flex flex-col gap-2.5 shadow-[4px_4px_0_rgba(0,0,0,0.45)] text-xs text-black bg-[#FFFF99]",
"GraduationCap", "AI Teacher", "font-semibold flex items-center gap-1.5", "open", "revealed", "relative z-10 flex items-center justify-between gap-4", "flex flex-col", "flex items-center gap-2 text-xs text-[#404040] mt-0.5 font-mono", "font-bold text-[#0000CD]", "· Your pick", "flex items-center gap-4 shrink-0 text-right font-mono", "text-lg font-bold text-black tabular-nums", "text-[10px] text-[#404040] uppercase tracking-wider", "of votes", "<span>Correct</span>", "hidden sm:flex items-center gap-1 text-[#047857] text-xs font-semibold",
"Poll closed. Votes are locked in, the AI Teacher is explaining the answer.", "The teacher has not started the poll yet. Wait for the poll to open.", "demo", "question", "poll", "vote", "tally", "reveal", "Option ", "% of votes)", "% got it right)", "Closed", "bg-[#047857] text-white", "bg-[#C0C0C0] text-black", "POLL OPEN", "WAITING", "ANSWER REVEALED", "w-5 h-5 text-[#0000CD]", "<span class=\"text-sm font-semibold text-black\">Question ", " of ", "</span><span class=\"text-xs font-bold px-2 py-0.5 ", "\">",
"border-[#047857] bg-[#FFFF99]", "border-black bg-white hover:border-black", "border-[#0000CD] bg-[#0000CD]/10", "relative overflow-hidden border rounded-none p-4 cursor-pointer transition-all ", "bg-[#0000CD]/10", "bg-[#047857]/20", "absolute inset-y-0 left-0 transition-all duration-300 pointer-events-none ", "bg-[#C0C0C0] text-[#1F1F1F]", "w-8 h-8 rounded-none flex items-center justify-center font-bold text-sm shrink-0 ", "s", " vote", "bg-[#C0C0C0]/40 border-black/30 text-[#404040]", "bg-[#0000CD]/10 border-[#0000CD]/40 text-black",
"p-3 border rounded-none text-xs flex items-center justify-between gap-3 ", "Poll is open. Tap an option to answer.", "Your answer: Option ", ". Tap another option to change it before time runs out.", "The teacher has not started the poll yet.", "Poll closed. You did not answer this one.", ", correct!", ", the answer was Option ", "Poll closed. You picked Option ", "px-3 py-1 text-xs font-semibold cursor-pointer ", "Radio", "<span>Live: votes sync through the Java server.</span>", "<span>Demo mode: no server found, votes stay on this screen.</span>",
"<span>Connecting to the Java server…</span>", "leading-relaxed text-[#404040]", "The AI Teacher explains the answer once the poll closes. No peeking, answer first, then learn why.", "leading-relaxed", "Watch out: ", "Nobody voted on this one.", "The crowd was right this time.", "Most of the class picked Option ", "% of the class got it right. ", "leading-relaxed font-semibold", "Guest", "A", "B", "C", "D", "Single-Thread Core with LMAX Disruptor RingBuffer", "Java synchronized blocks on OrderBook object", "ThreadPool with ConcurrentLinkedQueue",
"Actor model with Akka asynchronous mailboxes", "q1", "Which concurrency pattern guarantees the lowest tail latency for order book processing?", "High-frequency trading exchanges need to avoid lock contention, context switches, and cache invalidation storms.", "One thread owns the whole match path, so there is no lock to contend for, no context switch, and no cache line bouncing between cores. The Disruptor ring buffer is pre-allocated, so the hot path allocates nothing and the GC never pauses a match. That is why tail latency stays in single-digit microseconds instead of spiking under load.",
"Most classes pick B. Synchronized blocks feel safe, but every match then queues on one monitor and every core invalidates the same cache line, which is exactly what inflates p99.", "Cache line padding with @Contended or 128 bytes dummy fields", "Using volatile variables without locks", "Calling Thread.yield() after every write", "Compacting JVM heap with ZGC generational collection", "q2", "How does LMAX Disruptor eliminate false sharing between producer and consumer threads?", "When independent variables reside on the same 64-byte L1/L2 cache line, concurrent writes force cache line invalidations.",
"Two threads writing different variables that share one 64-byte cache line force the line to bounce between cores on every write. Padding puts each hot variable on its own line, so a write invalidates nothing the other thread owns. The Disruptor pads its sequence counters to 128 bytes for the same reason.", "Volatile fixes visibility, not sharing. A volatile write to a shared line still invalidates every other core’s copy, so the bouncing continues.", "Thousands of cheap threads that park without holding an OS thread",
"Faster garbage collection for short-lived objects", "Automatic parallelisation of sequential loops", "A lock-free replacement for synchronized blocks", "q3", "What does a Project Loom virtual thread give you that a platform thread pool does not?", "The matching engine runs 10,000 simulated traders. Each one blocks on I/O while it waits for market data.", "A virtual thread costs a few kilobytes and parks without holding an OS thread, so a million of them can block on I/O at once while a small pool of carrier threads does the real work. A platform thread costs around a megabyte of stack and blocks its OS thread, so a thread pool stalls once every thread is waiting.",
"Loom does not parallelise your code. It only makes blocking cheap. A slow loop is still a slow loop, it just stops wasting a whole OS thread while it waits.", "Contiguous arrays keep the hot data in L1/L2 cache and avoid pointer chasing", "Arrays let the JVM skip garbage collection entirely", "Trees cannot store price-time priority", "Primitive arrays use less heap only for small books", "q4", "Why is the order book kept as flat primitive arrays instead of a tree of Order objects?", "The matching loop walks price levels in order, thousands of times a second, on the hottest path in the engine.",
"The match loop walks price levels in order, so a flat array means sequential access that the CPU prefetcher loves: the next level is already in L1/L2 before you need it. A tree of Order objects means pointer chasing through the heap, a cache miss per level, and an allocation every time an order is created.", "Arrays do not switch the GC off. The win is cache locality and zero allocation on the match path, not escaping the collector.", "UP", "DOWN", "CEILING", "FLOOR", "HALF_UP", "HALF_DOWN", "HALF_EVEN", "UNNECESSARY",
"unknown icon: ", "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"", "</svg>", "<path d=\"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2\"></path>", "<path d=\"m7 7 10 10\"></path><path d=\"M17 7v10H7\"></path>", "<path d=\"M5 12h14\"></path><path d=\"m12 5 7 7-7 7\"></path>",
"<path d=\"M7 7h10v10\"></path><path d=\"M7 17 17 7\"></path>", "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"></path><path d=\"M18 17V9\"></path><path d=\"M13 17V5\"></path><path d=\"M8 17v-3\"></path>", "BookOpen", "<path d=\"M12 7v14\"></path><path d=\"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z\"></path>", "<path d=\"M12 18V5\"></path><path d=\"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4\"></path><path d=\"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5\"></path><path d=\"M17.997 5.125a4 4 0 0 1 2.526 5.77\"></path><path d=\"M18 18a4 4 0 0 0 2-7.464\"></path><path d=\"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517\"></path><path d=\"M6 18a4 4 0 0 1-2-7.464\"></path><path d=\"M6.003 5.125a4 4 0 0 0-2.526 5.77\"></path>",
"<path d=\"M20 6 9 17l-5-5\"></path>", "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"m9 12 2 2 4-4\"></path>", "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle>", "Clock", "<path d=\"M12 6v6l4 2\"></path><circle cx=\"12\" cy=\"12\" r=\"10\"></circle>", "<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"></rect><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"></path>", "<path d=\"M12 20v2\"></path><path d=\"M12 2v2\"></path><path d=\"M17 20v2\"></path><path d=\"M17 2v2\"></path><path d=\"M2 12h2\"></path><path d=\"M2 17h2\"></path><path d=\"M2 7h2\"></path><path d=\"M20 12h2\"></path><path d=\"M20 17h2\"></path><path d=\"M20 7h2\"></path><path d=\"M7 20v2\"></path><path d=\"M7 2v2\"></path><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"></rect><rect x=\"8\" y=\"8\" width=\"8\" height=\"8\" rx=\"1\"></rect>",
"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"22\" x2=\"18\" y1=\"12\" y2=\"12\"></line><line x1=\"6\" x2=\"2\" y1=\"12\" y2=\"12\"></line><line x1=\"12\" x2=\"12\" y1=\"6\" y2=\"2\"></line><line x1=\"12\" x2=\"12\" y1=\"22\" y2=\"18\"></line>", "<path d=\"M12 15V3\"></path><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><path d=\"m7 10 5 5 5-5\"></path>", "<path d=\"m12.99 6.74 1.93 3.44\"></path><path d=\"M19.136 12a10 10 0 0 1-14.271 0\"></path><path d=\"m21 21-2.16-3.84\"></path><path d=\"m3 21 8.02-14.26\"></path><circle cx=\"12\" cy=\"5\" r=\"2\"></circle>",
"<path d=\"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21\"></path><path d=\"m5.082 11.09 8.828 8.828\"></path>", "<path d=\"M10 12.5 8 15l2 2.5\"></path><path d=\"m14 12.5 2 2.5-2 2.5\"></path><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"></path><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z\"></path>", "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"></path><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"></path><path d=\"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1\"></path><path d=\"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1\"></path>",
"<path d=\"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4\"></path>", "<path d=\"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z\"></path><path d=\"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z\"></path><path d=\"M16 17h4\"></path><path d=\"M4 13h4\"></path>", "<path d=\"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z\"></path><path d=\"M22 10v6\"></path><path d=\"M6 12.5V16a6 3 0 0 0 12 0v-3.5\"></path>",
"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"></path><path d=\"M12 17h.01\"></path>", "<path d=\"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z\"></path><path d=\"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12\"></path><path d=\"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17\"></path>", "<path d=\"M15 3h6v6\"></path><path d=\"m21 3-7 7\"></path><path d=\"m3 21 7-7\"></path><path d=\"M9 21H3v-6\"></path>",
"<path d=\"M12.586 12.586 19 19\"></path><path d=\"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z\"></path>", "<rect x=\"14\" y=\"3\" width=\"5\" height=\"18\" rx=\"1\"></rect><rect x=\"5\" y=\"3\" width=\"5\" height=\"18\" rx=\"1\"></rect>", "<path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"></path><path d=\"m15 5 4 4\"></path>",
"<path d=\"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z\"></path>", "<path d=\"M5 12h14\"></path><path d=\"M12 5v14\"></path>", "<path d=\"M16.247 7.761a6 6 0 0 1 0 8.478\"></path><path d=\"M19.075 4.933a10 10 0 0 1 0 14.134\"></path><path d=\"M4.925 19.067a10 10 0 0 1 0-14.134\"></path><path d=\"M7.753 16.239a6 6 0 0 1 0-8.478\"></path><circle cx=\"12\" cy=\"12\" r=\"2\"></circle>", "<path d=\"M4.9 16.1C1 12.2 1 5.8 4.9 1.9\"></path><path d=\"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5\"></path><circle cx=\"12\" cy=\"9\" r=\"2\"></circle><path d=\"M16.2 4.8c2 2 2.26 5.11.8 7.47\"></path><path d=\"M19.1 1.9a9.96 9.96 0 0 1 0 14.1\"></path><path d=\"M9.5 18h5\"></path><path d=\"m8 22 4-11 4 11\"></path>",
"<path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path><path d=\"M3 3v5h5\"></path>", "<path d=\"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8\"></path><path d=\"M21 3v5h-5\"></path>", "ShieldCheck", "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"></path><path d=\"m9 12 2 2 4-4\"></path>", "Sparkles", "<path d=\"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z\"></path><path d=\"M20 2v4\"></path><path d=\"M22 4h-4\"></path><circle cx=\"4\" cy=\"20\" r=\"2\"></circle>",
"<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"></rect>", "<path d=\"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z\"></path><path d=\"M15 3v4a2 2 0 0 0 2 2h4\"></path>", "Terminal", "<path d=\"M12 19h8\"></path><path d=\"m4 17 6-6-6-6\"></path>", "<line x1=\"10\" x2=\"14\" y1=\"2\" y2=\"2\"></line><line x1=\"12\" x2=\"15\" y1=\"14\" y2=\"11\"></line><circle cx=\"12\" cy=\"14\" r=\"8\"></circle>", "<path d=\"M10 11v6\"></path><path d=\"M14 11v6\"></path><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6\"></path><path d=\"M3 6h18\"></path><path d=\"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>",
"<path d=\"M16 7h6v6\"></path><path d=\"m22 7-8.5 8.5-5-5L2 17\"></path>", "<path d=\"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978\"></path><path d=\"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978\"></path><path d=\"M18 9h1.5a1 1 0 0 0 0-5H18\"></path><path d=\"M4 22h16\"></path><path d=\"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z\"></path><path d=\"M6 9H4.5a1 1 0 0 1 0-5H6\"></path>", "<path d=\"M12 4v16\"></path><path d=\"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2\"></path><path d=\"M9 20h6\"></path>",
"<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path><path d=\"M16 3.128a4 4 0 0 1 0 7.744\"></path><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle>", "<path d=\"M12 20h.01\"></path><path d=\"M2 8.82a15 15 0 0 1 20 0\"></path><path d=\"M5 12.859a10 10 0 0 1 14 0\"></path><path d=\"M8.5 16.429a5 5 0 0 1 7 0\"></path>", "<path d=\"M12 20h.01\"></path><path d=\"M8.5 16.429a5 5 0 0 1 7 0\"></path><path d=\"M5 12.859a10 10 0 0 1 5.17-2.69\"></path><path d=\"M19 12.859a10 10 0 0 0-2.007-1.523\"></path><path d=\"M2 8.82a15 15 0 0 1 4.177-2.643\"></path><path d=\"M22 8.82a15 15 0 0 0-11.288-3.764\"></path><path d=\"m2 2 20 20\"></path>",
"<path d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z\"></path>", "<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" x2=\"16.65\" y1=\"21\" y2=\"16.65\"></line><line x1=\"11\" x2=\"11\" y1=\"8\" y2=\"14\"></line><line x1=\"8\" x2=\"14\" y1=\"11\" y2=\"11\"></line>", "<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" x2=\"16.65\" y1=\"21\" y2=\"16.65\"></line><line x1=\"8\" x2=\"14\" y1=\"11\" y2=\"11\"></line>",
"none", "header", "flex items-center justify-between gap-4 px-3 py-2 bg-[#C0C0C0] border-b-2 border-black text-black select-none", "flex items-center gap-2 whitespace-nowrap shrink-0", "w-8 h-8 win-titlebar-blue flex items-center justify-center font-pixel text-2xl leading-none border-2 border-black", "leading-none", "font-pixel text-[24px] leading-none tracking-wide block", "text-[11px] font-bold block mt-0.5", "the null pointers · CSE 213", "nav", "hidden md:flex items-center gap-1.5 text-xs font-bold", "flex items-center gap-1.5 px-2 py-1.5 whitespace-nowrap shrink-0 ",
"hidden xl:inline", "hidden", "flex items-center gap-3 shrink-0", "<span class=\"truncate max-w-[120px] md:max-w-none\">", "win-btn-selected flex items-center gap-2 px-3 py-1.5 text-xs font-bold whitespace-nowrap shrink-0", "flex md:hidden items-center justify-around bg-[#C0C0C0] border-b-2 border-black px-2 py-2 text-xs font-bold overflow-x-auto", "flex items-center gap-1.5 px-2.5 py-1 whitespace-nowrap shrink-0 ", "MCQ Pool", "Unknown element type: ", "STROKE", "stroke"]);
jl_String.prototype.toString = function() {
    return $rt_ustr(this);
};
jl_String.prototype.valueOf = jl_String.prototype.toString;
jl_Object.prototype.toString = function() {
    return $rt_ustr(jl_Object_toString(this));
};
jl_Object.prototype.__teavm_class__ = function() {
    return $dbg_class(this);
};
let $rt_export_main = $rt_mainStarter(cpc_ClientMain_main);
$rt_export_main.javaException = $rt_javaException;
let $rt_jso_marker = Symbol('jsoClass');
(() => {
    let c;
    c = cpce_MatchingEngineStudio$_init_$lambda$_0_12.prototype;
    c.call = $rt_callWithReceiver(cpce_MatchingEngineStudio$_init_$lambda$_0_12_call$exported$0);
    c = cpcw_BotSwarm$restartLoop$lambda$_15_0.prototype;
    c.call = $rt_callWithReceiver(cpcw_BotSwarm$restartLoop$lambda$_15_0_call$exported$0);
    c = cpcs_Ui$btn$lambda$_5_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cpcs_Ui$btn$lambda$_5_0_handleEvent$exported$0);
    c = cpcj_Ws$onClose$lambda$_3_0.prototype;
    c.call = $rt_callWithReceiver(cpcj_Ws$onClose$lambda$_3_0_call$exported$0);
    c = cpcs_Ui$btnHtml$lambda$_6_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cpcs_Ui$btnHtml$lambda$_6_0_handleEvent$exported$0);
    c = cpcs_Ui$onStop$lambda$_11_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cpcs_Ui$onStop$lambda$_11_0_handleEvent$exported$0);
    c = cpcs_Ui$on$lambda$_10_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cpcs_Ui$on$lambda$_10_0_handleEvent$exported$0);
    c = cpce_MatchingEngineStudio$restartSim$lambda$_5_0.prototype;
    c.call = $rt_callWithReceiver(cpce_MatchingEngineStudio$restartSim$lambda$_5_0_call$exported$0);
    c = cpcw_WhiteboardStudio$_init_$lambda$_0_14.prototype;
    c.call = $rt_callWithReceiver(cpcw_WhiteboardStudio$_init_$lambda$_0_14_call$exported$0);
    c = cpcw_WhiteboardStudio$_init_$lambda$_0_15.prototype;
    c.call = $rt_callWithReceiver(cpcw_WhiteboardStudio$_init_$lambda$_0_15_call$exported$0);
    c = cpcs_Ui$onMouse$lambda$_12_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cpcs_Ui$onMouse$lambda$_12_0_handleEvent$exported$0);
    c = cpcj_JavaArchitectureViewer$handleCopy$lambda$_9_0.prototype;
    c.call = $rt_callWithReceiver(cpcj_JavaArchitectureViewer$handleCopy$lambda$_9_0_call$exported$0);
    c = cpcm_McqConsensusView$syncCountdown$lambda$_19_0.prototype;
    c.call = $rt_callWithReceiver(cpcm_McqConsensusView$syncCountdown$lambda$_19_0_call$exported$0);
    c = cpcw_WhiteboardStudio$frame$lambda$_4_0.prototype;
    c.call = $rt_callWithReceiver(cpcw_WhiteboardStudio$frame$lambda$_4_0_call$exported$0);
    c = cpcj_Ws$onMessage$lambda$_2_0.prototype;
    c.call = $rt_callWithReceiver(cpcj_Ws$onMessage$lambda$_2_0_call$exported$0);
    c = cpce_MatchingEngineStudio$_init_$lambda$_0_4.prototype;
    c.call = $rt_callWithReceiver(cpce_MatchingEngineStudio$_init_$lambda$_0_4_call$exported$0);
    c = cpcs_Ui$onInput$lambda$_14_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cpcs_Ui$onInput$lambda$_14_0_handleEvent$exported$0);
    c = cpcs_AppShell$_init_$lambda$_0_6.prototype;
    c.call = $rt_callWithReceiver(cpcs_AppShell$_init_$lambda$_0_6_call$exported$0);
    c = cpcj_Ws$onOpen$lambda$_1_0.prototype;
    c.call = $rt_callWithReceiver(cpcj_Ws$onOpen$lambda$_1_0_call$exported$0);
    c = cpcj_Ws$onError$lambda$_4_0.prototype;
    c.call = $rt_callWithReceiver(cpcj_Ws$onError$lambda$_4_0_call$exported$0);
    c = otji_JSWrapper$Helper$_clinit_$lambda$_3_1.prototype;
    c.accept = $rt_callWithReceiver(otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept$exported$0);
    c = otji_JSWrapper$Helper$_clinit_$lambda$_3_0.prototype;
    c.accept = $rt_callWithReceiver(otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept$exported$0);
})();
$rt_exports.main = $rt_export_main;
}));

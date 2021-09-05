function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var shallowEqual_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shallowEqual;

function shallowEqual(actual, expected) {
  const keys = Object.keys(expected);

  for (const key of keys) {
    if (actual[key] !== expected[key]) {
      return false;
    }
  }

  return true;
}
});

var generated = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrayExpression = isArrayExpression;
exports.isAssignmentExpression = isAssignmentExpression;
exports.isBinaryExpression = isBinaryExpression;
exports.isInterpreterDirective = isInterpreterDirective;
exports.isDirective = isDirective;
exports.isDirectiveLiteral = isDirectiveLiteral;
exports.isBlockStatement = isBlockStatement;
exports.isBreakStatement = isBreakStatement;
exports.isCallExpression = isCallExpression;
exports.isCatchClause = isCatchClause;
exports.isConditionalExpression = isConditionalExpression;
exports.isContinueStatement = isContinueStatement;
exports.isDebuggerStatement = isDebuggerStatement;
exports.isDoWhileStatement = isDoWhileStatement;
exports.isEmptyStatement = isEmptyStatement;
exports.isExpressionStatement = isExpressionStatement;
exports.isFile = isFile;
exports.isForInStatement = isForInStatement;
exports.isForStatement = isForStatement;
exports.isFunctionDeclaration = isFunctionDeclaration;
exports.isFunctionExpression = isFunctionExpression;
exports.isIdentifier = isIdentifier;
exports.isIfStatement = isIfStatement;
exports.isLabeledStatement = isLabeledStatement;
exports.isStringLiteral = isStringLiteral;
exports.isNumericLiteral = isNumericLiteral;
exports.isNullLiteral = isNullLiteral;
exports.isBooleanLiteral = isBooleanLiteral;
exports.isRegExpLiteral = isRegExpLiteral;
exports.isLogicalExpression = isLogicalExpression;
exports.isMemberExpression = isMemberExpression;
exports.isNewExpression = isNewExpression;
exports.isProgram = isProgram;
exports.isObjectExpression = isObjectExpression;
exports.isObjectMethod = isObjectMethod;
exports.isObjectProperty = isObjectProperty;
exports.isRestElement = isRestElement;
exports.isReturnStatement = isReturnStatement;
exports.isSequenceExpression = isSequenceExpression;
exports.isParenthesizedExpression = isParenthesizedExpression;
exports.isSwitchCase = isSwitchCase;
exports.isSwitchStatement = isSwitchStatement;
exports.isThisExpression = isThisExpression;
exports.isThrowStatement = isThrowStatement;
exports.isTryStatement = isTryStatement;
exports.isUnaryExpression = isUnaryExpression;
exports.isUpdateExpression = isUpdateExpression;
exports.isVariableDeclaration = isVariableDeclaration;
exports.isVariableDeclarator = isVariableDeclarator;
exports.isWhileStatement = isWhileStatement;
exports.isWithStatement = isWithStatement;
exports.isAssignmentPattern = isAssignmentPattern;
exports.isArrayPattern = isArrayPattern;
exports.isArrowFunctionExpression = isArrowFunctionExpression;
exports.isClassBody = isClassBody;
exports.isClassExpression = isClassExpression;
exports.isClassDeclaration = isClassDeclaration;
exports.isExportAllDeclaration = isExportAllDeclaration;
exports.isExportDefaultDeclaration = isExportDefaultDeclaration;
exports.isExportNamedDeclaration = isExportNamedDeclaration;
exports.isExportSpecifier = isExportSpecifier;
exports.isForOfStatement = isForOfStatement;
exports.isImportDeclaration = isImportDeclaration;
exports.isImportDefaultSpecifier = isImportDefaultSpecifier;
exports.isImportNamespaceSpecifier = isImportNamespaceSpecifier;
exports.isImportSpecifier = isImportSpecifier;
exports.isMetaProperty = isMetaProperty;
exports.isClassMethod = isClassMethod;
exports.isObjectPattern = isObjectPattern;
exports.isSpreadElement = isSpreadElement;
exports.isSuper = isSuper;
exports.isTaggedTemplateExpression = isTaggedTemplateExpression;
exports.isTemplateElement = isTemplateElement;
exports.isTemplateLiteral = isTemplateLiteral;
exports.isYieldExpression = isYieldExpression;
exports.isAwaitExpression = isAwaitExpression;
exports.isImport = isImport;
exports.isBigIntLiteral = isBigIntLiteral;
exports.isExportNamespaceSpecifier = isExportNamespaceSpecifier;
exports.isOptionalMemberExpression = isOptionalMemberExpression;
exports.isOptionalCallExpression = isOptionalCallExpression;
exports.isClassProperty = isClassProperty;
exports.isClassPrivateProperty = isClassPrivateProperty;
exports.isClassPrivateMethod = isClassPrivateMethod;
exports.isPrivateName = isPrivateName;
exports.isAnyTypeAnnotation = isAnyTypeAnnotation;
exports.isArrayTypeAnnotation = isArrayTypeAnnotation;
exports.isBooleanTypeAnnotation = isBooleanTypeAnnotation;
exports.isBooleanLiteralTypeAnnotation = isBooleanLiteralTypeAnnotation;
exports.isNullLiteralTypeAnnotation = isNullLiteralTypeAnnotation;
exports.isClassImplements = isClassImplements;
exports.isDeclareClass = isDeclareClass;
exports.isDeclareFunction = isDeclareFunction;
exports.isDeclareInterface = isDeclareInterface;
exports.isDeclareModule = isDeclareModule;
exports.isDeclareModuleExports = isDeclareModuleExports;
exports.isDeclareTypeAlias = isDeclareTypeAlias;
exports.isDeclareOpaqueType = isDeclareOpaqueType;
exports.isDeclareVariable = isDeclareVariable;
exports.isDeclareExportDeclaration = isDeclareExportDeclaration;
exports.isDeclareExportAllDeclaration = isDeclareExportAllDeclaration;
exports.isDeclaredPredicate = isDeclaredPredicate;
exports.isExistsTypeAnnotation = isExistsTypeAnnotation;
exports.isFunctionTypeAnnotation = isFunctionTypeAnnotation;
exports.isFunctionTypeParam = isFunctionTypeParam;
exports.isGenericTypeAnnotation = isGenericTypeAnnotation;
exports.isInferredPredicate = isInferredPredicate;
exports.isInterfaceExtends = isInterfaceExtends;
exports.isInterfaceDeclaration = isInterfaceDeclaration;
exports.isInterfaceTypeAnnotation = isInterfaceTypeAnnotation;
exports.isIntersectionTypeAnnotation = isIntersectionTypeAnnotation;
exports.isMixedTypeAnnotation = isMixedTypeAnnotation;
exports.isEmptyTypeAnnotation = isEmptyTypeAnnotation;
exports.isNullableTypeAnnotation = isNullableTypeAnnotation;
exports.isNumberLiteralTypeAnnotation = isNumberLiteralTypeAnnotation;
exports.isNumberTypeAnnotation = isNumberTypeAnnotation;
exports.isObjectTypeAnnotation = isObjectTypeAnnotation;
exports.isObjectTypeInternalSlot = isObjectTypeInternalSlot;
exports.isObjectTypeCallProperty = isObjectTypeCallProperty;
exports.isObjectTypeIndexer = isObjectTypeIndexer;
exports.isObjectTypeProperty = isObjectTypeProperty;
exports.isObjectTypeSpreadProperty = isObjectTypeSpreadProperty;
exports.isOpaqueType = isOpaqueType;
exports.isQualifiedTypeIdentifier = isQualifiedTypeIdentifier;
exports.isStringLiteralTypeAnnotation = isStringLiteralTypeAnnotation;
exports.isStringTypeAnnotation = isStringTypeAnnotation;
exports.isSymbolTypeAnnotation = isSymbolTypeAnnotation;
exports.isThisTypeAnnotation = isThisTypeAnnotation;
exports.isTupleTypeAnnotation = isTupleTypeAnnotation;
exports.isTypeofTypeAnnotation = isTypeofTypeAnnotation;
exports.isTypeAlias = isTypeAlias;
exports.isTypeAnnotation = isTypeAnnotation;
exports.isTypeCastExpression = isTypeCastExpression;
exports.isTypeParameter = isTypeParameter;
exports.isTypeParameterDeclaration = isTypeParameterDeclaration;
exports.isTypeParameterInstantiation = isTypeParameterInstantiation;
exports.isUnionTypeAnnotation = isUnionTypeAnnotation;
exports.isVariance = isVariance;
exports.isVoidTypeAnnotation = isVoidTypeAnnotation;
exports.isEnumDeclaration = isEnumDeclaration;
exports.isEnumBooleanBody = isEnumBooleanBody;
exports.isEnumNumberBody = isEnumNumberBody;
exports.isEnumStringBody = isEnumStringBody;
exports.isEnumSymbolBody = isEnumSymbolBody;
exports.isEnumBooleanMember = isEnumBooleanMember;
exports.isEnumNumberMember = isEnumNumberMember;
exports.isEnumStringMember = isEnumStringMember;
exports.isEnumDefaultedMember = isEnumDefaultedMember;
exports.isIndexedAccessType = isIndexedAccessType;
exports.isOptionalIndexedAccessType = isOptionalIndexedAccessType;
exports.isJSXAttribute = isJSXAttribute;
exports.isJSXClosingElement = isJSXClosingElement;
exports.isJSXElement = isJSXElement;
exports.isJSXEmptyExpression = isJSXEmptyExpression;
exports.isJSXExpressionContainer = isJSXExpressionContainer;
exports.isJSXSpreadChild = isJSXSpreadChild;
exports.isJSXIdentifier = isJSXIdentifier;
exports.isJSXMemberExpression = isJSXMemberExpression;
exports.isJSXNamespacedName = isJSXNamespacedName;
exports.isJSXOpeningElement = isJSXOpeningElement;
exports.isJSXSpreadAttribute = isJSXSpreadAttribute;
exports.isJSXText = isJSXText;
exports.isJSXFragment = isJSXFragment;
exports.isJSXOpeningFragment = isJSXOpeningFragment;
exports.isJSXClosingFragment = isJSXClosingFragment;
exports.isNoop = isNoop;
exports.isPlaceholder = isPlaceholder;
exports.isV8IntrinsicIdentifier = isV8IntrinsicIdentifier;
exports.isArgumentPlaceholder = isArgumentPlaceholder;
exports.isBindExpression = isBindExpression;
exports.isImportAttribute = isImportAttribute;
exports.isDecorator = isDecorator;
exports.isDoExpression = isDoExpression;
exports.isExportDefaultSpecifier = isExportDefaultSpecifier;
exports.isRecordExpression = isRecordExpression;
exports.isTupleExpression = isTupleExpression;
exports.isDecimalLiteral = isDecimalLiteral;
exports.isStaticBlock = isStaticBlock;
exports.isModuleExpression = isModuleExpression;
exports.isTopicReference = isTopicReference;
exports.isPipelineTopicExpression = isPipelineTopicExpression;
exports.isPipelineBareFunction = isPipelineBareFunction;
exports.isPipelinePrimaryTopicReference = isPipelinePrimaryTopicReference;
exports.isTSParameterProperty = isTSParameterProperty;
exports.isTSDeclareFunction = isTSDeclareFunction;
exports.isTSDeclareMethod = isTSDeclareMethod;
exports.isTSQualifiedName = isTSQualifiedName;
exports.isTSCallSignatureDeclaration = isTSCallSignatureDeclaration;
exports.isTSConstructSignatureDeclaration = isTSConstructSignatureDeclaration;
exports.isTSPropertySignature = isTSPropertySignature;
exports.isTSMethodSignature = isTSMethodSignature;
exports.isTSIndexSignature = isTSIndexSignature;
exports.isTSAnyKeyword = isTSAnyKeyword;
exports.isTSBooleanKeyword = isTSBooleanKeyword;
exports.isTSBigIntKeyword = isTSBigIntKeyword;
exports.isTSIntrinsicKeyword = isTSIntrinsicKeyword;
exports.isTSNeverKeyword = isTSNeverKeyword;
exports.isTSNullKeyword = isTSNullKeyword;
exports.isTSNumberKeyword = isTSNumberKeyword;
exports.isTSObjectKeyword = isTSObjectKeyword;
exports.isTSStringKeyword = isTSStringKeyword;
exports.isTSSymbolKeyword = isTSSymbolKeyword;
exports.isTSUndefinedKeyword = isTSUndefinedKeyword;
exports.isTSUnknownKeyword = isTSUnknownKeyword;
exports.isTSVoidKeyword = isTSVoidKeyword;
exports.isTSThisType = isTSThisType;
exports.isTSFunctionType = isTSFunctionType;
exports.isTSConstructorType = isTSConstructorType;
exports.isTSTypeReference = isTSTypeReference;
exports.isTSTypePredicate = isTSTypePredicate;
exports.isTSTypeQuery = isTSTypeQuery;
exports.isTSTypeLiteral = isTSTypeLiteral;
exports.isTSArrayType = isTSArrayType;
exports.isTSTupleType = isTSTupleType;
exports.isTSOptionalType = isTSOptionalType;
exports.isTSRestType = isTSRestType;
exports.isTSNamedTupleMember = isTSNamedTupleMember;
exports.isTSUnionType = isTSUnionType;
exports.isTSIntersectionType = isTSIntersectionType;
exports.isTSConditionalType = isTSConditionalType;
exports.isTSInferType = isTSInferType;
exports.isTSParenthesizedType = isTSParenthesizedType;
exports.isTSTypeOperator = isTSTypeOperator;
exports.isTSIndexedAccessType = isTSIndexedAccessType;
exports.isTSMappedType = isTSMappedType;
exports.isTSLiteralType = isTSLiteralType;
exports.isTSExpressionWithTypeArguments = isTSExpressionWithTypeArguments;
exports.isTSInterfaceDeclaration = isTSInterfaceDeclaration;
exports.isTSInterfaceBody = isTSInterfaceBody;
exports.isTSTypeAliasDeclaration = isTSTypeAliasDeclaration;
exports.isTSAsExpression = isTSAsExpression;
exports.isTSTypeAssertion = isTSTypeAssertion;
exports.isTSEnumDeclaration = isTSEnumDeclaration;
exports.isTSEnumMember = isTSEnumMember;
exports.isTSModuleDeclaration = isTSModuleDeclaration;
exports.isTSModuleBlock = isTSModuleBlock;
exports.isTSImportType = isTSImportType;
exports.isTSImportEqualsDeclaration = isTSImportEqualsDeclaration;
exports.isTSExternalModuleReference = isTSExternalModuleReference;
exports.isTSNonNullExpression = isTSNonNullExpression;
exports.isTSExportAssignment = isTSExportAssignment;
exports.isTSNamespaceExportDeclaration = isTSNamespaceExportDeclaration;
exports.isTSTypeAnnotation = isTSTypeAnnotation;
exports.isTSTypeParameterInstantiation = isTSTypeParameterInstantiation;
exports.isTSTypeParameterDeclaration = isTSTypeParameterDeclaration;
exports.isTSTypeParameter = isTSTypeParameter;
exports.isExpression = isExpression;
exports.isBinary = isBinary;
exports.isScopable = isScopable;
exports.isBlockParent = isBlockParent;
exports.isBlock = isBlock;
exports.isStatement = isStatement;
exports.isTerminatorless = isTerminatorless;
exports.isCompletionStatement = isCompletionStatement;
exports.isConditional = isConditional;
exports.isLoop = isLoop;
exports.isWhile = isWhile;
exports.isExpressionWrapper = isExpressionWrapper;
exports.isFor = isFor;
exports.isForXStatement = isForXStatement;
exports.isFunction = isFunction;
exports.isFunctionParent = isFunctionParent;
exports.isPureish = isPureish;
exports.isDeclaration = isDeclaration;
exports.isPatternLike = isPatternLike;
exports.isLVal = isLVal;
exports.isTSEntityName = isTSEntityName;
exports.isLiteral = isLiteral;
exports.isImmutable = isImmutable;
exports.isUserWhitespacable = isUserWhitespacable;
exports.isMethod = isMethod;
exports.isObjectMember = isObjectMember;
exports.isProperty = isProperty;
exports.isUnaryLike = isUnaryLike;
exports.isPattern = isPattern;
exports.isClass = isClass;
exports.isModuleDeclaration = isModuleDeclaration;
exports.isExportDeclaration = isExportDeclaration;
exports.isModuleSpecifier = isModuleSpecifier;
exports.isPrivate = isPrivate;
exports.isFlow = isFlow;
exports.isFlowType = isFlowType;
exports.isFlowBaseAnnotation = isFlowBaseAnnotation;
exports.isFlowDeclaration = isFlowDeclaration;
exports.isFlowPredicate = isFlowPredicate;
exports.isEnumBody = isEnumBody;
exports.isEnumMember = isEnumMember;
exports.isJSX = isJSX;
exports.isTSTypeElement = isTSTypeElement;
exports.isTSType = isTSType;
exports.isTSBaseType = isTSBaseType;
exports.isNumberLiteral = isNumberLiteral;
exports.isRegexLiteral = isRegexLiteral;
exports.isRestProperty = isRestProperty;
exports.isSpreadProperty = isSpreadProperty;



function isArrayExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArrayExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isAssignmentExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "AssignmentExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isBinaryExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BinaryExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isInterpreterDirective(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InterpreterDirective") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isDirective(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Directive") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isDirectiveLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DirectiveLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isBlockStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BlockStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isBreakStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BreakStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isCallExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "CallExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isCatchClause(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "CatchClause") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isConditionalExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ConditionalExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isContinueStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ContinueStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isDebuggerStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DebuggerStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isDoWhileStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DoWhileStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isEmptyStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EmptyStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isExpressionStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExpressionStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isFile(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "File") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isForInStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ForInStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isForStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ForStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isFunctionDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isFunctionExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isIdentifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Identifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isIfStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "IfStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isLabeledStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "LabeledStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isStringLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "StringLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isNumericLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NumericLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isNullLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NullLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isBooleanLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BooleanLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isRegExpLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RegExpLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isLogicalExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "LogicalExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isMemberExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "MemberExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isNewExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NewExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isProgram(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Program") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isObjectExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isObjectMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isObjectProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isRestElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RestElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isReturnStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ReturnStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isSequenceExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SequenceExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isParenthesizedExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ParenthesizedExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isSwitchCase(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SwitchCase") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isSwitchStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SwitchStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isThisExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ThisExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isThrowStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ThrowStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTryStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TryStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isUnaryExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "UnaryExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isUpdateExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "UpdateExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isVariableDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "VariableDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isVariableDeclarator(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "VariableDeclarator") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isWhileStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "WhileStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isWithStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "WithStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isAssignmentPattern(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "AssignmentPattern") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isArrayPattern(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArrayPattern") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isArrowFunctionExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArrowFunctionExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isClassBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isClassExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isClassDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isExportAllDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportAllDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isExportDefaultDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportDefaultDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isExportNamedDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportNamedDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isExportSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isForOfStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ForOfStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isImportDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isImportDefaultSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportDefaultSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isImportNamespaceSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportNamespaceSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isImportSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isMetaProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "MetaProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isClassMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isObjectPattern(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectPattern") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isSpreadElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SpreadElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isSuper(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Super") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTaggedTemplateExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TaggedTemplateExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTemplateElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TemplateElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTemplateLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TemplateLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isYieldExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "YieldExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isAwaitExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "AwaitExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isImport(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Import") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isBigIntLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BigIntLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isExportNamespaceSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportNamespaceSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isOptionalMemberExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "OptionalMemberExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isOptionalCallExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "OptionalCallExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isClassProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isClassPrivateProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassPrivateProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isClassPrivateMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassPrivateMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isPrivateName(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PrivateName") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isAnyTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "AnyTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isArrayTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArrayTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isBooleanTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BooleanTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isBooleanLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BooleanLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isNullLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NullLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isClassImplements(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassImplements") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isDeclareClass(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareClass") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isDeclareFunction(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareFunction") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isDeclareInterface(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareInterface") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isDeclareModule(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareModule") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isDeclareModuleExports(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareModuleExports") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isDeclareTypeAlias(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareTypeAlias") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isDeclareOpaqueType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareOpaqueType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isDeclareVariable(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareVariable") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isDeclareExportDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareExportDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isDeclareExportAllDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareExportAllDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isDeclaredPredicate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclaredPredicate") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isExistsTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExistsTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isFunctionTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isFunctionTypeParam(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionTypeParam") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isGenericTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "GenericTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isInferredPredicate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InferredPredicate") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isInterfaceExtends(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InterfaceExtends") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isInterfaceDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InterfaceDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isInterfaceTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InterfaceTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isIntersectionTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "IntersectionTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isMixedTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "MixedTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isEmptyTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EmptyTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isNullableTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NullableTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isNumberLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NumberLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isNumberTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NumberTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeInternalSlot(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeInternalSlot") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeCallProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeCallProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeIndexer(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeIndexer") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeSpreadProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeSpreadProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isOpaqueType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "OpaqueType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isQualifiedTypeIdentifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "QualifiedTypeIdentifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isStringLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "StringLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isStringTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "StringTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isSymbolTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SymbolTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isThisTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ThisTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTupleTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TupleTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTypeofTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeofTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTypeAlias(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeAlias") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTypeCastExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeCastExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTypeParameter(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeParameter") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTypeParameterDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeParameterDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTypeParameterInstantiation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeParameterInstantiation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isUnionTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "UnionTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isVariance(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Variance") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isVoidTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "VoidTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isEnumDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isEnumBooleanBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumBooleanBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isEnumNumberBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumNumberBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isEnumStringBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumStringBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isEnumSymbolBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumSymbolBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isEnumBooleanMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumBooleanMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isEnumNumberMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumNumberMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isEnumStringMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumStringMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isEnumDefaultedMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumDefaultedMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isIndexedAccessType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "IndexedAccessType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isOptionalIndexedAccessType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "OptionalIndexedAccessType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isJSXAttribute(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXAttribute") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isJSXClosingElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXClosingElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isJSXElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isJSXEmptyExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXEmptyExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isJSXExpressionContainer(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXExpressionContainer") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isJSXSpreadChild(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXSpreadChild") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isJSXIdentifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXIdentifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isJSXMemberExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXMemberExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isJSXNamespacedName(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXNamespacedName") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isJSXOpeningElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXOpeningElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isJSXSpreadAttribute(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXSpreadAttribute") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isJSXText(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXText") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isJSXFragment(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXFragment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isJSXOpeningFragment(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXOpeningFragment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isJSXClosingFragment(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXClosingFragment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isNoop(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Noop") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isPlaceholder(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Placeholder") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isV8IntrinsicIdentifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "V8IntrinsicIdentifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isArgumentPlaceholder(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArgumentPlaceholder") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isBindExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BindExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isImportAttribute(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportAttribute") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isDecorator(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Decorator") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isDoExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DoExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isExportDefaultSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportDefaultSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isRecordExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RecordExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTupleExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TupleExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isDecimalLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DecimalLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isStaticBlock(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "StaticBlock") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isModuleExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ModuleExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTopicReference(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TopicReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isPipelineTopicExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PipelineTopicExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isPipelineBareFunction(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PipelineBareFunction") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isPipelinePrimaryTopicReference(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PipelinePrimaryTopicReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSParameterProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSParameterProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSDeclareFunction(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSDeclareFunction") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSDeclareMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSDeclareMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSQualifiedName(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSQualifiedName") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSCallSignatureDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSCallSignatureDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSConstructSignatureDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSConstructSignatureDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSPropertySignature(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSPropertySignature") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSMethodSignature(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSMethodSignature") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSIndexSignature(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSIndexSignature") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSAnyKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSAnyKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSBooleanKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSBooleanKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSBigIntKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSBigIntKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSIntrinsicKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSIntrinsicKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSNeverKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNeverKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSNullKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNullKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSNumberKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNumberKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSObjectKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSObjectKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSStringKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSStringKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSSymbolKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSSymbolKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSUndefinedKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSUndefinedKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSUnknownKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSUnknownKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSVoidKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSVoidKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSThisType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSThisType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSFunctionType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSFunctionType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSConstructorType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSConstructorType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeReference(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypePredicate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypePredicate") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeQuery(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeQuery") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSArrayType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSArrayType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSTupleType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTupleType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSOptionalType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSOptionalType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSRestType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSRestType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSNamedTupleMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNamedTupleMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSUnionType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSUnionType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSIntersectionType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSIntersectionType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSConditionalType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSConditionalType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSInferType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSInferType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSParenthesizedType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSParenthesizedType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeOperator(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeOperator") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSIndexedAccessType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSIndexedAccessType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSMappedType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSMappedType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSLiteralType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSLiteralType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSExpressionWithTypeArguments(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSExpressionWithTypeArguments") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSInterfaceDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSInterfaceDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSInterfaceBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSInterfaceBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeAliasDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeAliasDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSAsExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSAsExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeAssertion(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeAssertion") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSEnumDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSEnumDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSEnumMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSEnumMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSModuleDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSModuleDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSModuleBlock(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSModuleBlock") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSImportType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSImportType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSImportEqualsDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSImportEqualsDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSExternalModuleReference(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSExternalModuleReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSNonNullExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNonNullExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSExportAssignment(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSExportAssignment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSNamespaceExportDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNamespaceExportDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeParameterInstantiation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeParameterInstantiation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeParameterDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeParameterDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeParameter(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeParameter") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ArrayExpression" === nodeType || "AssignmentExpression" === nodeType || "BinaryExpression" === nodeType || "CallExpression" === nodeType || "ConditionalExpression" === nodeType || "FunctionExpression" === nodeType || "Identifier" === nodeType || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "LogicalExpression" === nodeType || "MemberExpression" === nodeType || "NewExpression" === nodeType || "ObjectExpression" === nodeType || "SequenceExpression" === nodeType || "ParenthesizedExpression" === nodeType || "ThisExpression" === nodeType || "UnaryExpression" === nodeType || "UpdateExpression" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassExpression" === nodeType || "MetaProperty" === nodeType || "Super" === nodeType || "TaggedTemplateExpression" === nodeType || "TemplateLiteral" === nodeType || "YieldExpression" === nodeType || "AwaitExpression" === nodeType || "Import" === nodeType || "BigIntLiteral" === nodeType || "OptionalMemberExpression" === nodeType || "OptionalCallExpression" === nodeType || "TypeCastExpression" === nodeType || "JSXElement" === nodeType || "JSXFragment" === nodeType || "BindExpression" === nodeType || "DoExpression" === nodeType || "RecordExpression" === nodeType || "TupleExpression" === nodeType || "DecimalLiteral" === nodeType || "ModuleExpression" === nodeType || "TopicReference" === nodeType || "PipelineTopicExpression" === nodeType || "PipelineBareFunction" === nodeType || "PipelinePrimaryTopicReference" === nodeType || "TSAsExpression" === nodeType || "TSTypeAssertion" === nodeType || "TSNonNullExpression" === nodeType || nodeType === "Placeholder" && ("Expression" === node.expectedNode || "Identifier" === node.expectedNode || "StringLiteral" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isBinary(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BinaryExpression" === nodeType || "LogicalExpression" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isScopable(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BlockStatement" === nodeType || "CatchClause" === nodeType || "DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "Program" === nodeType || "ObjectMethod" === nodeType || "SwitchStatement" === nodeType || "WhileStatement" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassExpression" === nodeType || "ClassDeclaration" === nodeType || "ForOfStatement" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType || "StaticBlock" === nodeType || "TSModuleBlock" === nodeType || nodeType === "Placeholder" && "BlockStatement" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isBlockParent(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BlockStatement" === nodeType || "CatchClause" === nodeType || "DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "Program" === nodeType || "ObjectMethod" === nodeType || "SwitchStatement" === nodeType || "WhileStatement" === nodeType || "ArrowFunctionExpression" === nodeType || "ForOfStatement" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType || "StaticBlock" === nodeType || "TSModuleBlock" === nodeType || nodeType === "Placeholder" && "BlockStatement" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isBlock(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BlockStatement" === nodeType || "Program" === nodeType || "TSModuleBlock" === nodeType || nodeType === "Placeholder" && "BlockStatement" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BlockStatement" === nodeType || "BreakStatement" === nodeType || "ContinueStatement" === nodeType || "DebuggerStatement" === nodeType || "DoWhileStatement" === nodeType || "EmptyStatement" === nodeType || "ExpressionStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "IfStatement" === nodeType || "LabeledStatement" === nodeType || "ReturnStatement" === nodeType || "SwitchStatement" === nodeType || "ThrowStatement" === nodeType || "TryStatement" === nodeType || "VariableDeclaration" === nodeType || "WhileStatement" === nodeType || "WithStatement" === nodeType || "ClassDeclaration" === nodeType || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ForOfStatement" === nodeType || "ImportDeclaration" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType || "EnumDeclaration" === nodeType || "TSDeclareFunction" === nodeType || "TSInterfaceDeclaration" === nodeType || "TSTypeAliasDeclaration" === nodeType || "TSEnumDeclaration" === nodeType || "TSModuleDeclaration" === nodeType || "TSImportEqualsDeclaration" === nodeType || "TSExportAssignment" === nodeType || "TSNamespaceExportDeclaration" === nodeType || nodeType === "Placeholder" && ("Statement" === node.expectedNode || "Declaration" === node.expectedNode || "BlockStatement" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTerminatorless(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BreakStatement" === nodeType || "ContinueStatement" === nodeType || "ReturnStatement" === nodeType || "ThrowStatement" === nodeType || "YieldExpression" === nodeType || "AwaitExpression" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isCompletionStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BreakStatement" === nodeType || "ContinueStatement" === nodeType || "ReturnStatement" === nodeType || "ThrowStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isConditional(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ConditionalExpression" === nodeType || "IfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isLoop(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "WhileStatement" === nodeType || "ForOfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isWhile(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("DoWhileStatement" === nodeType || "WhileStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isExpressionWrapper(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ExpressionStatement" === nodeType || "ParenthesizedExpression" === nodeType || "TypeCastExpression" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isFor(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ForInStatement" === nodeType || "ForStatement" === nodeType || "ForOfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isForXStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ForInStatement" === nodeType || "ForOfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isFunction(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "ObjectMethod" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isFunctionParent(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "ObjectMethod" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isPureish(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "ArrowFunctionExpression" === nodeType || "BigIntLiteral" === nodeType || "DecimalLiteral" === nodeType || nodeType === "Placeholder" && "StringLiteral" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("FunctionDeclaration" === nodeType || "VariableDeclaration" === nodeType || "ClassDeclaration" === nodeType || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ImportDeclaration" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType || "EnumDeclaration" === nodeType || "TSDeclareFunction" === nodeType || "TSInterfaceDeclaration" === nodeType || "TSTypeAliasDeclaration" === nodeType || "TSEnumDeclaration" === nodeType || "TSModuleDeclaration" === nodeType || nodeType === "Placeholder" && "Declaration" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isPatternLike(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("Identifier" === nodeType || "RestElement" === nodeType || "AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType || nodeType === "Placeholder" && ("Pattern" === node.expectedNode || "Identifier" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isLVal(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("Identifier" === nodeType || "MemberExpression" === nodeType || "RestElement" === nodeType || "AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType || "TSParameterProperty" === nodeType || nodeType === "Placeholder" && ("Pattern" === node.expectedNode || "Identifier" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSEntityName(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("Identifier" === nodeType || "TSQualifiedName" === nodeType || nodeType === "Placeholder" && "Identifier" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "TemplateLiteral" === nodeType || "BigIntLiteral" === nodeType || "DecimalLiteral" === nodeType || nodeType === "Placeholder" && "StringLiteral" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isImmutable(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "BigIntLiteral" === nodeType || "JSXAttribute" === nodeType || "JSXClosingElement" === nodeType || "JSXElement" === nodeType || "JSXExpressionContainer" === nodeType || "JSXSpreadChild" === nodeType || "JSXOpeningElement" === nodeType || "JSXText" === nodeType || "JSXFragment" === nodeType || "JSXOpeningFragment" === nodeType || "JSXClosingFragment" === nodeType || "DecimalLiteral" === nodeType || nodeType === "Placeholder" && "StringLiteral" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isUserWhitespacable(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ObjectMethod" === nodeType || "ObjectProperty" === nodeType || "ObjectTypeInternalSlot" === nodeType || "ObjectTypeCallProperty" === nodeType || "ObjectTypeIndexer" === nodeType || "ObjectTypeProperty" === nodeType || "ObjectTypeSpreadProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ObjectMethod" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isObjectMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ObjectMethod" === nodeType || "ObjectProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ObjectProperty" === nodeType || "ClassProperty" === nodeType || "ClassPrivateProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isUnaryLike(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("UnaryExpression" === nodeType || "SpreadElement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isPattern(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType || nodeType === "Placeholder" && "Pattern" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isClass(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ClassExpression" === nodeType || "ClassDeclaration" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isModuleDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ImportDeclaration" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isExportDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isModuleSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ExportSpecifier" === nodeType || "ImportDefaultSpecifier" === nodeType || "ImportNamespaceSpecifier" === nodeType || "ImportSpecifier" === nodeType || "ExportNamespaceSpecifier" === nodeType || "ExportDefaultSpecifier" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isPrivate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ClassPrivateProperty" === nodeType || "ClassPrivateMethod" === nodeType || "PrivateName" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isFlow(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("AnyTypeAnnotation" === nodeType || "ArrayTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "BooleanLiteralTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "ClassImplements" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "DeclaredPredicate" === nodeType || "ExistsTypeAnnotation" === nodeType || "FunctionTypeAnnotation" === nodeType || "FunctionTypeParam" === nodeType || "GenericTypeAnnotation" === nodeType || "InferredPredicate" === nodeType || "InterfaceExtends" === nodeType || "InterfaceDeclaration" === nodeType || "InterfaceTypeAnnotation" === nodeType || "IntersectionTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NullableTypeAnnotation" === nodeType || "NumberLiteralTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "ObjectTypeAnnotation" === nodeType || "ObjectTypeInternalSlot" === nodeType || "ObjectTypeCallProperty" === nodeType || "ObjectTypeIndexer" === nodeType || "ObjectTypeProperty" === nodeType || "ObjectTypeSpreadProperty" === nodeType || "OpaqueType" === nodeType || "QualifiedTypeIdentifier" === nodeType || "StringLiteralTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "SymbolTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "TupleTypeAnnotation" === nodeType || "TypeofTypeAnnotation" === nodeType || "TypeAlias" === nodeType || "TypeAnnotation" === nodeType || "TypeCastExpression" === nodeType || "TypeParameter" === nodeType || "TypeParameterDeclaration" === nodeType || "TypeParameterInstantiation" === nodeType || "UnionTypeAnnotation" === nodeType || "Variance" === nodeType || "VoidTypeAnnotation" === nodeType || "IndexedAccessType" === nodeType || "OptionalIndexedAccessType" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isFlowType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("AnyTypeAnnotation" === nodeType || "ArrayTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "BooleanLiteralTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "ExistsTypeAnnotation" === nodeType || "FunctionTypeAnnotation" === nodeType || "GenericTypeAnnotation" === nodeType || "InterfaceTypeAnnotation" === nodeType || "IntersectionTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NullableTypeAnnotation" === nodeType || "NumberLiteralTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "ObjectTypeAnnotation" === nodeType || "StringLiteralTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "SymbolTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "TupleTypeAnnotation" === nodeType || "TypeofTypeAnnotation" === nodeType || "UnionTypeAnnotation" === nodeType || "VoidTypeAnnotation" === nodeType || "IndexedAccessType" === nodeType || "OptionalIndexedAccessType" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isFlowBaseAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("AnyTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "SymbolTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "VoidTypeAnnotation" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isFlowDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isFlowPredicate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("DeclaredPredicate" === nodeType || "InferredPredicate" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isEnumBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("EnumBooleanBody" === nodeType || "EnumNumberBody" === nodeType || "EnumStringBody" === nodeType || "EnumSymbolBody" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isEnumMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("EnumBooleanMember" === nodeType || "EnumNumberMember" === nodeType || "EnumStringMember" === nodeType || "EnumDefaultedMember" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isJSX(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("JSXAttribute" === nodeType || "JSXClosingElement" === nodeType || "JSXElement" === nodeType || "JSXEmptyExpression" === nodeType || "JSXExpressionContainer" === nodeType || "JSXSpreadChild" === nodeType || "JSXIdentifier" === nodeType || "JSXMemberExpression" === nodeType || "JSXNamespacedName" === nodeType || "JSXOpeningElement" === nodeType || "JSXSpreadAttribute" === nodeType || "JSXText" === nodeType || "JSXFragment" === nodeType || "JSXOpeningFragment" === nodeType || "JSXClosingFragment" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("TSCallSignatureDeclaration" === nodeType || "TSConstructSignatureDeclaration" === nodeType || "TSPropertySignature" === nodeType || "TSMethodSignature" === nodeType || "TSIndexSignature" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("TSAnyKeyword" === nodeType || "TSBooleanKeyword" === nodeType || "TSBigIntKeyword" === nodeType || "TSIntrinsicKeyword" === nodeType || "TSNeverKeyword" === nodeType || "TSNullKeyword" === nodeType || "TSNumberKeyword" === nodeType || "TSObjectKeyword" === nodeType || "TSStringKeyword" === nodeType || "TSSymbolKeyword" === nodeType || "TSUndefinedKeyword" === nodeType || "TSUnknownKeyword" === nodeType || "TSVoidKeyword" === nodeType || "TSThisType" === nodeType || "TSFunctionType" === nodeType || "TSConstructorType" === nodeType || "TSTypeReference" === nodeType || "TSTypePredicate" === nodeType || "TSTypeQuery" === nodeType || "TSTypeLiteral" === nodeType || "TSArrayType" === nodeType || "TSTupleType" === nodeType || "TSOptionalType" === nodeType || "TSRestType" === nodeType || "TSUnionType" === nodeType || "TSIntersectionType" === nodeType || "TSConditionalType" === nodeType || "TSInferType" === nodeType || "TSParenthesizedType" === nodeType || "TSTypeOperator" === nodeType || "TSIndexedAccessType" === nodeType || "TSMappedType" === nodeType || "TSLiteralType" === nodeType || "TSExpressionWithTypeArguments" === nodeType || "TSImportType" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isTSBaseType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("TSAnyKeyword" === nodeType || "TSBooleanKeyword" === nodeType || "TSBigIntKeyword" === nodeType || "TSIntrinsicKeyword" === nodeType || "TSNeverKeyword" === nodeType || "TSNullKeyword" === nodeType || "TSNumberKeyword" === nodeType || "TSObjectKeyword" === nodeType || "TSStringKeyword" === nodeType || "TSSymbolKeyword" === nodeType || "TSUndefinedKeyword" === nodeType || "TSUnknownKeyword" === nodeType || "TSVoidKeyword" === nodeType || "TSThisType" === nodeType || "TSLiteralType" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isNumberLiteral(node, opts) {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NumberLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isRegexLiteral(node, opts) {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RegexLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isRestProperty(node, opts) {
  console.trace("The node type RestProperty has been renamed to RestElement");
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RestProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}

function isSpreadProperty(node, opts) {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SpreadProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }

  return false;
}
});

var matchesPattern_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matchesPattern;



function matchesPattern(member, match, allowPartial) {
  if (!(0, generated.isMemberExpression)(member)) return false;
  const parts = Array.isArray(match) ? match : match.split(".");
  const nodes = [];
  let node;

  for (node = member; (0, generated.isMemberExpression)(node); node = node.object) {
    nodes.push(node.property);
  }

  nodes.push(node);
  if (nodes.length < parts.length) return false;
  if (!allowPartial && nodes.length > parts.length) return false;

  for (let i = 0, j = nodes.length - 1; i < parts.length; i++, j--) {
    const node = nodes[j];
    let value;

    if ((0, generated.isIdentifier)(node)) {
      value = node.name;
    } else if ((0, generated.isStringLiteral)(node)) {
      value = node.value;
    } else if ((0, generated.isThisExpression)(node)) {
      value = "this";
    } else {
      return false;
    }

    if (parts[i] !== value) return false;
  }

  return true;
}
});

var buildMatchMemberExpression_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildMatchMemberExpression;



function buildMatchMemberExpression(match, allowPartial) {
  const parts = match.split(".");
  return member => (0, matchesPattern_1.default)(member, parts, allowPartial);
}
});

var isReactComponent_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



const isReactComponent = (0, buildMatchMemberExpression_1.default)("React.Component");
var _default = isReactComponent;
exports.default = _default;
});

var isCompatTag_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCompatTag;

function isCompatTag(tagName) {
  return !!tagName && /^[a-z]/.test(tagName);
}
});

let fastProto = null; // Creates an object with permanently fast properties in V8. See Toon Verwaest's
// post https://medium.com/@tverwaes/setting-up-prototypes-in-v8-ec9c9491dfe2#5f62
// for more details. Use %HasFastProperties(object) and the Node.js flag
// --allow-natives-syntax to check whether an object has fast properties.

function FastObject(o) {
  // A prototype object will have "fast properties" enabled once it is checked
  // against the inline property cache of a function, e.g. fastProto.property:
  // https://github.com/v8/v8/blob/6.0.122/test/mjsunit/fast-prototype.js#L48-L63
  if (fastProto !== null && typeof fastProto.property) {
    const result = fastProto;
    fastProto = FastObject.prototype = null;
    return result;
  }

  fastProto = FastObject.prototype = o == null ? Object.create(null) : o;
  return new FastObject();
} // Initialize the inline property cache of FastObject


FastObject();

var toFastProperties = function toFastproperties(o) {
  return FastObject(o);
};

var isType_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isType;



function isType(nodeType, targetType) {
  if (nodeType === targetType) return true;
  if (definitions.ALIAS_KEYS[targetType]) return false;
  const aliases = definitions.FLIPPED_ALIAS_KEYS[targetType];

  if (aliases) {
    if (aliases[0] === nodeType) return true;

    for (const alias of aliases) {
      if (nodeType === alias) return true;
    }
  }

  return false;
}
});

var isPlaceholderType_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPlaceholderType;



function isPlaceholderType(placeholderType, targetType) {
  if (placeholderType === targetType) return true;
  const aliases = definitions.PLACEHOLDERS_ALIAS[placeholderType];

  if (aliases) {
    for (const alias of aliases) {
      if (targetType === alias) return true;
    }
  }

  return false;
}
});

var is_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = is;









function is(type, node, opts) {
  if (!node) return false;
  const matches = (0, isType_1.default)(node.type, type);

  if (!matches) {
    if (!opts && node.type === "Placeholder" && type in definitions.FLIPPED_ALIAS_KEYS) {
      return (0, isPlaceholderType_1.default)(node.expectedNode, type);
    }

    return false;
  }

  if (typeof opts === "undefined") {
    return true;
  } else {
    return (0, shallowEqual_1.default)(node, opts);
  }
}
});

var identifier = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIdentifierStart = isIdentifierStart;
exports.isIdentifierChar = isIdentifierChar;
exports.isIdentifierName = isIdentifierName;
let nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08c7\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9ffc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7ca\ua7f5-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
let nonASCIIidentifierChars = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf\u1ac0\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";
const nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
const nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
const astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
const astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

function isInAstralSet(code, set) {
  let pos = 0x10000;

  for (let i = 0, length = set.length; i < length; i += 2) {
    pos += set[i];
    if (pos > code) return false;
    pos += set[i + 1];
    if (pos >= code) return true;
  }

  return false;
}

function isIdentifierStart(code) {
  if (code < 65) return code === 36;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;

  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
  }

  return isInAstralSet(code, astralIdentifierStartCodes);
}

function isIdentifierChar(code) {
  if (code < 48) return code === 36;
  if (code < 58) return true;
  if (code < 65) return false;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;

  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
  }

  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
}

function isIdentifierName(name) {
  let isFirst = true;

  for (let i = 0; i < name.length; i++) {
    let cp = name.charCodeAt(i);

    if ((cp & 0xfc00) === 0xd800 && i + 1 < name.length) {
      const trail = name.charCodeAt(++i);

      if ((trail & 0xfc00) === 0xdc00) {
        cp = 0x10000 + ((cp & 0x3ff) << 10) + (trail & 0x3ff);
      }
    }

    if (isFirst) {
      isFirst = false;

      if (!isIdentifierStart(cp)) {
        return false;
      }
    } else if (!isIdentifierChar(cp)) {
      return false;
    }
  }

  return !isFirst;
}
});

var keyword = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isReservedWord = isReservedWord;
exports.isStrictReservedWord = isStrictReservedWord;
exports.isStrictBindOnlyReservedWord = isStrictBindOnlyReservedWord;
exports.isStrictBindReservedWord = isStrictBindReservedWord;
exports.isKeyword = isKeyword;
const reservedWords = {
  keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
  strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
  strictBind: ["eval", "arguments"]
};
const keywords = new Set(reservedWords.keyword);
const reservedWordsStrictSet = new Set(reservedWords.strict);
const reservedWordsStrictBindSet = new Set(reservedWords.strictBind);

function isReservedWord(word, inModule) {
  return inModule && word === "await" || word === "enum";
}

function isStrictReservedWord(word, inModule) {
  return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
}

function isStrictBindOnlyReservedWord(word) {
  return reservedWordsStrictBindSet.has(word);
}

function isStrictBindReservedWord(word, inModule) {
  return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
}

function isKeyword(word) {
  return keywords.has(word);
}
});

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isIdentifierName", {
  enumerable: true,
  get: function () {
    return identifier.isIdentifierName;
  }
});
Object.defineProperty(exports, "isIdentifierChar", {
  enumerable: true,
  get: function () {
    return identifier.isIdentifierChar;
  }
});
Object.defineProperty(exports, "isIdentifierStart", {
  enumerable: true,
  get: function () {
    return identifier.isIdentifierStart;
  }
});
Object.defineProperty(exports, "isReservedWord", {
  enumerable: true,
  get: function () {
    return keyword.isReservedWord;
  }
});
Object.defineProperty(exports, "isStrictBindOnlyReservedWord", {
  enumerable: true,
  get: function () {
    return keyword.isStrictBindOnlyReservedWord;
  }
});
Object.defineProperty(exports, "isStrictBindReservedWord", {
  enumerable: true,
  get: function () {
    return keyword.isStrictBindReservedWord;
  }
});
Object.defineProperty(exports, "isStrictReservedWord", {
  enumerable: true,
  get: function () {
    return keyword.isStrictReservedWord;
  }
});
Object.defineProperty(exports, "isKeyword", {
  enumerable: true,
  get: function () {
    return keyword.isKeyword;
  }
});
});

var isValidIdentifier_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidIdentifier;



function isValidIdentifier(name, reserved = true) {
  if (typeof name !== "string") return false;

  if (reserved) {
    if ((0, lib.isKeyword)(name) || (0, lib.isStrictReservedWord)(name, true)) {
      return false;
    }
  }

  return (0, lib.isIdentifierName)(name);
}
});

var constants = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOT_LOCAL_BINDING = exports.BLOCK_SCOPED_SYMBOL = exports.INHERIT_KEYS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = exports.ASSIGNMENT_OPERATORS = exports.BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.UPDATE_OPERATORS = exports.LOGICAL_OPERATORS = exports.COMMENT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = void 0;
const STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
exports.STATEMENT_OR_BLOCK_KEYS = STATEMENT_OR_BLOCK_KEYS;
const FLATTENABLE_KEYS = ["body", "expressions"];
exports.FLATTENABLE_KEYS = FLATTENABLE_KEYS;
const FOR_INIT_KEYS = ["left", "init"];
exports.FOR_INIT_KEYS = FOR_INIT_KEYS;
const COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
exports.COMMENT_KEYS = COMMENT_KEYS;
const LOGICAL_OPERATORS = ["||", "&&", "??"];
exports.LOGICAL_OPERATORS = LOGICAL_OPERATORS;
const UPDATE_OPERATORS = ["++", "--"];
exports.UPDATE_OPERATORS = UPDATE_OPERATORS;
const BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
exports.BOOLEAN_NUMBER_BINARY_OPERATORS = BOOLEAN_NUMBER_BINARY_OPERATORS;
const EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
exports.EQUALITY_BINARY_OPERATORS = EQUALITY_BINARY_OPERATORS;
const COMPARISON_BINARY_OPERATORS = [...EQUALITY_BINARY_OPERATORS, "in", "instanceof"];
exports.COMPARISON_BINARY_OPERATORS = COMPARISON_BINARY_OPERATORS;
const BOOLEAN_BINARY_OPERATORS = [...COMPARISON_BINARY_OPERATORS, ...BOOLEAN_NUMBER_BINARY_OPERATORS];
exports.BOOLEAN_BINARY_OPERATORS = BOOLEAN_BINARY_OPERATORS;
const NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
exports.NUMBER_BINARY_OPERATORS = NUMBER_BINARY_OPERATORS;
const BINARY_OPERATORS = ["+", ...NUMBER_BINARY_OPERATORS, ...BOOLEAN_BINARY_OPERATORS];
exports.BINARY_OPERATORS = BINARY_OPERATORS;
const ASSIGNMENT_OPERATORS = ["=", "+=", ...NUMBER_BINARY_OPERATORS.map(op => op + "="), ...LOGICAL_OPERATORS.map(op => op + "=")];
exports.ASSIGNMENT_OPERATORS = ASSIGNMENT_OPERATORS;
const BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
exports.BOOLEAN_UNARY_OPERATORS = BOOLEAN_UNARY_OPERATORS;
const NUMBER_UNARY_OPERATORS = ["+", "-", "~"];
exports.NUMBER_UNARY_OPERATORS = NUMBER_UNARY_OPERATORS;
const STRING_UNARY_OPERATORS = ["typeof"];
exports.STRING_UNARY_OPERATORS = STRING_UNARY_OPERATORS;
const UNARY_OPERATORS = ["void", "throw", ...BOOLEAN_UNARY_OPERATORS, ...NUMBER_UNARY_OPERATORS, ...STRING_UNARY_OPERATORS];
exports.UNARY_OPERATORS = UNARY_OPERATORS;
const INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["start", "loc", "end"]
};
exports.INHERIT_KEYS = INHERIT_KEYS;
const BLOCK_SCOPED_SYMBOL = Symbol.for("var used to be block scoped");
exports.BLOCK_SCOPED_SYMBOL = BLOCK_SCOPED_SYMBOL;
const NOT_LOCAL_BINDING = Symbol.for("should not be considered a local binding");
exports.NOT_LOCAL_BINDING = NOT_LOCAL_BINDING;
});

var validate_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validate;
exports.validateField = validateField;
exports.validateChild = validateChild;



function validate(node, key, val) {
  if (!node) return;
  const fields = definitions.NODE_FIELDS[node.type];
  if (!fields) return;
  const field = fields[key];
  validateField(node, key, val, field);
  validateChild(node, key, val);
}

function validateField(node, key, val, field) {
  if (!(field != null && field.validate)) return;
  if (field.optional && val == null) return;
  field.validate(node, key, val);
}

function validateChild(node, key, val) {
  if (val == null) return;
  const validate = definitions.NODE_PARENT_VALIDATIONS[val.type];
  if (!validate) return;
  validate(node, key, val);
}
});

var utils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = validate;
exports.typeIs = typeIs;
exports.validateType = validateType;
exports.validateOptional = validateOptional;
exports.validateOptionalType = validateOptionalType;
exports.arrayOf = arrayOf;
exports.arrayOfType = arrayOfType;
exports.validateArrayOfType = validateArrayOfType;
exports.assertEach = assertEach;
exports.assertOneOf = assertOneOf;
exports.assertNodeType = assertNodeType;
exports.assertNodeOrValueType = assertNodeOrValueType;
exports.assertValueType = assertValueType;
exports.assertShape = assertShape;
exports.assertOptionalChainStart = assertOptionalChainStart;
exports.chain = chain;
exports.default = defineType;
exports.NODE_PARENT_VALIDATIONS = exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.NODE_FIELDS = exports.FLIPPED_ALIAS_KEYS = exports.ALIAS_KEYS = exports.VISITOR_KEYS = void 0;





const VISITOR_KEYS = {};
exports.VISITOR_KEYS = VISITOR_KEYS;
const ALIAS_KEYS = {};
exports.ALIAS_KEYS = ALIAS_KEYS;
const FLIPPED_ALIAS_KEYS = {};
exports.FLIPPED_ALIAS_KEYS = FLIPPED_ALIAS_KEYS;
const NODE_FIELDS = {};
exports.NODE_FIELDS = NODE_FIELDS;
const BUILDER_KEYS = {};
exports.BUILDER_KEYS = BUILDER_KEYS;
const DEPRECATED_KEYS = {};
exports.DEPRECATED_KEYS = DEPRECATED_KEYS;
const NODE_PARENT_VALIDATIONS = {};
exports.NODE_PARENT_VALIDATIONS = NODE_PARENT_VALIDATIONS;

function getType(val) {
  if (Array.isArray(val)) {
    return "array";
  } else if (val === null) {
    return "null";
  } else {
    return typeof val;
  }
}

function validate(validate) {
  return {
    validate
  };
}

function typeIs(typeName) {
  return typeof typeName === "string" ? assertNodeType(typeName) : assertNodeType(...typeName);
}

function validateType(typeName) {
  return validate(typeIs(typeName));
}

function validateOptional(validate) {
  return {
    validate,
    optional: true
  };
}

function validateOptionalType(typeName) {
  return {
    validate: typeIs(typeName),
    optional: true
  };
}

function arrayOf(elementType) {
  return chain(assertValueType("array"), assertEach(elementType));
}

function arrayOfType(typeName) {
  return arrayOf(typeIs(typeName));
}

function validateArrayOfType(typeName) {
  return validate(arrayOfType(typeName));
}

function assertEach(callback) {
  function validator(node, key, val) {
    if (!Array.isArray(val)) return;

    for (let i = 0; i < val.length; i++) {
      const subkey = `${key}[${i}]`;
      const v = val[i];
      callback(node, subkey, v);
    }
  }

  validator.each = callback;
  return validator;
}

function assertOneOf(...values) {
  function validate(node, key, val) {
    if (values.indexOf(val) < 0) {
      throw new TypeError(`Property ${key} expected value to be one of ${JSON.stringify(values)} but got ${JSON.stringify(val)}`);
    }
  }

  validate.oneOf = values;
  return validate;
}

function assertNodeType(...types) {
  function validate(node, key, val) {
    for (const type of types) {
      if ((0, is_1.default)(type, val)) {
        (0, validate_1.validateChild)(node, key, val);
        return;
      }
    }

    throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(val == null ? void 0 : val.type)}`);
  }

  validate.oneOfNodeTypes = types;
  return validate;
}

function assertNodeOrValueType(...types) {
  function validate(node, key, val) {
    for (const type of types) {
      if (getType(val) === type || (0, is_1.default)(type, val)) {
        (0, validate_1.validateChild)(node, key, val);
        return;
      }
    }

    throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(val == null ? void 0 : val.type)}`);
  }

  validate.oneOfNodeOrValueTypes = types;
  return validate;
}

function assertValueType(type) {
  function validate(node, key, val) {
    const valid = getType(val) === type;

    if (!valid) {
      throw new TypeError(`Property ${key} expected type of ${type} but got ${getType(val)}`);
    }
  }

  validate.type = type;
  return validate;
}

function assertShape(shape) {
  function validate(node, key, val) {
    const errors = [];

    for (const property of Object.keys(shape)) {
      try {
        (0, validate_1.validateField)(node, property, val[property], shape[property]);
      } catch (error) {
        if (error instanceof TypeError) {
          errors.push(error.message);
          continue;
        }

        throw error;
      }
    }

    if (errors.length) {
      throw new TypeError(`Property ${key} of ${node.type} expected to have the following:\n${errors.join("\n")}`);
    }
  }

  validate.shapeOf = shape;
  return validate;
}

function assertOptionalChainStart() {
  function validate(node) {
    var _current;

    let current = node;

    while (node) {
      const {
        type
      } = current;

      if (type === "OptionalCallExpression") {
        if (current.optional) return;
        current = current.callee;
        continue;
      }

      if (type === "OptionalMemberExpression") {
        if (current.optional) return;
        current = current.object;
        continue;
      }

      break;
    }

    throw new TypeError(`Non-optional ${node.type} must chain from an optional OptionalMemberExpression or OptionalCallExpression. Found chain from ${(_current = current) == null ? void 0 : _current.type}`);
  }

  return validate;
}

function chain(...fns) {
  function validate(...args) {
    for (const fn of fns) {
      fn(...args);
    }
  }

  validate.chainOf = fns;

  if (fns.length >= 2 && "type" in fns[0] && fns[0].type === "array" && !("each" in fns[1])) {
    throw new Error(`An assertValueType("array") validator can only be followed by an assertEach(...) validator.`);
  }

  return validate;
}

const validTypeOpts = ["aliases", "builder", "deprecatedAlias", "fields", "inherits", "visitor", "validate"];
const validFieldKeys = ["default", "optional", "validate"];

function defineType(type, opts = {}) {
  const inherits = opts.inherits && store[opts.inherits] || {};
  let fields = opts.fields;

  if (!fields) {
    fields = {};

    if (inherits.fields) {
      const keys = Object.getOwnPropertyNames(inherits.fields);

      for (const key of keys) {
        const field = inherits.fields[key];
        const def = field.default;

        if (Array.isArray(def) ? def.length > 0 : def && typeof def === "object") {
          throw new Error("field defaults can only be primitives or empty arrays currently");
        }

        fields[key] = {
          default: Array.isArray(def) ? [] : def,
          optional: field.optional,
          validate: field.validate
        };
      }
    }
  }

  const visitor = opts.visitor || inherits.visitor || [];
  const aliases = opts.aliases || inherits.aliases || [];
  const builder = opts.builder || inherits.builder || opts.visitor || [];

  for (const k of Object.keys(opts)) {
    if (validTypeOpts.indexOf(k) === -1) {
      throw new Error(`Unknown type option "${k}" on ${type}`);
    }
  }

  if (opts.deprecatedAlias) {
    DEPRECATED_KEYS[opts.deprecatedAlias] = type;
  }

  for (const key of visitor.concat(builder)) {
    fields[key] = fields[key] || {};
  }

  for (const key of Object.keys(fields)) {
    const field = fields[key];

    if (field.default !== undefined && builder.indexOf(key) === -1) {
      field.optional = true;
    }

    if (field.default === undefined) {
      field.default = null;
    } else if (!field.validate && field.default != null) {
      field.validate = assertValueType(getType(field.default));
    }

    for (const k of Object.keys(field)) {
      if (validFieldKeys.indexOf(k) === -1) {
        throw new Error(`Unknown field key "${k}" on ${type}.${key}`);
      }
    }
  }

  VISITOR_KEYS[type] = opts.visitor = visitor;
  BUILDER_KEYS[type] = opts.builder = builder;
  NODE_FIELDS[type] = opts.fields = fields;
  ALIAS_KEYS[type] = opts.aliases = aliases;
  aliases.forEach(alias => {
    FLIPPED_ALIAS_KEYS[alias] = FLIPPED_ALIAS_KEYS[alias] || [];
    FLIPPED_ALIAS_KEYS[alias].push(type);
  });

  if (opts.validate) {
    NODE_PARENT_VALIDATIONS[type] = opts.validate;
  }

  store[type] = opts;
}

const store = {};
});

var core = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classMethodOrDeclareMethodCommon = exports.classMethodOrPropertyCommon = exports.patternLikeCommon = exports.functionDeclarationCommon = exports.functionTypeAnnotationCommon = exports.functionCommon = void 0;











(0, utils.default)("ArrayExpression", {
  fields: {
    elements: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
      default:  [] 
    }
  },
  visitor: ["elements"],
  aliases: ["Expression"]
});
(0, utils.default)("AssignmentExpression", {
  fields: {
    operator: {
      validate: function () {
        {
          return (0, utils.assertValueType)("string");
        }
      }()
    },
    left: {
      validate:  (0, utils.assertNodeType)("LVal") 
    },
    right: {
      validate: (0, utils.assertNodeType)("Expression")
    }
  },
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Expression"]
});
(0, utils.default)("BinaryExpression", {
  builder: ["operator", "left", "right"],
  fields: {
    operator: {
      validate: (0, utils.assertOneOf)(...constants.BINARY_OPERATORS)
    },
    left: {
      validate: function () {
        const expression = (0, utils.assertNodeType)("Expression");
        const inOp = (0, utils.assertNodeType)("Expression", "PrivateName");

        const validator = function (node, key, val) {
          const validator = node.operator === "in" ? inOp : expression;
          validator(node, key, val);
        };

        validator.oneOfNodeTypes = ["Expression", "PrivateName"];
        return validator;
      }()
    },
    right: {
      validate: (0, utils.assertNodeType)("Expression")
    }
  },
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"]
});
(0, utils.default)("InterpreterDirective", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, utils.assertValueType)("string")
    }
  }
});
(0, utils.default)("Directive", {
  visitor: ["value"],
  fields: {
    value: {
      validate: (0, utils.assertNodeType)("DirectiveLiteral")
    }
  }
});
(0, utils.default)("DirectiveLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, utils.assertValueType)("string")
    }
  }
});
(0, utils.default)("BlockStatement", {
  builder: ["body", "directives"],
  visitor: ["directives", "body"],
  fields: {
    directives: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block", "Statement"]
});
(0, utils.default)("BreakStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, utils.assertNodeType)("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
(0, utils.default)("CallExpression", {
  visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
  builder: ["callee", "arguments"],
  aliases: ["Expression"],
  fields: Object.assign({
    callee: {
      validate: (0, utils.assertNodeType)("Expression", "V8IntrinsicIdentifier")
    },
    arguments: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
    }
  },  {
    optional: {
      validate: (0, utils.assertOneOf)(true, false),
      optional: true
    }
  } , {
    typeArguments: {
      validate: (0, utils.assertNodeType)("TypeParameterInstantiation"),
      optional: true
    },
    typeParameters: {
      validate: (0, utils.assertNodeType)("TSTypeParameterInstantiation"),
      optional: true
    }
  })
});
(0, utils.default)("CatchClause", {
  visitor: ["param", "body"],
  fields: {
    param: {
      validate: (0, utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern"),
      optional: true
    },
    body: {
      validate: (0, utils.assertNodeType)("BlockStatement")
    }
  },
  aliases: ["Scopable", "BlockParent"]
});
(0, utils.default)("ConditionalExpression", {
  visitor: ["test", "consequent", "alternate"],
  fields: {
    test: {
      validate: (0, utils.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, utils.assertNodeType)("Expression")
    },
    alternate: {
      validate: (0, utils.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression", "Conditional"]
});
(0, utils.default)("ContinueStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, utils.assertNodeType)("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
(0, utils.default)("DebuggerStatement", {
  aliases: ["Statement"]
});
(0, utils.default)("DoWhileStatement", {
  visitor: ["test", "body"],
  fields: {
    test: {
      validate: (0, utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, utils.assertNodeType)("Statement")
    }
  },
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
});
(0, utils.default)("EmptyStatement", {
  aliases: ["Statement"]
});
(0, utils.default)("ExpressionStatement", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, utils.assertNodeType)("Expression")
    }
  },
  aliases: ["Statement", "ExpressionWrapper"]
});
(0, utils.default)("File", {
  builder: ["program", "comments", "tokens"],
  visitor: ["program"],
  fields: {
    program: {
      validate: (0, utils.assertNodeType)("Program")
    },
    comments: {
      validate:  Object.assign(() => {}, {
        each: {
          oneOfNodeTypes: ["CommentBlock", "CommentLine"]
        }
      }) ,
      optional: true
    },
    tokens: {
      validate: (0, utils.assertEach)(Object.assign(() => {}, {
        type: "any"
      })),
      optional: true
    }
  }
});
(0, utils.default)("ForInStatement", {
  visitor: ["left", "right", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate:  (0, utils.assertNodeType)("VariableDeclaration", "LVal") 
    },
    right: {
      validate: (0, utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, utils.assertNodeType)("Statement")
    }
  }
});
(0, utils.default)("ForStatement", {
  visitor: ["init", "test", "update", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
  fields: {
    init: {
      validate: (0, utils.assertNodeType)("VariableDeclaration", "Expression"),
      optional: true
    },
    test: {
      validate: (0, utils.assertNodeType)("Expression"),
      optional: true
    },
    update: {
      validate: (0, utils.assertNodeType)("Expression"),
      optional: true
    },
    body: {
      validate: (0, utils.assertNodeType)("Statement")
    }
  }
});
const functionCommon = {
  params: {
    validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Identifier", "Pattern", "RestElement")))
  },
  generator: {
    default: false
  },
  async: {
    default: false
  }
};
exports.functionCommon = functionCommon;
const functionTypeAnnotationCommon = {
  returnType: {
    validate: (0, utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: true
  },
  typeParameters: {
    validate: (0, utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
    optional: true
  }
};
exports.functionTypeAnnotationCommon = functionTypeAnnotationCommon;
const functionDeclarationCommon = Object.assign({}, functionCommon, {
  declare: {
    validate: (0, utils.assertValueType)("boolean"),
    optional: true
  },
  id: {
    validate: (0, utils.assertNodeType)("Identifier"),
    optional: true
  }
});
exports.functionDeclarationCommon = functionDeclarationCommon;
(0, utils.default)("FunctionDeclaration", {
  builder: ["id", "params", "body", "generator", "async"],
  visitor: ["id", "params", "body", "returnType", "typeParameters"],
  fields: Object.assign({}, functionDeclarationCommon, functionTypeAnnotationCommon, {
    body: {
      validate: (0, utils.assertNodeType)("BlockStatement")
    }
  }),
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"],
  validate: function () {
    return () => {};
  }()
});
(0, utils.default)("FunctionExpression", {
  inherits: "FunctionDeclaration",
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: Object.assign({}, functionCommon, functionTypeAnnotationCommon, {
    id: {
      validate: (0, utils.assertNodeType)("Identifier"),
      optional: true
    },
    body: {
      validate: (0, utils.assertNodeType)("BlockStatement")
    }
  })
});
const patternLikeCommon = {
  typeAnnotation: {
    validate: (0, utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: true
  },
  decorators: {
    validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator")))
  }
};
exports.patternLikeCommon = patternLikeCommon;
(0, utils.default)("Identifier", {
  builder: ["name"],
  visitor: ["typeAnnotation", "decorators"],
  aliases: ["Expression", "PatternLike", "LVal", "TSEntityName"],
  fields: Object.assign({}, patternLikeCommon, {
    name: {
      validate: (0, utils.chain)((0, utils.assertValueType)("string"), Object.assign(function (node, key, val) {
        return;
      }, {
        type: "string"
      }))
    },
    optional: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    }
  }),

  validate(parent, key, node) {
    return;
  }

});
(0, utils.default)("IfStatement", {
  visitor: ["test", "consequent", "alternate"],
  aliases: ["Statement", "Conditional"],
  fields: {
    test: {
      validate: (0, utils.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, utils.assertNodeType)("Statement")
    },
    alternate: {
      optional: true,
      validate: (0, utils.assertNodeType)("Statement")
    }
  }
});
(0, utils.default)("LabeledStatement", {
  visitor: ["label", "body"],
  aliases: ["Statement"],
  fields: {
    label: {
      validate: (0, utils.assertNodeType)("Identifier")
    },
    body: {
      validate: (0, utils.assertNodeType)("Statement")
    }
  }
});
(0, utils.default)("StringLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, utils.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, utils.default)("NumericLiteral", {
  builder: ["value"],
  deprecatedAlias: "NumberLiteral",
  fields: {
    value: {
      validate: (0, utils.assertValueType)("number")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, utils.default)("NullLiteral", {
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, utils.default)("BooleanLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, utils.assertValueType)("boolean")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, utils.default)("RegExpLiteral", {
  builder: ["pattern", "flags"],
  deprecatedAlias: "RegexLiteral",
  aliases: ["Expression", "Pureish", "Literal"],
  fields: {
    pattern: {
      validate: (0, utils.assertValueType)("string")
    },
    flags: {
      validate: (0, utils.chain)((0, utils.assertValueType)("string"), Object.assign(function (node, key, val) {
        return;
      }, {
        type: "string"
      })),
      default: ""
    }
  }
});
(0, utils.default)("LogicalExpression", {
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"],
  fields: {
    operator: {
      validate: (0, utils.assertOneOf)(...constants.LOGICAL_OPERATORS)
    },
    left: {
      validate: (0, utils.assertNodeType)("Expression")
    },
    right: {
      validate: (0, utils.assertNodeType)("Expression")
    }
  }
});
(0, utils.default)("MemberExpression", {
  builder: ["object", "property", "computed", ...( ["optional"] )],
  visitor: ["object", "property"],
  aliases: ["Expression", "LVal"],
  fields: Object.assign({
    object: {
      validate: (0, utils.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        const normal = (0, utils.assertNodeType)("Identifier", "PrivateName");
        const computed = (0, utils.assertNodeType)("Expression");

        const validator = function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };

        validator.oneOfNodeTypes = ["Expression", "Identifier", "PrivateName"];
        return validator;
      }()
    },
    computed: {
      default: false
    }
  },  {
    optional: {
      validate: (0, utils.assertOneOf)(true, false),
      optional: true
    }
  } )
});
(0, utils.default)("NewExpression", {
  inherits: "CallExpression"
});
(0, utils.default)("Program", {
  visitor: ["directives", "body"],
  builder: ["body", "directives", "sourceType", "interpreter"],
  fields: {
    sourceFile: {
      validate: (0, utils.assertValueType)("string")
    },
    sourceType: {
      validate: (0, utils.assertOneOf)("script", "module"),
      default: "script"
    },
    interpreter: {
      validate: (0, utils.assertNodeType)("InterpreterDirective"),
      default: null,
      optional: true
    },
    directives: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block"]
});
(0, utils.default)("ObjectExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadElement")))
    }
  }
});
(0, utils.default)("ObjectMethod", {
  builder: ["kind", "key", "params", "body", "computed", "generator", "async"],
  fields: Object.assign({}, functionCommon, functionTypeAnnotationCommon, {
    kind: Object.assign({
      validate: (0, utils.assertOneOf)("method", "get", "set")
    },  {
      default: "method"
    } ),
    computed: {
      default: false
    },
    key: {
      validate: function () {
        const normal = (0, utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
        const computed = (0, utils.assertNodeType)("Expression");

        const validator = function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };

        validator.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral"];
        return validator;
      }()
    },
    decorators: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
      optional: true
    },
    body: {
      validate: (0, utils.assertNodeType)("BlockStatement")
    }
  }),
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
});
(0, utils.default)("ObjectProperty", {
  builder: ["key", "value", "computed", "shorthand", ...( ["decorators"] )],
  fields: {
    computed: {
      default: false
    },
    key: {
      validate: function () {
        const normal = (0, utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
        const computed = (0, utils.assertNodeType)("Expression");

        const validator = function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };

        validator.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral"];
        return validator;
      }()
    },
    value: {
      validate: (0, utils.assertNodeType)("Expression", "PatternLike")
    },
    shorthand: {
      validate: (0, utils.chain)((0, utils.assertValueType)("boolean"), Object.assign(function (node, key, val) {
        return;
      }, {
        type: "boolean"
      }), function (node, key, val) {
        return;
      }),
      default: false
    },
    decorators: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
      optional: true
    }
  },
  visitor: ["key", "value", "decorators"],
  aliases: ["UserWhitespacable", "Property", "ObjectMember"],
  validate: function () {
    const pattern = (0, utils.assertNodeType)("Identifier", "Pattern");
    const expression = (0, utils.assertNodeType)("Expression");
    return function (parent, key, node) {
      return;
    };
  }()
});
(0, utils.default)("RestElement", {
  visitor: ["argument", "typeAnnotation"],
  builder: ["argument"],
  aliases: ["LVal", "PatternLike"],
  deprecatedAlias: "RestProperty",
  fields: Object.assign({}, patternLikeCommon, {
    argument: {
      validate:  (0, utils.assertNodeType)("LVal") 
    },
    optional: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    }
  }),

  validate(parent, key) {
    return;
  }

});
(0, utils.default)("ReturnStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, utils.assertNodeType)("Expression"),
      optional: true
    }
  }
});
(0, utils.default)("SequenceExpression", {
  visitor: ["expressions"],
  fields: {
    expressions: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Expression")))
    }
  },
  aliases: ["Expression"]
});
(0, utils.default)("ParenthesizedExpression", {
  visitor: ["expression"],
  aliases: ["Expression", "ExpressionWrapper"],
  fields: {
    expression: {
      validate: (0, utils.assertNodeType)("Expression")
    }
  }
});
(0, utils.default)("SwitchCase", {
  visitor: ["test", "consequent"],
  fields: {
    test: {
      validate: (0, utils.assertNodeType)("Expression"),
      optional: true
    },
    consequent: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Statement")))
    }
  }
});
(0, utils.default)("SwitchStatement", {
  visitor: ["discriminant", "cases"],
  aliases: ["Statement", "BlockParent", "Scopable"],
  fields: {
    discriminant: {
      validate: (0, utils.assertNodeType)("Expression")
    },
    cases: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("SwitchCase")))
    }
  }
});
(0, utils.default)("ThisExpression", {
  aliases: ["Expression"]
});
(0, utils.default)("ThrowStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, utils.assertNodeType)("Expression")
    }
  }
});
(0, utils.default)("TryStatement", {
  visitor: ["block", "handler", "finalizer"],
  aliases: ["Statement"],
  fields: {
    block: {
      validate: (0, utils.chain)((0, utils.assertNodeType)("BlockStatement"), Object.assign(function (node) {
        return;
      }, {
        oneOfNodeTypes: ["BlockStatement"]
      }))
    },
    handler: {
      optional: true,
      validate: (0, utils.assertNodeType)("CatchClause")
    },
    finalizer: {
      optional: true,
      validate: (0, utils.assertNodeType)("BlockStatement")
    }
  }
});
(0, utils.default)("UnaryExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: true
    },
    argument: {
      validate: (0, utils.assertNodeType)("Expression")
    },
    operator: {
      validate: (0, utils.assertOneOf)(...constants.UNARY_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["UnaryLike", "Expression"]
});
(0, utils.default)("UpdateExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: false
    },
    argument: {
      validate:  (0, utils.assertNodeType)("Expression") 
    },
    operator: {
      validate: (0, utils.assertOneOf)(...constants.UPDATE_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["Expression"]
});
(0, utils.default)("VariableDeclaration", {
  builder: ["kind", "declarations"],
  visitor: ["declarations"],
  aliases: ["Statement", "Declaration"],
  fields: {
    declare: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    },
    kind: {
      validate: (0, utils.assertOneOf)("var", "let", "const")
    },
    declarations: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("VariableDeclarator")))
    }
  },

  validate(parent, key, node) {
    return;
  }

});
(0, utils.default)("VariableDeclarator", {
  visitor: ["id", "init"],
  fields: {
    id: {
      validate: function () {
        {
          return (0, utils.assertNodeType)("LVal");
        }
      }()
    },
    definite: {
      optional: true,
      validate: (0, utils.assertValueType)("boolean")
    },
    init: {
      optional: true,
      validate: (0, utils.assertNodeType)("Expression")
    }
  }
});
(0, utils.default)("WhileStatement", {
  visitor: ["test", "body"],
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
  fields: {
    test: {
      validate: (0, utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, utils.assertNodeType)("Statement")
    }
  }
});
(0, utils.default)("WithStatement", {
  visitor: ["object", "body"],
  aliases: ["Statement"],
  fields: {
    object: {
      validate: (0, utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, utils.assertNodeType)("Statement")
    }
  }
});
(0, utils.default)("AssignmentPattern", {
  visitor: ["left", "right", "decorators"],
  builder: ["left", "right"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon, {
    left: {
      validate: (0, utils.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression")
    },
    right: {
      validate: (0, utils.assertNodeType)("Expression")
    },
    decorators: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
      optional: true
    }
  })
});
(0, utils.default)("ArrayPattern", {
  visitor: ["elements", "typeAnnotation"],
  builder: ["elements"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon, {
    elements: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeOrValueType)("null", "PatternLike")))
    },
    decorators: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
      optional: true
    },
    optional: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    }
  })
});
(0, utils.default)("ArrowFunctionExpression", {
  builder: ["params", "body", "async"],
  visitor: ["params", "body", "returnType", "typeParameters"],
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: Object.assign({}, functionCommon, functionTypeAnnotationCommon, {
    expression: {
      validate: (0, utils.assertValueType)("boolean")
    },
    body: {
      validate: (0, utils.assertNodeType)("BlockStatement", "Expression")
    }
  })
});
(0, utils.default)("ClassBody", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "TSDeclareMethod", "TSIndexSignature")))
    }
  }
});
(0, utils.default)("ClassExpression", {
  builder: ["id", "superClass", "body", "decorators"],
  visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
  aliases: ["Scopable", "Class", "Expression"],
  fields: {
    id: {
      validate: (0, utils.assertNodeType)("Identifier"),
      optional: true
    },
    typeParameters: {
      validate: (0, utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: true
    },
    body: {
      validate: (0, utils.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: true,
      validate: (0, utils.assertNodeType)("Expression")
    },
    superTypeParameters: {
      validate: (0, utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    },
    implements: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
      optional: true
    },
    decorators: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
      optional: true
    },
    mixins: {
      validate: (0, utils.assertNodeType)("InterfaceExtends"),
      optional: true
    }
  }
});
(0, utils.default)("ClassDeclaration", {
  inherits: "ClassExpression",
  aliases: ["Scopable", "Class", "Statement", "Declaration"],
  fields: {
    id: {
      validate: (0, utils.assertNodeType)("Identifier")
    },
    typeParameters: {
      validate: (0, utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: true
    },
    body: {
      validate: (0, utils.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: true,
      validate: (0, utils.assertNodeType)("Expression")
    },
    superTypeParameters: {
      validate: (0, utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    },
    implements: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
      optional: true
    },
    decorators: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
      optional: true
    },
    mixins: {
      validate: (0, utils.assertNodeType)("InterfaceExtends"),
      optional: true
    },
    declare: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    },
    abstract: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    }
  },
  validate: function () {
    const identifier = (0, utils.assertNodeType)("Identifier");
    return function (parent, key, node) {
      return;
    };
  }()
});
(0, utils.default)("ExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    source: {
      validate: (0, utils.assertNodeType)("StringLiteral")
    },
    exportKind: (0, utils.validateOptional)((0, utils.assertOneOf)("type", "value")),
    assertions: {
      optional: true,
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("ImportAttribute")))
    }
  }
});
(0, utils.default)("ExportDefaultDeclaration", {
  visitor: ["declaration"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      validate: (0, utils.assertNodeType)("FunctionDeclaration", "TSDeclareFunction", "ClassDeclaration", "Expression")
    },
    exportKind: (0, utils.validateOptional)((0, utils.assertOneOf)("value"))
  }
});
(0, utils.default)("ExportNamedDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      optional: true,
      validate: (0, utils.chain)((0, utils.assertNodeType)("Declaration"), Object.assign(function (node, key, val) {
        return;
      }, {
        oneOfNodeTypes: ["Declaration"]
      }), function (node, key, val) {
        return;
      })
    },
    assertions: {
      optional: true,
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("ImportAttribute")))
    },
    specifiers: {
      default: [],
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)(function () {
        const sourced = (0, utils.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier");
        const sourceless = (0, utils.assertNodeType)("ExportSpecifier");
        return sourced;
      }()))
    },
    source: {
      validate: (0, utils.assertNodeType)("StringLiteral"),
      optional: true
    },
    exportKind: (0, utils.validateOptional)((0, utils.assertOneOf)("type", "value"))
  }
});
(0, utils.default)("ExportSpecifier", {
  visitor: ["local", "exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, utils.assertNodeType)("Identifier")
    },
    exported: {
      validate: (0, utils.assertNodeType)("Identifier", "StringLiteral")
    }
  }
});
(0, utils.default)("ForOfStatement", {
  visitor: ["left", "right", "body"],
  builder: ["left", "right", "body", "await"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: function () {
        {
          return (0, utils.assertNodeType)("VariableDeclaration", "LVal");
        }
      }()
    },
    right: {
      validate: (0, utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, utils.assertNodeType)("Statement")
    },
    await: {
      default: false
    }
  }
});
(0, utils.default)("ImportDeclaration", {
  visitor: ["specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration"],
  fields: {
    assertions: {
      optional: true,
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("ImportAttribute")))
    },
    specifiers: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
    },
    source: {
      validate: (0, utils.assertNodeType)("StringLiteral")
    },
    importKind: {
      validate: (0, utils.assertOneOf)("type", "typeof", "value"),
      optional: true
    }
  }
});
(0, utils.default)("ImportDefaultSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, utils.assertNodeType)("Identifier")
    }
  }
});
(0, utils.default)("ImportNamespaceSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, utils.assertNodeType)("Identifier")
    }
  }
});
(0, utils.default)("ImportSpecifier", {
  visitor: ["local", "imported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, utils.assertNodeType)("Identifier")
    },
    imported: {
      validate: (0, utils.assertNodeType)("Identifier", "StringLiteral")
    },
    importKind: {
      validate: (0, utils.assertOneOf)("type", "typeof"),
      optional: true
    }
  }
});
(0, utils.default)("MetaProperty", {
  visitor: ["meta", "property"],
  aliases: ["Expression"],
  fields: {
    meta: {
      validate: (0, utils.chain)((0, utils.assertNodeType)("Identifier"), Object.assign(function (node, key, val) {
        return;
      }, {
        oneOfNodeTypes: ["Identifier"]
      }))
    },
    property: {
      validate: (0, utils.assertNodeType)("Identifier")
    }
  }
});
const classMethodOrPropertyCommon = {
  abstract: {
    validate: (0, utils.assertValueType)("boolean"),
    optional: true
  },
  accessibility: {
    validate: (0, utils.assertOneOf)("public", "private", "protected"),
    optional: true
  },
  static: {
    default: false
  },
  override: {
    default: false
  },
  computed: {
    default: false
  },
  optional: {
    validate: (0, utils.assertValueType)("boolean"),
    optional: true
  },
  key: {
    validate: (0, utils.chain)(function () {
      const normal = (0, utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
      const computed = (0, utils.assertNodeType)("Expression");
      return function (node, key, val) {
        const validator = node.computed ? computed : normal;
        validator(node, key, val);
      };
    }(), (0, utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "Expression"))
  }
};
exports.classMethodOrPropertyCommon = classMethodOrPropertyCommon;
const classMethodOrDeclareMethodCommon = Object.assign({}, functionCommon, classMethodOrPropertyCommon, {
  params: {
    validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Identifier", "Pattern", "RestElement", "TSParameterProperty")))
  },
  kind: {
    validate: (0, utils.assertOneOf)("get", "set", "method", "constructor"),
    default: "method"
  },
  access: {
    validate: (0, utils.chain)((0, utils.assertValueType)("string"), (0, utils.assertOneOf)("public", "private", "protected")),
    optional: true
  },
  decorators: {
    validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
    optional: true
  }
});
exports.classMethodOrDeclareMethodCommon = classMethodOrDeclareMethodCommon;
(0, utils.default)("ClassMethod", {
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
  builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  fields: Object.assign({}, classMethodOrDeclareMethodCommon, functionTypeAnnotationCommon, {
    body: {
      validate: (0, utils.assertNodeType)("BlockStatement")
    }
  })
});
(0, utils.default)("ObjectPattern", {
  visitor: ["properties", "typeAnnotation", "decorators"],
  builder: ["properties"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon, {
    properties: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("RestElement", "ObjectProperty")))
    }
  })
});
(0, utils.default)("SpreadElement", {
  visitor: ["argument"],
  aliases: ["UnaryLike"],
  deprecatedAlias: "SpreadProperty",
  fields: {
    argument: {
      validate: (0, utils.assertNodeType)("Expression")
    }
  }
});
(0, utils.default)("Super", {
  aliases: ["Expression"]
});
(0, utils.default)("TaggedTemplateExpression", {
  visitor: ["tag", "quasi", "typeParameters"],
  builder: ["tag", "quasi"],
  aliases: ["Expression"],
  fields: {
    tag: {
      validate: (0, utils.assertNodeType)("Expression")
    },
    quasi: {
      validate: (0, utils.assertNodeType)("TemplateLiteral")
    },
    typeParameters: {
      validate: (0, utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
(0, utils.default)("TemplateElement", {
  builder: ["value", "tail"],
  fields: {
    value: {
      validate: (0, utils.assertShape)({
        raw: {
          validate: (0, utils.assertValueType)("string")
        },
        cooked: {
          validate: (0, utils.assertValueType)("string"),
          optional: true
        }
      })
    },
    tail: {
      default: false
    }
  }
});
(0, utils.default)("TemplateLiteral", {
  visitor: ["quasis", "expressions"],
  aliases: ["Expression", "Literal"],
  fields: {
    quasis: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("TemplateElement")))
    },
    expressions: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Expression", "TSType")), function (node, key, val) {
        if (node.quasis.length !== val.length + 1) {
          throw new TypeError(`Number of ${node.type} quasis should be exactly one more than the number of expressions.\nExpected ${val.length + 1} quasis but got ${node.quasis.length}`);
        }
      })
    }
  }
});
(0, utils.default)("YieldExpression", {
  builder: ["argument", "delegate"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    delegate: {
      validate: (0, utils.chain)((0, utils.assertValueType)("boolean"), Object.assign(function (node, key, val) {
        return;
      }, {
        type: "boolean"
      })),
      default: false
    },
    argument: {
      optional: true,
      validate: (0, utils.assertNodeType)("Expression")
    }
  }
});
(0, utils.default)("AwaitExpression", {
  builder: ["argument"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    argument: {
      validate: (0, utils.assertNodeType)("Expression")
    }
  }
});
(0, utils.default)("Import", {
  aliases: ["Expression"]
});
(0, utils.default)("BigIntLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, utils.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, utils.default)("ExportNamespaceSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, utils.assertNodeType)("Identifier")
    }
  }
});
(0, utils.default)("OptionalMemberExpression", {
  builder: ["object", "property", "computed", "optional"],
  visitor: ["object", "property"],
  aliases: ["Expression"],
  fields: {
    object: {
      validate: (0, utils.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        const normal = (0, utils.assertNodeType)("Identifier");
        const computed = (0, utils.assertNodeType)("Expression");

        const validator = function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };

        validator.oneOfNodeTypes = ["Expression", "Identifier"];
        return validator;
      }()
    },
    computed: {
      default: false
    },
    optional: {
      validate:  (0, utils.assertValueType)("boolean") 
    }
  }
});
(0, utils.default)("OptionalCallExpression", {
  visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
  builder: ["callee", "arguments", "optional"],
  aliases: ["Expression"],
  fields: {
    callee: {
      validate: (0, utils.assertNodeType)("Expression")
    },
    arguments: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
    },
    optional: {
      validate:  (0, utils.assertValueType)("boolean") 
    },
    typeArguments: {
      validate: (0, utils.assertNodeType)("TypeParameterInstantiation"),
      optional: true
    },
    typeParameters: {
      validate: (0, utils.assertNodeType)("TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
(0, utils.default)("ClassProperty", {
  visitor: ["key", "value", "typeAnnotation", "decorators"],
  builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
  aliases: ["Property"],
  fields: Object.assign({}, classMethodOrPropertyCommon, {
    value: {
      validate: (0, utils.assertNodeType)("Expression"),
      optional: true
    },
    definite: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    },
    typeAnnotation: {
      validate: (0, utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    decorators: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
      optional: true
    },
    readonly: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    },
    declare: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    },
    variance: {
      validate: (0, utils.assertNodeType)("Variance"),
      optional: true
    }
  })
});
(0, utils.default)("ClassPrivateProperty", {
  visitor: ["key", "value", "decorators", "typeAnnotation"],
  builder: ["key", "value", "decorators", "static"],
  aliases: ["Property", "Private"],
  fields: {
    key: {
      validate: (0, utils.assertNodeType)("PrivateName")
    },
    value: {
      validate: (0, utils.assertNodeType)("Expression"),
      optional: true
    },
    typeAnnotation: {
      validate: (0, utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    decorators: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
      optional: true
    },
    readonly: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    },
    definite: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    },
    variance: {
      validate: (0, utils.assertNodeType)("Variance"),
      optional: true
    }
  }
});
(0, utils.default)("ClassPrivateMethod", {
  builder: ["kind", "key", "params", "body", "static"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
  fields: Object.assign({}, classMethodOrDeclareMethodCommon, functionTypeAnnotationCommon, {
    key: {
      validate: (0, utils.assertNodeType)("PrivateName")
    },
    body: {
      validate: (0, utils.assertNodeType)("BlockStatement")
    }
  })
});
(0, utils.default)("PrivateName", {
  visitor: ["id"],
  aliases: ["Private"],
  fields: {
    id: {
      validate: (0, utils.assertNodeType)("Identifier")
    }
  }
});
});

const defineInterfaceishType = (name, typeParameterType = "TypeParameterDeclaration") => {
  (0, utils.default)(name, {
    builder: ["id", "typeParameters", "extends", "body"],
    visitor: ["id", "typeParameters", "extends", "mixins", "implements", "body"],
    aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, utils.validateType)("Identifier"),
      typeParameters: (0, utils.validateOptionalType)(typeParameterType),
      extends: (0, utils.validateOptional)((0, utils.arrayOfType)("InterfaceExtends")),
      mixins: (0, utils.validateOptional)((0, utils.arrayOfType)("InterfaceExtends")),
      implements: (0, utils.validateOptional)((0, utils.arrayOfType)("ClassImplements")),
      body: (0, utils.validateType)("ObjectTypeAnnotation")
    }
  });
};

(0, utils.default)("AnyTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, utils.default)("ArrayTypeAnnotation", {
  visitor: ["elementType"],
  aliases: ["Flow", "FlowType"],
  fields: {
    elementType: (0, utils.validateType)("FlowType")
  }
});
(0, utils.default)("BooleanTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, utils.default)("BooleanLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["Flow", "FlowType"],
  fields: {
    value: (0, utils.validate)((0, utils.assertValueType)("boolean"))
  }
});
(0, utils.default)("NullLiteralTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, utils.default)("ClassImplements", {
  visitor: ["id", "typeParameters"],
  aliases: ["Flow"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    typeParameters: (0, utils.validateOptionalType)("TypeParameterInstantiation")
  }
});
defineInterfaceishType("DeclareClass");
(0, utils.default)("DeclareFunction", {
  visitor: ["id"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    predicate: (0, utils.validateOptionalType)("DeclaredPredicate")
  }
});
defineInterfaceishType("DeclareInterface");
(0, utils.default)("DeclareModule", {
  builder: ["id", "body", "kind"],
  visitor: ["id", "body"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, utils.validateType)(["Identifier", "StringLiteral"]),
    body: (0, utils.validateType)("BlockStatement"),
    kind: (0, utils.validateOptional)((0, utils.assertOneOf)("CommonJS", "ES"))
  }
});
(0, utils.default)("DeclareModuleExports", {
  visitor: ["typeAnnotation"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    typeAnnotation: (0, utils.validateType)("TypeAnnotation")
  }
});
(0, utils.default)("DeclareTypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    typeParameters: (0, utils.validateOptionalType)("TypeParameterDeclaration"),
    right: (0, utils.validateType)("FlowType")
  }
});
(0, utils.default)("DeclareOpaqueType", {
  visitor: ["id", "typeParameters", "supertype"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    typeParameters: (0, utils.validateOptionalType)("TypeParameterDeclaration"),
    supertype: (0, utils.validateOptionalType)("FlowType"),
    impltype: (0, utils.validateOptionalType)("FlowType")
  }
});
(0, utils.default)("DeclareVariable", {
  visitor: ["id"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, utils.validateType)("Identifier")
  }
});
(0, utils.default)("DeclareExportDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    declaration: (0, utils.validateOptionalType)("Flow"),
    specifiers: (0, utils.validateOptional)((0, utils.arrayOfType)(["ExportSpecifier", "ExportNamespaceSpecifier"])),
    source: (0, utils.validateOptionalType)("StringLiteral"),
    default: (0, utils.validateOptional)((0, utils.assertValueType)("boolean"))
  }
});
(0, utils.default)("DeclareExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    source: (0, utils.validateType)("StringLiteral"),
    exportKind: (0, utils.validateOptional)((0, utils.assertOneOf)("type", "value"))
  }
});
(0, utils.default)("DeclaredPredicate", {
  visitor: ["value"],
  aliases: ["Flow", "FlowPredicate"],
  fields: {
    value: (0, utils.validateType)("Flow")
  }
});
(0, utils.default)("ExistsTypeAnnotation", {
  aliases: ["Flow", "FlowType"]
});
(0, utils.default)("FunctionTypeAnnotation", {
  visitor: ["typeParameters", "params", "rest", "returnType"],
  aliases: ["Flow", "FlowType"],
  fields: {
    typeParameters: (0, utils.validateOptionalType)("TypeParameterDeclaration"),
    params: (0, utils.validate)((0, utils.arrayOfType)("FunctionTypeParam")),
    rest: (0, utils.validateOptionalType)("FunctionTypeParam"),
    this: (0, utils.validateOptionalType)("FunctionTypeParam"),
    returnType: (0, utils.validateType)("FlowType")
  }
});
(0, utils.default)("FunctionTypeParam", {
  visitor: ["name", "typeAnnotation"],
  aliases: ["Flow"],
  fields: {
    name: (0, utils.validateOptionalType)("Identifier"),
    typeAnnotation: (0, utils.validateType)("FlowType"),
    optional: (0, utils.validateOptional)((0, utils.assertValueType)("boolean"))
  }
});
(0, utils.default)("GenericTypeAnnotation", {
  visitor: ["id", "typeParameters"],
  aliases: ["Flow", "FlowType"],
  fields: {
    id: (0, utils.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
    typeParameters: (0, utils.validateOptionalType)("TypeParameterInstantiation")
  }
});
(0, utils.default)("InferredPredicate", {
  aliases: ["Flow", "FlowPredicate"]
});
(0, utils.default)("InterfaceExtends", {
  visitor: ["id", "typeParameters"],
  aliases: ["Flow"],
  fields: {
    id: (0, utils.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
    typeParameters: (0, utils.validateOptionalType)("TypeParameterInstantiation")
  }
});
defineInterfaceishType("InterfaceDeclaration");
(0, utils.default)("InterfaceTypeAnnotation", {
  visitor: ["extends", "body"],
  aliases: ["Flow", "FlowType"],
  fields: {
    extends: (0, utils.validateOptional)((0, utils.arrayOfType)("InterfaceExtends")),
    body: (0, utils.validateType)("ObjectTypeAnnotation")
  }
});
(0, utils.default)("IntersectionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["Flow", "FlowType"],
  fields: {
    types: (0, utils.validate)((0, utils.arrayOfType)("FlowType"))
  }
});
(0, utils.default)("MixedTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, utils.default)("EmptyTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, utils.default)("NullableTypeAnnotation", {
  visitor: ["typeAnnotation"],
  aliases: ["Flow", "FlowType"],
  fields: {
    typeAnnotation: (0, utils.validateType)("FlowType")
  }
});
(0, utils.default)("NumberLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["Flow", "FlowType"],
  fields: {
    value: (0, utils.validate)((0, utils.assertValueType)("number"))
  }
});
(0, utils.default)("NumberTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, utils.default)("ObjectTypeAnnotation", {
  visitor: ["properties", "indexers", "callProperties", "internalSlots"],
  aliases: ["Flow", "FlowType"],
  builder: ["properties", "indexers", "callProperties", "internalSlots", "exact"],
  fields: {
    properties: (0, utils.validate)((0, utils.arrayOfType)(["ObjectTypeProperty", "ObjectTypeSpreadProperty"])),
    indexers: (0, utils.validateOptional)((0, utils.arrayOfType)("ObjectTypeIndexer")),
    callProperties: (0, utils.validateOptional)((0, utils.arrayOfType)("ObjectTypeCallProperty")),
    internalSlots: (0, utils.validateOptional)((0, utils.arrayOfType)("ObjectTypeInternalSlot")),
    exact: {
      validate: (0, utils.assertValueType)("boolean"),
      default: false
    },
    inexact: (0, utils.validateOptional)((0, utils.assertValueType)("boolean"))
  }
});
(0, utils.default)("ObjectTypeInternalSlot", {
  visitor: ["id", "value", "optional", "static", "method"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    value: (0, utils.validateType)("FlowType"),
    optional: (0, utils.validate)((0, utils.assertValueType)("boolean")),
    static: (0, utils.validate)((0, utils.assertValueType)("boolean")),
    method: (0, utils.validate)((0, utils.assertValueType)("boolean"))
  }
});
(0, utils.default)("ObjectTypeCallProperty", {
  visitor: ["value"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    value: (0, utils.validateType)("FlowType"),
    static: (0, utils.validate)((0, utils.assertValueType)("boolean"))
  }
});
(0, utils.default)("ObjectTypeIndexer", {
  visitor: ["id", "key", "value", "variance"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    id: (0, utils.validateOptionalType)("Identifier"),
    key: (0, utils.validateType)("FlowType"),
    value: (0, utils.validateType)("FlowType"),
    static: (0, utils.validate)((0, utils.assertValueType)("boolean")),
    variance: (0, utils.validateOptionalType)("Variance")
  }
});
(0, utils.default)("ObjectTypeProperty", {
  visitor: ["key", "value", "variance"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    key: (0, utils.validateType)(["Identifier", "StringLiteral"]),
    value: (0, utils.validateType)("FlowType"),
    kind: (0, utils.validate)((0, utils.assertOneOf)("init", "get", "set")),
    static: (0, utils.validate)((0, utils.assertValueType)("boolean")),
    proto: (0, utils.validate)((0, utils.assertValueType)("boolean")),
    optional: (0, utils.validate)((0, utils.assertValueType)("boolean")),
    variance: (0, utils.validateOptionalType)("Variance"),
    method: (0, utils.validate)((0, utils.assertValueType)("boolean"))
  }
});
(0, utils.default)("ObjectTypeSpreadProperty", {
  visitor: ["argument"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    argument: (0, utils.validateType)("FlowType")
  }
});
(0, utils.default)("OpaqueType", {
  visitor: ["id", "typeParameters", "supertype", "impltype"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    typeParameters: (0, utils.validateOptionalType)("TypeParameterDeclaration"),
    supertype: (0, utils.validateOptionalType)("FlowType"),
    impltype: (0, utils.validateType)("FlowType")
  }
});
(0, utils.default)("QualifiedTypeIdentifier", {
  visitor: ["id", "qualification"],
  aliases: ["Flow"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    qualification: (0, utils.validateType)(["Identifier", "QualifiedTypeIdentifier"])
  }
});
(0, utils.default)("StringLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["Flow", "FlowType"],
  fields: {
    value: (0, utils.validate)((0, utils.assertValueType)("string"))
  }
});
(0, utils.default)("StringTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, utils.default)("SymbolTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, utils.default)("ThisTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, utils.default)("TupleTypeAnnotation", {
  visitor: ["types"],
  aliases: ["Flow", "FlowType"],
  fields: {
    types: (0, utils.validate)((0, utils.arrayOfType)("FlowType"))
  }
});
(0, utils.default)("TypeofTypeAnnotation", {
  visitor: ["argument"],
  aliases: ["Flow", "FlowType"],
  fields: {
    argument: (0, utils.validateType)("FlowType")
  }
});
(0, utils.default)("TypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    typeParameters: (0, utils.validateOptionalType)("TypeParameterDeclaration"),
    right: (0, utils.validateType)("FlowType")
  }
});
(0, utils.default)("TypeAnnotation", {
  aliases: ["Flow"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, utils.validateType)("FlowType")
  }
});
(0, utils.default)("TypeCastExpression", {
  visitor: ["expression", "typeAnnotation"],
  aliases: ["Flow", "ExpressionWrapper", "Expression"],
  fields: {
    expression: (0, utils.validateType)("Expression"),
    typeAnnotation: (0, utils.validateType)("TypeAnnotation")
  }
});
(0, utils.default)("TypeParameter", {
  aliases: ["Flow"],
  visitor: ["bound", "default", "variance"],
  fields: {
    name: (0, utils.validate)((0, utils.assertValueType)("string")),
    bound: (0, utils.validateOptionalType)("TypeAnnotation"),
    default: (0, utils.validateOptionalType)("FlowType"),
    variance: (0, utils.validateOptionalType)("Variance")
  }
});
(0, utils.default)("TypeParameterDeclaration", {
  aliases: ["Flow"],
  visitor: ["params"],
  fields: {
    params: (0, utils.validate)((0, utils.arrayOfType)("TypeParameter"))
  }
});
(0, utils.default)("TypeParameterInstantiation", {
  aliases: ["Flow"],
  visitor: ["params"],
  fields: {
    params: (0, utils.validate)((0, utils.arrayOfType)("FlowType"))
  }
});
(0, utils.default)("UnionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["Flow", "FlowType"],
  fields: {
    types: (0, utils.validate)((0, utils.arrayOfType)("FlowType"))
  }
});
(0, utils.default)("Variance", {
  aliases: ["Flow"],
  builder: ["kind"],
  fields: {
    kind: (0, utils.validate)((0, utils.assertOneOf)("minus", "plus"))
  }
});
(0, utils.default)("VoidTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, utils.default)("EnumDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "body"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    body: (0, utils.validateType)(["EnumBooleanBody", "EnumNumberBody", "EnumStringBody", "EnumSymbolBody"])
  }
});
(0, utils.default)("EnumBooleanBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, utils.validate)((0, utils.assertValueType)("boolean")),
    members: (0, utils.validateArrayOfType)("EnumBooleanMember"),
    hasUnknownMembers: (0, utils.validate)((0, utils.assertValueType)("boolean"))
  }
});
(0, utils.default)("EnumNumberBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, utils.validate)((0, utils.assertValueType)("boolean")),
    members: (0, utils.validateArrayOfType)("EnumNumberMember"),
    hasUnknownMembers: (0, utils.validate)((0, utils.assertValueType)("boolean"))
  }
});
(0, utils.default)("EnumStringBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, utils.validate)((0, utils.assertValueType)("boolean")),
    members: (0, utils.validateArrayOfType)(["EnumStringMember", "EnumDefaultedMember"]),
    hasUnknownMembers: (0, utils.validate)((0, utils.assertValueType)("boolean"))
  }
});
(0, utils.default)("EnumSymbolBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    members: (0, utils.validateArrayOfType)("EnumDefaultedMember"),
    hasUnknownMembers: (0, utils.validate)((0, utils.assertValueType)("boolean"))
  }
});
(0, utils.default)("EnumBooleanMember", {
  aliases: ["EnumMember"],
  visitor: ["id"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    init: (0, utils.validateType)("BooleanLiteral")
  }
});
(0, utils.default)("EnumNumberMember", {
  aliases: ["EnumMember"],
  visitor: ["id", "init"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    init: (0, utils.validateType)("NumericLiteral")
  }
});
(0, utils.default)("EnumStringMember", {
  aliases: ["EnumMember"],
  visitor: ["id", "init"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    init: (0, utils.validateType)("StringLiteral")
  }
});
(0, utils.default)("EnumDefaultedMember", {
  aliases: ["EnumMember"],
  visitor: ["id"],
  fields: {
    id: (0, utils.validateType)("Identifier")
  }
});
(0, utils.default)("IndexedAccessType", {
  visitor: ["objectType", "indexType"],
  aliases: ["Flow", "FlowType"],
  fields: {
    objectType: (0, utils.validateType)("FlowType"),
    indexType: (0, utils.validateType)("FlowType")
  }
});
(0, utils.default)("OptionalIndexedAccessType", {
  visitor: ["objectType", "indexType"],
  aliases: ["Flow", "FlowType"],
  fields: {
    objectType: (0, utils.validateType)("FlowType"),
    indexType: (0, utils.validateType)("FlowType"),
    optional: (0, utils.validate)((0, utils.assertValueType)("boolean"))
  }
});

(0, utils.default)("JSXAttribute", {
  visitor: ["name", "value"],
  aliases: ["JSX", "Immutable"],
  fields: {
    name: {
      validate: (0, utils.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
    },
    value: {
      optional: true,
      validate: (0, utils.assertNodeType)("JSXElement", "JSXFragment", "StringLiteral", "JSXExpressionContainer")
    }
  }
});
(0, utils.default)("JSXClosingElement", {
  visitor: ["name"],
  aliases: ["JSX", "Immutable"],
  fields: {
    name: {
      validate: (0, utils.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
    }
  }
});
(0, utils.default)("JSXElement", {
  builder: ["openingElement", "closingElement", "children", "selfClosing"],
  visitor: ["openingElement", "children", "closingElement"],
  aliases: ["JSX", "Immutable", "Expression"],
  fields: {
    openingElement: {
      validate: (0, utils.assertNodeType)("JSXOpeningElement")
    },
    closingElement: {
      optional: true,
      validate: (0, utils.assertNodeType)("JSXClosingElement")
    },
    children: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
    },
    selfClosing: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    }
  }
});
(0, utils.default)("JSXEmptyExpression", {
  aliases: ["JSX"]
});
(0, utils.default)("JSXExpressionContainer", {
  visitor: ["expression"],
  aliases: ["JSX", "Immutable"],
  fields: {
    expression: {
      validate: (0, utils.assertNodeType)("Expression", "JSXEmptyExpression")
    }
  }
});
(0, utils.default)("JSXSpreadChild", {
  visitor: ["expression"],
  aliases: ["JSX", "Immutable"],
  fields: {
    expression: {
      validate: (0, utils.assertNodeType)("Expression")
    }
  }
});
(0, utils.default)("JSXIdentifier", {
  builder: ["name"],
  aliases: ["JSX"],
  fields: {
    name: {
      validate: (0, utils.assertValueType)("string")
    }
  }
});
(0, utils.default)("JSXMemberExpression", {
  visitor: ["object", "property"],
  aliases: ["JSX"],
  fields: {
    object: {
      validate: (0, utils.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
    },
    property: {
      validate: (0, utils.assertNodeType)("JSXIdentifier")
    }
  }
});
(0, utils.default)("JSXNamespacedName", {
  visitor: ["namespace", "name"],
  aliases: ["JSX"],
  fields: {
    namespace: {
      validate: (0, utils.assertNodeType)("JSXIdentifier")
    },
    name: {
      validate: (0, utils.assertNodeType)("JSXIdentifier")
    }
  }
});
(0, utils.default)("JSXOpeningElement", {
  builder: ["name", "attributes", "selfClosing"],
  visitor: ["name", "attributes"],
  aliases: ["JSX", "Immutable"],
  fields: {
    name: {
      validate: (0, utils.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
    },
    selfClosing: {
      default: false
    },
    attributes: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("JSXAttribute", "JSXSpreadAttribute")))
    },
    typeParameters: {
      validate: (0, utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
(0, utils.default)("JSXSpreadAttribute", {
  visitor: ["argument"],
  aliases: ["JSX"],
  fields: {
    argument: {
      validate: (0, utils.assertNodeType)("Expression")
    }
  }
});
(0, utils.default)("JSXText", {
  aliases: ["JSX", "Immutable"],
  builder: ["value"],
  fields: {
    value: {
      validate: (0, utils.assertValueType)("string")
    }
  }
});
(0, utils.default)("JSXFragment", {
  builder: ["openingFragment", "closingFragment", "children"],
  visitor: ["openingFragment", "children", "closingFragment"],
  aliases: ["JSX", "Immutable", "Expression"],
  fields: {
    openingFragment: {
      validate: (0, utils.assertNodeType)("JSXOpeningFragment")
    },
    closingFragment: {
      validate: (0, utils.assertNodeType)("JSXClosingFragment")
    },
    children: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
    }
  }
});
(0, utils.default)("JSXOpeningFragment", {
  aliases: ["JSX", "Immutable"]
});
(0, utils.default)("JSXClosingFragment", {
  aliases: ["JSX", "Immutable"]
});

var placeholders = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PLACEHOLDERS_FLIPPED_ALIAS = exports.PLACEHOLDERS_ALIAS = exports.PLACEHOLDERS = void 0;



const PLACEHOLDERS = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
exports.PLACEHOLDERS = PLACEHOLDERS;
const PLACEHOLDERS_ALIAS = {
  Declaration: ["Statement"],
  Pattern: ["PatternLike", "LVal"]
};
exports.PLACEHOLDERS_ALIAS = PLACEHOLDERS_ALIAS;

for (const type of PLACEHOLDERS) {
  const alias = utils.ALIAS_KEYS[type];
  if (alias != null && alias.length) PLACEHOLDERS_ALIAS[type] = alias;
}

const PLACEHOLDERS_FLIPPED_ALIAS = {};
exports.PLACEHOLDERS_FLIPPED_ALIAS = PLACEHOLDERS_FLIPPED_ALIAS;
Object.keys(PLACEHOLDERS_ALIAS).forEach(type => {
  PLACEHOLDERS_ALIAS[type].forEach(alias => {
    if (!Object.hasOwnProperty.call(PLACEHOLDERS_FLIPPED_ALIAS, alias)) {
      PLACEHOLDERS_FLIPPED_ALIAS[alias] = [];
    }

    PLACEHOLDERS_FLIPPED_ALIAS[alias].push(type);
  });
});
});

{
  (0, utils.default)("Noop", {
    visitor: []
  });
}
(0, utils.default)("Placeholder", {
  visitor: [],
  builder: ["expectedNode", "name"],
  fields: {
    name: {
      validate: (0, utils.assertNodeType)("Identifier")
    },
    expectedNode: {
      validate: (0, utils.assertOneOf)(...placeholders.PLACEHOLDERS)
    }
  }
});
(0, utils.default)("V8IntrinsicIdentifier", {
  builder: ["name"],
  fields: {
    name: {
      validate: (0, utils.assertValueType)("string")
    }
  }
});

(0, utils.default)("ArgumentPlaceholder", {});
(0, utils.default)("BindExpression", {
  visitor: ["object", "callee"],
  aliases: ["Expression"],
  fields:  {
    object: {
      validate: Object.assign(() => {}, {
        oneOfNodeTypes: ["Expression"]
      })
    },
    callee: {
      validate: Object.assign(() => {}, {
        oneOfNodeTypes: ["Expression"]
      })
    }
  } 
});
(0, utils.default)("ImportAttribute", {
  visitor: ["key", "value"],
  fields: {
    key: {
      validate: (0, utils.assertNodeType)("Identifier", "StringLiteral")
    },
    value: {
      validate: (0, utils.assertNodeType)("StringLiteral")
    }
  }
});
(0, utils.default)("Decorator", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, utils.assertNodeType)("Expression")
    }
  }
});
(0, utils.default)("DoExpression", {
  visitor: ["body"],
  builder: ["body", "async"],
  aliases: ["Expression"],
  fields: {
    body: {
      validate: (0, utils.assertNodeType)("BlockStatement")
    },
    async: {
      validate: (0, utils.assertValueType)("boolean"),
      default: false
    }
  }
});
(0, utils.default)("ExportDefaultSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, utils.assertNodeType)("Identifier")
    }
  }
});
(0, utils.default)("RecordExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("ObjectProperty", "SpreadElement")))
    }
  }
});
(0, utils.default)("TupleExpression", {
  fields: {
    elements: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Expression", "SpreadElement"))),
      default: []
    }
  },
  visitor: ["elements"],
  aliases: ["Expression"]
});
(0, utils.default)("DecimalLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, utils.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, utils.default)("StaticBlock", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent"]
});
(0, utils.default)("ModuleExpression", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, utils.assertNodeType)("Program")
    }
  },
  aliases: ["Expression"]
});
(0, utils.default)("TopicReference", {
  aliases: ["Expression"]
});
(0, utils.default)("PipelineTopicExpression", {
  builder: ["expression"],
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, utils.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression"]
});
(0, utils.default)("PipelineBareFunction", {
  builder: ["callee"],
  visitor: ["callee"],
  fields: {
    callee: {
      validate: (0, utils.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression"]
});
(0, utils.default)("PipelinePrimaryTopicReference", {
  aliases: ["Expression"]
});

const bool = (0, utils.assertValueType)("boolean");
const tSFunctionTypeAnnotationCommon = {
  returnType: {
    validate: (0, utils.assertNodeType)("TSTypeAnnotation", "Noop"),
    optional: true
  },
  typeParameters: {
    validate: (0, utils.assertNodeType)("TSTypeParameterDeclaration", "Noop"),
    optional: true
  }
};
(0, utils.default)("TSParameterProperty", {
  aliases: ["LVal"],
  visitor: ["parameter"],
  fields: {
    accessibility: {
      validate: (0, utils.assertOneOf)("public", "private", "protected"),
      optional: true
    },
    readonly: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    },
    parameter: {
      validate: (0, utils.assertNodeType)("Identifier", "AssignmentPattern")
    },
    override: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    },
    decorators: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
      optional: true
    }
  }
});
(0, utils.default)("TSDeclareFunction", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "params", "returnType"],
  fields: Object.assign({}, core.functionDeclarationCommon, tSFunctionTypeAnnotationCommon)
});
(0, utils.default)("TSDeclareMethod", {
  visitor: ["decorators", "key", "typeParameters", "params", "returnType"],
  fields: Object.assign({}, core.classMethodOrDeclareMethodCommon, tSFunctionTypeAnnotationCommon)
});
(0, utils.default)("TSQualifiedName", {
  aliases: ["TSEntityName"],
  visitor: ["left", "right"],
  fields: {
    left: (0, utils.validateType)("TSEntityName"),
    right: (0, utils.validateType)("Identifier")
  }
});
const signatureDeclarationCommon = {
  typeParameters: (0, utils.validateOptionalType)("TSTypeParameterDeclaration"),
  parameters: (0, utils.validateArrayOfType)(["Identifier", "RestElement"]),
  typeAnnotation: (0, utils.validateOptionalType)("TSTypeAnnotation")
};
const callConstructSignatureDeclaration = {
  aliases: ["TSTypeElement"],
  visitor: ["typeParameters", "parameters", "typeAnnotation"],
  fields: signatureDeclarationCommon
};
(0, utils.default)("TSCallSignatureDeclaration", callConstructSignatureDeclaration);
(0, utils.default)("TSConstructSignatureDeclaration", callConstructSignatureDeclaration);
const namedTypeElementCommon = {
  key: (0, utils.validateType)("Expression"),
  computed: (0, utils.validate)(bool),
  optional: (0, utils.validateOptional)(bool)
};
(0, utils.default)("TSPropertySignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeAnnotation", "initializer"],
  fields: Object.assign({}, namedTypeElementCommon, {
    readonly: (0, utils.validateOptional)(bool),
    typeAnnotation: (0, utils.validateOptionalType)("TSTypeAnnotation"),
    initializer: (0, utils.validateOptionalType)("Expression"),
    kind: {
      validate: (0, utils.assertOneOf)("get", "set")
    }
  })
});
(0, utils.default)("TSMethodSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeParameters", "parameters", "typeAnnotation"],
  fields: Object.assign({}, signatureDeclarationCommon, namedTypeElementCommon, {
    kind: {
      validate: (0, utils.assertOneOf)("method", "get", "set")
    }
  })
});
(0, utils.default)("TSIndexSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["parameters", "typeAnnotation"],
  fields: {
    readonly: (0, utils.validateOptional)(bool),
    static: (0, utils.validateOptional)(bool),
    parameters: (0, utils.validateArrayOfType)("Identifier"),
    typeAnnotation: (0, utils.validateOptionalType)("TSTypeAnnotation")
  }
});
const tsKeywordTypes = ["TSAnyKeyword", "TSBooleanKeyword", "TSBigIntKeyword", "TSIntrinsicKeyword", "TSNeverKeyword", "TSNullKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSUndefinedKeyword", "TSUnknownKeyword", "TSVoidKeyword"];

for (const type of tsKeywordTypes) {
  (0, utils.default)(type, {
    aliases: ["TSType", "TSBaseType"],
    visitor: [],
    fields: {}
  });
}

(0, utils.default)("TSThisType", {
  aliases: ["TSType", "TSBaseType"],
  visitor: [],
  fields: {}
});
const fnOrCtrBase = {
  aliases: ["TSType"],
  visitor: ["typeParameters", "parameters", "typeAnnotation"]
};
(0, utils.default)("TSFunctionType", Object.assign({}, fnOrCtrBase, {
  fields: signatureDeclarationCommon
}));
(0, utils.default)("TSConstructorType", Object.assign({}, fnOrCtrBase, {
  fields: Object.assign({}, signatureDeclarationCommon, {
    abstract: (0, utils.validateOptional)(bool)
  })
}));
(0, utils.default)("TSTypeReference", {
  aliases: ["TSType"],
  visitor: ["typeName", "typeParameters"],
  fields: {
    typeName: (0, utils.validateType)("TSEntityName"),
    typeParameters: (0, utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
(0, utils.default)("TSTypePredicate", {
  aliases: ["TSType"],
  visitor: ["parameterName", "typeAnnotation"],
  builder: ["parameterName", "typeAnnotation", "asserts"],
  fields: {
    parameterName: (0, utils.validateType)(["Identifier", "TSThisType"]),
    typeAnnotation: (0, utils.validateOptionalType)("TSTypeAnnotation"),
    asserts: (0, utils.validateOptional)(bool)
  }
});
(0, utils.default)("TSTypeQuery", {
  aliases: ["TSType"],
  visitor: ["exprName"],
  fields: {
    exprName: (0, utils.validateType)(["TSEntityName", "TSImportType"])
  }
});
(0, utils.default)("TSTypeLiteral", {
  aliases: ["TSType"],
  visitor: ["members"],
  fields: {
    members: (0, utils.validateArrayOfType)("TSTypeElement")
  }
});
(0, utils.default)("TSArrayType", {
  aliases: ["TSType"],
  visitor: ["elementType"],
  fields: {
    elementType: (0, utils.validateType)("TSType")
  }
});
(0, utils.default)("TSTupleType", {
  aliases: ["TSType"],
  visitor: ["elementTypes"],
  fields: {
    elementTypes: (0, utils.validateArrayOfType)(["TSType", "TSNamedTupleMember"])
  }
});
(0, utils.default)("TSOptionalType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, utils.validateType)("TSType")
  }
});
(0, utils.default)("TSRestType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, utils.validateType)("TSType")
  }
});
(0, utils.default)("TSNamedTupleMember", {
  visitor: ["label", "elementType"],
  builder: ["label", "elementType", "optional"],
  fields: {
    label: (0, utils.validateType)("Identifier"),
    optional: {
      validate: bool,
      default: false
    },
    elementType: (0, utils.validateType)("TSType")
  }
});
const unionOrIntersection = {
  aliases: ["TSType"],
  visitor: ["types"],
  fields: {
    types: (0, utils.validateArrayOfType)("TSType")
  }
};
(0, utils.default)("TSUnionType", unionOrIntersection);
(0, utils.default)("TSIntersectionType", unionOrIntersection);
(0, utils.default)("TSConditionalType", {
  aliases: ["TSType"],
  visitor: ["checkType", "extendsType", "trueType", "falseType"],
  fields: {
    checkType: (0, utils.validateType)("TSType"),
    extendsType: (0, utils.validateType)("TSType"),
    trueType: (0, utils.validateType)("TSType"),
    falseType: (0, utils.validateType)("TSType")
  }
});
(0, utils.default)("TSInferType", {
  aliases: ["TSType"],
  visitor: ["typeParameter"],
  fields: {
    typeParameter: (0, utils.validateType)("TSTypeParameter")
  }
});
(0, utils.default)("TSParenthesizedType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, utils.validateType)("TSType")
  }
});
(0, utils.default)("TSTypeOperator", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    operator: (0, utils.validate)((0, utils.assertValueType)("string")),
    typeAnnotation: (0, utils.validateType)("TSType")
  }
});
(0, utils.default)("TSIndexedAccessType", {
  aliases: ["TSType"],
  visitor: ["objectType", "indexType"],
  fields: {
    objectType: (0, utils.validateType)("TSType"),
    indexType: (0, utils.validateType)("TSType")
  }
});
(0, utils.default)("TSMappedType", {
  aliases: ["TSType"],
  visitor: ["typeParameter", "typeAnnotation", "nameType"],
  fields: {
    readonly: (0, utils.validateOptional)(bool),
    typeParameter: (0, utils.validateType)("TSTypeParameter"),
    optional: (0, utils.validateOptional)(bool),
    typeAnnotation: (0, utils.validateOptionalType)("TSType"),
    nameType: (0, utils.validateOptionalType)("TSType")
  }
});
(0, utils.default)("TSLiteralType", {
  aliases: ["TSType", "TSBaseType"],
  visitor: ["literal"],
  fields: {
    literal: {
      validate: function () {
        const unaryExpression = (0, utils.assertNodeType)("NumericLiteral", "BigIntLiteral");
        const unaryOperator = (0, utils.assertOneOf)("-");
        const literal = (0, utils.assertNodeType)("NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral");

        function validator(parent, key, node) {
          if ((0, is_1.default)("UnaryExpression", node)) {
            unaryOperator(node, "operator", node.operator);
            unaryExpression(node, "argument", node.argument);
          } else {
            literal(parent, key, node);
          }
        }

        validator.oneOfNodeTypes = ["NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "UnaryExpression"];
        return validator;
      }()
    }
  }
});
(0, utils.default)("TSExpressionWithTypeArguments", {
  aliases: ["TSType"],
  visitor: ["expression", "typeParameters"],
  fields: {
    expression: (0, utils.validateType)("TSEntityName"),
    typeParameters: (0, utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
(0, utils.default)("TSInterfaceDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "extends", "body"],
  fields: {
    declare: (0, utils.validateOptional)(bool),
    id: (0, utils.validateType)("Identifier"),
    typeParameters: (0, utils.validateOptionalType)("TSTypeParameterDeclaration"),
    extends: (0, utils.validateOptional)((0, utils.arrayOfType)("TSExpressionWithTypeArguments")),
    body: (0, utils.validateType)("TSInterfaceBody")
  }
});
(0, utils.default)("TSInterfaceBody", {
  visitor: ["body"],
  fields: {
    body: (0, utils.validateArrayOfType)("TSTypeElement")
  }
});
(0, utils.default)("TSTypeAliasDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "typeAnnotation"],
  fields: {
    declare: (0, utils.validateOptional)(bool),
    id: (0, utils.validateType)("Identifier"),
    typeParameters: (0, utils.validateOptionalType)("TSTypeParameterDeclaration"),
    typeAnnotation: (0, utils.validateType)("TSType")
  }
});
(0, utils.default)("TSAsExpression", {
  aliases: ["Expression"],
  visitor: ["expression", "typeAnnotation"],
  fields: {
    expression: (0, utils.validateType)("Expression"),
    typeAnnotation: (0, utils.validateType)("TSType")
  }
});
(0, utils.default)("TSTypeAssertion", {
  aliases: ["Expression"],
  visitor: ["typeAnnotation", "expression"],
  fields: {
    typeAnnotation: (0, utils.validateType)("TSType"),
    expression: (0, utils.validateType)("Expression")
  }
});
(0, utils.default)("TSEnumDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "members"],
  fields: {
    declare: (0, utils.validateOptional)(bool),
    const: (0, utils.validateOptional)(bool),
    id: (0, utils.validateType)("Identifier"),
    members: (0, utils.validateArrayOfType)("TSEnumMember"),
    initializer: (0, utils.validateOptionalType)("Expression")
  }
});
(0, utils.default)("TSEnumMember", {
  visitor: ["id", "initializer"],
  fields: {
    id: (0, utils.validateType)(["Identifier", "StringLiteral"]),
    initializer: (0, utils.validateOptionalType)("Expression")
  }
});
(0, utils.default)("TSModuleDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "body"],
  fields: {
    declare: (0, utils.validateOptional)(bool),
    global: (0, utils.validateOptional)(bool),
    id: (0, utils.validateType)(["Identifier", "StringLiteral"]),
    body: (0, utils.validateType)(["TSModuleBlock", "TSModuleDeclaration"])
  }
});
(0, utils.default)("TSModuleBlock", {
  aliases: ["Scopable", "Block", "BlockParent"],
  visitor: ["body"],
  fields: {
    body: (0, utils.validateArrayOfType)("Statement")
  }
});
(0, utils.default)("TSImportType", {
  aliases: ["TSType"],
  visitor: ["argument", "qualifier", "typeParameters"],
  fields: {
    argument: (0, utils.validateType)("StringLiteral"),
    qualifier: (0, utils.validateOptionalType)("TSEntityName"),
    typeParameters: (0, utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
(0, utils.default)("TSImportEqualsDeclaration", {
  aliases: ["Statement"],
  visitor: ["id", "moduleReference"],
  fields: {
    isExport: (0, utils.validate)(bool),
    id: (0, utils.validateType)("Identifier"),
    moduleReference: (0, utils.validateType)(["TSEntityName", "TSExternalModuleReference"]),
    importKind: {
      validate: (0, utils.assertOneOf)("type", "value"),
      optional: true
    }
  }
});
(0, utils.default)("TSExternalModuleReference", {
  visitor: ["expression"],
  fields: {
    expression: (0, utils.validateType)("StringLiteral")
  }
});
(0, utils.default)("TSNonNullExpression", {
  aliases: ["Expression"],
  visitor: ["expression"],
  fields: {
    expression: (0, utils.validateType)("Expression")
  }
});
(0, utils.default)("TSExportAssignment", {
  aliases: ["Statement"],
  visitor: ["expression"],
  fields: {
    expression: (0, utils.validateType)("Expression")
  }
});
(0, utils.default)("TSNamespaceExportDeclaration", {
  aliases: ["Statement"],
  visitor: ["id"],
  fields: {
    id: (0, utils.validateType)("Identifier")
  }
});
(0, utils.default)("TSTypeAnnotation", {
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: {
      validate: (0, utils.assertNodeType)("TSType")
    }
  }
});
(0, utils.default)("TSTypeParameterInstantiation", {
  visitor: ["params"],
  fields: {
    params: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("TSType")))
    }
  }
});
(0, utils.default)("TSTypeParameterDeclaration", {
  visitor: ["params"],
  fields: {
    params: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("TSTypeParameter")))
    }
  }
});
(0, utils.default)("TSTypeParameter", {
  builder: ["constraint", "default", "name"],
  visitor: ["constraint", "default"],
  fields: {
    name: {
      validate: (0, utils.assertValueType)("string")
    },
    constraint: {
      validate: (0, utils.assertNodeType)("TSType"),
      optional: true
    },
    default: {
      validate: (0, utils.assertNodeType)("TSType"),
      optional: true
    }
  }
});

var definitions = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "VISITOR_KEYS", {
  enumerable: true,
  get: function () {
    return utils.VISITOR_KEYS;
  }
});
Object.defineProperty(exports, "ALIAS_KEYS", {
  enumerable: true,
  get: function () {
    return utils.ALIAS_KEYS;
  }
});
Object.defineProperty(exports, "FLIPPED_ALIAS_KEYS", {
  enumerable: true,
  get: function () {
    return utils.FLIPPED_ALIAS_KEYS;
  }
});
Object.defineProperty(exports, "NODE_FIELDS", {
  enumerable: true,
  get: function () {
    return utils.NODE_FIELDS;
  }
});
Object.defineProperty(exports, "BUILDER_KEYS", {
  enumerable: true,
  get: function () {
    return utils.BUILDER_KEYS;
  }
});
Object.defineProperty(exports, "DEPRECATED_KEYS", {
  enumerable: true,
  get: function () {
    return utils.DEPRECATED_KEYS;
  }
});
Object.defineProperty(exports, "NODE_PARENT_VALIDATIONS", {
  enumerable: true,
  get: function () {
    return utils.NODE_PARENT_VALIDATIONS;
  }
});
Object.defineProperty(exports, "PLACEHOLDERS", {
  enumerable: true,
  get: function () {
    return placeholders.PLACEHOLDERS;
  }
});
Object.defineProperty(exports, "PLACEHOLDERS_ALIAS", {
  enumerable: true,
  get: function () {
    return placeholders.PLACEHOLDERS_ALIAS;
  }
});
Object.defineProperty(exports, "PLACEHOLDERS_FLIPPED_ALIAS", {
  enumerable: true,
  get: function () {
    return placeholders.PLACEHOLDERS_FLIPPED_ALIAS;
  }
});
exports.TYPES = void 0;



















toFastProperties(utils.VISITOR_KEYS);

toFastProperties(utils.ALIAS_KEYS);

toFastProperties(utils.FLIPPED_ALIAS_KEYS);

toFastProperties(utils.NODE_FIELDS);

toFastProperties(utils.BUILDER_KEYS);

toFastProperties(utils.DEPRECATED_KEYS);

toFastProperties(placeholders.PLACEHOLDERS_ALIAS);

toFastProperties(placeholders.PLACEHOLDERS_FLIPPED_ALIAS);

const TYPES = Object.keys(utils.VISITOR_KEYS).concat(Object.keys(utils.FLIPPED_ALIAS_KEYS)).concat(Object.keys(utils.DEPRECATED_KEYS));
exports.TYPES = TYPES;
});

var builder_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = builder;





function builder(type, ...args) {
  const keys = definitions.BUILDER_KEYS[type];
  const countArgs = args.length;

  if (countArgs > keys.length) {
    throw new Error(`${type}: Too many arguments passed. Received ${countArgs} but can receive no more than ${keys.length}`);
  }

  const node = {
    type
  };
  let i = 0;
  keys.forEach(key => {
    const field = definitions.NODE_FIELDS[type][key];
    let arg;
    if (i < countArgs) arg = args[i];

    if (arg === undefined) {
      arg = Array.isArray(field.default) ? [] : field.default;
    }

    node[key] = arg;
    i++;
  });

  for (const key of Object.keys(node)) {
    (0, validate_1.default)(node, key, node[key]);
  }

  return node;
}
});

var generated$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayExpression = arrayExpression;
exports.assignmentExpression = assignmentExpression;
exports.binaryExpression = binaryExpression;
exports.interpreterDirective = interpreterDirective;
exports.directive = directive;
exports.directiveLiteral = directiveLiteral;
exports.blockStatement = blockStatement;
exports.breakStatement = breakStatement;
exports.callExpression = callExpression;
exports.catchClause = catchClause;
exports.conditionalExpression = conditionalExpression;
exports.continueStatement = continueStatement;
exports.debuggerStatement = debuggerStatement;
exports.doWhileStatement = doWhileStatement;
exports.emptyStatement = emptyStatement;
exports.expressionStatement = expressionStatement;
exports.file = file;
exports.forInStatement = forInStatement;
exports.forStatement = forStatement;
exports.functionDeclaration = functionDeclaration;
exports.functionExpression = functionExpression;
exports.identifier = identifier;
exports.ifStatement = ifStatement;
exports.labeledStatement = labeledStatement;
exports.stringLiteral = stringLiteral;
exports.numericLiteral = numericLiteral;
exports.nullLiteral = nullLiteral;
exports.booleanLiteral = booleanLiteral;
exports.regExpLiteral = regExpLiteral;
exports.logicalExpression = logicalExpression;
exports.memberExpression = memberExpression;
exports.newExpression = newExpression;
exports.program = program;
exports.objectExpression = objectExpression;
exports.objectMethod = objectMethod;
exports.objectProperty = objectProperty;
exports.restElement = restElement;
exports.returnStatement = returnStatement;
exports.sequenceExpression = sequenceExpression;
exports.parenthesizedExpression = parenthesizedExpression;
exports.switchCase = switchCase;
exports.switchStatement = switchStatement;
exports.thisExpression = thisExpression;
exports.throwStatement = throwStatement;
exports.tryStatement = tryStatement;
exports.unaryExpression = unaryExpression;
exports.updateExpression = updateExpression;
exports.variableDeclaration = variableDeclaration;
exports.variableDeclarator = variableDeclarator;
exports.whileStatement = whileStatement;
exports.withStatement = withStatement;
exports.assignmentPattern = assignmentPattern;
exports.arrayPattern = arrayPattern;
exports.arrowFunctionExpression = arrowFunctionExpression;
exports.classBody = classBody;
exports.classExpression = classExpression;
exports.classDeclaration = classDeclaration;
exports.exportAllDeclaration = exportAllDeclaration;
exports.exportDefaultDeclaration = exportDefaultDeclaration;
exports.exportNamedDeclaration = exportNamedDeclaration;
exports.exportSpecifier = exportSpecifier;
exports.forOfStatement = forOfStatement;
exports.importDeclaration = importDeclaration;
exports.importDefaultSpecifier = importDefaultSpecifier;
exports.importNamespaceSpecifier = importNamespaceSpecifier;
exports.importSpecifier = importSpecifier;
exports.metaProperty = metaProperty;
exports.classMethod = classMethod;
exports.objectPattern = objectPattern;
exports.spreadElement = spreadElement;
exports.super = _super;
exports.taggedTemplateExpression = taggedTemplateExpression;
exports.templateElement = templateElement;
exports.templateLiteral = templateLiteral;
exports.yieldExpression = yieldExpression;
exports.awaitExpression = awaitExpression;
exports.import = _import;
exports.bigIntLiteral = bigIntLiteral;
exports.exportNamespaceSpecifier = exportNamespaceSpecifier;
exports.optionalMemberExpression = optionalMemberExpression;
exports.optionalCallExpression = optionalCallExpression;
exports.classProperty = classProperty;
exports.classPrivateProperty = classPrivateProperty;
exports.classPrivateMethod = classPrivateMethod;
exports.privateName = privateName;
exports.anyTypeAnnotation = anyTypeAnnotation;
exports.arrayTypeAnnotation = arrayTypeAnnotation;
exports.booleanTypeAnnotation = booleanTypeAnnotation;
exports.booleanLiteralTypeAnnotation = booleanLiteralTypeAnnotation;
exports.nullLiteralTypeAnnotation = nullLiteralTypeAnnotation;
exports.classImplements = classImplements;
exports.declareClass = declareClass;
exports.declareFunction = declareFunction;
exports.declareInterface = declareInterface;
exports.declareModule = declareModule;
exports.declareModuleExports = declareModuleExports;
exports.declareTypeAlias = declareTypeAlias;
exports.declareOpaqueType = declareOpaqueType;
exports.declareVariable = declareVariable;
exports.declareExportDeclaration = declareExportDeclaration;
exports.declareExportAllDeclaration = declareExportAllDeclaration;
exports.declaredPredicate = declaredPredicate;
exports.existsTypeAnnotation = existsTypeAnnotation;
exports.functionTypeAnnotation = functionTypeAnnotation;
exports.functionTypeParam = functionTypeParam;
exports.genericTypeAnnotation = genericTypeAnnotation;
exports.inferredPredicate = inferredPredicate;
exports.interfaceExtends = interfaceExtends;
exports.interfaceDeclaration = interfaceDeclaration;
exports.interfaceTypeAnnotation = interfaceTypeAnnotation;
exports.intersectionTypeAnnotation = intersectionTypeAnnotation;
exports.mixedTypeAnnotation = mixedTypeAnnotation;
exports.emptyTypeAnnotation = emptyTypeAnnotation;
exports.nullableTypeAnnotation = nullableTypeAnnotation;
exports.numberLiteralTypeAnnotation = numberLiteralTypeAnnotation;
exports.numberTypeAnnotation = numberTypeAnnotation;
exports.objectTypeAnnotation = objectTypeAnnotation;
exports.objectTypeInternalSlot = objectTypeInternalSlot;
exports.objectTypeCallProperty = objectTypeCallProperty;
exports.objectTypeIndexer = objectTypeIndexer;
exports.objectTypeProperty = objectTypeProperty;
exports.objectTypeSpreadProperty = objectTypeSpreadProperty;
exports.opaqueType = opaqueType;
exports.qualifiedTypeIdentifier = qualifiedTypeIdentifier;
exports.stringLiteralTypeAnnotation = stringLiteralTypeAnnotation;
exports.stringTypeAnnotation = stringTypeAnnotation;
exports.symbolTypeAnnotation = symbolTypeAnnotation;
exports.thisTypeAnnotation = thisTypeAnnotation;
exports.tupleTypeAnnotation = tupleTypeAnnotation;
exports.typeofTypeAnnotation = typeofTypeAnnotation;
exports.typeAlias = typeAlias;
exports.typeAnnotation = typeAnnotation;
exports.typeCastExpression = typeCastExpression;
exports.typeParameter = typeParameter;
exports.typeParameterDeclaration = typeParameterDeclaration;
exports.typeParameterInstantiation = typeParameterInstantiation;
exports.unionTypeAnnotation = unionTypeAnnotation;
exports.variance = variance;
exports.voidTypeAnnotation = voidTypeAnnotation;
exports.enumDeclaration = enumDeclaration;
exports.enumBooleanBody = enumBooleanBody;
exports.enumNumberBody = enumNumberBody;
exports.enumStringBody = enumStringBody;
exports.enumSymbolBody = enumSymbolBody;
exports.enumBooleanMember = enumBooleanMember;
exports.enumNumberMember = enumNumberMember;
exports.enumStringMember = enumStringMember;
exports.enumDefaultedMember = enumDefaultedMember;
exports.indexedAccessType = indexedAccessType;
exports.optionalIndexedAccessType = optionalIndexedAccessType;
exports.jSXAttribute = exports.jsxAttribute = jsxAttribute;
exports.jSXClosingElement = exports.jsxClosingElement = jsxClosingElement;
exports.jSXElement = exports.jsxElement = jsxElement;
exports.jSXEmptyExpression = exports.jsxEmptyExpression = jsxEmptyExpression;
exports.jSXExpressionContainer = exports.jsxExpressionContainer = jsxExpressionContainer;
exports.jSXSpreadChild = exports.jsxSpreadChild = jsxSpreadChild;
exports.jSXIdentifier = exports.jsxIdentifier = jsxIdentifier;
exports.jSXMemberExpression = exports.jsxMemberExpression = jsxMemberExpression;
exports.jSXNamespacedName = exports.jsxNamespacedName = jsxNamespacedName;
exports.jSXOpeningElement = exports.jsxOpeningElement = jsxOpeningElement;
exports.jSXSpreadAttribute = exports.jsxSpreadAttribute = jsxSpreadAttribute;
exports.jSXText = exports.jsxText = jsxText;
exports.jSXFragment = exports.jsxFragment = jsxFragment;
exports.jSXOpeningFragment = exports.jsxOpeningFragment = jsxOpeningFragment;
exports.jSXClosingFragment = exports.jsxClosingFragment = jsxClosingFragment;
exports.noop = noop;
exports.placeholder = placeholder;
exports.v8IntrinsicIdentifier = v8IntrinsicIdentifier;
exports.argumentPlaceholder = argumentPlaceholder;
exports.bindExpression = bindExpression;
exports.importAttribute = importAttribute;
exports.decorator = decorator;
exports.doExpression = doExpression;
exports.exportDefaultSpecifier = exportDefaultSpecifier;
exports.recordExpression = recordExpression;
exports.tupleExpression = tupleExpression;
exports.decimalLiteral = decimalLiteral;
exports.staticBlock = staticBlock;
exports.moduleExpression = moduleExpression;
exports.topicReference = topicReference;
exports.pipelineTopicExpression = pipelineTopicExpression;
exports.pipelineBareFunction = pipelineBareFunction;
exports.pipelinePrimaryTopicReference = pipelinePrimaryTopicReference;
exports.tSParameterProperty = exports.tsParameterProperty = tsParameterProperty;
exports.tSDeclareFunction = exports.tsDeclareFunction = tsDeclareFunction;
exports.tSDeclareMethod = exports.tsDeclareMethod = tsDeclareMethod;
exports.tSQualifiedName = exports.tsQualifiedName = tsQualifiedName;
exports.tSCallSignatureDeclaration = exports.tsCallSignatureDeclaration = tsCallSignatureDeclaration;
exports.tSConstructSignatureDeclaration = exports.tsConstructSignatureDeclaration = tsConstructSignatureDeclaration;
exports.tSPropertySignature = exports.tsPropertySignature = tsPropertySignature;
exports.tSMethodSignature = exports.tsMethodSignature = tsMethodSignature;
exports.tSIndexSignature = exports.tsIndexSignature = tsIndexSignature;
exports.tSAnyKeyword = exports.tsAnyKeyword = tsAnyKeyword;
exports.tSBooleanKeyword = exports.tsBooleanKeyword = tsBooleanKeyword;
exports.tSBigIntKeyword = exports.tsBigIntKeyword = tsBigIntKeyword;
exports.tSIntrinsicKeyword = exports.tsIntrinsicKeyword = tsIntrinsicKeyword;
exports.tSNeverKeyword = exports.tsNeverKeyword = tsNeverKeyword;
exports.tSNullKeyword = exports.tsNullKeyword = tsNullKeyword;
exports.tSNumberKeyword = exports.tsNumberKeyword = tsNumberKeyword;
exports.tSObjectKeyword = exports.tsObjectKeyword = tsObjectKeyword;
exports.tSStringKeyword = exports.tsStringKeyword = tsStringKeyword;
exports.tSSymbolKeyword = exports.tsSymbolKeyword = tsSymbolKeyword;
exports.tSUndefinedKeyword = exports.tsUndefinedKeyword = tsUndefinedKeyword;
exports.tSUnknownKeyword = exports.tsUnknownKeyword = tsUnknownKeyword;
exports.tSVoidKeyword = exports.tsVoidKeyword = tsVoidKeyword;
exports.tSThisType = exports.tsThisType = tsThisType;
exports.tSFunctionType = exports.tsFunctionType = tsFunctionType;
exports.tSConstructorType = exports.tsConstructorType = tsConstructorType;
exports.tSTypeReference = exports.tsTypeReference = tsTypeReference;
exports.tSTypePredicate = exports.tsTypePredicate = tsTypePredicate;
exports.tSTypeQuery = exports.tsTypeQuery = tsTypeQuery;
exports.tSTypeLiteral = exports.tsTypeLiteral = tsTypeLiteral;
exports.tSArrayType = exports.tsArrayType = tsArrayType;
exports.tSTupleType = exports.tsTupleType = tsTupleType;
exports.tSOptionalType = exports.tsOptionalType = tsOptionalType;
exports.tSRestType = exports.tsRestType = tsRestType;
exports.tSNamedTupleMember = exports.tsNamedTupleMember = tsNamedTupleMember;
exports.tSUnionType = exports.tsUnionType = tsUnionType;
exports.tSIntersectionType = exports.tsIntersectionType = tsIntersectionType;
exports.tSConditionalType = exports.tsConditionalType = tsConditionalType;
exports.tSInferType = exports.tsInferType = tsInferType;
exports.tSParenthesizedType = exports.tsParenthesizedType = tsParenthesizedType;
exports.tSTypeOperator = exports.tsTypeOperator = tsTypeOperator;
exports.tSIndexedAccessType = exports.tsIndexedAccessType = tsIndexedAccessType;
exports.tSMappedType = exports.tsMappedType = tsMappedType;
exports.tSLiteralType = exports.tsLiteralType = tsLiteralType;
exports.tSExpressionWithTypeArguments = exports.tsExpressionWithTypeArguments = tsExpressionWithTypeArguments;
exports.tSInterfaceDeclaration = exports.tsInterfaceDeclaration = tsInterfaceDeclaration;
exports.tSInterfaceBody = exports.tsInterfaceBody = tsInterfaceBody;
exports.tSTypeAliasDeclaration = exports.tsTypeAliasDeclaration = tsTypeAliasDeclaration;
exports.tSAsExpression = exports.tsAsExpression = tsAsExpression;
exports.tSTypeAssertion = exports.tsTypeAssertion = tsTypeAssertion;
exports.tSEnumDeclaration = exports.tsEnumDeclaration = tsEnumDeclaration;
exports.tSEnumMember = exports.tsEnumMember = tsEnumMember;
exports.tSModuleDeclaration = exports.tsModuleDeclaration = tsModuleDeclaration;
exports.tSModuleBlock = exports.tsModuleBlock = tsModuleBlock;
exports.tSImportType = exports.tsImportType = tsImportType;
exports.tSImportEqualsDeclaration = exports.tsImportEqualsDeclaration = tsImportEqualsDeclaration;
exports.tSExternalModuleReference = exports.tsExternalModuleReference = tsExternalModuleReference;
exports.tSNonNullExpression = exports.tsNonNullExpression = tsNonNullExpression;
exports.tSExportAssignment = exports.tsExportAssignment = tsExportAssignment;
exports.tSNamespaceExportDeclaration = exports.tsNamespaceExportDeclaration = tsNamespaceExportDeclaration;
exports.tSTypeAnnotation = exports.tsTypeAnnotation = tsTypeAnnotation;
exports.tSTypeParameterInstantiation = exports.tsTypeParameterInstantiation = tsTypeParameterInstantiation;
exports.tSTypeParameterDeclaration = exports.tsTypeParameterDeclaration = tsTypeParameterDeclaration;
exports.tSTypeParameter = exports.tsTypeParameter = tsTypeParameter;
exports.numberLiteral = NumberLiteral;
exports.regexLiteral = RegexLiteral;
exports.restProperty = RestProperty;
exports.spreadProperty = SpreadProperty;



function arrayExpression(elements) {
  return (0, builder_1.default)("ArrayExpression", ...arguments);
}

function assignmentExpression(operator, left, right) {
  return (0, builder_1.default)("AssignmentExpression", ...arguments);
}

function binaryExpression(operator, left, right) {
  return (0, builder_1.default)("BinaryExpression", ...arguments);
}

function interpreterDirective(value) {
  return (0, builder_1.default)("InterpreterDirective", ...arguments);
}

function directive(value) {
  return (0, builder_1.default)("Directive", ...arguments);
}

function directiveLiteral(value) {
  return (0, builder_1.default)("DirectiveLiteral", ...arguments);
}

function blockStatement(body, directives) {
  return (0, builder_1.default)("BlockStatement", ...arguments);
}

function breakStatement(label) {
  return (0, builder_1.default)("BreakStatement", ...arguments);
}

function callExpression(callee, _arguments) {
  return (0, builder_1.default)("CallExpression", ...arguments);
}

function catchClause(param, body) {
  return (0, builder_1.default)("CatchClause", ...arguments);
}

function conditionalExpression(test, consequent, alternate) {
  return (0, builder_1.default)("ConditionalExpression", ...arguments);
}

function continueStatement(label) {
  return (0, builder_1.default)("ContinueStatement", ...arguments);
}

function debuggerStatement() {
  return (0, builder_1.default)("DebuggerStatement", ...arguments);
}

function doWhileStatement(test, body) {
  return (0, builder_1.default)("DoWhileStatement", ...arguments);
}

function emptyStatement() {
  return (0, builder_1.default)("EmptyStatement", ...arguments);
}

function expressionStatement(expression) {
  return (0, builder_1.default)("ExpressionStatement", ...arguments);
}

function file(program, comments, tokens) {
  return (0, builder_1.default)("File", ...arguments);
}

function forInStatement(left, right, body) {
  return (0, builder_1.default)("ForInStatement", ...arguments);
}

function forStatement(init, test, update, body) {
  return (0, builder_1.default)("ForStatement", ...arguments);
}

function functionDeclaration(id, params, body, generator, async) {
  return (0, builder_1.default)("FunctionDeclaration", ...arguments);
}

function functionExpression(id, params, body, generator, async) {
  return (0, builder_1.default)("FunctionExpression", ...arguments);
}

function identifier(name) {
  return (0, builder_1.default)("Identifier", ...arguments);
}

function ifStatement(test, consequent, alternate) {
  return (0, builder_1.default)("IfStatement", ...arguments);
}

function labeledStatement(label, body) {
  return (0, builder_1.default)("LabeledStatement", ...arguments);
}

function stringLiteral(value) {
  return (0, builder_1.default)("StringLiteral", ...arguments);
}

function numericLiteral(value) {
  return (0, builder_1.default)("NumericLiteral", ...arguments);
}

function nullLiteral() {
  return (0, builder_1.default)("NullLiteral", ...arguments);
}

function booleanLiteral(value) {
  return (0, builder_1.default)("BooleanLiteral", ...arguments);
}

function regExpLiteral(pattern, flags) {
  return (0, builder_1.default)("RegExpLiteral", ...arguments);
}

function logicalExpression(operator, left, right) {
  return (0, builder_1.default)("LogicalExpression", ...arguments);
}

function memberExpression(object, property, computed, optional) {
  return (0, builder_1.default)("MemberExpression", ...arguments);
}

function newExpression(callee, _arguments) {
  return (0, builder_1.default)("NewExpression", ...arguments);
}

function program(body, directives, sourceType, interpreter) {
  return (0, builder_1.default)("Program", ...arguments);
}

function objectExpression(properties) {
  return (0, builder_1.default)("ObjectExpression", ...arguments);
}

function objectMethod(kind, key, params, body, computed, generator, async) {
  return (0, builder_1.default)("ObjectMethod", ...arguments);
}

function objectProperty(key, value, computed, shorthand, decorators) {
  return (0, builder_1.default)("ObjectProperty", ...arguments);
}

function restElement(argument) {
  return (0, builder_1.default)("RestElement", ...arguments);
}

function returnStatement(argument) {
  return (0, builder_1.default)("ReturnStatement", ...arguments);
}

function sequenceExpression(expressions) {
  return (0, builder_1.default)("SequenceExpression", ...arguments);
}

function parenthesizedExpression(expression) {
  return (0, builder_1.default)("ParenthesizedExpression", ...arguments);
}

function switchCase(test, consequent) {
  return (0, builder_1.default)("SwitchCase", ...arguments);
}

function switchStatement(discriminant, cases) {
  return (0, builder_1.default)("SwitchStatement", ...arguments);
}

function thisExpression() {
  return (0, builder_1.default)("ThisExpression", ...arguments);
}

function throwStatement(argument) {
  return (0, builder_1.default)("ThrowStatement", ...arguments);
}

function tryStatement(block, handler, finalizer) {
  return (0, builder_1.default)("TryStatement", ...arguments);
}

function unaryExpression(operator, argument, prefix) {
  return (0, builder_1.default)("UnaryExpression", ...arguments);
}

function updateExpression(operator, argument, prefix) {
  return (0, builder_1.default)("UpdateExpression", ...arguments);
}

function variableDeclaration(kind, declarations) {
  return (0, builder_1.default)("VariableDeclaration", ...arguments);
}

function variableDeclarator(id, init) {
  return (0, builder_1.default)("VariableDeclarator", ...arguments);
}

function whileStatement(test, body) {
  return (0, builder_1.default)("WhileStatement", ...arguments);
}

function withStatement(object, body) {
  return (0, builder_1.default)("WithStatement", ...arguments);
}

function assignmentPattern(left, right) {
  return (0, builder_1.default)("AssignmentPattern", ...arguments);
}

function arrayPattern(elements) {
  return (0, builder_1.default)("ArrayPattern", ...arguments);
}

function arrowFunctionExpression(params, body, async) {
  return (0, builder_1.default)("ArrowFunctionExpression", ...arguments);
}

function classBody(body) {
  return (0, builder_1.default)("ClassBody", ...arguments);
}

function classExpression(id, superClass, body, decorators) {
  return (0, builder_1.default)("ClassExpression", ...arguments);
}

function classDeclaration(id, superClass, body, decorators) {
  return (0, builder_1.default)("ClassDeclaration", ...arguments);
}

function exportAllDeclaration(source) {
  return (0, builder_1.default)("ExportAllDeclaration", ...arguments);
}

function exportDefaultDeclaration(declaration) {
  return (0, builder_1.default)("ExportDefaultDeclaration", ...arguments);
}

function exportNamedDeclaration(declaration, specifiers, source) {
  return (0, builder_1.default)("ExportNamedDeclaration", ...arguments);
}

function exportSpecifier(local, exported) {
  return (0, builder_1.default)("ExportSpecifier", ...arguments);
}

function forOfStatement(left, right, body, _await) {
  return (0, builder_1.default)("ForOfStatement", ...arguments);
}

function importDeclaration(specifiers, source) {
  return (0, builder_1.default)("ImportDeclaration", ...arguments);
}

function importDefaultSpecifier(local) {
  return (0, builder_1.default)("ImportDefaultSpecifier", ...arguments);
}

function importNamespaceSpecifier(local) {
  return (0, builder_1.default)("ImportNamespaceSpecifier", ...arguments);
}

function importSpecifier(local, imported) {
  return (0, builder_1.default)("ImportSpecifier", ...arguments);
}

function metaProperty(meta, property) {
  return (0, builder_1.default)("MetaProperty", ...arguments);
}

function classMethod(kind, key, params, body, computed, _static, generator, async) {
  return (0, builder_1.default)("ClassMethod", ...arguments);
}

function objectPattern(properties) {
  return (0, builder_1.default)("ObjectPattern", ...arguments);
}

function spreadElement(argument) {
  return (0, builder_1.default)("SpreadElement", ...arguments);
}

function _super() {
  return (0, builder_1.default)("Super", ...arguments);
}

function taggedTemplateExpression(tag, quasi) {
  return (0, builder_1.default)("TaggedTemplateExpression", ...arguments);
}

function templateElement(value, tail) {
  return (0, builder_1.default)("TemplateElement", ...arguments);
}

function templateLiteral(quasis, expressions) {
  return (0, builder_1.default)("TemplateLiteral", ...arguments);
}

function yieldExpression(argument, delegate) {
  return (0, builder_1.default)("YieldExpression", ...arguments);
}

function awaitExpression(argument) {
  return (0, builder_1.default)("AwaitExpression", ...arguments);
}

function _import() {
  return (0, builder_1.default)("Import", ...arguments);
}

function bigIntLiteral(value) {
  return (0, builder_1.default)("BigIntLiteral", ...arguments);
}

function exportNamespaceSpecifier(exported) {
  return (0, builder_1.default)("ExportNamespaceSpecifier", ...arguments);
}

function optionalMemberExpression(object, property, computed, optional) {
  return (0, builder_1.default)("OptionalMemberExpression", ...arguments);
}

function optionalCallExpression(callee, _arguments, optional) {
  return (0, builder_1.default)("OptionalCallExpression", ...arguments);
}

function classProperty(key, value, typeAnnotation, decorators, computed, _static) {
  return (0, builder_1.default)("ClassProperty", ...arguments);
}

function classPrivateProperty(key, value, decorators, _static) {
  return (0, builder_1.default)("ClassPrivateProperty", ...arguments);
}

function classPrivateMethod(kind, key, params, body, _static) {
  return (0, builder_1.default)("ClassPrivateMethod", ...arguments);
}

function privateName(id) {
  return (0, builder_1.default)("PrivateName", ...arguments);
}

function anyTypeAnnotation() {
  return (0, builder_1.default)("AnyTypeAnnotation", ...arguments);
}

function arrayTypeAnnotation(elementType) {
  return (0, builder_1.default)("ArrayTypeAnnotation", ...arguments);
}

function booleanTypeAnnotation() {
  return (0, builder_1.default)("BooleanTypeAnnotation", ...arguments);
}

function booleanLiteralTypeAnnotation(value) {
  return (0, builder_1.default)("BooleanLiteralTypeAnnotation", ...arguments);
}

function nullLiteralTypeAnnotation() {
  return (0, builder_1.default)("NullLiteralTypeAnnotation", ...arguments);
}

function classImplements(id, typeParameters) {
  return (0, builder_1.default)("ClassImplements", ...arguments);
}

function declareClass(id, typeParameters, _extends, body) {
  return (0, builder_1.default)("DeclareClass", ...arguments);
}

function declareFunction(id) {
  return (0, builder_1.default)("DeclareFunction", ...arguments);
}

function declareInterface(id, typeParameters, _extends, body) {
  return (0, builder_1.default)("DeclareInterface", ...arguments);
}

function declareModule(id, body, kind) {
  return (0, builder_1.default)("DeclareModule", ...arguments);
}

function declareModuleExports(typeAnnotation) {
  return (0, builder_1.default)("DeclareModuleExports", ...arguments);
}

function declareTypeAlias(id, typeParameters, right) {
  return (0, builder_1.default)("DeclareTypeAlias", ...arguments);
}

function declareOpaqueType(id, typeParameters, supertype) {
  return (0, builder_1.default)("DeclareOpaqueType", ...arguments);
}

function declareVariable(id) {
  return (0, builder_1.default)("DeclareVariable", ...arguments);
}

function declareExportDeclaration(declaration, specifiers, source) {
  return (0, builder_1.default)("DeclareExportDeclaration", ...arguments);
}

function declareExportAllDeclaration(source) {
  return (0, builder_1.default)("DeclareExportAllDeclaration", ...arguments);
}

function declaredPredicate(value) {
  return (0, builder_1.default)("DeclaredPredicate", ...arguments);
}

function existsTypeAnnotation() {
  return (0, builder_1.default)("ExistsTypeAnnotation", ...arguments);
}

function functionTypeAnnotation(typeParameters, params, rest, returnType) {
  return (0, builder_1.default)("FunctionTypeAnnotation", ...arguments);
}

function functionTypeParam(name, typeAnnotation) {
  return (0, builder_1.default)("FunctionTypeParam", ...arguments);
}

function genericTypeAnnotation(id, typeParameters) {
  return (0, builder_1.default)("GenericTypeAnnotation", ...arguments);
}

function inferredPredicate() {
  return (0, builder_1.default)("InferredPredicate", ...arguments);
}

function interfaceExtends(id, typeParameters) {
  return (0, builder_1.default)("InterfaceExtends", ...arguments);
}

function interfaceDeclaration(id, typeParameters, _extends, body) {
  return (0, builder_1.default)("InterfaceDeclaration", ...arguments);
}

function interfaceTypeAnnotation(_extends, body) {
  return (0, builder_1.default)("InterfaceTypeAnnotation", ...arguments);
}

function intersectionTypeAnnotation(types) {
  return (0, builder_1.default)("IntersectionTypeAnnotation", ...arguments);
}

function mixedTypeAnnotation() {
  return (0, builder_1.default)("MixedTypeAnnotation", ...arguments);
}

function emptyTypeAnnotation() {
  return (0, builder_1.default)("EmptyTypeAnnotation", ...arguments);
}

function nullableTypeAnnotation(typeAnnotation) {
  return (0, builder_1.default)("NullableTypeAnnotation", ...arguments);
}

function numberLiteralTypeAnnotation(value) {
  return (0, builder_1.default)("NumberLiteralTypeAnnotation", ...arguments);
}

function numberTypeAnnotation() {
  return (0, builder_1.default)("NumberTypeAnnotation", ...arguments);
}

function objectTypeAnnotation(properties, indexers, callProperties, internalSlots, exact) {
  return (0, builder_1.default)("ObjectTypeAnnotation", ...arguments);
}

function objectTypeInternalSlot(id, value, optional, _static, method) {
  return (0, builder_1.default)("ObjectTypeInternalSlot", ...arguments);
}

function objectTypeCallProperty(value) {
  return (0, builder_1.default)("ObjectTypeCallProperty", ...arguments);
}

function objectTypeIndexer(id, key, value, variance) {
  return (0, builder_1.default)("ObjectTypeIndexer", ...arguments);
}

function objectTypeProperty(key, value, variance) {
  return (0, builder_1.default)("ObjectTypeProperty", ...arguments);
}

function objectTypeSpreadProperty(argument) {
  return (0, builder_1.default)("ObjectTypeSpreadProperty", ...arguments);
}

function opaqueType(id, typeParameters, supertype, impltype) {
  return (0, builder_1.default)("OpaqueType", ...arguments);
}

function qualifiedTypeIdentifier(id, qualification) {
  return (0, builder_1.default)("QualifiedTypeIdentifier", ...arguments);
}

function stringLiteralTypeAnnotation(value) {
  return (0, builder_1.default)("StringLiteralTypeAnnotation", ...arguments);
}

function stringTypeAnnotation() {
  return (0, builder_1.default)("StringTypeAnnotation", ...arguments);
}

function symbolTypeAnnotation() {
  return (0, builder_1.default)("SymbolTypeAnnotation", ...arguments);
}

function thisTypeAnnotation() {
  return (0, builder_1.default)("ThisTypeAnnotation", ...arguments);
}

function tupleTypeAnnotation(types) {
  return (0, builder_1.default)("TupleTypeAnnotation", ...arguments);
}

function typeofTypeAnnotation(argument) {
  return (0, builder_1.default)("TypeofTypeAnnotation", ...arguments);
}

function typeAlias(id, typeParameters, right) {
  return (0, builder_1.default)("TypeAlias", ...arguments);
}

function typeAnnotation(typeAnnotation) {
  return (0, builder_1.default)("TypeAnnotation", ...arguments);
}

function typeCastExpression(expression, typeAnnotation) {
  return (0, builder_1.default)("TypeCastExpression", ...arguments);
}

function typeParameter(bound, _default, variance) {
  return (0, builder_1.default)("TypeParameter", ...arguments);
}

function typeParameterDeclaration(params) {
  return (0, builder_1.default)("TypeParameterDeclaration", ...arguments);
}

function typeParameterInstantiation(params) {
  return (0, builder_1.default)("TypeParameterInstantiation", ...arguments);
}

function unionTypeAnnotation(types) {
  return (0, builder_1.default)("UnionTypeAnnotation", ...arguments);
}

function variance(kind) {
  return (0, builder_1.default)("Variance", ...arguments);
}

function voidTypeAnnotation() {
  return (0, builder_1.default)("VoidTypeAnnotation", ...arguments);
}

function enumDeclaration(id, body) {
  return (0, builder_1.default)("EnumDeclaration", ...arguments);
}

function enumBooleanBody(members) {
  return (0, builder_1.default)("EnumBooleanBody", ...arguments);
}

function enumNumberBody(members) {
  return (0, builder_1.default)("EnumNumberBody", ...arguments);
}

function enumStringBody(members) {
  return (0, builder_1.default)("EnumStringBody", ...arguments);
}

function enumSymbolBody(members) {
  return (0, builder_1.default)("EnumSymbolBody", ...arguments);
}

function enumBooleanMember(id) {
  return (0, builder_1.default)("EnumBooleanMember", ...arguments);
}

function enumNumberMember(id, init) {
  return (0, builder_1.default)("EnumNumberMember", ...arguments);
}

function enumStringMember(id, init) {
  return (0, builder_1.default)("EnumStringMember", ...arguments);
}

function enumDefaultedMember(id) {
  return (0, builder_1.default)("EnumDefaultedMember", ...arguments);
}

function indexedAccessType(objectType, indexType) {
  return (0, builder_1.default)("IndexedAccessType", ...arguments);
}

function optionalIndexedAccessType(objectType, indexType) {
  return (0, builder_1.default)("OptionalIndexedAccessType", ...arguments);
}

function jsxAttribute(name, value) {
  return (0, builder_1.default)("JSXAttribute", ...arguments);
}

function jsxClosingElement(name) {
  return (0, builder_1.default)("JSXClosingElement", ...arguments);
}

function jsxElement(openingElement, closingElement, children, selfClosing) {
  return (0, builder_1.default)("JSXElement", ...arguments);
}

function jsxEmptyExpression() {
  return (0, builder_1.default)("JSXEmptyExpression", ...arguments);
}

function jsxExpressionContainer(expression) {
  return (0, builder_1.default)("JSXExpressionContainer", ...arguments);
}

function jsxSpreadChild(expression) {
  return (0, builder_1.default)("JSXSpreadChild", ...arguments);
}

function jsxIdentifier(name) {
  return (0, builder_1.default)("JSXIdentifier", ...arguments);
}

function jsxMemberExpression(object, property) {
  return (0, builder_1.default)("JSXMemberExpression", ...arguments);
}

function jsxNamespacedName(namespace, name) {
  return (0, builder_1.default)("JSXNamespacedName", ...arguments);
}

function jsxOpeningElement(name, attributes, selfClosing) {
  return (0, builder_1.default)("JSXOpeningElement", ...arguments);
}

function jsxSpreadAttribute(argument) {
  return (0, builder_1.default)("JSXSpreadAttribute", ...arguments);
}

function jsxText(value) {
  return (0, builder_1.default)("JSXText", ...arguments);
}

function jsxFragment(openingFragment, closingFragment, children) {
  return (0, builder_1.default)("JSXFragment", ...arguments);
}

function jsxOpeningFragment() {
  return (0, builder_1.default)("JSXOpeningFragment", ...arguments);
}

function jsxClosingFragment() {
  return (0, builder_1.default)("JSXClosingFragment", ...arguments);
}

function noop() {
  return (0, builder_1.default)("Noop", ...arguments);
}

function placeholder(expectedNode, name) {
  return (0, builder_1.default)("Placeholder", ...arguments);
}

function v8IntrinsicIdentifier(name) {
  return (0, builder_1.default)("V8IntrinsicIdentifier", ...arguments);
}

function argumentPlaceholder() {
  return (0, builder_1.default)("ArgumentPlaceholder", ...arguments);
}

function bindExpression(object, callee) {
  return (0, builder_1.default)("BindExpression", ...arguments);
}

function importAttribute(key, value) {
  return (0, builder_1.default)("ImportAttribute", ...arguments);
}

function decorator(expression) {
  return (0, builder_1.default)("Decorator", ...arguments);
}

function doExpression(body, async) {
  return (0, builder_1.default)("DoExpression", ...arguments);
}

function exportDefaultSpecifier(exported) {
  return (0, builder_1.default)("ExportDefaultSpecifier", ...arguments);
}

function recordExpression(properties) {
  return (0, builder_1.default)("RecordExpression", ...arguments);
}

function tupleExpression(elements) {
  return (0, builder_1.default)("TupleExpression", ...arguments);
}

function decimalLiteral(value) {
  return (0, builder_1.default)("DecimalLiteral", ...arguments);
}

function staticBlock(body) {
  return (0, builder_1.default)("StaticBlock", ...arguments);
}

function moduleExpression(body) {
  return (0, builder_1.default)("ModuleExpression", ...arguments);
}

function topicReference() {
  return (0, builder_1.default)("TopicReference", ...arguments);
}

function pipelineTopicExpression(expression) {
  return (0, builder_1.default)("PipelineTopicExpression", ...arguments);
}

function pipelineBareFunction(callee) {
  return (0, builder_1.default)("PipelineBareFunction", ...arguments);
}

function pipelinePrimaryTopicReference() {
  return (0, builder_1.default)("PipelinePrimaryTopicReference", ...arguments);
}

function tsParameterProperty(parameter) {
  return (0, builder_1.default)("TSParameterProperty", ...arguments);
}

function tsDeclareFunction(id, typeParameters, params, returnType) {
  return (0, builder_1.default)("TSDeclareFunction", ...arguments);
}

function tsDeclareMethod(decorators, key, typeParameters, params, returnType) {
  return (0, builder_1.default)("TSDeclareMethod", ...arguments);
}

function tsQualifiedName(left, right) {
  return (0, builder_1.default)("TSQualifiedName", ...arguments);
}

function tsCallSignatureDeclaration(typeParameters, parameters, typeAnnotation) {
  return (0, builder_1.default)("TSCallSignatureDeclaration", ...arguments);
}

function tsConstructSignatureDeclaration(typeParameters, parameters, typeAnnotation) {
  return (0, builder_1.default)("TSConstructSignatureDeclaration", ...arguments);
}

function tsPropertySignature(key, typeAnnotation, initializer) {
  return (0, builder_1.default)("TSPropertySignature", ...arguments);
}

function tsMethodSignature(key, typeParameters, parameters, typeAnnotation) {
  return (0, builder_1.default)("TSMethodSignature", ...arguments);
}

function tsIndexSignature(parameters, typeAnnotation) {
  return (0, builder_1.default)("TSIndexSignature", ...arguments);
}

function tsAnyKeyword() {
  return (0, builder_1.default)("TSAnyKeyword", ...arguments);
}

function tsBooleanKeyword() {
  return (0, builder_1.default)("TSBooleanKeyword", ...arguments);
}

function tsBigIntKeyword() {
  return (0, builder_1.default)("TSBigIntKeyword", ...arguments);
}

function tsIntrinsicKeyword() {
  return (0, builder_1.default)("TSIntrinsicKeyword", ...arguments);
}

function tsNeverKeyword() {
  return (0, builder_1.default)("TSNeverKeyword", ...arguments);
}

function tsNullKeyword() {
  return (0, builder_1.default)("TSNullKeyword", ...arguments);
}

function tsNumberKeyword() {
  return (0, builder_1.default)("TSNumberKeyword", ...arguments);
}

function tsObjectKeyword() {
  return (0, builder_1.default)("TSObjectKeyword", ...arguments);
}

function tsStringKeyword() {
  return (0, builder_1.default)("TSStringKeyword", ...arguments);
}

function tsSymbolKeyword() {
  return (0, builder_1.default)("TSSymbolKeyword", ...arguments);
}

function tsUndefinedKeyword() {
  return (0, builder_1.default)("TSUndefinedKeyword", ...arguments);
}

function tsUnknownKeyword() {
  return (0, builder_1.default)("TSUnknownKeyword", ...arguments);
}

function tsVoidKeyword() {
  return (0, builder_1.default)("TSVoidKeyword", ...arguments);
}

function tsThisType() {
  return (0, builder_1.default)("TSThisType", ...arguments);
}

function tsFunctionType(typeParameters, parameters, typeAnnotation) {
  return (0, builder_1.default)("TSFunctionType", ...arguments);
}

function tsConstructorType(typeParameters, parameters, typeAnnotation) {
  return (0, builder_1.default)("TSConstructorType", ...arguments);
}

function tsTypeReference(typeName, typeParameters) {
  return (0, builder_1.default)("TSTypeReference", ...arguments);
}

function tsTypePredicate(parameterName, typeAnnotation, asserts) {
  return (0, builder_1.default)("TSTypePredicate", ...arguments);
}

function tsTypeQuery(exprName) {
  return (0, builder_1.default)("TSTypeQuery", ...arguments);
}

function tsTypeLiteral(members) {
  return (0, builder_1.default)("TSTypeLiteral", ...arguments);
}

function tsArrayType(elementType) {
  return (0, builder_1.default)("TSArrayType", ...arguments);
}

function tsTupleType(elementTypes) {
  return (0, builder_1.default)("TSTupleType", ...arguments);
}

function tsOptionalType(typeAnnotation) {
  return (0, builder_1.default)("TSOptionalType", ...arguments);
}

function tsRestType(typeAnnotation) {
  return (0, builder_1.default)("TSRestType", ...arguments);
}

function tsNamedTupleMember(label, elementType, optional) {
  return (0, builder_1.default)("TSNamedTupleMember", ...arguments);
}

function tsUnionType(types) {
  return (0, builder_1.default)("TSUnionType", ...arguments);
}

function tsIntersectionType(types) {
  return (0, builder_1.default)("TSIntersectionType", ...arguments);
}

function tsConditionalType(checkType, extendsType, trueType, falseType) {
  return (0, builder_1.default)("TSConditionalType", ...arguments);
}

function tsInferType(typeParameter) {
  return (0, builder_1.default)("TSInferType", ...arguments);
}

function tsParenthesizedType(typeAnnotation) {
  return (0, builder_1.default)("TSParenthesizedType", ...arguments);
}

function tsTypeOperator(typeAnnotation) {
  return (0, builder_1.default)("TSTypeOperator", ...arguments);
}

function tsIndexedAccessType(objectType, indexType) {
  return (0, builder_1.default)("TSIndexedAccessType", ...arguments);
}

function tsMappedType(typeParameter, typeAnnotation, nameType) {
  return (0, builder_1.default)("TSMappedType", ...arguments);
}

function tsLiteralType(literal) {
  return (0, builder_1.default)("TSLiteralType", ...arguments);
}

function tsExpressionWithTypeArguments(expression, typeParameters) {
  return (0, builder_1.default)("TSExpressionWithTypeArguments", ...arguments);
}

function tsInterfaceDeclaration(id, typeParameters, _extends, body) {
  return (0, builder_1.default)("TSInterfaceDeclaration", ...arguments);
}

function tsInterfaceBody(body) {
  return (0, builder_1.default)("TSInterfaceBody", ...arguments);
}

function tsTypeAliasDeclaration(id, typeParameters, typeAnnotation) {
  return (0, builder_1.default)("TSTypeAliasDeclaration", ...arguments);
}

function tsAsExpression(expression, typeAnnotation) {
  return (0, builder_1.default)("TSAsExpression", ...arguments);
}

function tsTypeAssertion(typeAnnotation, expression) {
  return (0, builder_1.default)("TSTypeAssertion", ...arguments);
}

function tsEnumDeclaration(id, members) {
  return (0, builder_1.default)("TSEnumDeclaration", ...arguments);
}

function tsEnumMember(id, initializer) {
  return (0, builder_1.default)("TSEnumMember", ...arguments);
}

function tsModuleDeclaration(id, body) {
  return (0, builder_1.default)("TSModuleDeclaration", ...arguments);
}

function tsModuleBlock(body) {
  return (0, builder_1.default)("TSModuleBlock", ...arguments);
}

function tsImportType(argument, qualifier, typeParameters) {
  return (0, builder_1.default)("TSImportType", ...arguments);
}

function tsImportEqualsDeclaration(id, moduleReference) {
  return (0, builder_1.default)("TSImportEqualsDeclaration", ...arguments);
}

function tsExternalModuleReference(expression) {
  return (0, builder_1.default)("TSExternalModuleReference", ...arguments);
}

function tsNonNullExpression(expression) {
  return (0, builder_1.default)("TSNonNullExpression", ...arguments);
}

function tsExportAssignment(expression) {
  return (0, builder_1.default)("TSExportAssignment", ...arguments);
}

function tsNamespaceExportDeclaration(id) {
  return (0, builder_1.default)("TSNamespaceExportDeclaration", ...arguments);
}

function tsTypeAnnotation(typeAnnotation) {
  return (0, builder_1.default)("TSTypeAnnotation", ...arguments);
}

function tsTypeParameterInstantiation(params) {
  return (0, builder_1.default)("TSTypeParameterInstantiation", ...arguments);
}

function tsTypeParameterDeclaration(params) {
  return (0, builder_1.default)("TSTypeParameterDeclaration", ...arguments);
}

function tsTypeParameter(constraint, _default, name) {
  return (0, builder_1.default)("TSTypeParameter", ...arguments);
}

function NumberLiteral(...args) {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
  return (0, builder_1.default)("NumberLiteral", ...args);
}

function RegexLiteral(...args) {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
  return (0, builder_1.default)("RegexLiteral", ...args);
}

function RestProperty(...args) {
  console.trace("The node type RestProperty has been renamed to RestElement");
  return (0, builder_1.default)("RestProperty", ...args);
}

function SpreadProperty(...args) {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");
  return (0, builder_1.default)("SpreadProperty", ...args);
}
});

var cleanJSXElementLiteralChild_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cleanJSXElementLiteralChild;



function cleanJSXElementLiteralChild(child, args) {
  const lines = child.value.split(/\r\n|\n|\r/);
  let lastNonEmptyLine = 0;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(/[^ \t]/)) {
      lastNonEmptyLine = i;
    }
  }

  let str = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isFirstLine = i === 0;
    const isLastLine = i === lines.length - 1;
    const isLastNonEmptyLine = i === lastNonEmptyLine;
    let trimmedLine = line.replace(/\t/g, " ");

    if (!isFirstLine) {
      trimmedLine = trimmedLine.replace(/^[ ]+/, "");
    }

    if (!isLastLine) {
      trimmedLine = trimmedLine.replace(/[ ]+$/, "");
    }

    if (trimmedLine) {
      if (!isLastNonEmptyLine) {
        trimmedLine += " ";
      }

      str += trimmedLine;
    }
  }

  if (str) args.push((0, generated$1.stringLiteral)(str));
}
});

var buildChildren_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildChildren;





function buildChildren(node) {
  const elements = [];

  for (let i = 0; i < node.children.length; i++) {
    let child = node.children[i];

    if ((0, generated.isJSXText)(child)) {
      (0, cleanJSXElementLiteralChild_1.default)(child, elements);
      continue;
    }

    if ((0, generated.isJSXExpressionContainer)(child)) child = child.expression;
    if ((0, generated.isJSXEmptyExpression)(child)) continue;
    elements.push(child);
  }

  return elements;
}
});

var isNode_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNode;



function isNode(node) {
  return !!(node && definitions.VISITOR_KEYS[node.type]);
}
});

var assertNode_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertNode;



function assertNode(node) {
  if (!(0, isNode_1.default)(node)) {
    var _node$type;

    const type = (_node$type = node == null ? void 0 : node.type) != null ? _node$type : JSON.stringify(node);
    throw new TypeError(`Not a valid node of type "${type}"`);
  }
}
});

var generated$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertArrayExpression = assertArrayExpression;
exports.assertAssignmentExpression = assertAssignmentExpression;
exports.assertBinaryExpression = assertBinaryExpression;
exports.assertInterpreterDirective = assertInterpreterDirective;
exports.assertDirective = assertDirective;
exports.assertDirectiveLiteral = assertDirectiveLiteral;
exports.assertBlockStatement = assertBlockStatement;
exports.assertBreakStatement = assertBreakStatement;
exports.assertCallExpression = assertCallExpression;
exports.assertCatchClause = assertCatchClause;
exports.assertConditionalExpression = assertConditionalExpression;
exports.assertContinueStatement = assertContinueStatement;
exports.assertDebuggerStatement = assertDebuggerStatement;
exports.assertDoWhileStatement = assertDoWhileStatement;
exports.assertEmptyStatement = assertEmptyStatement;
exports.assertExpressionStatement = assertExpressionStatement;
exports.assertFile = assertFile;
exports.assertForInStatement = assertForInStatement;
exports.assertForStatement = assertForStatement;
exports.assertFunctionDeclaration = assertFunctionDeclaration;
exports.assertFunctionExpression = assertFunctionExpression;
exports.assertIdentifier = assertIdentifier;
exports.assertIfStatement = assertIfStatement;
exports.assertLabeledStatement = assertLabeledStatement;
exports.assertStringLiteral = assertStringLiteral;
exports.assertNumericLiteral = assertNumericLiteral;
exports.assertNullLiteral = assertNullLiteral;
exports.assertBooleanLiteral = assertBooleanLiteral;
exports.assertRegExpLiteral = assertRegExpLiteral;
exports.assertLogicalExpression = assertLogicalExpression;
exports.assertMemberExpression = assertMemberExpression;
exports.assertNewExpression = assertNewExpression;
exports.assertProgram = assertProgram;
exports.assertObjectExpression = assertObjectExpression;
exports.assertObjectMethod = assertObjectMethod;
exports.assertObjectProperty = assertObjectProperty;
exports.assertRestElement = assertRestElement;
exports.assertReturnStatement = assertReturnStatement;
exports.assertSequenceExpression = assertSequenceExpression;
exports.assertParenthesizedExpression = assertParenthesizedExpression;
exports.assertSwitchCase = assertSwitchCase;
exports.assertSwitchStatement = assertSwitchStatement;
exports.assertThisExpression = assertThisExpression;
exports.assertThrowStatement = assertThrowStatement;
exports.assertTryStatement = assertTryStatement;
exports.assertUnaryExpression = assertUnaryExpression;
exports.assertUpdateExpression = assertUpdateExpression;
exports.assertVariableDeclaration = assertVariableDeclaration;
exports.assertVariableDeclarator = assertVariableDeclarator;
exports.assertWhileStatement = assertWhileStatement;
exports.assertWithStatement = assertWithStatement;
exports.assertAssignmentPattern = assertAssignmentPattern;
exports.assertArrayPattern = assertArrayPattern;
exports.assertArrowFunctionExpression = assertArrowFunctionExpression;
exports.assertClassBody = assertClassBody;
exports.assertClassExpression = assertClassExpression;
exports.assertClassDeclaration = assertClassDeclaration;
exports.assertExportAllDeclaration = assertExportAllDeclaration;
exports.assertExportDefaultDeclaration = assertExportDefaultDeclaration;
exports.assertExportNamedDeclaration = assertExportNamedDeclaration;
exports.assertExportSpecifier = assertExportSpecifier;
exports.assertForOfStatement = assertForOfStatement;
exports.assertImportDeclaration = assertImportDeclaration;
exports.assertImportDefaultSpecifier = assertImportDefaultSpecifier;
exports.assertImportNamespaceSpecifier = assertImportNamespaceSpecifier;
exports.assertImportSpecifier = assertImportSpecifier;
exports.assertMetaProperty = assertMetaProperty;
exports.assertClassMethod = assertClassMethod;
exports.assertObjectPattern = assertObjectPattern;
exports.assertSpreadElement = assertSpreadElement;
exports.assertSuper = assertSuper;
exports.assertTaggedTemplateExpression = assertTaggedTemplateExpression;
exports.assertTemplateElement = assertTemplateElement;
exports.assertTemplateLiteral = assertTemplateLiteral;
exports.assertYieldExpression = assertYieldExpression;
exports.assertAwaitExpression = assertAwaitExpression;
exports.assertImport = assertImport;
exports.assertBigIntLiteral = assertBigIntLiteral;
exports.assertExportNamespaceSpecifier = assertExportNamespaceSpecifier;
exports.assertOptionalMemberExpression = assertOptionalMemberExpression;
exports.assertOptionalCallExpression = assertOptionalCallExpression;
exports.assertClassProperty = assertClassProperty;
exports.assertClassPrivateProperty = assertClassPrivateProperty;
exports.assertClassPrivateMethod = assertClassPrivateMethod;
exports.assertPrivateName = assertPrivateName;
exports.assertAnyTypeAnnotation = assertAnyTypeAnnotation;
exports.assertArrayTypeAnnotation = assertArrayTypeAnnotation;
exports.assertBooleanTypeAnnotation = assertBooleanTypeAnnotation;
exports.assertBooleanLiteralTypeAnnotation = assertBooleanLiteralTypeAnnotation;
exports.assertNullLiteralTypeAnnotation = assertNullLiteralTypeAnnotation;
exports.assertClassImplements = assertClassImplements;
exports.assertDeclareClass = assertDeclareClass;
exports.assertDeclareFunction = assertDeclareFunction;
exports.assertDeclareInterface = assertDeclareInterface;
exports.assertDeclareModule = assertDeclareModule;
exports.assertDeclareModuleExports = assertDeclareModuleExports;
exports.assertDeclareTypeAlias = assertDeclareTypeAlias;
exports.assertDeclareOpaqueType = assertDeclareOpaqueType;
exports.assertDeclareVariable = assertDeclareVariable;
exports.assertDeclareExportDeclaration = assertDeclareExportDeclaration;
exports.assertDeclareExportAllDeclaration = assertDeclareExportAllDeclaration;
exports.assertDeclaredPredicate = assertDeclaredPredicate;
exports.assertExistsTypeAnnotation = assertExistsTypeAnnotation;
exports.assertFunctionTypeAnnotation = assertFunctionTypeAnnotation;
exports.assertFunctionTypeParam = assertFunctionTypeParam;
exports.assertGenericTypeAnnotation = assertGenericTypeAnnotation;
exports.assertInferredPredicate = assertInferredPredicate;
exports.assertInterfaceExtends = assertInterfaceExtends;
exports.assertInterfaceDeclaration = assertInterfaceDeclaration;
exports.assertInterfaceTypeAnnotation = assertInterfaceTypeAnnotation;
exports.assertIntersectionTypeAnnotation = assertIntersectionTypeAnnotation;
exports.assertMixedTypeAnnotation = assertMixedTypeAnnotation;
exports.assertEmptyTypeAnnotation = assertEmptyTypeAnnotation;
exports.assertNullableTypeAnnotation = assertNullableTypeAnnotation;
exports.assertNumberLiteralTypeAnnotation = assertNumberLiteralTypeAnnotation;
exports.assertNumberTypeAnnotation = assertNumberTypeAnnotation;
exports.assertObjectTypeAnnotation = assertObjectTypeAnnotation;
exports.assertObjectTypeInternalSlot = assertObjectTypeInternalSlot;
exports.assertObjectTypeCallProperty = assertObjectTypeCallProperty;
exports.assertObjectTypeIndexer = assertObjectTypeIndexer;
exports.assertObjectTypeProperty = assertObjectTypeProperty;
exports.assertObjectTypeSpreadProperty = assertObjectTypeSpreadProperty;
exports.assertOpaqueType = assertOpaqueType;
exports.assertQualifiedTypeIdentifier = assertQualifiedTypeIdentifier;
exports.assertStringLiteralTypeAnnotation = assertStringLiteralTypeAnnotation;
exports.assertStringTypeAnnotation = assertStringTypeAnnotation;
exports.assertSymbolTypeAnnotation = assertSymbolTypeAnnotation;
exports.assertThisTypeAnnotation = assertThisTypeAnnotation;
exports.assertTupleTypeAnnotation = assertTupleTypeAnnotation;
exports.assertTypeofTypeAnnotation = assertTypeofTypeAnnotation;
exports.assertTypeAlias = assertTypeAlias;
exports.assertTypeAnnotation = assertTypeAnnotation;
exports.assertTypeCastExpression = assertTypeCastExpression;
exports.assertTypeParameter = assertTypeParameter;
exports.assertTypeParameterDeclaration = assertTypeParameterDeclaration;
exports.assertTypeParameterInstantiation = assertTypeParameterInstantiation;
exports.assertUnionTypeAnnotation = assertUnionTypeAnnotation;
exports.assertVariance = assertVariance;
exports.assertVoidTypeAnnotation = assertVoidTypeAnnotation;
exports.assertEnumDeclaration = assertEnumDeclaration;
exports.assertEnumBooleanBody = assertEnumBooleanBody;
exports.assertEnumNumberBody = assertEnumNumberBody;
exports.assertEnumStringBody = assertEnumStringBody;
exports.assertEnumSymbolBody = assertEnumSymbolBody;
exports.assertEnumBooleanMember = assertEnumBooleanMember;
exports.assertEnumNumberMember = assertEnumNumberMember;
exports.assertEnumStringMember = assertEnumStringMember;
exports.assertEnumDefaultedMember = assertEnumDefaultedMember;
exports.assertIndexedAccessType = assertIndexedAccessType;
exports.assertOptionalIndexedAccessType = assertOptionalIndexedAccessType;
exports.assertJSXAttribute = assertJSXAttribute;
exports.assertJSXClosingElement = assertJSXClosingElement;
exports.assertJSXElement = assertJSXElement;
exports.assertJSXEmptyExpression = assertJSXEmptyExpression;
exports.assertJSXExpressionContainer = assertJSXExpressionContainer;
exports.assertJSXSpreadChild = assertJSXSpreadChild;
exports.assertJSXIdentifier = assertJSXIdentifier;
exports.assertJSXMemberExpression = assertJSXMemberExpression;
exports.assertJSXNamespacedName = assertJSXNamespacedName;
exports.assertJSXOpeningElement = assertJSXOpeningElement;
exports.assertJSXSpreadAttribute = assertJSXSpreadAttribute;
exports.assertJSXText = assertJSXText;
exports.assertJSXFragment = assertJSXFragment;
exports.assertJSXOpeningFragment = assertJSXOpeningFragment;
exports.assertJSXClosingFragment = assertJSXClosingFragment;
exports.assertNoop = assertNoop;
exports.assertPlaceholder = assertPlaceholder;
exports.assertV8IntrinsicIdentifier = assertV8IntrinsicIdentifier;
exports.assertArgumentPlaceholder = assertArgumentPlaceholder;
exports.assertBindExpression = assertBindExpression;
exports.assertImportAttribute = assertImportAttribute;
exports.assertDecorator = assertDecorator;
exports.assertDoExpression = assertDoExpression;
exports.assertExportDefaultSpecifier = assertExportDefaultSpecifier;
exports.assertRecordExpression = assertRecordExpression;
exports.assertTupleExpression = assertTupleExpression;
exports.assertDecimalLiteral = assertDecimalLiteral;
exports.assertStaticBlock = assertStaticBlock;
exports.assertModuleExpression = assertModuleExpression;
exports.assertTopicReference = assertTopicReference;
exports.assertPipelineTopicExpression = assertPipelineTopicExpression;
exports.assertPipelineBareFunction = assertPipelineBareFunction;
exports.assertPipelinePrimaryTopicReference = assertPipelinePrimaryTopicReference;
exports.assertTSParameterProperty = assertTSParameterProperty;
exports.assertTSDeclareFunction = assertTSDeclareFunction;
exports.assertTSDeclareMethod = assertTSDeclareMethod;
exports.assertTSQualifiedName = assertTSQualifiedName;
exports.assertTSCallSignatureDeclaration = assertTSCallSignatureDeclaration;
exports.assertTSConstructSignatureDeclaration = assertTSConstructSignatureDeclaration;
exports.assertTSPropertySignature = assertTSPropertySignature;
exports.assertTSMethodSignature = assertTSMethodSignature;
exports.assertTSIndexSignature = assertTSIndexSignature;
exports.assertTSAnyKeyword = assertTSAnyKeyword;
exports.assertTSBooleanKeyword = assertTSBooleanKeyword;
exports.assertTSBigIntKeyword = assertTSBigIntKeyword;
exports.assertTSIntrinsicKeyword = assertTSIntrinsicKeyword;
exports.assertTSNeverKeyword = assertTSNeverKeyword;
exports.assertTSNullKeyword = assertTSNullKeyword;
exports.assertTSNumberKeyword = assertTSNumberKeyword;
exports.assertTSObjectKeyword = assertTSObjectKeyword;
exports.assertTSStringKeyword = assertTSStringKeyword;
exports.assertTSSymbolKeyword = assertTSSymbolKeyword;
exports.assertTSUndefinedKeyword = assertTSUndefinedKeyword;
exports.assertTSUnknownKeyword = assertTSUnknownKeyword;
exports.assertTSVoidKeyword = assertTSVoidKeyword;
exports.assertTSThisType = assertTSThisType;
exports.assertTSFunctionType = assertTSFunctionType;
exports.assertTSConstructorType = assertTSConstructorType;
exports.assertTSTypeReference = assertTSTypeReference;
exports.assertTSTypePredicate = assertTSTypePredicate;
exports.assertTSTypeQuery = assertTSTypeQuery;
exports.assertTSTypeLiteral = assertTSTypeLiteral;
exports.assertTSArrayType = assertTSArrayType;
exports.assertTSTupleType = assertTSTupleType;
exports.assertTSOptionalType = assertTSOptionalType;
exports.assertTSRestType = assertTSRestType;
exports.assertTSNamedTupleMember = assertTSNamedTupleMember;
exports.assertTSUnionType = assertTSUnionType;
exports.assertTSIntersectionType = assertTSIntersectionType;
exports.assertTSConditionalType = assertTSConditionalType;
exports.assertTSInferType = assertTSInferType;
exports.assertTSParenthesizedType = assertTSParenthesizedType;
exports.assertTSTypeOperator = assertTSTypeOperator;
exports.assertTSIndexedAccessType = assertTSIndexedAccessType;
exports.assertTSMappedType = assertTSMappedType;
exports.assertTSLiteralType = assertTSLiteralType;
exports.assertTSExpressionWithTypeArguments = assertTSExpressionWithTypeArguments;
exports.assertTSInterfaceDeclaration = assertTSInterfaceDeclaration;
exports.assertTSInterfaceBody = assertTSInterfaceBody;
exports.assertTSTypeAliasDeclaration = assertTSTypeAliasDeclaration;
exports.assertTSAsExpression = assertTSAsExpression;
exports.assertTSTypeAssertion = assertTSTypeAssertion;
exports.assertTSEnumDeclaration = assertTSEnumDeclaration;
exports.assertTSEnumMember = assertTSEnumMember;
exports.assertTSModuleDeclaration = assertTSModuleDeclaration;
exports.assertTSModuleBlock = assertTSModuleBlock;
exports.assertTSImportType = assertTSImportType;
exports.assertTSImportEqualsDeclaration = assertTSImportEqualsDeclaration;
exports.assertTSExternalModuleReference = assertTSExternalModuleReference;
exports.assertTSNonNullExpression = assertTSNonNullExpression;
exports.assertTSExportAssignment = assertTSExportAssignment;
exports.assertTSNamespaceExportDeclaration = assertTSNamespaceExportDeclaration;
exports.assertTSTypeAnnotation = assertTSTypeAnnotation;
exports.assertTSTypeParameterInstantiation = assertTSTypeParameterInstantiation;
exports.assertTSTypeParameterDeclaration = assertTSTypeParameterDeclaration;
exports.assertTSTypeParameter = assertTSTypeParameter;
exports.assertExpression = assertExpression;
exports.assertBinary = assertBinary;
exports.assertScopable = assertScopable;
exports.assertBlockParent = assertBlockParent;
exports.assertBlock = assertBlock;
exports.assertStatement = assertStatement;
exports.assertTerminatorless = assertTerminatorless;
exports.assertCompletionStatement = assertCompletionStatement;
exports.assertConditional = assertConditional;
exports.assertLoop = assertLoop;
exports.assertWhile = assertWhile;
exports.assertExpressionWrapper = assertExpressionWrapper;
exports.assertFor = assertFor;
exports.assertForXStatement = assertForXStatement;
exports.assertFunction = assertFunction;
exports.assertFunctionParent = assertFunctionParent;
exports.assertPureish = assertPureish;
exports.assertDeclaration = assertDeclaration;
exports.assertPatternLike = assertPatternLike;
exports.assertLVal = assertLVal;
exports.assertTSEntityName = assertTSEntityName;
exports.assertLiteral = assertLiteral;
exports.assertImmutable = assertImmutable;
exports.assertUserWhitespacable = assertUserWhitespacable;
exports.assertMethod = assertMethod;
exports.assertObjectMember = assertObjectMember;
exports.assertProperty = assertProperty;
exports.assertUnaryLike = assertUnaryLike;
exports.assertPattern = assertPattern;
exports.assertClass = assertClass;
exports.assertModuleDeclaration = assertModuleDeclaration;
exports.assertExportDeclaration = assertExportDeclaration;
exports.assertModuleSpecifier = assertModuleSpecifier;
exports.assertPrivate = assertPrivate;
exports.assertFlow = assertFlow;
exports.assertFlowType = assertFlowType;
exports.assertFlowBaseAnnotation = assertFlowBaseAnnotation;
exports.assertFlowDeclaration = assertFlowDeclaration;
exports.assertFlowPredicate = assertFlowPredicate;
exports.assertEnumBody = assertEnumBody;
exports.assertEnumMember = assertEnumMember;
exports.assertJSX = assertJSX;
exports.assertTSTypeElement = assertTSTypeElement;
exports.assertTSType = assertTSType;
exports.assertTSBaseType = assertTSBaseType;
exports.assertNumberLiteral = assertNumberLiteral;
exports.assertRegexLiteral = assertRegexLiteral;
exports.assertRestProperty = assertRestProperty;
exports.assertSpreadProperty = assertSpreadProperty;



function assert(type, node, opts) {
  if (!(0, is_1.default)(type, node, opts)) {
    throw new Error(`Expected type "${type}" with option ${JSON.stringify(opts)}, ` + `but instead got "${node.type}".`);
  }
}

function assertArrayExpression(node, opts) {
  assert("ArrayExpression", node, opts);
}

function assertAssignmentExpression(node, opts) {
  assert("AssignmentExpression", node, opts);
}

function assertBinaryExpression(node, opts) {
  assert("BinaryExpression", node, opts);
}

function assertInterpreterDirective(node, opts) {
  assert("InterpreterDirective", node, opts);
}

function assertDirective(node, opts) {
  assert("Directive", node, opts);
}

function assertDirectiveLiteral(node, opts) {
  assert("DirectiveLiteral", node, opts);
}

function assertBlockStatement(node, opts) {
  assert("BlockStatement", node, opts);
}

function assertBreakStatement(node, opts) {
  assert("BreakStatement", node, opts);
}

function assertCallExpression(node, opts) {
  assert("CallExpression", node, opts);
}

function assertCatchClause(node, opts) {
  assert("CatchClause", node, opts);
}

function assertConditionalExpression(node, opts) {
  assert("ConditionalExpression", node, opts);
}

function assertContinueStatement(node, opts) {
  assert("ContinueStatement", node, opts);
}

function assertDebuggerStatement(node, opts) {
  assert("DebuggerStatement", node, opts);
}

function assertDoWhileStatement(node, opts) {
  assert("DoWhileStatement", node, opts);
}

function assertEmptyStatement(node, opts) {
  assert("EmptyStatement", node, opts);
}

function assertExpressionStatement(node, opts) {
  assert("ExpressionStatement", node, opts);
}

function assertFile(node, opts) {
  assert("File", node, opts);
}

function assertForInStatement(node, opts) {
  assert("ForInStatement", node, opts);
}

function assertForStatement(node, opts) {
  assert("ForStatement", node, opts);
}

function assertFunctionDeclaration(node, opts) {
  assert("FunctionDeclaration", node, opts);
}

function assertFunctionExpression(node, opts) {
  assert("FunctionExpression", node, opts);
}

function assertIdentifier(node, opts) {
  assert("Identifier", node, opts);
}

function assertIfStatement(node, opts) {
  assert("IfStatement", node, opts);
}

function assertLabeledStatement(node, opts) {
  assert("LabeledStatement", node, opts);
}

function assertStringLiteral(node, opts) {
  assert("StringLiteral", node, opts);
}

function assertNumericLiteral(node, opts) {
  assert("NumericLiteral", node, opts);
}

function assertNullLiteral(node, opts) {
  assert("NullLiteral", node, opts);
}

function assertBooleanLiteral(node, opts) {
  assert("BooleanLiteral", node, opts);
}

function assertRegExpLiteral(node, opts) {
  assert("RegExpLiteral", node, opts);
}

function assertLogicalExpression(node, opts) {
  assert("LogicalExpression", node, opts);
}

function assertMemberExpression(node, opts) {
  assert("MemberExpression", node, opts);
}

function assertNewExpression(node, opts) {
  assert("NewExpression", node, opts);
}

function assertProgram(node, opts) {
  assert("Program", node, opts);
}

function assertObjectExpression(node, opts) {
  assert("ObjectExpression", node, opts);
}

function assertObjectMethod(node, opts) {
  assert("ObjectMethod", node, opts);
}

function assertObjectProperty(node, opts) {
  assert("ObjectProperty", node, opts);
}

function assertRestElement(node, opts) {
  assert("RestElement", node, opts);
}

function assertReturnStatement(node, opts) {
  assert("ReturnStatement", node, opts);
}

function assertSequenceExpression(node, opts) {
  assert("SequenceExpression", node, opts);
}

function assertParenthesizedExpression(node, opts) {
  assert("ParenthesizedExpression", node, opts);
}

function assertSwitchCase(node, opts) {
  assert("SwitchCase", node, opts);
}

function assertSwitchStatement(node, opts) {
  assert("SwitchStatement", node, opts);
}

function assertThisExpression(node, opts) {
  assert("ThisExpression", node, opts);
}

function assertThrowStatement(node, opts) {
  assert("ThrowStatement", node, opts);
}

function assertTryStatement(node, opts) {
  assert("TryStatement", node, opts);
}

function assertUnaryExpression(node, opts) {
  assert("UnaryExpression", node, opts);
}

function assertUpdateExpression(node, opts) {
  assert("UpdateExpression", node, opts);
}

function assertVariableDeclaration(node, opts) {
  assert("VariableDeclaration", node, opts);
}

function assertVariableDeclarator(node, opts) {
  assert("VariableDeclarator", node, opts);
}

function assertWhileStatement(node, opts) {
  assert("WhileStatement", node, opts);
}

function assertWithStatement(node, opts) {
  assert("WithStatement", node, opts);
}

function assertAssignmentPattern(node, opts) {
  assert("AssignmentPattern", node, opts);
}

function assertArrayPattern(node, opts) {
  assert("ArrayPattern", node, opts);
}

function assertArrowFunctionExpression(node, opts) {
  assert("ArrowFunctionExpression", node, opts);
}

function assertClassBody(node, opts) {
  assert("ClassBody", node, opts);
}

function assertClassExpression(node, opts) {
  assert("ClassExpression", node, opts);
}

function assertClassDeclaration(node, opts) {
  assert("ClassDeclaration", node, opts);
}

function assertExportAllDeclaration(node, opts) {
  assert("ExportAllDeclaration", node, opts);
}

function assertExportDefaultDeclaration(node, opts) {
  assert("ExportDefaultDeclaration", node, opts);
}

function assertExportNamedDeclaration(node, opts) {
  assert("ExportNamedDeclaration", node, opts);
}

function assertExportSpecifier(node, opts) {
  assert("ExportSpecifier", node, opts);
}

function assertForOfStatement(node, opts) {
  assert("ForOfStatement", node, opts);
}

function assertImportDeclaration(node, opts) {
  assert("ImportDeclaration", node, opts);
}

function assertImportDefaultSpecifier(node, opts) {
  assert("ImportDefaultSpecifier", node, opts);
}

function assertImportNamespaceSpecifier(node, opts) {
  assert("ImportNamespaceSpecifier", node, opts);
}

function assertImportSpecifier(node, opts) {
  assert("ImportSpecifier", node, opts);
}

function assertMetaProperty(node, opts) {
  assert("MetaProperty", node, opts);
}

function assertClassMethod(node, opts) {
  assert("ClassMethod", node, opts);
}

function assertObjectPattern(node, opts) {
  assert("ObjectPattern", node, opts);
}

function assertSpreadElement(node, opts) {
  assert("SpreadElement", node, opts);
}

function assertSuper(node, opts) {
  assert("Super", node, opts);
}

function assertTaggedTemplateExpression(node, opts) {
  assert("TaggedTemplateExpression", node, opts);
}

function assertTemplateElement(node, opts) {
  assert("TemplateElement", node, opts);
}

function assertTemplateLiteral(node, opts) {
  assert("TemplateLiteral", node, opts);
}

function assertYieldExpression(node, opts) {
  assert("YieldExpression", node, opts);
}

function assertAwaitExpression(node, opts) {
  assert("AwaitExpression", node, opts);
}

function assertImport(node, opts) {
  assert("Import", node, opts);
}

function assertBigIntLiteral(node, opts) {
  assert("BigIntLiteral", node, opts);
}

function assertExportNamespaceSpecifier(node, opts) {
  assert("ExportNamespaceSpecifier", node, opts);
}

function assertOptionalMemberExpression(node, opts) {
  assert("OptionalMemberExpression", node, opts);
}

function assertOptionalCallExpression(node, opts) {
  assert("OptionalCallExpression", node, opts);
}

function assertClassProperty(node, opts) {
  assert("ClassProperty", node, opts);
}

function assertClassPrivateProperty(node, opts) {
  assert("ClassPrivateProperty", node, opts);
}

function assertClassPrivateMethod(node, opts) {
  assert("ClassPrivateMethod", node, opts);
}

function assertPrivateName(node, opts) {
  assert("PrivateName", node, opts);
}

function assertAnyTypeAnnotation(node, opts) {
  assert("AnyTypeAnnotation", node, opts);
}

function assertArrayTypeAnnotation(node, opts) {
  assert("ArrayTypeAnnotation", node, opts);
}

function assertBooleanTypeAnnotation(node, opts) {
  assert("BooleanTypeAnnotation", node, opts);
}

function assertBooleanLiteralTypeAnnotation(node, opts) {
  assert("BooleanLiteralTypeAnnotation", node, opts);
}

function assertNullLiteralTypeAnnotation(node, opts) {
  assert("NullLiteralTypeAnnotation", node, opts);
}

function assertClassImplements(node, opts) {
  assert("ClassImplements", node, opts);
}

function assertDeclareClass(node, opts) {
  assert("DeclareClass", node, opts);
}

function assertDeclareFunction(node, opts) {
  assert("DeclareFunction", node, opts);
}

function assertDeclareInterface(node, opts) {
  assert("DeclareInterface", node, opts);
}

function assertDeclareModule(node, opts) {
  assert("DeclareModule", node, opts);
}

function assertDeclareModuleExports(node, opts) {
  assert("DeclareModuleExports", node, opts);
}

function assertDeclareTypeAlias(node, opts) {
  assert("DeclareTypeAlias", node, opts);
}

function assertDeclareOpaqueType(node, opts) {
  assert("DeclareOpaqueType", node, opts);
}

function assertDeclareVariable(node, opts) {
  assert("DeclareVariable", node, opts);
}

function assertDeclareExportDeclaration(node, opts) {
  assert("DeclareExportDeclaration", node, opts);
}

function assertDeclareExportAllDeclaration(node, opts) {
  assert("DeclareExportAllDeclaration", node, opts);
}

function assertDeclaredPredicate(node, opts) {
  assert("DeclaredPredicate", node, opts);
}

function assertExistsTypeAnnotation(node, opts) {
  assert("ExistsTypeAnnotation", node, opts);
}

function assertFunctionTypeAnnotation(node, opts) {
  assert("FunctionTypeAnnotation", node, opts);
}

function assertFunctionTypeParam(node, opts) {
  assert("FunctionTypeParam", node, opts);
}

function assertGenericTypeAnnotation(node, opts) {
  assert("GenericTypeAnnotation", node, opts);
}

function assertInferredPredicate(node, opts) {
  assert("InferredPredicate", node, opts);
}

function assertInterfaceExtends(node, opts) {
  assert("InterfaceExtends", node, opts);
}

function assertInterfaceDeclaration(node, opts) {
  assert("InterfaceDeclaration", node, opts);
}

function assertInterfaceTypeAnnotation(node, opts) {
  assert("InterfaceTypeAnnotation", node, opts);
}

function assertIntersectionTypeAnnotation(node, opts) {
  assert("IntersectionTypeAnnotation", node, opts);
}

function assertMixedTypeAnnotation(node, opts) {
  assert("MixedTypeAnnotation", node, opts);
}

function assertEmptyTypeAnnotation(node, opts) {
  assert("EmptyTypeAnnotation", node, opts);
}

function assertNullableTypeAnnotation(node, opts) {
  assert("NullableTypeAnnotation", node, opts);
}

function assertNumberLiteralTypeAnnotation(node, opts) {
  assert("NumberLiteralTypeAnnotation", node, opts);
}

function assertNumberTypeAnnotation(node, opts) {
  assert("NumberTypeAnnotation", node, opts);
}

function assertObjectTypeAnnotation(node, opts) {
  assert("ObjectTypeAnnotation", node, opts);
}

function assertObjectTypeInternalSlot(node, opts) {
  assert("ObjectTypeInternalSlot", node, opts);
}

function assertObjectTypeCallProperty(node, opts) {
  assert("ObjectTypeCallProperty", node, opts);
}

function assertObjectTypeIndexer(node, opts) {
  assert("ObjectTypeIndexer", node, opts);
}

function assertObjectTypeProperty(node, opts) {
  assert("ObjectTypeProperty", node, opts);
}

function assertObjectTypeSpreadProperty(node, opts) {
  assert("ObjectTypeSpreadProperty", node, opts);
}

function assertOpaqueType(node, opts) {
  assert("OpaqueType", node, opts);
}

function assertQualifiedTypeIdentifier(node, opts) {
  assert("QualifiedTypeIdentifier", node, opts);
}

function assertStringLiteralTypeAnnotation(node, opts) {
  assert("StringLiteralTypeAnnotation", node, opts);
}

function assertStringTypeAnnotation(node, opts) {
  assert("StringTypeAnnotation", node, opts);
}

function assertSymbolTypeAnnotation(node, opts) {
  assert("SymbolTypeAnnotation", node, opts);
}

function assertThisTypeAnnotation(node, opts) {
  assert("ThisTypeAnnotation", node, opts);
}

function assertTupleTypeAnnotation(node, opts) {
  assert("TupleTypeAnnotation", node, opts);
}

function assertTypeofTypeAnnotation(node, opts) {
  assert("TypeofTypeAnnotation", node, opts);
}

function assertTypeAlias(node, opts) {
  assert("TypeAlias", node, opts);
}

function assertTypeAnnotation(node, opts) {
  assert("TypeAnnotation", node, opts);
}

function assertTypeCastExpression(node, opts) {
  assert("TypeCastExpression", node, opts);
}

function assertTypeParameter(node, opts) {
  assert("TypeParameter", node, opts);
}

function assertTypeParameterDeclaration(node, opts) {
  assert("TypeParameterDeclaration", node, opts);
}

function assertTypeParameterInstantiation(node, opts) {
  assert("TypeParameterInstantiation", node, opts);
}

function assertUnionTypeAnnotation(node, opts) {
  assert("UnionTypeAnnotation", node, opts);
}

function assertVariance(node, opts) {
  assert("Variance", node, opts);
}

function assertVoidTypeAnnotation(node, opts) {
  assert("VoidTypeAnnotation", node, opts);
}

function assertEnumDeclaration(node, opts) {
  assert("EnumDeclaration", node, opts);
}

function assertEnumBooleanBody(node, opts) {
  assert("EnumBooleanBody", node, opts);
}

function assertEnumNumberBody(node, opts) {
  assert("EnumNumberBody", node, opts);
}

function assertEnumStringBody(node, opts) {
  assert("EnumStringBody", node, opts);
}

function assertEnumSymbolBody(node, opts) {
  assert("EnumSymbolBody", node, opts);
}

function assertEnumBooleanMember(node, opts) {
  assert("EnumBooleanMember", node, opts);
}

function assertEnumNumberMember(node, opts) {
  assert("EnumNumberMember", node, opts);
}

function assertEnumStringMember(node, opts) {
  assert("EnumStringMember", node, opts);
}

function assertEnumDefaultedMember(node, opts) {
  assert("EnumDefaultedMember", node, opts);
}

function assertIndexedAccessType(node, opts) {
  assert("IndexedAccessType", node, opts);
}

function assertOptionalIndexedAccessType(node, opts) {
  assert("OptionalIndexedAccessType", node, opts);
}

function assertJSXAttribute(node, opts) {
  assert("JSXAttribute", node, opts);
}

function assertJSXClosingElement(node, opts) {
  assert("JSXClosingElement", node, opts);
}

function assertJSXElement(node, opts) {
  assert("JSXElement", node, opts);
}

function assertJSXEmptyExpression(node, opts) {
  assert("JSXEmptyExpression", node, opts);
}

function assertJSXExpressionContainer(node, opts) {
  assert("JSXExpressionContainer", node, opts);
}

function assertJSXSpreadChild(node, opts) {
  assert("JSXSpreadChild", node, opts);
}

function assertJSXIdentifier(node, opts) {
  assert("JSXIdentifier", node, opts);
}

function assertJSXMemberExpression(node, opts) {
  assert("JSXMemberExpression", node, opts);
}

function assertJSXNamespacedName(node, opts) {
  assert("JSXNamespacedName", node, opts);
}

function assertJSXOpeningElement(node, opts) {
  assert("JSXOpeningElement", node, opts);
}

function assertJSXSpreadAttribute(node, opts) {
  assert("JSXSpreadAttribute", node, opts);
}

function assertJSXText(node, opts) {
  assert("JSXText", node, opts);
}

function assertJSXFragment(node, opts) {
  assert("JSXFragment", node, opts);
}

function assertJSXOpeningFragment(node, opts) {
  assert("JSXOpeningFragment", node, opts);
}

function assertJSXClosingFragment(node, opts) {
  assert("JSXClosingFragment", node, opts);
}

function assertNoop(node, opts) {
  assert("Noop", node, opts);
}

function assertPlaceholder(node, opts) {
  assert("Placeholder", node, opts);
}

function assertV8IntrinsicIdentifier(node, opts) {
  assert("V8IntrinsicIdentifier", node, opts);
}

function assertArgumentPlaceholder(node, opts) {
  assert("ArgumentPlaceholder", node, opts);
}

function assertBindExpression(node, opts) {
  assert("BindExpression", node, opts);
}

function assertImportAttribute(node, opts) {
  assert("ImportAttribute", node, opts);
}

function assertDecorator(node, opts) {
  assert("Decorator", node, opts);
}

function assertDoExpression(node, opts) {
  assert("DoExpression", node, opts);
}

function assertExportDefaultSpecifier(node, opts) {
  assert("ExportDefaultSpecifier", node, opts);
}

function assertRecordExpression(node, opts) {
  assert("RecordExpression", node, opts);
}

function assertTupleExpression(node, opts) {
  assert("TupleExpression", node, opts);
}

function assertDecimalLiteral(node, opts) {
  assert("DecimalLiteral", node, opts);
}

function assertStaticBlock(node, opts) {
  assert("StaticBlock", node, opts);
}

function assertModuleExpression(node, opts) {
  assert("ModuleExpression", node, opts);
}

function assertTopicReference(node, opts) {
  assert("TopicReference", node, opts);
}

function assertPipelineTopicExpression(node, opts) {
  assert("PipelineTopicExpression", node, opts);
}

function assertPipelineBareFunction(node, opts) {
  assert("PipelineBareFunction", node, opts);
}

function assertPipelinePrimaryTopicReference(node, opts) {
  assert("PipelinePrimaryTopicReference", node, opts);
}

function assertTSParameterProperty(node, opts) {
  assert("TSParameterProperty", node, opts);
}

function assertTSDeclareFunction(node, opts) {
  assert("TSDeclareFunction", node, opts);
}

function assertTSDeclareMethod(node, opts) {
  assert("TSDeclareMethod", node, opts);
}

function assertTSQualifiedName(node, opts) {
  assert("TSQualifiedName", node, opts);
}

function assertTSCallSignatureDeclaration(node, opts) {
  assert("TSCallSignatureDeclaration", node, opts);
}

function assertTSConstructSignatureDeclaration(node, opts) {
  assert("TSConstructSignatureDeclaration", node, opts);
}

function assertTSPropertySignature(node, opts) {
  assert("TSPropertySignature", node, opts);
}

function assertTSMethodSignature(node, opts) {
  assert("TSMethodSignature", node, opts);
}

function assertTSIndexSignature(node, opts) {
  assert("TSIndexSignature", node, opts);
}

function assertTSAnyKeyword(node, opts) {
  assert("TSAnyKeyword", node, opts);
}

function assertTSBooleanKeyword(node, opts) {
  assert("TSBooleanKeyword", node, opts);
}

function assertTSBigIntKeyword(node, opts) {
  assert("TSBigIntKeyword", node, opts);
}

function assertTSIntrinsicKeyword(node, opts) {
  assert("TSIntrinsicKeyword", node, opts);
}

function assertTSNeverKeyword(node, opts) {
  assert("TSNeverKeyword", node, opts);
}

function assertTSNullKeyword(node, opts) {
  assert("TSNullKeyword", node, opts);
}

function assertTSNumberKeyword(node, opts) {
  assert("TSNumberKeyword", node, opts);
}

function assertTSObjectKeyword(node, opts) {
  assert("TSObjectKeyword", node, opts);
}

function assertTSStringKeyword(node, opts) {
  assert("TSStringKeyword", node, opts);
}

function assertTSSymbolKeyword(node, opts) {
  assert("TSSymbolKeyword", node, opts);
}

function assertTSUndefinedKeyword(node, opts) {
  assert("TSUndefinedKeyword", node, opts);
}

function assertTSUnknownKeyword(node, opts) {
  assert("TSUnknownKeyword", node, opts);
}

function assertTSVoidKeyword(node, opts) {
  assert("TSVoidKeyword", node, opts);
}

function assertTSThisType(node, opts) {
  assert("TSThisType", node, opts);
}

function assertTSFunctionType(node, opts) {
  assert("TSFunctionType", node, opts);
}

function assertTSConstructorType(node, opts) {
  assert("TSConstructorType", node, opts);
}

function assertTSTypeReference(node, opts) {
  assert("TSTypeReference", node, opts);
}

function assertTSTypePredicate(node, opts) {
  assert("TSTypePredicate", node, opts);
}

function assertTSTypeQuery(node, opts) {
  assert("TSTypeQuery", node, opts);
}

function assertTSTypeLiteral(node, opts) {
  assert("TSTypeLiteral", node, opts);
}

function assertTSArrayType(node, opts) {
  assert("TSArrayType", node, opts);
}

function assertTSTupleType(node, opts) {
  assert("TSTupleType", node, opts);
}

function assertTSOptionalType(node, opts) {
  assert("TSOptionalType", node, opts);
}

function assertTSRestType(node, opts) {
  assert("TSRestType", node, opts);
}

function assertTSNamedTupleMember(node, opts) {
  assert("TSNamedTupleMember", node, opts);
}

function assertTSUnionType(node, opts) {
  assert("TSUnionType", node, opts);
}

function assertTSIntersectionType(node, opts) {
  assert("TSIntersectionType", node, opts);
}

function assertTSConditionalType(node, opts) {
  assert("TSConditionalType", node, opts);
}

function assertTSInferType(node, opts) {
  assert("TSInferType", node, opts);
}

function assertTSParenthesizedType(node, opts) {
  assert("TSParenthesizedType", node, opts);
}

function assertTSTypeOperator(node, opts) {
  assert("TSTypeOperator", node, opts);
}

function assertTSIndexedAccessType(node, opts) {
  assert("TSIndexedAccessType", node, opts);
}

function assertTSMappedType(node, opts) {
  assert("TSMappedType", node, opts);
}

function assertTSLiteralType(node, opts) {
  assert("TSLiteralType", node, opts);
}

function assertTSExpressionWithTypeArguments(node, opts) {
  assert("TSExpressionWithTypeArguments", node, opts);
}

function assertTSInterfaceDeclaration(node, opts) {
  assert("TSInterfaceDeclaration", node, opts);
}

function assertTSInterfaceBody(node, opts) {
  assert("TSInterfaceBody", node, opts);
}

function assertTSTypeAliasDeclaration(node, opts) {
  assert("TSTypeAliasDeclaration", node, opts);
}

function assertTSAsExpression(node, opts) {
  assert("TSAsExpression", node, opts);
}

function assertTSTypeAssertion(node, opts) {
  assert("TSTypeAssertion", node, opts);
}

function assertTSEnumDeclaration(node, opts) {
  assert("TSEnumDeclaration", node, opts);
}

function assertTSEnumMember(node, opts) {
  assert("TSEnumMember", node, opts);
}

function assertTSModuleDeclaration(node, opts) {
  assert("TSModuleDeclaration", node, opts);
}

function assertTSModuleBlock(node, opts) {
  assert("TSModuleBlock", node, opts);
}

function assertTSImportType(node, opts) {
  assert("TSImportType", node, opts);
}

function assertTSImportEqualsDeclaration(node, opts) {
  assert("TSImportEqualsDeclaration", node, opts);
}

function assertTSExternalModuleReference(node, opts) {
  assert("TSExternalModuleReference", node, opts);
}

function assertTSNonNullExpression(node, opts) {
  assert("TSNonNullExpression", node, opts);
}

function assertTSExportAssignment(node, opts) {
  assert("TSExportAssignment", node, opts);
}

function assertTSNamespaceExportDeclaration(node, opts) {
  assert("TSNamespaceExportDeclaration", node, opts);
}

function assertTSTypeAnnotation(node, opts) {
  assert("TSTypeAnnotation", node, opts);
}

function assertTSTypeParameterInstantiation(node, opts) {
  assert("TSTypeParameterInstantiation", node, opts);
}

function assertTSTypeParameterDeclaration(node, opts) {
  assert("TSTypeParameterDeclaration", node, opts);
}

function assertTSTypeParameter(node, opts) {
  assert("TSTypeParameter", node, opts);
}

function assertExpression(node, opts) {
  assert("Expression", node, opts);
}

function assertBinary(node, opts) {
  assert("Binary", node, opts);
}

function assertScopable(node, opts) {
  assert("Scopable", node, opts);
}

function assertBlockParent(node, opts) {
  assert("BlockParent", node, opts);
}

function assertBlock(node, opts) {
  assert("Block", node, opts);
}

function assertStatement(node, opts) {
  assert("Statement", node, opts);
}

function assertTerminatorless(node, opts) {
  assert("Terminatorless", node, opts);
}

function assertCompletionStatement(node, opts) {
  assert("CompletionStatement", node, opts);
}

function assertConditional(node, opts) {
  assert("Conditional", node, opts);
}

function assertLoop(node, opts) {
  assert("Loop", node, opts);
}

function assertWhile(node, opts) {
  assert("While", node, opts);
}

function assertExpressionWrapper(node, opts) {
  assert("ExpressionWrapper", node, opts);
}

function assertFor(node, opts) {
  assert("For", node, opts);
}

function assertForXStatement(node, opts) {
  assert("ForXStatement", node, opts);
}

function assertFunction(node, opts) {
  assert("Function", node, opts);
}

function assertFunctionParent(node, opts) {
  assert("FunctionParent", node, opts);
}

function assertPureish(node, opts) {
  assert("Pureish", node, opts);
}

function assertDeclaration(node, opts) {
  assert("Declaration", node, opts);
}

function assertPatternLike(node, opts) {
  assert("PatternLike", node, opts);
}

function assertLVal(node, opts) {
  assert("LVal", node, opts);
}

function assertTSEntityName(node, opts) {
  assert("TSEntityName", node, opts);
}

function assertLiteral(node, opts) {
  assert("Literal", node, opts);
}

function assertImmutable(node, opts) {
  assert("Immutable", node, opts);
}

function assertUserWhitespacable(node, opts) {
  assert("UserWhitespacable", node, opts);
}

function assertMethod(node, opts) {
  assert("Method", node, opts);
}

function assertObjectMember(node, opts) {
  assert("ObjectMember", node, opts);
}

function assertProperty(node, opts) {
  assert("Property", node, opts);
}

function assertUnaryLike(node, opts) {
  assert("UnaryLike", node, opts);
}

function assertPattern(node, opts) {
  assert("Pattern", node, opts);
}

function assertClass(node, opts) {
  assert("Class", node, opts);
}

function assertModuleDeclaration(node, opts) {
  assert("ModuleDeclaration", node, opts);
}

function assertExportDeclaration(node, opts) {
  assert("ExportDeclaration", node, opts);
}

function assertModuleSpecifier(node, opts) {
  assert("ModuleSpecifier", node, opts);
}

function assertPrivate(node, opts) {
  assert("Private", node, opts);
}

function assertFlow(node, opts) {
  assert("Flow", node, opts);
}

function assertFlowType(node, opts) {
  assert("FlowType", node, opts);
}

function assertFlowBaseAnnotation(node, opts) {
  assert("FlowBaseAnnotation", node, opts);
}

function assertFlowDeclaration(node, opts) {
  assert("FlowDeclaration", node, opts);
}

function assertFlowPredicate(node, opts) {
  assert("FlowPredicate", node, opts);
}

function assertEnumBody(node, opts) {
  assert("EnumBody", node, opts);
}

function assertEnumMember(node, opts) {
  assert("EnumMember", node, opts);
}

function assertJSX(node, opts) {
  assert("JSX", node, opts);
}

function assertTSTypeElement(node, opts) {
  assert("TSTypeElement", node, opts);
}

function assertTSType(node, opts) {
  assert("TSType", node, opts);
}

function assertTSBaseType(node, opts) {
  assert("TSBaseType", node, opts);
}

function assertNumberLiteral(node, opts) {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
  assert("NumberLiteral", node, opts);
}

function assertRegexLiteral(node, opts) {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
  assert("RegexLiteral", node, opts);
}

function assertRestProperty(node, opts) {
  console.trace("The node type RestProperty has been renamed to RestElement");
  assert("RestProperty", node, opts);
}

function assertSpreadProperty(node, opts) {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");
  assert("SpreadProperty", node, opts);
}
});

var createTypeAnnotationBasedOnTypeof_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTypeAnnotationBasedOnTypeof;



function createTypeAnnotationBasedOnTypeof(type) {
  if (type === "string") {
    return (0, generated$1.stringTypeAnnotation)();
  } else if (type === "number") {
    return (0, generated$1.numberTypeAnnotation)();
  } else if (type === "undefined") {
    return (0, generated$1.voidTypeAnnotation)();
  } else if (type === "boolean") {
    return (0, generated$1.booleanTypeAnnotation)();
  } else if (type === "function") {
    return (0, generated$1.genericTypeAnnotation)((0, generated$1.identifier)("Function"));
  } else if (type === "object") {
    return (0, generated$1.genericTypeAnnotation)((0, generated$1.identifier)("Object"));
  } else if (type === "symbol") {
    return (0, generated$1.genericTypeAnnotation)((0, generated$1.identifier)("Symbol"));
  } else if (type === "bigint") {
    return (0, generated$1.anyTypeAnnotation)();
  } else {
    throw new Error("Invalid typeof value: " + type);
  }
}
});

var removeTypeDuplicates_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeTypeDuplicates;



function getQualifiedName(node) {
  return (0, generated.isIdentifier)(node) ? node.name : `${node.id.name}.${getQualifiedName(node.qualification)}`;
}

function removeTypeDuplicates(nodes) {
  const generics = {};
  const bases = {};
  const typeGroups = [];
  const types = [];

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (!node) continue;

    if (types.indexOf(node) >= 0) {
      continue;
    }

    if ((0, generated.isAnyTypeAnnotation)(node)) {
      return [node];
    }

    if ((0, generated.isFlowBaseAnnotation)(node)) {
      bases[node.type] = node;
      continue;
    }

    if ((0, generated.isUnionTypeAnnotation)(node)) {
      if (typeGroups.indexOf(node.types) < 0) {
        nodes = nodes.concat(node.types);
        typeGroups.push(node.types);
      }

      continue;
    }

    if ((0, generated.isGenericTypeAnnotation)(node)) {
      const name = getQualifiedName(node.id);

      if (generics[name]) {
        let existing = generics[name];

        if (existing.typeParameters) {
          if (node.typeParameters) {
            existing.typeParameters.params = removeTypeDuplicates(existing.typeParameters.params.concat(node.typeParameters.params));
          }
        } else {
          existing = node.typeParameters;
        }
      } else {
        generics[name] = node;
      }

      continue;
    }

    types.push(node);
  }

  for (const type of Object.keys(bases)) {
    types.push(bases[type]);
  }

  for (const name of Object.keys(generics)) {
    types.push(generics[name]);
  }

  return types;
}
});

var createFlowUnionType_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createFlowUnionType;





function createFlowUnionType(types) {
  const flattened = (0, removeTypeDuplicates_1.default)(types);

  if (flattened.length === 1) {
    return flattened[0];
  } else {
    return (0, generated$1.unionTypeAnnotation)(flattened);
  }
}
});

var removeTypeDuplicates_1$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeTypeDuplicates;



function removeTypeDuplicates(nodes) {
  const generics = {};
  const bases = {};
  const typeGroups = [];
  const types = [];

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (!node) continue;

    if (types.indexOf(node) >= 0) {
      continue;
    }

    if ((0, generated.isTSAnyKeyword)(node)) {
      return [node];
    }

    if ((0, generated.isTSBaseType)(node)) {
      bases[node.type] = node;
      continue;
    }

    if ((0, generated.isTSUnionType)(node)) {
      if (typeGroups.indexOf(node.types) < 0) {
        nodes = nodes.concat(node.types);
        typeGroups.push(node.types);
      }

      continue;
    }

    types.push(node);
  }

  for (const type of Object.keys(bases)) {
    types.push(bases[type]);
  }

  for (const name of Object.keys(generics)) {
    types.push(generics[name]);
  }

  return types;
}
});

var createTSUnionType_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTSUnionType;





function createTSUnionType(typeAnnotations) {
  const types = typeAnnotations.map(type => type.typeAnnotation);
  const flattened = (0, removeTypeDuplicates_1$1.default)(types);

  if (flattened.length === 1) {
    return flattened[0];
  } else {
    return (0, generated$1.tsUnionType)(flattened);
  }
}
});

var uppercase = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ArrayExpression", {
  enumerable: true,
  get: function () {
    return generated$1.arrayExpression;
  }
});
Object.defineProperty(exports, "AssignmentExpression", {
  enumerable: true,
  get: function () {
    return generated$1.assignmentExpression;
  }
});
Object.defineProperty(exports, "BinaryExpression", {
  enumerable: true,
  get: function () {
    return generated$1.binaryExpression;
  }
});
Object.defineProperty(exports, "InterpreterDirective", {
  enumerable: true,
  get: function () {
    return generated$1.interpreterDirective;
  }
});
Object.defineProperty(exports, "Directive", {
  enumerable: true,
  get: function () {
    return generated$1.directive;
  }
});
Object.defineProperty(exports, "DirectiveLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.directiveLiteral;
  }
});
Object.defineProperty(exports, "BlockStatement", {
  enumerable: true,
  get: function () {
    return generated$1.blockStatement;
  }
});
Object.defineProperty(exports, "BreakStatement", {
  enumerable: true,
  get: function () {
    return generated$1.breakStatement;
  }
});
Object.defineProperty(exports, "CallExpression", {
  enumerable: true,
  get: function () {
    return generated$1.callExpression;
  }
});
Object.defineProperty(exports, "CatchClause", {
  enumerable: true,
  get: function () {
    return generated$1.catchClause;
  }
});
Object.defineProperty(exports, "ConditionalExpression", {
  enumerable: true,
  get: function () {
    return generated$1.conditionalExpression;
  }
});
Object.defineProperty(exports, "ContinueStatement", {
  enumerable: true,
  get: function () {
    return generated$1.continueStatement;
  }
});
Object.defineProperty(exports, "DebuggerStatement", {
  enumerable: true,
  get: function () {
    return generated$1.debuggerStatement;
  }
});
Object.defineProperty(exports, "DoWhileStatement", {
  enumerable: true,
  get: function () {
    return generated$1.doWhileStatement;
  }
});
Object.defineProperty(exports, "EmptyStatement", {
  enumerable: true,
  get: function () {
    return generated$1.emptyStatement;
  }
});
Object.defineProperty(exports, "ExpressionStatement", {
  enumerable: true,
  get: function () {
    return generated$1.expressionStatement;
  }
});
Object.defineProperty(exports, "File", {
  enumerable: true,
  get: function () {
    return generated$1.file;
  }
});
Object.defineProperty(exports, "ForInStatement", {
  enumerable: true,
  get: function () {
    return generated$1.forInStatement;
  }
});
Object.defineProperty(exports, "ForStatement", {
  enumerable: true,
  get: function () {
    return generated$1.forStatement;
  }
});
Object.defineProperty(exports, "FunctionDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.functionDeclaration;
  }
});
Object.defineProperty(exports, "FunctionExpression", {
  enumerable: true,
  get: function () {
    return generated$1.functionExpression;
  }
});
Object.defineProperty(exports, "Identifier", {
  enumerable: true,
  get: function () {
    return generated$1.identifier;
  }
});
Object.defineProperty(exports, "IfStatement", {
  enumerable: true,
  get: function () {
    return generated$1.ifStatement;
  }
});
Object.defineProperty(exports, "LabeledStatement", {
  enumerable: true,
  get: function () {
    return generated$1.labeledStatement;
  }
});
Object.defineProperty(exports, "StringLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.stringLiteral;
  }
});
Object.defineProperty(exports, "NumericLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.numericLiteral;
  }
});
Object.defineProperty(exports, "NullLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.nullLiteral;
  }
});
Object.defineProperty(exports, "BooleanLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.booleanLiteral;
  }
});
Object.defineProperty(exports, "RegExpLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.regExpLiteral;
  }
});
Object.defineProperty(exports, "LogicalExpression", {
  enumerable: true,
  get: function () {
    return generated$1.logicalExpression;
  }
});
Object.defineProperty(exports, "MemberExpression", {
  enumerable: true,
  get: function () {
    return generated$1.memberExpression;
  }
});
Object.defineProperty(exports, "NewExpression", {
  enumerable: true,
  get: function () {
    return generated$1.newExpression;
  }
});
Object.defineProperty(exports, "Program", {
  enumerable: true,
  get: function () {
    return generated$1.program;
  }
});
Object.defineProperty(exports, "ObjectExpression", {
  enumerable: true,
  get: function () {
    return generated$1.objectExpression;
  }
});
Object.defineProperty(exports, "ObjectMethod", {
  enumerable: true,
  get: function () {
    return generated$1.objectMethod;
  }
});
Object.defineProperty(exports, "ObjectProperty", {
  enumerable: true,
  get: function () {
    return generated$1.objectProperty;
  }
});
Object.defineProperty(exports, "RestElement", {
  enumerable: true,
  get: function () {
    return generated$1.restElement;
  }
});
Object.defineProperty(exports, "ReturnStatement", {
  enumerable: true,
  get: function () {
    return generated$1.returnStatement;
  }
});
Object.defineProperty(exports, "SequenceExpression", {
  enumerable: true,
  get: function () {
    return generated$1.sequenceExpression;
  }
});
Object.defineProperty(exports, "ParenthesizedExpression", {
  enumerable: true,
  get: function () {
    return generated$1.parenthesizedExpression;
  }
});
Object.defineProperty(exports, "SwitchCase", {
  enumerable: true,
  get: function () {
    return generated$1.switchCase;
  }
});
Object.defineProperty(exports, "SwitchStatement", {
  enumerable: true,
  get: function () {
    return generated$1.switchStatement;
  }
});
Object.defineProperty(exports, "ThisExpression", {
  enumerable: true,
  get: function () {
    return generated$1.thisExpression;
  }
});
Object.defineProperty(exports, "ThrowStatement", {
  enumerable: true,
  get: function () {
    return generated$1.throwStatement;
  }
});
Object.defineProperty(exports, "TryStatement", {
  enumerable: true,
  get: function () {
    return generated$1.tryStatement;
  }
});
Object.defineProperty(exports, "UnaryExpression", {
  enumerable: true,
  get: function () {
    return generated$1.unaryExpression;
  }
});
Object.defineProperty(exports, "UpdateExpression", {
  enumerable: true,
  get: function () {
    return generated$1.updateExpression;
  }
});
Object.defineProperty(exports, "VariableDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.variableDeclaration;
  }
});
Object.defineProperty(exports, "VariableDeclarator", {
  enumerable: true,
  get: function () {
    return generated$1.variableDeclarator;
  }
});
Object.defineProperty(exports, "WhileStatement", {
  enumerable: true,
  get: function () {
    return generated$1.whileStatement;
  }
});
Object.defineProperty(exports, "WithStatement", {
  enumerable: true,
  get: function () {
    return generated$1.withStatement;
  }
});
Object.defineProperty(exports, "AssignmentPattern", {
  enumerable: true,
  get: function () {
    return generated$1.assignmentPattern;
  }
});
Object.defineProperty(exports, "ArrayPattern", {
  enumerable: true,
  get: function () {
    return generated$1.arrayPattern;
  }
});
Object.defineProperty(exports, "ArrowFunctionExpression", {
  enumerable: true,
  get: function () {
    return generated$1.arrowFunctionExpression;
  }
});
Object.defineProperty(exports, "ClassBody", {
  enumerable: true,
  get: function () {
    return generated$1.classBody;
  }
});
Object.defineProperty(exports, "ClassExpression", {
  enumerable: true,
  get: function () {
    return generated$1.classExpression;
  }
});
Object.defineProperty(exports, "ClassDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.classDeclaration;
  }
});
Object.defineProperty(exports, "ExportAllDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.exportAllDeclaration;
  }
});
Object.defineProperty(exports, "ExportDefaultDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.exportDefaultDeclaration;
  }
});
Object.defineProperty(exports, "ExportNamedDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.exportNamedDeclaration;
  }
});
Object.defineProperty(exports, "ExportSpecifier", {
  enumerable: true,
  get: function () {
    return generated$1.exportSpecifier;
  }
});
Object.defineProperty(exports, "ForOfStatement", {
  enumerable: true,
  get: function () {
    return generated$1.forOfStatement;
  }
});
Object.defineProperty(exports, "ImportDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.importDeclaration;
  }
});
Object.defineProperty(exports, "ImportDefaultSpecifier", {
  enumerable: true,
  get: function () {
    return generated$1.importDefaultSpecifier;
  }
});
Object.defineProperty(exports, "ImportNamespaceSpecifier", {
  enumerable: true,
  get: function () {
    return generated$1.importNamespaceSpecifier;
  }
});
Object.defineProperty(exports, "ImportSpecifier", {
  enumerable: true,
  get: function () {
    return generated$1.importSpecifier;
  }
});
Object.defineProperty(exports, "MetaProperty", {
  enumerable: true,
  get: function () {
    return generated$1.metaProperty;
  }
});
Object.defineProperty(exports, "ClassMethod", {
  enumerable: true,
  get: function () {
    return generated$1.classMethod;
  }
});
Object.defineProperty(exports, "ObjectPattern", {
  enumerable: true,
  get: function () {
    return generated$1.objectPattern;
  }
});
Object.defineProperty(exports, "SpreadElement", {
  enumerable: true,
  get: function () {
    return generated$1.spreadElement;
  }
});
Object.defineProperty(exports, "Super", {
  enumerable: true,
  get: function () {
    return generated$1.super;
  }
});
Object.defineProperty(exports, "TaggedTemplateExpression", {
  enumerable: true,
  get: function () {
    return generated$1.taggedTemplateExpression;
  }
});
Object.defineProperty(exports, "TemplateElement", {
  enumerable: true,
  get: function () {
    return generated$1.templateElement;
  }
});
Object.defineProperty(exports, "TemplateLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.templateLiteral;
  }
});
Object.defineProperty(exports, "YieldExpression", {
  enumerable: true,
  get: function () {
    return generated$1.yieldExpression;
  }
});
Object.defineProperty(exports, "AwaitExpression", {
  enumerable: true,
  get: function () {
    return generated$1.awaitExpression;
  }
});
Object.defineProperty(exports, "Import", {
  enumerable: true,
  get: function () {
    return generated$1.import;
  }
});
Object.defineProperty(exports, "BigIntLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.bigIntLiteral;
  }
});
Object.defineProperty(exports, "ExportNamespaceSpecifier", {
  enumerable: true,
  get: function () {
    return generated$1.exportNamespaceSpecifier;
  }
});
Object.defineProperty(exports, "OptionalMemberExpression", {
  enumerable: true,
  get: function () {
    return generated$1.optionalMemberExpression;
  }
});
Object.defineProperty(exports, "OptionalCallExpression", {
  enumerable: true,
  get: function () {
    return generated$1.optionalCallExpression;
  }
});
Object.defineProperty(exports, "ClassProperty", {
  enumerable: true,
  get: function () {
    return generated$1.classProperty;
  }
});
Object.defineProperty(exports, "ClassPrivateProperty", {
  enumerable: true,
  get: function () {
    return generated$1.classPrivateProperty;
  }
});
Object.defineProperty(exports, "ClassPrivateMethod", {
  enumerable: true,
  get: function () {
    return generated$1.classPrivateMethod;
  }
});
Object.defineProperty(exports, "PrivateName", {
  enumerable: true,
  get: function () {
    return generated$1.privateName;
  }
});
Object.defineProperty(exports, "AnyTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.anyTypeAnnotation;
  }
});
Object.defineProperty(exports, "ArrayTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.arrayTypeAnnotation;
  }
});
Object.defineProperty(exports, "BooleanTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.booleanTypeAnnotation;
  }
});
Object.defineProperty(exports, "BooleanLiteralTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.booleanLiteralTypeAnnotation;
  }
});
Object.defineProperty(exports, "NullLiteralTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.nullLiteralTypeAnnotation;
  }
});
Object.defineProperty(exports, "ClassImplements", {
  enumerable: true,
  get: function () {
    return generated$1.classImplements;
  }
});
Object.defineProperty(exports, "DeclareClass", {
  enumerable: true,
  get: function () {
    return generated$1.declareClass;
  }
});
Object.defineProperty(exports, "DeclareFunction", {
  enumerable: true,
  get: function () {
    return generated$1.declareFunction;
  }
});
Object.defineProperty(exports, "DeclareInterface", {
  enumerable: true,
  get: function () {
    return generated$1.declareInterface;
  }
});
Object.defineProperty(exports, "DeclareModule", {
  enumerable: true,
  get: function () {
    return generated$1.declareModule;
  }
});
Object.defineProperty(exports, "DeclareModuleExports", {
  enumerable: true,
  get: function () {
    return generated$1.declareModuleExports;
  }
});
Object.defineProperty(exports, "DeclareTypeAlias", {
  enumerable: true,
  get: function () {
    return generated$1.declareTypeAlias;
  }
});
Object.defineProperty(exports, "DeclareOpaqueType", {
  enumerable: true,
  get: function () {
    return generated$1.declareOpaqueType;
  }
});
Object.defineProperty(exports, "DeclareVariable", {
  enumerable: true,
  get: function () {
    return generated$1.declareVariable;
  }
});
Object.defineProperty(exports, "DeclareExportDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.declareExportDeclaration;
  }
});
Object.defineProperty(exports, "DeclareExportAllDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.declareExportAllDeclaration;
  }
});
Object.defineProperty(exports, "DeclaredPredicate", {
  enumerable: true,
  get: function () {
    return generated$1.declaredPredicate;
  }
});
Object.defineProperty(exports, "ExistsTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.existsTypeAnnotation;
  }
});
Object.defineProperty(exports, "FunctionTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.functionTypeAnnotation;
  }
});
Object.defineProperty(exports, "FunctionTypeParam", {
  enumerable: true,
  get: function () {
    return generated$1.functionTypeParam;
  }
});
Object.defineProperty(exports, "GenericTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.genericTypeAnnotation;
  }
});
Object.defineProperty(exports, "InferredPredicate", {
  enumerable: true,
  get: function () {
    return generated$1.inferredPredicate;
  }
});
Object.defineProperty(exports, "InterfaceExtends", {
  enumerable: true,
  get: function () {
    return generated$1.interfaceExtends;
  }
});
Object.defineProperty(exports, "InterfaceDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.interfaceDeclaration;
  }
});
Object.defineProperty(exports, "InterfaceTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.interfaceTypeAnnotation;
  }
});
Object.defineProperty(exports, "IntersectionTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.intersectionTypeAnnotation;
  }
});
Object.defineProperty(exports, "MixedTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.mixedTypeAnnotation;
  }
});
Object.defineProperty(exports, "EmptyTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.emptyTypeAnnotation;
  }
});
Object.defineProperty(exports, "NullableTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.nullableTypeAnnotation;
  }
});
Object.defineProperty(exports, "NumberLiteralTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.numberLiteralTypeAnnotation;
  }
});
Object.defineProperty(exports, "NumberTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.numberTypeAnnotation;
  }
});
Object.defineProperty(exports, "ObjectTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.objectTypeAnnotation;
  }
});
Object.defineProperty(exports, "ObjectTypeInternalSlot", {
  enumerable: true,
  get: function () {
    return generated$1.objectTypeInternalSlot;
  }
});
Object.defineProperty(exports, "ObjectTypeCallProperty", {
  enumerable: true,
  get: function () {
    return generated$1.objectTypeCallProperty;
  }
});
Object.defineProperty(exports, "ObjectTypeIndexer", {
  enumerable: true,
  get: function () {
    return generated$1.objectTypeIndexer;
  }
});
Object.defineProperty(exports, "ObjectTypeProperty", {
  enumerable: true,
  get: function () {
    return generated$1.objectTypeProperty;
  }
});
Object.defineProperty(exports, "ObjectTypeSpreadProperty", {
  enumerable: true,
  get: function () {
    return generated$1.objectTypeSpreadProperty;
  }
});
Object.defineProperty(exports, "OpaqueType", {
  enumerable: true,
  get: function () {
    return generated$1.opaqueType;
  }
});
Object.defineProperty(exports, "QualifiedTypeIdentifier", {
  enumerable: true,
  get: function () {
    return generated$1.qualifiedTypeIdentifier;
  }
});
Object.defineProperty(exports, "StringLiteralTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.stringLiteralTypeAnnotation;
  }
});
Object.defineProperty(exports, "StringTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.stringTypeAnnotation;
  }
});
Object.defineProperty(exports, "SymbolTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.symbolTypeAnnotation;
  }
});
Object.defineProperty(exports, "ThisTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.thisTypeAnnotation;
  }
});
Object.defineProperty(exports, "TupleTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.tupleTypeAnnotation;
  }
});
Object.defineProperty(exports, "TypeofTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.typeofTypeAnnotation;
  }
});
Object.defineProperty(exports, "TypeAlias", {
  enumerable: true,
  get: function () {
    return generated$1.typeAlias;
  }
});
Object.defineProperty(exports, "TypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.typeAnnotation;
  }
});
Object.defineProperty(exports, "TypeCastExpression", {
  enumerable: true,
  get: function () {
    return generated$1.typeCastExpression;
  }
});
Object.defineProperty(exports, "TypeParameter", {
  enumerable: true,
  get: function () {
    return generated$1.typeParameter;
  }
});
Object.defineProperty(exports, "TypeParameterDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.typeParameterDeclaration;
  }
});
Object.defineProperty(exports, "TypeParameterInstantiation", {
  enumerable: true,
  get: function () {
    return generated$1.typeParameterInstantiation;
  }
});
Object.defineProperty(exports, "UnionTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.unionTypeAnnotation;
  }
});
Object.defineProperty(exports, "Variance", {
  enumerable: true,
  get: function () {
    return generated$1.variance;
  }
});
Object.defineProperty(exports, "VoidTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.voidTypeAnnotation;
  }
});
Object.defineProperty(exports, "EnumDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.enumDeclaration;
  }
});
Object.defineProperty(exports, "EnumBooleanBody", {
  enumerable: true,
  get: function () {
    return generated$1.enumBooleanBody;
  }
});
Object.defineProperty(exports, "EnumNumberBody", {
  enumerable: true,
  get: function () {
    return generated$1.enumNumberBody;
  }
});
Object.defineProperty(exports, "EnumStringBody", {
  enumerable: true,
  get: function () {
    return generated$1.enumStringBody;
  }
});
Object.defineProperty(exports, "EnumSymbolBody", {
  enumerable: true,
  get: function () {
    return generated$1.enumSymbolBody;
  }
});
Object.defineProperty(exports, "EnumBooleanMember", {
  enumerable: true,
  get: function () {
    return generated$1.enumBooleanMember;
  }
});
Object.defineProperty(exports, "EnumNumberMember", {
  enumerable: true,
  get: function () {
    return generated$1.enumNumberMember;
  }
});
Object.defineProperty(exports, "EnumStringMember", {
  enumerable: true,
  get: function () {
    return generated$1.enumStringMember;
  }
});
Object.defineProperty(exports, "EnumDefaultedMember", {
  enumerable: true,
  get: function () {
    return generated$1.enumDefaultedMember;
  }
});
Object.defineProperty(exports, "IndexedAccessType", {
  enumerable: true,
  get: function () {
    return generated$1.indexedAccessType;
  }
});
Object.defineProperty(exports, "OptionalIndexedAccessType", {
  enumerable: true,
  get: function () {
    return generated$1.optionalIndexedAccessType;
  }
});
Object.defineProperty(exports, "JSXAttribute", {
  enumerable: true,
  get: function () {
    return generated$1.jsxAttribute;
  }
});
Object.defineProperty(exports, "JSXClosingElement", {
  enumerable: true,
  get: function () {
    return generated$1.jsxClosingElement;
  }
});
Object.defineProperty(exports, "JSXElement", {
  enumerable: true,
  get: function () {
    return generated$1.jsxElement;
  }
});
Object.defineProperty(exports, "JSXEmptyExpression", {
  enumerable: true,
  get: function () {
    return generated$1.jsxEmptyExpression;
  }
});
Object.defineProperty(exports, "JSXExpressionContainer", {
  enumerable: true,
  get: function () {
    return generated$1.jsxExpressionContainer;
  }
});
Object.defineProperty(exports, "JSXSpreadChild", {
  enumerable: true,
  get: function () {
    return generated$1.jsxSpreadChild;
  }
});
Object.defineProperty(exports, "JSXIdentifier", {
  enumerable: true,
  get: function () {
    return generated$1.jsxIdentifier;
  }
});
Object.defineProperty(exports, "JSXMemberExpression", {
  enumerable: true,
  get: function () {
    return generated$1.jsxMemberExpression;
  }
});
Object.defineProperty(exports, "JSXNamespacedName", {
  enumerable: true,
  get: function () {
    return generated$1.jsxNamespacedName;
  }
});
Object.defineProperty(exports, "JSXOpeningElement", {
  enumerable: true,
  get: function () {
    return generated$1.jsxOpeningElement;
  }
});
Object.defineProperty(exports, "JSXSpreadAttribute", {
  enumerable: true,
  get: function () {
    return generated$1.jsxSpreadAttribute;
  }
});
Object.defineProperty(exports, "JSXText", {
  enumerable: true,
  get: function () {
    return generated$1.jsxText;
  }
});
Object.defineProperty(exports, "JSXFragment", {
  enumerable: true,
  get: function () {
    return generated$1.jsxFragment;
  }
});
Object.defineProperty(exports, "JSXOpeningFragment", {
  enumerable: true,
  get: function () {
    return generated$1.jsxOpeningFragment;
  }
});
Object.defineProperty(exports, "JSXClosingFragment", {
  enumerable: true,
  get: function () {
    return generated$1.jsxClosingFragment;
  }
});
Object.defineProperty(exports, "Noop", {
  enumerable: true,
  get: function () {
    return generated$1.noop;
  }
});
Object.defineProperty(exports, "Placeholder", {
  enumerable: true,
  get: function () {
    return generated$1.placeholder;
  }
});
Object.defineProperty(exports, "V8IntrinsicIdentifier", {
  enumerable: true,
  get: function () {
    return generated$1.v8IntrinsicIdentifier;
  }
});
Object.defineProperty(exports, "ArgumentPlaceholder", {
  enumerable: true,
  get: function () {
    return generated$1.argumentPlaceholder;
  }
});
Object.defineProperty(exports, "BindExpression", {
  enumerable: true,
  get: function () {
    return generated$1.bindExpression;
  }
});
Object.defineProperty(exports, "ImportAttribute", {
  enumerable: true,
  get: function () {
    return generated$1.importAttribute;
  }
});
Object.defineProperty(exports, "Decorator", {
  enumerable: true,
  get: function () {
    return generated$1.decorator;
  }
});
Object.defineProperty(exports, "DoExpression", {
  enumerable: true,
  get: function () {
    return generated$1.doExpression;
  }
});
Object.defineProperty(exports, "ExportDefaultSpecifier", {
  enumerable: true,
  get: function () {
    return generated$1.exportDefaultSpecifier;
  }
});
Object.defineProperty(exports, "RecordExpression", {
  enumerable: true,
  get: function () {
    return generated$1.recordExpression;
  }
});
Object.defineProperty(exports, "TupleExpression", {
  enumerable: true,
  get: function () {
    return generated$1.tupleExpression;
  }
});
Object.defineProperty(exports, "DecimalLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.decimalLiteral;
  }
});
Object.defineProperty(exports, "StaticBlock", {
  enumerable: true,
  get: function () {
    return generated$1.staticBlock;
  }
});
Object.defineProperty(exports, "ModuleExpression", {
  enumerable: true,
  get: function () {
    return generated$1.moduleExpression;
  }
});
Object.defineProperty(exports, "TopicReference", {
  enumerable: true,
  get: function () {
    return generated$1.topicReference;
  }
});
Object.defineProperty(exports, "PipelineTopicExpression", {
  enumerable: true,
  get: function () {
    return generated$1.pipelineTopicExpression;
  }
});
Object.defineProperty(exports, "PipelineBareFunction", {
  enumerable: true,
  get: function () {
    return generated$1.pipelineBareFunction;
  }
});
Object.defineProperty(exports, "PipelinePrimaryTopicReference", {
  enumerable: true,
  get: function () {
    return generated$1.pipelinePrimaryTopicReference;
  }
});
Object.defineProperty(exports, "TSParameterProperty", {
  enumerable: true,
  get: function () {
    return generated$1.tsParameterProperty;
  }
});
Object.defineProperty(exports, "TSDeclareFunction", {
  enumerable: true,
  get: function () {
    return generated$1.tsDeclareFunction;
  }
});
Object.defineProperty(exports, "TSDeclareMethod", {
  enumerable: true,
  get: function () {
    return generated$1.tsDeclareMethod;
  }
});
Object.defineProperty(exports, "TSQualifiedName", {
  enumerable: true,
  get: function () {
    return generated$1.tsQualifiedName;
  }
});
Object.defineProperty(exports, "TSCallSignatureDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.tsCallSignatureDeclaration;
  }
});
Object.defineProperty(exports, "TSConstructSignatureDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.tsConstructSignatureDeclaration;
  }
});
Object.defineProperty(exports, "TSPropertySignature", {
  enumerable: true,
  get: function () {
    return generated$1.tsPropertySignature;
  }
});
Object.defineProperty(exports, "TSMethodSignature", {
  enumerable: true,
  get: function () {
    return generated$1.tsMethodSignature;
  }
});
Object.defineProperty(exports, "TSIndexSignature", {
  enumerable: true,
  get: function () {
    return generated$1.tsIndexSignature;
  }
});
Object.defineProperty(exports, "TSAnyKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsAnyKeyword;
  }
});
Object.defineProperty(exports, "TSBooleanKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsBooleanKeyword;
  }
});
Object.defineProperty(exports, "TSBigIntKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsBigIntKeyword;
  }
});
Object.defineProperty(exports, "TSIntrinsicKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsIntrinsicKeyword;
  }
});
Object.defineProperty(exports, "TSNeverKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsNeverKeyword;
  }
});
Object.defineProperty(exports, "TSNullKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsNullKeyword;
  }
});
Object.defineProperty(exports, "TSNumberKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsNumberKeyword;
  }
});
Object.defineProperty(exports, "TSObjectKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsObjectKeyword;
  }
});
Object.defineProperty(exports, "TSStringKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsStringKeyword;
  }
});
Object.defineProperty(exports, "TSSymbolKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsSymbolKeyword;
  }
});
Object.defineProperty(exports, "TSUndefinedKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsUndefinedKeyword;
  }
});
Object.defineProperty(exports, "TSUnknownKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsUnknownKeyword;
  }
});
Object.defineProperty(exports, "TSVoidKeyword", {
  enumerable: true,
  get: function () {
    return generated$1.tsVoidKeyword;
  }
});
Object.defineProperty(exports, "TSThisType", {
  enumerable: true,
  get: function () {
    return generated$1.tsThisType;
  }
});
Object.defineProperty(exports, "TSFunctionType", {
  enumerable: true,
  get: function () {
    return generated$1.tsFunctionType;
  }
});
Object.defineProperty(exports, "TSConstructorType", {
  enumerable: true,
  get: function () {
    return generated$1.tsConstructorType;
  }
});
Object.defineProperty(exports, "TSTypeReference", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypeReference;
  }
});
Object.defineProperty(exports, "TSTypePredicate", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypePredicate;
  }
});
Object.defineProperty(exports, "TSTypeQuery", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypeQuery;
  }
});
Object.defineProperty(exports, "TSTypeLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypeLiteral;
  }
});
Object.defineProperty(exports, "TSArrayType", {
  enumerable: true,
  get: function () {
    return generated$1.tsArrayType;
  }
});
Object.defineProperty(exports, "TSTupleType", {
  enumerable: true,
  get: function () {
    return generated$1.tsTupleType;
  }
});
Object.defineProperty(exports, "TSOptionalType", {
  enumerable: true,
  get: function () {
    return generated$1.tsOptionalType;
  }
});
Object.defineProperty(exports, "TSRestType", {
  enumerable: true,
  get: function () {
    return generated$1.tsRestType;
  }
});
Object.defineProperty(exports, "TSNamedTupleMember", {
  enumerable: true,
  get: function () {
    return generated$1.tsNamedTupleMember;
  }
});
Object.defineProperty(exports, "TSUnionType", {
  enumerable: true,
  get: function () {
    return generated$1.tsUnionType;
  }
});
Object.defineProperty(exports, "TSIntersectionType", {
  enumerable: true,
  get: function () {
    return generated$1.tsIntersectionType;
  }
});
Object.defineProperty(exports, "TSConditionalType", {
  enumerable: true,
  get: function () {
    return generated$1.tsConditionalType;
  }
});
Object.defineProperty(exports, "TSInferType", {
  enumerable: true,
  get: function () {
    return generated$1.tsInferType;
  }
});
Object.defineProperty(exports, "TSParenthesizedType", {
  enumerable: true,
  get: function () {
    return generated$1.tsParenthesizedType;
  }
});
Object.defineProperty(exports, "TSTypeOperator", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypeOperator;
  }
});
Object.defineProperty(exports, "TSIndexedAccessType", {
  enumerable: true,
  get: function () {
    return generated$1.tsIndexedAccessType;
  }
});
Object.defineProperty(exports, "TSMappedType", {
  enumerable: true,
  get: function () {
    return generated$1.tsMappedType;
  }
});
Object.defineProperty(exports, "TSLiteralType", {
  enumerable: true,
  get: function () {
    return generated$1.tsLiteralType;
  }
});
Object.defineProperty(exports, "TSExpressionWithTypeArguments", {
  enumerable: true,
  get: function () {
    return generated$1.tsExpressionWithTypeArguments;
  }
});
Object.defineProperty(exports, "TSInterfaceDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.tsInterfaceDeclaration;
  }
});
Object.defineProperty(exports, "TSInterfaceBody", {
  enumerable: true,
  get: function () {
    return generated$1.tsInterfaceBody;
  }
});
Object.defineProperty(exports, "TSTypeAliasDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypeAliasDeclaration;
  }
});
Object.defineProperty(exports, "TSAsExpression", {
  enumerable: true,
  get: function () {
    return generated$1.tsAsExpression;
  }
});
Object.defineProperty(exports, "TSTypeAssertion", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypeAssertion;
  }
});
Object.defineProperty(exports, "TSEnumDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.tsEnumDeclaration;
  }
});
Object.defineProperty(exports, "TSEnumMember", {
  enumerable: true,
  get: function () {
    return generated$1.tsEnumMember;
  }
});
Object.defineProperty(exports, "TSModuleDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.tsModuleDeclaration;
  }
});
Object.defineProperty(exports, "TSModuleBlock", {
  enumerable: true,
  get: function () {
    return generated$1.tsModuleBlock;
  }
});
Object.defineProperty(exports, "TSImportType", {
  enumerable: true,
  get: function () {
    return generated$1.tsImportType;
  }
});
Object.defineProperty(exports, "TSImportEqualsDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.tsImportEqualsDeclaration;
  }
});
Object.defineProperty(exports, "TSExternalModuleReference", {
  enumerable: true,
  get: function () {
    return generated$1.tsExternalModuleReference;
  }
});
Object.defineProperty(exports, "TSNonNullExpression", {
  enumerable: true,
  get: function () {
    return generated$1.tsNonNullExpression;
  }
});
Object.defineProperty(exports, "TSExportAssignment", {
  enumerable: true,
  get: function () {
    return generated$1.tsExportAssignment;
  }
});
Object.defineProperty(exports, "TSNamespaceExportDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.tsNamespaceExportDeclaration;
  }
});
Object.defineProperty(exports, "TSTypeAnnotation", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypeAnnotation;
  }
});
Object.defineProperty(exports, "TSTypeParameterInstantiation", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypeParameterInstantiation;
  }
});
Object.defineProperty(exports, "TSTypeParameterDeclaration", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypeParameterDeclaration;
  }
});
Object.defineProperty(exports, "TSTypeParameter", {
  enumerable: true,
  get: function () {
    return generated$1.tsTypeParameter;
  }
});
Object.defineProperty(exports, "NumberLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.numberLiteral;
  }
});
Object.defineProperty(exports, "RegexLiteral", {
  enumerable: true,
  get: function () {
    return generated$1.regexLiteral;
  }
});
Object.defineProperty(exports, "RestProperty", {
  enumerable: true,
  get: function () {
    return generated$1.restProperty;
  }
});
Object.defineProperty(exports, "SpreadProperty", {
  enumerable: true,
  get: function () {
    return generated$1.spreadProperty;
  }
});
});

var cloneNode_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneNode;





const has = Function.call.bind(Object.prototype.hasOwnProperty);

function cloneIfNode(obj, deep, withoutLoc) {
  if (obj && typeof obj.type === "string") {
    return cloneNode(obj, deep, withoutLoc);
  }

  return obj;
}

function cloneIfNodeOrArray(obj, deep, withoutLoc) {
  if (Array.isArray(obj)) {
    return obj.map(node => cloneIfNode(node, deep, withoutLoc));
  }

  return cloneIfNode(obj, deep, withoutLoc);
}

function cloneNode(node, deep = true, withoutLoc = false) {
  if (!node) return node;
  const {
    type
  } = node;
  const newNode = {
    type: node.type
  };

  if ((0, generated.isIdentifier)(node)) {
    newNode.name = node.name;

    if (has(node, "optional") && typeof node.optional === "boolean") {
      newNode.optional = node.optional;
    }

    if (has(node, "typeAnnotation")) {
      newNode.typeAnnotation = deep ? cloneIfNodeOrArray(node.typeAnnotation, true, withoutLoc) : node.typeAnnotation;
    }
  } else if (!has(definitions.NODE_FIELDS, type)) {
    throw new Error(`Unknown node type: "${type}"`);
  } else {
    for (const field of Object.keys(definitions.NODE_FIELDS[type])) {
      if (has(node, field)) {
        if (deep) {
          newNode[field] = (0, generated.isFile)(node) && field === "comments" ? maybeCloneComments(node.comments, deep, withoutLoc) : cloneIfNodeOrArray(node[field], true, withoutLoc);
        } else {
          newNode[field] = node[field];
        }
      }
    }
  }

  if (has(node, "loc")) {
    if (withoutLoc) {
      newNode.loc = null;
    } else {
      newNode.loc = node.loc;
    }
  }

  if (has(node, "leadingComments")) {
    newNode.leadingComments = maybeCloneComments(node.leadingComments, deep, withoutLoc);
  }

  if (has(node, "innerComments")) {
    newNode.innerComments = maybeCloneComments(node.innerComments, deep, withoutLoc);
  }

  if (has(node, "trailingComments")) {
    newNode.trailingComments = maybeCloneComments(node.trailingComments, deep, withoutLoc);
  }

  if (has(node, "extra")) {
    newNode.extra = Object.assign({}, node.extra);
  }

  return newNode;
}

function maybeCloneComments(comments, deep, withoutLoc) {
  if (!comments || !deep) {
    return comments;
  }

  return comments.map(({
    type,
    value,
    loc
  }) => {
    if (withoutLoc) {
      return {
        type,
        value,
        loc: null
      };
    }

    return {
      type,
      value,
      loc
    };
  });
}
});

var clone_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clone;



function clone(node) {
  return (0, cloneNode_1.default)(node, false);
}
});

var cloneDeep_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneDeep;



function cloneDeep(node) {
  return (0, cloneNode_1.default)(node);
}
});

var cloneDeepWithoutLoc_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneDeepWithoutLoc;



function cloneDeepWithoutLoc(node) {
  return (0, cloneNode_1.default)(node, true, true);
}
});

var cloneWithoutLoc_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneWithoutLoc;



function cloneWithoutLoc(node) {
  return (0, cloneNode_1.default)(node, false, true);
}
});

var addComments_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addComments;

function addComments(node, type, comments) {
  if (!comments || !node) return node;
  const key = `${type}Comments`;

  if (node[key]) {
    if (type === "leading") {
      node[key] = comments.concat(node[key]);
    } else {
      node[key] = node[key].concat(comments);
    }
  } else {
    node[key] = comments;
  }

  return node;
}
});

var addComment_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addComment;



function addComment(node, type, content, line) {
  return (0, addComments_1.default)(node, type, [{
    type: line ? "CommentLine" : "CommentBlock",
    value: content
  }]);
}
});

var inherit_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inherit;

function inherit(key, child, parent) {
  if (child && parent) {
    child[key] = Array.from(new Set([].concat(child[key], parent[key]).filter(Boolean)));
  }
}
});

var inheritInnerComments_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inheritInnerComments;



function inheritInnerComments(child, parent) {
  (0, inherit_1.default)("innerComments", child, parent);
}
});

var inheritLeadingComments_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inheritLeadingComments;



function inheritLeadingComments(child, parent) {
  (0, inherit_1.default)("leadingComments", child, parent);
}
});

var inheritTrailingComments_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inheritTrailingComments;



function inheritTrailingComments(child, parent) {
  (0, inherit_1.default)("trailingComments", child, parent);
}
});

var inheritsComments_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inheritsComments;







function inheritsComments(child, parent) {
  (0, inheritTrailingComments_1.default)(child, parent);
  (0, inheritLeadingComments_1.default)(child, parent);
  (0, inheritInnerComments_1.default)(child, parent);
  return child;
}
});

var removeComments_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeComments;



function removeComments(node) {
  constants.COMMENT_KEYS.forEach(key => {
    node[key] = null;
  });

  return node;
}
});

var generated$3 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSBASETYPE_TYPES = exports.TSTYPE_TYPES = exports.TSTYPEELEMENT_TYPES = exports.JSX_TYPES = exports.ENUMMEMBER_TYPES = exports.ENUMBODY_TYPES = exports.FLOWPREDICATE_TYPES = exports.FLOWDECLARATION_TYPES = exports.FLOWBASEANNOTATION_TYPES = exports.FLOWTYPE_TYPES = exports.FLOW_TYPES = exports.PRIVATE_TYPES = exports.MODULESPECIFIER_TYPES = exports.EXPORTDECLARATION_TYPES = exports.MODULEDECLARATION_TYPES = exports.CLASS_TYPES = exports.PATTERN_TYPES = exports.UNARYLIKE_TYPES = exports.PROPERTY_TYPES = exports.OBJECTMEMBER_TYPES = exports.METHOD_TYPES = exports.USERWHITESPACABLE_TYPES = exports.IMMUTABLE_TYPES = exports.LITERAL_TYPES = exports.TSENTITYNAME_TYPES = exports.LVAL_TYPES = exports.PATTERNLIKE_TYPES = exports.DECLARATION_TYPES = exports.PUREISH_TYPES = exports.FUNCTIONPARENT_TYPES = exports.FUNCTION_TYPES = exports.FORXSTATEMENT_TYPES = exports.FOR_TYPES = exports.EXPRESSIONWRAPPER_TYPES = exports.WHILE_TYPES = exports.LOOP_TYPES = exports.CONDITIONAL_TYPES = exports.COMPLETIONSTATEMENT_TYPES = exports.TERMINATORLESS_TYPES = exports.STATEMENT_TYPES = exports.BLOCK_TYPES = exports.BLOCKPARENT_TYPES = exports.SCOPABLE_TYPES = exports.BINARY_TYPES = exports.EXPRESSION_TYPES = void 0;



const EXPRESSION_TYPES = definitions.FLIPPED_ALIAS_KEYS["Expression"];
exports.EXPRESSION_TYPES = EXPRESSION_TYPES;
const BINARY_TYPES = definitions.FLIPPED_ALIAS_KEYS["Binary"];
exports.BINARY_TYPES = BINARY_TYPES;
const SCOPABLE_TYPES = definitions.FLIPPED_ALIAS_KEYS["Scopable"];
exports.SCOPABLE_TYPES = SCOPABLE_TYPES;
const BLOCKPARENT_TYPES = definitions.FLIPPED_ALIAS_KEYS["BlockParent"];
exports.BLOCKPARENT_TYPES = BLOCKPARENT_TYPES;
const BLOCK_TYPES = definitions.FLIPPED_ALIAS_KEYS["Block"];
exports.BLOCK_TYPES = BLOCK_TYPES;
const STATEMENT_TYPES = definitions.FLIPPED_ALIAS_KEYS["Statement"];
exports.STATEMENT_TYPES = STATEMENT_TYPES;
const TERMINATORLESS_TYPES = definitions.FLIPPED_ALIAS_KEYS["Terminatorless"];
exports.TERMINATORLESS_TYPES = TERMINATORLESS_TYPES;
const COMPLETIONSTATEMENT_TYPES = definitions.FLIPPED_ALIAS_KEYS["CompletionStatement"];
exports.COMPLETIONSTATEMENT_TYPES = COMPLETIONSTATEMENT_TYPES;
const CONDITIONAL_TYPES = definitions.FLIPPED_ALIAS_KEYS["Conditional"];
exports.CONDITIONAL_TYPES = CONDITIONAL_TYPES;
const LOOP_TYPES = definitions.FLIPPED_ALIAS_KEYS["Loop"];
exports.LOOP_TYPES = LOOP_TYPES;
const WHILE_TYPES = definitions.FLIPPED_ALIAS_KEYS["While"];
exports.WHILE_TYPES = WHILE_TYPES;
const EXPRESSIONWRAPPER_TYPES = definitions.FLIPPED_ALIAS_KEYS["ExpressionWrapper"];
exports.EXPRESSIONWRAPPER_TYPES = EXPRESSIONWRAPPER_TYPES;
const FOR_TYPES = definitions.FLIPPED_ALIAS_KEYS["For"];
exports.FOR_TYPES = FOR_TYPES;
const FORXSTATEMENT_TYPES = definitions.FLIPPED_ALIAS_KEYS["ForXStatement"];
exports.FORXSTATEMENT_TYPES = FORXSTATEMENT_TYPES;
const FUNCTION_TYPES = definitions.FLIPPED_ALIAS_KEYS["Function"];
exports.FUNCTION_TYPES = FUNCTION_TYPES;
const FUNCTIONPARENT_TYPES = definitions.FLIPPED_ALIAS_KEYS["FunctionParent"];
exports.FUNCTIONPARENT_TYPES = FUNCTIONPARENT_TYPES;
const PUREISH_TYPES = definitions.FLIPPED_ALIAS_KEYS["Pureish"];
exports.PUREISH_TYPES = PUREISH_TYPES;
const DECLARATION_TYPES = definitions.FLIPPED_ALIAS_KEYS["Declaration"];
exports.DECLARATION_TYPES = DECLARATION_TYPES;
const PATTERNLIKE_TYPES = definitions.FLIPPED_ALIAS_KEYS["PatternLike"];
exports.PATTERNLIKE_TYPES = PATTERNLIKE_TYPES;
const LVAL_TYPES = definitions.FLIPPED_ALIAS_KEYS["LVal"];
exports.LVAL_TYPES = LVAL_TYPES;
const TSENTITYNAME_TYPES = definitions.FLIPPED_ALIAS_KEYS["TSEntityName"];
exports.TSENTITYNAME_TYPES = TSENTITYNAME_TYPES;
const LITERAL_TYPES = definitions.FLIPPED_ALIAS_KEYS["Literal"];
exports.LITERAL_TYPES = LITERAL_TYPES;
const IMMUTABLE_TYPES = definitions.FLIPPED_ALIAS_KEYS["Immutable"];
exports.IMMUTABLE_TYPES = IMMUTABLE_TYPES;
const USERWHITESPACABLE_TYPES = definitions.FLIPPED_ALIAS_KEYS["UserWhitespacable"];
exports.USERWHITESPACABLE_TYPES = USERWHITESPACABLE_TYPES;
const METHOD_TYPES = definitions.FLIPPED_ALIAS_KEYS["Method"];
exports.METHOD_TYPES = METHOD_TYPES;
const OBJECTMEMBER_TYPES = definitions.FLIPPED_ALIAS_KEYS["ObjectMember"];
exports.OBJECTMEMBER_TYPES = OBJECTMEMBER_TYPES;
const PROPERTY_TYPES = definitions.FLIPPED_ALIAS_KEYS["Property"];
exports.PROPERTY_TYPES = PROPERTY_TYPES;
const UNARYLIKE_TYPES = definitions.FLIPPED_ALIAS_KEYS["UnaryLike"];
exports.UNARYLIKE_TYPES = UNARYLIKE_TYPES;
const PATTERN_TYPES = definitions.FLIPPED_ALIAS_KEYS["Pattern"];
exports.PATTERN_TYPES = PATTERN_TYPES;
const CLASS_TYPES = definitions.FLIPPED_ALIAS_KEYS["Class"];
exports.CLASS_TYPES = CLASS_TYPES;
const MODULEDECLARATION_TYPES = definitions.FLIPPED_ALIAS_KEYS["ModuleDeclaration"];
exports.MODULEDECLARATION_TYPES = MODULEDECLARATION_TYPES;
const EXPORTDECLARATION_TYPES = definitions.FLIPPED_ALIAS_KEYS["ExportDeclaration"];
exports.EXPORTDECLARATION_TYPES = EXPORTDECLARATION_TYPES;
const MODULESPECIFIER_TYPES = definitions.FLIPPED_ALIAS_KEYS["ModuleSpecifier"];
exports.MODULESPECIFIER_TYPES = MODULESPECIFIER_TYPES;
const PRIVATE_TYPES = definitions.FLIPPED_ALIAS_KEYS["Private"];
exports.PRIVATE_TYPES = PRIVATE_TYPES;
const FLOW_TYPES = definitions.FLIPPED_ALIAS_KEYS["Flow"];
exports.FLOW_TYPES = FLOW_TYPES;
const FLOWTYPE_TYPES = definitions.FLIPPED_ALIAS_KEYS["FlowType"];
exports.FLOWTYPE_TYPES = FLOWTYPE_TYPES;
const FLOWBASEANNOTATION_TYPES = definitions.FLIPPED_ALIAS_KEYS["FlowBaseAnnotation"];
exports.FLOWBASEANNOTATION_TYPES = FLOWBASEANNOTATION_TYPES;
const FLOWDECLARATION_TYPES = definitions.FLIPPED_ALIAS_KEYS["FlowDeclaration"];
exports.FLOWDECLARATION_TYPES = FLOWDECLARATION_TYPES;
const FLOWPREDICATE_TYPES = definitions.FLIPPED_ALIAS_KEYS["FlowPredicate"];
exports.FLOWPREDICATE_TYPES = FLOWPREDICATE_TYPES;
const ENUMBODY_TYPES = definitions.FLIPPED_ALIAS_KEYS["EnumBody"];
exports.ENUMBODY_TYPES = ENUMBODY_TYPES;
const ENUMMEMBER_TYPES = definitions.FLIPPED_ALIAS_KEYS["EnumMember"];
exports.ENUMMEMBER_TYPES = ENUMMEMBER_TYPES;
const JSX_TYPES = definitions.FLIPPED_ALIAS_KEYS["JSX"];
exports.JSX_TYPES = JSX_TYPES;
const TSTYPEELEMENT_TYPES = definitions.FLIPPED_ALIAS_KEYS["TSTypeElement"];
exports.TSTYPEELEMENT_TYPES = TSTYPEELEMENT_TYPES;
const TSTYPE_TYPES = definitions.FLIPPED_ALIAS_KEYS["TSType"];
exports.TSTYPE_TYPES = TSTYPE_TYPES;
const TSBASETYPE_TYPES = definitions.FLIPPED_ALIAS_KEYS["TSBaseType"];
exports.TSBASETYPE_TYPES = TSBASETYPE_TYPES;
});

var toBlock_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBlock;





function toBlock(node, parent) {
  if ((0, generated.isBlockStatement)(node)) {
    return node;
  }

  let blockNodes = [];

  if ((0, generated.isEmptyStatement)(node)) {
    blockNodes = [];
  } else {
    if (!(0, generated.isStatement)(node)) {
      if ((0, generated.isFunction)(parent)) {
        node = (0, generated$1.returnStatement)(node);
      } else {
        node = (0, generated$1.expressionStatement)(node);
      }
    }

    blockNodes = [node];
  }

  return (0, generated$1.blockStatement)(blockNodes);
}
});

var ensureBlock_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ensureBlock;



function ensureBlock(node, key = "body") {
  return node[key] = (0, toBlock_1.default)(node[key], node);
}
});

var toIdentifier_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toIdentifier;





function toIdentifier(input) {
  input = input + "";
  let name = "";

  for (const c of input) {
    name += (0, lib.isIdentifierChar)(c.codePointAt(0)) ? c : "-";
  }

  name = name.replace(/^[-0-9]+/, "");
  name = name.replace(/[-\s]+(.)?/g, function (match, c) {
    return c ? c.toUpperCase() : "";
  });

  if (!(0, isValidIdentifier_1.default)(name)) {
    name = `_${name}`;
  }

  return name || "_";
}
});

var toBindingIdentifierName_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBindingIdentifierName;



function toBindingIdentifierName(name) {
  name = (0, toIdentifier_1.default)(name);
  if (name === "eval" || name === "arguments") name = "_" + name;
  return name;
}
});

var toComputedKey_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toComputedKey;





function toComputedKey(node, key = node.key || node.property) {
  if (!node.computed && (0, generated.isIdentifier)(key)) key = (0, generated$1.stringLiteral)(key.name);
  return key;
}
});

var toExpression_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _default = toExpression;
exports.default = _default;

function toExpression(node) {
  if ((0, generated.isExpressionStatement)(node)) {
    node = node.expression;
  }

  if ((0, generated.isExpression)(node)) {
    return node;
  }

  if ((0, generated.isClass)(node)) {
    node.type = "ClassExpression";
  } else if ((0, generated.isFunction)(node)) {
    node.type = "FunctionExpression";
  }

  if (!(0, generated.isExpression)(node)) {
    throw new Error(`cannot turn ${node.type} to an expression`);
  }

  return node;
}
});

var traverseFast_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = traverseFast;



function traverseFast(node, enter, opts) {
  if (!node) return;
  const keys = definitions.VISITOR_KEYS[node.type];
  if (!keys) return;
  opts = opts || {};
  enter(node, opts);

  for (const key of keys) {
    const subNode = node[key];

    if (Array.isArray(subNode)) {
      for (const node of subNode) {
        traverseFast(node, enter, opts);
      }
    } else {
      traverseFast(subNode, enter, opts);
    }
  }
}
});

var removeProperties_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeProperties;



const CLEAR_KEYS = ["tokens", "start", "end", "loc", "raw", "rawValue"];

const CLEAR_KEYS_PLUS_COMMENTS = constants.COMMENT_KEYS.concat(["comments"]).concat(CLEAR_KEYS);

function removeProperties(node, opts = {}) {
  const map = opts.preserveComments ? CLEAR_KEYS : CLEAR_KEYS_PLUS_COMMENTS;

  for (const key of map) {
    if (node[key] != null) node[key] = undefined;
  }

  for (const key of Object.keys(node)) {
    if (key[0] === "_" && node[key] != null) node[key] = undefined;
  }

  const symbols = Object.getOwnPropertySymbols(node);

  for (const sym of symbols) {
    node[sym] = null;
  }
}
});

var removePropertiesDeep_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removePropertiesDeep;





function removePropertiesDeep(tree, opts) {
  (0, traverseFast_1.default)(tree, removeProperties_1.default, opts);
  return tree;
}
});

var toKeyAlias_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toKeyAlias;







function toKeyAlias(node, key = node.key) {
  let alias;

  if (node.kind === "method") {
    return toKeyAlias.increment() + "";
  } else if ((0, generated.isIdentifier)(key)) {
    alias = key.name;
  } else if ((0, generated.isStringLiteral)(key)) {
    alias = JSON.stringify(key.value);
  } else {
    alias = JSON.stringify((0, removePropertiesDeep_1.default)((0, cloneNode_1.default)(key)));
  }

  if (node.computed) {
    alias = `[${alias}]`;
  }

  if (node.static) {
    alias = `static:${alias}`;
  }

  return alias;
}

toKeyAlias.uid = 0;

toKeyAlias.increment = function () {
  if (toKeyAlias.uid >= Number.MAX_SAFE_INTEGER) {
    return toKeyAlias.uid = 0;
  } else {
    return toKeyAlias.uid++;
  }
};
});

var getBindingIdentifiers_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBindingIdentifiers;



function getBindingIdentifiers(node, duplicates, outerOnly) {
  let search = [].concat(node);
  const ids = Object.create(null);

  while (search.length) {
    const id = search.shift();
    if (!id) continue;
    const keys = getBindingIdentifiers.keys[id.type];

    if ((0, generated.isIdentifier)(id)) {
      if (duplicates) {
        const _ids = ids[id.name] = ids[id.name] || [];

        _ids.push(id);
      } else {
        ids[id.name] = id;
      }

      continue;
    }

    if ((0, generated.isExportDeclaration)(id) && !(0, generated.isExportAllDeclaration)(id)) {
      if ((0, generated.isDeclaration)(id.declaration)) {
        search.push(id.declaration);
      }

      continue;
    }

    if (outerOnly) {
      if ((0, generated.isFunctionDeclaration)(id)) {
        search.push(id.id);
        continue;
      }

      if ((0, generated.isFunctionExpression)(id)) {
        continue;
      }
    }

    if (keys) {
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        if (id[key]) {
          search = search.concat(id[key]);
        }
      }
    }
  }

  return ids;
}

getBindingIdentifiers.keys = {
  DeclareClass: ["id"],
  DeclareFunction: ["id"],
  DeclareModule: ["id"],
  DeclareVariable: ["id"],
  DeclareInterface: ["id"],
  DeclareTypeAlias: ["id"],
  DeclareOpaqueType: ["id"],
  InterfaceDeclaration: ["id"],
  TypeAlias: ["id"],
  OpaqueType: ["id"],
  CatchClause: ["param"],
  LabeledStatement: ["label"],
  UnaryExpression: ["argument"],
  AssignmentExpression: ["left"],
  ImportSpecifier: ["local"],
  ImportNamespaceSpecifier: ["local"],
  ImportDefaultSpecifier: ["local"],
  ImportDeclaration: ["specifiers"],
  ExportSpecifier: ["exported"],
  ExportNamespaceSpecifier: ["exported"],
  ExportDefaultSpecifier: ["exported"],
  FunctionDeclaration: ["id", "params"],
  FunctionExpression: ["id", "params"],
  ArrowFunctionExpression: ["params"],
  ObjectMethod: ["params"],
  ClassMethod: ["params"],
  ForInStatement: ["left"],
  ForOfStatement: ["left"],
  ClassDeclaration: ["id"],
  ClassExpression: ["id"],
  RestElement: ["argument"],
  UpdateExpression: ["argument"],
  ObjectProperty: ["value"],
  AssignmentPattern: ["left"],
  ArrayPattern: ["elements"],
  ObjectPattern: ["properties"],
  VariableDeclaration: ["declarations"],
  VariableDeclarator: ["id"]
};
});

var gatherSequenceExpressions_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gatherSequenceExpressions;









function gatherSequenceExpressions(nodes, scope, declars) {
  const exprs = [];
  let ensureLastUndefined = true;

  for (const node of nodes) {
    if (!(0, generated.isEmptyStatement)(node)) {
      ensureLastUndefined = false;
    }

    if ((0, generated.isExpression)(node)) {
      exprs.push(node);
    } else if ((0, generated.isExpressionStatement)(node)) {
      exprs.push(node.expression);
    } else if ((0, generated.isVariableDeclaration)(node)) {
      if (node.kind !== "var") return;

      for (const declar of node.declarations) {
        const bindings = (0, getBindingIdentifiers_1.default)(declar);

        for (const key of Object.keys(bindings)) {
          declars.push({
            kind: node.kind,
            id: (0, cloneNode_1.default)(bindings[key])
          });
        }

        if (declar.init) {
          exprs.push((0, generated$1.assignmentExpression)("=", declar.id, declar.init));
        }
      }

      ensureLastUndefined = true;
    } else if ((0, generated.isIfStatement)(node)) {
      const consequent = node.consequent ? gatherSequenceExpressions([node.consequent], scope, declars) : scope.buildUndefinedNode();
      const alternate = node.alternate ? gatherSequenceExpressions([node.alternate], scope, declars) : scope.buildUndefinedNode();
      if (!consequent || !alternate) return;
      exprs.push((0, generated$1.conditionalExpression)(node.test, consequent, alternate));
    } else if ((0, generated.isBlockStatement)(node)) {
      const body = gatherSequenceExpressions(node.body, scope, declars);
      if (!body) return;
      exprs.push(body);
    } else if ((0, generated.isEmptyStatement)(node)) {
      if (nodes.indexOf(node) === 0) {
        ensureLastUndefined = true;
      }
    } else {
      return;
    }
  }

  if (ensureLastUndefined) {
    exprs.push(scope.buildUndefinedNode());
  }

  if (exprs.length === 1) {
    return exprs[0];
  } else {
    return (0, generated$1.sequenceExpression)(exprs);
  }
}
});

var toSequenceExpression_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toSequenceExpression;



function toSequenceExpression(nodes, scope) {
  if (!(nodes != null && nodes.length)) return;
  const declars = [];
  const result = (0, gatherSequenceExpressions_1.default)(nodes, scope, declars);
  if (!result) return;

  for (const declar of declars) {
    scope.push(declar);
  }

  return result;
}
});

var toStatement_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;





var _default = toStatement;
exports.default = _default;

function toStatement(node, ignore) {
  if ((0, generated.isStatement)(node)) {
    return node;
  }

  let mustHaveId = false;
  let newType;

  if ((0, generated.isClass)(node)) {
    mustHaveId = true;
    newType = "ClassDeclaration";
  } else if ((0, generated.isFunction)(node)) {
    mustHaveId = true;
    newType = "FunctionDeclaration";
  } else if ((0, generated.isAssignmentExpression)(node)) {
    return (0, generated$1.expressionStatement)(node);
  }

  if (mustHaveId && !node.id) {
    newType = false;
  }

  if (!newType) {
    if (ignore) {
      return false;
    } else {
      throw new Error(`cannot turn ${node.type} to a statement`);
    }
  }

  node.type = newType;
  return node;
}
});

var valueToNode_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;





var _default = valueToNode;
exports.default = _default;
const objectToString = Function.call.bind(Object.prototype.toString);

function isRegExp(value) {
  return objectToString(value) === "[object RegExp]";
}

function isPlainObject(value) {
  if (typeof value !== "object" || value === null || Object.prototype.toString.call(value) !== "[object Object]") {
    return false;
  }

  const proto = Object.getPrototypeOf(value);
  return proto === null || Object.getPrototypeOf(proto) === null;
}

function valueToNode(value) {
  if (value === undefined) {
    return (0, generated$1.identifier)("undefined");
  }

  if (value === true || value === false) {
    return (0, generated$1.booleanLiteral)(value);
  }

  if (value === null) {
    return (0, generated$1.nullLiteral)();
  }

  if (typeof value === "string") {
    return (0, generated$1.stringLiteral)(value);
  }

  if (typeof value === "number") {
    let result;

    if (Number.isFinite(value)) {
      result = (0, generated$1.numericLiteral)(Math.abs(value));
    } else {
      let numerator;

      if (Number.isNaN(value)) {
        numerator = (0, generated$1.numericLiteral)(0);
      } else {
        numerator = (0, generated$1.numericLiteral)(1);
      }

      result = (0, generated$1.binaryExpression)("/", numerator, (0, generated$1.numericLiteral)(0));
    }

    if (value < 0 || Object.is(value, -0)) {
      result = (0, generated$1.unaryExpression)("-", result);
    }

    return result;
  }

  if (isRegExp(value)) {
    const pattern = value.source;
    const flags = value.toString().match(/\/([a-z]+|)$/)[1];
    return (0, generated$1.regExpLiteral)(pattern, flags);
  }

  if (Array.isArray(value)) {
    return (0, generated$1.arrayExpression)(value.map(valueToNode));
  }

  if (isPlainObject(value)) {
    const props = [];

    for (const key of Object.keys(value)) {
      let nodeKey;

      if ((0, isValidIdentifier_1.default)(key)) {
        nodeKey = (0, generated$1.identifier)(key);
      } else {
        nodeKey = (0, generated$1.stringLiteral)(key);
      }

      props.push((0, generated$1.objectProperty)(nodeKey, valueToNode(value[key])));
    }

    return (0, generated$1.objectExpression)(props);
  }

  throw new Error("don't know how to turn this value into a node");
}
});

var appendToMemberExpression_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = appendToMemberExpression;



function appendToMemberExpression(member, append, computed = false) {
  member.object = (0, generated$1.memberExpression)(member.object, member.property, member.computed);
  member.property = append;
  member.computed = !!computed;
  return member;
}
});

var inherits_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inherits;





function inherits(child, parent) {
  if (!child || !parent) return child;

  for (const key of constants.INHERIT_KEYS.optional) {
    if (child[key] == null) {
      child[key] = parent[key];
    }
  }

  for (const key of Object.keys(parent)) {
    if (key[0] === "_" && key !== "__clone") child[key] = parent[key];
  }

  for (const key of constants.INHERIT_KEYS.force) {
    child[key] = parent[key];
  }

  (0, inheritsComments_1.default)(child, parent);
  return child;
}
});

var prependToMemberExpression_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prependToMemberExpression;



function prependToMemberExpression(member, prepend) {
  member.object = (0, generated$1.memberExpression)(prepend, member.object);
  return member;
}
});

var getOuterBindingIdentifiers_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _default = getOuterBindingIdentifiers;
exports.default = _default;

function getOuterBindingIdentifiers(node, duplicates) {
  return (0, getBindingIdentifiers_1.default)(node, duplicates, true);
}
});

var traverse_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = traverse;



function traverse(node, handlers, state) {
  if (typeof handlers === "function") {
    handlers = {
      enter: handlers
    };
  }

  const {
    enter,
    exit
  } = handlers;
  traverseSimpleImpl(node, enter, exit, state, []);
}

function traverseSimpleImpl(node, enter, exit, state, ancestors) {
  const keys = definitions.VISITOR_KEYS[node.type];
  if (!keys) return;
  if (enter) enter(node, ancestors, state);

  for (const key of keys) {
    const subNode = node[key];

    if (Array.isArray(subNode)) {
      for (let i = 0; i < subNode.length; i++) {
        const child = subNode[i];
        if (!child) continue;
        ancestors.push({
          node,
          key,
          index: i
        });
        traverseSimpleImpl(child, enter, exit, state, ancestors);
        ancestors.pop();
      }
    } else if (subNode) {
      ancestors.push({
        node,
        key
      });
      traverseSimpleImpl(subNode, enter, exit, state, ancestors);
      ancestors.pop();
    }
  }

  if (exit) exit(node, ancestors, state);
}
});

var isBinding_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBinding;



function isBinding(node, parent, grandparent) {
  if (grandparent && node.type === "Identifier" && parent.type === "ObjectProperty" && grandparent.type === "ObjectExpression") {
    return false;
  }

  const keys = getBindingIdentifiers_1.default.keys[parent.type];

  if (keys) {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const val = parent[key];

      if (Array.isArray(val)) {
        if (val.indexOf(node) >= 0) return true;
      } else {
        if (val === node) return true;
      }
    }
  }

  return false;
}
});

var isLet_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLet;





function isLet(node) {
  return (0, generated.isVariableDeclaration)(node) && (node.kind !== "var" || node[constants.BLOCK_SCOPED_SYMBOL]);
}
});

var isBlockScoped_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBlockScoped;





function isBlockScoped(node) {
  return (0, generated.isFunctionDeclaration)(node) || (0, generated.isClassDeclaration)(node) || (0, isLet_1.default)(node);
}
});

var isImmutable_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isImmutable;





function isImmutable(node) {
  if ((0, isType_1.default)(node.type, "Immutable")) return true;

  if ((0, generated.isIdentifier)(node)) {
    if (node.name === "undefined") {
      return true;
    } else {
      return false;
    }
  }

  return false;
}
});

var isNodesEquivalent_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNodesEquivalent;



function isNodesEquivalent(a, b) {
  if (typeof a !== "object" || typeof b !== "object" || a == null || b == null) {
    return a === b;
  }

  if (a.type !== b.type) {
    return false;
  }

  const fields = Object.keys(definitions.NODE_FIELDS[a.type] || a.type);
  const visitorKeys = definitions.VISITOR_KEYS[a.type];

  for (const field of fields) {
    if (typeof a[field] !== typeof b[field]) {
      return false;
    }

    if (a[field] == null && b[field] == null) {
      continue;
    } else if (a[field] == null || b[field] == null) {
      return false;
    }

    if (Array.isArray(a[field])) {
      if (!Array.isArray(b[field])) {
        return false;
      }

      if (a[field].length !== b[field].length) {
        return false;
      }

      for (let i = 0; i < a[field].length; i++) {
        if (!isNodesEquivalent(a[field][i], b[field][i])) {
          return false;
        }
      }

      continue;
    }

    if (typeof a[field] === "object" && !(visitorKeys != null && visitorKeys.includes(field))) {
      for (const key of Object.keys(a[field])) {
        if (a[field][key] !== b[field][key]) {
          return false;
        }
      }

      continue;
    }

    if (!isNodesEquivalent(a[field], b[field])) {
      return false;
    }
  }

  return true;
}
});

var isReferenced_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isReferenced;

function isReferenced(node, parent, grandparent) {
  switch (parent.type) {
    case "MemberExpression":
    case "JSXMemberExpression":
    case "OptionalMemberExpression":
      if (parent.property === node) {
        return !!parent.computed;
      }

      return parent.object === node;

    case "VariableDeclarator":
      return parent.init === node;

    case "ArrowFunctionExpression":
      return parent.body === node;

    case "PrivateName":
      return false;

    case "ClassMethod":
    case "ClassPrivateMethod":
    case "ObjectMethod":
      if (parent.params.includes(node)) {
        return false;
      }

    case "ObjectProperty":
    case "ClassProperty":
    case "ClassPrivateProperty":
      if (parent.key === node) {
        return !!parent.computed;
      }

      if (parent.value === node) {
        return !grandparent || grandparent.type !== "ObjectPattern";
      }

      return true;

    case "ClassDeclaration":
    case "ClassExpression":
      return parent.superClass === node;

    case "AssignmentExpression":
      return parent.right === node;

    case "AssignmentPattern":
      return parent.right === node;

    case "LabeledStatement":
      return false;

    case "CatchClause":
      return false;

    case "RestElement":
      return false;

    case "BreakStatement":
    case "ContinueStatement":
      return false;

    case "FunctionDeclaration":
    case "FunctionExpression":
      return false;

    case "ExportNamespaceSpecifier":
    case "ExportDefaultSpecifier":
      return false;

    case "ExportSpecifier":
      if (grandparent != null && grandparent.source) {
        return false;
      }

      return parent.local === node;

    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
    case "ImportSpecifier":
      return false;

    case "JSXAttribute":
      return false;

    case "ObjectPattern":
    case "ArrayPattern":
      return false;

    case "MetaProperty":
      return false;

    case "ObjectTypeProperty":
      return parent.key !== node;

    case "TSEnumMember":
      return parent.id !== node;

    case "TSPropertySignature":
      if (parent.key === node) {
        return !!parent.computed;
      }

      return true;
  }

  return true;
}
});

var isScope_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isScope;



function isScope(node, parent) {
  if ((0, generated.isBlockStatement)(node) && ((0, generated.isFunction)(parent) || (0, generated.isCatchClause)(parent))) {
    return false;
  }

  if ((0, generated.isPattern)(node) && ((0, generated.isFunction)(parent) || (0, generated.isCatchClause)(parent))) {
    return true;
  }

  return (0, generated.isScopable)(node);
}
});

var isSpecifierDefault_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSpecifierDefault;



function isSpecifierDefault(specifier) {
  return (0, generated.isImportDefaultSpecifier)(specifier) || (0, generated.isIdentifier)(specifier.imported || specifier.exported, {
    name: "default"
  });
}
});

var isValidES3Identifier_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidES3Identifier;



const RESERVED_WORDS_ES3_ONLY = new Set(["abstract", "boolean", "byte", "char", "double", "enum", "final", "float", "goto", "implements", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "synchronized", "throws", "transient", "volatile"]);

function isValidES3Identifier(name) {
  return (0, isValidIdentifier_1.default)(name) && !RESERVED_WORDS_ES3_ONLY.has(name);
}
});

var isVar_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVar;





function isVar(node) {
  return (0, generated.isVariableDeclaration)(node, {
    kind: "var"
  }) && !node[constants.BLOCK_SCOPED_SYMBOL];
}
});

var generated$4 = /*#__PURE__*/Object.freeze({
	__proto__: null
});

var lib$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  react: true,
  assertNode: true,
  createTypeAnnotationBasedOnTypeof: true,
  createUnionTypeAnnotation: true,
  createFlowUnionType: true,
  createTSUnionType: true,
  cloneNode: true,
  clone: true,
  cloneDeep: true,
  cloneDeepWithoutLoc: true,
  cloneWithoutLoc: true,
  addComment: true,
  addComments: true,
  inheritInnerComments: true,
  inheritLeadingComments: true,
  inheritsComments: true,
  inheritTrailingComments: true,
  removeComments: true,
  ensureBlock: true,
  toBindingIdentifierName: true,
  toBlock: true,
  toComputedKey: true,
  toExpression: true,
  toIdentifier: true,
  toKeyAlias: true,
  toSequenceExpression: true,
  toStatement: true,
  valueToNode: true,
  appendToMemberExpression: true,
  inherits: true,
  prependToMemberExpression: true,
  removeProperties: true,
  removePropertiesDeep: true,
  removeTypeDuplicates: true,
  getBindingIdentifiers: true,
  getOuterBindingIdentifiers: true,
  traverse: true,
  traverseFast: true,
  shallowEqual: true,
  is: true,
  isBinding: true,
  isBlockScoped: true,
  isImmutable: true,
  isLet: true,
  isNode: true,
  isNodesEquivalent: true,
  isPlaceholderType: true,
  isReferenced: true,
  isScope: true,
  isSpecifierDefault: true,
  isType: true,
  isValidES3Identifier: true,
  isValidIdentifier: true,
  isVar: true,
  matchesPattern: true,
  validate: true,
  buildMatchMemberExpression: true
};
Object.defineProperty(exports, "assertNode", {
  enumerable: true,
  get: function () {
    return assertNode_1.default;
  }
});
Object.defineProperty(exports, "createTypeAnnotationBasedOnTypeof", {
  enumerable: true,
  get: function () {
    return createTypeAnnotationBasedOnTypeof_1.default;
  }
});
Object.defineProperty(exports, "createUnionTypeAnnotation", {
  enumerable: true,
  get: function () {
    return createFlowUnionType_1.default;
  }
});
Object.defineProperty(exports, "createFlowUnionType", {
  enumerable: true,
  get: function () {
    return createFlowUnionType_1.default;
  }
});
Object.defineProperty(exports, "createTSUnionType", {
  enumerable: true,
  get: function () {
    return createTSUnionType_1.default;
  }
});
Object.defineProperty(exports, "cloneNode", {
  enumerable: true,
  get: function () {
    return cloneNode_1.default;
  }
});
Object.defineProperty(exports, "clone", {
  enumerable: true,
  get: function () {
    return clone_1.default;
  }
});
Object.defineProperty(exports, "cloneDeep", {
  enumerable: true,
  get: function () {
    return cloneDeep_1.default;
  }
});
Object.defineProperty(exports, "cloneDeepWithoutLoc", {
  enumerable: true,
  get: function () {
    return cloneDeepWithoutLoc_1.default;
  }
});
Object.defineProperty(exports, "cloneWithoutLoc", {
  enumerable: true,
  get: function () {
    return cloneWithoutLoc_1.default;
  }
});
Object.defineProperty(exports, "addComment", {
  enumerable: true,
  get: function () {
    return addComment_1.default;
  }
});
Object.defineProperty(exports, "addComments", {
  enumerable: true,
  get: function () {
    return addComments_1.default;
  }
});
Object.defineProperty(exports, "inheritInnerComments", {
  enumerable: true,
  get: function () {
    return inheritInnerComments_1.default;
  }
});
Object.defineProperty(exports, "inheritLeadingComments", {
  enumerable: true,
  get: function () {
    return inheritLeadingComments_1.default;
  }
});
Object.defineProperty(exports, "inheritsComments", {
  enumerable: true,
  get: function () {
    return inheritsComments_1.default;
  }
});
Object.defineProperty(exports, "inheritTrailingComments", {
  enumerable: true,
  get: function () {
    return inheritTrailingComments_1.default;
  }
});
Object.defineProperty(exports, "removeComments", {
  enumerable: true,
  get: function () {
    return removeComments_1.default;
  }
});
Object.defineProperty(exports, "ensureBlock", {
  enumerable: true,
  get: function () {
    return ensureBlock_1.default;
  }
});
Object.defineProperty(exports, "toBindingIdentifierName", {
  enumerable: true,
  get: function () {
    return toBindingIdentifierName_1.default;
  }
});
Object.defineProperty(exports, "toBlock", {
  enumerable: true,
  get: function () {
    return toBlock_1.default;
  }
});
Object.defineProperty(exports, "toComputedKey", {
  enumerable: true,
  get: function () {
    return toComputedKey_1.default;
  }
});
Object.defineProperty(exports, "toExpression", {
  enumerable: true,
  get: function () {
    return toExpression_1.default;
  }
});
Object.defineProperty(exports, "toIdentifier", {
  enumerable: true,
  get: function () {
    return toIdentifier_1.default;
  }
});
Object.defineProperty(exports, "toKeyAlias", {
  enumerable: true,
  get: function () {
    return toKeyAlias_1.default;
  }
});
Object.defineProperty(exports, "toSequenceExpression", {
  enumerable: true,
  get: function () {
    return toSequenceExpression_1.default;
  }
});
Object.defineProperty(exports, "toStatement", {
  enumerable: true,
  get: function () {
    return toStatement_1.default;
  }
});
Object.defineProperty(exports, "valueToNode", {
  enumerable: true,
  get: function () {
    return valueToNode_1.default;
  }
});
Object.defineProperty(exports, "appendToMemberExpression", {
  enumerable: true,
  get: function () {
    return appendToMemberExpression_1.default;
  }
});
Object.defineProperty(exports, "inherits", {
  enumerable: true,
  get: function () {
    return inherits_1.default;
  }
});
Object.defineProperty(exports, "prependToMemberExpression", {
  enumerable: true,
  get: function () {
    return prependToMemberExpression_1.default;
  }
});
Object.defineProperty(exports, "removeProperties", {
  enumerable: true,
  get: function () {
    return removeProperties_1.default;
  }
});
Object.defineProperty(exports, "removePropertiesDeep", {
  enumerable: true,
  get: function () {
    return removePropertiesDeep_1.default;
  }
});
Object.defineProperty(exports, "removeTypeDuplicates", {
  enumerable: true,
  get: function () {
    return removeTypeDuplicates_1.default;
  }
});
Object.defineProperty(exports, "getBindingIdentifiers", {
  enumerable: true,
  get: function () {
    return getBindingIdentifiers_1.default;
  }
});
Object.defineProperty(exports, "getOuterBindingIdentifiers", {
  enumerable: true,
  get: function () {
    return getOuterBindingIdentifiers_1.default;
  }
});
Object.defineProperty(exports, "traverse", {
  enumerable: true,
  get: function () {
    return traverse_1.default;
  }
});
Object.defineProperty(exports, "traverseFast", {
  enumerable: true,
  get: function () {
    return traverseFast_1.default;
  }
});
Object.defineProperty(exports, "shallowEqual", {
  enumerable: true,
  get: function () {
    return shallowEqual_1.default;
  }
});
Object.defineProperty(exports, "is", {
  enumerable: true,
  get: function () {
    return is_1.default;
  }
});
Object.defineProperty(exports, "isBinding", {
  enumerable: true,
  get: function () {
    return isBinding_1.default;
  }
});
Object.defineProperty(exports, "isBlockScoped", {
  enumerable: true,
  get: function () {
    return isBlockScoped_1.default;
  }
});
Object.defineProperty(exports, "isImmutable", {
  enumerable: true,
  get: function () {
    return isImmutable_1.default;
  }
});
Object.defineProperty(exports, "isLet", {
  enumerable: true,
  get: function () {
    return isLet_1.default;
  }
});
Object.defineProperty(exports, "isNode", {
  enumerable: true,
  get: function () {
    return isNode_1.default;
  }
});
Object.defineProperty(exports, "isNodesEquivalent", {
  enumerable: true,
  get: function () {
    return isNodesEquivalent_1.default;
  }
});
Object.defineProperty(exports, "isPlaceholderType", {
  enumerable: true,
  get: function () {
    return isPlaceholderType_1.default;
  }
});
Object.defineProperty(exports, "isReferenced", {
  enumerable: true,
  get: function () {
    return isReferenced_1.default;
  }
});
Object.defineProperty(exports, "isScope", {
  enumerable: true,
  get: function () {
    return isScope_1.default;
  }
});
Object.defineProperty(exports, "isSpecifierDefault", {
  enumerable: true,
  get: function () {
    return isSpecifierDefault_1.default;
  }
});
Object.defineProperty(exports, "isType", {
  enumerable: true,
  get: function () {
    return isType_1.default;
  }
});
Object.defineProperty(exports, "isValidES3Identifier", {
  enumerable: true,
  get: function () {
    return isValidES3Identifier_1.default;
  }
});
Object.defineProperty(exports, "isValidIdentifier", {
  enumerable: true,
  get: function () {
    return isValidIdentifier_1.default;
  }
});
Object.defineProperty(exports, "isVar", {
  enumerable: true,
  get: function () {
    return isVar_1.default;
  }
});
Object.defineProperty(exports, "matchesPattern", {
  enumerable: true,
  get: function () {
    return matchesPattern_1.default;
  }
});
Object.defineProperty(exports, "validate", {
  enumerable: true,
  get: function () {
    return validate_1.default;
  }
});
Object.defineProperty(exports, "buildMatchMemberExpression", {
  enumerable: true,
  get: function () {
    return buildMatchMemberExpression_1.default;
  }
});
exports.react = void 0;











Object.keys(generated$2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === generated$2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return generated$2[key];
    }
  });
});









Object.keys(generated$1).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === generated$1[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return generated$1[key];
    }
  });
});



Object.keys(uppercase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === uppercase[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return uppercase[key];
    }
  });
});



























Object.keys(generated$3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === generated$3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return generated$3[key];
    }
  });
});



Object.keys(constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return constants[key];
    }
  });
});























Object.keys(definitions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === definitions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return definitions[key];
    }
  });
});



















Object.keys(traverse_1).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === traverse_1[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return traverse_1[key];
    }
  });
});











































Object.keys(generated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === generated[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return generated[key];
    }
  });
});



Object.keys(generated$4).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === generated$4[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return generated$4[key];
    }
  });
});
const react = {
  isReactComponent: isReactComponent_1.default,
  isCompatTag: isCompatTag_1.default,
  buildChildren: buildChildren_1.default
};
exports.react = react;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(lib$1);

var ALIAS_KEYS = lib$1.ALIAS_KEYS;
var ASSIGNMENT_OPERATORS = lib$1.ASSIGNMENT_OPERATORS;
var AnyTypeAnnotation = lib$1.AnyTypeAnnotation;
var ArgumentPlaceholder = lib$1.ArgumentPlaceholder;
var ArrayExpression = lib$1.ArrayExpression;
var ArrayPattern = lib$1.ArrayPattern;
var ArrayTypeAnnotation = lib$1.ArrayTypeAnnotation;
var ArrowFunctionExpression = lib$1.ArrowFunctionExpression;
var AssignmentExpression = lib$1.AssignmentExpression;
var AssignmentPattern = lib$1.AssignmentPattern;
var AwaitExpression = lib$1.AwaitExpression;
var BINARY_OPERATORS = lib$1.BINARY_OPERATORS;
var BINARY_TYPES = lib$1.BINARY_TYPES;
var BLOCKPARENT_TYPES = lib$1.BLOCKPARENT_TYPES;
var BLOCK_SCOPED_SYMBOL = lib$1.BLOCK_SCOPED_SYMBOL;
var BLOCK_TYPES = lib$1.BLOCK_TYPES;
var BOOLEAN_BINARY_OPERATORS = lib$1.BOOLEAN_BINARY_OPERATORS;
var BOOLEAN_NUMBER_BINARY_OPERATORS = lib$1.BOOLEAN_NUMBER_BINARY_OPERATORS;
var BOOLEAN_UNARY_OPERATORS = lib$1.BOOLEAN_UNARY_OPERATORS;
var BUILDER_KEYS = lib$1.BUILDER_KEYS;
var BigIntLiteral = lib$1.BigIntLiteral;
var BinaryExpression = lib$1.BinaryExpression;
var BindExpression = lib$1.BindExpression;
var BlockStatement = lib$1.BlockStatement;
var BooleanLiteral = lib$1.BooleanLiteral;
var BooleanLiteralTypeAnnotation = lib$1.BooleanLiteralTypeAnnotation;
var BooleanTypeAnnotation = lib$1.BooleanTypeAnnotation;
var BreakStatement = lib$1.BreakStatement;
var CLASS_TYPES = lib$1.CLASS_TYPES;
var COMMENT_KEYS = lib$1.COMMENT_KEYS;
var COMPARISON_BINARY_OPERATORS = lib$1.COMPARISON_BINARY_OPERATORS;
var COMPLETIONSTATEMENT_TYPES = lib$1.COMPLETIONSTATEMENT_TYPES;
var CONDITIONAL_TYPES = lib$1.CONDITIONAL_TYPES;
var CallExpression = lib$1.CallExpression;
var CatchClause = lib$1.CatchClause;
var ClassBody = lib$1.ClassBody;
var ClassDeclaration = lib$1.ClassDeclaration;
var ClassExpression = lib$1.ClassExpression;
var ClassImplements = lib$1.ClassImplements;
var ClassMethod = lib$1.ClassMethod;
var ClassPrivateMethod = lib$1.ClassPrivateMethod;
var ClassPrivateProperty = lib$1.ClassPrivateProperty;
var ClassProperty = lib$1.ClassProperty;
var ConditionalExpression = lib$1.ConditionalExpression;
var ContinueStatement = lib$1.ContinueStatement;
var DECLARATION_TYPES = lib$1.DECLARATION_TYPES;
var DEPRECATED_KEYS = lib$1.DEPRECATED_KEYS;
var DebuggerStatement = lib$1.DebuggerStatement;
var DecimalLiteral = lib$1.DecimalLiteral;
var DeclareClass = lib$1.DeclareClass;
var DeclareExportAllDeclaration = lib$1.DeclareExportAllDeclaration;
var DeclareExportDeclaration = lib$1.DeclareExportDeclaration;
var DeclareFunction = lib$1.DeclareFunction;
var DeclareInterface = lib$1.DeclareInterface;
var DeclareModule = lib$1.DeclareModule;
var DeclareModuleExports = lib$1.DeclareModuleExports;
var DeclareOpaqueType = lib$1.DeclareOpaqueType;
var DeclareTypeAlias = lib$1.DeclareTypeAlias;
var DeclareVariable = lib$1.DeclareVariable;
var DeclaredPredicate = lib$1.DeclaredPredicate;
var Decorator = lib$1.Decorator;
var Directive = lib$1.Directive;
var DirectiveLiteral = lib$1.DirectiveLiteral;
var DoExpression = lib$1.DoExpression;
var DoWhileStatement = lib$1.DoWhileStatement;
var ENUMBODY_TYPES = lib$1.ENUMBODY_TYPES;
var ENUMMEMBER_TYPES = lib$1.ENUMMEMBER_TYPES;
var EQUALITY_BINARY_OPERATORS = lib$1.EQUALITY_BINARY_OPERATORS;
var EXPORTDECLARATION_TYPES = lib$1.EXPORTDECLARATION_TYPES;
var EXPRESSIONWRAPPER_TYPES = lib$1.EXPRESSIONWRAPPER_TYPES;
var EXPRESSION_TYPES = lib$1.EXPRESSION_TYPES;
var EmptyStatement = lib$1.EmptyStatement;
var EmptyTypeAnnotation = lib$1.EmptyTypeAnnotation;
var EnumBooleanBody = lib$1.EnumBooleanBody;
var EnumBooleanMember = lib$1.EnumBooleanMember;
var EnumDeclaration = lib$1.EnumDeclaration;
var EnumDefaultedMember = lib$1.EnumDefaultedMember;
var EnumNumberBody = lib$1.EnumNumberBody;
var EnumNumberMember = lib$1.EnumNumberMember;
var EnumStringBody = lib$1.EnumStringBody;
var EnumStringMember = lib$1.EnumStringMember;
var EnumSymbolBody = lib$1.EnumSymbolBody;
var ExistsTypeAnnotation = lib$1.ExistsTypeAnnotation;
var ExportAllDeclaration = lib$1.ExportAllDeclaration;
var ExportDefaultDeclaration = lib$1.ExportDefaultDeclaration;
var ExportDefaultSpecifier = lib$1.ExportDefaultSpecifier;
var ExportNamedDeclaration = lib$1.ExportNamedDeclaration;
var ExportNamespaceSpecifier = lib$1.ExportNamespaceSpecifier;
var ExportSpecifier = lib$1.ExportSpecifier;
var ExpressionStatement = lib$1.ExpressionStatement;
var FLATTENABLE_KEYS = lib$1.FLATTENABLE_KEYS;
var FLIPPED_ALIAS_KEYS = lib$1.FLIPPED_ALIAS_KEYS;
var FLOWBASEANNOTATION_TYPES = lib$1.FLOWBASEANNOTATION_TYPES;
var FLOWDECLARATION_TYPES = lib$1.FLOWDECLARATION_TYPES;
var FLOWPREDICATE_TYPES = lib$1.FLOWPREDICATE_TYPES;
var FLOWTYPE_TYPES = lib$1.FLOWTYPE_TYPES;
var FLOW_TYPES = lib$1.FLOW_TYPES;
var FORXSTATEMENT_TYPES = lib$1.FORXSTATEMENT_TYPES;
var FOR_INIT_KEYS = lib$1.FOR_INIT_KEYS;
var FOR_TYPES = lib$1.FOR_TYPES;
var FUNCTIONPARENT_TYPES = lib$1.FUNCTIONPARENT_TYPES;
var FUNCTION_TYPES = lib$1.FUNCTION_TYPES;
var File = lib$1.File;
var ForInStatement = lib$1.ForInStatement;
var ForOfStatement = lib$1.ForOfStatement;
var ForStatement = lib$1.ForStatement;
var FunctionDeclaration = lib$1.FunctionDeclaration;
var FunctionExpression = lib$1.FunctionExpression;
var FunctionTypeAnnotation = lib$1.FunctionTypeAnnotation;
var FunctionTypeParam = lib$1.FunctionTypeParam;
var GenericTypeAnnotation = lib$1.GenericTypeAnnotation;
var IMMUTABLE_TYPES = lib$1.IMMUTABLE_TYPES;
var INHERIT_KEYS = lib$1.INHERIT_KEYS;
var Identifier = lib$1.Identifier;
var IfStatement = lib$1.IfStatement;
var Import = lib$1.Import;
var ImportAttribute = lib$1.ImportAttribute;
var ImportDeclaration = lib$1.ImportDeclaration;
var ImportDefaultSpecifier = lib$1.ImportDefaultSpecifier;
var ImportNamespaceSpecifier = lib$1.ImportNamespaceSpecifier;
var ImportSpecifier = lib$1.ImportSpecifier;
var IndexedAccessType = lib$1.IndexedAccessType;
var InferredPredicate = lib$1.InferredPredicate;
var InterfaceDeclaration = lib$1.InterfaceDeclaration;
var InterfaceExtends = lib$1.InterfaceExtends;
var InterfaceTypeAnnotation = lib$1.InterfaceTypeAnnotation;
var InterpreterDirective = lib$1.InterpreterDirective;
var IntersectionTypeAnnotation = lib$1.IntersectionTypeAnnotation;
var JSXAttribute = lib$1.JSXAttribute;
var JSXClosingElement = lib$1.JSXClosingElement;
var JSXClosingFragment = lib$1.JSXClosingFragment;
var JSXElement = lib$1.JSXElement;
var JSXEmptyExpression = lib$1.JSXEmptyExpression;
var JSXExpressionContainer = lib$1.JSXExpressionContainer;
var JSXFragment = lib$1.JSXFragment;
var JSXIdentifier = lib$1.JSXIdentifier;
var JSXMemberExpression = lib$1.JSXMemberExpression;
var JSXNamespacedName = lib$1.JSXNamespacedName;
var JSXOpeningElement = lib$1.JSXOpeningElement;
var JSXOpeningFragment = lib$1.JSXOpeningFragment;
var JSXSpreadAttribute = lib$1.JSXSpreadAttribute;
var JSXSpreadChild = lib$1.JSXSpreadChild;
var JSXText = lib$1.JSXText;
var JSX_TYPES = lib$1.JSX_TYPES;
var LITERAL_TYPES = lib$1.LITERAL_TYPES;
var LOGICAL_OPERATORS = lib$1.LOGICAL_OPERATORS;
var LOOP_TYPES = lib$1.LOOP_TYPES;
var LVAL_TYPES = lib$1.LVAL_TYPES;
var LabeledStatement = lib$1.LabeledStatement;
var LogicalExpression = lib$1.LogicalExpression;
var METHOD_TYPES = lib$1.METHOD_TYPES;
var MODULEDECLARATION_TYPES = lib$1.MODULEDECLARATION_TYPES;
var MODULESPECIFIER_TYPES = lib$1.MODULESPECIFIER_TYPES;
var MemberExpression = lib$1.MemberExpression;
var MetaProperty = lib$1.MetaProperty;
var MixedTypeAnnotation = lib$1.MixedTypeAnnotation;
var ModuleExpression = lib$1.ModuleExpression;
var NODE_FIELDS = lib$1.NODE_FIELDS;
var NODE_PARENT_VALIDATIONS = lib$1.NODE_PARENT_VALIDATIONS;
var NOT_LOCAL_BINDING = lib$1.NOT_LOCAL_BINDING;
var NUMBER_BINARY_OPERATORS = lib$1.NUMBER_BINARY_OPERATORS;
var NUMBER_UNARY_OPERATORS = lib$1.NUMBER_UNARY_OPERATORS;
var NewExpression = lib$1.NewExpression;
var Noop = lib$1.Noop;
var NullLiteral = lib$1.NullLiteral;
var NullLiteralTypeAnnotation = lib$1.NullLiteralTypeAnnotation;
var NullableTypeAnnotation = lib$1.NullableTypeAnnotation;
var NumberLiteral = lib$1.NumberLiteral;
var NumberLiteralTypeAnnotation = lib$1.NumberLiteralTypeAnnotation;
var NumberTypeAnnotation = lib$1.NumberTypeAnnotation;
var NumericLiteral = lib$1.NumericLiteral;
var OBJECTMEMBER_TYPES = lib$1.OBJECTMEMBER_TYPES;
var ObjectExpression = lib$1.ObjectExpression;
var ObjectMethod = lib$1.ObjectMethod;
var ObjectPattern = lib$1.ObjectPattern;
var ObjectProperty = lib$1.ObjectProperty;
var ObjectTypeAnnotation = lib$1.ObjectTypeAnnotation;
var ObjectTypeCallProperty = lib$1.ObjectTypeCallProperty;
var ObjectTypeIndexer = lib$1.ObjectTypeIndexer;
var ObjectTypeInternalSlot = lib$1.ObjectTypeInternalSlot;
var ObjectTypeProperty = lib$1.ObjectTypeProperty;
var ObjectTypeSpreadProperty = lib$1.ObjectTypeSpreadProperty;
var OpaqueType = lib$1.OpaqueType;
var OptionalCallExpression = lib$1.OptionalCallExpression;
var OptionalIndexedAccessType = lib$1.OptionalIndexedAccessType;
var OptionalMemberExpression = lib$1.OptionalMemberExpression;
var PATTERNLIKE_TYPES = lib$1.PATTERNLIKE_TYPES;
var PATTERN_TYPES = lib$1.PATTERN_TYPES;
var PLACEHOLDERS = lib$1.PLACEHOLDERS;
var PLACEHOLDERS_ALIAS = lib$1.PLACEHOLDERS_ALIAS;
var PLACEHOLDERS_FLIPPED_ALIAS = lib$1.PLACEHOLDERS_FLIPPED_ALIAS;
var PRIVATE_TYPES = lib$1.PRIVATE_TYPES;
var PROPERTY_TYPES = lib$1.PROPERTY_TYPES;
var PUREISH_TYPES = lib$1.PUREISH_TYPES;
var ParenthesizedExpression = lib$1.ParenthesizedExpression;
var PipelineBareFunction = lib$1.PipelineBareFunction;
var PipelinePrimaryTopicReference = lib$1.PipelinePrimaryTopicReference;
var PipelineTopicExpression = lib$1.PipelineTopicExpression;
var Placeholder = lib$1.Placeholder;
var PrivateName = lib$1.PrivateName;
var Program = lib$1.Program;
var QualifiedTypeIdentifier = lib$1.QualifiedTypeIdentifier;
var RecordExpression = lib$1.RecordExpression;
var RegExpLiteral = lib$1.RegExpLiteral;
var RegexLiteral = lib$1.RegexLiteral;
var RestElement = lib$1.RestElement;
var RestProperty = lib$1.RestProperty;
var ReturnStatement = lib$1.ReturnStatement;
var SCOPABLE_TYPES = lib$1.SCOPABLE_TYPES;
var STATEMENT_OR_BLOCK_KEYS = lib$1.STATEMENT_OR_BLOCK_KEYS;
var STATEMENT_TYPES = lib$1.STATEMENT_TYPES;
var STRING_UNARY_OPERATORS = lib$1.STRING_UNARY_OPERATORS;
var SequenceExpression = lib$1.SequenceExpression;
var SpreadElement = lib$1.SpreadElement;
var SpreadProperty = lib$1.SpreadProperty;
var StaticBlock = lib$1.StaticBlock;
var StringLiteral = lib$1.StringLiteral;
var StringLiteralTypeAnnotation = lib$1.StringLiteralTypeAnnotation;
var StringTypeAnnotation = lib$1.StringTypeAnnotation;
var Super = lib$1.Super;
var SwitchCase = lib$1.SwitchCase;
var SwitchStatement = lib$1.SwitchStatement;
var SymbolTypeAnnotation = lib$1.SymbolTypeAnnotation;
var TERMINATORLESS_TYPES = lib$1.TERMINATORLESS_TYPES;
var TSAnyKeyword = lib$1.TSAnyKeyword;
var TSArrayType = lib$1.TSArrayType;
var TSAsExpression = lib$1.TSAsExpression;
var TSBASETYPE_TYPES = lib$1.TSBASETYPE_TYPES;
var TSBigIntKeyword = lib$1.TSBigIntKeyword;
var TSBooleanKeyword = lib$1.TSBooleanKeyword;
var TSCallSignatureDeclaration = lib$1.TSCallSignatureDeclaration;
var TSConditionalType = lib$1.TSConditionalType;
var TSConstructSignatureDeclaration = lib$1.TSConstructSignatureDeclaration;
var TSConstructorType = lib$1.TSConstructorType;
var TSDeclareFunction = lib$1.TSDeclareFunction;
var TSDeclareMethod = lib$1.TSDeclareMethod;
var TSENTITYNAME_TYPES = lib$1.TSENTITYNAME_TYPES;
var TSEnumDeclaration = lib$1.TSEnumDeclaration;
var TSEnumMember = lib$1.TSEnumMember;
var TSExportAssignment = lib$1.TSExportAssignment;
var TSExpressionWithTypeArguments = lib$1.TSExpressionWithTypeArguments;
var TSExternalModuleReference = lib$1.TSExternalModuleReference;
var TSFunctionType = lib$1.TSFunctionType;
var TSImportEqualsDeclaration = lib$1.TSImportEqualsDeclaration;
var TSImportType = lib$1.TSImportType;
var TSIndexSignature = lib$1.TSIndexSignature;
var TSIndexedAccessType = lib$1.TSIndexedAccessType;
var TSInferType = lib$1.TSInferType;
var TSInterfaceBody = lib$1.TSInterfaceBody;
var TSInterfaceDeclaration = lib$1.TSInterfaceDeclaration;
var TSIntersectionType = lib$1.TSIntersectionType;
var TSIntrinsicKeyword = lib$1.TSIntrinsicKeyword;
var TSLiteralType = lib$1.TSLiteralType;
var TSMappedType = lib$1.TSMappedType;
var TSMethodSignature = lib$1.TSMethodSignature;
var TSModuleBlock = lib$1.TSModuleBlock;
var TSModuleDeclaration = lib$1.TSModuleDeclaration;
var TSNamedTupleMember = lib$1.TSNamedTupleMember;
var TSNamespaceExportDeclaration = lib$1.TSNamespaceExportDeclaration;
var TSNeverKeyword = lib$1.TSNeverKeyword;
var TSNonNullExpression = lib$1.TSNonNullExpression;
var TSNullKeyword = lib$1.TSNullKeyword;
var TSNumberKeyword = lib$1.TSNumberKeyword;
var TSObjectKeyword = lib$1.TSObjectKeyword;
var TSOptionalType = lib$1.TSOptionalType;
var TSParameterProperty = lib$1.TSParameterProperty;
var TSParenthesizedType = lib$1.TSParenthesizedType;
var TSPropertySignature = lib$1.TSPropertySignature;
var TSQualifiedName = lib$1.TSQualifiedName;
var TSRestType = lib$1.TSRestType;
var TSStringKeyword = lib$1.TSStringKeyword;
var TSSymbolKeyword = lib$1.TSSymbolKeyword;
var TSTYPEELEMENT_TYPES = lib$1.TSTYPEELEMENT_TYPES;
var TSTYPE_TYPES = lib$1.TSTYPE_TYPES;
var TSThisType = lib$1.TSThisType;
var TSTupleType = lib$1.TSTupleType;
var TSTypeAliasDeclaration = lib$1.TSTypeAliasDeclaration;
var TSTypeAnnotation = lib$1.TSTypeAnnotation;
var TSTypeAssertion = lib$1.TSTypeAssertion;
var TSTypeLiteral = lib$1.TSTypeLiteral;
var TSTypeOperator = lib$1.TSTypeOperator;
var TSTypeParameter = lib$1.TSTypeParameter;
var TSTypeParameterDeclaration = lib$1.TSTypeParameterDeclaration;
var TSTypeParameterInstantiation = lib$1.TSTypeParameterInstantiation;
var TSTypePredicate = lib$1.TSTypePredicate;
var TSTypeQuery = lib$1.TSTypeQuery;
var TSTypeReference = lib$1.TSTypeReference;
var TSUndefinedKeyword = lib$1.TSUndefinedKeyword;
var TSUnionType = lib$1.TSUnionType;
var TSUnknownKeyword = lib$1.TSUnknownKeyword;
var TSVoidKeyword = lib$1.TSVoidKeyword;
var TYPES = lib$1.TYPES;
var TaggedTemplateExpression = lib$1.TaggedTemplateExpression;
var TemplateElement = lib$1.TemplateElement;
var TemplateLiteral = lib$1.TemplateLiteral;
var ThisExpression = lib$1.ThisExpression;
var ThisTypeAnnotation = lib$1.ThisTypeAnnotation;
var ThrowStatement = lib$1.ThrowStatement;
var TopicReference = lib$1.TopicReference;
var TryStatement = lib$1.TryStatement;
var TupleExpression = lib$1.TupleExpression;
var TupleTypeAnnotation = lib$1.TupleTypeAnnotation;
var TypeAlias = lib$1.TypeAlias;
var TypeAnnotation = lib$1.TypeAnnotation;
var TypeCastExpression = lib$1.TypeCastExpression;
var TypeParameter = lib$1.TypeParameter;
var TypeParameterDeclaration = lib$1.TypeParameterDeclaration;
var TypeParameterInstantiation = lib$1.TypeParameterInstantiation;
var TypeofTypeAnnotation = lib$1.TypeofTypeAnnotation;
var UNARYLIKE_TYPES = lib$1.UNARYLIKE_TYPES;
var UNARY_OPERATORS = lib$1.UNARY_OPERATORS;
var UPDATE_OPERATORS = lib$1.UPDATE_OPERATORS;
var USERWHITESPACABLE_TYPES = lib$1.USERWHITESPACABLE_TYPES;
var UnaryExpression = lib$1.UnaryExpression;
var UnionTypeAnnotation = lib$1.UnionTypeAnnotation;
var UpdateExpression = lib$1.UpdateExpression;
var V8IntrinsicIdentifier = lib$1.V8IntrinsicIdentifier;
var VISITOR_KEYS = lib$1.VISITOR_KEYS;
var VariableDeclaration = lib$1.VariableDeclaration;
var VariableDeclarator = lib$1.VariableDeclarator;
var Variance = lib$1.Variance;
var VoidTypeAnnotation = lib$1.VoidTypeAnnotation;
var WHILE_TYPES = lib$1.WHILE_TYPES;
var WhileStatement = lib$1.WhileStatement;
var WithStatement = lib$1.WithStatement;
var YieldExpression = lib$1.YieldExpression;
var addComment = lib$1.addComment;
var addComments = lib$1.addComments;
var anyTypeAnnotation = lib$1.anyTypeAnnotation;
var appendToMemberExpression = lib$1.appendToMemberExpression;
var argumentPlaceholder = lib$1.argumentPlaceholder;
var arrayExpression = lib$1.arrayExpression;
var arrayPattern = lib$1.arrayPattern;
var arrayTypeAnnotation = lib$1.arrayTypeAnnotation;
var arrowFunctionExpression = lib$1.arrowFunctionExpression;
var assertAnyTypeAnnotation = lib$1.assertAnyTypeAnnotation;
var assertArgumentPlaceholder = lib$1.assertArgumentPlaceholder;
var assertArrayExpression = lib$1.assertArrayExpression;
var assertArrayPattern = lib$1.assertArrayPattern;
var assertArrayTypeAnnotation = lib$1.assertArrayTypeAnnotation;
var assertArrowFunctionExpression = lib$1.assertArrowFunctionExpression;
var assertAssignmentExpression = lib$1.assertAssignmentExpression;
var assertAssignmentPattern = lib$1.assertAssignmentPattern;
var assertAwaitExpression = lib$1.assertAwaitExpression;
var assertBigIntLiteral = lib$1.assertBigIntLiteral;
var assertBinary = lib$1.assertBinary;
var assertBinaryExpression = lib$1.assertBinaryExpression;
var assertBindExpression = lib$1.assertBindExpression;
var assertBlock = lib$1.assertBlock;
var assertBlockParent = lib$1.assertBlockParent;
var assertBlockStatement = lib$1.assertBlockStatement;
var assertBooleanLiteral = lib$1.assertBooleanLiteral;
var assertBooleanLiteralTypeAnnotation = lib$1.assertBooleanLiteralTypeAnnotation;
var assertBooleanTypeAnnotation = lib$1.assertBooleanTypeAnnotation;
var assertBreakStatement = lib$1.assertBreakStatement;
var assertCallExpression = lib$1.assertCallExpression;
var assertCatchClause = lib$1.assertCatchClause;
var assertClass = lib$1.assertClass;
var assertClassBody = lib$1.assertClassBody;
var assertClassDeclaration = lib$1.assertClassDeclaration;
var assertClassExpression = lib$1.assertClassExpression;
var assertClassImplements = lib$1.assertClassImplements;
var assertClassMethod = lib$1.assertClassMethod;
var assertClassPrivateMethod = lib$1.assertClassPrivateMethod;
var assertClassPrivateProperty = lib$1.assertClassPrivateProperty;
var assertClassProperty = lib$1.assertClassProperty;
var assertCompletionStatement = lib$1.assertCompletionStatement;
var assertConditional = lib$1.assertConditional;
var assertConditionalExpression = lib$1.assertConditionalExpression;
var assertContinueStatement = lib$1.assertContinueStatement;
var assertDebuggerStatement = lib$1.assertDebuggerStatement;
var assertDecimalLiteral = lib$1.assertDecimalLiteral;
var assertDeclaration = lib$1.assertDeclaration;
var assertDeclareClass = lib$1.assertDeclareClass;
var assertDeclareExportAllDeclaration = lib$1.assertDeclareExportAllDeclaration;
var assertDeclareExportDeclaration = lib$1.assertDeclareExportDeclaration;
var assertDeclareFunction = lib$1.assertDeclareFunction;
var assertDeclareInterface = lib$1.assertDeclareInterface;
var assertDeclareModule = lib$1.assertDeclareModule;
var assertDeclareModuleExports = lib$1.assertDeclareModuleExports;
var assertDeclareOpaqueType = lib$1.assertDeclareOpaqueType;
var assertDeclareTypeAlias = lib$1.assertDeclareTypeAlias;
var assertDeclareVariable = lib$1.assertDeclareVariable;
var assertDeclaredPredicate = lib$1.assertDeclaredPredicate;
var assertDecorator = lib$1.assertDecorator;
var assertDirective = lib$1.assertDirective;
var assertDirectiveLiteral = lib$1.assertDirectiveLiteral;
var assertDoExpression = lib$1.assertDoExpression;
var assertDoWhileStatement = lib$1.assertDoWhileStatement;
var assertEmptyStatement = lib$1.assertEmptyStatement;
var assertEmptyTypeAnnotation = lib$1.assertEmptyTypeAnnotation;
var assertEnumBody = lib$1.assertEnumBody;
var assertEnumBooleanBody = lib$1.assertEnumBooleanBody;
var assertEnumBooleanMember = lib$1.assertEnumBooleanMember;
var assertEnumDeclaration = lib$1.assertEnumDeclaration;
var assertEnumDefaultedMember = lib$1.assertEnumDefaultedMember;
var assertEnumMember = lib$1.assertEnumMember;
var assertEnumNumberBody = lib$1.assertEnumNumberBody;
var assertEnumNumberMember = lib$1.assertEnumNumberMember;
var assertEnumStringBody = lib$1.assertEnumStringBody;
var assertEnumStringMember = lib$1.assertEnumStringMember;
var assertEnumSymbolBody = lib$1.assertEnumSymbolBody;
var assertExistsTypeAnnotation = lib$1.assertExistsTypeAnnotation;
var assertExportAllDeclaration = lib$1.assertExportAllDeclaration;
var assertExportDeclaration = lib$1.assertExportDeclaration;
var assertExportDefaultDeclaration = lib$1.assertExportDefaultDeclaration;
var assertExportDefaultSpecifier = lib$1.assertExportDefaultSpecifier;
var assertExportNamedDeclaration = lib$1.assertExportNamedDeclaration;
var assertExportNamespaceSpecifier = lib$1.assertExportNamespaceSpecifier;
var assertExportSpecifier = lib$1.assertExportSpecifier;
var assertExpression = lib$1.assertExpression;
var assertExpressionStatement = lib$1.assertExpressionStatement;
var assertExpressionWrapper = lib$1.assertExpressionWrapper;
var assertFile = lib$1.assertFile;
var assertFlow = lib$1.assertFlow;
var assertFlowBaseAnnotation = lib$1.assertFlowBaseAnnotation;
var assertFlowDeclaration = lib$1.assertFlowDeclaration;
var assertFlowPredicate = lib$1.assertFlowPredicate;
var assertFlowType = lib$1.assertFlowType;
var assertFor = lib$1.assertFor;
var assertForInStatement = lib$1.assertForInStatement;
var assertForOfStatement = lib$1.assertForOfStatement;
var assertForStatement = lib$1.assertForStatement;
var assertForXStatement = lib$1.assertForXStatement;
var assertFunction = lib$1.assertFunction;
var assertFunctionDeclaration = lib$1.assertFunctionDeclaration;
var assertFunctionExpression = lib$1.assertFunctionExpression;
var assertFunctionParent = lib$1.assertFunctionParent;
var assertFunctionTypeAnnotation = lib$1.assertFunctionTypeAnnotation;
var assertFunctionTypeParam = lib$1.assertFunctionTypeParam;
var assertGenericTypeAnnotation = lib$1.assertGenericTypeAnnotation;
var assertIdentifier = lib$1.assertIdentifier;
var assertIfStatement = lib$1.assertIfStatement;
var assertImmutable = lib$1.assertImmutable;
var assertImport = lib$1.assertImport;
var assertImportAttribute = lib$1.assertImportAttribute;
var assertImportDeclaration = lib$1.assertImportDeclaration;
var assertImportDefaultSpecifier = lib$1.assertImportDefaultSpecifier;
var assertImportNamespaceSpecifier = lib$1.assertImportNamespaceSpecifier;
var assertImportSpecifier = lib$1.assertImportSpecifier;
var assertIndexedAccessType = lib$1.assertIndexedAccessType;
var assertInferredPredicate = lib$1.assertInferredPredicate;
var assertInterfaceDeclaration = lib$1.assertInterfaceDeclaration;
var assertInterfaceExtends = lib$1.assertInterfaceExtends;
var assertInterfaceTypeAnnotation = lib$1.assertInterfaceTypeAnnotation;
var assertInterpreterDirective = lib$1.assertInterpreterDirective;
var assertIntersectionTypeAnnotation = lib$1.assertIntersectionTypeAnnotation;
var assertJSX = lib$1.assertJSX;
var assertJSXAttribute = lib$1.assertJSXAttribute;
var assertJSXClosingElement = lib$1.assertJSXClosingElement;
var assertJSXClosingFragment = lib$1.assertJSXClosingFragment;
var assertJSXElement = lib$1.assertJSXElement;
var assertJSXEmptyExpression = lib$1.assertJSXEmptyExpression;
var assertJSXExpressionContainer = lib$1.assertJSXExpressionContainer;
var assertJSXFragment = lib$1.assertJSXFragment;
var assertJSXIdentifier = lib$1.assertJSXIdentifier;
var assertJSXMemberExpression = lib$1.assertJSXMemberExpression;
var assertJSXNamespacedName = lib$1.assertJSXNamespacedName;
var assertJSXOpeningElement = lib$1.assertJSXOpeningElement;
var assertJSXOpeningFragment = lib$1.assertJSXOpeningFragment;
var assertJSXSpreadAttribute = lib$1.assertJSXSpreadAttribute;
var assertJSXSpreadChild = lib$1.assertJSXSpreadChild;
var assertJSXText = lib$1.assertJSXText;
var assertLVal = lib$1.assertLVal;
var assertLabeledStatement = lib$1.assertLabeledStatement;
var assertLiteral = lib$1.assertLiteral;
var assertLogicalExpression = lib$1.assertLogicalExpression;
var assertLoop = lib$1.assertLoop;
var assertMemberExpression = lib$1.assertMemberExpression;
var assertMetaProperty = lib$1.assertMetaProperty;
var assertMethod = lib$1.assertMethod;
var assertMixedTypeAnnotation = lib$1.assertMixedTypeAnnotation;
var assertModuleDeclaration = lib$1.assertModuleDeclaration;
var assertModuleExpression = lib$1.assertModuleExpression;
var assertModuleSpecifier = lib$1.assertModuleSpecifier;
var assertNewExpression = lib$1.assertNewExpression;
var assertNode = lib$1.assertNode;
var assertNoop = lib$1.assertNoop;
var assertNullLiteral = lib$1.assertNullLiteral;
var assertNullLiteralTypeAnnotation = lib$1.assertNullLiteralTypeAnnotation;
var assertNullableTypeAnnotation = lib$1.assertNullableTypeAnnotation;
var assertNumberLiteral = lib$1.assertNumberLiteral;
var assertNumberLiteralTypeAnnotation = lib$1.assertNumberLiteralTypeAnnotation;
var assertNumberTypeAnnotation = lib$1.assertNumberTypeAnnotation;
var assertNumericLiteral = lib$1.assertNumericLiteral;
var assertObjectExpression = lib$1.assertObjectExpression;
var assertObjectMember = lib$1.assertObjectMember;
var assertObjectMethod = lib$1.assertObjectMethod;
var assertObjectPattern = lib$1.assertObjectPattern;
var assertObjectProperty = lib$1.assertObjectProperty;
var assertObjectTypeAnnotation = lib$1.assertObjectTypeAnnotation;
var assertObjectTypeCallProperty = lib$1.assertObjectTypeCallProperty;
var assertObjectTypeIndexer = lib$1.assertObjectTypeIndexer;
var assertObjectTypeInternalSlot = lib$1.assertObjectTypeInternalSlot;
var assertObjectTypeProperty = lib$1.assertObjectTypeProperty;
var assertObjectTypeSpreadProperty = lib$1.assertObjectTypeSpreadProperty;
var assertOpaqueType = lib$1.assertOpaqueType;
var assertOptionalCallExpression = lib$1.assertOptionalCallExpression;
var assertOptionalIndexedAccessType = lib$1.assertOptionalIndexedAccessType;
var assertOptionalMemberExpression = lib$1.assertOptionalMemberExpression;
var assertParenthesizedExpression = lib$1.assertParenthesizedExpression;
var assertPattern = lib$1.assertPattern;
var assertPatternLike = lib$1.assertPatternLike;
var assertPipelineBareFunction = lib$1.assertPipelineBareFunction;
var assertPipelinePrimaryTopicReference = lib$1.assertPipelinePrimaryTopicReference;
var assertPipelineTopicExpression = lib$1.assertPipelineTopicExpression;
var assertPlaceholder = lib$1.assertPlaceholder;
var assertPrivate = lib$1.assertPrivate;
var assertPrivateName = lib$1.assertPrivateName;
var assertProgram = lib$1.assertProgram;
var assertProperty = lib$1.assertProperty;
var assertPureish = lib$1.assertPureish;
var assertQualifiedTypeIdentifier = lib$1.assertQualifiedTypeIdentifier;
var assertRecordExpression = lib$1.assertRecordExpression;
var assertRegExpLiteral = lib$1.assertRegExpLiteral;
var assertRegexLiteral = lib$1.assertRegexLiteral;
var assertRestElement = lib$1.assertRestElement;
var assertRestProperty = lib$1.assertRestProperty;
var assertReturnStatement = lib$1.assertReturnStatement;
var assertScopable = lib$1.assertScopable;
var assertSequenceExpression = lib$1.assertSequenceExpression;
var assertSpreadElement = lib$1.assertSpreadElement;
var assertSpreadProperty = lib$1.assertSpreadProperty;
var assertStatement = lib$1.assertStatement;
var assertStaticBlock = lib$1.assertStaticBlock;
var assertStringLiteral = lib$1.assertStringLiteral;
var assertStringLiteralTypeAnnotation = lib$1.assertStringLiteralTypeAnnotation;
var assertStringTypeAnnotation = lib$1.assertStringTypeAnnotation;
var assertSuper = lib$1.assertSuper;
var assertSwitchCase = lib$1.assertSwitchCase;
var assertSwitchStatement = lib$1.assertSwitchStatement;
var assertSymbolTypeAnnotation = lib$1.assertSymbolTypeAnnotation;
var assertTSAnyKeyword = lib$1.assertTSAnyKeyword;
var assertTSArrayType = lib$1.assertTSArrayType;
var assertTSAsExpression = lib$1.assertTSAsExpression;
var assertTSBaseType = lib$1.assertTSBaseType;
var assertTSBigIntKeyword = lib$1.assertTSBigIntKeyword;
var assertTSBooleanKeyword = lib$1.assertTSBooleanKeyword;
var assertTSCallSignatureDeclaration = lib$1.assertTSCallSignatureDeclaration;
var assertTSConditionalType = lib$1.assertTSConditionalType;
var assertTSConstructSignatureDeclaration = lib$1.assertTSConstructSignatureDeclaration;
var assertTSConstructorType = lib$1.assertTSConstructorType;
var assertTSDeclareFunction = lib$1.assertTSDeclareFunction;
var assertTSDeclareMethod = lib$1.assertTSDeclareMethod;
var assertTSEntityName = lib$1.assertTSEntityName;
var assertTSEnumDeclaration = lib$1.assertTSEnumDeclaration;
var assertTSEnumMember = lib$1.assertTSEnumMember;
var assertTSExportAssignment = lib$1.assertTSExportAssignment;
var assertTSExpressionWithTypeArguments = lib$1.assertTSExpressionWithTypeArguments;
var assertTSExternalModuleReference = lib$1.assertTSExternalModuleReference;
var assertTSFunctionType = lib$1.assertTSFunctionType;
var assertTSImportEqualsDeclaration = lib$1.assertTSImportEqualsDeclaration;
var assertTSImportType = lib$1.assertTSImportType;
var assertTSIndexSignature = lib$1.assertTSIndexSignature;
var assertTSIndexedAccessType = lib$1.assertTSIndexedAccessType;
var assertTSInferType = lib$1.assertTSInferType;
var assertTSInterfaceBody = lib$1.assertTSInterfaceBody;
var assertTSInterfaceDeclaration = lib$1.assertTSInterfaceDeclaration;
var assertTSIntersectionType = lib$1.assertTSIntersectionType;
var assertTSIntrinsicKeyword = lib$1.assertTSIntrinsicKeyword;
var assertTSLiteralType = lib$1.assertTSLiteralType;
var assertTSMappedType = lib$1.assertTSMappedType;
var assertTSMethodSignature = lib$1.assertTSMethodSignature;
var assertTSModuleBlock = lib$1.assertTSModuleBlock;
var assertTSModuleDeclaration = lib$1.assertTSModuleDeclaration;
var assertTSNamedTupleMember = lib$1.assertTSNamedTupleMember;
var assertTSNamespaceExportDeclaration = lib$1.assertTSNamespaceExportDeclaration;
var assertTSNeverKeyword = lib$1.assertTSNeverKeyword;
var assertTSNonNullExpression = lib$1.assertTSNonNullExpression;
var assertTSNullKeyword = lib$1.assertTSNullKeyword;
var assertTSNumberKeyword = lib$1.assertTSNumberKeyword;
var assertTSObjectKeyword = lib$1.assertTSObjectKeyword;
var assertTSOptionalType = lib$1.assertTSOptionalType;
var assertTSParameterProperty = lib$1.assertTSParameterProperty;
var assertTSParenthesizedType = lib$1.assertTSParenthesizedType;
var assertTSPropertySignature = lib$1.assertTSPropertySignature;
var assertTSQualifiedName = lib$1.assertTSQualifiedName;
var assertTSRestType = lib$1.assertTSRestType;
var assertTSStringKeyword = lib$1.assertTSStringKeyword;
var assertTSSymbolKeyword = lib$1.assertTSSymbolKeyword;
var assertTSThisType = lib$1.assertTSThisType;
var assertTSTupleType = lib$1.assertTSTupleType;
var assertTSType = lib$1.assertTSType;
var assertTSTypeAliasDeclaration = lib$1.assertTSTypeAliasDeclaration;
var assertTSTypeAnnotation = lib$1.assertTSTypeAnnotation;
var assertTSTypeAssertion = lib$1.assertTSTypeAssertion;
var assertTSTypeElement = lib$1.assertTSTypeElement;
var assertTSTypeLiteral = lib$1.assertTSTypeLiteral;
var assertTSTypeOperator = lib$1.assertTSTypeOperator;
var assertTSTypeParameter = lib$1.assertTSTypeParameter;
var assertTSTypeParameterDeclaration = lib$1.assertTSTypeParameterDeclaration;
var assertTSTypeParameterInstantiation = lib$1.assertTSTypeParameterInstantiation;
var assertTSTypePredicate = lib$1.assertTSTypePredicate;
var assertTSTypeQuery = lib$1.assertTSTypeQuery;
var assertTSTypeReference = lib$1.assertTSTypeReference;
var assertTSUndefinedKeyword = lib$1.assertTSUndefinedKeyword;
var assertTSUnionType = lib$1.assertTSUnionType;
var assertTSUnknownKeyword = lib$1.assertTSUnknownKeyword;
var assertTSVoidKeyword = lib$1.assertTSVoidKeyword;
var assertTaggedTemplateExpression = lib$1.assertTaggedTemplateExpression;
var assertTemplateElement = lib$1.assertTemplateElement;
var assertTemplateLiteral = lib$1.assertTemplateLiteral;
var assertTerminatorless = lib$1.assertTerminatorless;
var assertThisExpression = lib$1.assertThisExpression;
var assertThisTypeAnnotation = lib$1.assertThisTypeAnnotation;
var assertThrowStatement = lib$1.assertThrowStatement;
var assertTopicReference = lib$1.assertTopicReference;
var assertTryStatement = lib$1.assertTryStatement;
var assertTupleExpression = lib$1.assertTupleExpression;
var assertTupleTypeAnnotation = lib$1.assertTupleTypeAnnotation;
var assertTypeAlias = lib$1.assertTypeAlias;
var assertTypeAnnotation = lib$1.assertTypeAnnotation;
var assertTypeCastExpression = lib$1.assertTypeCastExpression;
var assertTypeParameter = lib$1.assertTypeParameter;
var assertTypeParameterDeclaration = lib$1.assertTypeParameterDeclaration;
var assertTypeParameterInstantiation = lib$1.assertTypeParameterInstantiation;
var assertTypeofTypeAnnotation = lib$1.assertTypeofTypeAnnotation;
var assertUnaryExpression = lib$1.assertUnaryExpression;
var assertUnaryLike = lib$1.assertUnaryLike;
var assertUnionTypeAnnotation = lib$1.assertUnionTypeAnnotation;
var assertUpdateExpression = lib$1.assertUpdateExpression;
var assertUserWhitespacable = lib$1.assertUserWhitespacable;
var assertV8IntrinsicIdentifier = lib$1.assertV8IntrinsicIdentifier;
var assertVariableDeclaration = lib$1.assertVariableDeclaration;
var assertVariableDeclarator = lib$1.assertVariableDeclarator;
var assertVariance = lib$1.assertVariance;
var assertVoidTypeAnnotation = lib$1.assertVoidTypeAnnotation;
var assertWhile = lib$1.assertWhile;
var assertWhileStatement = lib$1.assertWhileStatement;
var assertWithStatement = lib$1.assertWithStatement;
var assertYieldExpression = lib$1.assertYieldExpression;
var assignmentExpression = lib$1.assignmentExpression;
var assignmentPattern = lib$1.assignmentPattern;
var awaitExpression = lib$1.awaitExpression;
var bigIntLiteral = lib$1.bigIntLiteral;
var binaryExpression = lib$1.binaryExpression;
var bindExpression = lib$1.bindExpression;
var blockStatement = lib$1.blockStatement;
var booleanLiteral = lib$1.booleanLiteral;
var booleanLiteralTypeAnnotation = lib$1.booleanLiteralTypeAnnotation;
var booleanTypeAnnotation = lib$1.booleanTypeAnnotation;
var breakStatement = lib$1.breakStatement;
var buildMatchMemberExpression = lib$1.buildMatchMemberExpression;
var callExpression = lib$1.callExpression;
var catchClause = lib$1.catchClause;
var classBody = lib$1.classBody;
var classDeclaration = lib$1.classDeclaration;
var classExpression = lib$1.classExpression;
var classImplements = lib$1.classImplements;
var classMethod = lib$1.classMethod;
var classPrivateMethod = lib$1.classPrivateMethod;
var classPrivateProperty = lib$1.classPrivateProperty;
var classProperty = lib$1.classProperty;
var clone = lib$1.clone;
var cloneDeep = lib$1.cloneDeep;
var cloneDeepWithoutLoc = lib$1.cloneDeepWithoutLoc;
var cloneNode = lib$1.cloneNode;
var cloneWithoutLoc = lib$1.cloneWithoutLoc;
var conditionalExpression = lib$1.conditionalExpression;
var continueStatement = lib$1.continueStatement;
var createFlowUnionType = lib$1.createFlowUnionType;
var createTSUnionType = lib$1.createTSUnionType;
var createTypeAnnotationBasedOnTypeof = lib$1.createTypeAnnotationBasedOnTypeof;
var createUnionTypeAnnotation = lib$1.createUnionTypeAnnotation;
var debuggerStatement = lib$1.debuggerStatement;
var decimalLiteral = lib$1.decimalLiteral;
var declareClass = lib$1.declareClass;
var declareExportAllDeclaration = lib$1.declareExportAllDeclaration;
var declareExportDeclaration = lib$1.declareExportDeclaration;
var declareFunction = lib$1.declareFunction;
var declareInterface = lib$1.declareInterface;
var declareModule = lib$1.declareModule;
var declareModuleExports = lib$1.declareModuleExports;
var declareOpaqueType = lib$1.declareOpaqueType;
var declareTypeAlias = lib$1.declareTypeAlias;
var declareVariable = lib$1.declareVariable;
var declaredPredicate = lib$1.declaredPredicate;
var decorator = lib$1.decorator;
export default __pika_web_default_export_for_treeshaking__;
var directive = lib$1.directive;
var directiveLiteral = lib$1.directiveLiteral;
var doExpression = lib$1.doExpression;
var doWhileStatement = lib$1.doWhileStatement;
var emptyStatement = lib$1.emptyStatement;
var emptyTypeAnnotation = lib$1.emptyTypeAnnotation;
var ensureBlock = lib$1.ensureBlock;
var enumBooleanBody = lib$1.enumBooleanBody;
var enumBooleanMember = lib$1.enumBooleanMember;
var enumDeclaration = lib$1.enumDeclaration;
var enumDefaultedMember = lib$1.enumDefaultedMember;
var enumNumberBody = lib$1.enumNumberBody;
var enumNumberMember = lib$1.enumNumberMember;
var enumStringBody = lib$1.enumStringBody;
var enumStringMember = lib$1.enumStringMember;
var enumSymbolBody = lib$1.enumSymbolBody;
var existsTypeAnnotation = lib$1.existsTypeAnnotation;
var exportAllDeclaration = lib$1.exportAllDeclaration;
var exportDefaultDeclaration = lib$1.exportDefaultDeclaration;
var exportDefaultSpecifier = lib$1.exportDefaultSpecifier;
var exportNamedDeclaration = lib$1.exportNamedDeclaration;
var exportNamespaceSpecifier = lib$1.exportNamespaceSpecifier;
var exportSpecifier = lib$1.exportSpecifier;
var expressionStatement = lib$1.expressionStatement;
var file = lib$1.file;
var forInStatement = lib$1.forInStatement;
var forOfStatement = lib$1.forOfStatement;
var forStatement = lib$1.forStatement;
var functionDeclaration = lib$1.functionDeclaration;
var functionExpression = lib$1.functionExpression;
var functionTypeAnnotation = lib$1.functionTypeAnnotation;
var functionTypeParam = lib$1.functionTypeParam;
var genericTypeAnnotation = lib$1.genericTypeAnnotation;
var getBindingIdentifiers = lib$1.getBindingIdentifiers;
var getOuterBindingIdentifiers = lib$1.getOuterBindingIdentifiers;
var identifier$1 = lib$1.identifier;
var ifStatement = lib$1.ifStatement;
var importAttribute = lib$1.importAttribute;
var importDeclaration = lib$1.importDeclaration;
var importDefaultSpecifier = lib$1.importDefaultSpecifier;
var importNamespaceSpecifier = lib$1.importNamespaceSpecifier;
var importSpecifier = lib$1.importSpecifier;
var indexedAccessType = lib$1.indexedAccessType;
var inferredPredicate = lib$1.inferredPredicate;
var inheritInnerComments = lib$1.inheritInnerComments;
var inheritLeadingComments = lib$1.inheritLeadingComments;
var inheritTrailingComments = lib$1.inheritTrailingComments;
var inherits = lib$1.inherits;
var inheritsComments = lib$1.inheritsComments;
var interfaceDeclaration = lib$1.interfaceDeclaration;
var interfaceExtends = lib$1.interfaceExtends;
var interfaceTypeAnnotation = lib$1.interfaceTypeAnnotation;
var interpreterDirective = lib$1.interpreterDirective;
var intersectionTypeAnnotation = lib$1.intersectionTypeAnnotation;
var is = lib$1.is;
var isAnyTypeAnnotation = lib$1.isAnyTypeAnnotation;
var isArgumentPlaceholder = lib$1.isArgumentPlaceholder;
var isArrayExpression = lib$1.isArrayExpression;
var isArrayPattern = lib$1.isArrayPattern;
var isArrayTypeAnnotation = lib$1.isArrayTypeAnnotation;
var isArrowFunctionExpression = lib$1.isArrowFunctionExpression;
var isAssignmentExpression = lib$1.isAssignmentExpression;
var isAssignmentPattern = lib$1.isAssignmentPattern;
var isAwaitExpression = lib$1.isAwaitExpression;
var isBigIntLiteral = lib$1.isBigIntLiteral;
var isBinary = lib$1.isBinary;
var isBinaryExpression = lib$1.isBinaryExpression;
var isBindExpression = lib$1.isBindExpression;
var isBinding = lib$1.isBinding;
var isBlock = lib$1.isBlock;
var isBlockParent = lib$1.isBlockParent;
var isBlockScoped = lib$1.isBlockScoped;
var isBlockStatement = lib$1.isBlockStatement;
var isBooleanLiteral = lib$1.isBooleanLiteral;
var isBooleanLiteralTypeAnnotation = lib$1.isBooleanLiteralTypeAnnotation;
var isBooleanTypeAnnotation = lib$1.isBooleanTypeAnnotation;
var isBreakStatement = lib$1.isBreakStatement;
var isCallExpression = lib$1.isCallExpression;
var isCatchClause = lib$1.isCatchClause;
var isClass = lib$1.isClass;
var isClassBody = lib$1.isClassBody;
var isClassDeclaration = lib$1.isClassDeclaration;
var isClassExpression = lib$1.isClassExpression;
var isClassImplements = lib$1.isClassImplements;
var isClassMethod = lib$1.isClassMethod;
var isClassPrivateMethod = lib$1.isClassPrivateMethod;
var isClassPrivateProperty = lib$1.isClassPrivateProperty;
var isClassProperty = lib$1.isClassProperty;
var isCompletionStatement = lib$1.isCompletionStatement;
var isConditional = lib$1.isConditional;
var isConditionalExpression = lib$1.isConditionalExpression;
var isContinueStatement = lib$1.isContinueStatement;
var isDebuggerStatement = lib$1.isDebuggerStatement;
var isDecimalLiteral = lib$1.isDecimalLiteral;
var isDeclaration = lib$1.isDeclaration;
var isDeclareClass = lib$1.isDeclareClass;
var isDeclareExportAllDeclaration = lib$1.isDeclareExportAllDeclaration;
var isDeclareExportDeclaration = lib$1.isDeclareExportDeclaration;
var isDeclareFunction = lib$1.isDeclareFunction;
var isDeclareInterface = lib$1.isDeclareInterface;
var isDeclareModule = lib$1.isDeclareModule;
var isDeclareModuleExports = lib$1.isDeclareModuleExports;
var isDeclareOpaqueType = lib$1.isDeclareOpaqueType;
var isDeclareTypeAlias = lib$1.isDeclareTypeAlias;
var isDeclareVariable = lib$1.isDeclareVariable;
var isDeclaredPredicate = lib$1.isDeclaredPredicate;
var isDecorator = lib$1.isDecorator;
var isDirective = lib$1.isDirective;
var isDirectiveLiteral = lib$1.isDirectiveLiteral;
var isDoExpression = lib$1.isDoExpression;
var isDoWhileStatement = lib$1.isDoWhileStatement;
var isEmptyStatement = lib$1.isEmptyStatement;
var isEmptyTypeAnnotation = lib$1.isEmptyTypeAnnotation;
var isEnumBody = lib$1.isEnumBody;
var isEnumBooleanBody = lib$1.isEnumBooleanBody;
var isEnumBooleanMember = lib$1.isEnumBooleanMember;
var isEnumDeclaration = lib$1.isEnumDeclaration;
var isEnumDefaultedMember = lib$1.isEnumDefaultedMember;
var isEnumMember = lib$1.isEnumMember;
var isEnumNumberBody = lib$1.isEnumNumberBody;
var isEnumNumberMember = lib$1.isEnumNumberMember;
var isEnumStringBody = lib$1.isEnumStringBody;
var isEnumStringMember = lib$1.isEnumStringMember;
var isEnumSymbolBody = lib$1.isEnumSymbolBody;
var isExistsTypeAnnotation = lib$1.isExistsTypeAnnotation;
var isExportAllDeclaration = lib$1.isExportAllDeclaration;
var isExportDeclaration = lib$1.isExportDeclaration;
var isExportDefaultDeclaration = lib$1.isExportDefaultDeclaration;
var isExportDefaultSpecifier = lib$1.isExportDefaultSpecifier;
var isExportNamedDeclaration = lib$1.isExportNamedDeclaration;
var isExportNamespaceSpecifier = lib$1.isExportNamespaceSpecifier;
var isExportSpecifier = lib$1.isExportSpecifier;
var isExpression = lib$1.isExpression;
var isExpressionStatement = lib$1.isExpressionStatement;
var isExpressionWrapper = lib$1.isExpressionWrapper;
var isFile = lib$1.isFile;
var isFlow = lib$1.isFlow;
var isFlowBaseAnnotation = lib$1.isFlowBaseAnnotation;
var isFlowDeclaration = lib$1.isFlowDeclaration;
var isFlowPredicate = lib$1.isFlowPredicate;
var isFlowType = lib$1.isFlowType;
var isFor = lib$1.isFor;
var isForInStatement = lib$1.isForInStatement;
var isForOfStatement = lib$1.isForOfStatement;
var isForStatement = lib$1.isForStatement;
var isForXStatement = lib$1.isForXStatement;
var isFunction = lib$1.isFunction;
var isFunctionDeclaration = lib$1.isFunctionDeclaration;
var isFunctionExpression = lib$1.isFunctionExpression;
var isFunctionParent = lib$1.isFunctionParent;
var isFunctionTypeAnnotation = lib$1.isFunctionTypeAnnotation;
var isFunctionTypeParam = lib$1.isFunctionTypeParam;
var isGenericTypeAnnotation = lib$1.isGenericTypeAnnotation;
var isIdentifier = lib$1.isIdentifier;
var isIfStatement = lib$1.isIfStatement;
var isImmutable = lib$1.isImmutable;
var isImport = lib$1.isImport;
var isImportAttribute = lib$1.isImportAttribute;
var isImportDeclaration = lib$1.isImportDeclaration;
var isImportDefaultSpecifier = lib$1.isImportDefaultSpecifier;
var isImportNamespaceSpecifier = lib$1.isImportNamespaceSpecifier;
var isImportSpecifier = lib$1.isImportSpecifier;
var isIndexedAccessType = lib$1.isIndexedAccessType;
var isInferredPredicate = lib$1.isInferredPredicate;
var isInterfaceDeclaration = lib$1.isInterfaceDeclaration;
var isInterfaceExtends = lib$1.isInterfaceExtends;
var isInterfaceTypeAnnotation = lib$1.isInterfaceTypeAnnotation;
var isInterpreterDirective = lib$1.isInterpreterDirective;
var isIntersectionTypeAnnotation = lib$1.isIntersectionTypeAnnotation;
var isJSX = lib$1.isJSX;
var isJSXAttribute = lib$1.isJSXAttribute;
var isJSXClosingElement = lib$1.isJSXClosingElement;
var isJSXClosingFragment = lib$1.isJSXClosingFragment;
var isJSXElement = lib$1.isJSXElement;
var isJSXEmptyExpression = lib$1.isJSXEmptyExpression;
var isJSXExpressionContainer = lib$1.isJSXExpressionContainer;
var isJSXFragment = lib$1.isJSXFragment;
var isJSXIdentifier = lib$1.isJSXIdentifier;
var isJSXMemberExpression = lib$1.isJSXMemberExpression;
var isJSXNamespacedName = lib$1.isJSXNamespacedName;
var isJSXOpeningElement = lib$1.isJSXOpeningElement;
var isJSXOpeningFragment = lib$1.isJSXOpeningFragment;
var isJSXSpreadAttribute = lib$1.isJSXSpreadAttribute;
var isJSXSpreadChild = lib$1.isJSXSpreadChild;
var isJSXText = lib$1.isJSXText;
var isLVal = lib$1.isLVal;
var isLabeledStatement = lib$1.isLabeledStatement;
var isLet = lib$1.isLet;
var isLiteral = lib$1.isLiteral;
var isLogicalExpression = lib$1.isLogicalExpression;
var isLoop = lib$1.isLoop;
var isMemberExpression = lib$1.isMemberExpression;
var isMetaProperty = lib$1.isMetaProperty;
var isMethod = lib$1.isMethod;
var isMixedTypeAnnotation = lib$1.isMixedTypeAnnotation;
var isModuleDeclaration = lib$1.isModuleDeclaration;
var isModuleExpression = lib$1.isModuleExpression;
var isModuleSpecifier = lib$1.isModuleSpecifier;
var isNewExpression = lib$1.isNewExpression;
var isNode = lib$1.isNode;
var isNodesEquivalent = lib$1.isNodesEquivalent;
var isNoop = lib$1.isNoop;
var isNullLiteral = lib$1.isNullLiteral;
var isNullLiteralTypeAnnotation = lib$1.isNullLiteralTypeAnnotation;
var isNullableTypeAnnotation = lib$1.isNullableTypeAnnotation;
var isNumberLiteral = lib$1.isNumberLiteral;
var isNumberLiteralTypeAnnotation = lib$1.isNumberLiteralTypeAnnotation;
var isNumberTypeAnnotation = lib$1.isNumberTypeAnnotation;
var isNumericLiteral = lib$1.isNumericLiteral;
var isObjectExpression = lib$1.isObjectExpression;
var isObjectMember = lib$1.isObjectMember;
var isObjectMethod = lib$1.isObjectMethod;
var isObjectPattern = lib$1.isObjectPattern;
var isObjectProperty = lib$1.isObjectProperty;
var isObjectTypeAnnotation = lib$1.isObjectTypeAnnotation;
var isObjectTypeCallProperty = lib$1.isObjectTypeCallProperty;
var isObjectTypeIndexer = lib$1.isObjectTypeIndexer;
var isObjectTypeInternalSlot = lib$1.isObjectTypeInternalSlot;
var isObjectTypeProperty = lib$1.isObjectTypeProperty;
var isObjectTypeSpreadProperty = lib$1.isObjectTypeSpreadProperty;
var isOpaqueType = lib$1.isOpaqueType;
var isOptionalCallExpression = lib$1.isOptionalCallExpression;
var isOptionalIndexedAccessType = lib$1.isOptionalIndexedAccessType;
var isOptionalMemberExpression = lib$1.isOptionalMemberExpression;
var isParenthesizedExpression = lib$1.isParenthesizedExpression;
var isPattern = lib$1.isPattern;
var isPatternLike = lib$1.isPatternLike;
var isPipelineBareFunction = lib$1.isPipelineBareFunction;
var isPipelinePrimaryTopicReference = lib$1.isPipelinePrimaryTopicReference;
var isPipelineTopicExpression = lib$1.isPipelineTopicExpression;
var isPlaceholder = lib$1.isPlaceholder;
var isPlaceholderType = lib$1.isPlaceholderType;
var isPrivate = lib$1.isPrivate;
var isPrivateName = lib$1.isPrivateName;
var isProgram = lib$1.isProgram;
var isProperty = lib$1.isProperty;
var isPureish = lib$1.isPureish;
var isQualifiedTypeIdentifier = lib$1.isQualifiedTypeIdentifier;
var isRecordExpression = lib$1.isRecordExpression;
var isReferenced = lib$1.isReferenced;
var isRegExpLiteral = lib$1.isRegExpLiteral;
var isRegexLiteral = lib$1.isRegexLiteral;
var isRestElement = lib$1.isRestElement;
var isRestProperty = lib$1.isRestProperty;
var isReturnStatement = lib$1.isReturnStatement;
var isScopable = lib$1.isScopable;
var isScope = lib$1.isScope;
var isSequenceExpression = lib$1.isSequenceExpression;
var isSpecifierDefault = lib$1.isSpecifierDefault;
var isSpreadElement = lib$1.isSpreadElement;
var isSpreadProperty = lib$1.isSpreadProperty;
var isStatement = lib$1.isStatement;
var isStaticBlock = lib$1.isStaticBlock;
var isStringLiteral = lib$1.isStringLiteral;
var isStringLiteralTypeAnnotation = lib$1.isStringLiteralTypeAnnotation;
var isStringTypeAnnotation = lib$1.isStringTypeAnnotation;
var isSuper = lib$1.isSuper;
var isSwitchCase = lib$1.isSwitchCase;
var isSwitchStatement = lib$1.isSwitchStatement;
var isSymbolTypeAnnotation = lib$1.isSymbolTypeAnnotation;
var isTSAnyKeyword = lib$1.isTSAnyKeyword;
var isTSArrayType = lib$1.isTSArrayType;
var isTSAsExpression = lib$1.isTSAsExpression;
var isTSBaseType = lib$1.isTSBaseType;
var isTSBigIntKeyword = lib$1.isTSBigIntKeyword;
var isTSBooleanKeyword = lib$1.isTSBooleanKeyword;
var isTSCallSignatureDeclaration = lib$1.isTSCallSignatureDeclaration;
var isTSConditionalType = lib$1.isTSConditionalType;
var isTSConstructSignatureDeclaration = lib$1.isTSConstructSignatureDeclaration;
var isTSConstructorType = lib$1.isTSConstructorType;
var isTSDeclareFunction = lib$1.isTSDeclareFunction;
var isTSDeclareMethod = lib$1.isTSDeclareMethod;
var isTSEntityName = lib$1.isTSEntityName;
var isTSEnumDeclaration = lib$1.isTSEnumDeclaration;
var isTSEnumMember = lib$1.isTSEnumMember;
var isTSExportAssignment = lib$1.isTSExportAssignment;
var isTSExpressionWithTypeArguments = lib$1.isTSExpressionWithTypeArguments;
var isTSExternalModuleReference = lib$1.isTSExternalModuleReference;
var isTSFunctionType = lib$1.isTSFunctionType;
var isTSImportEqualsDeclaration = lib$1.isTSImportEqualsDeclaration;
var isTSImportType = lib$1.isTSImportType;
var isTSIndexSignature = lib$1.isTSIndexSignature;
var isTSIndexedAccessType = lib$1.isTSIndexedAccessType;
var isTSInferType = lib$1.isTSInferType;
var isTSInterfaceBody = lib$1.isTSInterfaceBody;
var isTSInterfaceDeclaration = lib$1.isTSInterfaceDeclaration;
var isTSIntersectionType = lib$1.isTSIntersectionType;
var isTSIntrinsicKeyword = lib$1.isTSIntrinsicKeyword;
var isTSLiteralType = lib$1.isTSLiteralType;
var isTSMappedType = lib$1.isTSMappedType;
var isTSMethodSignature = lib$1.isTSMethodSignature;
var isTSModuleBlock = lib$1.isTSModuleBlock;
var isTSModuleDeclaration = lib$1.isTSModuleDeclaration;
var isTSNamedTupleMember = lib$1.isTSNamedTupleMember;
var isTSNamespaceExportDeclaration = lib$1.isTSNamespaceExportDeclaration;
var isTSNeverKeyword = lib$1.isTSNeverKeyword;
var isTSNonNullExpression = lib$1.isTSNonNullExpression;
var isTSNullKeyword = lib$1.isTSNullKeyword;
var isTSNumberKeyword = lib$1.isTSNumberKeyword;
var isTSObjectKeyword = lib$1.isTSObjectKeyword;
var isTSOptionalType = lib$1.isTSOptionalType;
var isTSParameterProperty = lib$1.isTSParameterProperty;
var isTSParenthesizedType = lib$1.isTSParenthesizedType;
var isTSPropertySignature = lib$1.isTSPropertySignature;
var isTSQualifiedName = lib$1.isTSQualifiedName;
var isTSRestType = lib$1.isTSRestType;
var isTSStringKeyword = lib$1.isTSStringKeyword;
var isTSSymbolKeyword = lib$1.isTSSymbolKeyword;
var isTSThisType = lib$1.isTSThisType;
var isTSTupleType = lib$1.isTSTupleType;
var isTSType = lib$1.isTSType;
var isTSTypeAliasDeclaration = lib$1.isTSTypeAliasDeclaration;
var isTSTypeAnnotation = lib$1.isTSTypeAnnotation;
var isTSTypeAssertion = lib$1.isTSTypeAssertion;
var isTSTypeElement = lib$1.isTSTypeElement;
var isTSTypeLiteral = lib$1.isTSTypeLiteral;
var isTSTypeOperator = lib$1.isTSTypeOperator;
var isTSTypeParameter = lib$1.isTSTypeParameter;
var isTSTypeParameterDeclaration = lib$1.isTSTypeParameterDeclaration;
var isTSTypeParameterInstantiation = lib$1.isTSTypeParameterInstantiation;
var isTSTypePredicate = lib$1.isTSTypePredicate;
var isTSTypeQuery = lib$1.isTSTypeQuery;
var isTSTypeReference = lib$1.isTSTypeReference;
var isTSUndefinedKeyword = lib$1.isTSUndefinedKeyword;
var isTSUnionType = lib$1.isTSUnionType;
var isTSUnknownKeyword = lib$1.isTSUnknownKeyword;
var isTSVoidKeyword = lib$1.isTSVoidKeyword;
var isTaggedTemplateExpression = lib$1.isTaggedTemplateExpression;
var isTemplateElement = lib$1.isTemplateElement;
var isTemplateLiteral = lib$1.isTemplateLiteral;
var isTerminatorless = lib$1.isTerminatorless;
var isThisExpression = lib$1.isThisExpression;
var isThisTypeAnnotation = lib$1.isThisTypeAnnotation;
var isThrowStatement = lib$1.isThrowStatement;
var isTopicReference = lib$1.isTopicReference;
var isTryStatement = lib$1.isTryStatement;
var isTupleExpression = lib$1.isTupleExpression;
var isTupleTypeAnnotation = lib$1.isTupleTypeAnnotation;
var isType = lib$1.isType;
var isTypeAlias = lib$1.isTypeAlias;
var isTypeAnnotation = lib$1.isTypeAnnotation;
var isTypeCastExpression = lib$1.isTypeCastExpression;
var isTypeParameter = lib$1.isTypeParameter;
var isTypeParameterDeclaration = lib$1.isTypeParameterDeclaration;
var isTypeParameterInstantiation = lib$1.isTypeParameterInstantiation;
var isTypeofTypeAnnotation = lib$1.isTypeofTypeAnnotation;
var isUnaryExpression = lib$1.isUnaryExpression;
var isUnaryLike = lib$1.isUnaryLike;
var isUnionTypeAnnotation = lib$1.isUnionTypeAnnotation;
var isUpdateExpression = lib$1.isUpdateExpression;
var isUserWhitespacable = lib$1.isUserWhitespacable;
var isV8IntrinsicIdentifier = lib$1.isV8IntrinsicIdentifier;
var isValidES3Identifier = lib$1.isValidES3Identifier;
var isValidIdentifier = lib$1.isValidIdentifier;
var isVar = lib$1.isVar;
var isVariableDeclaration = lib$1.isVariableDeclaration;
var isVariableDeclarator = lib$1.isVariableDeclarator;
var isVariance = lib$1.isVariance;
var isVoidTypeAnnotation = lib$1.isVoidTypeAnnotation;
var isWhile = lib$1.isWhile;
var isWhileStatement = lib$1.isWhileStatement;
var isWithStatement = lib$1.isWithStatement;
var isYieldExpression = lib$1.isYieldExpression;
var jSXAttribute = lib$1.jSXAttribute;
var jSXClosingElement = lib$1.jSXClosingElement;
var jSXClosingFragment = lib$1.jSXClosingFragment;
var jSXElement = lib$1.jSXElement;
var jSXEmptyExpression = lib$1.jSXEmptyExpression;
var jSXExpressionContainer = lib$1.jSXExpressionContainer;
var jSXFragment = lib$1.jSXFragment;
var jSXIdentifier = lib$1.jSXIdentifier;
var jSXMemberExpression = lib$1.jSXMemberExpression;
var jSXNamespacedName = lib$1.jSXNamespacedName;
var jSXOpeningElement = lib$1.jSXOpeningElement;
var jSXOpeningFragment = lib$1.jSXOpeningFragment;
var jSXSpreadAttribute = lib$1.jSXSpreadAttribute;
var jSXSpreadChild = lib$1.jSXSpreadChild;
var jSXText = lib$1.jSXText;
var jsxAttribute = lib$1.jsxAttribute;
var jsxClosingElement = lib$1.jsxClosingElement;
var jsxClosingFragment = lib$1.jsxClosingFragment;
var jsxElement = lib$1.jsxElement;
var jsxEmptyExpression = lib$1.jsxEmptyExpression;
var jsxExpressionContainer = lib$1.jsxExpressionContainer;
var jsxFragment = lib$1.jsxFragment;
var jsxIdentifier = lib$1.jsxIdentifier;
var jsxMemberExpression = lib$1.jsxMemberExpression;
var jsxNamespacedName = lib$1.jsxNamespacedName;
var jsxOpeningElement = lib$1.jsxOpeningElement;
var jsxOpeningFragment = lib$1.jsxOpeningFragment;
var jsxSpreadAttribute = lib$1.jsxSpreadAttribute;
var jsxSpreadChild = lib$1.jsxSpreadChild;
var jsxText = lib$1.jsxText;
var labeledStatement = lib$1.labeledStatement;
var logicalExpression = lib$1.logicalExpression;
var matchesPattern = lib$1.matchesPattern;
var memberExpression = lib$1.memberExpression;
var metaProperty = lib$1.metaProperty;
var mixedTypeAnnotation = lib$1.mixedTypeAnnotation;
var moduleExpression = lib$1.moduleExpression;
var newExpression = lib$1.newExpression;
var noop = lib$1.noop;
var nullLiteral = lib$1.nullLiteral;
var nullLiteralTypeAnnotation = lib$1.nullLiteralTypeAnnotation;
var nullableTypeAnnotation = lib$1.nullableTypeAnnotation;
var numberLiteral = lib$1.numberLiteral;
var numberLiteralTypeAnnotation = lib$1.numberLiteralTypeAnnotation;
var numberTypeAnnotation = lib$1.numberTypeAnnotation;
var numericLiteral = lib$1.numericLiteral;
var objectExpression = lib$1.objectExpression;
var objectMethod = lib$1.objectMethod;
var objectPattern = lib$1.objectPattern;
var objectProperty = lib$1.objectProperty;
var objectTypeAnnotation = lib$1.objectTypeAnnotation;
var objectTypeCallProperty = lib$1.objectTypeCallProperty;
var objectTypeIndexer = lib$1.objectTypeIndexer;
var objectTypeInternalSlot = lib$1.objectTypeInternalSlot;
var objectTypeProperty = lib$1.objectTypeProperty;
var objectTypeSpreadProperty = lib$1.objectTypeSpreadProperty;
var opaqueType = lib$1.opaqueType;
var optionalCallExpression = lib$1.optionalCallExpression;
var optionalIndexedAccessType = lib$1.optionalIndexedAccessType;
var optionalMemberExpression = lib$1.optionalMemberExpression;
var parenthesizedExpression = lib$1.parenthesizedExpression;
var pipelineBareFunction = lib$1.pipelineBareFunction;
var pipelinePrimaryTopicReference = lib$1.pipelinePrimaryTopicReference;
var pipelineTopicExpression = lib$1.pipelineTopicExpression;
var placeholder = lib$1.placeholder;
var prependToMemberExpression = lib$1.prependToMemberExpression;
var privateName = lib$1.privateName;
var program = lib$1.program;
var qualifiedTypeIdentifier = lib$1.qualifiedTypeIdentifier;
var react = lib$1.react;
var recordExpression = lib$1.recordExpression;
var regExpLiteral = lib$1.regExpLiteral;
var regexLiteral = lib$1.regexLiteral;
var removeComments = lib$1.removeComments;
var removeProperties = lib$1.removeProperties;
var removePropertiesDeep = lib$1.removePropertiesDeep;
var removeTypeDuplicates = lib$1.removeTypeDuplicates;
var restElement = lib$1.restElement;
var restProperty = lib$1.restProperty;
var returnStatement = lib$1.returnStatement;
var sequenceExpression = lib$1.sequenceExpression;
var shallowEqual = lib$1.shallowEqual;
var spreadElement = lib$1.spreadElement;
var spreadProperty = lib$1.spreadProperty;
var staticBlock = lib$1.staticBlock;
var stringLiteral = lib$1.stringLiteral;
var stringLiteralTypeAnnotation = lib$1.stringLiteralTypeAnnotation;
var stringTypeAnnotation = lib$1.stringTypeAnnotation;
var switchCase = lib$1.switchCase;
var switchStatement = lib$1.switchStatement;
var symbolTypeAnnotation = lib$1.symbolTypeAnnotation;
var tSAnyKeyword = lib$1.tSAnyKeyword;
var tSArrayType = lib$1.tSArrayType;
var tSAsExpression = lib$1.tSAsExpression;
var tSBigIntKeyword = lib$1.tSBigIntKeyword;
var tSBooleanKeyword = lib$1.tSBooleanKeyword;
var tSCallSignatureDeclaration = lib$1.tSCallSignatureDeclaration;
var tSConditionalType = lib$1.tSConditionalType;
var tSConstructSignatureDeclaration = lib$1.tSConstructSignatureDeclaration;
var tSConstructorType = lib$1.tSConstructorType;
var tSDeclareFunction = lib$1.tSDeclareFunction;
var tSDeclareMethod = lib$1.tSDeclareMethod;
var tSEnumDeclaration = lib$1.tSEnumDeclaration;
var tSEnumMember = lib$1.tSEnumMember;
var tSExportAssignment = lib$1.tSExportAssignment;
var tSExpressionWithTypeArguments = lib$1.tSExpressionWithTypeArguments;
var tSExternalModuleReference = lib$1.tSExternalModuleReference;
var tSFunctionType = lib$1.tSFunctionType;
var tSImportEqualsDeclaration = lib$1.tSImportEqualsDeclaration;
var tSImportType = lib$1.tSImportType;
var tSIndexSignature = lib$1.tSIndexSignature;
var tSIndexedAccessType = lib$1.tSIndexedAccessType;
var tSInferType = lib$1.tSInferType;
var tSInterfaceBody = lib$1.tSInterfaceBody;
var tSInterfaceDeclaration = lib$1.tSInterfaceDeclaration;
var tSIntersectionType = lib$1.tSIntersectionType;
var tSIntrinsicKeyword = lib$1.tSIntrinsicKeyword;
var tSLiteralType = lib$1.tSLiteralType;
var tSMappedType = lib$1.tSMappedType;
var tSMethodSignature = lib$1.tSMethodSignature;
var tSModuleBlock = lib$1.tSModuleBlock;
var tSModuleDeclaration = lib$1.tSModuleDeclaration;
var tSNamedTupleMember = lib$1.tSNamedTupleMember;
var tSNamespaceExportDeclaration = lib$1.tSNamespaceExportDeclaration;
var tSNeverKeyword = lib$1.tSNeverKeyword;
var tSNonNullExpression = lib$1.tSNonNullExpression;
var tSNullKeyword = lib$1.tSNullKeyword;
var tSNumberKeyword = lib$1.tSNumberKeyword;
var tSObjectKeyword = lib$1.tSObjectKeyword;
var tSOptionalType = lib$1.tSOptionalType;
var tSParameterProperty = lib$1.tSParameterProperty;
var tSParenthesizedType = lib$1.tSParenthesizedType;
var tSPropertySignature = lib$1.tSPropertySignature;
var tSQualifiedName = lib$1.tSQualifiedName;
var tSRestType = lib$1.tSRestType;
var tSStringKeyword = lib$1.tSStringKeyword;
var tSSymbolKeyword = lib$1.tSSymbolKeyword;
var tSThisType = lib$1.tSThisType;
var tSTupleType = lib$1.tSTupleType;
var tSTypeAliasDeclaration = lib$1.tSTypeAliasDeclaration;
var tSTypeAnnotation = lib$1.tSTypeAnnotation;
var tSTypeAssertion = lib$1.tSTypeAssertion;
var tSTypeLiteral = lib$1.tSTypeLiteral;
var tSTypeOperator = lib$1.tSTypeOperator;
var tSTypeParameter = lib$1.tSTypeParameter;
var tSTypeParameterDeclaration = lib$1.tSTypeParameterDeclaration;
var tSTypeParameterInstantiation = lib$1.tSTypeParameterInstantiation;
var tSTypePredicate = lib$1.tSTypePredicate;
var tSTypeQuery = lib$1.tSTypeQuery;
var tSTypeReference = lib$1.tSTypeReference;
var tSUndefinedKeyword = lib$1.tSUndefinedKeyword;
var tSUnionType = lib$1.tSUnionType;
var tSUnknownKeyword = lib$1.tSUnknownKeyword;
var tSVoidKeyword = lib$1.tSVoidKeyword;
var taggedTemplateExpression = lib$1.taggedTemplateExpression;
var templateElement = lib$1.templateElement;
var templateLiteral = lib$1.templateLiteral;
var thisExpression = lib$1.thisExpression;
var thisTypeAnnotation = lib$1.thisTypeAnnotation;
var throwStatement = lib$1.throwStatement;
var toBindingIdentifierName = lib$1.toBindingIdentifierName;
var toBlock = lib$1.toBlock;
var toComputedKey = lib$1.toComputedKey;
var toExpression = lib$1.toExpression;
var toIdentifier = lib$1.toIdentifier;
var toKeyAlias = lib$1.toKeyAlias;
var toSequenceExpression = lib$1.toSequenceExpression;
var toStatement = lib$1.toStatement;
var topicReference = lib$1.topicReference;
var traverse = lib$1.traverse;
var traverseFast = lib$1.traverseFast;
var tryStatement = lib$1.tryStatement;
var tsAnyKeyword = lib$1.tsAnyKeyword;
var tsArrayType = lib$1.tsArrayType;
var tsAsExpression = lib$1.tsAsExpression;
var tsBigIntKeyword = lib$1.tsBigIntKeyword;
var tsBooleanKeyword = lib$1.tsBooleanKeyword;
var tsCallSignatureDeclaration = lib$1.tsCallSignatureDeclaration;
var tsConditionalType = lib$1.tsConditionalType;
var tsConstructSignatureDeclaration = lib$1.tsConstructSignatureDeclaration;
var tsConstructorType = lib$1.tsConstructorType;
var tsDeclareFunction = lib$1.tsDeclareFunction;
var tsDeclareMethod = lib$1.tsDeclareMethod;
var tsEnumDeclaration = lib$1.tsEnumDeclaration;
var tsEnumMember = lib$1.tsEnumMember;
var tsExportAssignment = lib$1.tsExportAssignment;
var tsExpressionWithTypeArguments = lib$1.tsExpressionWithTypeArguments;
var tsExternalModuleReference = lib$1.tsExternalModuleReference;
var tsFunctionType = lib$1.tsFunctionType;
var tsImportEqualsDeclaration = lib$1.tsImportEqualsDeclaration;
var tsImportType = lib$1.tsImportType;
var tsIndexSignature = lib$1.tsIndexSignature;
var tsIndexedAccessType = lib$1.tsIndexedAccessType;
var tsInferType = lib$1.tsInferType;
var tsInterfaceBody = lib$1.tsInterfaceBody;
var tsInterfaceDeclaration = lib$1.tsInterfaceDeclaration;
var tsIntersectionType = lib$1.tsIntersectionType;
var tsIntrinsicKeyword = lib$1.tsIntrinsicKeyword;
var tsLiteralType = lib$1.tsLiteralType;
var tsMappedType = lib$1.tsMappedType;
var tsMethodSignature = lib$1.tsMethodSignature;
var tsModuleBlock = lib$1.tsModuleBlock;
var tsModuleDeclaration = lib$1.tsModuleDeclaration;
var tsNamedTupleMember = lib$1.tsNamedTupleMember;
var tsNamespaceExportDeclaration = lib$1.tsNamespaceExportDeclaration;
var tsNeverKeyword = lib$1.tsNeverKeyword;
var tsNonNullExpression = lib$1.tsNonNullExpression;
var tsNullKeyword = lib$1.tsNullKeyword;
var tsNumberKeyword = lib$1.tsNumberKeyword;
var tsObjectKeyword = lib$1.tsObjectKeyword;
var tsOptionalType = lib$1.tsOptionalType;
var tsParameterProperty = lib$1.tsParameterProperty;
var tsParenthesizedType = lib$1.tsParenthesizedType;
var tsPropertySignature = lib$1.tsPropertySignature;
var tsQualifiedName = lib$1.tsQualifiedName;
var tsRestType = lib$1.tsRestType;
var tsStringKeyword = lib$1.tsStringKeyword;
var tsSymbolKeyword = lib$1.tsSymbolKeyword;
var tsThisType = lib$1.tsThisType;
var tsTupleType = lib$1.tsTupleType;
var tsTypeAliasDeclaration = lib$1.tsTypeAliasDeclaration;
var tsTypeAnnotation = lib$1.tsTypeAnnotation;
var tsTypeAssertion = lib$1.tsTypeAssertion;
var tsTypeLiteral = lib$1.tsTypeLiteral;
var tsTypeOperator = lib$1.tsTypeOperator;
var tsTypeParameter = lib$1.tsTypeParameter;
var tsTypeParameterDeclaration = lib$1.tsTypeParameterDeclaration;
var tsTypeParameterInstantiation = lib$1.tsTypeParameterInstantiation;
var tsTypePredicate = lib$1.tsTypePredicate;
var tsTypeQuery = lib$1.tsTypeQuery;
var tsTypeReference = lib$1.tsTypeReference;
var tsUndefinedKeyword = lib$1.tsUndefinedKeyword;
var tsUnionType = lib$1.tsUnionType;
var tsUnknownKeyword = lib$1.tsUnknownKeyword;
var tsVoidKeyword = lib$1.tsVoidKeyword;
var tupleExpression = lib$1.tupleExpression;
var tupleTypeAnnotation = lib$1.tupleTypeAnnotation;
var typeAlias = lib$1.typeAlias;
var typeAnnotation = lib$1.typeAnnotation;
var typeCastExpression = lib$1.typeCastExpression;
var typeParameter = lib$1.typeParameter;
var typeParameterDeclaration = lib$1.typeParameterDeclaration;
var typeParameterInstantiation = lib$1.typeParameterInstantiation;
var typeofTypeAnnotation = lib$1.typeofTypeAnnotation;
var unaryExpression = lib$1.unaryExpression;
var unionTypeAnnotation = lib$1.unionTypeAnnotation;
var updateExpression = lib$1.updateExpression;
var v8IntrinsicIdentifier = lib$1.v8IntrinsicIdentifier;
var validate = lib$1.validate;
var valueToNode = lib$1.valueToNode;
var variableDeclaration = lib$1.variableDeclaration;
var variableDeclarator = lib$1.variableDeclarator;
var variance = lib$1.variance;
var voidTypeAnnotation = lib$1.voidTypeAnnotation;
var whileStatement = lib$1.whileStatement;
var withStatement = lib$1.withStatement;
var yieldExpression = lib$1.yieldExpression;
export { ALIAS_KEYS, ASSIGNMENT_OPERATORS, AnyTypeAnnotation, ArgumentPlaceholder, ArrayExpression, ArrayPattern, ArrayTypeAnnotation, ArrowFunctionExpression, AssignmentExpression, AssignmentPattern, AwaitExpression, BINARY_OPERATORS, BINARY_TYPES, BLOCKPARENT_TYPES, BLOCK_SCOPED_SYMBOL, BLOCK_TYPES, BOOLEAN_BINARY_OPERATORS, BOOLEAN_NUMBER_BINARY_OPERATORS, BOOLEAN_UNARY_OPERATORS, BUILDER_KEYS, BigIntLiteral, BinaryExpression, BindExpression, BlockStatement, BooleanLiteral, BooleanLiteralTypeAnnotation, BooleanTypeAnnotation, BreakStatement, CLASS_TYPES, COMMENT_KEYS, COMPARISON_BINARY_OPERATORS, COMPLETIONSTATEMENT_TYPES, CONDITIONAL_TYPES, CallExpression, CatchClause, ClassBody, ClassDeclaration, ClassExpression, ClassImplements, ClassMethod, ClassPrivateMethod, ClassPrivateProperty, ClassProperty, ConditionalExpression, ContinueStatement, DECLARATION_TYPES, DEPRECATED_KEYS, DebuggerStatement, DecimalLiteral, DeclareClass, DeclareExportAllDeclaration, DeclareExportDeclaration, DeclareFunction, DeclareInterface, DeclareModule, DeclareModuleExports, DeclareOpaqueType, DeclareTypeAlias, DeclareVariable, DeclaredPredicate, Decorator, Directive, DirectiveLiteral, DoExpression, DoWhileStatement, ENUMBODY_TYPES, ENUMMEMBER_TYPES, EQUALITY_BINARY_OPERATORS, EXPORTDECLARATION_TYPES, EXPRESSIONWRAPPER_TYPES, EXPRESSION_TYPES, EmptyStatement, EmptyTypeAnnotation, EnumBooleanBody, EnumBooleanMember, EnumDeclaration, EnumDefaultedMember, EnumNumberBody, EnumNumberMember, EnumStringBody, EnumStringMember, EnumSymbolBody, ExistsTypeAnnotation, ExportAllDeclaration, ExportDefaultDeclaration, ExportDefaultSpecifier, ExportNamedDeclaration, ExportNamespaceSpecifier, ExportSpecifier, ExpressionStatement, FLATTENABLE_KEYS, FLIPPED_ALIAS_KEYS, FLOWBASEANNOTATION_TYPES, FLOWDECLARATION_TYPES, FLOWPREDICATE_TYPES, FLOWTYPE_TYPES, FLOW_TYPES, FORXSTATEMENT_TYPES, FOR_INIT_KEYS, FOR_TYPES, FUNCTIONPARENT_TYPES, FUNCTION_TYPES, File, ForInStatement, ForOfStatement, ForStatement, FunctionDeclaration, FunctionExpression, FunctionTypeAnnotation, FunctionTypeParam, GenericTypeAnnotation, IMMUTABLE_TYPES, INHERIT_KEYS, Identifier, IfStatement, Import, ImportAttribute, ImportDeclaration, ImportDefaultSpecifier, ImportNamespaceSpecifier, ImportSpecifier, IndexedAccessType, InferredPredicate, InterfaceDeclaration, InterfaceExtends, InterfaceTypeAnnotation, InterpreterDirective, IntersectionTypeAnnotation, JSXAttribute, JSXClosingElement, JSXClosingFragment, JSXElement, JSXEmptyExpression, JSXExpressionContainer, JSXFragment, JSXIdentifier, JSXMemberExpression, JSXNamespacedName, JSXOpeningElement, JSXOpeningFragment, JSXSpreadAttribute, JSXSpreadChild, JSXText, JSX_TYPES, LITERAL_TYPES, LOGICAL_OPERATORS, LOOP_TYPES, LVAL_TYPES, LabeledStatement, LogicalExpression, METHOD_TYPES, MODULEDECLARATION_TYPES, MODULESPECIFIER_TYPES, MemberExpression, MetaProperty, MixedTypeAnnotation, ModuleExpression, NODE_FIELDS, NODE_PARENT_VALIDATIONS, NOT_LOCAL_BINDING, NUMBER_BINARY_OPERATORS, NUMBER_UNARY_OPERATORS, NewExpression, Noop, NullLiteral, NullLiteralTypeAnnotation, NullableTypeAnnotation, NumberLiteral, NumberLiteralTypeAnnotation, NumberTypeAnnotation, NumericLiteral, OBJECTMEMBER_TYPES, ObjectExpression, ObjectMethod, ObjectPattern, ObjectProperty, ObjectTypeAnnotation, ObjectTypeCallProperty, ObjectTypeIndexer, ObjectTypeInternalSlot, ObjectTypeProperty, ObjectTypeSpreadProperty, OpaqueType, OptionalCallExpression, OptionalIndexedAccessType, OptionalMemberExpression, PATTERNLIKE_TYPES, PATTERN_TYPES, PLACEHOLDERS, PLACEHOLDERS_ALIAS, PLACEHOLDERS_FLIPPED_ALIAS, PRIVATE_TYPES, PROPERTY_TYPES, PUREISH_TYPES, ParenthesizedExpression, PipelineBareFunction, PipelinePrimaryTopicReference, PipelineTopicExpression, Placeholder, PrivateName, Program, QualifiedTypeIdentifier, RecordExpression, RegExpLiteral, RegexLiteral, RestElement, RestProperty, ReturnStatement, SCOPABLE_TYPES, STATEMENT_OR_BLOCK_KEYS, STATEMENT_TYPES, STRING_UNARY_OPERATORS, SequenceExpression, SpreadElement, SpreadProperty, StaticBlock, StringLiteral, StringLiteralTypeAnnotation, StringTypeAnnotation, Super, SwitchCase, SwitchStatement, SymbolTypeAnnotation, TERMINATORLESS_TYPES, TSAnyKeyword, TSArrayType, TSAsExpression, TSBASETYPE_TYPES, TSBigIntKeyword, TSBooleanKeyword, TSCallSignatureDeclaration, TSConditionalType, TSConstructSignatureDeclaration, TSConstructorType, TSDeclareFunction, TSDeclareMethod, TSENTITYNAME_TYPES, TSEnumDeclaration, TSEnumMember, TSExportAssignment, TSExpressionWithTypeArguments, TSExternalModuleReference, TSFunctionType, TSImportEqualsDeclaration, TSImportType, TSIndexSignature, TSIndexedAccessType, TSInferType, TSInterfaceBody, TSInterfaceDeclaration, TSIntersectionType, TSIntrinsicKeyword, TSLiteralType, TSMappedType, TSMethodSignature, TSModuleBlock, TSModuleDeclaration, TSNamedTupleMember, TSNamespaceExportDeclaration, TSNeverKeyword, TSNonNullExpression, TSNullKeyword, TSNumberKeyword, TSObjectKeyword, TSOptionalType, TSParameterProperty, TSParenthesizedType, TSPropertySignature, TSQualifiedName, TSRestType, TSStringKeyword, TSSymbolKeyword, TSTYPEELEMENT_TYPES, TSTYPE_TYPES, TSThisType, TSTupleType, TSTypeAliasDeclaration, TSTypeAnnotation, TSTypeAssertion, TSTypeLiteral, TSTypeOperator, TSTypeParameter, TSTypeParameterDeclaration, TSTypeParameterInstantiation, TSTypePredicate, TSTypeQuery, TSTypeReference, TSUndefinedKeyword, TSUnionType, TSUnknownKeyword, TSVoidKeyword, TYPES, TaggedTemplateExpression, TemplateElement, TemplateLiteral, ThisExpression, ThisTypeAnnotation, ThrowStatement, TopicReference, TryStatement, TupleExpression, TupleTypeAnnotation, TypeAlias, TypeAnnotation, TypeCastExpression, TypeParameter, TypeParameterDeclaration, TypeParameterInstantiation, TypeofTypeAnnotation, UNARYLIKE_TYPES, UNARY_OPERATORS, UPDATE_OPERATORS, USERWHITESPACABLE_TYPES, UnaryExpression, UnionTypeAnnotation, UpdateExpression, V8IntrinsicIdentifier, VISITOR_KEYS, VariableDeclaration, VariableDeclarator, Variance, VoidTypeAnnotation, WHILE_TYPES, WhileStatement, WithStatement, YieldExpression, lib$1 as __moduleExports, addComment, addComments, anyTypeAnnotation, appendToMemberExpression, argumentPlaceholder, arrayExpression, arrayPattern, arrayTypeAnnotation, arrowFunctionExpression, assertAnyTypeAnnotation, assertArgumentPlaceholder, assertArrayExpression, assertArrayPattern, assertArrayTypeAnnotation, assertArrowFunctionExpression, assertAssignmentExpression, assertAssignmentPattern, assertAwaitExpression, assertBigIntLiteral, assertBinary, assertBinaryExpression, assertBindExpression, assertBlock, assertBlockParent, assertBlockStatement, assertBooleanLiteral, assertBooleanLiteralTypeAnnotation, assertBooleanTypeAnnotation, assertBreakStatement, assertCallExpression, assertCatchClause, assertClass, assertClassBody, assertClassDeclaration, assertClassExpression, assertClassImplements, assertClassMethod, assertClassPrivateMethod, assertClassPrivateProperty, assertClassProperty, assertCompletionStatement, assertConditional, assertConditionalExpression, assertContinueStatement, assertDebuggerStatement, assertDecimalLiteral, assertDeclaration, assertDeclareClass, assertDeclareExportAllDeclaration, assertDeclareExportDeclaration, assertDeclareFunction, assertDeclareInterface, assertDeclareModule, assertDeclareModuleExports, assertDeclareOpaqueType, assertDeclareTypeAlias, assertDeclareVariable, assertDeclaredPredicate, assertDecorator, assertDirective, assertDirectiveLiteral, assertDoExpression, assertDoWhileStatement, assertEmptyStatement, assertEmptyTypeAnnotation, assertEnumBody, assertEnumBooleanBody, assertEnumBooleanMember, assertEnumDeclaration, assertEnumDefaultedMember, assertEnumMember, assertEnumNumberBody, assertEnumNumberMember, assertEnumStringBody, assertEnumStringMember, assertEnumSymbolBody, assertExistsTypeAnnotation, assertExportAllDeclaration, assertExportDeclaration, assertExportDefaultDeclaration, assertExportDefaultSpecifier, assertExportNamedDeclaration, assertExportNamespaceSpecifier, assertExportSpecifier, assertExpression, assertExpressionStatement, assertExpressionWrapper, assertFile, assertFlow, assertFlowBaseAnnotation, assertFlowDeclaration, assertFlowPredicate, assertFlowType, assertFor, assertForInStatement, assertForOfStatement, assertForStatement, assertForXStatement, assertFunction, assertFunctionDeclaration, assertFunctionExpression, assertFunctionParent, assertFunctionTypeAnnotation, assertFunctionTypeParam, assertGenericTypeAnnotation, assertIdentifier, assertIfStatement, assertImmutable, assertImport, assertImportAttribute, assertImportDeclaration, assertImportDefaultSpecifier, assertImportNamespaceSpecifier, assertImportSpecifier, assertIndexedAccessType, assertInferredPredicate, assertInterfaceDeclaration, assertInterfaceExtends, assertInterfaceTypeAnnotation, assertInterpreterDirective, assertIntersectionTypeAnnotation, assertJSX, assertJSXAttribute, assertJSXClosingElement, assertJSXClosingFragment, assertJSXElement, assertJSXEmptyExpression, assertJSXExpressionContainer, assertJSXFragment, assertJSXIdentifier, assertJSXMemberExpression, assertJSXNamespacedName, assertJSXOpeningElement, assertJSXOpeningFragment, assertJSXSpreadAttribute, assertJSXSpreadChild, assertJSXText, assertLVal, assertLabeledStatement, assertLiteral, assertLogicalExpression, assertLoop, assertMemberExpression, assertMetaProperty, assertMethod, assertMixedTypeAnnotation, assertModuleDeclaration, assertModuleExpression, assertModuleSpecifier, assertNewExpression, assertNode, assertNoop, assertNullLiteral, assertNullLiteralTypeAnnotation, assertNullableTypeAnnotation, assertNumberLiteral, assertNumberLiteralTypeAnnotation, assertNumberTypeAnnotation, assertNumericLiteral, assertObjectExpression, assertObjectMember, assertObjectMethod, assertObjectPattern, assertObjectProperty, assertObjectTypeAnnotation, assertObjectTypeCallProperty, assertObjectTypeIndexer, assertObjectTypeInternalSlot, assertObjectTypeProperty, assertObjectTypeSpreadProperty, assertOpaqueType, assertOptionalCallExpression, assertOptionalIndexedAccessType, assertOptionalMemberExpression, assertParenthesizedExpression, assertPattern, assertPatternLike, assertPipelineBareFunction, assertPipelinePrimaryTopicReference, assertPipelineTopicExpression, assertPlaceholder, assertPrivate, assertPrivateName, assertProgram, assertProperty, assertPureish, assertQualifiedTypeIdentifier, assertRecordExpression, assertRegExpLiteral, assertRegexLiteral, assertRestElement, assertRestProperty, assertReturnStatement, assertScopable, assertSequenceExpression, assertSpreadElement, assertSpreadProperty, assertStatement, assertStaticBlock, assertStringLiteral, assertStringLiteralTypeAnnotation, assertStringTypeAnnotation, assertSuper, assertSwitchCase, assertSwitchStatement, assertSymbolTypeAnnotation, assertTSAnyKeyword, assertTSArrayType, assertTSAsExpression, assertTSBaseType, assertTSBigIntKeyword, assertTSBooleanKeyword, assertTSCallSignatureDeclaration, assertTSConditionalType, assertTSConstructSignatureDeclaration, assertTSConstructorType, assertTSDeclareFunction, assertTSDeclareMethod, assertTSEntityName, assertTSEnumDeclaration, assertTSEnumMember, assertTSExportAssignment, assertTSExpressionWithTypeArguments, assertTSExternalModuleReference, assertTSFunctionType, assertTSImportEqualsDeclaration, assertTSImportType, assertTSIndexSignature, assertTSIndexedAccessType, assertTSInferType, assertTSInterfaceBody, assertTSInterfaceDeclaration, assertTSIntersectionType, assertTSIntrinsicKeyword, assertTSLiteralType, assertTSMappedType, assertTSMethodSignature, assertTSModuleBlock, assertTSModuleDeclaration, assertTSNamedTupleMember, assertTSNamespaceExportDeclaration, assertTSNeverKeyword, assertTSNonNullExpression, assertTSNullKeyword, assertTSNumberKeyword, assertTSObjectKeyword, assertTSOptionalType, assertTSParameterProperty, assertTSParenthesizedType, assertTSPropertySignature, assertTSQualifiedName, assertTSRestType, assertTSStringKeyword, assertTSSymbolKeyword, assertTSThisType, assertTSTupleType, assertTSType, assertTSTypeAliasDeclaration, assertTSTypeAnnotation, assertTSTypeAssertion, assertTSTypeElement, assertTSTypeLiteral, assertTSTypeOperator, assertTSTypeParameter, assertTSTypeParameterDeclaration, assertTSTypeParameterInstantiation, assertTSTypePredicate, assertTSTypeQuery, assertTSTypeReference, assertTSUndefinedKeyword, assertTSUnionType, assertTSUnknownKeyword, assertTSVoidKeyword, assertTaggedTemplateExpression, assertTemplateElement, assertTemplateLiteral, assertTerminatorless, assertThisExpression, assertThisTypeAnnotation, assertThrowStatement, assertTopicReference, assertTryStatement, assertTupleExpression, assertTupleTypeAnnotation, assertTypeAlias, assertTypeAnnotation, assertTypeCastExpression, assertTypeParameter, assertTypeParameterDeclaration, assertTypeParameterInstantiation, assertTypeofTypeAnnotation, assertUnaryExpression, assertUnaryLike, assertUnionTypeAnnotation, assertUpdateExpression, assertUserWhitespacable, assertV8IntrinsicIdentifier, assertVariableDeclaration, assertVariableDeclarator, assertVariance, assertVoidTypeAnnotation, assertWhile, assertWhileStatement, assertWithStatement, assertYieldExpression, assignmentExpression, assignmentPattern, awaitExpression, bigIntLiteral, binaryExpression, bindExpression, blockStatement, booleanLiteral, booleanLiteralTypeAnnotation, booleanTypeAnnotation, breakStatement, buildMatchMemberExpression, callExpression, catchClause, classBody, classDeclaration, classExpression, classImplements, classMethod, classPrivateMethod, classPrivateProperty, classProperty, clone, cloneDeep, cloneDeepWithoutLoc, cloneNode, cloneWithoutLoc, conditionalExpression, continueStatement, createFlowUnionType, createTSUnionType, createTypeAnnotationBasedOnTypeof, createUnionTypeAnnotation, debuggerStatement, decimalLiteral, declareClass, declareExportAllDeclaration, declareExportDeclaration, declareFunction, declareInterface, declareModule, declareModuleExports, declareOpaqueType, declareTypeAlias, declareVariable, declaredPredicate, decorator, directive, directiveLiteral, doExpression, doWhileStatement, emptyStatement, emptyTypeAnnotation, ensureBlock, enumBooleanBody, enumBooleanMember, enumDeclaration, enumDefaultedMember, enumNumberBody, enumNumberMember, enumStringBody, enumStringMember, enumSymbolBody, existsTypeAnnotation, exportAllDeclaration, exportDefaultDeclaration, exportDefaultSpecifier, exportNamedDeclaration, exportNamespaceSpecifier, exportSpecifier, expressionStatement, file, forInStatement, forOfStatement, forStatement, functionDeclaration, functionExpression, functionTypeAnnotation, functionTypeParam, genericTypeAnnotation, getBindingIdentifiers, getOuterBindingIdentifiers, identifier$1 as identifier, ifStatement, importAttribute, importDeclaration, importDefaultSpecifier, importNamespaceSpecifier, importSpecifier, indexedAccessType, inferredPredicate, inheritInnerComments, inheritLeadingComments, inheritTrailingComments, inherits, inheritsComments, interfaceDeclaration, interfaceExtends, interfaceTypeAnnotation, interpreterDirective, intersectionTypeAnnotation, is, isAnyTypeAnnotation, isArgumentPlaceholder, isArrayExpression, isArrayPattern, isArrayTypeAnnotation, isArrowFunctionExpression, isAssignmentExpression, isAssignmentPattern, isAwaitExpression, isBigIntLiteral, isBinary, isBinaryExpression, isBindExpression, isBinding, isBlock, isBlockParent, isBlockScoped, isBlockStatement, isBooleanLiteral, isBooleanLiteralTypeAnnotation, isBooleanTypeAnnotation, isBreakStatement, isCallExpression, isCatchClause, isClass, isClassBody, isClassDeclaration, isClassExpression, isClassImplements, isClassMethod, isClassPrivateMethod, isClassPrivateProperty, isClassProperty, isCompletionStatement, isConditional, isConditionalExpression, isContinueStatement, isDebuggerStatement, isDecimalLiteral, isDeclaration, isDeclareClass, isDeclareExportAllDeclaration, isDeclareExportDeclaration, isDeclareFunction, isDeclareInterface, isDeclareModule, isDeclareModuleExports, isDeclareOpaqueType, isDeclareTypeAlias, isDeclareVariable, isDeclaredPredicate, isDecorator, isDirective, isDirectiveLiteral, isDoExpression, isDoWhileStatement, isEmptyStatement, isEmptyTypeAnnotation, isEnumBody, isEnumBooleanBody, isEnumBooleanMember, isEnumDeclaration, isEnumDefaultedMember, isEnumMember, isEnumNumberBody, isEnumNumberMember, isEnumStringBody, isEnumStringMember, isEnumSymbolBody, isExistsTypeAnnotation, isExportAllDeclaration, isExportDeclaration, isExportDefaultDeclaration, isExportDefaultSpecifier, isExportNamedDeclaration, isExportNamespaceSpecifier, isExportSpecifier, isExpression, isExpressionStatement, isExpressionWrapper, isFile, isFlow, isFlowBaseAnnotation, isFlowDeclaration, isFlowPredicate, isFlowType, isFor, isForInStatement, isForOfStatement, isForStatement, isForXStatement, isFunction, isFunctionDeclaration, isFunctionExpression, isFunctionParent, isFunctionTypeAnnotation, isFunctionTypeParam, isGenericTypeAnnotation, isIdentifier, isIfStatement, isImmutable, isImport, isImportAttribute, isImportDeclaration, isImportDefaultSpecifier, isImportNamespaceSpecifier, isImportSpecifier, isIndexedAccessType, isInferredPredicate, isInterfaceDeclaration, isInterfaceExtends, isInterfaceTypeAnnotation, isInterpreterDirective, isIntersectionTypeAnnotation, isJSX, isJSXAttribute, isJSXClosingElement, isJSXClosingFragment, isJSXElement, isJSXEmptyExpression, isJSXExpressionContainer, isJSXFragment, isJSXIdentifier, isJSXMemberExpression, isJSXNamespacedName, isJSXOpeningElement, isJSXOpeningFragment, isJSXSpreadAttribute, isJSXSpreadChild, isJSXText, isLVal, isLabeledStatement, isLet, isLiteral, isLogicalExpression, isLoop, isMemberExpression, isMetaProperty, isMethod, isMixedTypeAnnotation, isModuleDeclaration, isModuleExpression, isModuleSpecifier, isNewExpression, isNode, isNodesEquivalent, isNoop, isNullLiteral, isNullLiteralTypeAnnotation, isNullableTypeAnnotation, isNumberLiteral, isNumberLiteralTypeAnnotation, isNumberTypeAnnotation, isNumericLiteral, isObjectExpression, isObjectMember, isObjectMethod, isObjectPattern, isObjectProperty, isObjectTypeAnnotation, isObjectTypeCallProperty, isObjectTypeIndexer, isObjectTypeInternalSlot, isObjectTypeProperty, isObjectTypeSpreadProperty, isOpaqueType, isOptionalCallExpression, isOptionalIndexedAccessType, isOptionalMemberExpression, isParenthesizedExpression, isPattern, isPatternLike, isPipelineBareFunction, isPipelinePrimaryTopicReference, isPipelineTopicExpression, isPlaceholder, isPlaceholderType, isPrivate, isPrivateName, isProgram, isProperty, isPureish, isQualifiedTypeIdentifier, isRecordExpression, isReferenced, isRegExpLiteral, isRegexLiteral, isRestElement, isRestProperty, isReturnStatement, isScopable, isScope, isSequenceExpression, isSpecifierDefault, isSpreadElement, isSpreadProperty, isStatement, isStaticBlock, isStringLiteral, isStringLiteralTypeAnnotation, isStringTypeAnnotation, isSuper, isSwitchCase, isSwitchStatement, isSymbolTypeAnnotation, isTSAnyKeyword, isTSArrayType, isTSAsExpression, isTSBaseType, isTSBigIntKeyword, isTSBooleanKeyword, isTSCallSignatureDeclaration, isTSConditionalType, isTSConstructSignatureDeclaration, isTSConstructorType, isTSDeclareFunction, isTSDeclareMethod, isTSEntityName, isTSEnumDeclaration, isTSEnumMember, isTSExportAssignment, isTSExpressionWithTypeArguments, isTSExternalModuleReference, isTSFunctionType, isTSImportEqualsDeclaration, isTSImportType, isTSIndexSignature, isTSIndexedAccessType, isTSInferType, isTSInterfaceBody, isTSInterfaceDeclaration, isTSIntersectionType, isTSIntrinsicKeyword, isTSLiteralType, isTSMappedType, isTSMethodSignature, isTSModuleBlock, isTSModuleDeclaration, isTSNamedTupleMember, isTSNamespaceExportDeclaration, isTSNeverKeyword, isTSNonNullExpression, isTSNullKeyword, isTSNumberKeyword, isTSObjectKeyword, isTSOptionalType, isTSParameterProperty, isTSParenthesizedType, isTSPropertySignature, isTSQualifiedName, isTSRestType, isTSStringKeyword, isTSSymbolKeyword, isTSThisType, isTSTupleType, isTSType, isTSTypeAliasDeclaration, isTSTypeAnnotation, isTSTypeAssertion, isTSTypeElement, isTSTypeLiteral, isTSTypeOperator, isTSTypeParameter, isTSTypeParameterDeclaration, isTSTypeParameterInstantiation, isTSTypePredicate, isTSTypeQuery, isTSTypeReference, isTSUndefinedKeyword, isTSUnionType, isTSUnknownKeyword, isTSVoidKeyword, isTaggedTemplateExpression, isTemplateElement, isTemplateLiteral, isTerminatorless, isThisExpression, isThisTypeAnnotation, isThrowStatement, isTopicReference, isTryStatement, isTupleExpression, isTupleTypeAnnotation, isType, isTypeAlias, isTypeAnnotation, isTypeCastExpression, isTypeParameter, isTypeParameterDeclaration, isTypeParameterInstantiation, isTypeofTypeAnnotation, isUnaryExpression, isUnaryLike, isUnionTypeAnnotation, isUpdateExpression, isUserWhitespacable, isV8IntrinsicIdentifier, isValidES3Identifier, isValidIdentifier, isVar, isVariableDeclaration, isVariableDeclarator, isVariance, isVoidTypeAnnotation, isWhile, isWhileStatement, isWithStatement, isYieldExpression, jSXAttribute, jSXClosingElement, jSXClosingFragment, jSXElement, jSXEmptyExpression, jSXExpressionContainer, jSXFragment, jSXIdentifier, jSXMemberExpression, jSXNamespacedName, jSXOpeningElement, jSXOpeningFragment, jSXSpreadAttribute, jSXSpreadChild, jSXText, jsxAttribute, jsxClosingElement, jsxClosingFragment, jsxElement, jsxEmptyExpression, jsxExpressionContainer, jsxFragment, jsxIdentifier, jsxMemberExpression, jsxNamespacedName, jsxOpeningElement, jsxOpeningFragment, jsxSpreadAttribute, jsxSpreadChild, jsxText, labeledStatement, logicalExpression, matchesPattern, memberExpression, metaProperty, mixedTypeAnnotation, moduleExpression, newExpression, noop, nullLiteral, nullLiteralTypeAnnotation, nullableTypeAnnotation, numberLiteral, numberLiteralTypeAnnotation, numberTypeAnnotation, numericLiteral, objectExpression, objectMethod, objectPattern, objectProperty, objectTypeAnnotation, objectTypeCallProperty, objectTypeIndexer, objectTypeInternalSlot, objectTypeProperty, objectTypeSpreadProperty, opaqueType, optionalCallExpression, optionalIndexedAccessType, optionalMemberExpression, parenthesizedExpression, pipelineBareFunction, pipelinePrimaryTopicReference, pipelineTopicExpression, placeholder, prependToMemberExpression, privateName, program, qualifiedTypeIdentifier, react, recordExpression, regExpLiteral, regexLiteral, removeComments, removeProperties, removePropertiesDeep, removeTypeDuplicates, restElement, restProperty, returnStatement, sequenceExpression, shallowEqual, spreadElement, spreadProperty, staticBlock, stringLiteral, stringLiteralTypeAnnotation, stringTypeAnnotation, switchCase, switchStatement, symbolTypeAnnotation, tSAnyKeyword, tSArrayType, tSAsExpression, tSBigIntKeyword, tSBooleanKeyword, tSCallSignatureDeclaration, tSConditionalType, tSConstructSignatureDeclaration, tSConstructorType, tSDeclareFunction, tSDeclareMethod, tSEnumDeclaration, tSEnumMember, tSExportAssignment, tSExpressionWithTypeArguments, tSExternalModuleReference, tSFunctionType, tSImportEqualsDeclaration, tSImportType, tSIndexSignature, tSIndexedAccessType, tSInferType, tSInterfaceBody, tSInterfaceDeclaration, tSIntersectionType, tSIntrinsicKeyword, tSLiteralType, tSMappedType, tSMethodSignature, tSModuleBlock, tSModuleDeclaration, tSNamedTupleMember, tSNamespaceExportDeclaration, tSNeverKeyword, tSNonNullExpression, tSNullKeyword, tSNumberKeyword, tSObjectKeyword, tSOptionalType, tSParameterProperty, tSParenthesizedType, tSPropertySignature, tSQualifiedName, tSRestType, tSStringKeyword, tSSymbolKeyword, tSThisType, tSTupleType, tSTypeAliasDeclaration, tSTypeAnnotation, tSTypeAssertion, tSTypeLiteral, tSTypeOperator, tSTypeParameter, tSTypeParameterDeclaration, tSTypeParameterInstantiation, tSTypePredicate, tSTypeQuery, tSTypeReference, tSUndefinedKeyword, tSUnionType, tSUnknownKeyword, tSVoidKeyword, taggedTemplateExpression, templateElement, templateLiteral, thisExpression, thisTypeAnnotation, throwStatement, toBindingIdentifierName, toBlock, toComputedKey, toExpression, toIdentifier, toKeyAlias, toSequenceExpression, toStatement, topicReference, traverse, traverseFast, tryStatement, tsAnyKeyword, tsArrayType, tsAsExpression, tsBigIntKeyword, tsBooleanKeyword, tsCallSignatureDeclaration, tsConditionalType, tsConstructSignatureDeclaration, tsConstructorType, tsDeclareFunction, tsDeclareMethod, tsEnumDeclaration, tsEnumMember, tsExportAssignment, tsExpressionWithTypeArguments, tsExternalModuleReference, tsFunctionType, tsImportEqualsDeclaration, tsImportType, tsIndexSignature, tsIndexedAccessType, tsInferType, tsInterfaceBody, tsInterfaceDeclaration, tsIntersectionType, tsIntrinsicKeyword, tsLiteralType, tsMappedType, tsMethodSignature, tsModuleBlock, tsModuleDeclaration, tsNamedTupleMember, tsNamespaceExportDeclaration, tsNeverKeyword, tsNonNullExpression, tsNullKeyword, tsNumberKeyword, tsObjectKeyword, tsOptionalType, tsParameterProperty, tsParenthesizedType, tsPropertySignature, tsQualifiedName, tsRestType, tsStringKeyword, tsSymbolKeyword, tsThisType, tsTupleType, tsTypeAliasDeclaration, tsTypeAnnotation, tsTypeAssertion, tsTypeLiteral, tsTypeOperator, tsTypeParameter, tsTypeParameterDeclaration, tsTypeParameterInstantiation, tsTypePredicate, tsTypeQuery, tsTypeReference, tsUndefinedKeyword, tsUnionType, tsUnknownKeyword, tsVoidKeyword, tupleExpression, tupleTypeAnnotation, typeAlias, typeAnnotation, typeCastExpression, typeParameter, typeParameterDeclaration, typeParameterInstantiation, typeofTypeAnnotation, unaryExpression, unionTypeAnnotation, updateExpression, v8IntrinsicIdentifier, validate, valueToNode, variableDeclaration, variableDeclarator, variance, voidTypeAnnotation, whileStatement, withStatement, yieldExpression };

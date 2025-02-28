import { type BasicTarget, getTargetElement, type TargetValue } from './domTarget';

// 检查目标元素是否在影子DOM中，如果是，则返回影子DOM的根节点，否则返回文档对象。
function checkIfAllInShadow(targets: BasicTarget[]): boolean {
  return targets.every((item) => {
    const targetElement = getTargetElement(item);
    if (!targetElement) return false;
    // @ts-ignore
    if (targetElement.getRootNode() instanceof ShadowRoot) return true;
  });
}

// 获取影子节点
function getShadow(node: TargetValue<Element>) {
  if (!node) {
    return document;
  }
  return node.getRootNode();
}

// 根据传入目标元素或元素数组，返回document或影子DOM根节点
export default function getDocumentOrShadow(target: BasicTarget | BasicTarget[]): Document | Node {
  if (!target || !document.getRootNode) {
    return document;
  }

  const targets = Array.isArray(target) ? target : [target];

  if (checkIfAllInShadow(targets)) {
    return getShadow(getTargetElement(targets[0]));
  }

  return document;
}

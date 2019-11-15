export function parseDom(html) {
  let ele = document.createElement('div')
  ele.innerHTML = html
  return ele.childNodes[0]
}

export function isElement(obj) {
  return !!(obj && obj.nodeType == 1);
}
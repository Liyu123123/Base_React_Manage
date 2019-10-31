function totree(metadata, id = 'id', pid = 'pid', children = 'children') {
  if (!metadata || metadata.length <= 0) {
    return []
  }
  let map = toMap(metadata, pid)
  let arr = []
  let rootIndex
  for (let k in map) {
    arr.push(k)
  }
  rootIndex = Math.min.apply(Math, arr)
  return findNodes(map[rootIndex], map, id, children)
}

function toMap(metadata, pid) {
  let map = {}
  // metadata &&
  metadata.forEach(val => {
    if (!map.hasOwnProperty(val[pid])) {
      map[val[pid]] = [val]
    } else {
      map[val[pid]].push(val)
    }
  })
  return map
}

function findNodes(arr, map, id, children) {
  // arr &&
  arr.forEach(val => {
    if (map[val[id]]) {
      // 存在子节点
      val[children] = map[val[id]]
      findNodes(val[children], map, id, children)
    }
  })
  return arr
}

export default totree

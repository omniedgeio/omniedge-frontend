export interface PageMapItem {
  name: string
  route: string
  path: string
  parent?: PageMapItem
  children?: PageMapItem[]
}


export function getManifestConfig(data: string): PageMapItem {
  const obj = JSON.parse(data)
  const page: PageMapItem = {
    name: obj["name"],
    route: obj["route"],
    path: obj["path"],
    children: []
  }
  enrichPage(page, obj["children"])

  return page
}


export function pageMapItemToMap(pageMapItem: PageMapItem, map: Map<string, PageMapItem>) {
  map.set(pageMapItem.route, pageMapItem)
  pageMapItem.children?.forEach(it =>
    pageMapItemToMap(it, map))
}

function enrichPage(page: PageMapItem, item: []) {
  if (item) {
    item.forEach((element) => {
      const p: PageMapItem = {
        name: element["name"],
        route: page.route + "/" + element["route"],
        path: element["path"],
      }
      if (page.children) {
        page.children.push(p)
      }
      if (element["children"]) {
        p.children = []
        enrichPage(p, element["children"])
      }
    })
  }
}

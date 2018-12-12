export default {
  viewerFun (state, info) {
    state.viewer = info
  },
  pickIdFun(state, info){
    state.pickId = info
    state.clickType = info.clickType
  },
  clickTypeFun(state, info){
    state.clickType = info
  },
  clearMap(state, info){
    // let layer = state.viewer.imageryLayers.get(info)
    // if (layer !== undefined) {
    //   state.viewer.imageryLayers.remove(layer)
    // }
    state.viewer.entities.removeAll()
    state.viewer.dataSources.removeAll()
  },
  // echart
  chartListFun(state, info){
    state.chartList.push(info)
  }
}

interface IGridParams {
    cols: number
    rows: number
}

interface ICellMethods {
    isVisible: (index: number) => boolean
    isActive: (index: number) => boolean
}